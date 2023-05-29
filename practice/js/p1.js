let Myname = "Harshit"  //string
let age = 22           //numbers (int & float -> all same)
console.log(Myname + " : " + typeof Myname)
console.log(age + " : " + typeof age)

let studNames = ["harshit", 22, "vanky", true]
// let studNames = {
//     fName : "harshit",
//     myAge : 22,
//     num : 7355340264,
//     male : true
// }
console.log(studNames); 
studNames.push("Kiit")
console.log(studNames)
studNames.pop()
console.log(studNames)
studNames.pop()
console.log(studNames)
studNames[1] = "Rohan"
console.log(studNames);

//arr.splice(from index, how many elements to remove) -> removes element from arr
//arr.splice(from index, no. of elements to remove, elements to add(optional) @ that place)

studNames.splice(0, 2, 'Amity', 24, "Vanku", "Doggie")
console.log(studNames);

//--> Add any element anywhere in array
//if don't wanna delete anything just add elements in b/w somewhere.. just somewhere
//put 2nd parameter => 0
studNames.splice(1, 0, "One", "to", "thri")
console.log(studNames);

myprofile = {
    Myname : "Harshit",
    Age : 20,
    marks : 470,
    skills : ["HTML5", "CSS3", "JS", "C", "Java"]
}

delete myprofile.marks
console.log(myprofile);
console.log(myprofile.skills);
console.log(myprofile.skills[1])


//many people's data is an array
let employees = [
    {name : "Harshit", age : 22,  email: "harshit@gmail.com"},
    {name : "Anant", age : 23,  email: "anant@gmail.com"},
    {name : "amit", age : 24,  email: "amit@gmail.com"},
    {name : "vishal", age : 25,  email: "vishal@gmail.com"},
    {name : "sanjeev", age : 26,  email: "sanjeev@gmail.com"},
    {name : "sanchit", age : 27,  email: "sanchit@gmail.com"},
]
console.log(employees);

//function
function add(a,b){
    console.log(a+b);
    var prod = a*b
    return prod
}
a = add(5,6)
console.log(a);

//26may
//diff. b/w var, let
let number = 50
var largerNumber = 10
function print() {
  let square = number * number

  if (number < 60) {
    var largerNumber = 80
    let anotherLargerNumber = 100

    console.log(square)
  }

  console.log(largerNumber)
  //console.log(anotherLargerNumber)
}
console.log(harshit)  //declared by var -> can access but undefined value
console.log(harshit1) //declared by let -> cannot access
print()
console.log(number)
  console.log(largerNumber)
console.log(square)

var harshit = 77
let harshit1 = 77
// -- basic js practice overr

//-- now js liked with html 😍
//on p2



