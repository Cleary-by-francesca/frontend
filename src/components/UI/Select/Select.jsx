import cssStyle from './Select.module.css'
import {default as ReactSelect, components} from "react-select"
import produce from "immer";
import Icon from "../Icon/Icon.jsx";
import {useEffect, useRef, useState} from "react";
import {Typography} from "../index.jsx";

/**
 *
 * @param props {import("react-select").DropdownIndicatorProps<any> & {dropdownIcon: ReactNode; dropdownIconSize: CSSProperties['fontSize']; dropdownIconColor: `#${string}`}}
 * @returns {JSX.Element}
 * @constructor
 */
const DropdownIndicator = (props) => {
    const {isFocused, className, dropdownIcon, dropdownIconColor, dropdownIconSize, ...restProps} = props

    return (
        <components.DropdownIndicator
            {...restProps}
            theme={produce(props.theme, (draft) => {
                draft.colors.neutral20 = dropdownIconColor
            })}
            className={`${cssStyle.dropdownIndicator} ${isFocused ? cssStyle.dropdownIndicatorFocused : ''} ${className || ''}`}>
            <Icon
                size={dropdownIconSize}
                style={{
                    transform: 'scaleX(1.05) translateY(2px)'
                }}>
                {dropdownIcon}
            </Icon>
        </components.DropdownIndicator>
    )
}

/**
 *
 * @param props {import("react-select").ContainerProps}
 * @returns {JSX.Element}
 * @constructor
 */
const SelectContainer = (props) => {
    const {children, ...restProps} = props

    return (
        <components.SelectContainer {...restProps}>
            {children}
        </components.SelectContainer>
    )
}

/**
 *
 * @param props {import("react-select").OptionProps}
 * @returns {JSX.Element}
 * @constructor
 */
const Option = (props) => {
    return (
        <components.Option
            className={`${cssStyle.selectOption}`}
            {...props}>
            {props.children}
        </components.Option>
    )
}

/**
 *
 * @param props {import("react-select").SingleValueProps<any> & {singleValueVariant: TypographyVariantOptions; singleValueColor: `CSSProperties['color]`}}
 * @returns {JSX.Element}
 * @constructor
 */
const SingleValue = (props) => {
    const {children, singleValueVariant, singleValueColor, ...restProps} = props

    return (
        <components.SingleValue {...restProps}>
            <Typography variant={singleValueVariant} color={singleValueColor}>
                {children}
            </Typography>
        </components.SingleValue>
    )
}

/**
 *
 * @param props {import("react-select").ControlProps<any> & {isSelectable: boolean, noBorder: boolean}}
 * @returns {JSX.Element}
 * @constructor
 */
const Control = (props) => {
    const {children, isFocused, isSelectable, noBorder, ...restProps} = props

    return (
        <components.Control {...{...restProps, isFocused: false}}
                            className={`${cssStyle.selectControl}`}

                            getStyles={(...args) => {
                                const styles = props.getStyles(...args)
                                return produce(styles, (draft) => {
                                        draft.outline     = isSelectable ? 'none' : styles.outline
                                        draft.borderStyle = noBorder ? '' : 'solid'
                                    }
                                )
                            }}
                            theme={produce(props.theme, (draft) => {
                                draft.borderRadius     = 5
                                draft.colors.primary   = isSelectable ? '#53326C' : '#515151'
                                draft.colors.neutral20 = '#515151'
                                // draft.colors.neutral30 = theme.colors.gray_200
                            })}>
            {children}
        </components.Control>
    )
}

/**
 *
 * @param props {import("react-select").MenuProps<any> & {width: number, anchorPoint: 'right' | 'left'}}
 * @returns {JSX.Element}
 * @constructor
 */
const Menu = (props) => {
    const {children, className, width, getStyles, anchorPoint, ...restProps} = props


    return (
        <components.Menu
            className={`${className || ''} ${cssStyle.selectMenu}`}
            {...restProps}
            getStyles={(...args) => {
                const styles = getStyles(...args)
                return produce(styles, (draft) => {
                        draft.width = width
                        if (anchorPoint === 'right') draft.right = 0
                        if (anchorPoint === 'left') draft.left = 0
                    }
                )
            }}
            style={{
                width: width,
                ...(anchorPoint === 'right') ? {right: 0} : {left: 0},
                ...getStyles
            }}>
            {children}
        </components.Menu>
    )
}


/**
 * @param props {SelectProps}
 * @returns {JSX.Element}
 * @constructor
 */
const Select = (props) => {
    const {
              components, menuWidth, menuAnchorPoint,
              singleValueVariant, singleValueColor,
              isSelectable, onBlur, onFocus,
              dropdownIcon, dropdownIconColor, dropdownIconSize,
              noBorder,
              ...restProps
          } = props

    return (
        <ReactSelect
            components={{
                IndicatorSeparator: () => null,
                DropdownIndicator:  (props) => DropdownIndicator({
                    ...props, dropdownIcon, dropdownIconColor, dropdownIconSize
                }),
                Control:            (props) => Control({...props, isSelectable, noBorder}),
                SelectContainer,
                Option,
                SingleValue:        (props) => SingleValue({...props, singleValueVariant, singleValueColor}),
                Menu:               (props) => Menu({width: menuWidth, anchorPoint: menuAnchorPoint, ...props}),
                ...components
            }}
            {...restProps}/>
    )
}

Select.defaultProps = {
    singleValueVariant: 'button1',
    singleValueColor:   '#515151',
    dropdownIcon:       <IconIonChevronDown/>,
    dropdownIconColor:  '#515151',
    dropdownIconSize:   16,
    noBorder:           false,
    isSelectable:       true,
    menuWidth:          '100%',
    menuAnchorPoint:    'left',
}

export default Select
