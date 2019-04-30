const todos = [{
    text: "walk with wesky",
    completed: true
}, {
    text: "Buy food",
    completed: false
}, {
    text: "do work",
    completed: true
}, {
    text: "study",
    completed: false
}, {
    text: "call my daddy",
    completed: true
}]

const filters={
    searchText:'',
    hideCompeleted:false
}

const renderingTodos=function (todos,filters) {
    
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompeleted || !todo.completed
        
        return searchTextMatch && hideCompletedMatch
    })

    const notCompletesTodos = filteredTodos.filter((todo, index) => !todo.completed)

    document.querySelector('#todos-container').innerHTML = ''
    
    const leftTodos = document.createElement('h2')
    leftTodos.textContent = `you have ${notCompletesTodos.length} left to do`
    document.querySelector('#todos-container').appendChild(leftTodos)


    filteredTodos.forEach((todo) => {
        const newTodo = document.createElement('p')
        newTodo.textContent = todo.text
        document.querySelector('#todos-container').appendChild(newTodo)

    })
}
renderingTodos(todos,filters)

document.querySelector('#search').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderingTodos(todos, filters)
})

document.querySelector('#adding-form').addEventListener('submit',(e)=>{
    e.preventDefault()
    todos.push({ text: e.target.elements.addingTodo.value, completed: false})
    e.target.elements.addingTodo.value=''
    renderingTodos(todos, filters)
})

document.querySelector('#hide-Compeleted').addEventListener('change',(e)=>{
    filters.hideCompeleted = e.target.checked
    renderingTodos(todos, filters)
    console.log(filters.hideCompeleted)
})