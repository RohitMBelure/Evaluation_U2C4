// write js code here corresponding to index.html
// You should add submit event on the form

const submitData = document.querySelector('#masaiForm');
submitData.addEventListener("submit", submitFunc);
var submitArr = JSON.parse(localStorage.getItem("schedule")) || [];

function submitFunc () {
    event.preventDefault();
    var submitObj = {
        MatchNumber:masaiForm.matchNum.value,
        TeamA:masaiForm.teamA.value,
        TeamB:masaiForm.teamB.value,
        Date:masaiForm.date.value,
        Venue:masaiForm.venue.value,
    }
    submitArr.push(submitObj)
    localStorage.setItem("schedule", JSON.stringify(submitArr))
    // console.log(submitArr)
}