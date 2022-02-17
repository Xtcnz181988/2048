// import * as menuJs from './js/menu.js';
// menuJs.createBtnMenu ();

const containerMain = document.querySelector('.container-main')

class Game {
    constructor (parentElement, size = 4) {

        let wrapperGame = document.createElement('div');
        wrapperGame.classList.add('wrapper-game');
        parentElement.append(wrapperGame);

        let fieldElement = document.createElement('div');
        fieldElement.classList.add('field');
        wrapperGame.append(fieldElement);

        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                let cellElement = document.createElement('div');
                cellElement.classList.add('cell');
                cellElement.dataset.id = `${x}${y}`;
                fieldElement.append(cellElement);
            }
        }

        for (let i = 0; i < 2; i++) {
            let xRandom = Math.floor(Math.random()*4);
			var yRandom = Math.floor(Math.random()*4);
            fieldElement.childNodes.forEach((el) => {
                if (el.dataset.id === `${xRandom}${yRandom}` && el.innerText === '') {
                    el.innerText = 2;
                }
            })
            
        }
    }
}
let game = new Game(containerMain);