import cssStyle from './Button.module.css'


const variants = {
    primary: cssStyle.buttonPrimary,
    icon:    cssStyle.buttonIcon,
}

const outlinedVariants = {
    default: cssStyle.buttonOutlinedDefault,
    primary: cssStyle.buttonOutlinedPrimary,
}

/**
 *
 * @param props {import("../UI").ButtonProps}
 * @returns {JSX.Element}
 * @constructor
 */
const Button = (props) => {
    const
        {
            children, className,
            noShadow,
            variant, disabled,
            outlined, icon,
            style, size,
            width, height,
            rounded, removePadding,
            ...restProps
        } = props

    const classes = [cssStyle.button, className]

    if (icon) classes.push(cssStyle.icon)

    if (!icon) {
        if (!removePadding) classes.push('px-20')
        if (outlined) classes.push(disabled ? cssStyle.buttonOutlinedDisabled : outlinedVariants[variant])
        if (!outlined) classes.push(disabled ? cssStyle.buttonDisabled : variants[variant])
    }

    if (!icon && !noShadow) classes.push(cssStyle.buttonShadow)


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
                className={`${classes.join(' ')}`}
                style={_style}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    className:     '',
    variant:       'primary',
    noShadow:      false,
    disabled:      false,
    removePadding: false,
    rounded:       4,
    icon:          false,
    size:          18,
    width:         'fit-content',
    height:        40,
    outlined:      false,
}

export default Button
