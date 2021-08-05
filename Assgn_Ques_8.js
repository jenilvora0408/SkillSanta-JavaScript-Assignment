// How to copy values from one object to another in above mentioned example, merge & 
// print them?

const name = {
    firstName: 'Philip',
    lastName: 'Fry'
};
const details = {
    job: "Delivery boy",
    employer: "Planet Express" 
};

const character = Object.assign(name,details);
console.log(character);