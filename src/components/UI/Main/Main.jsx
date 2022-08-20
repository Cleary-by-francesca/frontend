import style from './Main.module.css';

/**
 *
 * @param props {MainProps}
 * @returns {JSX.Element}
 * @constructor
 */
const Main = (props) => {
    const {className, children, ...restProps} = props;

    return (
        <div {...restProps} className={`${style.main} ${className}`}>
            {children}
        </div>
    )
}

Main.defaultProps = {
    className: ''
}

export default Main
