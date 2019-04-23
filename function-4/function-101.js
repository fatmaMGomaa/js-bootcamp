const fahToCal = function (fahern) {
    const calsius = (fahern - 32) * 5 / 9
    return calsius
}
console.log(fahToCal(32))
console.log(fahToCal(68))