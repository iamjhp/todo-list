import Task from "./Task"
import ToDoList from "./ToDoList"

const content = document.querySelector(".content")
const popUpForm = document.getElementById("form-popup")
const addToDoListButton = document.querySelector(".add-task")
const blocker = document.querySelector(".blocker")
const form = document.querySelector(".form-container")
const form2 = document.querySelector(".form-container")

addToDoListButton.addEventListener("click", () => {
    openTaskFormPopUp(false)
    sumbitEventHandlerForNewTask()
    blockerDivClickListener(handleTaskFromAddButtonEvent)
})

const sumbitEventHandlerForNewTask = () => {
    form.addEventListener("submit", handleTaskFromAddButtonEvent, 
    {
        once: true
    })
}

const blockerDivClickListener = (callback) => {
    blocker.addEventListener("click", () => {
        form.removeEventListener("submit", callback)
        togglePopUpHandler()
    }, {
        once: true
    })
}

// handle after clicking the 'add task' button in the pop-up
const handleTaskFromAddButtonEvent = (e) => {
    e.preventDefault()
    const {title, date, description, priority, project} = getNewTaskForm()
    const newTask = new Task(title, date, description, priority, project)
    ToDoList.saveNewTask(newTask)
    form.removeEventListener("sumbit", handleTaskFromAddButtonEvent)
    togglePopUpHandler()
}

// handle after clicking the 'edit task' button in the pop-up
const handleTaskFromEditButtonEvent = (e, item) => {
    e.preventDefault()
    const {title, date, description, priority, project} = getNewTaskForm()
    item._name = title
    item._date = date
    ToDoList.editTask(item)
    togglePopUpHandler()
}

const addDeleteEventListener = (itemID) => {
    const deleteButton = document.querySelector(`.todo-item[task-id="${itemID}"]>.delete`)
    deleteButton.addEventListener("click", () => {
        const removedItem = document.querySelector(`.todo-item[task-id="${itemID}"]`);
        removedItem.parentElement.removeChild(removedItem)
        localStorage.removeItem(itemID)
    })
    blockerDivClickListener()
}

const addEditEventListener = (itemID) => {
    const editButton = document.querySelector(`.todo-item[task-id="${itemID._id}"]>.edit`)
    editButton.addEventListener("click", () => {
        form.removeEventListener("sumbit", handleTaskFromAddButtonEvent)
        document.getElementById("title").value = itemID._name
        document.getElementById("date").value = itemID._date
        document.getElementById("description").value = itemID._description
        document.getElementById("priority").value = itemID.priority
        openTaskFormPopUp(true)
        const handler = (e) => handleTaskFromEditButtonEvent(e, itemID)
        submitEventHandlerForEditTask(handler)
        blockerDivClickListener(handler)
    })
}

const submitEventHandlerForEditTask = (callback) => {
    form.addEventListener("submit", callback,
    {
        once: true
    })
}

// open or close the form-popup
function toggleFormWindow() {
    popUpForm.classList.toggle("open")
}

// set or remove the background blur
function toggleBlurBackground() {
    content.classList.toggle("is-blurred")
}

function togglePopUpHandler() {
    console.log("togglePopUpHandler")
    toggleFormWindow()
    toggleBlurBackground()
}

function openTaskFormPopUp(editBool = false) {
    if (!editBool) form.reset() //clear form for add new task
    addSubmitButtonForFrom(editBool)
    togglePopUpHandler()
}

// returns form values
function getNewTaskForm() {
    const title = document.getElementById("title").value
    const date = document.getElementById("date").value
    const description = document.getElementById("description").value
    const priority = document.getElementById("priority").value
    return {title, date, description, priority}
}

// create the corresponding form pop-up content
function addSubmitButtonForFrom(editBool = false) {
    const formFooterDiv = document.querySelector(".form-footer")

    let childNode = formFooterDiv.lastElementChild
    while (childNode) {
        formFooterDiv.removeChild(childNode)
        childNode = formFooterDiv.lastElementChild
    }
   
    if (editBool) {
        const editButton = document.createElement("input")
        editButton.setAttribute("type", "submit")
        editButton.id = "editTask"
        editButton.setAttribute("value", "edit task")
        formFooterDiv.appendChild(editButton)
    } else {
        const sumbitButton = document.createElement("input")
        form.reset()
        sumbitButton.setAttribute("type", "submit")
        sumbitButton.id = "addTask"
        sumbitButton.setAttribute("value", "add task")
        formFooterDiv.appendChild(sumbitButton)
    }
}

export {addDeleteEventListener, addEditEventListener}