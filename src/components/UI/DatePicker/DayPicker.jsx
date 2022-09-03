import {Button, Col, Row, Typography} from "../index.jsx";
import cssStyle from "./DatePicker.module.css";
import {isSameDate} from "../../../Util/Time.js";
import {useEffect, useState} from "react";
import moment from "moment";

const daysInWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']


const DayPicker = ({year, month, selectedDays, currentDate, onSelect, daysGap}) => {
    const [days, setDays]           = useState(Array.from({length: moment().daysInMonth()}).map((_, index) => (new Date(`${month}-${index + 1}-${year}`))))
    const [firstDay, setFirstDay]   = useState(days[0].getDay())
    const [startDate, setStartDate] = useState(currentDate)
    const [endDate, setEndDate]     = useState(moment(currentDate).add(daysGap, 'days').toISOString())

    const daySelectHandler = (index) => {
        const startDate = new Date(`${month}-${index}-${year}`).toISOString()
        const endDate   = moment(startDate).add(daysGap, 'days').toISOString()
        setStartDate(startDate)
        setEndDate(endDate)
        onSelect(startDate)
    }

    useEffect(() => {
        const _days = Array.from({length: moment().daysInMonth()}).map((_, index) => (new Date(`${month}-${index + 1}-${year}`)))
        setDays(days)
        setFirstDay(_days[0].getDay())
    }, [month, year])


    useEffect(() => {
        if (!currentDate) {
            setStartDate('')
            setEndDate('')
        }
    }, [currentDate])

    return (
        <>
            <Row className="px-26 justify-between pb-4">
                {daysInWeek.map((day, index) => (
                    <Col
                        key={index}
                        className={`${cssStyle.datePickerDay} flex-row align-center`}>
                        <Typography
                            color={'#94A3B8'}
                            fontFamily={'Inter'}
                            size={13}
                            spacing={'-0.078px'}
                            fontWeight={600}
                            variant={'body2'}>
                            {day}
                        </Typography>
                    </Col>
                ))}
            </Row>

            <div className="grid grid-cols-7 pt-10 px-16">
                {Array.from({length: firstDay === 0 ? 6 : firstDay - 1}).map((_, index) => (
                    <Typography
                        centered
                        key={index}
                        color={'#94A3B8'}
                        fontFamily={'Inter'}
                        size={13}
                        spacing={'-0.078px'}
                        fontWeight={600}
                        variant={'body2'}>
                    </Typography>
                ))}

                {days.map((day, index) => (
                    <Button
                        key={index}
                        noShadow
                        onClick={() => daySelectHandler(index + 1)}
                        className="relative my-14"
                        variant="icon">
                        <Typography
                            centered
                            color={'black'}
                            fontFamily={'Inter'}
                            size={15}
                            lineHeight={'24px'}
                            spacing={' 0.38px'}
                            fontWeight={400}
                            variant={'body2'}>
                            {index + 1}
                        </Typography>

                        {(isSameDate(new Date(`${month}-${index + 1}-${year}`), startDate) || isSameDate(new Date(`${month}-${index + 1}-${year}`), endDate)) && (
                            <div className={cssStyle.datePickerDaySelected}>

                            </div>
                        )}
                    </Button>
                ))}
            </div>
        </>
    )
}

export default DayPicker
