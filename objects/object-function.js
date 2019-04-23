const fahToCal = function (fahern) {
    const calsius = (fahern - 32) * 5 / 9
    const kalvin = (fahern + 459.67) * 5 / 9
    return {
        fahern,
        calsius,
        kalvin
    }
}
console.log(fahToCal(32))
console.log(fahToCal(68))