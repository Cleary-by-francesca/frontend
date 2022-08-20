import style from './Card.module.css'

/**
 *
 * @param props {CardProps}
 * @returns {JSX.Element}
 * @constructor
 */
const Card = (props) => {
    const {
              children, className, hasIndicator, hasShadow, hasBorder, borderColor, borderWidth, indicatorColor,
              indicatorPosition, rounded,
              height, width, ...restProps
          } = props;

    /** @type {CSSProperties} */
    const borderStyle = hasBorder ? {borderColor, borderWidth, borderStyle: 'solid'} : {}

    /** @type {Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'children'>} */
    const cardProps = {
        className: `${style.card} ${hasShadow ? style.cardBorderRadius : ''} ${style.cardShadow} ${className}`,
        style:     {
            ...(hasIndicator ? {} : borderStyle),
            borderRadius: rounded,
            height,
            width
        },
    }

    /** @type {Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'children'>} */
    const indicatorProps = {
        className: indicatorPosition === 'left' ? style.cardLeftIndicator : style.cardRightIndicator,
        style:     {
            backgroundColor: indicatorColor,
            minWidth:           12,
        }
    }

    if (!hasIndicator) {
        return (
            <div
                {...restProps}
                {...cardProps}>
                {children}
            </div>
        )
    }

    return (
        <div
            className={`${style.cardWithIndicatorWrapper} ${hasShadow ? style.cardShadow : ''}`}
            style={{
                borderRadius: rounded,
                ...borderStyle
            }}>
            <div {...indicatorProps}/>
            <div
                {...restProps}
                {...cardProps}>
                {children}
            </div>
        </div>
    )
}

Card.defaultProps = {
    className:         '',
    height:            'auto',
    width:             'auto',
    hasShadow:         true,
    hasIndicator:      false,
    rounded:           4,
    indicatorColor:    '#E8E8E8',
    hasBorder:         false,
    borderColor:       '#A0A0A0',
    borderWidth:       1,
    indicatorPosition: 'left'
}

export default Card;
