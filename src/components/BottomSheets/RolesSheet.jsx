import {
    Button,
    Col,
    ColorPicker,
    Divider,
    Icon,
    Row,
    Select,
    SelectWithSearch,
    TextField,
    Typography
} from "../UI/index.jsx";
import Role from "../Role/Role.jsx";
import {useEffect, useState} from "react";
import {useEmployeesContext} from "../../context/EmployeesContext.jsx";
import {getRoles} from "../../services/Roles/Roles.js";
import Employee from "../Employee/Employee.jsx";

const roleColorsOptions = [
    {label: "#EEF33D", value: "#EEF33D"},
    {label: "#1CB2B2", value: "#1CB2B2"},
    {label: "#FFC6FF", value: "#FFC6FF"},
    {label: "#998FD7", value: "#998FD7"},
    {label: "#9BF6FF", value: "#9BF6FF"},
    {label: "#FFB864", value: "#FFB864"},
    {label: "#7198F8", value: "#7198F8"},
    {label: "#B1FCA3", value: "#B1FCA3"},
    {label: "#ED706B", value: "#ED706B"},
    {label: "#F7CEFC", value: "#F7CEFC"},
    {label: "#75FBCF", value: "#75FBCF"},
    {label: "#BB2765", value: "#BB2765"}
]

const RolesSheet = () => {
    const {employees}                                       = useEmployeesContext()
    const [rolesList, setRolesList]                         = useState([])
    const [filteredRoles, setFilteredRoles]                 = useState()
    const [selectedRole, setSelectedRole]                   = useState({})
    const [employeesList, setEmployeesList]                 = useState(employees)
    const [filteredEmployeesList, setFilteredEmployeesList] = useState(employees)
    const [isLoading, setIsLoading]                         = useState(true)

    const handleSearchRoles = (searchValue) => {
        const filtered = rolesList.filter(role => role.position.toLowerCase().includes(searchValue.toLowerCase()))
        setFilteredRoles(filtered)
    }

    const handleSearchEmployeesList = (searchValue) => {
        const filtered = employees.filter(({firstName, lastName}) => {
            return `${firstName} ${lastName}`.toLowerCase().includes(searchValue.toLowerCase())
        })
        setFilteredEmployeesList(filtered);
    }

    useEffect(() => {
        (async () => {
            const roles = await getRoles()
            setRolesList(roles)
            setFilteredRoles(roles)
            setIsLoading(false)
        })()
    }, [])


    return isLoading ? <div>Loading...</div> : (
        <Row className="pt-70 pb-60">
            <Col className="font-medium ml-80 mr-80">
                <Row className="align-center">
                    <Typography
                        color={'#515151'}
                        fontWeight={500}
                        variant={'h5'}>
                        Role
                    </Typography>

                    <Icon
                        color={'#515151'}
                        className="px-22"
                        size={18}>
                        <IconIonChevronRight/>
                    </Icon>

                    <TextField
                        type="search"
                        beforeIcon={<IconRiSearchLine/>}
                        placeholder='Search'
                        onChange={(event) => handleSearchRoles(event.target.value)}
                        beforeIconSize={20}
                        width={266}
                        height={40}
                        radius={32}>
                    </TextField>
                </Row>
                <Row className="mt-36">
                    <Button width="106px" height="40px"
                            variant="primary">
                        <Typography variant={'button1'} color="white">
                            Add Role
                        </Typography>
                    </Button>
                </Row>
                <div className="mt-38">
                    {filteredRoles.map((role) => (
                        <Row key={role.id} className="mt-14">
                            <Role
                                title={role.title}
                                roleColor={role.color}
                                selected={role.title === selectedRole.title}
                                onSelect={() => setSelectedRole(role)}/>
                        </Row>
                    ))}
                </div>
            </Col>

            <Divider/>

            {Object.keys(selectedRole).length > 0 && (
                <Col className="w-full">

                    <Row className="ml-92 align-center">
                        <Typography
                            className="text-center"
                            color={'#515151'}
                            fontWeight={500}
                            variant={'h5'}>
                            Title
                        </Typography>

                        <Icon
                            color={'#515151'}
                            className="pl-22 pr-12"
                            size={18}>
                            <IconIonChevronRight/>
                        </Icon>

                        <TextField
                            type="search"
                            noBorder
                            autoFocus
                            placeholder="Add New Role"
                            fontWeight={500}
                            fontSize={24}
                            letterSpacing={0}
                            value={selectedRole.title}
                            onChange={({target}) => setSelectedRole({...selectedRole, title: target.value})}
                            beforeIconSize={20}
                            width={266}
                            height={40}
                            radius={32}>
                        </TextField>
                    </Row>

                    <Row className="ml-92 mt-68 justify-between h-full">
                        <Row>
                            <Col>
                                <Typography
                                    className="font-medium"
                                    color="black"
                                    fontWeight="500"
                                    variant="h5">
                                    Color
                                </Typography>

                                <ColorPicker
                                    className="mt-20"
                                    blurInputOnSelect={true}
                                    isSearchable={false}
                                    menuWidth={67}
                                    width={67}
                                    height={40}
                                    maxMenuHeight={240}
                                    singleValueWeight={600}
                                    singleValueSize={16}
                                    singleValueFontFamily={'Inter'}
                                    singleValueSpacing={'0.38px'}
                                    singleValueColor={'#000000'}
                                    dropdownIconColor={'#94a3b8'}
                                    value={roleColorsOptions.find(({value}) => value === selectedRole.color)}
                                    onChange={(option) => setSelectedRole(prev => ({
                                        ...prev,
                                        color: option.value
                                    }))}
                                    options={roleColorsOptions}/>
                            </Col>

                            <Col className="ml-70">
                                <Typography
                                    className="font-medium pl-10 pr-8"
                                    color="black"
                                    fontWeight="500"
                                    variant="h5">
                                    Employees
                                </Typography>

                                <SelectWithSearch
                                    className="mt-20"
                                    options={filteredEmployeesList}
                                    placeholder="Search Employees"
                                    onSearchChange={handleSearchEmployeesList}
                                    selectContentComp={(employee) => (
                                        <Row key={employee.id} className="mt-14">
                                            <Employee
                                                name={`${employee.firstName} ${employee.lastName}`}
                                                position={employee.position}
                                                selected={employee.position === selectedRole.title}
                                                onSelect={() => {
                                                    setEmployeesList(prev => {
                                                        return prev.map(prevEmployee => {
                                                            if (prevEmployee.name === employee.name) {
                                                                if (employee.position === selectedRole.title) {
                                                                    return {
                                                                        ...employee,
                                                                        position: employees.find(_employee => _employee.name === employee.name).position
                                                                    }
                                                                }
                                                                return {
                                                                    ...employee, position: selectedRole.title
                                                                }
                                                            }
                                                            return prevEmployee
                                                        })
                                                    })
                                                }}
                                            />
                                        </Row>
                                    )}/>
                            </Col>
                        </Row>

                        <Col className="pr-140 justify-end">
                            <Row>
                                <Button
                                    width={150}
                                    variant="primary"
                                    removePadding
                                    className="ml-588 mt-274">

                                    <Typography
                                        variant={'button1'}
                                        fontWeight={400}
                                        size={16}
                                        color={'#E8E8E8'}>
                                        Save Changes
                                    </Typography>
                                </Button>

                                <Button
                                    className="mx-32"
                                    removePadding
                                    outlined
                                    variant="primary"
                                    width={150}>
                                    <Row className="justify-center align-center">
                                        <Typography
                                            className="pr-10"
                                            fontWeight={400}
                                            size={16}
                                            color={'#2C2C2C'}
                                            variant={'button1'}>
                                            Delete Role
                                        </Typography>

                                        <Icon>
                                            <IconLocalTrashOutlined/>
                                        </Icon>
                                    </Row>
                                </Button>
                            </Row>
                        </Col>


                    </Row>
                </Col>
            )}
        </Row>
    )
}

export default RolesSheet
