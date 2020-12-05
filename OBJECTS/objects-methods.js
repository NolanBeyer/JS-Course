var restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize){
        var seatsLeft = this.guestCapacity - this.guestCount
         partySize <= seatsLeft 
         return `There are ${seatsLeft} seats Left in our restaurant.`
    },
    seatParty: function(partySize){
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function(partySize){
        this.guestCount = this.guestCount - partySize
    }
}

restaurant.seatParty(30)
console.log(restaurant.checkAvailability(30))
restaurant.seatParty(45)
console.log(restaurant.checkAvailability(5))
restaurant.removeParty(75)
console.log(restaurant.checkAvailability(10))









