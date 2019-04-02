var splash = document.querySelector('.splash')
var instruction = document.querySelector('.instructions-container')

document.querySelector(".instruction_button").addEventListener('click', function () {
    instruction.classList.remove('no_show')
    splash.classList.add('no_show')
})

document.querySelector(".start_button").addEventListener('click', function () {
    document.querySelector(".gamepage").classList.remove('no_show')
    splash.classList.add('no_show')
})

document.querySelector(".back").addEventListener('click', function () {
    splash.classList.remove('no_show')
    instruction.classList.add('no_show')
})