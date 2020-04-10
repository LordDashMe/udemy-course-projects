// Lecture:
//   Object with Methods.
//   Using "this" keyword you can get the parent object reference properties of the metod.

let restaurant = {
    name: 'Burger King',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft;
    }
};

console.log(restaurant.checkAvailability(4));

// Challenge
// Add Seat Party
// Remove Seat Party

let restaurantChallenge = function () {

    let restaurant = {
        name: 'Burger King',
        guestCapacity: 75,
        guestCount: 0,
        checkAvailability: function (partySize) {
            let seatsLeft = this.guestCapacity - this.guestCount;
            return partySize <= seatsLeft;
        },
        seatParty: function (partySize) {
            this.guestCount = this.guestCount + partySize;
        },
        removeParty: function (partySize) {
            this.guestCount = this.guestCount - partySize;
        }
    };

    restaurant.seatParty(72);
    console.log(restaurant.checkAvailability(4)); // false
    restaurant.removeParty(5);
    console.log(restaurant.checkAvailability(4)); // true
};

restaurantChallenge();
