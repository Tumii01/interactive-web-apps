const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

const primaryValid = /^\d+$/.test(primaryPhone); // regular expression is looking for strings that consist of one or more digits.
const secondaryValid = /^\d+$/.test(secondaryPhone);


console.log('Primary phone is valid numerical string:', primaryValid) 
console.log('Secondary phone is valid numerical string:', secondaryValid )

