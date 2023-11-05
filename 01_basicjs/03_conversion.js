// let num  = "34";
// console.log(typeof num);
// console.log(typeof Number(num ));

// let str = "34rrkjdf"
// console.log(typeof Number(str)) // Number => NaN 
// console.log(Number(str))

// let isOk  = true
// console.log(Boolean(isOk))


/**
 * fibbonacci series
 * 0 1 1 2 3 5 8 13 21  
 */


let a = 0
let b  = 1 
let c = 0 

// console.log(a +" "+ b );


let alist = [a, b ];

for (let i = 0 ; i < 10 ; i++ ){
    c = a+ b ;
    // console.log(c );
    alist.push(c)
a = b 
b = c 

}

// console.log(alist);
console.log(alist.toString());





