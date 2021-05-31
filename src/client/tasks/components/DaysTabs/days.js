import moment from 'moment'

function getCurrentWeek() {

    const currentDate = moment();

    const weekStart = currentDate.clone().startOf('isoweek');
    let days = [];

    for (let i = 0; i <= 6; i += 1) {
        days.push(moment(weekStart).add(i, 'days').format("YYYY-MM-DD"));
    }

    return days;
}

export const dates = getCurrentWeek();



