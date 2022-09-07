import style from "./Login.module.css";
import {Button, Col, Divider, Icon, Row, TextField, Typography} from "../components/UI/index.jsx";
import topRightRadialBackground from "../assets/images/topRightRadialBackgroundLoginPage.png";
import bottomLeftRadialBackground from "../assets/images/bottomLeftRadialBackgroundLoginPage.png";
import {AnimatePresence, motion} from "framer-motion";
import {fadeInOutAnimation} from "../components/UI/Utils/utils.js";
import {useEffect, useState} from "react";
import {authEndpoint} from "../services/index.js";
import {useNavigate} from "react-router";
import TokenStorage from "../modules/TokenStorage.js";

const Login = () => {
    const navigate = useNavigate()

    const [email, setEmail]       = useState('francescacolombo@gmail.com')
    const [password, setPassword] = useState('Fc123456')

    const handleSubmit = async (event) => {
        event.preventDefault()

        const response = await authEndpoint.login(email, password)

        if (response.status === 200) {
            TokenStorage.storeUserData(response.data)
            navigate('/app')
        }
    }

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
                    {...fadeInOutAnimation}
                    className={style.bottomLeftRadialBackground}
                    src={bottomLeftRadialBackground}
                    alt={''}/>

                <Col
                    initial={{
                        opacity: 0,
                        y:       10
                    }}
                    animate={{
                        opacity: 1,
                        y:       0
                    }}
                    exit={{
                        y:       10,
                        opacity: 0,
                    }}
                    transition={{
                        duration: 0.4,
                    }}
                    className={style.loginContainer}>
                    <Typography
                        size={48}
                        variant={'h3'}>
                        Login
                    </Typography>


                    <form
                        className={style.formContainer}
                        onSubmit={handleSubmit}>
                        <Col>
                            <Typography
                                className="pb-20"
                                color={'#2C2C2C'}
                                variant={'h5'}>
                                Email
                            </Typography>

                            <TextField
                                lightPlaceholder
                                placeholder={'Enter Email...'}
                                fontSize={13}
                                fontWeight={400}
                                value={email}
                                onChange={({target}) => setEmail(target.value)}
                                borderColor={'#515151'}
                            />
                        </Col>

                        <Col className="pt-52">
                            <Typography
                                className="pb-20"
                                color={'#2C2C2C'}
                                variant={'h5'}>
                                Password
                            </Typography>

                            <TextField
                                lightPlaceholder
                                placeholder={'Enter Password'}
                                fontSize={13}
                                fontWeight={400}
                                type="password"
                                value={password}
                                onChange={({target}) => setPassword(target.value)}
                                borderColor={'#515151'}
                            />
                        </Col>

                        <Button
                            className="mt-62"
                            type="submit"
                            rounded={8}
                            height={46}
                            width={'100%'}>
                            <Typography
                                color={'#E8E8E8'}
                                fontWeight={500}
                                size={20}
                                variant={'h5'}>
                                Login
                            </Typography>
                        </Button>


                        <Row className="pt-32 justify-center align-center">
                            <Divider
                                className="align-self-start mt-10"
                                horizontal/>

                            <Typography
                                className="px-36"
                                color={'#2C2C2C'}
                                variant={'h5'}>
                                Or
                            </Typography>

                            <Divider
                                className="align-self-start mt-10"
                                horizontal/>
                        </Row>

                        <Button
                            className="mt-22"
                            variant={'default'}
                            rounded={8}
                            height={46}
                            width={'100%'}
                            outlined>
                            <Row className="justify-center align-center">
                                <Icon size={20}>
                                    <IconLogosGoogleIcon/>
                                </Icon>
                                <Typography
                                    className="pl-4"
                                    color={'#515151'}
                                    fontWeight={400}
                                    size={16}
                                    variant={'button1'}>
                                    Continue with Google
                                </Typography>
                            </Row>
                        </Button>
                    </form>
                </Col>
        </>
    )
}

export default Login
