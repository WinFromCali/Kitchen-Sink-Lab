
var firstName = 'Erwin'; //My name
const usStates = 50; //number of states in the US

var sum = add(5, 4);


function add(num1, num2){ 
    return num1 + num2;
};

function sayHello(){
    alert("Hello Word!")
};
sayHello()

var person = [
    {name: 'Charles', age: 21},
    {name: 'Abby', age: 27},
    {name: 'James', age: 18},
    {name: 'John', age: 17},
];


function checkAge(name,age){
    if (age < 21) {
    alert("Sorry " + name + ", you aren't old enough to view this page");
    }
};

checkAge('Charles', 21);
checkAge('Abby', 27)
checkAge('James', 18)
checkAge('John', 17)

var vegetables = ['Asparagus', 'Beets', 'Cucumber', 'Pumpkin']  
for (let i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i])
}

var pet ={name: "Summer", breed: "Shih Tzu-poodle"}
console.log(pet)

var fridens = [
    {name: 'Tim', age: 22},
    {name: 'Antony', age: 28},
    {name: 'Leanna', age: 16},
    {name: 'Nick', age: 18},
];

checkAge('Tim', 22);
checkAge('Antony', 28)
checkAge('Leanna', 16)
checkAge('Nick', 18)

function getLength (anyword) {
    return anyword.length;  
}
let isEven = getLength('Hello World');

if (isEven % 2 ==0) {
    console.log('The world is nice and even!')
} else {
    console.log('The world is an odd place!')
};