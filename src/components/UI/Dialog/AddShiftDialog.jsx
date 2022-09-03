import {
    Avatar,
    Icon,
    Row,
    Typography,
    Col,
    Button,
    TextField,
    Select
} from "../../UI"
import { useEmployeesContext } from "../../../context/EmployeesContext.jsx"
import { useState } from "react"
import moment from "moment"


const shiftOptions = [
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

const hourOptions = []
const minutesOptions = [{label: "00", value: "00"},]

for (let i = 0 ; i <= 23 ; i++) {
    hourOptions.push({label: i.toString(), value: i.toString()})
}

for (let i = 1 ; i < 12 ; i++) {
    minutesOptions.push({label: (i * 5).toString(), value: (i * 5).toString()})
}

// console.log(moment(shift.time, 'hmm').format("HH:mm"));


const AddShiftDialog = (props) => {
    const { employeeDetails, isOpen, setFilteredEmployees, setIsPublish, setSelectedShiftTemplate} = props

    const { addShift } = useEmployeesContext()
    const [shift, setShift] = useState({
        name: employeeDetails.employee.name,
        id: employeeDetails.employee.id,
        date: employeeDetails.date,
        time: "9:30-14:30",
        shift: "Morning",
        position: employeeDetails.employee.position
    });


    const createShift = (event) => {
        event.preventDefault()
        const employees = addShift(shift.id, shift.date, ({position: shift.position, time: shift.time, shift: shift.shift}))
        setFilteredEmployees(employees)
        setIsPublish(false)
        setSelectedShiftTemplate(undefined)
        isOpen(false)
    }

    return (
        (<form onSubmit={createShift}>
            <Row className={`h-full pt-30 justify-center`}>
                <Col className="align-center justify-center mx-164">
                    <Typography 
                        className="font-bold mb-10"
                        color="#515151"
                        variant="h4">
                        {moment(employeeDetails.date).format('dddd')}
                    </Typography>

                    <Typography
                        className="font-bold"
                        color="#515151"
                        variant="h5">
                        {moment(employeeDetails.date).format('DD/MM, YYYY')}
                    </Typography>
                </Col>

                <Col className="border-left my-50 pl-100 pt-6 mr-50">
                    <Row className="align-center mb-80 ">
                        <Typography
                            className="font-semibold"
                            color="#515151"
                            variant="h5">
                            Employee
                        </Typography>

                        <Icon
                            className="mx-14"
                            size={16}>
                            <IconRiArrowRightSLine/>
                        </Icon>

                        <Avatar
                            src={employeeDetails.employee.image}
                            borderWidth={2}
                            borderColor={employeeDetails.positionColor}
                            size={32}/>

                        <Typography
                            className="ml-8 font-semibold"
                            color="#515151"
                            variant="h5">
                            {employeeDetails.employee.name}
                        </Typography>
                    </Row>
                    

                    <Row>
                        <Typography
                            className="font-semibold mb-8 mr-460"
                            color="#515151"
                            variant="h5">
                            Time
                        </Typography>
                    </Row>

                    <Row className="align-center mb-60">
                        <Select
                            blurInputOnSelect={true}
                            isSelectable={false}
                            isSearchable={false}
                            menuAnchorPoint="right"
                            menuWidth={75}
                            options={hourOptions}
                            defaultValue={hourOptions[9]}
                            onChange={(target) => {
                                setShift(({time, ...restData}) => ({
                                    ...restData,
                                    time: target.value + ":"
                                }))
                            }}/>

                        <Typography
                            className="font-semibold mx-2"
                            color="#515151"
                            variant="button1">
                            :
                        </Typography>

                        <Select
                            blurInputOnSelect={true}
                            isSelectable={false}
                            isSearchable={false}
                            menuAnchorPoint="right"
                            menuWidth={75}
                            options={minutesOptions}
                            defaultValue={minutesOptions[6]}
                            onChange={(target) => setShift(({time, ...restData}) => ({
                                ...restData,
                                time: time + target.value + "-"
                            }))}/>

                        <Typography
                            className="font-semibold mx-6 "
                            color="#515151"
                            variant="button1">
                            Until
                        </Typography>

                        <Select
                            blurInputOnSelect={true}
                            isSelectable={false}
                            isSearchable={false}
                            menuAnchorPoint="right"
                            menuWidth={75}
                            options={hourOptions}
                            defaultValue={hourOptions[14]}
                            onChange={(target) => setShift(({time, ...restData}) => ({
                                ...restData,
                                time: time + target.value + ":"
                            }))}/>

                        <Typography
                            className="font-semibold mx-2"
                            color="#515151"
                            variant="button1">
                            :
                        </Typography>

                        <Select
                            blurInputOnSelect={true}
                            isSelectable={false}
                            isSearchable={false}
                            menuAnchorPoint="right"
                            menuWidth={75}
                            options={minutesOptions}
                            defaultValue={minutesOptions[6]}
                            onChange={(target) => setShift(({time, ...restData}) => ({
                                ...restData,
                                time: time + target.value
                            }))}/>

                        <Typography
                            className="font-semibold mx-6 ml-30 mr-80"
                            color="#515151"
                            variant="button1">
                            4 Hours
                        </Typography>
                    </Row>

                    <Row className="">
                        <Typography
                            className="font-semibold mb-8 mr-460"
                            color="#515151"
                            variant="h5">
                            Title
                        </Typography>
                    </Row>

                    <Row className="">
                        <Select
                            className="mr-164"
                            blurInputOnSelect={true}
                            isSelectable={false}
                            isSearchable={false}
                            menuAnchorPoint="right"
                            menuWidth={355}
                            controlWidth={355}
                            options={shiftOptions}
                            defaultValue={shiftOptions[0]}
                            onChange={(target) => setShift(({shift, ...restData}) => ({
                                ...restData,
                                shift: target.value
                            }))}/>
                    </Row>
                </Col>

                <Col className="my-50 pt-120 mr-160">
                    <Row>
                        <Typography
                            className="font-semibold mb-8"
                            color="#515151"
                            variant="h5">
                            Role
                        </Typography>
                    </Row>

                    <Row className="mb-60">
                        <Select
                            blurInputOnSelect={true}
                            isSelectable={false}
                            isSearchable={false}
                            menuAnchorPoint="right"
                            menuWidth={355}
                            controlWidth={355}
                            options={positionOptions}
                            defaultValue={positionOptions[0]}
                            onChange={(target) => setShift(({position, ...restData}) => ({
                                ...restData,
                                position: target.value
                            }))}/>
                    </Row>

                    <Row>
                        <Typography
                            className="font-semibold mb-8"
                            color="#515151"
                            variant="h5">
                            Shift Tasks
                        </Typography>
                    </Row>

                    <Row>
                        <TextField
                            type="text"
                            placeholder='Checking team assignments'
                            onChange={({ target }) => {
                                
                            }}
                            width={360}
                            >
                        </TextField>
                    </Row>
                </Col>

                <Col className="justify-end mb-70 mr-90">
                    <Button
                        variant="primary">
                        <Typography variant={'button1'} color="white">
                            Create
                        </Typography>
                    </Button>
                </Col>
                

                <Col className="pb-460 justify-start">
                    <Icon
                        onClick={() => {
                            isOpen(false)
                        }}
                        size={20} color="#515151"
                        className="cursor">
                        <IconRiCloseCircleLine/>
                    </Icon>
                </Col>
            </Row>
        </form>)
    )
}

export default AddShiftDialog