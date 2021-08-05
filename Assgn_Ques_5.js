// What will be the output for the above code?

var arr = [2,56,78,34,65];
var new_arr = arr.map(function(num){
    return num/2;
});
print(new_arr);

// Output:-
//print(new_arr);
//^

//ReferenceError: print is not defined