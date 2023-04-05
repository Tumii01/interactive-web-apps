const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2100011'

const divider = '----------------------------------';

// Only change below this line

const leo = `${leoName} ${leoSurname.trim()}  `+ ` (Owed: R ${(-leoBalance).toFixed(2)})`;
const sarah = `${sarahName.trim()} ${sarahSurname}   ` + `(Owed: R ${(-sarahBalance).toFixed(2)})`;
const owed = (-leoBalance - sarahBalance).toLocaleString( { style: 'currency' });
const total = `  Total amount owed: R ${owed}  `;

const result = `\n${leo}\n${sarah}\n\n${divider}\n${total}\n${divider}`;

console.log(result);
