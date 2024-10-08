let productPrice =200;
let productGstPercent = 10;
let productDiscount =5;
 if((typeof(productPrice )=="number") && (typeof( productGstPercent)=="number") &&  (typeof( productDiscount )=="number"))
 {
let gstCal =200+(productPrice * productGstPercent/100);
console.log( gstCal);
let discountAmount= productPrice*5/100;
console.log(  discountAmount);
let finalprice2 =(gstCal - discountAmount) ;
console.log(finalprice2 );
}
 else{
    console.log("enter number only")
 }

//  +((productPrice)*(productDiscount/100)));