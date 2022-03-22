import format from 'date-fns'
import Task from "./Task";
import {addDeleteEventListener, addEditEventListener} from "./DisplayController"

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
        })
    }

    const saveNewTask = (item) => {
        localStorage.setItem(item.id, JSON.stringify(item))
        displayTask(item)
        addDeleteEventListener(item._id)
        addEditEventListener(item)
    }

    const editTask = (item) => {
        const editedId = item._id
        const editedTitle = item._name
        const editedDate = item._date
        const editedDespriction = item._decription
        const editedPriority = item.priority
        editHTMLSelektion(editedId, editedTitle, editedDate, editedDespriction, editedPriority)
        addDeleteEventListener(item._id)
        addEditEventListener(item)
        editTaskInStorage(item)
    }

    const editTaskInStorage = (item) => {
        localStorage.setItem(item._id, JSON.stringify(item))
        
    }

    const displayTask = (item) => {
        getHTMLSkeletonForNewTask(item._id, item._name, item._date)
    }

    const editHTMLSelektion = (id, name, date, description, priority) => {
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

        
    }

    const getHTMLSkeletonForNewTask = (id, name, date) => {
        const toDoItemDiv = document.createElement("div")
        toDoItemDiv.classList.add("todo-item")
        toDoItemDiv.setAttribute("task-id", id)

        const checkBoxLabel = document.createElement("label")
        checkBoxLabel.classList.add("checkbox")
        toDoItemDiv.appendChild(checkBoxLabel)
        
        const checkBoxInput = document.createElement("input")
        checkBoxInput.type = "checkbox"
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
    }

    return {displayTasks, saveNewTask, editTask}
})()

export default todolist

