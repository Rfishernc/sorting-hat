const house = ["Griff n' Dorks", "JigglyPuff", "That's So Ravenclaw", "Slytherin Above the Haters"];

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
             <button type="submit" class="btn btn-primary" id='submitButt'>Submit</button>
        </form>`;       
        writeToDom('inputDiv', stringVar);
    })
}

function clickedSort() {
    document.getElementById('inputDiv').addEventListener('click', function() {
        if(event.target.id === 'submitButt') {        
            let houseNum = Math.floor(Math.random()*4);
            let stringVar = 
            `<div class="card" style="width: 18rem;">
                <img class="card-img-top" src=".../100px180/" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${nameInput.value}</h5>
                    <p class="card-text">${house[houseNum]}</p>
                    <a href="#" class="btn btn-primary expelButt">Expel</a>
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