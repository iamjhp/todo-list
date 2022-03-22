import {format} from 'date-fns'

const dateField = document.getElementById("date")
dateField.setAttribute("min", format(new Date(), 'yyyy-MM-dd'))
console.log(format(new Date(), 'yyyy-MM-dd'))