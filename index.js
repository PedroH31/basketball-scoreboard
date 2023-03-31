let homeScore = 0
let guestScore = 0


document.getElementById("home-score").textContent = homeScore
document.getElementById("guest-score").textContent = guestScore


let score1El = document.getElementById("home-score")
let score2El = document.getElementById("guest-score")


function addOneHome(){
    let result = homeScore += 1
    score1El.textContent = result
}

function addTwoHome(){
    let result = homeScore += 2
    score1El.textContent = result
}

function addThreeHome(){
    let result = homeScore += 3
    score1El.textContent = result
}

function addOneGuest(){
    let result = guestScore += 1
    score2El.textContent = result
}

function addTwoGuest(){
    let result = guestScore += 2
    score2El.textContent = result
}

function addThreeGuest(){
    let result = guestScore += 3
    score2El.textContent = result
}

