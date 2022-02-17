const containerMain = document.querySelector('.container-main');
console.log(containerMain);
function createBtnMenu () {
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
}

//Remove menu 
function removeBtnMenu () {
    containerMain.removeChild(containerMain.childNodes[0]);
}

// Listener for chouse next step after menu
containerMain.addEventListener('click', (event) => {
    if (event.target.innerText === 'New game') {
    console.log('New Game');
    removeBtnMenu ();
    addNickName ();
    } else if (event.target.innerText === 'Score') {
    console.log('Score');
    removeBtnMenu ();
    } else if (event.target.innerText === 'Settings') {
    console.log('Settings');
    removeBtnMenu ();
    }
});

//Create Nickname menu
function addNickName () {
    //Add a wrapper to menu of nickname
    const wrapperOfNickName = document.createElement('div');
    wrapperOfNickName.classList.add('wrapper-nickname')
    containerMain.append(wrapperOfNickName);

    //Add a input for nickname
    const inputName = document.createElement('input')
    inputName.classList.add('input-name');
    inputName.type = 'text';
    inputName.placeholder = 'Enter your nickname'
    inputName.autofocus = true;
    inputName.autocomplete = false;
    inputName.pattern = '[A-Za-zА-Яа-яЁё]{4,8}';
    inputName.title = 'LFLFLFFLF';
    wrapperOfNickName.append(inputName);

    //Add a wrapper for btns of navigation
    const wrapperOfBtnNav = document.createElement('div');
    wrapperOfBtnNav.classList.add('wrapper-btn-navigation');
    wrapperOfNickName.append(wrapperOfBtnNav);

    //Add btns for navigation
    const btnBack = document.createElement('button');
    btnBack.classList.add('btn-navigation');
    btnBack.dataset.turn = 'back'
    btnBack.style.backgroundImage = `url('./assets/svg/back.svg')`;
    wrapperOfBtnNav.append(btnBack);

    const btnForward = document.createElement('button');
    btnForward.classList.add('btn-navigation');
    btnForward.dataset.turn = 'forward'
    btnForward.style.backgroundImage = `url(./assets/svg/forward.svg)`;
    wrapperOfBtnNav.append(btnForward);
}
//Return to main menu
containerMain.addEventListener('click', (event) => {
    if (event.target.dataset.turn === 'back') {
        removeBtnMenu ();
        createBtnMenu ();
    }
})

document.addEventListener('keydown', (event) => {
    console.log(containerMain.childNodes[0])
    if (event.keyCode === 27 && containerMain.childNodes[0].className === 'wrapper-nickname') {
        removeBtnMenu ();
        createBtnMenu ();
    }
})

containerMain.addEventListener('input', (event) => {
    console.log(event);
    if (containerMain.childNodes[0].childNodes[0].value === '') {
        console.log('пусто')
    }
})

containerMain.addEventListener('click', (event) => {
    if (event.target.dataset.turn === 'forward' && containerMain.childNodes[0].childNodes[0].value === '') {
        // removeBtnMenu ();
        console.log('пусто')
    }
})

// function checkNickName () {
//     if()
// }

export {createBtnMenu};