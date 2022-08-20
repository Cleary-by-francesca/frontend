import style from './SideBar.module.css';

/**
 *
 * @param props {SideBarProps}
 * @constructor
 */
const SideBar = (props) => {
    const {children, className, ...restProps} = props;

    return (
        <nav
            {...restProps}
            className={`${style.sideBar} ${className}`}>
            {children}
        </nav>
    )
}

SideBar.defaultProps = {
    className: ''
}

export default SideBar
