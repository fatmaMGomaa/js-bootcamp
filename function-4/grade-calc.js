const gradeCalc= function (studentGrade,total) {
    const precentage= (studentGrade/ total)*100
    let letter=""
    if(precentage>=90){
        letter="A"
    } else if (precentage >= 80 ){
        letter = "B"
    } else if (precentage >= 70 ) {
        letter = "C"
    } else if (precentage >= 50) {
        letter = "D"
    } else {
        letter = "F"
    }
    return `you get ${letter} grade (${precentage})`
}

console.log(gradeCalc(20,20))