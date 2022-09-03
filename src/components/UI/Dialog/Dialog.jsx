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
              className, animationDirection,
              animationDuration, centered,
              height, width, onBackdropClick,
              ...restProps
          } = props

    return (
        <Portal>
            <motion.div
                initial={{
                    translateY: animationDirection === 'up' ? '100%' : animationDirection === 'down' ? '-100%' : '0',
                    translateX: animationDirection === 'left' ? '-100%' : animationDirection === 'right' ? '100%' : '0',
                }}
                transition={{
                    duration: animationDuration,
                }}
                animate={{
                    translateY: '0%',
                    translateX: '0%',
                }}
                exit={{
                    translateY: animationDirection === 'up' ? '100%' : animationDirection === 'down' ? '-100%' : '0',
                    translateX: animationDirection === 'left' ? '-100%' : animationDirection === 'right' ? '100%' : '0',
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
                        height={height}
                        width={width}
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
    className:          '',
    height:             "400px",
    width:              "400px",
    showAppBar:         false,
    animationDirection: 'up',
    onBackdropClick:    () => {
    },
    centered:           false,
    animationDuration:  0.3
}

export default Dialog
