/**
 *
 * @param props {RowProps}
 * @returns {JSX.Element}
 * @constructor
 */
const Row = (props) => {
    const {children, className, ...restProps} = props

    return (
        <div {...restProps} className={`flex-row ${className}`}>
            {children}
        </div>
    )
}

Row.defaultProps = {
    className: ''
}

export default Row
