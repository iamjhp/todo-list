import Task from "./Task"
import ToDoList from "./ToDoList"

const content = document.querySelector(".content")
const popUpForm = document.getElementById("form-popup")
const addToDoListButton = document.querySelector(".add-task")
const blocker = document.querySelector(".blocker")
const blocker2 = document.querySelector(".blocker2")
const form = document.querySelector(".form-container")
const descriptionPopUp = document.getElementById("description-popup") 

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

const blockerDivClickListener = (callback = null) => {
    blocker.addEventListener("click", () => {
        if(callback) {
            form.removeEventListener("submit", callback)
        } 
        togglePopUpHandler()
    }, {
        once: true
    })
}

const checkBoxEventListener = (item) => {
    const checkBox = document.querySelector(`.todo-item[task-id="${item._id}"]>.checkbox>input`)
    const todoTitle = document.querySelector(`.todo-item[task-id="${item._id}"]>.todo-title`)
    checkBox.addEventListener("click", () => {
        item._checkbox = checkBox.checked
        displayCompletedTask(item._checkbox, todoTitle)
        ToDoList.editTaskInStorage(item)
    })
}

const displayCompletedTask = (checkbox, checkBoxInput) => {
    if (checkbox) {
        checkBoxInput.id = "cross-out"
    } else {
        checkBoxInput.id = "notChecked"
    }
}

// handle after clicking the 'add task' button in the pop-up
const handleTaskFromAddButtonEvent = (e) => {
    e.preventDefault()
    const {title, date, description, priority} = getNewTaskForm()
    const newTask = new Task(title, date, description, priority, false)
    ToDoList.saveNewTask(newTask)

    togglePopUpHandler()
}

// handle after clicking the 'edit task' button in the pop-up
const handleTaskFromEditButtonEvent = (e, item) => {
    e.preventDefault()
    const {title, date, description, priority} = getNewTaskForm()
    item._name = title
    item._date = date
    item._description = description
    item.priority = priority

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
    //blockerDivClickListener()
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

const addDetailsEventListenr = (item) => {
    const detailsButton = document.querySelector(`.todo-item[task-id="${item._id}"]>.details`)
    detailsButton.addEventListener("click", () => {
        toggleDetailsWindow()

        const detailInput = document.getElementById("detail")
        detailInput.value = item._description
        blocker2DivClickListener()
    })
}

const blocker2DivClickListener = () => {
    blocker2.addEventListener("click", () => {
        toggleDetailsWindow()
    }, {
        once: true
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
    toggleFormWindow()
    toggleBlurBackground()
}

function toggleDetailsWindow() {
    toggleBlurBackground()
    descriptionPopUp.classList.toggle("open")
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

export {addDeleteEventListener, addEditEventListener, addDetailsEventListenr, checkBoxEventListener, displayCompletedTask}