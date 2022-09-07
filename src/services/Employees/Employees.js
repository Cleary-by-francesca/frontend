import moment from "moment";
import avatar3 from "../../assets/images/avatar3.png";
import avatar2 from "../../assets/images/avatar2.png";
import avatar4 from "../../assets/images/avatar4.png";
import avatar5 from "../../assets/images/avatar5.png";
import avatar9 from "../../assets/images/avatar9.png";
import avatar7 from "../../assets/images/avatar7.png";
import avatar8 from "../../assets/images/avatar8.png";

const employeesData = [
    {
        id:          '1',
        status:      'Active',
        firstName:   'Emma',
        lastName:    'Rossi',
        email:       'Emmaro@esteri.it',
        phone:       '333-7603660',
        dateOfBirth: new Date('1998-02-04').toISOString(),
        startDate:   moment('21/01/21', 'DD/MM/YYYY').toISOString(),
        lastDate:    '',
        rating:      '19.5',
        position:    'Waiter',
        image:       avatar3
    },
    {
        id:          '2',
        status:      'Archived',
        firstName:   'Leonardo',
        lastName:    'Manacini',
        rating:      '19.5',
        email:       'leonardo@esteri.it',
        phone:       '333-5463660',
        dateOfBirth: new Date('1995-05-08').toISOString(),
        startDate:   moment('21/02/21', 'DD/MM/YYYY').toISOString(),
        lastDate:    '',
        position:    'Chef',
        image:       avatar2,
    },
    {
        id:          '3',
        status:      'Active',
        firstName:   'Sofia',
        lastName:    'Gussee',
        rating:      '19.5',
        email:       'Sofia@esteri.it',
        phone:       '333-8769660',
        dateOfBirth: new Date('1994-01-08').toISOString(),
        startDate:   moment('21/02/21', 'DD/MM/YYYY').toISOString(),
        lastDate:    '',
        position:    'Bartender',
        image:       avatar4,
    },
    {
        id:          '4',
        status:      'Active',
        firstName:   'Luna',
        lastName:    'Refaelo',
        rating:      '19.5',
        email:       'Luna@esteri.it',
        phone:       '333-6832660',
        dateOfBirth: new Date('1990-06-01').toISOString(),
        startDate:   moment('04/01/21', 'DD/MM/YYYY').toISOString(),
        lastDate:    '',
        position:    'Host',
        image:       avatar5,
    },
    {
        id:          '5',
        status:      'Active',
        firstName:   'Recardo',
        lastName:    'Vereceloni',
        email:       'Recardo@esteri.it',
        phone:       '333-1232660',
        dateOfBirth: new Date('1992-02-01').toISOString(),
        startDate:   moment('05/01/21', 'DD/MM/YYYY').toISOString(),
        lastDate:    '',
        rating:      '19.5',
        position:    'Chef',
        image:       avatar9
    },
    {
        id:          '6',
        status:      'Active',
        firstName:   'Lorenzo',
        lastName:    'Proietti',
        email:       'Lorenzopro@esteri.it',
        phone:       '333-7253467',
        dateOfBirth: new Date('1990-01-01').toISOString(),
        startDate:   moment('04/02/21', 'DD/MM/YYYY').toISOString(),
        lastDate:    '',
        rating:      '19.5',
        position:    'Waiter',
        image:       avatar7,
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
    }
]

export const getEmployees = async () => employeesData


