import style from '../styles/Home.module.css'
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
    TextField,
    Scheduler,
    Col,
    Profile,
    Button,
    Navigation
} from "../components/UI"
import {useState} from "react";
import ShiftCard from "../components/ShiftCard.jsx";
import avatar1 from "../assets/avatar1.png"
import avatar2 from "../assets/avatar3.png";
import avatar3 from "../assets/avatar2.png";
import avatar4 from "../assets/avatar4.png";
import avatar5 from "../assets/avatar5.png";
import avatar6 from "../assets/avatar6.png";
import avatar7 from "../assets/avatar7.png";
import avatar8 from "../assets/avatar8.png";
import avatar9 from "../assets/avatar9.png";

const shiftsTemplates = [
    {time: '9:00 - 11:00', position: 'Chef'},
    {time: '9:00 - 15:00', position: 'Host'},
    {time: '9:00 - 16:00', position: 'Waiter'},
    {time: '16:00 - 21:00', position: 'Bartender'},
    {time: '9:00 - 13:00', position: 'Manager'},
]

let employeesData = [
    {
        name:     'Suzanna Vatik',
        rating:   '19.5',
        position: 'Waiter',
        image:    avatar2,
        dates:    [
            {date: 'Mon 9/11'},
            {date: 'Mon 10/11'},
            {date: 'Mon 11/11'},
            {date: 'Mon 12/11'},
            {date: 'Mon 13/11'},
            {date: 'Mon 14/11'},
            {date: 'Mon 15/11'},
        ]
    },
    {
        name:     'Ross Geller',
        rating:   '19.5',
        position: 'Chef',
        image:    avatar3,
        dates:    [
            {date: 'Mon 9/11'},
            {date: 'Mon 10/11'},
            {date: 'Mon 11/11', time: '9:00 - 11:00', position: 'Chef'},
            {date: 'Mon 12/11'},
            {date: 'Mon 13/11', time: '9:00 - 11:00', position: 'Chef'},
            {date: 'Mon 14/11'},
            {date: 'Mon 15/11'},
        ],
    },
    {
        name:     'Suffi Gussee',
        rating:   '19.5',
        position: 'Bartender',
        image:    avatar4,
        dates:    [
            {date: 'Mon 9/11'},
            {date: 'Mon 10/11'},
            {date: 'Mon 11/11'},
            {date: 'Mon 12/11', time: '16:00 - 21:00', position: 'Bartender'},
            {date: 'Mon 13/11'},
            {date: 'Mon 14/11'},
            {date: 'Mon 15/11'},
        ]
    },
    {
        name:     'Luna Arenna',
        rating:   '19.5',
        position: 'Host',
        image:    avatar5,
        dates:    [
            {date: 'Mon 9/11'},
            {date: 'Mon 10/11', time: '9:00 - 15:00', position: 'Host'},
            {date: 'Mon 11/11'},
            {date: 'Mon 12/11'},
            {date: 'Mon 13/11', time: '9:00 - 15:00', position: 'Host'},
            {date: 'Mon 14/11'},
            {date: 'Mon 15/11'},
        ]
    },
    {
        name:     'Skyler Kaufman',
        rating:   '19.5',
        position: 'Bartender',
        image:    avatar6,
        dates:    [
            {date: 'Mon 9/11'},
            {date: 'Mon 10/11'},
            {date: 'Mon 11/11', time: '16:00 - 21:00', position: 'Bartender'},
            {date: 'Mon 12/11'},
            {date: 'Mon 13/11'},
            {date: 'Mon 14/11'},
            {date: 'Mon 15/11'},
        ]
    },
    {
        name:     'Soi Rio',
        rating:   '19.5',
        position: 'Waiter',
        image:    avatar7,
        dates:    [
            {date: 'Mon 9/11'},
            {date: 'Mon 10/11'},
            {date: 'Mon 11/11'},
            {date: 'Mon 12/11'},
            {date: 'Mon 13/11'},
            {date: 'Mon 14/11'},
            {date: 'Mon 15/11'},
        ]
    },
    {
        name:     'Sofia Ashtamker',
        rating:   '19.5',
        position: 'Waiter',
        image:    avatar8,
        dates:    [
            {date: 'Mon 9/11'},
            {date: 'Mon 10/11', time: '9:00 - 16:00', position: 'Waiter'},
            {date: 'Mon 11/11'},
            {date: 'Mon 12/11', time: '9:00 - 16:00', position: 'Waiter'},
            {date: 'Mon 13/11'},
            {date: 'Mon 14/11', time: '9:00 - 16:00', position: 'Waiter'},
            {date: 'Mon 15/11'},
        ]
    },
    {
        name:     'Fred Vereceloni',
        rating:   '19.5',
        position: 'Waiter',
        image:    avatar9,
        dates:    [
            {date: 'Mon 9/11'},
            {date: 'Mon 10/11'},
            {date: 'Mon 11/11', time: '9:00 - 16:00', position: 'Waiter'},
            {date: 'Mon 12/11', time: '9:00 - 16:00', position: 'Waiter'},
            {date: 'Mon 13/11', time: '9:00 - 16:00', position: 'Waiter'},
            {date: 'Mon 14/11'},
            {date: 'Mon 15/11'},
        ]
    }
]

const colorForPosition = {
    'Chef':      '#EEF33D',
    'Waiter':    '#1CB2B2',
    'Bartender': '#FFC6FF',
    'Host':      '#998FD7',
    'Manager':   '#9BF6FF'
}

const Home = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [employees, setEmployees]       = useState(employeesData);


    const handleSearchEmployees = (event) => {
        const filter = employeesData.filter(e => e.name.toLowerCase().includes(event.target.value.toLowerCase()))
        setEmployees(filter)
    }


    return (
        <div className="h-full">
            <AppBar className="justify-between">
                <Row>
                    <Typography variant={'h3'} className={style.title}>
                        Fixed
                    </Typography>
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
                        src={avatar1}
                        borderColor={'#E8E8E8'}
                        size={38}/>

                    <Typography
                        className="font-medium pl-10 pr-8"
                        color="white"
                        size={18}
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
                <Button
                    className="m-4"
                    backgroundColor={'#D9D9D9'}
                    height={48}
                    width={48}>
                    <Icon size={16} color="#2C2C2C">
                        <IconIonChevronRight/>
                    </Icon>
                </Button>

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
                    className="mt-24 ml-60 mr-80 pl-20 justify-center"
                    height={68} width="auto">

                    <Typography
                        className="font-bold"
                        size={30}
                        variant={'h4'}>
                        Francesca’s
                    </Typography>
                </Card>

                <Row className="mt-36 mb-16 ml-60">
                    <TextField
                        type="search"
                        beforeIcon={<IconRiSearchLine/>}
                        placeholder='Search Employees'
                        onChange={handleSearchEmployees}
                        beforeIconSize={20}
                        height={38}
                        width={270}>
                    </TextField>

                </Row>

                <Row className="ml-60 mr-80 pb-30 overflow-y-hidden">
                    <Scheduler
                        data={employees}
                        tdContentComp={(data) => (data && data.time && data.position) ? (
                            <Col className="px-12 py-10 h-full w-full">
                                <ShiftCard
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
