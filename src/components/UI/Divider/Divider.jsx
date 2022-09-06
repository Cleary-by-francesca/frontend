import style from './Divider.module.css';

/**
 *
 * @param props {import("UI").HRProps}
 * @returns {JSX.Element}
 * @constructor
 */
const Divider = (props) => {
    const {horizontal, className, color, opacity, ...restProps} = props

    return (
        <hr
            {...restProps}
            className={`${horizontal ? style.dividerHorizontal : style.dividerVertical} ${className}`}
            style={{
                borderColor:     color,
                backgroundColor: color,
                opacity
            }}/>
    );
}

Divider.defaultProps = {
    horizontal: false,
    color:      '#e0e0e0',
    opacity:    1,
    className:  ''
}

export default Divider
