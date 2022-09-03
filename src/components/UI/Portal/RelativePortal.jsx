import style from "./RelativePortal.module.scss"
import {useEffect, useState, useRef} from "react";
import Portal from "./Portal.jsx";

/** @typedef {import("../index.jsx").Placement} Placement */

/** @typedef {
	placement: Placement,
	elementWidth: number,
	elementHeight: number,
	width: CSSProperties['width'],
	height: CSSProperties['height'],
	offsetX: number,
	offsetY: number
} CalcPlacementProps */
/** @typedef {(props: CalcPlacementProps) => { top: number, left: number }} CalcPlacement */

/**
 *
 * @param elem {Element}
 * @returns {{top: number, left: number}}
 */
const getCoords = (elem) => {
    const box                     = elem.getBoundingClientRect()
    const {body, documentElement} = document

    const scrollTop  = documentElement.scrollTop || body.scrollTop
    const scrollLeft = documentElement.scrollLeft || body.scrollLeft

    const clientTop  = documentElement.clientTop || body.clientTop
    const clientLeft = documentElement.clientLeft || body.clientLeft

    const top  = Math.round(box.top + scrollTop - clientTop)
    const left = Math.round(box.left + scrollLeft - clientLeft)

    return {top, left}
}

/**
 *
 * @param props
 * @returns {{top: number, left: number}}
 */
const calcPlacement = ({placement, elementWidth, elementHeight, portalDivWidth, portalDivHeight, offsetX, offsetY}) => {
    let top            = 0
    let left           = 0
    const placementArr = placement.split('-')

    if (placementArr[0] === 'top') top = -(((elementHeight + portalDivHeight) / 2) + (offsetY))
    if (placementArr[0] === 'bottom') top = ((elementHeight + portalDivHeight) / 2) + (offsetY)

    if (placementArr[1] === 'left') left = -(((elementWidth + portalDivWidth) / 2) + (offsetX))
    if (placementArr[1] === 'right') left = ((elementWidth + portalDivWidth) / 2) + (offsetX)

    return {left, top}
}

const defaultProps = {
    offsetX: 15,
    offsetY: 15,
}

/**
 *
 * @param props {import("../index.jsx").RelativePortalProps}
 * @returns {JSX.Element}
 * @constructor
 */
const RelativePortal = (props) => {
    const {children, portalContent, elementWrapperProps, portalDivProps, placement, isOpen, offsetY, offsetX} = props

    const [top, setTop]   = useState()
    const [left, setLeft] = useState()
    const elementWrapper  = useRef(null)
    const portalDivRef    = useRef(null)


    useEffect(() => {
        if (elementWrapper.current && portalDivRef.current) {
            const {height, width}                                  = elementWrapper.current.getBoundingClientRect()
            const {width: portalDivWidth, height: portalDivHeight} = portalDivRef.current.getBoundingClientRect()


            const {top, left}                        = getCoords(elementWrapper.current)
            const {top: topOffset, left: leftOffset} = calcPlacement({
                placement,
                elementWidth:  width,
                elementHeight: height,
                portalDivWidth,
                portalDivHeight,
                offsetX,
                offsetY,
            })

            const portalTop  = top + (height / 2) - (portalDivHeight / 2) + topOffset
            const portalLeft = left + (width / 2) - (portalDivWidth / 2) + leftOffset

            const tooltipTopPreventOverflow  = Math.min(Math.max(portalTop, 0), window.innerHeight - portalDivHeight)
            const tooltipLeftPreventOverflow = Math.min(Math.max(portalLeft, 0), window.innerWidth - portalDivWidth)

            setTop(() => tooltipTopPreventOverflow)
            setLeft(() => tooltipLeftPreventOverflow)
        }
    }, [isOpen, elementWrapper, portalDivRef])

    return (
        <>
            <Portal>
                {isOpen && (
                    <div
                        className={style.relativePortal}
                        {...portalDivProps}
                        style={{top, left}}
                        ref={portalDivRef}>

                        {portalContent}

                    </div>
                )}
            </Portal>
            <div
                {...elementWrapperProps}
                ref={elementWrapper}
                className={`w-fit ${elementWrapperProps.className}`}>
                {children}
            </div>
        </>
    )
}

RelativePortal.defaultProps = defaultProps

export default RelativePortal
