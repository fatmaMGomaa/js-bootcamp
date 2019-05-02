const gradeCalc= function (studentGrade,total) {
    if(typeof studentGrade==="number" && typeof total==="number"){
        const precentage = (studentGrade / total) * 100
        let letter = ""
        if (precentage >= 90) {
            letter = "A"
        } else if (precentage >= 80) {
            letter = "B"
        } else if (precentage >= 70) {
            letter = "C"
        } else if (precentage >= 50) {
            letter = "D"
        } else {
            letter = "F"
        }
        return `you get ${letter} grade (${precentage})`
    }else{
        throw Error("the parameters are not numbers");
        
    }
}

// console.log(gradeCalc(20, false))
try{
    console.log(gradeCalc(20, '20'))
}catch (e){
    console.log("catching is running")
}