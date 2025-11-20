import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getRandomMemberArray (
  arr
){

  const randomIndex = Math.floor(Math.random()*arr.length)
  return arr[randomIndex]
}


function generateRandomExcuse(){

const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
const action = ['ate', 'peed', 'crushed', 'broke'];
const what = ['my homework', 'my phone', 'the car'];
const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];



const whoRandomMember = getRandomMemberArray(who)
const actionRandomMember = getRandomMemberArray(action)
const whatRandomMember = getRandomMemberArray(what)
const whenRandomMember = getRandomMemberArray(when)

const message = `${whoRandomMember} ${actionRandomMember} ${whatRandomMember} ${whenRandomMember}`
return message
}


window.onload = function() {
 
const randomExcuse = generateRandomExcuse()
const elementP = `<p> ${randomExcuse} </p>`
const element = document.getElementById("excuse")
element.innerHTML = elementP


//write your code here
  console.log("Hello Rigo from the console!");


};
