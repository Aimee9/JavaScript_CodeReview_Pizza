describe('pizza', function() {
  it("will determine the type of cheese on the pizza", function() {
    var newPizza = new Pizza(["garlic", "spinach"], "small");
    expect(newPizza.toppings).to.eql(["garlic", "spinach"]);
    expect(newPizza.proportion).to.equal("small");
  });

  it("will determine the cost based on size of pizza", function() {
    var newPizza = new Pizza(["garlic", "spinach"], "small");
    expect(newPizza.initialCost()).to.equal(8);
  });
});
