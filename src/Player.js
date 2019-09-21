export default class Player {
    constructor() {
        this.balance = 1500;
        this.currentPosition = 0;
        this.properties = [];
        this.isTurn = false;
        this.isInJail = false;
        this.getOutOfJailAmount = 0;
        this.houseCount = 0;
        this.hotelCount = 0;
        this.hasRolled = false;
    }
    getName() {
        return this.name;
    }

    setName(initName) {
        this.name = initName;
    }

    getBalance() {
        return this.balance;
    }

    setBalance(amount) {
        this.balance = amount;
    }

    addToBalance(amount) {
        this.balance += amount;
    }

    setPieceName(pieceName) {
        this.pieceName = pieceName;
    }

    getPieceName() {
        return this.pieceName;
    }

    getCurrentPosition() {
        return this.currentPosition;
    }

    hasRolled() {
        return this.hasRolled;
    }

    setRolled(boolean) {
        this.hasRolled = boolean;
    }

    isTurn() {
        return this.isTurn;
    }

    isInJail() {
        return this.isInJail;
    }

    getGetOutOfJailAmount() {
        return this.getOutOfJailAmount;
    }

    setGetOutOfJailAmount(amount) {
        this.getOutOfJailAmount = amount;
    }

    addToHouseCount(amount) {
        this.houseCount += amount;
    }

    getHouseCount() {
        return this.houseCount;
    }

    addToHotelCount(amount) {
        this.hotelCount += amount;
    }

    getHotelCount() {
        return this.hotelCount;
    }

}