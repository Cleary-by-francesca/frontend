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
    return _index > 0 ? dates[_index] : {}
}
