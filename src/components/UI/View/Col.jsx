import {motion} from "framer-motion";


/**
 *
 * @param props {import("../UI").ColProps}
 * @returns {JSX.Element}
 * @constructor
 */
const Col = (props) => {
    const {children, className, cols, style, innerRef, ref, ...restProps} = props;

    return (
        <motion.div
            {...restProps}
            className={`flex-col ${className}`}
            ref={innerRef || ref}
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
    innerRef: ''
}

export default Col
