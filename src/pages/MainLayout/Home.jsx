import {
    Card,
    Row,
    Typography,
    Scheduler,
    Col,
    Profile,
    Button,
    TextField,
    Select,
    Drawer,
    DatePicker,
    Icon,
    BottomSheet
} from "../../components/UI/index.jsx"
import {useEffect, useState} from "react";
import ShiftCard from "../../components/ShiftCard.jsx";
import {useEmployeesContext} from "../../context/EmployeesContext.jsx";
import {fadeInOutAnimation} from "../../components/UI/Utils/utils.js";
import {getRoles} from "../../services/Roles/Roles.js";
import style from "./Home.module.scss";
import {AnimatePresence} from "framer-motion";
import ShiftSheet from "../../components/BottomSheets/ShiftSheet.jsx";
import Role from '../../components/Role/Role.jsx';
import Employee from '../../components/Employee/Employee';


const shiftsTemplates = [
    {time: '9:00 - 11:00', position: 'Chef', shift: 'Morning'},
    {time: '9:00 - 15:00', position: 'Host', shift: 'Morning'},
    {time: '9:00 - 16:00', position: 'Waiter', shift: 'Morning'},
    {time: '16:00 - 21:00', position: 'Bartender', shift: 'Evening'},
    {time: '9:00 - 13:00', position: 'Manager', shift: 'Morning'},
]

const yearsList = [
    {label: "2012", value: "2012"},
    {label: "2013", value: "2013"},
    {label: "2014", value: "2014"},
    {label: "2015", value: "2015"},
    {label: "2016", value: "2016"},
    {label: "2017", value: "2017"},
    {label: "2018", value: "2018"},
    {label: "2019", value: "2019"},
    {label: "2020", value: "2020"},
    {label: "2021", value: "2021"},
    {label: "2022", value: "2022"},
    {label: "2023", value: "2023"},
    {label: "2024", value: "2024"},
    {label: "2025", value: "2025"},
    {label: "2026", value: "2026"},
    {label: "2027", value: "2027"},
    {label: "2028", value: "2028"},
    {label: "2029", value: "2029"},
    {label: "2030", value: "2030"},
    {label: "2031", value: "2031"},
    {label: "2032", value: "2032"},
]

const employeesList = [
    {name: 'Suzanna Vatik', position: 'Waiter', selected: false},
    {name: 'Ross Geller', position: 'Chef', selected: false},
    {name: 'Suffi Gussee', position: 'Bartender', selected: false},
    {name: 'Luna Arenna', position: 'Host', selected: false},
    {name: 'Skyler Kaufman', position: 'Bartender', selected: false},
    {name: 'Soi Rio', position: 'Waiter', selected: false},
    {name: 'Sofia Ashtamker', position: 'Waiter', selected: false},
    {name: 'Fred Vereceloni', position: 'Waiter', selected: false},
]

const roleColorsOptions = [
    {label: "Maximum Yellow", value: "#EEF33D"},
    {label: "Light Sea Green", value: "#1CB2B2"},
    {label: "Brilliant Lavender", value: "#FFC6FF"},
    {label: "Ceil", value: "#998FD7"},
    {label: "Waterspou", value: "#9BF6FF"},
    {label: "Rajah", value: "#FFB864"}
]

const Home = () => {
    const [isDrawerOpen, setIsDrawerOpen]                       = useState(false)
    const [isRolesSheetOpen, setIsRolesSheetOpen]               = useState(false)
    const [isShiftEditingSheetOpen, setIsShiftEditingSheetOpen] = useState(false)
    const [isLoading, setIsLoading]                             = useState(true)
    const [rolesList, setRolesList]                             = useState([])
    const {employees, addShift, publishShifts}                  = useEmployeesContext()
    const [filteredEmployees, setFilteredEmployees]             = useState(employees)
    const [search, setSearch]                                   = useState('')
    const [startDate, setStartDate]                             = useState(new Date().toISOString())
    const [selectedShiftTemplate, setSelectedShiftTemplate]     = useState()
    const [isPublish, setIsPublish]                             = useState(true)
    const [shiftToEditPayload, setShiftToEditPayload]           = useState()
    const [filteredRoles, setFilteredRoles]                     = useState()
    const [selectedRole, setSelectedRole]                       = useState({})
    const [employeesList, setEmployeesList]                     = useState([...employees])
    const [filteredEmployeesList, setFilteredEmployeesList]     = useState(employeesList)

    const handleSearchEmployees = (searchValue) => {
        const filtered = employees.filter(({firstName, lastName}) => {
            return `${firstName} ${lastName}`.toLowerCase().includes(searchValue.toLowerCase())
        })

        setFilteredEmployees(filtered)
    }

    const handleSearchRoles = (searchValue) => {
        const filtered = rolesList.filter(role => role.position.toLowerCase().includes(searchValue.toLowerCase()))
        setFilteredRoles(filtered)
    }

    const handleSearchEmployeesList = (searchValue) => {
        const filtered = employeesList.filter(employee => employee.name.toLowerCase().includes(searchValue.toLowerCase()))
        setFilteredEmployeesList(filtered);
    }

    const handlePublish = () => {
        publishShifts()
        setIsPublish(true)
    }

    const handleSelectShiftTemplate = (shiftTemplate) => {
        setSelectedShiftTemplate(shiftTemplate)
    }

    const handleAddingShift = ({id, position}, date) => {
        if (selectedShiftTemplate) {
            if (selectedShiftTemplate?.position === position) {
                const employees = addShift(id, date, selectedShiftTemplate)
                setFilteredEmployees(employees)
                setIsPublish(false)
                setSelectedShiftTemplate(undefined)
            }
        }
    }

    useEffect(() => {
        (async () => {
            const roles = await getRoles()
            setRolesList(roles)
            setFilteredRoles(roles)
            setIsLoading(false)
        })()
    }, [])

    useEffect(() => {
        handleSearchEmployees(search)
    }, [employees])

    return isLoading ? <div>Loading...</div> : (
        <Col
            initial={false}
            {...fadeInOutAnimation}
            className="h-full w-full">

            <AnimatePresence>
                {isRolesSheetOpen && (
                    <BottomSheet onBackdropClick={() => setIsRolesSheetOpen(false)}>
                        <Row>
                            <Col className="font-medium ml-86 mt-90">
                                <Row>
                                    <Typography
                                        className="font-medium"
                                        color="black"
                                        fontWeight="500"
                                        variant="h5">
                                        Role
                                    </Typography>
                                    <Icon className="ml-22"
                                          color="#515151"
                                          size={12}>
                                        <IconIonChevronRight/>
                                    </Icon>
                                    <TextField
                                        type="search"
                                        beforeIcon={<IconRiSearchLine/>}
                                        placeholder='Search'
                                        onChange={(event) => handleSearchRoles(event.target.value)}
                                        beforeIconSize={20}
                                        width={266}
                                        height={40}
                                        radius={32}
                                        className="ml-36"
                                    >
                                    </TextField>
                                </Row>
                                <Row className="mt-36">
                                    <Button width="106px" height="40px"
                                            variant="primary">
                                        <Typography variant={'button1'} color="white">
                                            Add Role
                                        </Typography>
                                    </Button>
                                </Row>
                                <div className="mt-38">
                                    {filteredRoles.map((role) => (
                                        <Row key={role.id} className="mt-14">
                                            <Role
                                                title={role.title}
                                                roleColor={role.color}
                                                selected={role.title === selectedRole.title}
                                                onSelect={() => setSelectedRole(role)}/>
                                        </Row>
                                    ))}
                                </div>
                            </Col>
                            {Object.keys(selectedRole).length > 0 && (<Col>
                                <div className="ml-74 mt-90">
                                    <Row className="ml-92">
                                        <Typography
                                            className="font-medium pl-10 pr-8"
                                            color="black"
                                            fontWeight="500"
                                            variant="h5">
                                            Title
                                        </Typography>
                                        <Icon className="ml-12"
                                              color="#515151"
                                              size={12}>
                                            <IconIonChevronRight/>
                                        </Icon>
                                        <Typography
                                            className="font-medium ml-14"
                                            color="black"
                                            fontWeight="500"
                                            variant="h5">
                                            {selectedRole.title}
                                        </Typography>
                                    </Row>
                                    <Row className="ml-92 mt-68">
                                        <Col>
                                            <Typography
                                                className="font-medium pl-10 pr-8"
                                                color="black"
                                                fontWeight="500"
                                                variant="h5">
                                                Color
                                            </Typography>
                                            <Select className="mt-20"
                                                    blurInputOnSelect={true}
                                                    isSearchable={false}
                                                    menuWidth={180}
                                                    height={40}
                                                    singleValueWeight={600}
                                                    singleValueSize={16}
                                                    singleValueFontFamily={'Inter'}
                                                    singleValueSpacing={'0.38px'}
                                                    singleValueColor={'#000000'}
                                                    dropdownIconColor={'#94a3b8'}
                                                    value={"red"}
                                                    onChange={() => {
                                                    }}
                                                    options={roleColorsOptions}/>
                                        </Col>
                                        <Col className="ml-70">
                                            <Typography
                                                className="font-medium pl-10 pr-8"
                                                color="black"
                                                fontWeight="500"
                                                variant="h5">
                                                Employees
                                            </Typography>
                                            <Row>
                                                <TextField
                                                    type="search"
                                                    beforeIcon={<IconRiSearchLine/>}
                                                    placeholder='Search Employees'
                                                    onChange={(event) => handleSearchEmployeesList(event.target.value)}
                                                    beforeIconSize={20}
                                                    width={266}
                                                    height={40}
                                                    radius={32}
                                                    className="ml-20"
                                                >
                                                </TextField>
                                            </Row>
                                            <div style={{
                                                borderColor: "black", borderWidth: "1px", borderStyle: "solid"
                                            }}>
                                                {filteredEmployeesList.map((e) => (
                                                    <Row key={e.id} className="mt-14">
                                                        <Employee
                                                            name={`${e.firstName} ${e.lastName}`}
                                                            position={e.position}
                                                            selected={e.position == selectedRole.title}
                                                            onSelect={() => {
                                                                setEmployeesList(prev => {
                                                                    return prev.map(prevEmployee => {
                                                                        if (prevEmployee.name === e.name) {
                                                                            if (e.position === selectedRole.position) {
                                                                                return {
                                                                                    ...e,
                                                                                    position: employees.find(em => em.name === e.name).position
                                                                                }
                                                                            }
                                                                            return {
                                                                                ...e, position: selectedRole.position
                                                                            }
                                                                        }
                                                                        return prevEmployee
                                                                    })
                                                                })
                                                            }}
                                                        />
                                                    </Row>
                                                ))}
                                            </div>
                                        </Col>
                                        <Col>
                                            <Button width="125px" height="40px"
                                                    variant="primary" className="ml-588 mt-274">
                                                <Typography variant={'button1'} color="white">
                                                    Save Changes
                                                </Typography>
                                            </Button>
                                            <Button width="125px" height="40px"
                                                    variant="default" outlined className="ml-16">
                                                <Row className="justify-center align-center">
                                                    <Typography variant={'button1'} color="black">
                                                        Delete Role
                                                    </Typography>
                                                    <Icon className="ml-4"
                                                          color="#515151"
                                                          size={18}>
                                                        <IconFluentDelete20Regular/>
                                                    </Icon>
                                                </Row>
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>)}
                        </Row>
                    </BottomSheet>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isShiftEditingSheetOpen && (
                    <BottomSheet
                        height={480}
                        onBackdropClick={() => setIsShiftEditingSheetOpen(false)}>
                        <ShiftSheet
                            employee={shiftToEditPayload?.employee}
                            initialData={shiftToEditPayload?.shift}
                            date={shiftToEditPayload?.date}
                        />
                    </BottomSheet>
                )}
            </AnimatePresence>


            <Drawer
                labelContent="Shifts Templates"
                position="right"
                top={185}
                height={600}
                onLabelClick={() => setIsDrawerOpen(!isDrawerOpen)}
                isOpen={isDrawerOpen}>

                <Typography className="pl-24 pr-14 pt-14 pb-2"
                            spacing={0.1}
                            variant={'button1'}
                            color={'#515151'}>
                    Drag and drop temlates
                    to the schedule
                </Typography>

                {shiftsTemplates.map(({shift, position, time}, index) => (
                    <Col
                        className="ml-18 mr-10 mt-22"
                        style={{height: 56}}
                        key={index}>
                        <ShiftCard
                            className="cursor-pointer"
                            onClick={() => handleSelectShiftTemplate({position, time, shift})}
                            shift={shift}
                            positionColor={rolesList[rolesList.findIndex(role => role.title === position)].color}
                            employeePosition={position}
                            time={time}
                            key={index}/>
                    </Col>
                ))}
            </Drawer>

            <Card
                className="flex-row mt-24 ml-60 mr-80 pl-20 align-center justify-between"
                height={68}
                width="auto">
                <Typography
                    className="font-bold"
                    variant={'h4'}>
                    Bella Italia
                </Typography>

                <Col className="pr-26">
                    <Select
                        blurInputOnSelect={true}
                        isSelectable={false}
                        isSearchable={false}
                        menuAnchorPoint="right"
                        menuWidth={220}
                        onChange={(option) => option.action()}
                        options={[
                            {
                                label:  "Edit tasks",
                                value:  "editTask",
                                action: () => ''
                            },
                            {
                                label:  "Manage Shift Templates",
                                value:  "manageShiftTemplates",
                                action: () => ''
                            },
                            {
                                label:  "Manage Roles",
                                value:  "manageRoles",
                                action: () => setIsRolesSheetOpen(true)
                            }
                        ]}
                        value={{label: "Options", value: ""}}/>
                </Col>
            </Card>

            <Row className="mt-36 mb-16 ml-60 mr-80 justify-between">
                <Row>
                    <TextField
                        type="search"
                        beforeIcon={<IconRiSearchLine/>}
                        placeholder='Search Employees'
                        onChange={({target}) => {
                            setSearch(target.value)
                            handleSearchEmployees(target.value)
                        }}
                        beforeIconSize={20}
                        width={270}>
                    </TextField>

                    <Col className="ml-24">
                        <DatePicker
                            yearsOptions={yearsList}
                            currentDate={startDate}
                            width={175}
                            height={38}
                            daysToEndDate={6}
                            onSet={(startDate) => setStartDate(startDate)}/>
                    </Col>
                </Row>

                <Button
                    disabled={isPublish}
                    onClick={handlePublish}
                    variant="primary">
                    <Typography variant={'button1'} color="white">
                        Publish
                    </Typography>
                </Button>
            </Row>

            <Row className="ml-60 mr-80 pb-30 overflow-y-hidden">
                <Scheduler
                    startDate={startDate}
                    data={filteredEmployees}
                    tdContentComp={({date, userData, shift, status, time, position}) => time && position ? (
                        <Col className="px-12 py-11 h-full w-full">
                            <ShiftCard
                                shift={shift}
                                status={status}
                                positionColor={rolesList[rolesList.findIndex(role => role.title === position)].color}
                                time={time}
                                employeePosition={position}/>
                        </Col>
                    ) : (
                        <Col
                            className={`cursor-pointer h-full w-full`}
                            onClick={() => {
                                handleAddingShift(userData, date)
                            }}>
                            {!selectedShiftTemplate && (
                                <Icon
                                    onClick={() => {
                                        setShiftToEditPayload({
                                            employee: userData, date,
                                        })
                                        setIsShiftEditingSheetOpen(true)
                                    }}
                                    className={`cursor align-center justify-center flex-row ${style.addShiftIcon}`}
                                    width="100%" height="100%" size={20} color="#515151">
                                    <IconRiAddCircleLine/>
                                </Icon>
                            )}
                        </Col>
                    )}
                    profileComp={({firstName, lastName, rating, image, position}) => (
                        <Profile
                            {...{name: `${firstName} ${lastName}`, rating, image}}
                            ratingScale={20}
                            indicatorColor={rolesList[rolesList.findIndex(role => role.title === position)].color}
                            className="pl-22 pr-6 py-20 overflow-x-hidden"/>
                    )}/>
            </Row>
        </Col>
    )
}

export default Home
