var totalCost = 0;
var numEntries = 0;
var averagePrice = 0;
function avgPrice(){

  items.forEach(function(item,indx,array){
    //cool stuff here
    totalCost += item.price;
    numEntries ++;
  });
  averagePrice = totalCost / numEntries;
  console.log(averagePrice);
}
avgPrice();

var formattedMap;
var printObject= {};
function arrayItems(){
  var filteredEtsy = items.filter(function(item){
    return item.price >= 14 && item.price <= 18;
  });
  formattedMap = filteredEtsy.map(function(item){
    return{
      title : item.title,
      price: item.price
    }
  })
  printObject = _.pluck(formattedMap,'title');
  console.log(printObject);
  console.log(formattedMap);
}
arrayItems();
var name, price;
function displayFilter(){
  var filtered = items.filter(function(item){
    return item.currency_code == "GBP";
  });
  name = _.pluck(filtered,"title");
  price = _.pluck(filtered, "price");
}
displayFilter();
var array = [];
function filterQuestion(){
  for (var i = 0; i < items.length; i++) {
      var arrayMaterials = items[i].materials;
    if (_.contains(arrayMaterials,"wood")) {

      array.push(items[i].title);
    }
  }
  console.log(array);
}
filterQuestion();
var arrayEight= [];
function filterEight(){
  for (var i = 0; i < items.length; i++) {
      var arrayMaterials = items[i].materials;
    if (arrayMaterials.length  >= 8) {
      arrayEight.push(items[i].title);
    }
  }
  console.log(arrayEight);
}
filterEight();
var numMadeBySeller = 0;
function madeBySeller(){
  var filterSeller = items.filter(function(item){
      return item.who_made == "i_did";
  })
  numMadeBySeller = filterSeller.length;
  console.log(numMadeBySeller);
}
madeBySeller();
