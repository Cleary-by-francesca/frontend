import {createContext, useContext, useState} from "react";
import moment from "moment"
import produce from "immer"
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";
import avatar5 from "../assets/avatar5.png";
import avatar9 from "../assets/avatar9.png";
import avatar7 from "../assets/avatar7.png";
import avatar8 from "../assets/avatar8.png";


const employeesData = [
    {
        id:        '1',
        status:    'Active',
        firstName: 'Emma',
        lastName:  'Rossi',
        email:     'Emmaro@esteri.it',
        phone:     '333-7603660',
        dateOfBirth: new Date('1998-02-04').toISOString(),
        startDate: moment('21/01/21', 'DD/MM/YYYY').toISOString(),
        lastDate:  '',
        rating:    '19.5',
        position:  'Waiter',
        image:     avatar3,
        dates:     [
            {date: moment(Date.now()).add(0, 'days').toISOString()},
            {date: moment(Date.now()).add(1, 'days').toISOString()},
            {date: moment(Date.now()).add(2, 'days').toISOString()},
            {date: moment(Date.now()).add(3, 'days').toISOString()},
            {date: moment(Date.now()).add(4, 'days').toISOString()},
            {date: moment(Date.now()).add(5, 'days').toISOString()},
            {date: moment(Date.now()).add(6, 'days').toISOString()},
        ]
    },
    {
        id:        '2',
        status:    'Archived',
        firstName: 'Leonardo',
        lastName:  'Manacini',
        rating:    '19.5',
        email:     'leonardo@esteri.it',
        phone:     '333-5463660',
        dateOfBirth: new Date('1995-05-08').toISOString(),
        startDate: moment('21/02/21', 'DD/MM/YYYY').toISOString(),
        lastDate:  '',
        position:  'Chef',
        image:     avatar2,
        dates:     [
            {date: moment(Date.now()).add(0, 'days').toISOString()},
            {date: moment(Date.now()).add(1, 'days').toISOString()},
            {
                date:     moment(Date.now()).add(2, 'days').toISOString(), status: 'added', time: '9:00 - 11:00',
                shift:    'Morning',
                position: 'Chef'
            },
            {date: moment(Date.now()).add(3, 'days').toISOString()},
            {
                date:     moment(Date.now()).add(4, 'days').toISOString(), status: 'added', time: '9:00 - 11:00',
                shift:    'Morning',
                position: 'Chef'
            },
            {date: moment(Date.now()).add(5, 'days').toISOString()},
            {date: moment(Date.now()).add(6, 'days').toISOString()},
        ],
    },
    {
        id:        '3',
        status:    'Active',
        firstName: 'Sofia',
        lastName:  'Gussee',
        rating:    '19.5',
        email:     'Sofia@esteri.it',
        phone:     '333-8769660',
        dateOfBirth: new Date('1994-01-08').toISOString(),
        startDate: moment('21/02/21', 'DD/MM/YYYY').toISOString(),
        lastDate:  '',
        position:  'Bartender',
        image:     avatar4,
        dates:     [
            {date: moment(Date.now()).add(0, 'days').toISOString()},
            {date: moment(Date.now()).add(1, 'days').toISOString()},
            {date: moment(Date.now()).add(2, 'days').toISOString()},
            {
                date:     moment(Date.now()).add(3, 'days').toISOString(), status: 'added', time: '16:00 - 21:00',
                shift:    'Evning',
                position: 'Bartender'
            },
            {date: moment(Date.now()).add(4, 'days').toISOString()},
            {date: moment(Date.now()).add(5, 'days').toISOString()},
            {date: moment(Date.now()).add(6, 'days').toISOString()},
        ]
    },
    {
        id:        '4',
        status:    'Active',
        firstName: 'Luna',
        lastName:  'Refaelo',
        rating:    '19.5',
        email:     'Luna@esteri.it',
        phone:     '333-6832660',
        dateOfBirth: new Date('1990-06-01').toISOString(),
        startDate: moment('04/01/21', 'DD/MM/YYYY').toISOString(),
        lastDate:  '',
        position:  'Host',
        image:     avatar5,
        dates:     [
            {date: moment(Date.now()).add(0, 'days').toISOString()},
            {
                date:     moment(Date.now()).add(1, 'days').toISOString(), status: 'added', time: '9:00 - 15:00',
                shift:    'Morning',
                position: 'Host'
            },
            {date: moment(Date.now()).add(2, 'days').toISOString()},
            {date: moment(Date.now()).add(3, 'days').toISOString()},
            {
                date:     moment(Date.now()).add(4, 'days').toISOString(), status: 'added', time: '9:00 - 15:00',
                shift:    'Morning',
                position: 'Host'
            },
            {date: moment(Date.now()).add(5, 'days').toISOString()},
            {date: moment(Date.now()).add(6, 'days').toISOString()},
        ]
    },
    {
        id:        '5',
        status:    'Active',
        firstName: 'Recardo',
        lastName:  'Vereceloni',
        email:     'Recardo@esteri.it',
        phone:     '333-1232660',
        dateOfBirth: new Date('1992-02-01').toISOString(),
        startDate: moment('05/01/21', 'DD/MM/YYYY').toISOString(),
        lastDate:  '',
        rating:    '19.5',
        position:  'Chef',
        image:     avatar9,
        dates:     [
            {date: moment(Date.now()).add(0, 'days').toISOString()},
            {date: moment(Date.now()).add(1, 'days').toISOString()},
            {date: moment(Date.now()).add(2, 'days').toISOString()},
            {
                date:     moment(Date.now()).add(3, 'days').toISOString(), status: 'added', time: '16:00 - 21:00',
                shift:    'Morning',
                position: 'Chef'
            },
            {date: moment(Date.now()).add(4, 'days').toISOString()},
            {date: moment(Date.now()).add(5, 'days').toISOString()},
            {date: moment(Date.now()).add(6, 'days').toISOString()},
        ]
    },
    {
        id:        '6',
        status:    'Active',
        firstName: 'Lorenzo',
        lastName:  'Proietti',
        email:     'Lorenzopro@esteri.it',
        phone:     '333-7253467',
        dateOfBirth: new Date('1990-01-01').toISOString(),
        startDate: moment('04/02/21', 'DD/MM/YYYY').toISOString(),
        lastDate:  '',
        rating:    '19.5',
        position:  'Waiter',
        image:     avatar7,
        dates:     [
            {date: moment(Date.now()).add(0, 'days').toISOString()},
            {date: moment(Date.now()).add(1, 'days').toISOString()},
            {date: moment(Date.now()).add(2, 'days').toISOString()},
            {date: moment(Date.now()).add(3, 'days').toISOString()},
            {date: moment(Date.now()).add(4, 'days').toISOString()},
            {date: moment(Date.now()).add(5, 'days').toISOString()},
            {date: moment(Date.now()).add(6, 'days').toISOString()},
        ]
    },
    {
        id:        '7',
        status:    'Active',
        firstName: 'Mila',
        lastName:  'Tommaso',
        email:     'Milatom@esteri.it',
        phone:     '333-9087660',
        startDate: moment('03/02/21', 'DD/MM/YYYY').toISOString(),
        lastDate:  '',
        rating:    '19.5',
        position:  'Waiter',
        image:     avatar8,
        dates:     [
            {date: moment(Date.now()).add(0, 'days').toISOString()},
            {
                date:     moment(Date.now()).add(1, 'days').toISOString(), status: 'added', time: '9:00 - 16:00',
                shift:    'Morning',
                position: 'Waiter'
            },
            {date: moment(Date.now()).add(2, 'days').toISOString()},
            {
                date:     moment(Date.now()).add(3, 'days').toISOString(), status: 'added', time: '9:00 - 16:00',
                shift:    'Morning',
                position: 'Waiter'
            },
            {date: moment(Date.now()).add(4, 'days').toISOString()},
            {
                date:     moment(Date.now()).add(5, 'days').toISOString(), status: 'added', time: '9:00 - 16:00',
                shift:    'Morning',
                position: 'Waiter'
            },
            {date: moment(Date.now()).add(6, 'days').toISOString()},
        ]
    }
]

/** @typedef {{
 *  employees: Employee[],
 *  addShift: () => void,
 *  addEmployee: (employee: Employee) => void,
 * getEmployees: () => Promise<Employee[]>,
 * updateEmployees: (employees: Employee[]) => void,
 * archiveEmployee: (id: string) => void
}} EmployeesContext */

/** @typedef {{
 * id: string,
 * status: string,
 * name: string,
 * email: string,
 * phone: string,
 * startDate: string,
 * lastDate: string,
 * rating: string,
 * position: string,
 * image: string,
 * dates: {date: string, time?: string, position?: string}[]
}} Employee */

const EmployeesContext = createContext({});

/** @returns {EmployeesContext | {}}*/
export const useEmployeesContext = () => useContext(EmployeesContext)

const EmployeesProvider = ({children}) => {
    const [employees, setEmployees] = useState(employeesData)

    const addEmployee = (employee) => {
        const newEmployee = {
            ...employee,
            status:    'Active',
            startDate: moment().toISOString(),
            endDate:   '',
            rating:    '19.5',
            dates:     [],
        }

        setEmployees([...employees, newEmployee])
    }

    const addShift = (employeeId, shiftDate, shift) => {
        const employeeIndex = employees.findIndex(employee => employee.id === employeeId)
        const dateIndex = employees[employeeIndex].dates.findIndex(date => date.date === shiftDate)

        const _employees = produce(employees, (draft) => {
            draft[employeeIndex].dates[dateIndex] = { ...shift, status: "added", date: draft[employeeIndex].dates[dateIndex].date }
        })

        setEmployees(_employees)
        return _employees
    }


    const getEmployees = (startDate) => {
        setEmployees(employees)
    }

    const updateEmployees = (employees) => {
        setEmployees(employees);
    }

    const archiveEmployee = (id) => {
        const newEmployees = employees.map(employee => {
            if (employee.id === id) {
                employee.status = 'Archived'
            }
            return employee
        })
        setEmployees(newEmployees)
    }

    return <EmployeesContext.Provider value={{
        employees,
        addShift,
        addEmployee,
        getEmployees,
        updateEmployees,
        archiveEmployee
    }}>{children}</EmployeesContext.Provider>
}

export default EmployeesProvider
