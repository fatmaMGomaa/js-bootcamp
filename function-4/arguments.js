const getTip=function(total, tip=0.2){
    return `a ${tip * 100}% discount on ${total} is ${total*tip}`
}
console.log(getTip(100))
console.log(getTip(100,0.1))