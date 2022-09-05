
let counter = 0;

let countEl = document.getElementById("count-el");

function increment() {
    counter += 1;
    countEl.innerText = counter;
    //aici poate fi pus si document.getElementById("count-el").innerText

}



let saves = [];

let savesEl = document.getElementById("saves");



function save() {

    saves.push(counter);
    savesEl.innerText = saves.join("-");
    counter = 0;
    countEl.innerText = counter;
    if(saves.length>=5){
        saves = [];
    }

}




