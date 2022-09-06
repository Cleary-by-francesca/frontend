import {components} from "react-select";
import cssStyle from "./Select.module.css";
import {Typography} from "../index.jsx";

/**
 *
 * @param props {import("react-select").DropdownIndicatorProps<any> & {
 * dropdownIcon: ReactNode;
 * dropdownIconSize: CSSProperties['fontSize'];
 * dropdownIconColor: `#${string}`;
 * }}
 * @returns {JSX.Element}
 * @constructor
 */
export const DropdownIndicator = (props) => {

    return (
        <components.DropdownIndicator
            className={`${cssStyle.dropdownIndicator} ${props.isFocused ? cssStyle.dropdownIndicatorFocused : ''}`}
            {...props}>
            <IconIonChevronDown/>
        </components.DropdownIndicator>
    )
}

/**
 *
 * @param props {import("react-select").SingleValueProps<any> & {
 * singleValueVariant: TypographyVariantOptions;
 * singleValueColor: CSSProperties[color];
 * singleValueWeight: CSSProperties['fontWeight'];
 * singleValueSize: CSSProperties['fontSize'];
 * singleValueFontFamily: CSSProperties['fontFamily'];
 * singleValueSpacing: CSSProperties['letterSpacing'];
 * }}
 * @returns {JSX.Element}
 * @constructor
 */
export const SingleValue = (props) => {
    const {
              children, singleValueVariant, singleValueSize,
              singleValueColor, singleValueFontFamily, singleValueSpacing,
              singleValueWeight, ...restProps
          } = props


    return (
        <components.SingleValue {...restProps}>
            <Typography
                variant={singleValueVariant}
                fontWeight={singleValueWeight}
                size={singleValueSize}
                fontFamily={singleValueFontFamily}
                spacing={singleValueSpacing}
                color={singleValueColor}>
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
export const Control = (props) => {
    const {children, className, ...restProps} = props

    return (
        <components.Control
            {...restProps}
            className={`h-full ${cssStyle.selectControl} ${className}`}>

            {children}
        </components.Control>
    )
}


/**
 *
 * @param props {import("react-select").MenuListProps<any>}
 * @returns {JSX.Element}
 * @constructor
 */
export const MenuList = (props) => {
    const {children, className, ...restProps} = props

    return (
        <components.MenuList
            className={`${cssStyle.selectMenuList} ${className}`}
            {...restProps}>
            {children}
        </components.MenuList>
    )
}
