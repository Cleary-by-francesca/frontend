import {
    AppBar,
    Avatar,
    Card,
    Divider,
    Drawer,
    Icon,
    Main,
    Row,
    SideBar,
    Typography,
    Scheduler,
    Col,
    Profile,
    Button,
    Navigation,
    TextField, Dialog,
    Select,
    AddShiftDialog
} from "../components/UI"
import {useState} from "react"
import ShiftCard from "../components/ShiftCard.jsx"
import {useEmployeesContext} from "../context/EmployeesContext.jsx"
import Logo from "../components/Logo.jsx"
import avatar from "../assets/avatar1.png"


const shiftsTemplates = [
    {time: '9:00 - 11:00', position: 'Chef', shift: 'Morning'},
    {time: '9:00 - 15:00', position: 'Host', shift: 'Morning'},
    {time: '9:00 - 16:00', position: 'Waiter', shift: 'Morning'},
    {time: '16:00 - 21:00', position: 'Bartender', shift: 'Evning'},
    {time: '9:00 - 13:00', position: 'Manager', shift: 'Morning'}
]

const colorForPosition = {
    'Chef':      '#EEF33D',
    'Waiter':    '#1CB2B2',
    'Bartender': '#FFC6FF',
    'Host':      '#998FD7',
    'Manager':   '#9BF6FF'
}

const hourOptions    = []
const minutesOptions = []

for (let i = 0; i <= 23; i++) {
    hourOptions.push({label: i, value: i})
}

for (let i = 0; i < 12; i++) {
    minutesOptions.push({label: i * 5, value: i * 5})
}

const Home = () => {
    const [isDialogOpen, setIsDialogOpen]                   = useState(false)
    const {employees, addShift, updateEmployees}            = useEmployeesContext()
    const [isDrawerOpen, setIsDrawerOpen]                   = useState(false)
    const [startDate]                                       = useState(new Date().toISOString())
    const [filteredEmployees, setFilteredEmployees]         = useState(employees)
    const [isPublish, setIsPublish]                         = useState(false)
    const [selectedShiftTemplate, setSelectedShiftTemplate] = useState()
    const [employeeDetails, setEmployeeDetails]             = useState()

    const handleSearchEmployees = (searchValue) => {
        const filtered = employees.filter(employee => employee.name.toLowerCase().includes(searchValue.toLowerCase()))
        setFilteredEmployees(filtered);
    }

    const handlePublish = () => {
        const _employees = employees.map(({dates, ...restData}) => ({
            ...restData,
            dates: dates.map(({status, ...restDate}) => ({
                ...restDate,
                status: status === 'added' ? status = "published" : status
            }))
        }))

        updateEmployees(_employees)
        setFilteredEmployees(_employees)
        setIsPublish(true)
    }

    const handleSelectShiftTemplate = (shiftTemplate) => {
        setSelectedShiftTemplate(shiftTemplate)
    }

    const handleAddingShift = ({employeeId, date, position}) => {
        if (selectedShiftTemplate) {
            const employees = addShift(employeeId, date, selectedShiftTemplate)
            setFilteredEmployees(employees)
            setIsPublish(false)
            setSelectedShiftTemplate(undefined)
            return
        }

        alert("Please select appropriate position")
        setSelectedShiftTemplate(undefined)
    }

    return (
        <div className="h-full">
            {isDialogOpen && employeeDetails && (
                <Dialog centered width="100%">

                </Dialog>
            )}

            <AppBar className="justify-between">
                <Row>
                    <Logo/>
                    <Divider color={'#A0A0A0'} opacity={0.8}/>

                    <Row className="pl-40">
                        <Icon color="#E8E8E8" size={18}>
                            <IconMdiBellOutline/>
                        </Icon>
                    </Row>
                </Row>

                <Row
                    className="pr-36 align-center">
                    <Icon className="pr-34" size={20} color="#E8E8E8">
                        <IconIcOutlineSettings/>
                    </Icon>

                    <Avatar
                        src={avatar}
                        borderColor={'#E8E8E8'}
                        size={38}/>

                    <Typography
                        className="font-medium pl-10 pr-8"
                        color="white"
                        variant="h6">
                        Francesca
                    </Typography>

                    <Icon
                        color="#E8E8E8"
                        size={12}>
                        <IconIonChevronDown/>
                    </Icon>
                </Row>
            </AppBar>

            <SideBar>
                <Divider
                    opacity={0.3}
                    color={'#E8E8E8'}
                    horizontal/>

                <Navigation>

                </Navigation>
            </SideBar>

            <Drawer
                labelContent="Shifts Templates"
                position="right"
                top={230}
                height={630}
                onLabelClick={() => setIsDrawerOpen(!isDrawerOpen)}
                isOpen={isDrawerOpen}>
                <Typography className="pl-24 pr-20 pt-14 pb-2" variant={'subtitle2'} color={'#2C2C2C'}>
                    Drag and drop templates
                    to the schedule
                </Typography>
                {shiftsTemplates.map(({position, time, shift}, index) => (
                    <Col onClick={() => handleSelectShiftTemplate({position, time, shift})}
                         className="ml-18 mr-10 mt-22" style={{height: 56}} key={index}>
                        <ShiftCard
                            className="cursor"
                            shift={shift}
                            positionColor={colorForPosition[position]}
                            employeePosition={position}
                            time={time}
                            key={index}/>
                    </Col>
                ))}
            </Drawer>

            <Main>
                <Card
                    className="mt-24 ml-60 mr-80 pl-20 justify-center"
                    height={68} width="auto">

                    <Typography
                        className="font-bold"
                        variant={'h4'}>
                        Francesca’s
                    </Typography>
                </Card>

                <Row className="mt-36 mb-16 ml-60 mr-106 justify-between">
                    <TextField
                        type="search"
                        beforeIcon={<IconRiSearchLine/>}
                        placeholder='Search Employees'
                        onChange={({target}) => {
                            handleSearchEmployees(target.value)
                        }}
                        beforeIconSize={20}
                        width={270}>
                    </TextField>


                    <Button
                        variant="primary"
                        disabled={isPublish}
                        onClick={handlePublish}>
                        <Typography variant={'button1'} color="white">
                            Publish
                        </Typography>
                    </Button>
                </Row>

                <Row className="ml-60 mr-80 pb-30 overflow-y-hidden">
                    <Scheduler
                        startDate={startDate}
                        data={filteredEmployees}
                        tdContentComp={({
                                            userData, date, status, shift, time
                                        }) => (data && data.time && data.position) ? (
                            <Col className="px-12 py-10 h-full w-full">
                                <ShiftCard
                                    status={status}
                                    shift={shift}
                                    positionColor={colorForPosition[position]}
                                    time={time}
                                    employeePosition={position}/>
                            </Col>
                        ) : <Col
                            className={`${selectedShiftTemplate ? "cursor" : ""} px-12 py-10 h-full w-full`}
                            onClick={() => {
                                handleAddingShift({date: date, employeeId: userData.id, position: userData.position})
                            }}>
                            {!selectedShiftTemplate && (
                                <Icon
                                    onMouseEnter={({target}) => {
                                        target.setAttribute('class', 'cursor align-center justify-center flex-row opacity-1')
                                    }}
                                    onMouseLeave={({target}) => {
                                        target.setAttribute('class', 'opacity-0')
                                    }}
                                    onClick={() => {
                                        setIsDialogOpen(true)
                                        setEmployeeDetails({
                                            employee: userData, date, positionColor: colorForPosition[userData.position]
                                        })
                                    }}
                                    className={`cursor align-center justify-center flex-row opacity-0`}
                                    width="100%" height="100%" size={20} color="#515151">
                                    <IconRiAddCircleLine/>
                                </Icon>
                            )}
                        </Col>}
                        profileComp={({name, rating, image, position}) => (
                            <Profile
                                {...{name, rating, image}}
                                ratingScale={20}
                                indicatorColor={colorForPosition[position]}
                                className="px-32 py-20"/>
                        )}/>
                </Row>
            </Main>
        </div>
    )
}

export default Home;
