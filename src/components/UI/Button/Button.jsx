import cssStyle from './Button.module.css'


const variants = {
    primary: cssStyle.primary,
}

/**
 *
 * @param props {ButtonProps}
 * @returns {JSX.Element}
 * @constructor
 */
const Button = (props) => {
    const
        {
            children, className,
            variant, disabled,
            style, size,
            width, height,
            rounded,
            ...restProps
        } = props

    const classes = `${cssStyle.button} ${disabled ? cssStyle.disabledButton : variants[variant]} ${className}`

    return (
        <button {...restProps}
                className={classes}
                style={{
                    borderRadius: rounded,
                    width,
                    height,
                    ...style
                }}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    className: '',
    variant:   'primary',
    disabled:  false,
    rounded:   4,
    size:      18,
    width:     95,
    height:    40,
    outlined:  false,
}

export default Button
