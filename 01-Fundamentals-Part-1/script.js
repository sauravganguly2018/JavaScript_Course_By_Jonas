let js="amazing";
if(js==="amazing") alert("JavaScript is FUN!");
40+8+23-10;
console.log(40+8+23-10);
/*
console.log("Jonas");
console.log(23);

let firstName="Saurav";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda="JM";
let $function=27;

let person="jonas";
let PI=3.1415;

let myFirstJob="Coder";
let myCurrentJob="Teacher";

let job1="Programmer";
let job2="teacher";

console.log(myFirstJob);

let javascriptIsFun=true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'saurav');

javascriptIsFun='YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year=1991;
console.log(typeof year);

console.log(typeof null);

let age=18;
age=19;

const birthYear=2003;
// birthYear=2000;
// const job;

var job="programmer";
job="teacher";

lastName="ganguly";
console.log(lastName);

// Math Operators
const now=2022;
const ageSaurav=now-2003;
const ageKundan=now-2002;
console.log(ageSaurav,ageKundan);

console.log(ageSaurav*2, ageSaurav/2,2**3);
// 2**3 means 2 to the power of 3=2*2*2

const firstName="saurav";
const lastName="ganguly";
console.log(firstName+' '+lastName);

// Assignment Operators
let x=10+5;
x+=10; // x=x+10=25
x*=4;  // x=x*4=100
x++;   // x=x+1;
x--;   // x=x-1;
x--;
console.log(x);

// Comparison Operators
console.log(ageSaurav>ageKundan); // >, <, >=, <=
console.log(ageSaurav>=20);

const isFullAge=ageSaurav>=20

console.log(now-2003>now-2002);

const now=2022;
const ageSaurav=now-2003;
const ageKundan=now-2002;

let x,y;
x=y=25-10-5; // x=y=10, x=10
console.log(x,y);

const averageAge=(ageSaurav+ageKundan)/2;
console.log(ageSaurav,ageKundan,averageAge);
*/

// Coding challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index),
which is calculated using the formula:
BMI=mass/height**2=mass/(height*height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables.
2. Calculate both their BMIs using the formula (yor
    can even implement both versions)
3. Create a boolean variable 'markHigherBMI'
containing information about whether Mark has a
higher BMI than John.

TEST DATA: Marks weights 78 kg and is 1.69 m tall.
John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall.
John weights 85 kg and is 1.75 m tall.

GOOD LUCK 

let johnWeights,markWeight,johnHeight,markHeight;
johnWeight=92;
johnHeight=1.95;
markWeight=78;
markHeight=1.69;
let BMIMark=markWeight/markHeight**2;
let BMIJohn=johnWeight/(johnHeight*johnHeight);
let markHigherBMI=BMIMark>BMIJohn;
console.log(BMIMark,BMIJohn,markHigherBMI);

johnWeight=85;
johnHeight=1.76;
markWeight=95;
markHeight=1.88;
BMIMark=markWeight/markHeight**2;
BMIJohn=johnWeight/(johnHeight*johnHeight);
markHigherBMI=BMIMark>BMIJohn;
console.log(BMIMark,BMIJohn,markHigherBMI);

const firstName="Jonas";
const job="teacher";
const birthYear=1991;
const year=2037;

const jonas="I'm "+firstName+', a '+(year-birthYear)+' years old '+job+'!';
console.log(jonas);

const jonasNew=`I'm ${firstName}, a ${year-birthYear} years old ${job}!`;
console.log(jonasNew);
console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);

const age=16;

if(age>=18){
    console.log('Sarah can start driving license🚗');
}else{
    const yearsLeft=18-age;
    console.log(`Sarah is too young . Wait another ${yearsLeft} years :)`);
}

const birthYear=2003;

// let century;
if(birthYear<=2000){
    century=20;
}else{
    century=21;
}
console.log(century);


// Coding Challenge #2
Use the BMI exmaple from Challenge #1, and the code 
you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template string to include the BMI values as the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😊

GOOD LUCK 😀😀

let johnWeights,markWeight,johnHeight,markHeight;
johnWeight=92;
johnHeight=1.95;
markWeight=78;
markHeight=1.69;
let BMIMark=markWeight/markHeight**2;
let BMIJohn=johnWeight/(johnHeight*johnHeight);
let markHigherBMI=BMIMark>BMIJohn;
console.log(BMIMark,BMIJohn,markHigherBMI);

if(BMIMark>BMIJohn){
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
}else{
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`);
}
// Type conversion
const inputYear='1991';
console.log(Number(inputYear),inputYear)
console.log(Number(inputYear)+18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23),23);

// type coercion
console.log('I am '+23+' years old');
console.log('23'-'10'-3);
console.log('23'*'2');
console.log('23'/'2');

let n='1'+1; // '11'
n=n-1;
console.log(n);

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money=0;
if(money){
    console.log("Don't spend it all ;)");
}else{
    console.log("You should get a job!");
}

let height=0;
if(height){
    console.log("YAY! Height is defined");
}else{
    console.log("Height is UNDEFINED");
}

const age='18';
if(age===18) console.log('You just became an adult :D (strict)');
if(age==18) console.log ('You just became an adult :D (loose)');

const favourite=Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if(favourite===23){  // 22===23  -> FALSE
    console.log("Cool! 23 is an amazing number!");
}else if(favourite===7){
    console.log('7 is also a cool number');
}else if(favourite === 9){
    console.log('9 is also a cool number');
}else{
    console.log('Number is not 23 or 7 or 9');
}

if(favourite!==23) console.log('Why not 23?');

const hasDriversLicense=true; // A
const hasGoodVision=true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if(hasDriversLicense && hasGoodVision){
//     console.log("Sarah is able to drive!");
// }else{
//     console.log("Someone else should drive...");
// }

const isTired=false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired){
    console.log("Sarah is able to drive!");
}else{
    console.log("Someone else should drive...");
}


// Coding Challenge #3

There are two gymnastics teams, Dolphins and koalas.
They compete against each other 3 times . The winner
with the highest average score wins the a trophy!

1. Calculate the average score for each team, using 
the test data below
2. Compare the team's average scores to determine the winner
of the competition, and print it to the 
console. Don't forget that there can be a draw, so 
test for that as well (draw means they have the same
    average score).

3. BONUS 1: Include a requirement for a minimum score of 100.
With this rule, a team only wins if it has a 
higher score than the other team, and the same time a 
score of at least 100 points. HINT: Use a logical
operator to test for minimum score, as well as
multiple else-if blocks 😊😊
4. BONUS 2: Minimum score also applies to a draw! So
a draw only happens when both teams have the same score and both
have a score greater or equal 100 
points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas
score 88,91 and 110

const dolphinScore=(97+112+80)/3;
const koalaScore=(109+95+50)/3;
console.log(dolphinScore,koalaScore);

if(dolphinScore===koalaScore && dolphinScore>=100 && koalaScore>=100){
    console.log("Both teams win the trophy");
}else if(dolphinScore>koalaScore && dolphinScore>=100){
    console.log("dolphin team wins the trophy");
}else if(koalaScore>dolphinScore && koalaScore>=100){
    console.log("koala team wins the trophy");
}else{
    console.log("no team wins the trophy")
}

const day='friday';

switch(day){
    case 'monday': // day==='monday'
        console.log("Plan course structure");
        console.log("Go to coding setup");
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log("Enjoy the weekend :D");
        break;
    default:
        console.log("Not a valid day!");
}

if(day==='monday'){
    console.log("Plan course structure");
    console.log("Go to coding setup");   
}else if(day==='tuesday'){
    console.log('Prepare theory videos'); 
}else if(day==='wednesday' || day==='thursday'){
    console.log('write code examples');   
}else if(day==='friday'){
    console.log('Record videos');  
}else if(day==='saturday' || day==='sunday'){
    console.log("Enjoy the weekend :D"); 
}else{
    console.log("Not a valid day!");   
}

// Expression and Statement
// Expression is a piece of code that produe a value
// Statement is a larger piece of code that does not produce any value

3+4
1991
true && false && !false

if(23>10){
    const str='23 is bigger';
}

const me='Saurav Ganguly';
console.log(`I'm ${2022-2003} years old ${me}`);

const age=23;
// age>=18 ? console.log("I like to drink wine") :
// console.log("I like to drink water");

const drink=age>=18 ? "wine" : "water";
console.log(drink);

let drink2;
if(age>=18){
    drink2='wine';
}else{
    drink2='water';
}
console.log(drink2);

console.log(`I like to drink ${age>=18 ? 'wine' : 'water'}`);


// Coding Challenge #4

Steven wants to build a very simple tip calculator
for whenever he goes eating in a restaurant. In his 
country, it's usual to tip 15% if the bill value is 
between 50 and 300 . If the value is different, the 
tip is 20%.

1. Your task is to calculate the tip, depending on
the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement 😅
(If it's easier for you, you can start with an if/
else statement , and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill
value, the tip, and the final value (bill + tip).
Example: 'The bill was 275, the tip was 41.25, and the 
total value 316.25'

TEST DATA: Test for bill values 275,40 and 430

HINT: To calculate 20% of a value, simply multiply it by
20/100 =0.2
HINT: Value X is between 50 and 300, if it's >=50 && <=300 😉

GOOD LUCK 😃😃

const bill=430;
const tip=(bill>=50 && bill<=300) ? (15/100)*bill : (20/100)*bill;
const finalValue=bill+tip;
console.log(`The bill value is ${bill}, The tip is ${tip} and the final value is ${finalValue}`);
*/
