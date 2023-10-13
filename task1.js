const account = {
  owner: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["order-1", "order-2", "order-3"],
  changeDiscount(value) {
    this.discount = value; // Додано this
  },
  showOrders() {
    return this.orders; // Додано this
  },
  addOrder(cost, order) {
    this.balance -= cost; // Додано this
    this.orders.push(order); // Додано this
  },
};

account.changeDiscount(0.15);
console.log(account.discount); // 0.15

console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

account.addOrder(5000, "order-4");
console.log(account.balance); // 19000
console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']
