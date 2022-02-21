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

// //Create Nickname menu
// function addNickName () {
//     //Add a wrapper to menu of nickname
//     const wrapperOfNickName = document.createElement('div');
//     wrapperOfNickName.classList.add('wrapper-nickname')
//     containerMain.append(wrapperOfNickName);

//     //Add a input for nickname
//     const inputName = document.createElement('input');
//     inputName.classList.add('input-name');
//     inputName.type = 'text';
//     inputName.placeholder = 'Enter your nickname';
//     inputName.autofocus = true;
//     inputName.autocomplete = false;
//     inputName.pattern = '[A-Za-z0-9]{4,8}';
//     inputName.title = 'Nickname must be in latin letters or numbers and between 4 to 8 characters in length';
//     wrapperOfNickName.append(inputName);

//     //Add a wrapper for btns of navigation
//     const wrapperOfBtnNav = document.createElement('div');
//     wrapperOfBtnNav.classList.add('wrapper-btn-navigation');
//     wrapperOfNickName.append(wrapperOfBtnNav);

//     //Add btns for navigation
    
//     const btnForward = document.createElement('button');
//     btnForward.classList.add('btn');
//     btnForward.innerText = 'Start';
//     wrapperOfBtnNav.append(btnForward);

//     const btnBack = document.createElement('button');
//     btnBack.classList.add('btn');
//     btnBack.innerText = 'Back to menu'
//     wrapperOfBtnNav.append(btnBack);

//     playAudioClick ()
// }

// function addErrorTextPattern () {

//     const errorText = document.createElement('div');
//     errorText.className = 'error-text';
//     errorText.innerText = 'Should be in latin letters or numbers and between 4 to 8 characters in length';
//     errorText.id = 'Error-pattern'
//     containerMain.childNodes[0].appendChild(errorText);
// }


// //Return to main menu or start game
// containerMain.addEventListener('click', (event) => {
//     if (event.target.innerText === 'Back to menu') {
//         removeBtnMenu ();
//         createBtnMenu ();
//     } else if (event.target.innerText === 'Start') {
//         if (containerMain.childNodes[0].childNodes[0].validity.patternMismatch === true || containerMain.childNodes[0].childNodes[0].value === '' ){
//             addErrorTextPattern ();
//         } else {
//             removeBtnMenu ();
//             gameStart ();
//         }
        
//     }
// })


// document.addEventListener('keydown', (event) => {
//     if (event.keyCode === 27 && containerMain.childNodes[0].className === 'wrapper-nickname') {
//         removeBtnMenu ();
//         createBtnMenu ();
//     }
// })

// containerMain.addEventListener('input', (event) => {
//     if (containerMain.childNodes[0].childNodes[containerMain.childNodes[0].childNodes.length-1].innerText === 'Should be in latin letters or numbers and between 4 to 8 characters in length') {
//         let errorText = document.getElementById('Error-pattern');
//         errorText.remove();
//     }
// })

export {createBtnMenu, removeBtnMenu};