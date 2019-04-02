document.querySelector(".instruction_button").addEventListener('click', function () {
    document.querySelector('.instructions-container').classList.remove('no_show')
})


document.querySelector(".instruction_button").addEventListener('click', function () {
    document.querySelector('.splash').classList.add('no_show')
})



document.querySelector(".start_button").addEventListener('click', function () {
    document.querySelector(".gamepage").classList.remove('no_show')
})

document.querySelector(".start_button").addEventListener('click', function () {
    document.querySelector('.splash').classList.add('no_show')
})

document.querySelector(".back").addEventListener('click', function () {
    document.querySelector('.splash').classList.remove('no_show')
    document.querySelector('.instructions-container').classList.add('no_show')

})