// var toppings = ["pineapples", "artichokes", "olives", "garlic", "carmalized onions", "basil", "spinach", "fresh tomato", "sundried tomato"];
var toppings = [];
function Pizza(toppings, proportion, quantity) {
  this.toppings = toppings;
  this.proportion = proportion;
  this.quantity = quantity;
};

Pizza.prototype.initialCost = function() {

  var initialCost;
  if (this.proportion === "small") {
    initialCost = 8 * this.quantity;
  } else if (this.proportion === "medium") {
    initialCost = 10 * this.quantity;
  } else {
    initialCost = 12 * this.quantity;
  } return initialCost;
};

Pizza.prototype.addToppings = function(toppings, initialCost) {
  this.toppings.push(toppings);
  this.initialCost + 1;
};

// Pizza.prototype.toppingsCost = function(toppings) {
//   var cost = 0;
//   for(toppings in Pizza) {
//     cost += 1;
//   } return cost;
// };

// Pizza.prototype.finalCost = function() {
//   var finalCost = this.initialCost * this.quantity;
//   return finalCost;
// }
//   this.forEach(function(toppings) {
//     extraCost = this.initialCost + .50;
//   }) return extraCost;
// };
//
$(document).ready(function() {
  $("button#actionSubmit").click(function() {



    event.preventDefault();
  });
});
