import {motion} from "framer-motion";

/**
 *
 * @param props {RowProps}
 * @returns {JSX.Element}
 * @constructor
 */
const Row = (props) => {
    const {children, className, grid, ...restProps} = props

    return (
        <motion.div {...restProps} className={`${grid ? 'grid' : 'flex-row'} ${className}`}>
            {children}
        </motion.div>
    )
}

Row.defaultProps = {
    className: '',
    grid: false
}

export default Row
