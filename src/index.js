import './css/style.css';
import './js/DisplayController.js'
import ToDoList from "./js/ToDoList"
import './js/Date.js'

const nav = document.querySelectorAll(".nav-item")
const inBoxNav = document.getElementById("Inbox")
const todayNav = document.getElementById("Today")

ToDoList.displayTasks()
inBoxNav.setAttribute("selected", true)

inBoxNav.addEventListener("click", () => {
    highlightCurrentNav("Inbox")
    deleteToDoLists()
    ToDoList.displayTasks()
})

todayNav.addEventListener("click", () => {
    highlightCurrentNav("Today")
    deleteToDoLists()
    ToDoList.displayTodayTasks()
})

function deleteToDoLists () {
    const container = document.querySelector(".todo-lists")
    let childNode = container.lastElementChild
    while (childNode) {
        container.removeChild(childNode)
        childNode = container.lastElementChild
    }
}

function highlightCurrentNav (id) {
    let navArr = ["Inbox", "Today"]

    for (let i = 0; i < navArr.length; i++) {
        const currNav = document.getElementById(navArr[i])
        if (navArr[i] == id) {
            currNav.setAttribute("selected", true)
        } else {
            currNav.setAttribute("selected", false)
        }
    }
}



