import style from './Employees.module.scss'
import {
    Avatar,
    Button,
    Card,
    Col,
    Dialog,
    Icon,
    Menu,
    Row,
    Table,
    TextField,
    Typography
} from "../../components/UI/index.jsx";
import {useEmployeesContext} from "../../context/EmployeesContext.jsx";
import {useEffect, useState} from "react";
import {fadeInOutAnimation} from "../../components/UI/Utils/utils.js";
import moment from "moment";
import {AnimatePresence} from "framer-motion";
import ArchiveEmployeeDialog from "../../components/Dialogs/ArchiveEmployeeDialog.jsx";
import EmployeeDialog from "../../components/Dialogs/EmployeeDialog.jsx";
import produce from "immer";

const headers = [
    {key: 'avatar', display: '', width: 80},
    {key: 'name', display: 'Full Name'},
    {key: 'position', display: 'Position'},
    {key: 'email', display: 'Email'},
    {key: 'phone', display: 'Phone'},
    {key: 'startDate', display: 'Start Date'},
    {key: 'lastDate', display: 'Last Date'},
    {key: 'status', display: 'Status'},
]

const colorsForStatus = {
    Active:   '#16A34A',
    Inactive: '#F97316',
    Archived: '#E74C3C',
}

const statusOrder = {
    Active:   1,
    Inactive: 2,
    Archived: 3
}

const colorForPosition = {
    'Chef':      '#EEF33D',
    'Waiter':    '#1CB2B2',
    'Bartender': '#FFC6FF',
    'Host':      '#998FD7',
    'Manager':   '#9BF6FF'
}

const orderByObject = (data, object) => produce(data, draft => draft.sort((a, b) => object[a.status] - object[b.status]))

const Employees = () => {
    const {employees}                                           = useEmployeesContext()
    const [search, setSearch]                                   = useState('')
    const [filteredEmployees, setFilteredEmployees]             = useState(orderByObject(employees, statusOrder))
    const [isArchiveDialogOpen, setIsArchiveDialogOpen]         = useState(false)
    const [employeeToArchive, setEmployeeToArchive]             = useState({})
    const [isAddEmployeeDialogOpen, setIsAddEmployeeDialogOpen] = useState(false)
    const [employeeToEdit, setEmployeeToEdit]                   = useState({})

    const handleSearchEmployees = (searchValue) => {
        const filteredEmployees = employees.filter(({firstName, lastName}) => {
            return `${firstName} ${lastName}`.toLowerCase().includes(searchValue.toLowerCase())
        })

        const filteredSortedEmployees = orderByObject(filteredEmployees, statusOrder)
        setFilteredEmployees(filteredSortedEmployees);
    }

    const archiveEmployeeHandler = (employee) => {
        setIsArchiveDialogOpen(true)
        setEmployeeToArchive(employee)
    }

    const addEmployee = () => {
        setEmployeeToEdit({})
        setIsAddEmployeeDialogOpen(true)
    }

    const editEmployee = (employee) => {
        setEmployeeToEdit({
            ...employee,
            role:         {value: employee.position, label: employee.position},
            mobileNumber: employee.phone
        })
        setIsAddEmployeeDialogOpen(true)
    }

    useEffect(() => {
        handleSearchEmployees(search)
    }, [employees])

    return (
        <Col
            {...fadeInOutAnimation}
            className="h-full w-full">

            <AnimatePresence>
                {isArchiveDialogOpen && (
                    <Dialog onBackdropClick={() => setIsArchiveDialogOpen(false)}
                            width={670} height={500}>
                        <ArchiveEmployeeDialog
                            closeDialogAction={() => setIsArchiveDialogOpen(false)}
                            employee={employeeToArchive}/>
                    </Dialog>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isAddEmployeeDialogOpen && (
                    <Dialog
                        noBackdrop
                        showAppBar
                        animation="fade"
                        animationDuration={0.25}
                        fullScreen
                        onBackdropClick={() => setIsAddEmployeeDialogOpen(false)}>
                        <EmployeeDialog
                            employeeId={employeeToEdit.id}
                            initialData={employeeToEdit}
                            closeDialogAction={() => setIsAddEmployeeDialogOpen(false)}/>
                    </Dialog>
                )}
            </AnimatePresence>

            <Row className={style.employeesPageHeader}>
                <TextField
                    type="search"
                    beforeIcon={<IconRiSearchLine/>}
                    placeholder='Search Employees'
                    onChange={({target}) => {
                        setSearch(target.value)
                        handleSearchEmployees(target.value)
                    }}
                    beforeIconSize={20}
                    width={270}>
                </TextField>

                <Button
                    className="ml-24 px-20"
                    onClick={() => addEmployee()}
                    width="fit-content"
                    variant="primary">
                    <Typography variant={'button1'} color="white">
                        Add Employee
                    </Typography>
                </Button>
            </Row>

            <Row className={style.employeesPageTable}>
                <Table
                    actionsWidth={40}
                    hasActions
                    actionsComp={(item) => (
                        <Row className="justify-center">
                            <Menu
                                offsetY={15}
                                offsetX={-60}
                                openOnClick
                                onSelect={(option) => option.action()}
                                options={[
                                    {
                                        label:    'Edit Profile',
                                        value:    'edit',
                                        action:   () => {
                                            editEmployee(item)
                                        },
                                        icon:     <IconMiEdit/>,
                                        flipIcon: true
                                    },
                                    {
                                        label:  'Move to archive',
                                        value:  'archive',
                                        action: () => {
                                            if (item.status !== 'Archived') archiveEmployeeHandler(item)
                                        },
                                        icon:   <IconBytesizeArchive/>,
                                    },
                                ]}
                                menuPlacement="top-right">
                                <Button
                                    icon
                                    variant="primary">
                                    <Icon color={'#515151'}>
                                        <IconIcBaselineMoreVert/>
                                    </Icon>
                                </Button>
                            </Menu>
                        </Row>
                    )}
                    components={{
                        avatar:    ({image, position}) => (
                            <Col className="justify-center align-center">
                                <Avatar
                                    hasIndicator
                                    src={image}
                                    borderWidth={2}
                                    borderColor={colorForPosition[position]}
                                    size={32}/>
                            </Col>
                        ),
                        name:      ({firstName, lastName}) => (
                            <Typography
                                spacing={0.1}
                                variant={'button1'}
                                color={'#515151'}>
                                {firstName} {lastName}
                            </Typography>
                        ),
                        startDate: ({startDate}) => (
                            <Typography
                                spacing={0.1}
                                variant={'button1'}
                                color={'#515151'}>
                                {moment(startDate).format('DD/MM/YYYY')}
                            </Typography>
                        ),
                        lastDate:  ({lastDate}) => {
                            return (
                                <Typography
                                    spacing={0.1}
                                    variant={'button1'}
                                    color={'#515151'}>
                                    {lastDate ? moment(lastDate).format('DD/MM/YYYY') : "Nol"}
                                </Typography>
                            )
                        },
                        status:    ({status}) => (
                            <Card
                                className="justify-center align-center px-8"
                                width={'fit-content'}
                                height={36}
                                backgroundColor={colorsForStatus[status]}>
                                <Typography
                                    spacing={0.1}
                                    color={'white'}
                                    fontWeight={400}
                                    size={13}
                                    variant={'button1'}>
                                    {status}
                                </Typography>
                            </Card>
                        )
                    }}
                    headers={headers}
                    data={filteredEmployees}/>
            </Row>
        </Col>
    )
}

export default Employees
