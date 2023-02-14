const iphone = document.getElementById('Iphone-pic');
const iphonePurple = document.getElementById('color-purple');
const iphoneGold = document.getElementById('color-gold');
const iphoneWhite = document.getElementById('color-white');
const versionOf128Gb = document.getElementById('128GB');
const versionOf256Gb = document.getElementById('256GB');
const versionOf512Gb = document.getElementById('512GB');
const priceOfPhone = document.getElementById('Price');
const taxOfPhone = document.getElementById('Tax');
const quantityOfPhone = document.getElementById('quantity');
const totalPriceOfPhone = document.getElementById('totalPrice');


// ? Here color Change  By Clicking color palette
iphoneWhite.addEventListener('click', function () {
    iphone.src = './img/iphone-white.png'

});
iphonePurple.addEventListener('click', function () {
    iphone.src = './img/iphone-black.png'

});
iphoneGold.addEventListener('click', function () {
    iphone.src = './img/iphone.gold.png'

});
// ? Here color Change  By Clicking color palette
//*======================================================
// ? Here  By clicking add price of various Rom 


versionOf128Gb.addEventListener('click', function () {
    versionOf128Gb.classList.add('active');
    versionOf256Gb.classList.remove('active');
    versionOf512Gb.classList.remove('active');
    priceOfPhone.innerText = 899;
    taxOfPhone.innerText = parseFloat(899 * .05).toFixed();
    let totalPrice = 899 + (899 * .05);
    let quantity = parseFloat(parseInt(quantityOfPhone.value)).toFixed(2);
    totalPriceOfPhone.innerText = parseFloat(totalPrice * quantity).toFixed();


});
versionOf256Gb.addEventListener('click', function () {
    versionOf256Gb.classList.add('active')
    versionOf512Gb.classList.remove('active');
    versionOf128Gb.classList.remove('active');
    priceOfPhone.innerText = 999;
    taxOfPhone.innerText = parseFloat(999 * .05).toFixed();
    let totalPrice = 999 + (999 * .05);
    let quantity = parseFloat(parseInt(quantityOfPhone.value)).toFixed(2);
    totalPriceOfPhone.innerText = parseFloat(totalPrice * quantity).toFixed();
});
versionOf512Gb.addEventListener('click', function () {
    versionOf512Gb.classList.toggle('active')
    versionOf256Gb.classList.remove('active');
    priceOfPhone.innerText = 1100;
    taxOfPhone.innerText = parseFloat(1100 * .05).toFixed();
    let totalPrice = 1100 + (1100 * .05);
    let quantity = parseFloat(parseInt(quantityOfPhone.value)).toFixed(2);
    totalPriceOfPhone.innerText = parseFloat(totalPrice * quantity).toFixed();
});

// ? Here  By clicking add price of various Rom 

