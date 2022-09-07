import cssStyle from './DatePicker.module.css'
import Icon from "../Icon/Icon.jsx";
import {Button, Col, Row, Typography} from "../index.jsx";
import {useEffect, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {fadeInOutAndDownToTop, openAnimation} from "../Utils/utils.js";
import moment from "moment";
import Backdrop from "../Backdrop/Backdrop.jsx";
import Portal from "../Portal/Portal.jsx";
import YearPicker from "./YearPicker.jsx";
import MonthPicker from "./MonthPicker.jsx";
import DayPicker from "./DayPicker.jsx";
import DatePickerHeader from "./DatePickerHeader.jsx";
import {monthsList} from "../../../util/Time.js";
import RelativePortal from "../Portal/RelativePortal.jsx";

/**
 *
 * @param props {import("../UI").DatePickerProps}
 * @returns {JSX.Element}
 * @constructor
 */
const DatePicker = (props) => {
    const {
              width, height, rounded, className,
              beforeIconColor, beforeIconSize, beforeIcon,
              afterIconColor, afterIconSize, afterIcon,
              hasBorder, hasBeforeIcon, hasAfterIcon,
              borderColor, borderWidth, color, placeholderColor, currentDate, placeholder,
              calendarMarginTop, calendarMarginLeft, calendarMarginRight, calendarMarginBottom,
              hasDropdownIndicator, dropdownIndicatorColor, dropdownIndicatorSize, label,
              daysToEndDate, yearsOptions, placement, offsetX, offsetY, displayFormat,
              onSelect, onSet, onClear, ...restProps
          } = props

    const [isOpen, setIsOpen]               = useState(false)
    const [selectedDate, setSelectedDate]   = useState(currentDate ? moment(currentDate).toISOString() : '')
    const [displayDate, setDisplayDate]     = useState(moment(currentDate).format(displayFormat))
    const [isSetDisabled, setIsSetDisabled] = useState(true)


    /** @type {CSSProperties | {}} */
    const borderStyle = hasBorder ? {borderColor, borderWidth, borderStyle: 'solid'} : {}

    const [year, setYear]   = useState(yearsOptions[yearsOptions.findIndex(_year => _year.value === moment().format('YYYY'))])
    const [month, setMonth] = useState(monthsList[monthsList.findIndex(_month => _month.value === moment().format('MM'))])

    return (
        <AnimatePresence>
            <RelativePortal
                elementWrapperProps={restProps}
                isOpen={isOpen}
                placement={placement}
                portalContent={
                    <>
                        <Backdrop
                            isTransparent
                            active={isOpen}
                            onClick={() => setIsOpen(false)}/>

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
                                    noShadow
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
                                    noShadow
                                    disabled={isSetDisabled}
                                    variant="primary"
                                    onClick={() => {
                                        setIsOpen(false)
                                        onSet(selectedDate)
                                        setDisplayDate(moment(selectedDate).format(displayFormat))
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
                    </>
                }>
                <section className={`flex-col relative h-full ${className}`}>
                    {label && (
                        <AnimatePresence>
                            {props.currentDate && (
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
                    <div
                        onClick={() => {
                            if (!isOpen) {
                                setSelectedDate(moment(currentDate).toISOString())
                                setIsSetDisabled(!currentDate)
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

                        {hasBeforeIcon && (
                            <Icon
                                className={`mx-12 align-center flex-row`}
                                color={beforeIconColor}
                                height={height - (borderWidth * 2)}
                                width={beforeIconSize}
                                size={beforeIconSize}>
                                {beforeIcon}
                            </Icon>
                        )}

                        <Row className={hasBeforeIcon ? '' : 'ml-10'}>
                            {displayDate !== 'Invalid date' ?
                                <Typography
                                    color={color}
                                    size={14}
                                    spacing={0.1}
                                    variant={'button1'}>
                                    {displayDate}
                                </Typography>
                                :
                                <Typography
                                    color={placeholderColor}
                                    size={14}
                                    variant={'button1'}>
                                    {placeholder}
                                </Typography>
                            }
                        </Row>

                        {hasAfterIcon && (
                            <Icon
                                className={`align-center justify-end flex-row ml-auto mr-10`}
                                color={afterIconColor}
                                height={height - (borderWidth * 2)}
                                width={afterIconSize}
                                size={afterIconSize}>
                                {afterIcon}
                            </Icon>
                        )}

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
                </section>
            </RelativePortal>
        </AnimatePresence>
    )
}

DatePicker.defaultProps = {
    className:              '',
    label:                  '',
    placeholder:            'Select Date',
    placement:              'bottom-left',
    daysToEndDate:          7,
    width:                  'auto',
    height:                 40,
    rounded:                5,
    hasBorder:              true,
    hasDropdownIndicator:   true,
    dropdownIndicatorColor: '#515151',
    dropdownIndicatorSize:  24,
    borderColor:            '#6F6F6F',
    color:                  '#515151',
    placeholderColor:       '#858585',
    calendarMarginTop:      10,
    calendarMarginBottom:   0,
    calendarMarginLeft:     0,
    calendarMarginRight:    0,
    borderWidth:            1,
    hasBeforeIcon:          true,
    hasAfterIcon:           false,
    beforeIcon:             <IconLocalSchedulerOutlined/>,
    afterIcon:              <IconLocalSchedulerOutlined/>,
    beforeIconColor:        '#515151',
    afterIconColor:         '#515151',
    beforeIconSize:         20,
    afterIconSize:          20,
    displayFormat:          'MMM, D, YYYY',
    onChange:               () => '',
    onSet:                  () => '',
    onSelect:               () => ''
}

export default DatePicker
