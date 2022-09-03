import cssStyle from './Card.module.css'
import {motion} from "framer-motion";

/**
 *
 * @param props {import("../UI").CardProps}
 * @returns {JSX.Element}
 * @constructor
 */
const Card = (props) => {
    const {
              children, className, hasIndicator,
              backgroundColor, style,
              hasShadow, hasBorder, borderColor, borderWidth, rounded,
              height, width, ...restProps
          } = props

    /** @type {CSSProperties} */
    const borderStyle = hasBorder ? {borderColor, borderWidth, borderStyle: 'solid'} : {}

    /** @type {Omit<import("framer-motion").HTMLMotionProps<"div">, 'children'>} */
    const cardProps = {
        className: `${cssStyle.card} ${hasShadow ? cssStyle.cardShadow : ''} ${className}`,
        style:     {
            ...(hasIndicator ? {} : borderStyle),
            borderRadius: rounded,
            backgroundColor,
            height,
            width,
            ...style
        },
    }

    return (
        <motion.div
            {...cardProps}
            {...restProps}>
            {children}
        </motion.div>
    )
}

Card.defaultProps = {
    className:         '',
    height:            'auto',
    width:             'auto',
    hasShadow:         true,
    rounded:           4,
    hasBorder:         false,
    borderColor:       '#A0A0A0',
    borderWidth:       1,
    backgroundColor:   '#ffffff',
}

export default Card;
