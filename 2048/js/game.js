import { modalWindow } from './modalgame.js';
import { playAudioClick, playMusic } from './settings.js';
import { removeBtnMenu, createBtnMenu  } from './menu.js'

const containerMain = document.querySelector('.container-main')
let field = [];
let record = 100;                                                     //ПОДВЯЗАТЬ РЕКОРД
let score = 0;
let nickName;
/////////////////////////////////////////////////////
//Create Nickname menu
function addNickName () {
    //Add a wrapper to menu of nickname
    const wrapperOfNickName = document.createElement('div');
    wrapperOfNickName.classList.add('wrapper-nickname')
    containerMain.append(wrapperOfNickName);

    //Add a input for nickname
    const inputName = document.createElement('input');
    inputName.classList.add('input-name');
    inputName.type = 'text';
    inputName.placeholder = 'Enter your nickname';
    inputName.id ='input-name';
    inputName.autofocus = true;
    inputName.autocomplete = 'off';
    inputName.pattern = '[A-Za-z0-9]{4,8}';
    inputName.title = 'Nickname must be in latin letters or numbers and between 4 to 8 characters in length';
    wrapperOfNickName.append(inputName);

    //Add a wrapper for btns of navigation
    const wrapperOfBtnNav = document.createElement('div');
    wrapperOfBtnNav.classList.add('wrapper-btn-navigation');
    wrapperOfNickName.append(wrapperOfBtnNav);

    //Add btns for navigation
    
    const btnForward = document.createElement('button');
    btnForward.classList.add('btn');
    btnForward.innerText = 'Start';
    wrapperOfBtnNav.append(btnForward);

    const btnBack = document.createElement('button');
    btnBack.classList.add('btn');
    btnBack.innerText = 'Back to menu'
    wrapperOfBtnNav.append(btnBack);

    playAudioClick ()
}

function addErrorTextPattern () {

    const errorText = document.createElement('div');
    errorText.className = 'error-text';
    errorText.innerText = 'Should be in latin letters or numbers and between 4 to 8 characters in length';
    errorText.id = 'Error-pattern'
    containerMain.childNodes[0].appendChild(errorText);
}


//Return to main menu or start game
containerMain.addEventListener('click', (event) => {
    if (event.target.innerText === 'Back to menu') {
        removeBtnMenu ();
        createBtnMenu ();
    } else if (event.target.innerText === 'Start') {
        if (containerMain.childNodes[0].childNodes[0].validity.patternMismatch === true || containerMain.childNodes[0].childNodes[0].value === '' ){
            addErrorTextPattern ();
        } else {
            const inputName = document.getElementById('input-name')
            nickName = inputName.value;
            removeBtnMenu ();
            gameStart ();
        }
        
    }
})


document.addEventListener('keydown', (event) => {
    if (event.keyCode === 27 && containerMain.childNodes[0].className === 'wrapper-nickname') {
        removeBtnMenu ();
        createBtnMenu ();
    }
})

containerMain.addEventListener('input', () => {
    if (containerMain.childNodes[0].childNodes[containerMain.childNodes[0].childNodes.length-1].innerText === 'Should be in latin letters or numbers and between 4 to 8 characters in length') {
        let errorText = document.getElementById('Error-pattern');
        errorText.remove();
    }
})











//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function gameStart () {

    const wrapperGame = document.createElement('div');
    wrapperGame.classList.add('wrapper-game');
    containerMain.append(wrapperGame);

    // const recordScore = document.createElement('div');
    // recordScore.classList.add('score');
    // recordScore.id = 'record';
    // recordScore.innerText = `Record: ${record}`
    // wrapperGame.append(recordScore);

    const yourScore = document.createElement('div');
    yourScore.classList.add('score');
    yourScore.id = 'score';
    yourScore.innerText = `Your score: ${score}`
    wrapperGame.append(yourScore);

    const fieldElement = document.createElement('div');
    fieldElement.classList.add('field');
    wrapperGame.append(fieldElement);
    
    for (let x = 0; x < 16; x++) {
            let cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.dataset.value = 0;
            field[x]= cellElement;
            fieldElement.append(cellElement);
    }

    const btnMenu = document.createElement('button');
    btnMenu.classList.add('btn');
    btnMenu.style.marginTop = '30px';
    btnMenu.innerText = 'Menu';
    wrapperGame.append(btnMenu);

    document.addEventListener('keydown', moveGame);
    randomNumber ();
    randomNumber ();
    playAudioClick ();
    playMusic ();

}

//Move right
function movetoRight () {
    for (let i = 0; i < 16; i++) {
        if (i % 4 === 0) {
            let lastOne;
            let lastTwo;
            let lastThree;
            let lastFour;

            if(field[i].innerText === '') {
                lastOne = 0;
            } else {
                lastOne = parseInt(field[i].innerText);
            }
            if(field[i+1].innerText === '') {
                lastTwo = 0;
            } else {
                lastTwo = parseInt(field[i+1].innerText);
            }
            if(field[i+2].innerText === '') {
                lastThree = 0;
            } else {
                lastThree = parseInt(field[i+2].innerText);
            }
            if(field[i+3].innerText === '') {
                lastFour = 0;
            } else {
                lastFour = parseInt(field[i+3].innerText);
            }

            let arr = [lastOne, lastTwo, lastThree, lastFour];
            let filter = arr.filter(num => num);
            let mis = 4 - filter.length; 
            let zero = Array(mis).fill(0);
            let newArr = zero.concat(filter);

            if (newArr[0]=== 0) {
                field[i].innerText = '';
            } else {
                field[i].innerText = newArr[0];
            }
            if (newArr[1]=== 0) {
                field[i+1].innerText = '';
            } else {
                field[i+1].innerText = newArr[1];
            }
            if (newArr[2]=== 0) {
                field[i+2].innerText = '';
            } else {
                field[i+2].innerText = newArr[2];
            }
            if (newArr[3]=== 0) {
                field[i+3].innerText = '';
            } else {
                field[i+3].innerText = newArr[3];
            }
        }
    }
}
//Move left
function movetoLeft () {
    for (let i = 0; i < 16; i++) {
        if (i % 4 === 0) {
            let lastOne;
            let lastTwo;
            let lastThree;
            let lastFour;

            if(field[i].innerText === '') {
                lastOne = 0;
            } else {
                lastOne = parseInt(field[i].innerText);
            }
            if(field[i+1].innerText === '') {
                lastTwo = 0;
            } else {
                lastTwo = parseInt(field[i+1].innerText);
            }
            if(field[i+2].innerText === '') {
                lastThree = 0;
            } else {
                lastThree = parseInt(field[i+2].innerText);
            }
            if(field[i+3].innerText === '') {
                lastFour = 0;
            } else {
                lastFour = parseInt(field[i+3].innerText);
            }

            let arr = [lastOne, lastTwo, lastThree, lastFour];
            let filter = arr.filter(num => num);
            let mis = 4 - filter.length; 
            let zero = Array(mis).fill(0);
            let newArr = filter.concat(zero);

            if (newArr[0]=== 0) {
                field[i].innerText = '';
            } else {
                field[i].innerText = newArr[0];
            }
            if (newArr[1]=== 0) {
                field[i+1].innerText = '';
            } else {
                field[i+1].innerText = newArr[1];
            }
            if (newArr[2]=== 0) {
                field[i+2].innerText = '';
            } else {
                field[i+2].innerText = newArr[2];
            }
            if (newArr[3]=== 0) {
                field[i+3].innerText = '';
            } else {
                field[i+3].innerText = newArr[3];
            }
        }
    }
}
//Move down
function moveToDown () {
    for (let i = 0; i < 4; i++) {
            let lastOne;
            let lastTwo;
            let lastThree;
            let lastFour;

            if(field[i].innerText === '') {
                lastOne = 0;
            } else {
                lastOne = parseInt(field[i].innerText);
            }
            if(field[i+4].innerText === '') {
                lastTwo = 0;
            } else {
                lastTwo = parseInt(field[i+4].innerText);
            }
            if(field[i+4*2].innerText === '') {
                lastThree = 0;
            } else {
                lastThree = parseInt(field[i+4*2].innerText);
            }
            if(field[i+4*3].innerText === '') {
                lastFour = 0;
            } else {
                lastFour = parseInt(field[i+4*3].innerText);
            }
            let arr = [lastOne, lastTwo, lastThree, lastFour];
            let filter = arr.filter(num => num);
            let mis = 4 - filter.length; 
            let zero = Array(mis).fill(0);
            let newArr = zero.concat(filter);
            if (newArr[0]=== 0) {
                field[i].innerText = '';
            } else {
                field[i].innerText = newArr[0];
            }
            if (newArr[1]=== 0) {
                field[i+4].innerText = '';
            } else {
                field[i+4].innerText = newArr[1];
            }
            if (newArr[2]=== 0) {
                field[i+4*2].innerText = '';
            } else {
                field[i+4*2].innerText = newArr[2];
            }
            if (newArr[3]=== 0) {
                field[i+4*3].innerText = '';
            } else {
                field[i+4*3].innerText = newArr[3];
            }
    }
}
//Move up
function moveToUp () {
    for (let i = 0; i < 4; i++) {
            let lastOne;
            let lastTwo;
            let lastThree;
            let lastFour;

            if(field[i].innerText === '') {
                lastOne = 0;
            } else {
                lastOne = parseInt(field[i].innerText);
            }
            if(field[i+4].innerText === '') {
                lastTwo = 0;
            } else {
                lastTwo = parseInt(field[i+4].innerText);
            }
            if(field[i+4*2].innerText === '') {
                lastThree = 0;
            } else {
                lastThree = parseInt(field[i+4*2].innerText);
            }
            if(field[i+4*3].innerText === '') {
                lastFour = 0;
            } else {
                lastFour = parseInt(field[i+4*3].innerText);
            }
            let arr = [lastOne, lastTwo, lastThree, lastFour];
            let filter = arr.filter(num => num);
            let mis = 4 - filter.length; 
            let zero = Array(mis).fill(0);
            let newArr = filter.concat(zero);
            if (newArr[0]=== 0) {
                field[i].innerText = '';
            } else {
                field[i].innerText = newArr[0];
            }
            if (newArr[1]=== 0) {
                field[i+4].innerText = '';
            } else {
                field[i+4].innerText = newArr[1];
            }
            if (newArr[2]=== 0) {
                field[i+4*2].innerText = '';
            } else {
                field[i+4*2].innerText = newArr[2];
            }
            if (newArr[3]=== 0) {
                field[i+4*3].innerText = '';
            } else {
                field[i+4*3].innerText = newArr[3];
            }
    }
}

// Added random number in field
function randomNumber () {

    let random = Math.floor(Math.random()*16);
    if (field[random].innerText === '') {
        let x = Math.random();
        if (x < 0.9) {
            field[random].innerText = 2;
        } else if (x >=0.9 && x <= 1) {
            field[random].innerText = 4;
        }
        color ()
        checkForLose ()

    } else {
        randomNumber ();
    }
    // color ()
}

//Sum elements in row
function sumElementsRow () {
    for (let i = 0; i < 15; i++) {
        if ((i % 4 != 3) && field[i].innerText === field[i+1].innerText) {
            let sum = parseInt(field[i].innerText) + parseInt(field[i+1].innerText);
            if (!isNaN(sum)) {
                score += sum;
                if (sum === 2048) {
                    showResultWin ();
                }
            }
            let scoreText = document.getElementById('score');
            scoreText.innerText = `Your score: ${score}`
            field[i].innerText = sum;
            field[i+1].innerText = '';
            
        }
    }
}
//Sum elements in column
function sumElementsCol () {

    for (let i = 0; i < 12; i++) {
        if (field[i].innerText === field[i+4].innerText) {
            let sum = parseInt(field[i].innerText) + parseInt(field[i+4].innerText);
            if (!isNaN(sum)) {
                score += sum;
                if (sum === 2048) {
                    showResultWin ();
                }
            }
            let scoreText = document.getElementById('score');
            scoreText.innerText = `Your score: ${score}`
            field[i].innerText = sum;
            field[i+4].innerText = '';
        }
    }
}

//Show relult WIN
function showResultWin () {

    const modalWrapper = document.createElement('div');
    modalWrapper.classList.add('modal-wrapper');
    modalWrapper.id = 'wrapper-result';
    document.body.appendChild(modalWrapper);

    const windowWrapper = document.createElement('div');
    windowWrapper.className = 'settings-menu'
    modalWrapper.appendChild(windowWrapper);

    const wrapperTextWin = document.createElement('div');
    wrapperTextWin.classList = 'wrapper-text-result';
    windowWrapper.appendChild(wrapperTextWin);

    const textWin = document.createElement('div');
    textWin.classList = 'text-result';
    textWin.innerText = 'Congratulations! You won!';
    wrapperTextWin.appendChild(textWin);

    const wrapperBtnResult = document.createElement('div');
    wrapperBtnResult.classList = 'wrapper-btn-results';
    windowWrapper.appendChild(wrapperBtnResult);

    const btnBackToGame = document.createElement('button');
    btnBackToGame.classList.add('btn');
    btnBackToGame.style.backgroundColor = '#f26739';
    btnBackToGame.innerText = 'Continue game';
    wrapperBtnResult.append(btnBackToGame);
    
    document.addEventListener('click', (event) => {
        if (event.target.innerText === 'Continue game') {
            const wrapperResultWin = document.getElementById('wrapper-result');
            wrapperResultWin.remove();
        }
    })
}

function showResultLose () {
    const modalWrapper = document.createElement('div');
    modalWrapper.classList.add('modal-wrapper');
    modalWrapper.id = 'wrapper-result';
    document.body.appendChild(modalWrapper);

    const windowWrapper = document.createElement('div');
    windowWrapper.className = 'settings-menu'
    modalWrapper.appendChild(windowWrapper);

    const wrapperTextWin = document.createElement('div');
    wrapperTextWin.classList = 'wrapper-text-result';
    windowWrapper.appendChild(wrapperTextWin);

    const textWin = document.createElement('div');
    textWin.classList = 'text-result';
    textWin.innerText = 'Game over. Try again!';
    wrapperTextWin.appendChild(textWin);

    const textResult = document.createElement('div');
    textResult.classList = 'text-result';
    textResult.innerText = `Your score: ${score}`;
    wrapperTextWin.appendChild(textResult);

    const wrapperBtnResult = document.createElement('div');
    wrapperBtnResult.classList = 'wrapper-btn-results';
    windowWrapper.appendChild(wrapperBtnResult);

    const btnTryAgain = document.createElement('button');
    btnTryAgain.classList.add('btn');
    btnTryAgain.style.backgroundColor = '#f26739';
    btnTryAgain.innerText = 'Reset';
    wrapperBtnResult.append(btnTryAgain);

    const btnBacktoMenu = document.createElement('button');
    btnBacktoMenu.classList.add('btn');
    btnBacktoMenu.style.backgroundColor = '#f26739';
    btnBacktoMenu.innerText = 'Back to menu';
    wrapperBtnResult.append(btnBacktoMenu);

    const data = JSON.parse(localStorage.getItem('dataSetting'));

    let x = data.try + 1;
    if (data.try > 9) {
        data.try = 0;
    } else {
        data.try = x;
    }
    console.log(Object.values(data.results))
    data.results[`${data.try} ${nickName}`] = `${score}`;
    localStorage.setItem('dataSetting', JSON.stringify(data));
    


}

function checkForLose () {  

    let i = 0;
    let r = 0;
    let c = 0;
    field.forEach((el) => {
    if (el.innerText != 0) {
        i++;
    }
    if (i === 16) {
        showResultLose ()
        document.removeEventListener('keydown', moveGame);
    }
    })
}

//Add move 

function moveGame () {
    if (event.keyCode === 39 || event.keyCode === 68 && containerMain.childNodes[0].className === 'wrapper-game') {
        movetoRight ();
        sumElementsRow ();
        movetoRight ();
        randomNumber ();
        color ()
    } else if (event.keyCode === 37 || event.keyCode === 65 && containerMain.childNodes[0].className === 'wrapper-game') {
        movetoLeft ();
        sumElementsRow ();
        movetoLeft ();
        randomNumber ();
        color ()
    } else if (event.keyCode === 38 || event.keyCode === 87 && containerMain.childNodes[0].className === 'wrapper-game') {
        moveToUp ();
        sumElementsCol ();
        moveToUp ();
        randomNumber ();
        color ()
    } else if (event.keyCode === 40 || event.keyCode === 83 && containerMain.childNodes[0].className === 'wrapper-game') {
        moveToDown ();
        sumElementsCol ();
        moveToDown ();
        randomNumber ();
        color ()
    }
}

function color () {
    field.forEach((el) => {
        if (el.innerText === '') {
            el.style.backgroundColor = '#292c33';
        } else if (el.innerText == 2) {
            el.style.backgroundColor = '#810699';
        } else if (el.innerText == 4) {
            el.style.backgroundColor = '#cc2165';
        } else if (el.innerText == 8) {
            el.style.backgroundColor = '#c28d08';
        } else if (el.innerText == 16) {
            el.style.backgroundColor = '#00b309';
        } else if (el.innerText == 32) {
            el.style.backgroundColor = '#0b73b0';
        } else if (el.innerText == 64) {
            el.style.backgroundColor = '#b30b35';
        } else if (el.innerText == 128) {
            el.style.backgroundColor = '#a65e07';
        } else if (el.innerText == 256) {
            el.style.backgroundColor = '#07a671';
        } else if (el.innerText == 512) {
            el.style.backgroundColor = '#0a0482';
        } else if (el.innerText == 1024) {
            el.style.backgroundColor = '#cc0606'; 
        } else if (el.innerText == 2048) {
            el.style.backgroundColor = '#a6008a';
        }
    })
}


containerMain.addEventListener('click', (event) => {
    if (event.target.innerText === 'Menu') {
        modalWindow ();
    }
})

export {gameStart, movetoRight, movetoLeft, moveToDown, moveToUp, randomNumber, sumElementsRow, sumElementsCol, addNickName};

// Поэтому я добавляю этот код function keyRight() {         
//     let previous = JSON.stringify(squares.map(num => num.innerHTML)) // получить числа в сетке         
//     moveRight();         
//     объединить ряд();         
//     переместить вправо();         
//     let nowo = JSON.stringify(squares.map(num => num.innerHTML)); // получить номер сетки, чтобы увидеть изменения         
//     if (previous != nowo) { // сравнить сетки, если что-то изменилось, сгенерировать новое число, в противном случае игрок должен выбрать другую клавишу со стрелкой             
//         generate();          }     }