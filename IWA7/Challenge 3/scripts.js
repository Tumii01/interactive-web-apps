const leoName = 'Leo';
const leoSurname = 'Musvaire';
const leoBalance = -9394;

const sarahName = 'Sarah';
const sarahSurname = 'Kleinhans';
const sarahBalance = -4582.21;

const divider = '----------------------------------';

// Only change below this line

const leo = `${leoName} ${leoSurname}  `+ ` (Owed: R ${(-leoBalance).toFixed(2)})`;
const sarah = `${sarahName} ${sarahSurname}   ` + `(Owed: R ${(-sarahBalance).toFixed(2)})`;
const owed = (-leoBalance - sarahBalance).toLocaleString( { style: 'currency' });
const total = `  Total amount owed: R ${owed}  `;

const result = `\n${leo}\n${sarah}\n\n${divider}\n${total}\n${divider}`;

console.log(result);
