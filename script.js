let display = document.getElementById('toggle-on');
let hide = document.getElementById('close');
let dropDown = document.getElementById('drop-down')


const toggleOn = () => {
    dropDown.style.display = 'block';
}
const toggleOff = () => {
    dropDown.style.display = 'none';
}
display.addEventListener('click', toggleOn);
hide.addEventListener('click', toggleOff);
