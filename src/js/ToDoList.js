import format from 'date-fns'
import Task from "./Task";

const todoListsClass = document.querySelector(".todo-lists")
const taskID = document.querySelector(".task-id")
const mainContainer = document.querySelector(".main-container")

const todolist = (() => {

    const getTaskID = () => {
    }

    const displayTasks = () => {
        Object.keys(localStorage).forEach(key => {
            let item = localStorage.getItem(key)
            item = JSON.parse(item)
            displayTask(item)
            
            addDeleteEventListener(item._id)
        })
    }

    const saveNewTask = (item) => {
        localStorage.setItem(item.id, JSON.stringify(item))
        displayTask(item)
        addDeleteEventListener(item._id)
    }

    const displayTask = (item) => {
        getHTMLSkeletonForTask(item._id, item._name, item._date)
    }

    const addDeleteEventListener = (itemID) => {
        const deleteButton = document.querySelector(`.todo-item[task-id="${itemID}"]>.delete`)
        deleteButton.addEventListener("click", () => {
            const removedItem = document.querySelector(`.todo-item[task-id="${itemID}"]`);
            removedItem.parentElement.removeChild(removedItem)
            localStorage.removeItem(itemID)
        })
    }

    const getHTMLSkeletonForTask = (id, name, date) => {
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

        const editSpan = document.createElement("span")
        editSpan.classList.add("edit")
        editSpan.appendChild(document.createTextNode("edit"))
        toDoItemDiv.appendChild(editSpan)

        const deleteSpan = document.createElement("span")
        deleteSpan.classList.add("delete")
        deleteSpan.appendChild(document.createTextNode("delete"))
        toDoItemDiv.appendChild(deleteSpan)

        todoListsClass.appendChild(toDoItemDiv)
    }

    return {displayTasks, saveNewTask}
})()

export default todolist

