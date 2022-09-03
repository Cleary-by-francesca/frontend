import moment from "moment";

const employeesShifts = [
    {
        id:    '1',
        dates: [
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
        id:    '2',
        dates: [
            {date: moment(Date.now()).add(0, 'days').toISOString()},
            {date: moment(Date.now()).add(1, 'days').toISOString()},
            {
                date:     moment(Date.now()).add(2, 'days').toISOString(), status: 'published', time: '9:00 - 11:00',
                shift:    'Morning',
                position: 'Chef'
            },
            {date: moment(Date.now()).add(3, 'days').toISOString()},
            {
                date:     moment(Date.now()).add(4, 'days').toISOString(), status: 'published', time: '9:00 - 11:00',
                shift:    'Morning',
                position: 'Chef'
            },
            {date: moment(Date.now()).add(5, 'days').toISOString()},
            {date: moment(Date.now()).add(6, 'days').toISOString()},
        ],
    },
    {
        id:    '3',
        dates: [
            {date: moment(Date.now()).add(0, 'days').toISOString()},
            {
                date:     moment(Date.now()).add(1, 'days').toISOString(), status: 'published', time: '9:00 - 15:00',
                shift:    'Morning',
                position: 'Host'
            },
            {date: moment(Date.now()).add(2, 'days').toISOString()},
            {date: moment(Date.now()).add(3, 'days').toISOString()},
            {
                date:     moment(Date.now()).add(4, 'days').toISOString(), status: 'published', time: '9:00 - 15:00',
                shift:    'Morning',
                position: 'Host'
            },
            {date: moment(Date.now()).add(5, 'days').toISOString()},
            {date: moment(Date.now()).add(6, 'days').toISOString()},
        ]
    },
    {
        id:    '4',
        dates: [
            {date: moment(Date.now()).add(0, 'days').toISOString()},
            {
                date:     moment(Date.now()).add(1, 'days').toISOString(), status: 'published', time: '9:00 - 15:00',
                shift:    'Morning',
                position: 'Host'
            },
            {date: moment(Date.now()).add(2, 'days').toISOString()},
            {date: moment(Date.now()).add(3, 'days').toISOString()},
            {
                date:     moment(Date.now()).add(4, 'days').toISOString(), status: 'published', time: '9:00 - 15:00',
                shift:    'Morning',
                position: 'Host'
            },
            {date: moment(Date.now()).add(5, 'days').toISOString()},
            {date: moment(Date.now()).add(6, 'days').toISOString()},
        ]
    },
    {
        id:    '5',
        dates: [
            {date: moment(Date.now()).add(0, 'days').toISOString()},
            {date: moment(Date.now()).add(1, 'days').toISOString()},
            {date: moment(Date.now()).add(2, 'days').toISOString()},
            {
                date:     moment(Date.now()).add(3, 'days').toISOString(), status: 'published', time: '16:00 - 21:00',
                shift:    'Morning',
                position: 'Chef'
            },
            {date: moment(Date.now()).add(4, 'days').toISOString()},
            {date: moment(Date.now()).add(5, 'days').toISOString()},
            {date: moment(Date.now()).add(6, 'days').toISOString()},
        ]
    },
    {
        id:    '6',
        dates: [
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
        id:    '7',
        dates: [
            {date: moment(Date.now()).add(0, 'days').toISOString()},
            {
                date:     moment(Date.now()).add(1, 'days').toISOString(), status: 'published', time: '9:00 - 16:00',
                shift:    'Morning',
                position: 'Waiter'
            },
            {date: moment(Date.now()).add(2, 'days').toISOString()},
            {
                date:     moment(Date.now()).add(3, 'days').toISOString(), status: 'published', time: '9:00 - 16:00',
                shift:    'Morning',
                position: 'Waiter'
            },
            {date: moment(Date.now()).add(4, 'days').toISOString()},
            {
                date:     moment(Date.now()).add(5, 'days').toISOString(), status: 'published', time: '9:00 - 16:00',
                shift:    'Morning',
                position: 'Waiter'
            },
            {date: moment(Date.now()).add(6, 'days').toISOString()},
        ]
    },
]

export const getEmployeesShifts = async() => {
    return employeesShifts
}
