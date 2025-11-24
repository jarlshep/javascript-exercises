const removeFromArray = function(array, ...values) {
    
    //OK for test1 only
    /* let newArray = [];
    for (let i = 0; i <= values.length - 1; i++) {
        newArray = array.filter(num => num !== values[i]);
    }
    return newArray; */


    // this works for the rest of the tests - 
    // see function parameters "array" (brings in the one array in the call) 
    // and "...values" (a "rest" parameter, which brings all the rest of the values in the call
    //  that aren't listed explicitly in as another array with the name "values") 
    let newArray = [];
    return newArray = array.filter(val => !values.includes(val));

};

// const removeFromArray = function(array, ...args) {
//   return array.filter(val => !args.includes(val))
// }
// Do not edit below this line
module.exports = removeFromArray;
