const todos=[{
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
    completed: false
}
]
const removeTodo=function (todos,text) {
    const todoIndex=todos.findIndex((todo,index)=>{
        return todo.text.toUpperCase() === text.toUpperCase()
    })
    return todoIndex>=0?todos.splice(todoIndex,1):todos
}
removeTodo(todos,"buy food")
console.log(todos)