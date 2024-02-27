// =====================
// BASIC IF/ELSE
// =====================
let random = Math.random();
if (random < 0.5){
    console.log(`Your number is: ${random} and its less than 0.5`)
}


// =====================
// PROMPT EXAMPLE
// =====================


const dayOfWeek = prompt("Enter A DAY").toLowerCase()

if(dayOfWeek === "monday") {
    console.log("Ugh I hate Monday's")
} else if (dayOfWeek === "saturday"){
    console.log("Yay I love Saturdays")
}else if(dayOfWeek === "tuesday"){
    console.log("Chewsday")
}else {
    console.log("MEh")
}


// =====================
// TICKET PRICE EXAMPLE
// =====================

// 0-5 - FREE
// 5 - 10 CHILD $10 
// 10 - 65 ADULT $20 
// 65+ SENIOR $10

const age = 8

if (age < 5) {
    console.log("You are a child")
}else if (age < 10){
    console.log("You a child you pay 10 dollars")
}else if (age < 65){
    console.log("You are an adult. You pay $20")
}


// =====================
// NESTING CONDITIONALS
// =====================

const password = prompt("please enter a new password")

// Password must be 6+ characters
if (password.length >= 6) {
    if (password.indexOf(" ") === -1){
        console.log("Valid Password")
    } else {
        console.log("Password cannot contain spaces!")
    }
}else {
    console.log("PASSWORD TOO SHORT! Must be 6+ Characters.")
}