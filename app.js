
// Requiring module
//const express = require('express');
 import express from 'express';

// Creating express object
const app = express();
 
// Handling GET request
app.get('/', (req, res) => {
    res.send('A simple Node App is '
        + 'running on this server')
    res.end()
})
 
// Port Number
const PORT = process.env.PORT ||5000;
 
// Server Setup
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));

import { WORST, BEST, calculate, getPercentOverdue, CORRECT, HARD } from 'sm2-plus';
import { simulate} from 'sm2-plus';

const DAY_IN_MINISECONDS = 24 * 60 * 60 * 1000;
const getDaysSinceEpoch = () => (
    Math.round(new Date().getTime() / DAY_IN_MINISECONDS)
);

const TODAY = getDaysSinceEpoch();

const testWord = { 
  word: 'test',
  update: TODAY - 17,     
  difficulty: 0.2,  
  interval: 100
};

var i = 0.01;

console.info("Days, Interval, Difficulty, Rating #, Delta");

while (i<1) {

  simulate(0.6, 0.1, [BEST, BEST, BEST, BEST, BEST, BEST, BEST, BEST, BEST], i);
  //simulate(0.6, 0.1, [CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT], i);
  i = i +0.01
  i = Math.round (i * 100) / 100
}

/*
  console.log("0.1");
simulate(0.6, 0.1, [CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT], 0.1);
console.log("0.");
simulate(0.6, 0.1, [CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT], 0.2);
console.log("0.3");
simulate(0.6, 0.1, [CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT], 0.3);
console.log("0.4");
simulate(0.6, 0.1, [CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT], 0.4);
console.log("0.5");
simulate(0.6, 0.1, [CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT], 0.5);
console.log("0.6");
simulate(0.6, 0.1, [CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT], 0.6);
console.log("0.7");
simulate(0.6, 0.1, [CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT], 0.7);
console.log("0.8");
simulate(0.6, 0.1, [CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT], 0.8);
*/

/*
console.log("///////////////////");
simulate(0.6, 0.1, [CORRECT, BEST, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT]);
console.log("///////////////////");
simulate(0.6, 0.1, [CORRECT, CORRECT, BEST, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT]);
console.log("///////////////////");
simulate(0.6, 0.1, [CORRECT, CORRECT, CORRECT, BEST, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT]);
console.log("///////////////////");
simulate(0.6, 0.1, [BEST, BEST, BEST, BEST, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT]);
console.log("///////////////////");
simulate(0.6, 0.1, [HARD, HARD, BEST, WORST, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT]);
/*console.log("//////////CORRECT CORRECT CORRECT CORRECT CORRECT CORRECT CORRECT CORRECT CORRECT//////////");
simulate(0.38, 0.01, [CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT]);
console.log("//////////CORRECT WORST CORRECT WORST CORRECT WORST CORRECT WORST CORRECT//////////");
simulate(0.38, 0.01, [CORRECT, WORST, CORRECT, WORST, CORRECT, WORST, CORRECT, WORST, CORRECT]);
console.log("//////////WORST CORRECT CORRECT CORRECT CORRECT CORRECT CORRECT WORST CORRECT//////////");
simulate(0.38, 0.01, [WORST, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, WORST, CORRECT]);
console.log("//////////BEST BEST WORST BEST BEST BEST BEST BEST BEST//////////");
simulate(0.38, 0.01, [BEST, BEST, WORST, BEST, BEST, BEST, BEST, BEST, BEST]);
console.log("//////////WORST WORST WORST BEST BEST BEST BEST BEST BEST//////////");
simulate(0.38, 0.01, [WORST, WORST, WORST, BEST, BEST, BEST, BEST, BEST, BEST]);
console.log("//////////BEST BEST BEST BEST BEST BEST BEST BEST BEST//////////");
simulate(0.38, 0.01, [BEST, BEST, BEST, BEST, BEST, BEST, BEST, BEST, BEST]);
 
//HARD
console.log("//////////HARD HARD HARD HARD HARD HARD HARD HARD HARD//////////");
simulate(0.38, 0.01, [HARD, HARD, HARD, HARD, HARD, HARD, HARD, HARD, HARD]);
console.log("//////////HARD HARD WORST HARD HARD HARD HARD HARD HARD//////////");
simulate(0.38, 0.01, [HARD, HARD, WORST, HARD, HARD, HARD, HARD, HARD, HARD]);*/