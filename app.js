
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

console.log("//////////WORST WORST WORST CORRECT CORRECT WORST CORRECT CORRECT CORRECT//////////");
simulate(0.38, 0.01, [WORST, WORST, WORST, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, CORRECT]);
console.log("//////////CORRECT CORRECT CORRECT CORRECT CORRECT WORST CORRECT CORRECT CORRECT//////////");
simulate(0.38, 0.01, [CORRECT, CORRECT, CORRECT, CORRECT, CORRECT, WORST, CORRECT, CORRECT, CORRECT]);
console.log("//////////CORRECT CORRECT CORRECT CORRECT CORRECT CORRECT CORRECT CORRECT CORRECT//////////");
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
simulate(0.38, 0.01, [HARD, HARD, WORST, HARD, HARD, HARD, HARD, HARD, HARD]);