/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const convertEl = document.getElementById("convert-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

const lengthConversion = 3.281
const volumeConversion = 0.264
const massConversion = 2.204

convertEl.addEventListener ("click", function() {
    let inputValue = inputEl.value
    lengthEl.textContent = `
                 ${inputValue} meters =  ${(inputValue * lengthConversion).toFixed(3)} feet | 
                 ${inputValue} feet = ${(inputValue / lengthConversion).toFixed(3)} meters
            `
    volumeEl.textContent = `
                 ${inputValue} liters =  ${(inputValue * volumeConversion).toFixed(3)} gallons | 
                 ${inputValue} gallons = ${(inputValue / volumeConversion).toFixed(3)} liters
            `
    massEl.textContent = `
                 ${inputValue} kilogram =  ${(inputValue * massConversion).toFixed(3)} pound | 
                 ${inputValue} pound = ${(inputValue / massConversion).toFixed(3)} kilogram
            `
})