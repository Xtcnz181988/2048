import { playAudioClick } from './settings.js';
function modalWindow () {

    const modalWrapper = document.createElement('div');
    modalWrapper.classList.add('modal-wrapper');
    document.body.appendChild(modalWrapper);

    const modalWindow = document.createElement('div');
    modalWindow.classList.add('modal-window');
    modalWrapper.appendChild(modalWindow);

    const modalTextWrapper = document.createElement('div');
    modalTextWrapper.classList.add('modal-text-wraper')
    modalWindow.append(modalTextWrapper);

    const modalText = document.createElement('div');
    modalText.classList.add('modal-text');
    modalText.innerText = 'Are you sure?'
    modalTextWrapper.append(modalText);

    const answerButtonsWrapper = document.createElement('div');
    answerButtonsWrapper.classList.add('answer-buttons-wrapper')
    modalWindow.append(answerButtonsWrapper);

    const btnNo = document.createElement('button');
    btnNo.classList.add('btn');
    btnNo.style.width = '150px'
    btnNo.innerText = 'No';
    answerButtonsWrapper.append(btnNo);

    const btnYes = document.createElement('button');
    btnYes.classList.add('btn');
    btnYes.style.width = '150px'
    btnYes.innerText = 'Yes';
    answerButtonsWrapper.append(btnYes);

    answerButtonsWrapper.addEventListener('click', (event) => {
        if (event.target.innerText === 'No') {
            document.body.removeChild(modalWrapper);
        } else if (event.target.innerText === 'Yes') {
            document.body.removeChild(modalWrapper);
        }
    })

    playAudioClick ()
}

export {modalWindow};