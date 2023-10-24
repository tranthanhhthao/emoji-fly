const mode = document.getElementById('mode');
const nightMode = document.getElementById('night-mode');
let isNight = false;

mode.addEventListener('click', () => {
    if (isNight === false) {
        isNight = true
    } else {
        isNight = false
    }

    if (isNight) {
        mode.innerHTML = 'night-time is now';
        nightMode.style.display = 'block';
    } else {
        mode.innerHTML = 'light mode on';
        nightMode.style.display = 'none';
    }
})