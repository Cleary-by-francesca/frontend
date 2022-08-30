import { createContext, useContext, useState } from "react";
import moment from "moment"
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";
import avatar5 from "../assets/avatar5.png";
import avatar6 from "../assets/avatar6.png";
import avatar7 from "../assets/avatar7.png";
import avatar8 from "../assets/avatar8.png";
import avatar9 from "../assets/avatar9.png";


const employeesData = [
    {
        name: 'Suzanna Vatik',
        rating: '19.5',
        position: 'Waiter',
        image: avatar2,
        dates: [
            { date: moment(Date.now()).add(0, 'days').toISOString() },
            { date: moment(Date.now()).add(1, 'days').toISOString() },
            { date: moment(Date.now()).add(2, 'days').toISOString() },
            { date: moment(Date.now()).add(3, 'days').toISOString() },
            { date: moment(Date.now()).add(4, 'days').toISOString() },
            { date: moment(Date.now()).add(5, 'days').toISOString() },
            { date: moment(Date.now()).add(6, 'days').toISOString() },
        ]
    },
    {
        name: 'Ross Geller',
        rating: '19.5',
        position: 'Chef',
        image: avatar3,
        dates: [
            { date: moment(Date.now()).add(0, 'days').toISOString() },
            { date: moment(Date.now()).add(1, 'days').toISOString() },
            {
                date: moment(Date.now()).add(2, 'days').toISOString(), status: 'added', time: '9:00 - 11:00', shift: 'Morning',
                position: 'Chef'
            },
            { date: moment(Date.now()).add(3, 'days').toISOString() },
            {
                date: moment(Date.now()).add(4, 'days').toISOString(), status: 'added', time: '9:00 - 11:00', shift: 'Morning',
                position: 'Chef'
            },
            { date: moment(Date.now()).add(5, 'days').toISOString() },
            { date: moment(Date.now()).add(6, 'days').toISOString() },
        ],
    },
    {
        name: 'Suffi Gussee',
        rating: '19.5',
        position: 'Bartender',
        image: avatar4,
        dates: [
            { date: moment(Date.now()).add(0, 'days').toISOString() },
            { date: moment(Date.now()).add(1, 'days').toISOString() },
            { date: moment(Date.now()).add(2, 'days').toISOString() },
            {
                date: moment(Date.now()).add(3, 'days').toISOString(), status: 'added', time: '16:00 - 21:00', shift: 'Evning',
                position: 'Bartender'
            },
            { date: moment(Date.now()).add(4, 'days').toISOString() },
            { date: moment(Date.now()).add(5, 'days').toISOString() },
            { date: moment(Date.now()).add(6, 'days').toISOString() },
        ]
    },
    {
        name: 'Luna Arenna',
        rating: '19.5',
        position: 'Host',
        image: avatar5,
        dates: [
            { date: moment(Date.now()).add(0, 'days').toISOString() },
            {
                date: moment(Date.now()).add(1, 'days').toISOString(), status: 'added', time: '9:00 - 15:00', shift: 'Morning',
                position: 'Host'
            },
            { date: moment(Date.now()).add(2, 'days').toISOString() },
            { date: moment(Date.now()).add(3, 'days').toISOString() },
            {
                date: moment(Date.now()).add(4, 'days').toISOString(), status: 'added', time: '9:00 - 15:00', shift: 'Morning',
                position: 'Host'
            },
            { date: moment(Date.now()).add(5, 'days').toISOString() },
            { date: moment(Date.now()).add(6, 'days').toISOString() },
        ]
    },
    {
        name: 'Skyler Kaufman',
        rating: '19.5',
        position: 'Bartender',
        image: avatar6,
        dates: [
            { date: moment(Date.now()).add(0, 'days').toISOString() },
            { date: moment(Date.now()).add(1, 'days').toISOString() },
            {
                date: moment(Date.now()).add(2, 'days').toISOString(), status: 'added', time: '16:00 - 21:00', shift: 'Evning',
                position: 'Bartender'
            },
            { date: moment(Date.now()).add(3, 'days').toISOString() },
            { date: moment(Date.now()).add(4, 'days').toISOString() },
            { date: moment(Date.now()).add(5, 'days').toISOString() },
            { date: moment(Date.now()).add(6, 'days').toISOString() },
        ]
    },
    {
        name: 'Soi Rio',
        rating: '19.5',
        position: 'Waiter',
        image: avatar7,
        dates: [
            { date: moment(Date.now()).add(0, 'days').toISOString() },
            { date: moment(Date.now()).add(1, 'days').toISOString() },
            { date: moment(Date.now()).add(2, 'days').toISOString() },
            { date: moment(Date.now()).add(3, 'days').toISOString() },
            { date: moment(Date.now()).add(4, 'days').toISOString() },
            { date: moment(Date.now()).add(5, 'days').toISOString() },
            { date: moment(Date.now()).add(6, 'days').toISOString() },
        ]
    },
    {
        name: 'Sofia Ashtamker',
        rating: '19.5',
        position: 'Waiter',
        image: avatar8,
        dates: [
            { date: moment(Date.now()).add(0, 'days').toISOString() },
            {
                date: moment(Date.now()).add(1, 'days').toISOString(), status: 'added', time: '9:00 - 16:00', shift: 'Morning',
                position: 'Waiter'
            },
            { date: moment(Date.now()).add(2, 'days').toISOString() },
            {
                date: moment(Date.now()).add(3, 'days').toISOString(), status: 'added', time: '9:00 - 16:00', shift: 'Morning',
                position: 'Waiter'
            },
            { date: moment(Date.now()).add(4, 'days').toISOString() },
            {
                date: moment(Date.now()).add(5, 'days').toISOString(), status: 'added', time: '9:00 - 16:00', shift: 'Morning',
                position: 'Waiter'
            },
            { date: moment(Date.now()).add(6, 'days').toISOString() },
        ]
    },
    {
        name: 'Fred Vereceloni',
        rating: '19.5',
        position: 'Waiter',
        image: avatar9,
        dates: [
            { date: moment(Date.now()).add(0, 'days').toISOString() },
            { date: moment(Date.now()).add(1, 'days').toISOString() },
            {
                date: moment(Date.now()).add(2, 'days').toISOString(), status: 'added', time: '9:00 - 16:00', shift: 'Morning',
                position: 'Waiter'
            },
            {
                date: moment(Date.now()).add(3, 'days').toISOString(), status: 'added', time: '9:00 - 16:00', shift: 'Morning',
                position: 'Waiter'
            },
            {
                date: moment(Date.now()).add(4, 'days').toISOString(), status: 'added', time: '9:00 - 16:00', shift: 'Morning',
                position: 'Waiter'
            },
            { date: moment(Date.now()).add(5, 'days').toISOString() },
            { date: moment(Date.now()).add(6, 'days').toISOString() },
        ]
    }
]

/** @typedef {{
 *  employees: Employee[],
 * getEmployees: () => Promise<Employee[]>,
 * updateEmployees: (employees: Employee[]) => void
}} EmployeesContext */

/** @typedef {{
 * name: string,
 * rating: string,
 * position: string,
 * image: string,
 * dates: {date: string, time?: string, position?: string}[]
}} Employee */

const EmployeesContext = createContext({});

/** @returns {EmployeesContext | {}}*/
export const useEmployeesContext = () => useContext(EmployeesContext)

const EmployeesProvider = ({ children }) => {
    const [employees, setEmployees] = useState(employeesData)

    const getEmployees = (startDate) => {
        setEmployees(employees)
    }

    const updateEmployees = (employees) => {
        setEmployees(employees);
    }

    return <EmployeesContext.Provider value={{
        employees,
        getEmployees,
        updateEmployees
    }}>{children}</EmployeesContext.Provider>
}

export default EmployeesProvider
