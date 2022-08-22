import styles from './TextField.module.css';
import Icon from '../Icon/Icon';

/**
 *
 * @param props {TextFieldProps}
 * @returns {JSX.Element}
 * @constructor
 */

const TextField = (props) => {
    const {
              style, children, className, beforeIcon, beforeIconSize, beforeIconColor, rounded, height, width,
              hasBorder, borderColor, borderWidth, ...restProps
          }           = props;
    /** @type {CSSProperties | {}} */
    const borderStyle = hasBorder ? {borderColor, borderWidth, borderStyle: 'solid'} : {}

    return (
        <>
            {beforeIcon && (
                <div className="relative">
                    <Icon
                        color={beforeIconColor}
                        height={height}
                        width={beforeIconSize}
                        size={beforeIconSize}
                        className={`mx-8 absolute align-center flex-row`}>
                        {beforeIcon}
                    </Icon>
                </div>
            )}
            <input
                className={`${beforeIcon ? 'pl-44' : ''} pr-14 ${className}`}
                style={{...borderStyle, borderRadius: rounded, height, width}}
                {...restProps} />
        </>
    )
}

TextField.defaultProps = {
    className:       '',
    height:          40,
    width:           'auto',
    rounded:         5,
    hasBorder:       true,
    borderColor:     '#A0A0A0',
    beforeIconColor: '#6F6F6F',
    beforeIconSize:  24,
    borderWidth:     1,
}

export default TextField
