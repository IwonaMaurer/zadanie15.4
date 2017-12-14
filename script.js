var x = "Hello";
var y = "World";
console.log(x + " " + y);
console.log(`${x} ${y}`);



/*
var multiply = function(a, b) {
    return a * b;
}
console.log(multiply(3,5));

*/

//zadanie2

 var multiply = (a, b) => (a, b) ?  a * b :  a * 1;

 //zadanie3
 
 function avg(...args) {
    var sum = 0;
    for (var i = 0, j = args.length; i < j; i++) {
        sum += args[i];
    }
    return sum / args.length;
};
avg(2,3,4);

//zadanie4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(avg(...grades));

// zadanie5
var arr =  [1, 4, 'Iwona', false, 'Nowak'];
var [, , c, , e,] = arr;
console.log(c);
console.log(e);

 
 

