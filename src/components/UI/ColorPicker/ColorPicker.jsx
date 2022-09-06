import AppSelect from "../Select/Select";
import {components} from "react-select";

/**
 *
 * @param props {import("react-select").OptionProps<any>}
 * @returns {JSX.Element}
 * @constructor
 */
const Option = (props) => {
    const {data, ...restProps} = props

    return (
        <components.Option {...restProps}>
            <div className="ml-6 my-1"
                 style={{
                     width:        16,
                     height:       16,
                     borderRadius: '50%',
                     background:   data.value
                 }}
            />
        </components.Option>
    )
}


const SingleValue = (props) => {
    const {data, ...restProps} = props

    return (
        <components.SingleValue {...restProps}>
            <div
                className="my-1 ml-6"
                style={{
                    width:        16,
                    height:       16,
                    borderRadius: '50%',
                    background:   data.value
                }}/>
        </components.SingleValue>
    )
}


/**
 *
 * @param props {import("../UI").SelectProps}
 * @returns {JSX.Element}
 * @constructor
 */
const ColorPicker = (props) => {
    const {components, styles, ...restProps} = props


    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            paddingLeft: 0,
            cursor:      'pointer',
        }),

        valueContainer: (provided, state) => ({
            ...provided,
            padding: 0,
        }),
        ...styles
    }

    return (
        <AppSelect
            {...restProps}
            styles={customStyles}
            components={{
                Option,
                SingleValue,
                ...components
            }}
        />
    )
}

export default ColorPicker
