import {fadeInOutAnimation} from "../Utils/utils.js";
import {motion, usePresence} from "framer-motion";

const transition = { type: 'spring', stiffness: 500, damping: 50, mass: 1 }

/**
 *
 * @param props {import("../UI").TableRowProps}
 * @returns {JSX.Element}
 * @constructor
 */
const TableRow = (props) => {
    const {children, ...restProps} = props

    const [isPresent, safeToRemove] = usePresence()

    const animations = {
        layout: true,
        initial: 'out',
        style: {
            color: '#9f3030',
            position: isPresent ? 'static' : 'absolute'
        },
        animate: isPresent ? 'in' : 'out',
        whileTap: 'tapped',
        variants: {
            in: { scaleY: 1, opacity: 1, color: '#fff' },
            out: { scaleY: 0, opacity: 0, zIndex: -1, color: '#000' },
            tapped: { scale: 0.98, opacity: 0.5, transition: { duration: 0.1 } }
        },
        onAnimationComplete: () => !isPresent && safeToRemove(),
        transition
    }

    return (
        <motion.tr
            {...fadeInOutAnimation}
            {...restProps}>
            {children}
        </motion.tr>
    )
}

export default TableRow
