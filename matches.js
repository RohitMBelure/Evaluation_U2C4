// write js code here corresponding to matches.html

var matcheData = JSON.parse(localStorage.getItem("schedule"));
const tbody = document.querySelector('tbody');
var matchArr = JSON.parse(localStorage.getItem("favourites")) || [];


function sortFunction(){
    var selected = document.querySelector("#filterVenue").value;
    if (selected == "Mumbai"){
        // tbody.foreach(function(elem){
        //    console.log(elem)
        // })
        console.log(selected)
        // console.log(tbody)
    }
    
}


matcheData.forEach(function(elem){
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.innerText=elem.MatchNumber;
    const td2 = document.createElement('td');
    td2.innerText=elem.TeamA;
    const td3 = document.createElement('td');
    td3.innerText=elem.TeamB;
    const td4 = document.createElement('td');
    td4.innerText=elem.Date;
    const td5 = document.createElement('td');
    td5.innerText=elem.Venue;
    const td6 = document.createElement('td');
    td6.innerText="Add as Favourites";
    td6.style.color="green"
    td6.style.cursor="pointer"
    td6.addEventListener("click", function(){
        addFunction(elem);
    });

    tr.append(td1, td2, td3, td4, td5, td6);
    tbody.append(tr)
    // console.log(tbody)
})
// console.log(matcheData)
function addFunction(elem){
    matchArr.push(elem)
    localStorage.setItem("favourites", JSON.stringify(matchArr))
    // console.log(elem)
}