import style from './Avatar.module.css';


/**
 *
 * @param props {AvatarProps}
 * @returns {JSX.Element}
 * @constructor
 */
const Avatar = (props) => {
    const {src, alt, size, borderWidth, hasIndicator, borderColor, className} = props;

    return (
        <div
            style={{width: size, height: size}}
            className={`relative ${className}`}>
            <img
                className={style.avatar}
                src={src}
                alt={alt}
                style={{
                    width:  size,
                    height: size,
                    borderWidth,
                    borderColor,
                }}
            />
            {
                hasIndicator && (
                    <div
                        className={style.avatarStatusWrapper}
                        style={{
                            top:    size / 2 - (borderWidth * 2),
                            left:   -borderWidth * 2,
                            width:  size / 3,
                            height: size / 3,
                        }}>
                        <div
                            className={style.avatarStatus}
                            style={{
                                backgroundColor: borderColor
                            }}/>
                    </div>
                )
            }
        </div>
    );
}

Avatar.defaultProps = {
    className:   '',
    borderWidth: 1,
    borderColor: 'none',
    hasStatus:   false,
}

export default Avatar
