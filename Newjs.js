//object in javascript
/*var student ={
    name:"kunle",
    fname:"john",
    age:21,
    address:"jos",
    fullname:function(){
        return this.fname +" "+ this.name
    }
}
//console.log(`the student name is ${student.name} and the age is ${student.age}`)
console.log("The student name is " +student.name + " and his age is " + student.age )
//how to use the value in the object
let fullname = student.fullname()
console.log(fullname)
//to get evrythin in student 
//console.log(student)
//to print only the value of the keys
console.log(Object.values(student))*/

/*var student ={
    name: {
        surname: 'Arowosegbe',
        firstname: 'Olakunle'

    },
    address: {
        no: 22,
        street:"tudun wada",
        location:"london"

    },
    age:11,
}
console.log(student.name.surname, student.name.firstname) //for values in the object
student.name.surname ="john"
console.log(student.name)*/
var students = [
    {
        id:1,
        name:"kunle",
        age:23
    },

    {
        id:2,
        name:"mark",
        age:22
    },

    {
        id:3,
        name:"john",
        age: 24
    }

]
//dont know index
console.log(students.filter((student) => student.id==1 ))
 for (let s of students) {
     console.log(s.name)
     
 }
 //or
 for(let i =0; i<students.length; i++){
     console.log(students[i].name)
 }