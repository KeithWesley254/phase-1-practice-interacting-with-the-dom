
const counterZ = document.querySelector('#counter')
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const heart = document.querySelector('#heart');
const pause = document.querySelector('#pause');
const likes = document.querySelector('.likes');
const commentForm = document.querySelector('#comment-form');
const comments = document.querySelector('#list');

let counterText = document.querySelector('#counter').innerText;
let tallyIt = parseInt(counterText);
let heartBeats = {};

//counts without me
function CountItUp() {
  ++tallyIt;
  counterZ.innerText = tallyIt;
}
let Xz = setInterval(CountItUp, 1000);

//minus ya Messi na Plus ya Modric
minus.addEventListener('click', () => {
    tallyIt -= 1;
    counterZ.innerText = tallyIt;
});
plus.addEventListener('click', () => {
    tallyIt += 1;
    counterZ.innerText = tallyIt;
});

//All for the gram
heart.addEventListener('click', forAlgorithm);

function forAlgorithm(){
    heartBeats[tallyIt] = heartBeats[tallyIt] || 0;
    heartBeats[tallyIt] += 1;
    
    const mylist = document.createElement('li');
    for(let tallyItChild in heartBeats){
        mylist.textContent = `${tallyItChild} has been liked ${heartBeats[tallyItChild]} times`
    }
    likes.appendChild(mylist)
}

//STOP! Hammertime
pause.addEventListener('click', hammerTime);

function hammerTime(){
    let genge = [minus, plus, heart];
    if(pause.innerText === 'pause'){
        clearInterval(Xz);
        pause.innerText = "resume";
        genge.forEach(slaps => slaps.disabled = true);
    }else{
        pause.innerText ==="resume";
        Xz = setInterval(CountItUp, 1000);
        pause.innerText = 'pause';
        genge.forEach(slaps => slaps.disabled = false)
    }
}

//Rada?
commentForm.addEventListener('submit', greatSeriesThatOne);

function greatSeriesThatOne(e){
    e.preventDefault();
    const theBox = document.createElement('p')
    theBox.textContent = e.target.querySelector('input').value
    comments.appendChild(theBox)
    e.target.reset();
}