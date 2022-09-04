import {Button, Col, Row, Select, TextField, Typography} from "../UI/index.jsx";
import {useState} from "react";
import {useEmployeesContext} from "../../context/EmployeesContext.jsx";
import moment from "moment";

const shiftOptions    = [
    {label: "Morning Shift", value: "Morning"},
    {label: "Noon Shift", value: "Noon"},
    {label: "Evning Shift", value: "Evning"},
    {label: "Between Shift", value: "Between"},
    {label: "Something Else", value: "Something Else"}
]
const positionOptions = [
    {label: "Shift Manager", value: "Manager"},
    {label: "Shift Bartender", value: "Bartender"},
    {label: "Shift Waiter", value: "Waiter"},
    {label: "Shift Host", value: "Host"},
    {label: "Shift Chef", value: "Chef"}
]

const hourOptions    = []
const minutesOptions = [{label: "00", value: "00"},]

for (let i = 0; i <= 23; i++) {
    hourOptions.push({label: i.toString(), value: i.toString()})
}

for (let i = 1; i < 12; i++) {
    minutesOptions.push({label: (i * 5).toString(), value: (i * 5).toString()})
}

/**
 *
 * @param props {}
 * @returns {JSX.Element}
 * @constructor
 */
const ShiftForm = (props) => {
    const {initialData, isOpen, setFilteredEmployees, setIsPublish, setSelectedShiftTemplate} = props

    const [hours, setHours]               = useState(hourOptions[9])
    const [minutes, setMinutes]           = useState(minutesOptions[6])
    const [untilHours, setUntilHours]     = useState(hourOptions[14])
    const [untilMinutes, setUntilMinutes] = useState(minutesOptions[6])
    const [shift, setShift]               = useState(initialData?.shift || "Morning")
    const [position, setPosition]         = useState(initialData.position)
    const {addShift}                      = useEmployeesContext()

    const createShift = (event) => {
        event.preventDefault()
        const employees = addShift(employeeDetails.employee.id, employeeDetails.date, ({
            position: position, time: (`${hours.value}:${minutes.value}-${untilHours.value}:${untilMinutes.value}`),
            shift:    shift
        }))


        setFilteredEmployees(employees)
        setIsPublish(false)
        setSelectedShiftTemplate(undefined)
        isOpen(false)
    }

    const generateTime = () => {
        const startTime = moment(`${hours.value}:${minutes.value} am`, "HH:mm a")
        const endTime   = moment(`${untilHours.value}:${untilMinutes.value} pm`, "HH:mm a")
        const duration  = moment.duration(endTime.diff(startTime))

        return duration.asHours()
    }

    return (
        <form
            className="flex-row w-full h-full"
            onSubmit={createShift}>
            <Row className="w-full justify-between">
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <Typography className="font-semibold mb-8 " color="#515151" variant="h5">Time</Typography>

                                <Row className="align-center">
                                    <Select
                                        blurInputOnSelect={true}
                                        menuAnchorPoint="right"
                                        menuWidth={75}
                                        width={75}
                                        options={hourOptions}
                                        value={hours}
                                        onChange={(option) => {
                                            setHours(option)
                                        }}/>

                                    <Typography className="font-semibold mx-2" color="#515151"
                                                variant="button1">:</Typography>

                                    <Select
                                        blurInputOnSelect={true}
                                        menuAnchorPoint="right"
                                        menuWidth={75}
                                        width={75}
                                        options={minutesOptions}
                                        value={minutes}
                                        onChange={(option) => setMinutes(option)}/>

                                    <Typography className="font-semibold mx-6" color="#515151"
                                                variant="button1">Until</Typography>

                                    <Select
                                        blurInputOnSelect={true}
                                        menuAnchorPoint="right"
                                        menuWidth={75}
                                        width={75}
                                        options={hourOptions}
                                        value={untilHours}
                                        onChange={(option) => setUntilHours(option)}/>

                                    <Typography className="font-semibold mx-2" color="#515151"
                                                variant="button1">:</Typography>

                                    <Select
                                        blurInputOnSelect={true}
                                        menuAnchorPoint="right"
                                        menuWidth={75}
                                        width={75}
                                        options={minutesOptions}
                                        value={untilMinutes}
                                        onChange={(option) => setUntilMinutes(option)}/>

                                    <Col className="ml-16" style={{width: 100}}>
                                        <Typography color="#515151"
                                                    variant="button1">{Math.floor(generateTime())} Hours
                                        </Typography>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Col className="mt-62">
                            <Typography
                                className="font-semibold mb-8"
                                color="#515151"
                                variant="h5">
                                Title
                            </Typography>
                            <Select
                                blurInputOnSelect={true}
                                isSelectable={false}
                                menuAnchorPoint="right"
                                menuPlacement="top"
                                menuWidth={360}
                                width={360}
                                options={shiftOptions}
                                value={{label: `${shift} Shift`, value: shift}}
                                onChange={(option) => setShift(option.value)}/>
                        </Col>
                    </Col>

                    <Col className="pl-140">
                        <Col>
                            <Typography
                                className="font-semibold mb-8"
                                color="#515151"
                                variant="h5">
                                Role
                            </Typography>
                            <Select
                                blurInputOnSelect={true}
                                isSelectable={false}
                                isSearchable={false}
                                menuAnchorPoint="right"
                                menuWidth={360}
                                height={44}
                                width={360}
                                options={positionOptions}
                                value={{label: `Shift ${position}`, value: position}}
                                onChange={(option) => setPosition(option.value)}/>
                        </Col>

                        <Col className="mt-62">
                            <Typography
                                className="font-semibold mb-8"
                                color="#515151"
                                variant="h5">
                                Shift Tasks
                            </Typography>

                            <TextField
                                type="text"
                                placeholder='Checking team assignments'
                                width={360}>
                            </TextField>
                        </Col>
                    </Col>
                </Row>

                <Col className="pr-140 justify-end ml-0">
                    <Button
                        className="mr-30"
                        width={138}
                        color="#53326C"
                        variant="primary">
                        <Typography variant={'button1'} color="#E8E8E8">
                            Create
                        </Typography>
                    </Button>
                </Col>
            </Row>
        </form>
    )
}

export default ShiftForm
