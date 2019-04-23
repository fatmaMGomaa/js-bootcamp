const restaurant={
    name: "folo",
    geustCapacity: 75,
    geustCount:0,
    checkAvability: function (num) {
        let avalibale=this.geustCapacity-this.geustCount
        return num<=avalibale
    },
    seatParty: function (num) {
        if(this.checkAvability(num)){
            this.geustCount += num
        }
    },
    removeParty: function (num) {
        this.geustCount-=num
    }
}
console.log(restaurant.checkAvability(5))
restaurant.seatParty(74)
restaurant.removeParty(5)
restaurant.seatParty(10)
console.log(restaurant)
