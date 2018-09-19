function writeToDom(div, string) {
    document.getElementById(div).innerHTML = string;
}

function clickedStart() {
    document.getElementById('sortButt').addEventListener('click', function() {
        let stringVar = 
        `<form>
            <div class="form-group">
                <label for="nameInput">Student: </label>
                <input type="text" class="form-control" id="nameInput" aria-describedby="emailHelp" placeholder="Enter student's name">
            </div>
             <button type="submit" class="btn btn-primary">Submit</button>
        </form>`;       
        writeToDom('inputDiv', stringVar);
    })
}

clickedStart();