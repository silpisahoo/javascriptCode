var sellingprice = 199
var listingprice = 799
var discountpercentage = ((listingprice - sellingprice) / listingprice) * 100
console.log("Discount perstang is:",discountpercentage);
displayDiscountperstang = Math.round(discountpercentage);
console.log(displayDiscountperstang + "% off");
var result = listingprice > sellingprice
console.log(typeof result);
