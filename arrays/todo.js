const todos=["play with wesky", "study", "do work", "call my daddy"]

// console.log(`you have ${todos.length} todos to do 
// todo:${todos[0]}
// todo:${todos[1]}
// todo:${todos[todos.length-1]}`)

// todos.splice(2,1)
// console.log(todos)
// todos.push("hello world")
// console.log(todos)
// todos.shift()
// console.log(todos)

// todos.forEach((todo, index)=>{
//     console.log(`${index+1}. ${todo} `)
// })

for(let i=0; i<todos.length;i++){
    console.log(`${i+1}. ${todos[i]}`)
}