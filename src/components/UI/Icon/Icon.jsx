import style from './Icon.module.css';


/**
 *
 * @param props {IconProps}
 * @returns {JSX.Element}
 * @constructor
 */
const Icon = (props) => {
    const {children, size, height, width, color, className, ...restProps} = props;

    return (
        <div
            {...restProps}
            className={`${style.icon} ${className}`}
            style={{
                height,
                width,
                fontSize: size,
                color:    color
            }}>
            {children}
        </div>
    )
}

Icon.defaultProps = {
    className: '',
    size:      '1.5rem',
    height:    'auto',
    width:     'auto',
}

export default Icon
