/* function myfun (){      //normal or named simple function
    let a = 4,b = 6
    let c = a + b
    return c
    let m = c + b
    return m

}

console.log(myfun())


// function expression
let fun = function (){


}

// Arrow function 
 
let fun1 = () => {


} 

fun1()
 */
// Anonymous Function  there is no name for perticular function
/* function() {  


} */  //------ syntax to anonymous function
 //  to use anonymous function we need to assine to a perticular variable that looks and feels like a function expression




// IIFE function

/* (function() {
    console.log('this is IIFe function')

})()
//console.log(sam)

let ram = function() {
        console.log("this is fun express")
        return 10
}
let sam = ram()
console.log(sam) */

/* function mysum (c,b,a){
    console.log(c,b,a)
}
mysum(a=2,b=4,c=5)
 */  

function myrun ({a,b,c}) {
    console.log(a,b,c)
    
}
myrun({c:3,b:2,a:1})