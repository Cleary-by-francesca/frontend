import {Outlet} from "react-router";
import {
    AppBar,
    Avatar,
    Divider,
    Icon, Main,
    Navigation,
    NavigationLink,
    Row,
    SideBar,
    Typography
} from "../components/UI/index.jsx";
import Logo from "../components/Logo.jsx";
import avatar from "../assets/images/avatar1.png";


const MainLayout = () => {

    return (
        <div className="h-full">
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
                <Navigation
                    navigationOptions={[
                        {icon: <IconLocalHomeOutlined/>, activeIcon: <IconLocalHomeFilled/>, to: '/app'},
                        {icon: <IconLocalUsersOutlined/>, activeIcon: <IconLocalUsersFilled/>, to: '/app/employees'}
                    ]}
                    navigationItem={(activeIndex, setActiveIndex, {icon, activeIcon, to}, index) => (
                        <NavigationLink
                            to={to}
                            key={index}
                            isActive={activeIndex === index}
                            onClick={() => setActiveIndex(index)}
                            icon={icon}
                            activeIcon={activeIcon}/>
                    )}/>
            </SideBar>

            <Main>
                <Outlet/>
            </Main>
        </div>
    )
}

export default MainLayout
