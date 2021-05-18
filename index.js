var a;// deleration //global scope the can be access anywhere
var c;
var d;
d = 20;
a = 10;//assignment
console.log(a);// priting to console

var b = "this is what im learning"; //deleration and assignment
console.log(b);
function add(){
    var e = 20;
    var f = 60;
    console.log(a+d);
}


 c = 100;
 // variable in the function are local because the the can be used only the function
 function sub(){
   //  console.log(e - f);

 }
 add();
 sub();