
function Pizza(proportion, quantity) {
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

function resetModalFields() {
  $('input#quantity').val('');
  $(':checkbox:not(:checked)').attr('checked', 'checked');
  $(':checkbox:checked').removeAttr('checked');
  $('select#actionDropdown option:first-child').attr('selected', 'selected');
}


//
$(document).ready(function() {
  // var size= $('select#actionDropdown').val();
  // var howMany = $('#quantity');
  // var myPizza = new Pizza(size, howMany);

  $("button#actionSubmit").click(function() {
    debugger;
    var size= $('select#actionDropdown').val();
    var howMany = parseInt($('input#quantity').val());
    var myPizza = new Pizza(size, howMany);
    var toppings = $('input:checked').length;
    var everything = myPizza.totalCost() + toppings;
    $('.number').text(everything);
    $('div#myModal').modal('hide');

    $("#result").show();
    resetModalFields();
  });
});
