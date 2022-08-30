import {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
import cssStyle from "./Navigation.module.css"

/**
 *
 * @param props {import("../UI").NavigationProps}
 * @returns {JSX.Element}
 * @constructor
 */
const Navigation = (props) => {
    const {className, children, navigationItem, horizontal, navigationOptions, ...restProps} = props

    const [activeIndex, setActiveIndex] = useState(navigationOptions.findIndex(item => item.to === window.location.pathname))
    const [style, setStyle]             = useState({})
    const isFirstRender                 = useRef(true)
    const navigationWrapperRef          = useRef(null)

    const controlActiveTab = () => {
        if (navigationWrapperRef.current) {
            const navItem = navigationWrapperRef.current.querySelectorAll('a')
            let distance  = 0


            navItem.forEach(tab => {
                if (!horizontal) distance += tab.offsetHeight

                if (horizontal) distance += tab.offsetWidth
            })

            const style = {}

            if (!horizontal) style.transform = `translateY(${activeIndex * (distance / navItem.length)}px)`

            if (horizontal) style.transform = `translateX(${activeIndex * (distance / navItem.length)}px)`

            if (isFirstRender.current) {
                style.transition = 'none'

                setTimeout(() => {
                    isFirstRender.current = false
                }, 1)
            }

            setStyle(style)
        }
    }

    useEffect(() => {
        controlActiveTab()
    }, [activeIndex])

    return (
        <div

            className={`${horizontal ? 'flex-row' : 'flex-col'} h-full`} {...restProps}>
            <motion.span
                initial={{
                    opacity: 0
                }}
                animate={navigationWrapperRef.current ? {
                    opacity: 1
                } : {}}
                transition={{
                    duration: 0.4,
                }}
                className={`${className} ${cssStyle.navigationIndicator}`}
                style={style}>
                <div className="relative">
                    <div className={cssStyle.navigationIndicatorShadow}/>
                </div>
            </motion.span>

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
    className:  '',
    horizontal: false,
}

export default Navigation
