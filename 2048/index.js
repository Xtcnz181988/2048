import { createBtnMenu } from './js/menu.js';
import { addAudioClickButton, addMusic } from './js/settings.js';


window.onload = () => {

    const data = JSON.stringify({
        'settings': {
            'sounds': 'on',
            'music': 'on'
        },
        'try': 0,
        'results': []
    })

    if (!localStorage.getItem('dataSetting')) {
        localStorage.clear();
        localStorage.setItem('dataSetting', data)
    }

    addAudioClickButton ();
    addMusic ();
    createBtnMenu ();
}





