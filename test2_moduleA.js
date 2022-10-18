let students = []; 
const fs = require('fs');
const { resolve } = require("path")

function initialize() {

    return new Promise((resolve, reject) => {
        fs.readFile('./students.json', function (error, data) {
            if (error) 
                reject('File cannot be found,')
            else {
                if(!data) 
                    reject('No data found,')
                else {
                    students = JSON.parse(data)
                    resolve() 
                }
            }
        })
    }
}

function getBSD() {
    return new Promise((resolve, reject) => {
        if(students == undefined || students.length === 0)
            reject('no results returned') 
        else 
            resolve(Students)
    })
} 

function highGPA(){
    return new Promise((resolve, reject) => {
        if(gpa >= ALL )
        resolve(Students)
        else
        reject('Failed finding the student with the highest GPA.')
    })
}
