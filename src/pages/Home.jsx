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
    TextField, Dialog, Select
} from "../components/UI"
import {useState} from "react";
import ShiftCard from "../components/ShiftCard.jsx";
import {useEmployeesContext} from "../context/EmployeesContext.jsx";
import Logo from "../components/Logo.jsx";
import avatar from "../assets/avatar1.png"

const shiftsTemplates = [
    {time: '9:00 - 11:00', position: 'Chef'},
    {time: '9:00 - 15:00', position: 'Host'},
    {time: '9:00 - 16:00', position: 'Waiter'},
    {time: '16:00 - 21:00', position: 'Bartender'},
    {time: '9:00 - 13:00', position: 'Manager'},
]

const colorForPosition = {
    'Chef':      '#EEF33D',
    'Waiter':    '#1CB2B2',
    'Bartender': '#FFC6FF',
    'Host':      '#998FD7',
    'Manager':   '#9BF6FF'
}

const Home = () => {
    const [isDialogOpen, setIsDialogOpen]           = useState(false)
    const {employees}                               = useEmployeesContext()
    const [isDrawerOpen, setIsDrawerOpen]           = useState(false)
    const [startDate]                               = useState(new Date().toISOString())
    const [filteredEmployees, setFilteredEmployees] = useState(employees)


    const handleSearchEmployees = (searchValue) => {
        const filtered = employees.filter(employee => employee.name.toLowerCase().includes(searchValue.toLowerCase()))
        setFilteredEmployees(filtered);
    }

    return (
        <div className="h-full">
            {isDialogOpen && (
                <Dialog centered>

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
                    Drag and drop temlates
                    to the schedule
                </Typography>
                {shiftsTemplates.map(({position, time}, index) => (
                    <Col className="ml-18 mr-10 mt-22" style={{height: 56}} key={index}>
                        <ShiftCard
                            positionColor={colorForPosition[position]}
                            employeePosition={position}
                            time={time}
                            key={index}/>
                    </Col>
                ))}
            </Drawer>

            <Main>
                <Card
                    className="flex-row mt-24 ml-60 mr-80 pl-20 align-center justify-between"
                    height={68} width="auto">
                    <Typography
                        className="font-bold"
                        variant={'h4'}>
                        Francesca’s
                    </Typography>

                    <Col className="pr-26">
                        <Select
                            blurInputOnSelect={true}
                            isSelectable={false}
                            isSearchable={false}
                            menuAnchorPoint="right"
                            menuWidth={220}
                            options={[
                                {label: "Edit tasks", value: "editTask"},
                                {label: "Manage Shift Templates", value: "manageShiftTemplates"}
                            ]}
                            value={{label: "Options", value: ""}}/>
                    </Col>
                </Card>

                <Row className="mt-36 mb-16 ml-60 mr-106 justify-between">
                    <TextField
                        type="search"
                        beforeIcon={<IconRiSearchLine/>}
                        placeholder='Search Employees'
                        onChange={(event) => handleSearchEmployees(event.target.value)}
                        beforeIconSize={20}
                        width={270}>
                    </TextField>


                    <Button
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
                        tdContentComp={(data) => (data && data.time && data.position) ? (
                            <Col className="px-12 py-10 h-full w-full">
                                <ShiftCard
                                    shift={data.shift}
                                    positionColor={colorForPosition[data.position]}
                                    time={data.time}
                                    employeePosition={data.position}/>
                            </Col>
                        ) : <></>}
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
