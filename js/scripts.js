var toppings = ["pineapples", "artichockes", "olives", "garlic", "carmalized onions", "basil", "spinach", "fresh tomato", "sundried tomato"];

function Pizza(toppings, proportion) {
  this.toppings = toppings;
  this.proportion = proportion;
};

Pizza.prototype.initialCost = function(proportion) {
  if (proportion = "small") {
    return 8;
  } else if (proportion = "medium") {
    return 10;
  } else {
    return 12;
  };
};
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
