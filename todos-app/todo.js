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
    search:''
}

const renderingTodos=function (todos,filters) {
    
    const filteredTodos = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(filters.search)
    })
    
    document.querySelector('#todos-container').innerHTML = ''

    const notCompletesTodos = filteredTodos.filter((todo, index) => !todo.completed)
    leftTodos = document.createElement('h2')
    leftTodos.textContent = `you have ${notCompletesTodos.length} left to do`
    document.querySelector('#todos-container').appendChild(leftTodos)


    filteredTodos.forEach((todo) => {
        const newTodo = document.createElement('p')
        newTodo.textContent = todo.text
        document.querySelector('#todos-container').appendChild(newTodo)

    })
}
renderingTodos(todos,filters)

document.querySelector('#create-todo').addEventListener('click',(e)=>{
    console.log("it's fired")
})

document.querySelector('#search').addEventListener('input',(e)=>{
    filters.search=e.target.value
    renderingTodos(todos, filters)
})