'use strict'

const getSavedTodos= () => {
    const todosJson = localStorage.getItem("todos")

    try{
        return todosJson ? JSON.parse(todosJson) : []
    }catch(e){
        return []
    }
}

const saveTodos = (todos) => localStorage.setItem("todos", JSON.stringify(todos))

const removeTodo= (id) => {
    const todoIndex=todos.findIndex((todo)=>todo.id===id)
    if (todoIndex > -1){
        todos.splice(todoIndex, 1)
    }
}

const toggleTodo= (id) => {
    const todo=todos.find((todo)=>todo.id===id)
    if (todo){
        todo.completed = !todo.completed
    }
}

const generateTodoDom=(todo) => {
    const newTodo = document.createElement('div')
    const newCheckbox = document.createElement('input')
    const newText = document.createElement('span')
    const newButton = document.createElement('button')

    newCheckbox.setAttribute('type','checkbox')
    newCheckbox.checked = todo.completed
    newText.textContent = todo.text+"  "
    newButton.textContent = "x"

    newTodo.appendChild(newCheckbox)
    newTodo.appendChild(newText)
    newTodo.appendChild(newButton)

    newButton.addEventListener('click',()=>{
        removeTodo(todo.id)
        saveTodos(todos)
        renderingTodos(todos,filters)
    })
    newCheckbox.addEventListener('change',(e)=>{
        toggleTodo(todo.id)
        saveTodos(todos)
        renderingTodos(todos, filters)
    })

    return newTodo
}

const generateSummaryDom = (notCompletesTodos) => {
    const leftTodos = document.createElement('h2')
    leftTodos.textContent = `you have ${notCompletesTodos.length} left to do`
    return leftTodos
}

const renderingTodos = (todos, filters) => {

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