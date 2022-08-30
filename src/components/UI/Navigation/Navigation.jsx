import {useEffect, useRef, useState} from "react";
import cssStyle from "./Navigation.module.css"

/**
 *
 * @param props {import("../UI").NavigationProps}
 * @returns {JSX.Element}
 * @constructor
 */
const Navigation = (props) => {
    const {className, children, navigationItem, navigationOptions, ...restProps} = props

    const [activeIndex, setActiveIndex] = useState(0)
    const [style, setStyle]             = useState({})
    const navigationWrapperRef          = useRef(null)

    const controlActiveTab = () => {
        if (navigationWrapperRef.current) {
            const navItem         = navigationWrapperRef.current.querySelectorAll('a')
            let distance = 0

            navItem.forEach(tab => distance += tab.offsetHeight)

            const style = {
                transform: `translateY(${activeIndex * (distance  / navItem.length)}px)`,
            }
            setStyle(style)
        }
    }

    useEffect(() => {
        controlActiveTab()
    }, [activeIndex])

    return (
        <div className="flex-col h-full" {...restProps}>
            <span
                className={`${className} ${cssStyle.navigationIndicator}`}
                style={style}>
                <div className="relative">
                <div className={cssStyle.navigationIndicatorShadow}/>
                </div>
            </span>

            <div
                ref={navigationWrapperRef}
                className="h-full">
                {navigationOptions.map((option, index) => (
                    navigationItem(activeIndex, setActiveIndex, option, index)
                ))}
            </div>
        </div>
    )
}

Navigation.defaultProps = {
    className: '',
}

export default Navigation
