class VendingMachine {
  constructor() {
    this.credit = 0;
    this.stock = {
      A: {},
      B: {},
      C: {},
    };
  }
  addStock(item, location) {
    this.stock[location] = item;
  }
  addCredit(money){
    this.credit += money
  }
  purchaseItem(item){
    if(this.credit >= this.stock[item].price){
        this.stock[item].quantity --
        this.credit = this.credit - this.stock[item].price
    return this.stock[item].name
} else {
    return "Insufficient credit!" 
}
}
}

module.exports = VendingMachine;
