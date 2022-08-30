import cssStyle from './Button.module.css'


const variants = {
    primary: cssStyle.buttonPrimary,
    icon:    cssStyle.buttonIcon,
}

const outlinedVariants = {
    default: cssStyle.buttonOutlinedDefault,
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
            outlined,
            style, size,
            width, height,
            rounded,
            ...restProps
        } = props

    const classes = `${cssStyle.button} ${outlined ? (disabled ? cssStyle.buttonOutlinedDisabled : outlinedVariants[variant]) : (disabled ? cssStyle.buttonDisabled : variants[variant])} ${className}`

    /** @type {CSSProperties} */
    const _style = {
        borderRadius: rounded,
        width:        variant === 'icon' ? 'auto' : width,
        height:       variant === 'icon' ? 'auto' : height,
        ...style
    }

    return (
        <button {...restProps}
                disabled={disabled}
                className={classes}
                style={_style}>
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
