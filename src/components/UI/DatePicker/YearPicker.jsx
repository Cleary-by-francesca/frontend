import Select from "../Select/Select.jsx";
import moment from "moment";

/** @typedef {{
 * onChange: (value: string) => void,
}} YearPickerProps */

/**
 * @param props {YearPickerProps}
 * @returns {JSX.Element}
 * @constructor
 */
const YearPicker = ({onChange, options, defaultValue, value}) => {

    return (
        <Select
            noBorder
            blurInputOnSelect={true}
            isSearchable={false}
            value={value}
            onChange={onChange}
            defaultValue={defaultValue}
            menuWidth={180}
            singleValueWeight={600}
            singleValueSize={16}
            singleValueFontFamily={'Inter'}
            singleValueSpacing={'0.38px'}
            singleValueColor={'#000000'}
            dropdownIconColor={'#94a3b8'}
            options={options}/>
    )
}

YearPicker.defaultProps = {
    onChange: () => '',
}


export default YearPicker
