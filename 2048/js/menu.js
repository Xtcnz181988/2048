import { addNickName } from './game.js';
import { createScorePage } from './score.js';
import { playAudioClick, addSettingsMenu } from './settings.js';


const containerMain = document.querySelector('.container-main');


function createBtnMenu () {

    const soundClick = document.getElementById('audio');
    const music = document.getElementById('music');

    // Add a wrapper for btns
    const wrapperOfBtn = document.createElement('div');
    wrapperOfBtn.classList.add('wrapper-btn');
    containerMain.append(wrapperOfBtn);

    //Add poster to game
    const posterGame = document.createElement('div');
    posterGame.classList.add('poster-game')
    wrapperOfBtn.append(posterGame);

    //Add btns in the wrapper of btn
    const btnStartGame = document.createElement('button');
    btnStartGame.classList.add('btn');
    btnStartGame.innerText = 'New game';
    wrapperOfBtn.append(btnStartGame);

    const btnScore = document.createElement('button');
    btnScore.classList.add('btn');
    btnScore.innerText = 'Score';
    wrapperOfBtn.append(btnScore);

    const btnSettings = document.createElement('button');
    btnSettings.classList.add('btn');
    btnSettings.innerText = 'Settings';
    wrapperOfBtn.append(btnSettings);

    if (JSON.parse(localStorage.getItem('dataSetting')).settings.sounds === 'on') {
        soundClick.muted = false;
    } else {
        soundClick.muted = true;
    }

    if (JSON.parse(localStorage.getItem('dataSetting')).settings.sounds === 'on') {
        music.muted = false;
    } else {
        music.muted = true;
    }
    
    playAudioClick ();

}

//Remove menu 
function removeBtnMenu () {
    containerMain.removeChild(containerMain.childNodes[0]);
}

// Listener for chouse next step after menu
containerMain.addEventListener('click', (event) => {
    if (event.target.innerText === 'New game') {
    removeBtnMenu ();
    addNickName ();

    } else if (event.target.innerText === 'Score') {
    removeBtnMenu ();
    createScorePage ()
    
    } else if (event.target.innerText === 'Settings') {
    removeBtnMenu ();
    addSettingsMenu ();
    }
});


export {createBtnMenu, removeBtnMenu};