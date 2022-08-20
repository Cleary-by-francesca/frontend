import cssStyle from './Typography.module.css';

/**
 *
 * @param props {TypographyProps}
 * @returns {JSX.Element}
 * @constructor
 */
const Typography = (props) => {
    const {children, className, color, variant, style, size, ...restProps} = props;

    /**
     *
     * @type {CSSProperties}
     */
    const typographyStyle = {
        ...style,
        color,
        fontSize: size,
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
}

Typography.defaultProps = {
    className: ''
}

export default Typography
