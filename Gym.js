
let months = +prompt('Please Enter Number of Months');

let discount = 0;
if (months >= 12) {
    discount = 0.15;
} else if (months >= 6) {
    discount = 0.10;
}

let monthlyPrice = 350;
let subtotal = months * monthlyPrice;
let discountValue = subtotal * discount;
let priceAfterDiscount = subtotal - discountValue;

let addPT = prompt('Do you want Personal Training? (yes/no)');
let ptPrice = (addPT === 'yes') ? 200 : 0;

let priceBeforeVAT = priceAfterDiscount + ptPrice;
let vatValue = Math.floor((14 / 100) * priceBeforeVAT);
let finalPrice = priceBeforeVAT + vatValue;

let resultBox = document.getElementById('result');
resultBox.innerHTML = `
    <div class="result-item">عدد الشهور: ${months}</div>
    <div class="result-item">السعر الفرعي: ${subtotal} EGP</div>
    <div class="result-item">قيمة الخصم: ${discountValue} EGP</div>
    <div class="result-item">التدريب الشخصي: ${ptPrice} EGP</div>
    <div class="result-item">ضريبة القيمة المضافة (14%): ${vatValue} EGP</div>
    <div class="result-item final-price">السعر النهائي: ${finalPrice} EGP</div>
`;
console.log(`Number of Months is : ${months}`);
console.log(`Subtotal is : ${subtotal}`);
console.log(`Discount Value : ${discountValue}`);
console.log(`Personal Training : ${ptPrice}`);
console.log(`VAT Value 14% : ${vatValue}`);
console.log(`Final Price is : ${finalPrice}`);
