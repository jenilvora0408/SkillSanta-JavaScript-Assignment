// Create a nested array Object  called operatingSystem and add below key and values
// Name - Ubuntu, Version - 18.4, License - open source

const operatingSystem = {
    name: 'Ubuntu',
    version: 18.4,
    license: 'Open Source'
};
const entries = Object.entries(operatingSystem);
console.log(entries)