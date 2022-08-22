import cssStyle from './Drawer.module.css'
import {Icon, Typography} from "../index.jsx"

/**
 *
 * @param props {DrawerProps}
 * @returns {JSX.Element}
 * @constructor
 */
const Drawer = (props) => {
    const {
              children, position, labelContent, onLabelClick, labelColor, top, height, className, isOpen, style,
              ...restProps
          } = props

    /** @type {CSSProperties}*/
    const positionStyle = position === 'left' ? {left: 0} : {right: 0}

    /** @type {CSSProperties}*/
    const labelPositionStyle = position === 'left' ? {left: 136} : {right: 136}

    return (
        <div className={`relative ${isOpen ? cssStyle.drawerWrapperOpen : cssStyle.drawerWrapperClosed}`}>

            <div
                {...restProps}
                className={`${cssStyle.drawer} ${className}`}
                style={{
                    ...style,
                    ...positionStyle,
                    height,
                    top
                }}>

                {children}
            </div>

            <button
                onClick={onLabelClick}
                className={`px-10 align-center justify-between ${cssStyle.drawerLabel}`}
                style={{
                    ...labelPositionStyle,
                    color:    labelColor,
                    fontSize: 14,
                }}>
                <Typography variant={'subtitle1'}>
                    {labelContent}
                </Typography>
                <Icon
                    className={isOpen ? cssStyle.drawerLabelIconOpen : cssStyle.drawerLabelIconClosed}
                    size={18} width={18} height={18}>
                    <IconMdiChevronDown/>
                </Icon>
            </button>

        </div>
    )
}

Drawer.defaultProps = {
    className:  '',
    top:        200,
    height:     600,
    position:   'left',
    labelColor: '#6F6F6F'
}

export default Drawer;
