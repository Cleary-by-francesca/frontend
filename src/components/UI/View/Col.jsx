/**
 *
 * @param props {ColProps}
 * @returns {JSX.Element}
 * @constructor
 */
const Col = (props) => {
    const {children, className, ...restProps} = props;

    return (
        <div {...restProps} className={`flex-col ${className}`}>
            {children}
        </div>
    )
}

Col.defaultProps = {
    className: ''
}

export default Col
