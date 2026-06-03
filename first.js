/* let num=prompt("Enter student marks out of 100:");
if(num>=50&&num<60){
    console.log("student pass with grade D",);
}
else if(num>=60&&num<70){
    console.log("student pass with grade C");
}
else if(num>=70&&num<90){
    console.log("student pass with grade B");
}
else if(num>=90&&num<=100){
    console.log("studnet pass with grade A")
}
else{
    console.log("student is Failed!!");
}
 */

let sum=0
let num=prompt("entere a number");
for(let i=num; i>=1;i--){
    
    sum=sum+Number(i);

}
console.log("sum of",num,"number is:",sum);