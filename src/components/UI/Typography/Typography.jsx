import cssStyle from './Typography.module.css';

/** @type {{[key: TypographyVariantOptions]: CSSProperties['fontSize']}} */
const sizeForVariant = {
    h1:        96,
    h2:        60,
    h3:        46,
    h4:        34,
    h5:        24,
    h6:        20,
    subtitle1: 18,
    subtitle2: 14,
    body1:     16,
    body2:     14,
    caption:   14,
    button:    14,
    button1:   14,
}

/** @type {{[key: TypographyVariantOptions]: CSSProperties['fontWeight']}} */
const fontWeightForVariant = {
    h1:        400,
    h2:        600,
    h3:        600,
    h4:        600,
    h5:        600,
    h6:        600,
    subtitle1: 600,
    subtitle2: 500,
    body1:     400,
    body2:     400,
    caption:   400,
    button:    500,
    button1:   500,
}

/**
 *
 * @param props {TypographyProps}
 * @returns {JSX.Element}
 * @constructor
 */
const Typography = (props) => {
    const {
              children, className, spacing,
              color, lineHeight, centered,
              fontWeight, fontFamily,
              variant, style, size,
              ...restProps
          } = props;

    /** @type {CSSProperties} */
    const typographyStyle = {
        ...style,
        color,
        fontFamily,
        lineHeight,
        letterSpacing: spacing,
        textAlign:     centered ? 'center' : '',
        fontWeight:    fontWeight || fontWeightForVariant[variant],
        fontSize:      size || sizeForVariant[variant],
    }

    /** @type {TypographyVariant<typeof variant>} */
    const typographyProps = {
        className: `${cssStyle.typography} ${className}`
    }

    if (variant === 'h1') return <h1 {...restProps} {...typographyProps} style={typographyStyle}>{children}</h1>
    if (variant === 'h2') return <h2 {...restProps} {...typographyProps} style={typographyStyle}>{children}</h2>
    if (variant === 'h3') return <h3 {...restProps} {...typographyProps} style={typographyStyle}>{children}</h3>
    if (variant === 'h4') return <h4 {...restProps} {...typographyProps} style={typographyStyle}>{children}</h4>
    if (variant === 'h5') return <h5 {...restProps} {...typographyProps} style={typographyStyle}>{children}</h5>
    if (variant === 'h6') return <h6 {...restProps} {...typographyProps} style={typographyStyle}>{children}</h6>
    if (variant === 'subtitle1') return <p {...restProps} {...typographyProps} style={typographyStyle}>{children}</p>
    if (variant === 'subtitle2') return <p {...restProps} {...typographyProps} style={typographyStyle}>{children}</p>
    if (variant === 'body1') return <p {...restProps} {...typographyProps} style={typographyStyle}>{children}</p>
    if (variant === 'body2') return <p {...restProps} {...typographyProps} style={typographyStyle}>{children}</p>
    if (variant === 'caption') return <p {...restProps} {...typographyProps} style={typographyStyle}>{children}</p>
    if (variant === 'button') return <p {...restProps} {...typographyProps} style={typographyStyle}>{children}</p>
    if (variant === 'button1') return <p {...restProps} {...typographyProps} style={typographyStyle}>{children}</p>
}

Typography.defaultProps = {
    className:  '',
    fontFamily: '',
    lineHeight: '',
    fontWeight: undefined,
    size:       undefined
}

export default Typography
