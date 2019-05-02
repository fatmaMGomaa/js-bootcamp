'use strict'

const todos = getSavedTodos()

const filters={
    searchText:'',
    hideCompeleted:false
}

renderingTodos(todos,filters)

document.querySelector('#search').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderingTodos(todos, filters)
})

document.querySelector('#adding-form').addEventListener('submit',(e)=>{
    e.preventDefault()
    todos.push({ id: uuidv4(),text: e.target.elements.addingTodo.value, completed: false})
    saveTodos(todos)
    renderingTodos(todos, filters)
    e.target.elements.addingTodo.value = ''
})

document.querySelector('#hide-Compeleted').addEventListener('change',(e)=>{
    filters.hideCompeleted = e.target.checked
    renderingTodos(todos, filters)
})