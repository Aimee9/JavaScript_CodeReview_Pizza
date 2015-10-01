describe('pizza', function() {
  it("will create a unique pizza", function() {
    var newPizza = new Pizza("small", 2);
    expect(newPizza.proportion).to.equal("small");
    expect(newPizza.quantity).to.equal(2);
  });

  it("will determine the cost based on size of pizza", function() {
    var newPizza = new Pizza("large", 2);
    expect(newPizza.totalCost()).to.equal(24);
  });

});
