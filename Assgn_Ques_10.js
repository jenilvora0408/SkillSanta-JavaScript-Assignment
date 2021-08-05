// Consider below as an example of constructor function where we want name & level to be
// referred to a function itself, is below example correct or not? Please explain.

function Hero(name, level){
    name = name;
    level = level;
}

// Given example is incorrect. Use of 'this' keyword is mandatory. this.name = name &
// this.level = level will refer to the parameters of a function.