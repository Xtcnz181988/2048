const containerMain = document.querySelector('.container-main')

function addAudioClickButton () {
    
    const hoverBtn = document.createElement('audio');
    hoverBtn.src = './assets/sounds/click.mp3'
    hoverBtn.id = 'audio'
    hoverBtn.autoplay = true;
    document.body.append(hoverBtn);

}

function playAudioClick () {
    let btnHover = document.getElementsByClassName('btn');
    let hoverBtn = document.getElementById('audio')
    for (let i = 0; i < btnHover.length; i++) {
        let btn = btnHover[i];
        btn.addEventListener('click', () => {
            hoverBtn.play();
        })
    }    
}

function addMusic () {
    const music = document.createElement('audio');
    music.src = './assets/music/Aurora_Rochez_-_Relaxing_Ambient_Soundscapes__6.mp3'
    music.id = 'music'
    music.loop = 'loop'
    music.autoplay = false;
    music.volume = 0.3;
    document.body.append(music);
}

function playMusic () {
    let music = document.getElementById('music')
    music.play();
}

function stopMusic () {
    let music = document.getElementById('music')
    music.pause();
    music.currentTime = 0;
}

function addSettingsMenu () {

    const dataSettings = JSON.parse(localStorage.getItem('dataSetting'));


    const wrapperSettingsMenu = document.createElement('div');
    wrapperSettingsMenu.className = 'wrapper-setting-menu';
    containerMain.appendChild(wrapperSettingsMenu);

    const settingsMenu = document.createElement('div')
    settingsMenu.className = 'settings-menu'
    wrapperSettingsMenu.appendChild(settingsMenu);


    const wrapperSound = document.createElement('div');
    wrapperSound.className = 'wrapper-sound';
    settingsMenu.appendChild(wrapperSound);

    const wrapperMusic = document.createElement('div');
    wrapperMusic.className = 'wrapper-sound';
    settingsMenu.appendChild(wrapperMusic);
    
    const wraperBtnBackToMenu = document.createElement('div')
    wraperBtnBackToMenu.className = 'wrapper-btn-back-menu'
    settingsMenu.appendChild(wraperBtnBackToMenu);

    const btnBackMenu = document.createElement('button');
    btnBackMenu.className = 'btn';
    btnBackMenu.style.backgroundColor = '#f26739';
    btnBackMenu.innerText = 'Back to menu';
    wraperBtnBackToMenu.appendChild(btnBackMenu);

    const soundSettings = document.createElement('div');
    soundSettings.className = 'sound-settings'
    wrapperSound.appendChild(soundSettings);

    const soundText = document.createElement('div')
    soundText.className = 'sound-text';
    soundText.innerText = 'Sounds';
    wrapperSound.appendChild(soundText);

    const wrapperBtnSounds = document.createElement('div');
    wrapperBtnSounds.className = 'wrapper-btn-sounds';
    wrapperSound.appendChild(wrapperBtnSounds);

    const btnSoundsOn = document.createElement('button');
    btnSoundsOn.className = 'btn';
    console.log(dataSettings)
    if (dataSettings.settings.sounds === 'on') {
        btnSoundsOn.style.color = '#f26739';
        btnSoundsOn.style.backgroundColor = '#ffffff';
    } else {
        btnSoundsOn.style.color = '#ffffff';
        btnSoundsOn.style.backgroundColor = '#f26739';
    }
    btnSoundsOn.style.width = '100px'
    btnSoundsOn.innerText = 'On';
    wrapperBtnSounds.appendChild(btnSoundsOn);

    const btnSoundsOff = document.createElement('button');
    btnSoundsOff.className = 'btn';
    if (dataSettings.settings.sounds === 'off') {
        btnSoundsOff.style.color = '#f26739';
        btnSoundsOff.style.backgroundColor = '#ffffff';
    } else {
        btnSoundsOff.style.color = '#ffffff';
        btnSoundsOff.style.backgroundColor = '#f26739';
    }
    btnSoundsOff.style.width = '100px'
    btnSoundsOff.innerText = 'Off';
    wrapperBtnSounds.appendChild(btnSoundsOff);

    const musicSettings = document.createElement('div');
    musicSettings.className = 'sound-settings'
    wrapperMusic.appendChild(musicSettings);

    const musicText = document.createElement('div')
    musicText.className = 'sound-text';
    musicText.innerText = 'Music';
    wrapperMusic.appendChild(musicText);

    const wrapperBtnMusic = document.createElement('div');
    wrapperBtnMusic.className = 'wrapper-btn-sounds';
    wrapperMusic.appendChild(wrapperBtnMusic);

    const btnMusicOn = document.createElement('button');
    btnMusicOn.className = 'btn';
    if (dataSettings.settings.music === 'on') {
        btnMusicOn.style.color = '#f26739';
        btnMusicOn.style.backgroundColor = '#ffffff';
    } else {
        btnMusicOn.style.color = '#ffffff';
        btnMusicOn.style.backgroundColor = '#f26739';
    }
    btnMusicOn.style.width = '100px'
    btnMusicOn.innerText = 'On';
    wrapperBtnMusic.appendChild(btnMusicOn);

    const btnMusicOff = document.createElement('button');
    btnMusicOff.className = 'btn';
    if (dataSettings.settings.music === 'off') {
        btnMusicOff.style.color = '#f26739';
        btnMusicOff.style.backgroundColor = '#ffffff';
    } else {
        btnMusicOff.style.color = '#ffffff';
        btnMusicOff.style.backgroundColor = '#f26739';
    }
    btnMusicOff.style.width = '100px'
    btnMusicOff.innerText = 'Off';
    wrapperBtnMusic.appendChild(btnMusicOff);


    wrapperBtnSounds.addEventListener('click', (event) => {



        if (event.target.innerText === 'On') {

            dataSettings.settings.sounds = 'on';


            btnSoundsOn.style.color = '#f26739';
            btnSoundsOn.style.backgroundColor = '#ffffff';
            const soundsMuted = document.getElementById('audio');
            soundsMuted.muted = false;
            btnSoundsOff.style.color = '#ffffff';
            btnSoundsOff.style.backgroundColor = '#f26739';
        } else if (event.target.innerText === 'Off') {

            dataSettings.settings.sounds = 'off';

            btnSoundsOff.style.color = '#f26739';
            btnSoundsOff.style.backgroundColor = '#ffffff';
            const soundsMuted = document.getElementById('audio');
            soundsMuted.muted = true;
            btnSoundsOn.style.color = '#ffffff';
            btnSoundsOn.style.backgroundColor = '#f26739';
        }
        localStorage.setItem('dataSetting', JSON.stringify(dataSettings));
    })

    wrapperBtnMusic.addEventListener('click', (event) => {
        
        if (event.target.innerText === 'On') {

            dataSettings.settings.music = 'on';

            btnMusicOn.style.color = '#f26739';
            btnMusicOn.style.backgroundColor = '#ffffff';
            const musicMuted = document.getElementById('music');
            musicMuted.muted = false;
            btnMusicOff.style.color = '#ffffff';
            btnMusicOff.style.backgroundColor = '#f26739';
        } else if (event.target.innerText === 'Off') {

            dataSettings.settings.music = 'off';

            btnMusicOff.style.color = '#f26739';
            btnMusicOff.style.backgroundColor = '#ffffff';
            const musicMuted = document.getElementById('music');
            musicMuted.muted = true;
            btnMusicOn.style.color = '#ffffff';
            btnMusicOn.style.backgroundColor = '#f26739';
        }
        localStorage.setItem('dataSetting', JSON.stringify(dataSettings));
    })

    playAudioClick ();
}

export {addAudioClickButton, playAudioClick, addMusic, playMusic, stopMusic, addSettingsMenu };