console.log("Your code goes in this document.");

_.times(100, function() {
  console.log("hi");
});



////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// replace innerHTML with the following parsed data for answers 1 - 6 //
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
// #answer1
// Using .map
var priceArr = items.map(function(items){
  return items.price
})

// Using .reduce to condense all the separate prices into one total price
var sum = priceArr.reduce(function(acc, curr) {
  return acc + curr;
  })

// solving to find the average price of items
var priceAvg = sum / priceArr.length

// use document.querySelector().innerHTML will replace the existing HTML associated with #answer1 with new HTML
document.querySelector("#answer1").innerHTML=" " + priceAvg


///////////////////////////////////////////////////////////////////////
// #answer2
// Using .filter(function(element, index, array)) to extract only the items with prices between 14 and 18.  In this case we do not need the index or the array.
var priceRangeArr = items.filter(function(item) {
  return item.price >= 14 && item.price <= 18;
})

// Using .map
var titlesOfPriceRangeArr = priceRangeArr.map(function(item){
  return " " + item.title;
});

document.querySelector("#answer2").innerHTML=titlesOfPriceRangeArr



////////////////////////////////////////////////////////////////////
// #answer3
// Using both .filter and .map to define a variable
var GBPArr = items.filter(function(item) {
  return item.currency_code === "GBP"
}).map(function(item) {
  return " " + item.title + ": $" + item.price;
});
document.querySelector("#answer3").innerHTML=GBPArr



//////////////////////////////////////////////////////////////////////
// #answer4
var woodArr = items.filter(function(item) {
  return _.contains(item.materials, "wood")
}).map(function(item) {
  return " " + item.title;
});
document.querySelector("#answer4").innerHTML=woodArr


//////////////////////////////////////////////////////////////////////
// #answer5
var multiMatArr = items.filter(function(item) {
  return item.materials.length >= 8
});
var multiMatDisplay = multiMatArr.map(function(item) {
  return " " + item.title + ": " + item.materials.length + "( " + item.materials + ", " + ")";
});
document.querySelector("#answer5").innerHTML=multiMatDisplay


//////////////////////////////////////////////////////////////////////
// #answer6
var madeByMe = items.filter(function(item) {
  return _.contains(item, "i_did")
}).length
document.querySelector("#answer6").innerHTML=" " + madeByMe
