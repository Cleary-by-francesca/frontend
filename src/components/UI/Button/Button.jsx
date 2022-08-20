/**
 *
 * @param props {ButtonProps}
 * @returns {JSX.Element}
 * @constructor
 */
const Button = (props) => {
    const {children, backgroundColor, outlined, borderColor, size, width, height, rounded, ...restProps} = props

    return (
        <button {...restProps}
                style={{
                    backgroundColor,
                    borderRadius: rounded,
                    border:       outlined ? `1px solid ${borderColor}` : 'none',
                    width,
                    height
                }}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    className:       '',
    backgroundColor: '#b0b0b0',
    rounded:         4,
    size:            18,
    width:           '100%',
    height:          '100%',
    outlined:        false,
    borderColor:     '#5d5d5d',
    color:           '#fff',
}

export default Button
