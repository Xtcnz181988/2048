import { createBtnMenu} from './menu.js';
import { modalWindow } from './modalscore.js';
import { playAudioClick } from './settings.js';

const containerMain = document.querySelector('.container-main');

function createScorePage () {

    const data = JSON.parse(localStorage.getItem('dataSetting')).results;

    containerMain.parentNode.style.marginBottom = 'auto';

    const wrapperTable = document.createElement ('div');
    wrapperTable.classList.add('wrapper-table');
    containerMain.append(wrapperTable);

    const btnBackToMenu = document.createElement('button');
    btnBackToMenu.classList.add('btn');
    btnBackToMenu.innerText = 'Back to menu'
    wrapperTable.append(btnBackToMenu);

    // const btnResetScore = document.createElement('button');
    // btnResetScore.classList.add('btn');
    // btnResetScore.innerText = 'Reset score'
    // wrapperTable.append(btnResetScore);

    const table = document.createElement('table');
    table.classList.add('table')
    wrapperTable.append(table);

    const thead = document.createElement('thead');
    table.append(thead);

    const tbody = document.createElement('tbody');
    table.append(tbody);

    const rowHead = document.createElement('tr');
    rowHead.classList.add('tr')
    thead.append(rowHead);

    const numberColumn = document.createElement('th');
    numberColumn.classList.add('th')
    numberColumn.innerText = '№';
    rowHead.append(numberColumn);

    const NickNameColumn = document.createElement('th');
    NickNameColumn.classList.add('th');
    NickNameColumn.innerText = 'Nickname';
    rowHead.append(NickNameColumn);

    const ScoreColumn = document.createElement('th');
    ScoreColumn.classList.add('th');
    ScoreColumn.innerText = 'Score';
    rowHead.append(ScoreColumn);

    for (let prop in data ) {

    const rowHead = document.createElement('tr');
    rowHead.classList.add('tr')
    tbody.append(rowHead);

    const numberColumn = document.createElement('th');
    numberColumn.classList.add('th')
    numberColumn.innerText = `${prop.substring(0,2)}`;
    rowHead.append(numberColumn);

    const NickNameColumn = document.createElement('th');
    NickNameColumn.classList.add('th')
    NickNameColumn.innerText = `${prop.substring(2)}`;
    rowHead.append(NickNameColumn);
    
    const ScoreColumn = document.createElement('th');
    ScoreColumn.classList.add('th');
    ScoreColumn.innerText = `${data[prop]}`;
    rowHead.append(ScoreColumn);
    }

    wrapperTable.addEventListener('click', (event) => {
        if (event.target.innerText === 'Reset score') {
            modalWindow ();
        } else if (event.target.innerText === 'Back to menu') {
            containerMain.parentNode.style.marginBottom = '';
            containerMain.removeChild(wrapperTable);
            createBtnMenu ();
        }
    })

    document.addEventListener('keydown', (event) => {
        if (event.keyCode === 27 && containerMain.childNodes[0].className === 'wrapper-table' && document.body.childNodes[document.body.childNodes.length-1].className != 'modal-wrapper') {
            console.log('1')
            containerMain.parentNode.style.marginBottom = '';
            containerMain.removeChild(containerMain.childNodes[0]);
            createBtnMenu ();
        }
    })

    playAudioClick ();
}

export {createScorePage};

