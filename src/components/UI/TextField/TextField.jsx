import cssStyle from './TextField.module.css';
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
          } = props;


    /** @type {CSSProperties | {}} */
    const borderStyle = hasBorder ? {borderColor, borderWidth, borderStyle: 'solid'} : {}

    return (
        <div
            className={`flex-row ${className}`}
            style={{...borderStyle, borderRadius: rounded, height, width}}>
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
            <input className={cssStyle.textFieldInput} {...restProps} />
        </div>
    )
}

TextField.defaultProps = {
    className:       '',
    width:           'auto',
    height:          40,
    rounded:         5,
    hasBorder:       true,
    borderColor:     '#6F6F6F',
    beforeIconColor: '#515151',
    beforeIconSize:  24,
    borderWidth:     1,
}

export default TextField
