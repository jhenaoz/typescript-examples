let street: string = 'Avenue Road';
// Error: Cannot convert 'string' to 'number'
// var bedrooms: number = <number> name;
// Works
const bedrooms: number = <number> <any> street;
console.log(name);
