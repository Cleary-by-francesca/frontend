import Portal from "../Portal/Portal"
import Card from "../Card/Card"
import Backdrop from "../Backdrop/Backdrop";
import {motion} from "framer-motion";


/**
 *
 * @param props {ModalProps}
 * @returns {JSX.Element}
 * @constructor
 */
const Dialog = (props) => {
    const {children, className, animationDuration, centered, height, width, onBackdropClick, ...restProps} = props

    return (
        <Portal>
            <motion.div
                initial={{
                    translateY: '100%',
                }}
                transition={{
                    duration: animationDuration,
                }}
                animate={{
                    translateY: '0%',
                }}
                exit={{
                    translateY: '100%',
                }}
                style={{zIndex: 1300}}
                className={`${centered ? ' flex-col justify-center items-center' : ''} h-full w-full fixed relative ${className}`}>
                <Backdrop
                    onClick={onBackdropClick}
                    active/>
                <div style={{zIndex: 1300}}>
                    <Card
                        {...restProps}
                        className="relative"
                        style={{
                            margin: 'auto'
                        }}
                        {...{height, width}}>
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
    onBackdropClick:   () => {
    },
    centered:          false,
    animationDuration: 0.3
}

export default Dialog
