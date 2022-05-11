'use strict';
/*
let hasDriversLicense=false;
const passTest=true;

if(passTest) hasDriversLicense=true;
if(hasDriversLicense) console.log("I can drive :D");

// const interface="audio";
// const private=545;

function logger(){
    console.log("My name is saurav ganguly");
}

// calling / invoking / running function
logger();
logger();
logger();

function fruitProcessor(apples,oranges){
    console.log(apples,oranges);
    const juice=`Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice=fruitProcessor(5,0);
console.log(appleJuice);
console.log(fruitProcessor(5,0));

const appleOrangeJuice=fruitProcessor(2,4);
console.log(appleOrangeJuice);

const num=Number('23');

// Function Delclaration
const age1=calcAge1(2003); // We can call function declaration before before you define it
function calcAge1(birthYear){
    return 2022-birthYear;
}

// Function Expression
const calcAge2=function(birthYear){
    return 2022-birthYear;
}
const age2=calcAge2(2003);
console.log(age1,age2);

// Arrow function
const calcAge3=birthYear=>2022-birthYear;
const age3=calcAge3(2003);
console.log(age3);

const yearsUntilRetirement=(birthYear,firstName)=>{
    const age=2022-birthYear;
    const retirement=65-age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2003,'saurav ganguly'));
console.log(yearsUntilRetirement(2001,'shreyan sarkar'));

function cutFruitPieces(fruit){
    return fruit*4;
}

function fruitProcessor(apples,oranges){
    const applePieces=cutFruitPieces(apples);
    const orangePieces=cutFruitPieces(oranges);
    const juice=`Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2,3));

const calcAge=function(birthYear){
    return 2037-birthYear;
}
const yearsUntilRetirement=function(birthYear,firstName){
    const age=calcAge(birthYear);
    const retirement=65-age;

    if(retirement>0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }else{
        console.log(`${firstName} has already retired`);
        return -1;
    }
    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991,'jonas'));
console.log(yearsUntilRetirement(1970,'Mike'));

// Coding Challenge #1

Back to the two gymnastics teams, the Dolphins and 
the koala! There is a new gymnastics discipline,
which works differently.
Each team competes 3 times, and then the average of
the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the 
average score of the other team. Otherwise, no team
wins!

1. Create an arrow function 'calcAverage' to 
calculate the average of 3 scores
2. Use the function to calculate the average for both
teams
3. Create a function 'checkWinner' that takes the 
average score of each team as parameters
('avgDolphins' and 'avgKoalas'), and then logs the 
winner to the console, together with the victory
points, according to the rule above. Example: "koalas
win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the
winner for both DATA and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas
score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas
score 23,34 and 27

HINT: To calculate average of 3 values, add them all
together and divide by 3
HINT: To check if number A is at least double number
B, check for A >=2*B. Apply this to the team's 
average scores 😊😊

GOOD LUCK 😀😀

const calcAverage=(score1,score2,score3)=> (score1+score2+score3)/3;

const checkWinner=function(avgkoala,avgdolphin){
    if(avgkoala>=2*avgdolphin){
        console.log(`koala win (${avgkoala} vs ${avgdolphin})`);
    }else if(avgdolphin>=2*avgkoala){
        console.log(`dolphin win (${avgdolphin} vs ${avgkoala})`);
    }else{
        console.log("No team wins!")
    }
}
// TEST DATA 1
let koalaScore1=65;
let koalaScore2=54;
let koalaScore3=49;

let avgKoala=calcAverage(koalaScore1,koalaScore2,koalaScore3);

let dolphinScore1=44;
let dolphinScore2=23;
let dolphinScore3=71;

let avgDolphin=calcAverage(dolphinScore1,dolphinScore2,dolphinScore3);

console.log(avgKoala,avgDolphin)

checkWinner(avgKoala,avgDolphin);

// TEST DATA 2
koalaScore1=23;
koalaScore2=34;
koalaScore3=27;

avgKoala=calcAverage(koalaScore1,koalaScore2,koalaScore3);

dolphinScore1=85;
dolphinScore2=54;
dolphinScore3=41;

avgDolphin=calcAverage(dolphinScore1,dolphinScore2,dolphinScore3);

console.log(avgKoala,avgDolphin)

checkWinner(avgKoala,avgDolphin);

const friend1='Michael';
const friend2='Steven';
const friend3='Peter';

const friends=['Michael','Steven','Peter'];
console.log(friends);

const years=new Array(1991,1984,2008,2020);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2]='Jay';
console.log(friends);
// friends=['Bob','Alice']; # This is Invalid;

const firstName='Jonas';
const jonas=[firstName,'Schmedtmann',2037-1991,'teacher',friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge=function(birthYear){
    return 2037-birthYear;
}
const year=[1990,1967,2002,2010,2018];

const age1=calcAge(year[0]);
const age2=calcAge(year[1]);
const age3=calcAge(year[year.length-1]);
console.log(age1,age2,age3);

const ages=[calcAge(year[0]),calcAge(year[1]),calcAge(year[year.length-1])];
console.log(ages);

const friends=['Michael','Steven','Peter'];

// Add element
const newLength=friends.push('Jay');  // Returns the lenght of the new array
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove element
friends.pop(); // from Last
const popped=friends.pop(); // returns the popped element from the last
console.log(popped);
console.log(friends);

friends.shift(); // returns the popped element from First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if(friends.includes('Steven')){
    console.log('You have a friend called Steven');
}

// Coding Challenge #2

Steven is still building his tip calculator, using 
the same rules as before: Tip 15% of the bill if the 
bill value is between 50 and 300, and if the value is 
different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill
value as an input and returns the corresponding tip,
calculated based on the rules above (you can check
out the code from first tip calculator challenge if
you need to). Use the function type you like the 
most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 
'bills' containing the test data below.
3. Create an array 'tips' containing the tip value
for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the 
total values, so the bill + tip.
TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each
position, and that value can actually be the returned 
value of a function! So you can just call a function
as array values (So don't store the tip values in
separate variables first, but right in the new array)
😊😊

GOOD LUCK 😃

const calcTip=function(bill){
    return bill>=50 && bill<=300 ? bill*0.15 : bill*0.2;
}

// const calcTip=bill=>bill>=50 && bill<=300 ? bill*0.15 : bill*0.2;

// const calcTotal=function(bill){
//     if(bill>=50 && bill<=300){
//         return bill+bill*0.15;
//     }else{
//         return bill+bill*0.2;
//     }
// }

const bills=[125,555,44];
const tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]
const totals=[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];

const jonasArray=[
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael','Peter','Steven']
];

const jonas={
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037-1991,
    job: 'teacher',
    friends: ['Michael','Peter','Steven']
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey='Name';
console.log(jonas['first'+nameKey]);

// console.log(jonas.'last'+nameKey);

const interestedIn=prompt('What do you want to know about jonas? choose about jonas?\
 Choose between firstName,lastName,age,job,and friends');
console.log(jonas[interestedIn]);

if(jonas[interestedIn]){
    console.log(jonas[interestedIn]);
}else{
    console.log('Wrong request! Choose between firstName,lastName,age,job,and friends');
}

jonas.location="Portugal";
jonas['twitter']="@jonasschmedtman";
console.log(jonas);

// Challenge
// *Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas['firstName']} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
console.log(bills,tips,totals);

const jonas={
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael','Peter','Steven'],
    hasDriversLicense: true,

    // calcAge: function(birthYear){
    //     return 2037-birthYear;
    // }

    // calcAge: function(){
    //     // console.log(this);
    //     return 2037-this.birthYear;
    // }

    calcAge: function(){
        this.age=2037-this.birthYear;
        return this.age;
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// console.log(jonas['calcAge'](1991));

// Challenge
// "Jonas is a 46-years old teacher, and he has a/no driver's license"

console.log(jonas.getSummary());


// Coding Challenge #3

Let's go back to Mark and John comparing their BMIs!
This time, let's use objects to implement the 
calculations! Remember: BMI =mass/height ** 2 =
mass / (height * height). (mass in kg and height in 
    meter)

1. For each of them, create an object with properties
for their full name, mass, and height (Mark Miller
    and John Smith)
2. Create a 'calcBMI' method on each object to 
calculate the BMI (the same method on both objects).
Store the BMI value to a property, and also return it
from the method.
3. Log to the console who has the higher BMI,
together with the full name and the respective BMI.
Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall.
John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀😀

const mark={
    fullName: 'Mark Miller',
    mass:78,
    height:1.69,
    calcBMI: function(){
        this.BMI=this.mass/(this.height*this.height);
        return this.BMI;
    }
}

const john={
    fullName: 'John Smith',
    mass:92,
    height:1.95,
    calcBMI: function(){
        this.BMI=this.mass/(this.height*this.height);
        return this.BMI;
    }
}

if(john.calcBMI()>mark.calcBMI()){
    console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI (${mark.BMI})`);
}else{
    console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI})`);
}

// console.log('lifting weights repetition 1');
// console.log('lifting weights repetition 2');
// console.log('lifting weights repetition 3');
// console.log('lifting weights repetition 4');
// console.log('lifting weights repetition 5');
// console.log('lifting weights repetition 6');
// console.log('lifting weights repetition 7');
// console.log('lifting weights repetition 8');
// console.log('lifting weights repetition 9');
// console.log('lifting weights repetition 10');

// for loop keeps running while condition is TRUE
for(let rep=1;rep<=30;rep++){
    console.log(`lifting weights repetition ${rep}`); 
}

const jonas=[
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael','Peter','Steven'],
    true
];
const types=[];

// console.log(jonas[0]);
// console.log(jonas[1]);
// ...
// console.log(jonas[4]);
// jonas[5] does not exist

for(let i=0;i<jonas.length;i++){
    // Reading from jonas array
    console.log(jonas[i],typeof jonas[i]);

    // Filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years=[1991,2007,1969,2020];
const ages=[];

for(let i=0;i<years.length;i++){
    ages.push(2037-years[i]);
}
console.log(ages);

// continue and break
console.log('---ONLY STRINGS---');
for(let i=0;i<jonas.length;i++){
    if(typeof jonas[i] !=='string') continue;
    console.log(jonas[i],typeof jonas[i]);
}

console.log('---BREAK WITH NUMBER---');
for(let i=0;i<jonas.length;i++){
    if(typeof jonas[i] ==='number') break;
    console.log(jonas[i],typeof jonas[i]);
}

const jonas=[
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael','Peter','Steven'],
    true
];

// 0,1, ..., 4
// 4,3, ..., 0

for(let i=jonas.length-1;i>=0;i--){
    console.log(i,jonas[i]);
}

for(let exercise=1;exercise<4;exercise++){
    console.log(`------Starting exercise ${exercise}`);
    for(let rep=1;rep<6;rep++){
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}

// for(let rep=1;rep<=10;rep++){
//     console.log(`Lifting weights repetition ${rep}`);
// }

let rep=1;
while (rep<=10) {
    // console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random()*6)+1;
console.log(dice);

while(dice !==6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random()*6)+1;
    if(dice===6) console.log(`Loop is about to end...`)
}

// Coding Challenge #1

Let's improve Steven's tip calculator even more, this
time using loops!

1. Create an array 'bills' containing all 10 test
bill values
2. Create empty arrays for the tips and the totals
('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no
need to repeat) to calculate tips and total values 
(bill+tip) for every bill value in the bills array.
Use a for loop to perform the 10 calculations!

TEST DATA: 22,295,176,440,37,105,10,1100,86 and 52

HINT: Call calcTip in the loop and use the push
method to add values to the tips and totals arrays 😊

4. BONUS: Write a function 'calcAverage' which takes
an array called 'arr' as an argument. This function
calculates the average of all numbers in the given
array. This is a DIFFERENT challenge (we haven't done
this before): Here is how to solve it:
    4.1. First, you will need to add up all values in
    the array. To do the addition, start by creating a 
    variable 'sum' that starts at 0. Then looop over the 
    array using a for loop. In each iteration, add the 
    current value to the 'sum' variable. This way, by 
    the end of the loop, you have all values added
    together
    4.2. To calculate the average, divided the sum you
    calculated before by the length of the array
    (because that's the number of elements)
    4.3. Call the function with the 'totals' array


const bills=[22,295,176,440,37,105,10,1100,86,52];
const tips=[];
const totals=[];

const calcTip=function(bills){
    for(let index=0;index<bills.length;index++){
        if(bills[index]>=50 && bills[index]<=300){
            tips.push(bills[index]*0.15);
            totals.push(bills[index]+tips[index]);
        }else{
            tips.push(bills[index]*0.2);
            totals.push(bills[index]+tips[index]);
        }
    }
}

calcTip(bills);
console.log(bills,tips,totals);

const calcAverage=function(arr){
    let sum=0;
    for(let index=0;index<arr.length;index++){
        // sum=sum+arr[index];
        sum+=arr[index];
    }
    return sum/arr.length;
}

console.log(calcAverage([2,3,7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/

