import style from './Backdrop.module.scss'
import {AnimatePresence, motion} from "framer-motion"

/**
 *
 * @param props {BackdropProps}
 * @returns {JSX.Element}
 * @constructor
 */
const Backdrop = (props) => {
    const {active, className, absolute, animationTime, isTransparent, ...restProps} = props
    return (
        <AnimatePresence>
            {active && (
                <motion.div
                    {...restProps}
                    initial={{
                        opacity: 0,
                    }}
                    transition={{
                        duration: animationTime,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    exit={{
                        opacity: 0,
                    }}
                    style={absolute ? {} : {top: 0, left: 0}}
                    className={`${absolute ? 'absolute' : 'fixed'} h-full w-full ${className} ${isTransparent ? '' : style.backdropColor} ${style.backdrop}`}/>
            )}
        </AnimatePresence>
    )
}

Backdrop.defaultProps = {
    className:     '',
    absolute:      false,
    animationTime: 0.4,
    isTransparent: false,
}

export default Backdrop
