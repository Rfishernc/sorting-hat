const cards = 
[{house: "Griff n' Dorks", images: "images/images.jpg", background: 'bg-primary', font: 'a'},
{house: "JigglyPuff", images: "images/250px-039Jigglypuff.png", background: 'bg-warning', font: 'a'},
{house: "That's So Ravenclaw", images: "images/MV5BYmQ4Y2Y0MGMtYzljOC00MjJhLWIxNzktN2ZhMjY1ZDE3MjBmXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_UX182_CR0,0,182,268_AL_.jpg", background: 'bg-danger', font: 'a'},
{house: "Slytherin Above the Haters", images: "images/giphy.gif", background: 'bg-success', font: 'a'}];


function writeToDom(div, string) {
    document.getElementById(div).innerHTML = string;
}

function addToDom(div, string) {
    document.getElementById(div).innerHTML += string;
}

function clickedStart() {
    document.getElementById('sortButt').addEventListener('click', function() {
        let stringVar = 
        `<form>
            <div class="form-group">
                <label for="nameInput">Student: </label>
                <input type="text" class="form-control" id="nameInput" aria-describedby="emailHelp" placeholder="Enter student's name">
            </div>
             <button type="submit" class="btn btn-primary" id='submitButt'>Sort</button>
        </form>`;       
        writeToDom('inputDiv', stringVar);
    })
}

function clickedSort() {
    document.getElementById('inputDiv').addEventListener('click', function() {
        if(event.target.id === 'submitButt') {        
            let houseNum = Math.floor(Math.random()*4);
            let stringVar = 
            `<div class="card text-center w-25 m-2 border-dark ${cards[houseNum].background}">
                <img class="card-img-top cardimg ml-auto mr-auto mt-2" src="${cards[houseNum].images}" alt="Card image cap">
                <div class="card-body ${cards[houseNum].background}">
                    <h5 class="card-title text-center">${nameInput.value}</h5>
                    <p class="card-text text-center">${cards[houseNum].house}</p>
                    <a href="#" class="btn btn-dark expelButt">Expel</a>
                </div>
            </div>`;
            addToDom('cardDiv', stringVar);
        }
    })
}

function clickedExpel() {
    document.getElementById('cardDiv').addEventListener('click', function() {
        if(event.target.classList.contains('expelButt') === true) {
            event.target.parentNode.parentNode.remove();
        }
    })
}

clickedStart();
clickedSort();
clickedExpel();