import {motion} from "framer-motion";
import Backdrop from "../Backdrop/Backdrop.jsx";
import Card from "../Card/Card.jsx";
import Portal from "../Portal/Portal.jsx";
import style from "./BottomSheet.module.css"

/**
 *
 * @param props {import("../UI").BottomSheetProps}
 * @returns {JSX.Element}
 * @constructor
 */
const BottomSheet = (props) => {
    const {
              children, noBackdrop,
              className, animationDuration,
              height, width, onBackdropClick,
              ...restProps
          } = props

    return (
        <Portal>
            <motion.div
                initial={{
                    opacity: 1
                }}
                transition={{
                    duration: animationDuration,
                }}
                animate={{
                    opacity: 1
                }}
                exit={{
                    opacity: 0
                }}
                style={{zIndex: 1300}}
                className={`h-full w-full fixed relative ${className}`}>
                {!noBackdrop && (
                    <Backdrop
                        onClick={onBackdropClick}
                        active/>
                )}
                <div
                    className={`h-full flex-col relative justify-end items-center`}>
                    <Card
                        initial={{
                            translateY: '100%',
                        }}
                        transition={{
                            duration: animationDuration,
                        }}
                        animate={{
                            translateY: 0,
                        }}
                        exit={{
                            translateY: '100%'
                        }}
                        rounded={'32px 32px 0 0'}
                        {...restProps}
                        className={`${style.bottomSheet}`}
                        height={height}
                        width={width}
                        style={{
                            zIndex: 1300,
                        }}>
                        {children}
                    </Card>
                </div>
            </motion.div>
        </Portal>
    )
}

BottomSheet.defaultProps = {
    className:          '',
    height:             "400px",
    width:              "100%",
    animationDirection: 'up',
    onBackdropClick:    () => {
    },
    centered:           false,
    animationDuration:  0.4
}

export default BottomSheet
