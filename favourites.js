// write js code here corresponding to favourites.html

var favouriteData = JSON.parse(localStorage.getItem("favourites"))
var tbody = document.querySelector("tbody");


favouriteData.forEach(function(elem, index){
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
    td6.innerText="Delete";
    td6.style.cursor="pointer"
    td6.style.color="red"
    td6.addEventListener("click", function(){
        addFunction(elem, index);
        tr.innerHTML=""
    });

    tr.append(td1, td2, td3, td4, td5, td6);
    tbody.append(tr)
})

function addFunction(elem, index){
    favouriteData.splice(index, 1);
    localStorage.setItem("favourites", JSON.stringify(favouriteData))
}
