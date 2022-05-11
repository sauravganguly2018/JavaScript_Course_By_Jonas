'use strict';
/*
function calcAge(birthYear){
    const age=2022-birthYear;
    
    function printAge(){
        let output=`${firstName} You are ${age},born in ${birthYear}`;
        console.log(output);

        if(birthYear>=1981 && birthYear<=1996){
            var millenial=true;
            // Creating a new variable with same name as outer scope's variable
            const firstName='Kundan';

            // Reassigning outer scope's variable
            output='NEW OUTPUT!';

            const str=`Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a,b){
                return a+b;
            }
        }
        // console.log(str);
        console.log(millenial);
        // console.log(add(3,4));
        console.log(output);
    }
    printAge();

    return age;
}

const firstName='Saurav';
calcAge(1985);
// console.log(age);
// printAge();



// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me='Saurav';
let job='teacher';
const year=1991;

// Functions
console.log(addDecl(2,3));
// console.log(addExpr(2,3));
console.log(addArrow);
// console.log(addArrow(2,3));

function addDecl(a,b){
    return a+b;
}

const addExpr=function (a,b) {
    return a+b;
};

var addArrow = (a,b) => a+b;

// Example
console.log(undefined)
if(!numProducts) deleteShoppingCart();

var numProducts=10;

function deleteShoppingCart(){
    console.log('All products deleted!');
}

var x=1;
let y=2;
const z=3;

console.log(x===window.x);
console.log(y===window.y);
console.log(z===window.z);


console.log(this);

const calcAge=function(birthYear){
    console.log(2022-birthYear);
    console.log(this);
}
calcAge(2003);

const calcAgeArrow=birthYear=>{
    console.log(2022-birthYear);
    console.log(this);
}
calcAgeArrow(2003);

const jonas ={
    year:1991,
    calcAge:function(){
        console.log(this);
        console.log(2022-this.year);
    }
}

jonas.calcAge();

const kundan={
    year:2002,
};

kundan.calcAge=jonas.calcAge;
kundan.calcAge();

const f=jonas.calcAge;
f();


// var firstName='kundan';

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calAge: function(){
        console.log(this);
        console.log(2022-this.year);

        // Solution 1
        // const self=this; // self or that
        // const isMillenial=function(){
        //     console.log(self);
        //     console.log(self.year>=2005 && self.year<=2014);
        //     // console.log(this.year>=2005 && this.year<=2014);
        // };

        // Solution 2
        const isMillenial=()=>{
            console.log(this);
            console.log(this.year>=2005 && this.year<=2014);
        };
        isMillenial();
    },

    greet: ()=>{
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },
};

jonas.greet();
jonas.calAge();

// arguments keyword
const addExpr=function(a,b){
    console.log(arguments);
    return a+b;
};
addExpr(2,5);
addExpr(2,5,7,4);

var addArrow=(a,b)=> {
    console.log(arguments)
    return a+b;
}

addArrow(2,5,8);


let age=30;
let oldAge=age;
age=31;
console.log(age);
console.log(oldAge);

const me={
    name:'Jonas',
    age:30,
};

const friend=me;
friend.age=27;
console.log('Friend:',friend);
console.log('Me',me);

*/

// Primitive Type
let lastName='Williams';
let oldLastName=lastName;
lastName='Davis';
console.log(lastName,oldLastName);

// Reference Type
const jessica={
    firstName:'Jessica',
    lastName:'William',
    age:27,
};

let marriedJessica=jessica;
marriedJessica.lastName='Davis';
console.log('Before marriage: ',jessica);
console.log('After marriage: ',marriedJessica);
// marriedJessica={};

// Copying objects
const jessica2={
    firstName:'Jessica',
    lastName:'William',
    age:27,
    family:['Alice','Bob']
};

const jessicaCopy=Object.assign({},jessica2);
jessicaCopy.lastName='Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage: ',jessica2);
console.log('After marriage: ',jessicaCopy);
