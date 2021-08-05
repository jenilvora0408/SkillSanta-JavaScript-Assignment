// Consider the two functions below. Will they both return the same thing? Why or why not?

function foo1()
{
    return{
        bar: "Hello"
    };
}
function foo2()
{
    return
    {
        bar: "Hello"
    };
}

console.log("foo1 returns: ");
console.log(foo1());    // Output -> Object {bar: "Hello"}

console.log("foo2 returns: ");
console.log(foo2());    // Output -> undefined

// No, both of them won't return the same thing. The reason for this has to do with the fact that
// semicolons are technically optional in JavaScript. As a result, when the line containing the
// return statement is encountered in foo2(), a semicolon is automatically inserted immediately
// after the return statement.