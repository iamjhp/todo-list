import Task from "./Task"
import ToDoList from "./ToDoList"

const content = document.querySelector(".content")
const popUpForm = document.getElementById("form-popup")
const addToDoListButton = document.querySelector(".add-task")
const blocker = document.querySelector(".blocker")
const addTaskButton = document.getElementById("addTask")
const addTaskForm = document.querySelector(".form-container")
const taskID = document.querySelectorAll(".todo-item[task-id]")
const deleteButton = document.querySelector(".delete")

addToDoListButton.addEventListener("click", openTaskFormPopUp)
blocker.addEventListener("click", closeTaskFormPopUp)

addTaskForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const {title, date, description, priority, project} = getNewTaskForm()

    const newTask = new Task(title, date, description, priority, project)
    ToDoList.saveNewTask(newTask)

    closeTaskFormPopUp()
    addTaskForm.reset()
})

/*
deleteButton.forEach(item => {
    item.addEventListener("click", () => 
        console.log(item.getAttribute("task-id"))
    )
})
*/

function togglePopUp() {
    popUpForm.classList.toggle("open")
}

function openTaskFormPopUp() {
    addTaskForm.reset()
    togglePopUp()
    toggleBlurBackground()
}

function closeTaskFormPopUp() {
    togglePopUp()
    toggleBlurBackground()
}

function toggleBlurBackground() {
    content.classList.toggle("is-blurred")
}

function getNewTaskForm() {
    const title = document.getElementById("title").value
    const date = document.getElementById("date").value
    const description = document.getElementById("description").value
    const priority = document.getElementById("priority").value
    const project = document.getElementById("project").value
    return {title, date, description, priority, project}
}