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


const renderingTodos=function (todos) {
    const notCompletesTodos = todos.filter((todo, index) => !todo.completed )
    leftTodos = document.createElement('h2')
    leftTodos.textContent = `you have ${notCompletesTodos.length} left to do`
    document.querySelector('body').appendChild(leftTodos)

    todos.forEach((todo) => {
        const newTodo = document.createElement('p')
        newTodo.textContent = todo.text
        document.querySelector('body').appendChild(newTodo)

    })
}
renderingTodos(todos)

document.querySelector('button').addEventListener('click',(e)=>{
    console.log("it's fired")
})