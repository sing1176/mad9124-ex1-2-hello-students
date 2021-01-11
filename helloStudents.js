'use strict'

// 1. Read the JSON file into a variable called students

const STUDENTS = require('./students.json')

// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker



STUDENTS.forEach(student=>{
    console.log(`hello ${student.firstName} ${student.lastName}`)
})


// 3. Print out the number of last names starting with the letter D
// e.g. Count of last names starting with D is 1

let newNames= STUDENTS.filter(student=> student.lastName[0]==='D')

console.log(newNames.length);




