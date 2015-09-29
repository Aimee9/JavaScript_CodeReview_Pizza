// var toppings = ["pineapples", "artichokes", "olives", "garlic", "carmalized onions", "basil", "spinach", "fresh tomato", "sundried tomato"];
var toppings = [];
function Pizza(toppings, proportion, quantity) {
  this.toppings = toppings;
  this.proportion = proportion;
  this.quantity = quantity;
};

Pizza.prototype.totalCost = function() {

  var initialCost;
  if (this.proportion === "small") {
    initialCost = 8;
  } else if (this.proportion === "medium") {
    initialCost = 10;
  } else {
    initialCost = 12;
  } return initialCost * this.quantity;
};

Pizza.prototype.addToppings = function(toppings, totalCost) {
  this.toppings.push(toppings);
};

//
$(document).ready(function() {

  $('input[type=checkbox]').click(function()) {
    var total = 0;
    $('input:checked').each(function (index, item) {
      total += parseFloat(item.value);
    }) return total;
  }
  $("button#actionSubmit").click(function() {
    var everything = total + this.totalCost()
    everything.text(".number");
    $("#results").show();
  });
});
