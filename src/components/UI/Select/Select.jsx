import Select, {defaultTheme} from "react-select"
import produce from "immer";
import {Typography} from "../index.jsx";
import {AnimatePresence, motion} from "framer-motion";
import {fadeInOutAndDownToTop} from "../Utils/utils.js";
import {Control, DropdownIndicator, SingleValue, MenuList} from "./SelectComponents.jsx";


/**
 * @param props {import("../UI").SelectProps}
 * @returns {JSX.Element}
 * @constructor
 */
const AppSelect = (props) => {
    const {
              components, width, height, menuWidth, menuAnchorPoint, className,
              singleValueVariant, singleValueColor, singleValueWeight,
              singleValueFontFamily, singleValueSize, singleValueSpacing,
              isSelectable, dropdownIconColor, dropdownIconSize, noBorder, label,
              styles,
              ...restProps
          } = props


    const customStyles = {
        singleValue: (provided, state) => ({
            ...provided,
            borderRadius: 5,
            primary:      isSelectable ? '#53326C' : '#515151',
        }),

        control: (provided, state) => ({
            ...provided,
            borderStyle: noBorder ? 'none' : 'solid',
            boxShadow:   noBorder ? 'none' : '',
            borderColor: '#515151',
        }),

        dropdownIndicator: (provided, state) => ({
            ...provided,
            color:    dropdownIconColor,
            fontSize: dropdownIconSize,
        }),

        option: (provided, state) => ({
            ...provided,
            cursor: 'pointer',
        }),

        menu: (provided, state) => ({
            ...provided,
            zIndex: 200,
            width:  menuWidth,
            ...(menuAnchorPoint === 'right') ? {right: 0} : {left: 0},
        }),
        ...styles
    }

    return (
        <section
            style={{width, height}}
            className={`flex-col relative h-full ${className}`}>
            {label && (
                <AnimatePresence>
                    {props.value?.label && (
                        <motion.label
                            {...fadeInOutAndDownToTop}
                            style={{top: -9, left: 12, backgroundColor: '#fff', zIndex: 1}}
                            className="w-fit absolute px-4">
                            <Typography
                                size={13}
                                fontWeight={400}
                                variant={'button1'}>
                                {label}
                            </Typography>
                        </motion.label>
                    )}
                </AnimatePresence>
            )}
            <Select
                {...restProps}
                className="h-full"
                theme={produce(defaultTheme, (draft) => {
                    draft.colors.primary   = '#53326C'
                    draft.colors.primary50 = '#d5c9e7'
                    draft.colors.primary25 = '#BAADC4'
                })}
                blurInputOnSelect={true}
                options={props.options}
                styles={customStyles}
                components={{
                    IndicatorSeparator: () => null,
                    DropdownIndicator,
                    Control,
                    SingleValue:        (props) => SingleValue({
                        ...props, singleValueVariant, singleValueWeight, singleValueColor, singleValueFontFamily,
                        singleValueSpacing, singleValueSize
                    }),
                    MenuList,
                    ...components
                }}/>
        </section>
    )
}

AppSelect.defaultProps = {
    className:          '',
    singleValueVariant: 'button1',
    singleValueColor:   '#515151',
    dropdownIconColor:  '#515151',
    dropdownIconSize:   16,
    noBorder:           false,
    isSelectable:       true,
    height:             '100%',
    menuWidth:          '100%',
    menuAnchorPoint:    'left',
}

export default AppSelect
