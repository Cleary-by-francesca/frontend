import {TextField} from "../index.jsx";
import cssStyle from "./SelectWithSearch.module.css";
import {useEffect, useRef} from "react";
import autoAnimate from "@formkit/auto-animate";

/**
 *
 * @param props {import("../UI").SelectWithSearchProps}
 * @returns {JSX.Element}
 * @constructor
 */
const SelectWithSearch = (props) => {
    const {
              onSearchChange, options, borderWidth,
              borderColor, searchHeight,
              width, height, placeholder, selectContentComp,
              hasShadow, className, style, ...restProps
          } = props

    const selectWithSearchRef = useRef(null)

    useEffect(() => {
        if (selectWithSearchRef.current) autoAnimate(selectWithSearchRef.current)
    }, [selectWithSearchRef])

    return (
        <div
            {...restProps}
            className={`${className} ${hasShadow ? cssStyle.selectWithSearchShadow : ''}`}
            style={{
                ...style,
                width,
                height: height - 3,
            }}>
            <TextField
                type="search"
                beforeIcon={<IconRiSearchLine/>}
                placeholder={placeholder}
                onChange={(event) => onSearchChange(event.target.value)}
                borderWidth={borderWidth}
                borderColor={borderColor}
                beforeIconSize={20}
                width={width}
                height={searchHeight}/>
            <div className={cssStyle.selectWithSearchWrapper}>
                <div
                    className={`${cssStyle.selectWithSearch}`}
                    ref={selectWithSearchRef}
                    style={{
                        height:      height - searchHeight,
                        width,
                        borderWidth,
                        borderColor,
                        borderStyle: 'solid'
                    }}>
                    {options.map((options) => (
                        selectContentComp(options)
                    ))}
                </div>
            </div>
        </div>
    )
}

SelectWithSearch.defaultProps = {
    hasShadow:    true,
    width:        270,
    height:       290,
    searchHeight: 40,
    borderWidth:  1,
    borderColor:  '#515151',
}

export default SelectWithSearch
