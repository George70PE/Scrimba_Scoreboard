let homeScoreEl=document.getElementById("homeScore-el")
let homeScore=0
let guestScoreEl=document.getElementById("guestScore-el")
let guestScore=0
let homeFoulsEl=document.getElementById("homeFouls-el")
let homeFouls=0
let guestFoulsEl=document.getElementById("guestFouls-el")
let guestFouls=0
let periodEl=document.getElementById("period-el")
let periodNumber=0

function homePlus1() {
    homeScore+=1
    homeScoreEl.textContent=homeScore
}
function homePlus2() {
    homeScore+=2
    homeScoreEl.textContent=homeScore
}
function homePlus3() {
    homeScore+=3
    homeScoreEl.textContent=homeScore
}
function guestPlus1() {
    guestScore+=1
    guestScoreEl.textContent=guestScore
}
function guestPlus2() {
    guestScore+=2
    guestScoreEl.textContent=guestScore
}
function guestPlus3() {
    guestScore+=3
    guestScoreEl.textContent=guestScore
}
function homeFoulsPlus() {
    homeFouls+=1
    homeFoulsEl.textContent=homeFouls
}
function guestFoulsPlus() {
    guestFouls+=1
    guestFoulsEl.textContent=guestFouls
}
function period() {
    periodNumber+=1
    if (periodNumber === 1) {periodEl.textContent="1st Quarter"}
    else if (periodNumber === 2) {periodEl.textContent="2nd Quarter"}
    else if (periodNumber === 3) {periodEl.textContent="3rd Quarter"}
    else if (periodNumber === 4) {periodEl.textContent="4th Quarter"}
    else {periodEl.textContent="Finish"}
}
function newGame() {
    homeScore=0
    homeScoreEl.textContent=homeScore
    guestScore=0
    guestScoreEl.textContent=guestScore
    homeFouls=0
    homeFoulsEl.textContent=homeFouls
    guestFouls=0
    guestFoulsEl.textContent=guestFouls
    periodNumber=0
    periodEl.textContent="New Game"
}