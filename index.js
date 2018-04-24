var moment = require('moment');
var numeral = require('numeral');

console.log("hi");
console.log(moment("20150428", "YYYYMMDD").fromNow());

console.log(numeral('3.467TB'));

var name = "John";
var birthday = "April 24";

console.log(`${name}'s birthday is ${birthday}`);