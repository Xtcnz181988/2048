import { gameStart } from './game.js';
import { createBtnMenu } from './menu.js';
import { playAudioClick, stopMusic } from './settings.js';

const containerMain = document.querySelector('.container-main');

function modalWindow () {

    const modalWrapper = document.createElement('div');
    modalWrapper.classList.add('modal-wrapper');
    document.body.appendChild(modalWrapper);
    modalWindowForGameMenu ()
}

function modalWindowForGameMenu () {

    const menuGameWindow = document.createElement('div');
    menuGameWindow.classList.add('menu-game-window');
    document.body.childNodes[document.body.childNodes.length-1].appendChild(menuGameWindow);

    const btnBackToGame = document.createElement('button');
    btnBackToGame.classList.add('btn');
    btnBackToGame.innerText = 'Back to game';
    menuGameWindow.append(btnBackToGame);

    const btnResetGame = document.createElement('button');
    btnResetGame.classList.add('btn');
    btnResetGame.innerText = 'Reset';
    menuGameWindow.append(btnResetGame);

    const btnBackToMenu = document.createElement('button')
    btnBackToMenu.classList.add('btn');
    btnBackToMenu.innerText = 'Back to menu';
    menuGameWindow.append(btnBackToMenu);

    playAudioClick ()
}   

document.addEventListener('click', (event) => {
    if (event.target.innerText === 'Back to game') {
        document.body.removeChild(document.body.childNodes[document.body.childNodes.length-1])
    }
    if (event.target.innerText === 'Reset') {
        containerMain.removeChild(containerMain.childNodes[0]);
        document.body.removeChild(document.body.childNodes[document.body.childNodes.length-1]);
        gameStart ();
    }
    if (event.target.innerText === 'Back to menu' && containerMain.childNodes[0].className === 'wrapper-game') {
        containerMain.removeChild(containerMain.childNodes[0]);
        document.body.removeChild(document.body.childNodes[document.body.childNodes.length-1]);
        createBtnMenu ()
        stopMusic ();
    }
})

export {modalWindow};