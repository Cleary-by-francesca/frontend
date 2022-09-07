import style from "./Dialog.module.scss"
import Portal from "../Portal/Portal"
import Card from "../Card/Card"
import Backdrop from "../Backdrop/Backdrop";
import {motion} from "framer-motion";


/**
 *
 * @param props {import("../UI").DialogProps}
 * @returns {JSX.Element}
 * @constructor
 */
const Dialog = (props) => {
    const {
              children, showAppBar, noBackdrop,
              className, animation,
              animationDuration, centered,
              height, width, onBackdropClick,
              fullScreen,
              ...restProps
          } = props

    return (
        <Portal>
            <motion.div
                initial={animation === "none" ? {} :
                    animation === "fade" ?
                        {
                            opacity: 0
                        } : {
                            translateY: animation === 'up' ? '100%' : animation === 'down' ? '-100%' : '0',
                            translateX: animation === 'left' ? '-100%' : animation === 'right' ? '100%' : '0',
                        }
                }
                transition={animation === "none" ? {} :
                    {
                        duration: animationDuration,
                    }
                }
                animate={animation === "none" ? {} :
                    animation === "fade" ?
                        {
                            opacity: 1
                        } : {
                            translateY: '0%',
                            translateX: '0%',
                        }}
                exit={animation === "none" ? {} :
                    animation === "fade" ? {
                            opacity: 0
                        }
                        :
                        {
                            translateY: animation === 'up' ? '100%' : animation === 'down' ? '-100%' : '0',
                            translateX: animation === 'left' ? '-100%' : animation === 'right' ? '100%' : '0',
                        }}
                style={{zIndex: 1300}}
                className={`${centered ? ' flex-col justify-center items-center' : ''} h-full w-full fixed relative ${className} ${showAppBar ? style.showAppBar : ''}`}>
                {!noBackdrop && (
                    <Backdrop
                        onClick={onBackdropClick}
                        active/>
                )}
                <div
                    className={`h-full flex-col relative justify-center items-center`}>
                    <Card
                        {...restProps}
                        height={fullScreen ? '100%' : height}
                        width={fullScreen ? '100%' : width}
                        style={{
                            zIndex: 1300,
                            margin: 'auto'
                        }}>
                        {children}
                    </Card>
                </div>
            </motion.div>
        </Portal>
    )
}

Dialog.defaultProps = {
    className:         '',
    height:            "400px",
    width:             "400px",
    showAppBar:        false,
    fullScreen:        false,
    animation:         'up',
    onBackdropClick:   () => {
    },
    centered:          false,
    animationDuration: 0.3
}

export default Dialog
