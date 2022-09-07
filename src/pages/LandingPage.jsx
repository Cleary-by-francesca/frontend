import style from "./LandingPage.module.css";
import {Button, Col, Row, Typography} from "../components/UI/index.jsx";
import {useNavigate} from "react-router";
import {motion} from "framer-motion";
import {fadeInOutAnimation} from "../components/UI/Utils/utils.js";
import topRightRadialBackground from "../assets/images/topRightRadialBackgroundLandingPage.png";
import bottomLeftRadialBackground from "../assets/images/bottomLeftRadialBackgroundLandingPage.png.png";
import chefHat from "../assets/images/chefHat.png";
import landingPageSchedulerIcon from "../assets/images/landingPageSchedulerIcon.png"
import landingPageSchedulerVector from "../assets/images/landingPageSchedulerVector.png"
import landingPageUsersIcon from "../assets/images/landingPageUsersIcon.png"
import landingPageUsersVector from "../assets/images/landingPageUsersVector.png"
import landingPageTasksIcon from "../assets/images/landingPageTasksIcon.png"
import landingPageTasksVector from "../assets/images/landingPageTasksVector.png"

const LandingPage = () => {
    const navigate = useNavigate()

    return (
        <>
            <motion.img
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.4}}
                className={style.topRightRadialBackground}
                src={topRightRadialBackground}
                alt={''}/>

            <motion.img
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.4}}
                className={style.bottomLeftRadialBackground}
                src={bottomLeftRadialBackground}
                alt={''}/>

            <motion.div
                {...fadeInOutAnimation}
                className={style.landingPage}>

                <Col className={`absolute ${style.logoWrapper}`}>
                    <Typography
                        className={style.appName}
                        variant="h1"
                        size={160}
                        fontWeight={700}
                        color={'#53326C'}>
                        Shifter
                    </Typography>

                    <img
                        className={style.chefHat}
                        src={chefHat}
                        alt={''}/>

                    <img
                        className={style.landingPageSchedulerVector}
                        src={landingPageSchedulerVector} alt={''}/>
                    <img
                        className={style.landingPageSchedulerIcon}
                        src={landingPageSchedulerIcon} alt={''}/>
                    <Typography
                        className={style.landingPageSchedulerText}
                        variant={'h5'}
                        size={24}
                        fontWeight={500}
                        color={'#2C2C2C'}>
                        Effective shift management
                    </Typography>

                    <img
                        className={style.landingPageUsersVector}
                        src={landingPageUsersVector}
                        alt={''}/>
                    <img
                        className={style.landingPageUsersIcon}
                        src={landingPageUsersIcon}
                        alt={''}/>
                    <Typography
                        className={style.landingPageUsersText}
                        variant={'h5'}
                        size={24}
                        fontWeight={500}
                        color={'#2C2C2C'}>
                        Easy employee management
                    </Typography>

                    <img
                        className={style.landingPageTasksVector}
                        src={landingPageTasksVector}
                        alt={''}/>
                    <img
                        className={style.landingPageTasksIcon}
                        src={landingPageTasksIcon}
                        alt={''}/>
                    <Typography
                        className={style.landingPageTasksText}
                        variant={'h5'}
                        size={24}
                        fontWeight={500}
                        color={'#2C2C2C'}>
                        Ongoing report management.
                    </Typography>

                </Col>
                <Col className={`pb-130 justify-end align-center h-full w-full `}>
                    <Row className={`justify-center ${style.landingPageContent}`}>
                        <Button
                            onClick={() => navigate('/login')}
                            className="mr-60"
                            width={230}
                            height={56}>
                            <Typography
                                fontWeight={500}
                                color={'#E8E8E8'}
                                variant={'h6'}>
                                Log In
                            </Typography>
                        </Button>

                        <Button
                            outlined
                            width={230}
                            height={56}>
                            <Typography
                                fontWeight={500}
                                color={'#52326C'}
                                variant={'h6'}>
                                Register
                            </Typography>
                        </Button>
                    </Row>
                </Col>
            </motion.div>
        </>
    )
}

export default LandingPage
