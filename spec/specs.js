describe('pizza', function() {
  it("will create a unique pizza", function() {
    var newPizza = new Pizza(["garlic", "spinach"], "small", 2);
    expect(newPizza.toppings).to.eql(["garlic", "spinach"]);
    expect(newPizza.proportion).to.equal("small");
    expect(newPizza.quantity).to.equal(2);
  });

  it("will determine the cost based on size of pizza", function() {
    var newPizza = new Pizza("garlic", "large", 2);
    expect(newPizza.initialCost()).to.equal(24);
  });

  it("will add toppings to the pizza", function() {
    var newPizza = new Pizza(["garlic", "spinach"], "small", 2);
    newPizza.addToppings("olives");
    expect(newPizza.toppings[2]).to.eql("olives");
    expect(newPizza.initialCost()).to.equal(17);
  });

  // it("will add cost of toppings to pizza", function() {
  //   var newPizza = new Pizza(["garlic"], "small", 2);
  //   newPizza.addToppings("olives");
  //   expect(newPizza.toppingsCost().to.equal(2);
  // });

//   it('will determine the final cost for all pizzas ordered', function() {
//     var newPizza = new Pizza(["garlic", "spinach"], "small", 2);
//     expect(newPizza.finalCost()).to.equal(16);
//   });
});
