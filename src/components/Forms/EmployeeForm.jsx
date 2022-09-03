import {Button, Card, Col, DatePicker, Icon, Row, Select, TextField, Typography} from "../UI/index.jsx";
import style from "../Dialogs/AddEmployeeDialog.module.scss";
import {useEmployeesContext} from "../../context/EmployeesContext.jsx";
import {useEffect, useState} from "react";
import {getRoles} from "../../services/Roles/Roles.js";

const yearsList = Array.from({length: 200}, (v, k) => ({label: `${2022 - k}`, value: `${2022 - k}`}))

/**
 * @param props {import("../components").AddEmployeeFormProps}
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const EmployeeForm = (props) => {
    const {employeeId, initialData, onClose, onSubmit} = props

    const {addEmployee, updateEmployee} = useEmployeesContext()

    const [rolesOptions, setRolesOptions] = useState([])
    const [isLoading, setIsLoading]       = useState(true)

    const [firstName, setFirstName]       = useState(initialData.firstName || '')
    const [lastName, setLastName]         = useState(initialData.lastName || '')
    const [dateOfBirth, setDateOfBirth]   = useState(initialData.dateOfBirth || '')
    const [role, setRole]                 = useState(initialData.role || '')
    const [mobileNumber, setMobileNumber] = useState(initialData.mobileNumber || '')
    const [email, setEmail]               = useState(initialData.email || '')

    const submitForm = () => {
        if (employeeId) {
            updateEmployee(employeeId, {
                firstName,
                lastName,
                dateOfBirth,
                position: role.value,
                phone:    mobileNumber,
                email
            })
            if (onSubmit) onSubmit()
            return
        }

        addEmployee({
            firstName,
            lastName,
            dateOfBirth,
            position: role.value,
            phone:    mobileNumber,
            email
        })
        onSubmit()
    }

    useEffect(() => {
        (async () => {
            const roles                     = await getRoles()
            const rolesTransformedToOptions = roles.map(role => ({label: role.title, value: role.title}))
            setRolesOptions(rolesTransformedToOptions)
            setIsLoading(false)
        })()
    }, [])

    return (
        isLoading ? <div>Loading...</div> : (
            <form>
                <Row className="pt-90">
                    <Col>
                        <Card
                            hasShadow
                            backgroundColor={'#BAADC4'}
                            height={240}
                            width={240}>
                            <Icon>
                                <IconLocalAddUser/>
                            </Icon>
                        </Card>
                    </Col>

                    <Col className="pl-56 justify-center">
                        <Row>
                            <TextField
                                autoFocus
                                value={firstName}
                                height={48}
                                width={240}
                                onChange={({target}) => setFirstName(target.value)}
                                label="First Name"
                                placeholder="First Name"/>

                            <TextField
                                className="ml-40"
                                value={lastName}
                                height={48}
                                width={240}
                                onChange={({target}) => setLastName(target.value)}
                                label="Last Name"
                                placeholder="Last Name"/>

                            <DatePicker
                                className="ml-40"
                                label="Date of Birth"
                                color={'#515151'}
                                hasBeforeIcon={false}
                                hasAfterIcon={true}
                                hasDropdownIndicator={false}
                                placeholder="Date of Birth"
                                yearsOptions={yearsList}
                                currentDate={dateOfBirth}
                                displayFormat={'DD/MM/YYYY'}
                                height={48}
                                width={240}
                                daysToEndDate={0}
                                onSet={(date) => setDateOfBirth(date)}/>
                        </Row>

                        <Row className="pt-70">
                            <Col style={{height: 48, width: 240}}>
                                <Select
                                    value={role}
                                    options={rolesOptions}
                                    onChange={(option) => setRole(option)}
                                    label="Role"
                                    placeholder="Role"/>
                            </Col>

                            <TextField
                                className="ml-40"
                                value={mobileNumber}
                                height={48}
                                width={240}
                                onChange={({target}) => setMobileNumber(target.value)}
                                label="Mobile number"
                                placeholder="Mobile number"/>

                            <TextField
                                className="ml-40"
                                value={email}
                                height={48}
                                width={240}
                                onChange={({target}) => setEmail(target.value)}
                                label="Email"
                                placeholder="Email"/>
                        </Row>
                    </Col>
                </Row>

                <Row className={style.bottomActions}>
                    <Button
                        className="mx-32"
                        outlined
                        onClick={(e) => {
                            e.preventDefault()
                            onClose()
                        }}
                        variant="primary"
                        width={162}>
                        <Typography
                            size={13}
                            fontWeight={400}
                            color={'#2C2C2C'}
                            variant={'button1'}>
                            Cancel
                        </Typography>
                    </Button>

                    <Button
                        className="pl-20"
                        onClick={(e) => {
                            e.preventDefault()
                            submitForm()
                        }}
                        width={162}>
                        <Typography
                            size={13}
                            fontWeight={400}
                            color={'white'}
                            variant={'button1'}>
                            Add Employee
                        </Typography>
                    </Button>
                </Row>
            </form>
        )
    )
}

EmployeeForm.defaultProps = {
    initialData: {}
}

export default EmployeeForm
