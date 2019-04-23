let password="lksmvkjb"
const isValidPassword=function (pass) {
    return pass.length>8 && !pass.includes("password")
}

console.log(isValidPassword("tota"))
console.log(isValidPassword("totawesky"))
console.log(isValidPassword("totapassword"))