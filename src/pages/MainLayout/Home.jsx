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
import RolesSheet from "../../components/BottomSheets/RolesSheet.jsx";


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

    const handleSearchEmployees = (searchValue) => {
        const filtered = employees.filter(({firstName, lastName}) => {
            return `${firstName} ${lastName}`.toLowerCase().includes(searchValue.toLowerCase())
        })

        setFilteredEmployees(filtered)
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
            const employees = addShift(id, date, selectedShiftTemplate)
            setFilteredEmployees(employees)
            setIsPublish(false)
            setSelectedShiftTemplate(undefined)
        }
    }

    useEffect(() => {
        (async () => {
            const roles = await getRoles()
            setRolesList(roles)
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
                    <BottomSheet
                        height={600}
                        onBackdropClick={() => setIsRolesSheetOpen(false)}>
                        <RolesSheet/>
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
                            date={shiftToEditPayload?.date}/>
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
                    color={'#2C2C2C'}
                    variant={'h5'}>
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
