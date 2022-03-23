import {format, isSameDay, parseISO} from 'date-fns'

// hide all past days in form
const dateField = document.getElementById("date")
dateField.setAttribute("min", format(new Date(), 'yyyy-MM-dd'))

// compare if date is equal to today
function isToday (date) {
    const today = format(new Date(), 'yyyy-MM-dd')
    return isSameDay(parseISO(today), parseISO(date))
}

export {isToday}