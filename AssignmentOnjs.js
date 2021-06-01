/*let num1 = 20;
let num2 = 10;
if(num1 >= num2){
    console.log("number1 is greater")
} else{
    console.log("number2 is lesser")
}

var age1 = 21;
var age2 = 13;
if(age1 == 18 || age1 > 18 ){
    console.log("CONGRATULATION YOUR ARE ADMITTED")
}else if(age2 == 18 && age2 <13){
    console.log("SORRY YOU ARE NOT ADMITTED")
}else{
    console.log("PLEASE STAY AT HOME")0
}*/
//console.log(5 & 1);
//console.log(5 | 1);
/*const array =["kunle", 2.6, 2];
array.push("matt");
array.pop()
*/
//const numarray =array.slice(l,)

/*const ages = [25, 30, 45, 60, 5]
const newages =  ages.map((age, index)=> {
    if(index == 1){
        return age/2
    }else {
        return age
    }
})
console.log(newages)*/

const ages = [25, 30, 45, 60, 75]
const agesMulti = ages.map((multi)=>{return multi* 2})
console.log(agesMulti)
const agesTotal = ages.reduce((prev, next) => {
    return prev * next})
console.log(agesTotal)




