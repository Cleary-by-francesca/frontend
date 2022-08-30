import cssStyle from './Card.module.css'
import { motion } from "framer-motion";

/**
 *
 * @param props {CardProps}
 * @returns {JSX.Element}
 * @constructor
 */
const Card = (props) => {
    const {
        children, className, hasIndicator,
        backgroundColor,
        style,
        hasShadow, hasBorder, borderColor, borderWidth, indicatorColor,
        indicatorPosition, rounded, status,
        height, width, ...restProps
    } = props

    /** @type {CSSProperties} */
    const borderStyle = hasBorder ? { borderColor, borderWidth, borderStyle: 'solid' } : {}

    /** @type {Omit<HTMLMotionProps<"div">, 'children'>} */
    const cardProps = {
        className: `${cssStyle.card} ${hasShadow ? cssStyle.cardShadow : ''} ${className}`,
        style: {
            ...(hasIndicator ? {} : borderStyle),
            borderRadius: rounded,
            backgroundColor,
            height,
            width,
            ...style
        },
    }

    /** @type {Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'children'>} */
    const indicatorProps = {
        className: indicatorPosition === 'left' ? cssStyle.cardLeftIndicator : cssStyle.cardRightIndicator,
        style: {
            backgroundColor: indicatorColor,
            minWidth: 12,
        }
    }

    if (!hasIndicator) {
        return (
            <motion.div
                {...cardProps}
                {...restProps}>
                {children}
            </motion.div>
        )
    }

    return (
        <div
            className={`${cssStyle.cardWithIndicatorWrapper} ${hasShadow ? cssStyle.cardShadow : ''}`}
            style={{
                borderRadius: rounded,
                ...borderStyle,
                ...style,
            }}>
            <div {...indicatorProps} />
            <motion.div
                {...cardProps}
                {...restProps}>
                {children}
            </motion.div>
        </div>
    )
}

Card.defaultProps = {
    className: '',
    height: 'auto',
    width: 'auto',
    hasShadow: true,
    hasIndicator: false,
    rounded: 4,
    indicatorColor: '#E8E8E8',
    hasBorder: false,
    borderColor: '#A0A0A0',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    indicatorPosition: 'left'
}

export default Card;
