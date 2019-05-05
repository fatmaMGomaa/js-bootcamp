// Prototypal Inheritance

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })

        return bio
    }
    setName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}

class Student extends Person{
    constructor(firstName, lastName, age,grade ,likes = []){
        super(firstName, lastName, age, likes = [])
        this.grade=grade
    }
    getBio(){
        if(this.grade>70){
            return`${this.firstName} has passed the class`
        }else{
            return `${this.firstName} has failed the class`
        }
    }
    updateGrade(change){
        this.grade+=change
    }
}

const myStudent=new Student('fatma','gomaa',27,60,['animals','handball'])
console.log(myStudent.getBio())
myStudent.updateGrade(20)
console.log(myStudent.getBio())