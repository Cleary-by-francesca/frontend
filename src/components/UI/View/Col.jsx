import {motion} from "framer-motion";

/**
 *
 * @param props {import("../UI").ColProps}
 * @returns {JSX.Element}
 * @constructor
 */
const Col = (props) => {
    const {children, className, cols, style, ...restProps} = props;

    return (
        <motion.div
            {...restProps}
            className={`flex-col ${className}`}
            style={{
                flex: cols,
                ...style,
            }}>
            {children}
        </motion.div>
    )
}

Col.defaultProps = {
    className: '',
}

export default Col
