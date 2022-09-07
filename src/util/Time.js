import moment from "moment";

export const timeToTimeInDay = (time) => {
    const averageHour = (parseInt(time.split('-')[0].split(':')[0]) + parseInt(time.split('-')[1].split(':')[0])) / 2

    if (averageHour >= 6 && averageHour < 13) {
        return "Morning";
    } else if (averageHour >= 13 && averageHour < 18) {
        return "Afternoon";
    } else if (averageHour >= 18 && averageHour < 23) {
        return "Evening";
    } else if (averageHour >= 23 && averageHour < 6) {
        return "Night";
    }

    return ""
}

export const generateDates = (startDate) => {
    const dates = []
    for (let i = 0; i < 7; i++) {
        dates.push({label: moment(startDate).add(i, 'days').format('ddd DD/MM')})
    }
    return dates
}


export const filterDate = (dates, startDate, index) => {
    const _index = dates.findIndex(({date}) => moment(date).isSame(moment(startDate).add(index, 'days'), 'days'))
    return _index > -1 ? dates[_index] : {date: moment(startDate).add(index, 'days').toISOString()}
}

export const isSameDate = (date1, date2) => {
    const _date1 = moment(date1)
    const _date2 = moment(date2)

    return _date1.isSame(_date2, 'days')
}

export const monthsList = [
    {label: "January", value: "01"},
    {label: "February", value: "02"},
    {label: "March", value: "03"},
    {label: "April", value: "04"},
    {label: "May", value: "05"},
    {label: "June", value: "06"},
    {label: "July", value: "07"},
    {label: "August", value: "08"},
    {label: "September", value: "09"},
    {label: "October", value: "10"},
    {label: "November", value: "11"},
    {label: "December", value: "12"}
]
