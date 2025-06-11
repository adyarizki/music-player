let currentMusic = 0;

const music = document.querySelector('.audio-js');

const seekBar= document.querySelector('.seek-bar-js');
const songName = document.querySelector('.music-name-js');
const artisName = document.querySelector('.artist-name-js');
const disk = document.querySelector('.disk-js');
const currentTime = document.querySelector('.current-time-js');
const musicDuration = document.querySelector('.song-duration-js');
const playBtn = document.querySelector('.play-btn-js');
const forwardBtn = document.querySelector('forward-btn-js');
const backwardBtn = document.querySelector('.backward-Btn-js');

playBtn.addEventListener('click', () => {
    playBtn.classList.toggle('pause');
})