const getSavedTodos=function () {
    const todosJson = localStorage.getItem("todos")
    return todosJson !== null ? JSON.parse(todosJson) : []
}

const saveTodos=function(todos) {
    return localStorage.setItem("todos", JSON.stringify(todos))
}

const generateTodoDom=function (todo) {
    const newTodo = document.createElement('div')
    const newCheckbox = document.createElement('input')
    const newText = document.createElement('span')
    const newButton = document.createElement('button')

    newCheckbox.setAttribute('type','checkbox')
    newText.textContent = todo.text+"  "
    newButton.textContent = "x"

    newTodo.appendChild(newCheckbox)
    newTodo.appendChild(newText)
    newTodo.appendChild(newButton)
    return newTodo
}

const generateSummaryDom = function (notCompletesTodos) {
    const leftTodos = document.createElement('h2')
    leftTodos.textContent = `you have ${notCompletesTodos.length} left to do`
    return leftTodos
}

const renderingTodos = function (todos, filters) {

    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompeleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    const notCompletesTodos = filteredTodos.filter((todo, index) => !todo.completed)

    document.querySelector('#todos-container').innerHTML = ''

    document.querySelector('#todos-container').appendChild(generateSummaryDom(notCompletesTodos))


    filteredTodos.forEach((todo) => {
        document.querySelector('#todos-container').appendChild(generateTodoDom(todo))

    })
}