export default class Player {
    getName() {
        return this.name;
    }

    setName(initName) {
        this.name = initName;
    }

    getBalance() {
        return this.balance;
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

}