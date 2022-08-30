import cssStyle from './DatePicker.module.css'
import Icon from "../Icon/Icon.jsx";
import {Button, Col, Row, Typography} from "../index.jsx";
import {useEffect, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {openAnimation} from "../Utils/utils.js";
import moment from "moment";
import Backdrop from "../Backdrop/Backdrop.jsx";
import Portal from "../Portal/Portal.jsx";
import YearPicker from "./YearPicker.jsx";
import MonthPicker from "./MonthPicker.jsx";
import DayPicker from "./DayPicker.jsx";
import DatePickerHeader from "./DatePickerHeader.jsx";
import {monthsList} from "../../../Util/Time.js";

/**
 *
 * @param props {DatePickerProps}
 * @returns {JSX.Element}
 * @constructor
 */
const DatePicker = (props) => {
    const {
              width, height, rounded, hasIcon,
              beforeIconColor, beforeIconSize, hasBorder,
              borderColor, borderWidth, color, currentDate,
              calendarMarginTop, calendarMarginLeft, calendarMarginRight, calendarMarginBottom,
              hasDropdownIndicator, dropdownIndicatorColor, dropdownIndicatorSize,
              daysToEndDate, yearsOptions,
              onSelect, onSet, onClear
          } = props

    const [isOpen, setIsOpen]               = useState(false)
    const [selectedDate, setSelectedDate]   = useState(moment(currentDate).toISOString())
    const [displayDate, setDisplayDate]     = useState(moment(currentDate).format('MMM, D, YYYY'))
    const [isSetDisabled, setIsSetDisabled] = useState(false)


    /** @type {CSSProperties | {}} */
    const borderStyle = hasBorder ? {borderColor, borderWidth, borderStyle: 'solid'} : {}


    const [year, setYear]   = useState(yearsOptions[yearsOptions.findIndex(_year => _year.value === moment().format('YYYY'))])
    const [month, setMonth] = useState(monthsList[monthsList.findIndex(_month => _month.value === moment().format('MM'))])

    return (
        <div>
            <div
                onClick={() => {
                    if (!isOpen) {
                        setSelectedDate(moment(currentDate).toISOString())
                        setIsSetDisabled(false)
                    }
                    setIsOpen(!isOpen)
                }}
                className={`${cssStyle.datePickerInput} flex-row align-center`}
                style={{
                    width,
                    height,
                    ...borderStyle,
                    borderRadius: rounded,
                }}>

                {hasIcon && (
                    <Icon
                        className={`mx-10 align-center flex-row`}
                        color={beforeIconColor}
                        height={height - (borderWidth * 2)}
                        width={beforeIconSize}
                        size={beforeIconSize}>
                        <IconOcticonCalendar16/>
                    </Icon>
                )}

                <Typography
                    color={color}
                    size={14}
                    variant={'button1'}>
                    {displayDate}
                </Typography>

                {hasDropdownIndicator && (
                    <Icon
                        className={`align-center justify-end flex-row ml-auto mr-10 ${cssStyle.dropdownIndicator} ${isOpen ? cssStyle.dropdownIndicatorOpen : ''}`}
                        color={dropdownIndicatorColor}
                        height={height - (borderWidth * 2)}
                        width={dropdownIndicatorSize}
                        size={dropdownIndicatorSize}>
                        <IconMdiChevronDown/>
                    </Icon>
                )}
            </div>

            {isOpen && (
                <Portal>
                    <Backdrop
                        isTransparent
                        active={isOpen}
                        onClick={() => setIsOpen(false)}/>
                </Portal>
            )}

            <div className="relative">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            {...openAnimation}
                            className={`absolute ${cssStyle.datePicker}`}
                            style={{
                                marginTop:    calendarMarginTop,
                                marginLeft:   calendarMarginLeft,
                                marginRight:  calendarMarginRight,
                                marginBottom: calendarMarginBottom,
                            }}>

                            <DatePickerHeader startDate={selectedDate} daysGap={daysToEndDate}/>

                            <Row className="pt-14 pb-10 px-16 justify-between">
                                <Col style={{width: 144}}>
                                    <MonthPicker
                                        value={month}
                                        onChange={(_month) => {
                                            setMonth(_month)
                                        }}/>
                                </Col>

                                <Col style={{width: 144}}>
                                    <YearPicker
                                        value={year}
                                        options={yearsOptions}
                                        onChange={(_year) => {
                                            setYear(_year)
                                        }}/>
                                </Col>
                            </Row>

                            <DayPicker
                                month={month.value}
                                year={year.value}
                                currentDate={selectedDate}
                                daysGap={daysToEndDate}
                                onSelect={(date) => {
                                    setSelectedDate(date)
                                    setIsSetDisabled(false)
                                    onSelect(date)
                                }}/>

                            <Row className="pt-10 pb-18">
                                <Button
                                    className="mx-14"
                                    outlined
                                    variant="default"
                                    onClick={() => {
                                        setSelectedDate('')
                                        setIsSetDisabled(true)
                                        if (onClear) onClear()
                                    }}
                                    width={150}>
                                    <Typography
                                        color={'#475569'}
                                        spacing={'0.1px'}
                                        variant={'button1'}>
                                        Clear
                                    </Typography>
                                </Button>

                                <Button
                                    className="mx-14"
                                    width={150}
                                    disabled={isSetDisabled}
                                    variant="primary"
                                    onClick={() => {
                                        setIsOpen(false)
                                        onSet(selectedDate)
                                        setDisplayDate(moment(selectedDate).format('MMM, D, YYYY'))
                                    }}>
                                    <Typography
                                        color={'#E8E8E8'}
                                        spacing={'0.1px'}
                                        variant={'button1'}>
                                        Set
                                    </Typography>
                                </Button>
                            </Row>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

DatePicker.defaultProps = {
    className:              '',
    daysToEndDate:          7,
    width:                  'auto',
    height:                 40,
    rounded:                5,
    hasBorder:              true,
    hasDropdownIndicator:   true,
    dropdownIndicatorColor: '#515151',
    dropdownIndicatorSize:  24,
    borderColor:            '#6F6F6F',
    beforeIconColor:        '#515151',
    color:                  '#515151',
    calendarMarginTop:      10,
    calendarMarginBottom:   0,
    calendarMarginLeft:     0,
    calendarMarginRight:    0,
    hasIcon:                true,
    borderWidth:            1,
    beforeIconSize:         20,
    onChange:               () => '',
    onSet:                  () => '',
    onSelect:               () => ''
}

export default DatePicker
