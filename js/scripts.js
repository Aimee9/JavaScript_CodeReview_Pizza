// var toppings = ["pineapples", "artichokes", "olives", "garlic", "carmalized onions", "basil", "spinach", "fresh tomato", "sundried tomato"];
var toppings = [];
function Pizza(toppings, proportion, quantity) {
  this.toppings = toppings;
  this.proportion = proportion;
  this.quantity = quantity;
};

Pizza.prototype.initialCost = function(proportion) {
  var initialCost;
  if (proportion = "small") {
    initialCost = 8 * this.quantity;
  } else if (proportion = "medium") {
    initialCost = 10 * this.quantity;
  } else {
    initialCost = 12 * this.quantity;
  } return initialCost;
};

Pizza.prototype.addToppings = function(toppings) {
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
// $(document).ready(function() {
//   $("form#factorial").submit(function(event) {
//     var number= parseInt($("input#number").val());
//     var result = factorial(number);
//
//       $(".number").text(number)
//       $(".final").text(result)
//        $("#result").show()
//
//
//     event.preventDefault();
//   });
// });
