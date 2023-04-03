const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0;
const customers = 1;
let country = 'RSA';
let currency = 'R';
let shipping = null;

if (country === 'RSA') {
  shipping = 400;
}
else if (country === 'NAM') {
  currency = '$'
  shipping = 600;
} else {
  currency = '$';
  shipping = 800;
}

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;

if (shoes + batteries + toys + shirts + batteries + pens >= 1000 && customers === 1) {
  shipping = 0;
}
else if (customers !== 1) {
  console.log(FREE_WARNING);
}
if (country === 'NK') {
  console.log(BANNED_WARNING);
} else {
  console.log('price', currency, shoes + batteries + pens + shirts + toys + shipping);
}
