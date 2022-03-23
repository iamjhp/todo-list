export default class Task {
    constructor(name, date, description, priority, checkbox) {
        this._id = Task.idCounter
        this.name = name
        this.date = date
        this.description = description
        this.priority = priority
        this.checkbox = checkbox
    }

    set name(newName) {
        this._name = newName
    }

    get name() {
        return this._name
    }

    set date(newDate) {
        this._date = newDate
    }

    get date() {
        return this._date
    }

    get id() {
        return this._id
    }

    set description(newDescription) {
        this._description = newDescription
    }

    get description() {
        return this._description
    }

    get priority() {
        return this.priority
    }

    set priority(newPriority) {
        this._priority = newPriority
    } 

    set checkbox(newBool) {
        this._checkbox = newBool
    }

    get checkbox() {
        return this._checkbox
    }

    static get idCounter() {
        if (Task._idCounter == undefined) Task._idCounter = 0
        while(localStorage.getItem(Task._idCounter)) {
            Task._idCounter += 1
        }
        return Task._idCounter
    }
}