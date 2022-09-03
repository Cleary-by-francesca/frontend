import style from './AppBar.module.css'

/**
 *
 * @param props {import("../UI").AppBarProps}
 * @returns {JSX.Element}
 * @constructor
 */
const AppBar = (props) => {
    const {children, className, ...restProps} = props

    return (
        <div {...restProps} className={`${style.appBar} ${className}`}>
            {children}
        </div>
    )
}

AppBar.defaultProps = {
    className: ''
}

export default AppBar
