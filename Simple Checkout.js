
let itemPrice = +prompt('Please Enter Item Price');
let quantity = +prompt('Please Enter Quantity');

let subtotal = itemPrice * quantity; 

 
let shipping = (subtotal >= 1000) ? 0 : 60;

 
let couponCode = prompt('Enter Coupon Code (e.g., SAVE10, SAVE20, or none)');
let discountPercent = 0;

if (couponCode === 'SAVE10') {
    discountPercent = 10; 
} else if (couponCode === 'SAVE20') {
    discountPercent = 20;  
} else {
    discountPercent = 0; 
}

let discountValue = (subtotal * discountPercent) / 100;
let priceAfterDiscount = subtotal - discountValue;


let priceBeforeVAT = priceAfterDiscount + shipping;


let vatValue = Math.floor((14 / 100) * priceBeforeVAT);
let finalPrice = priceBeforeVAT + vatValue; 

let resultBox = document.getElementById('result');
resultBox.innerHTML = `
    <div class="result-item">الإجمالي الفرعي: ${subtotal} EGP</div>
    <div class="result-item">كود الكوبون: ${couponCode} (${discountPercent}%)</div>
    <div class="result-item">قيمة الخصم: ${discountValue} EGP</div>
    <div class="result-item">تكلفة الشحن: ${shipping} EGP</div>
    <div class="result-item">ضريبة القيمة المضافة (14%): ${vatValue} EGP</div>
    <div class="result-item final-price">السعر النهائي: ${finalPrice} EGP</div>
`;
console.log(`Subtotal is : ${subtotal}`);
console.log(`Coupon Code : ${couponCode} (${discountPercent}%)`);
console.log(`Discount Value : ${discountValue}`);
console.log(`Shipping : ${shipping}`);
console.log(`VAT Value 14% : ${vatValue}`);
console.log(`Final Price is : ${finalPrice}`);
