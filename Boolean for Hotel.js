let isIdlyAvaiable = true;
let isSambarAvailable = true;
let isDhosaAvailable = true;
let isChuttnyAvailable = false;
if ((isIdlyAvaiable == true) && (isSambarAvailable == true)) {
    console.log("Buy Idly & Sambar");
}
else if ((isDhosaAvailable == true) && (isChuttnyAvailable == true)) {
    console.log("Buy Dhosa & Chuttny");
}
else {
    console.log("Get back without purchasing ");
}