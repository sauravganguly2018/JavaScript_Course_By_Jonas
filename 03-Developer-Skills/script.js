// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
// Problem:
// We work for a company building a smart home
// thermometer. Our most recent task is this: "Given an
// array of temperatures of one day, calculate the
// temperature amplitude. Keep in mind that sometimes
// there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference
// between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== 'number') continue;
    if (currTemp > max) {
      max = currTemp;
    }
    if (currTemp < min) {
      min = currTemp;
    }
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 Arrays, should we implement functionality
// twice? No! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== 'number') continue;
    if (currTemp > max) {
      max = currTemp;
    }
    if (currTemp < min) {
      min = currTemp;
    }
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };

  // B) FIND
  console.table(measurement);

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== 'number') continue;
    // debugger;
    if (currTemp > max) {
      max = currTemp;
    }
    if (currTemp < min) {
      min = currTemp;
    }
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

// A) IDENTIFY
console.log(amplitudeBug);

// Coding Challenge

Given an array of forecasted maximum temperatures,
the thermometer displays a string with these 
temperatures.

Example: [17,21,23] will print "... 17 degree C in 1 days .
.. 21 degree C in 2 days ... 23 degree C in 3 days ..."

Create a function 'printForecast' which takes in an
array 'arr' and logs a string like the above to the 
console.

Use the problem-solving framework: Understand the 
problem and break it up into sub-problems!

TEST DATA 1: [17,21,23]
TEST DATA 2: [12,5,-5,0,4]

// 1) Understanding the Problem
   we have to print the value of the array 
   along with some lines in the console

// 2) Breaking into subproblems
    first we have to pass the array in a function 
    and then we will use for loop to iterate through 
    each element of the array 
    and then we will use template literal to get the value
    of the array element in each iteration and then we will store
    them in a variable by adding array's next value in each iteration.
    after coming from the for loop we will print that variable
    into the console.


const printForecast = function (arr) {
  let concat = '';
  for (let i = 0; i < arr.length; i++) {
    concat += `${arr[i]} degree C in ${i + 1} days ... `;
  }
  console.log('... ' + concat);
};

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
printForecast(data1);
printForecast(data2);
*/
