// ...args uses spread syntax for multiple optional arguments
const removeFromArray = function(array, ...args) {
    /* 
    (explaination to self for learning purposes)
     - .filter() takes in a callbackFn which is executed for
        each element in the array and element is removed if
        callbackFn returns a falsy value 
     - note use of arrow function
     - if not in args, keep in array!
    */
    return array.filter((element) => !args.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
