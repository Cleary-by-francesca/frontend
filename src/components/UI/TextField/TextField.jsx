import cssStyle from './TextField.module.css';
import Icon from '../Icon/Icon';
import {Typography} from "../index.jsx";
import {motion, AnimatePresence} from "framer-motion";
import {fadeInOutAndDownToTop} from "../Utils/utils.js";

/**
 *
 * @param props {import("../UI").TextFieldProps}
 * @returns {JSX.Element}
 * @constructor
 */

const TextField = (props) => {
    const {
              style, children, className, beforeIcon, beforeIconSize,
              beforeIconColor, rounded, height, width, color, lightPlaceholder,
              noBorder, borderColor, borderWidth, label,fontSize,
              fontWeight, letterSpacing, ...restProps
          } = props;


    /** @type {CSSProperties | {}} */
    const borderStyle = noBorder ? {} : {borderColor, borderWidth, borderStyle: 'solid'}

    return (
        <section className={`flex-col relative ${className}`}>
            {label && (
                <AnimatePresence>
                    {props.value?.length > 0 && (
                        <motion.label
                            {...fadeInOutAndDownToTop}
                            style={{top: -9, left: 12, backgroundColor: '#fff'}}
                            className="w-fit absolute px-4">
                            <Typography
                                size={13}
                                fontWeight={400}
                                variant={'button1'}>
                                {label}
                            </Typography>
                        </motion.label>
                    )}
                </AnimatePresence>
            )}
            <div
                className={`flex-row`}
                style={{
                    ...borderStyle,
                    borderRadius: rounded,
                    height,
                    width
                }}>
                {beforeIcon && (
                    <Icon
                        color={beforeIconColor}
                        height={height - (borderWidth * 2)}
                        width={beforeIconSize}
                        size={beforeIconSize}
                        className={`mx-8 align-center flex-row`}>
                        {beforeIcon}
                    </Icon>
                )}
                <input
                    className={`${cssStyle.textFieldInput} ${lightPlaceholder ? cssStyle.lightPlaceholder : ''} ${!beforeIcon ? 'pl-10' : ''}`}
                    {...restProps}
                    style={{
                        fontSize,
                        fontWeight,
                        letterSpacing,
                        color,
                        ...style
                    }}/>
            </div>
        </section>
    )
}

TextField.defaultProps = {
    className:        '',
    width:            'auto',
    height:           40,
    rounded:          5,
    lightPlaceholder: false,
    noBorder:         false,
    fontSize:         14,
    fontWeight:       500,
    letterSpacing:    0.1,
    color:            '#515151',
    borderColor:      '#6F6F6F',
    beforeIconColor:  '#515151',
    beforeIconSize:   24,
    borderWidth:      1,
}

export default TextField
