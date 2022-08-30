import Select from "../Select/Select.jsx";
import moment from "moment";
import {monthsList} from "../../../Util/Time.js";


/** @typedef {{
 * onChange: (value: string) => void,
}} MonthPickerProps */

/**
 * @param props {MonthPickerProps}
 * @returns {JSX.Element}
 * @constructor
 */
const MonthPicker = ({onChange, value, defaultValue}) => {

    return (
        <Select
            noBorder
            blurInputOnSelect={true}
            isSearchable={false}
            defaultValue={defaultValue}
            menuAnchorPoint="right"
            menuWidth={180}
            singleValueWeight={600}
            singleValueSize={16}
            singleValueFontFamily={'Inter'}
            singleValueSpacing={'0.38px'}
            singleValueColor={'#000000'}
            dropdownIconColor={'#94a3b8'}
            value={value}
            onChange={onChange}
            options={monthsList}/>
    )
}

MonthPicker.defaultProps = {
    onChange:     () => '',
    defaultValue: monthsList[monthsList.findIndex(_month => _month.value === moment().format('MM'))]
}


export default MonthPicker
