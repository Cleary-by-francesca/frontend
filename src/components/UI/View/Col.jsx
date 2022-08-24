/**
 *
 * @param props {ColProps}
 * @returns {JSX.Element}
 * @constructor
 */
const Col = (props) => {
    const {children, className, cols, style, ...restProps} = props;

    return (
        <div
            {...restProps}
            className={`flex-col ${className}`}
            style={{
                flex: cols,
                ...style,
            }}>
            {children}
        </div>
    )
}

Col.defaultProps = {
    className: '',
}

export default Col
