import {isToday} from "./Date"
import Task from "./Task";
import {addDeleteEventListener, addEditEventListener, addDetailsEventListenr, checkBoxEventListener, displayCompletedTask} from "./DisplayController"

const todoListsClass = document.querySelector(".todo-lists")
const taskID = document.querySelector(".task-id")
const mainContainer = document.querySelector(".main-container")

const todolist = (() => {

    const displayTasks = () => {
        Object.keys(localStorage).forEach(key => {
            let item = localStorage.getItem(key)
            item = JSON.parse(item)
            displayTask(item)
            
            addDeleteEventListener(item._id)
            addEditEventListener(item)
            addDetailsEventListenr(item)
            checkBoxEventListener(item)
        })
    }

    const displayTodayTasks = () => {
        Object.keys(localStorage).forEach(key => {
            let item = getParsedTaskItem(key)
            let date = item._date
            
            if (isToday(date)) {
                displayTask(item)
                addDeleteEventListener(item._id)
                addEditEventListener(item)
                addDetailsEventListenr(item)
                checkBoxEventListener(item)
            }
        })
    }

    const getParsedTaskItem = (key) => {
        let item = localStorage.getItem(key)
        item = JSON.parse(item)
        return item
    }

    const saveNewTask = (item) => {
        localStorage.setItem(item.id, JSON.stringify(item))
        displayTask(item)
        addDeleteEventListener(item._id)
        addEditEventListener(item)
        addDetailsEventListenr(item)
        checkBoxEventListener(item)
    }

    const editTask = (item) => {
        const editedId = item._id
        const editedTitle = item._name
        const editedDate = item._date
        const editedDespriction = item._description
        const editedPriority = item.priority
        const checkbox = item._checkbox
        editHTMLSelektion(editedId, editedTitle, editedDate, editedDespriction, editedPriority, checkbox)
        addDeleteEventListener(item._id)
        addEditEventListener(item)
        addDetailsEventListenr(item)
        editTaskInStorage(item)
        checkBoxEventListener(item)
    }

    const editTaskInStorage = (item) => {
        localStorage.setItem(item._id, JSON.stringify(item))
        
    }

    const displayTask = (item) => {
        getHTMLSkeletonForNewTask(item._id, item._name, item._date, item._description, item.priority, item._checkbox)
    }

    const editHTMLSelektion = (id, name, date, description, priority, checkbox) => {
        const toDoItemDiv = document.querySelector(`.todo-item[task-id="${id}"]`)
        let childNode = toDoItemDiv.lastElementChild
        while(childNode) {
            toDoItemDiv.removeChild(childNode)
            childNode = toDoItemDiv.lastElementChild
        }

        const checkBoxLabel = document.createElement("label")
        checkBoxLabel.classList.add("checkbox")
        toDoItemDiv.appendChild(checkBoxLabel)
        
        const checkBoxInput = document.createElement("input")
        checkBoxInput.type = "checkbox"
        checkBoxInput.checked = checkbox
        checkBoxLabel.appendChild(checkBoxInput)

        const todoTitleSpan = document.createElement("span")
        todoTitleSpan.classList.add("todo-title")
        todoTitleSpan.appendChild(document.createTextNode(name))
        toDoItemDiv.appendChild(todoTitleSpan)

        const detailButton = document.createElement("button")
        detailButton.classList.add("details")
        detailButton.appendChild(document.createTextNode("DETAILS"))
        toDoItemDiv.appendChild(detailButton)

        const dateSpan = document.createElement("span")
        dateSpan.classList.add("created-date")
        dateSpan.appendChild(document.createTextNode(date))
        toDoItemDiv.appendChild(dateSpan)

        const editSpan = document.createElement("button")
        editSpan.classList.add("edit")
        editSpan.appendChild(document.createTextNode("edit"))
        toDoItemDiv.appendChild(editSpan)

        const deleteSpan = document.createElement("button")
        deleteSpan.classList.add("delete")
        deleteSpan.appendChild(document.createTextNode("delete"))
        toDoItemDiv.appendChild(deleteSpan) 
        
        displayCompletedTask(checkbox, todoTitleSpan)
    }

    const getHTMLSkeletonForNewTask = (id, name, date, description, priority, checkbox) => {
        const toDoItemDiv = document.createElement("div")
        toDoItemDiv.classList.add("todo-item")
        toDoItemDiv.setAttribute("task-id", id)

        const checkBoxLabel = document.createElement("label")
        checkBoxLabel.classList.add("checkbox")
        toDoItemDiv.appendChild(checkBoxLabel)
        
        const checkBoxInput = document.createElement("input")
        checkBoxInput.type = "checkbox"
        checkBoxInput.checked = checkbox
        checkBoxLabel.appendChild(checkBoxInput)

        const todoTitleSpan = document.createElement("span")
        todoTitleSpan.classList.add("todo-title")
        todoTitleSpan.appendChild(document.createTextNode(name))
        toDoItemDiv.appendChild(todoTitleSpan)

        const detailButton = document.createElement("button")
        detailButton.classList.add("details")
        detailButton.appendChild(document.createTextNode("DETAILS"))
        toDoItemDiv.appendChild(detailButton)

        const dateSpan = document.createElement("span")
        dateSpan.classList.add("created-date")
        dateSpan.appendChild(document.createTextNode(date))
        toDoItemDiv.appendChild(dateSpan)

        const editSpan = document.createElement("button")
        editSpan.classList.add("edit")
        editSpan.appendChild(document.createTextNode("edit"))
        toDoItemDiv.appendChild(editSpan)

        const deleteSpan = document.createElement("button")
        deleteSpan.classList.add("delete")
        deleteSpan.appendChild(document.createTextNode("delete"))
        toDoItemDiv.appendChild(deleteSpan)

        todoListsClass.appendChild(toDoItemDiv)

        displayCompletedTask(checkbox, todoTitleSpan)
    }

    return {displayTasks, saveNewTask, editTask, editTaskInStorage, displayTodayTasks}
})()

export default todolist

