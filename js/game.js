var rats = document.querySelectorAll('.rat')

/**
 * When you click on a rat, it disappears.
 *
 * @param {Node} rat The rat that is clicked.
 */
function whack(rat) {
  rat.classList.add('hidden')
}

/**
 * Hide all the rats.
 *
 * @param {Nodelist} rats All the rats.
 */
function hideRats(rats) {
    rats.forEach(function(rat) {
        rat.classList.add('hidden')
    })
}

/**
 * When the game starts, all rats are hidden
 *
 * @param rats All 6 rats
 */
document.querySelector('.start_button').addEventListener('click', function() {
    hideRats(rats)
})

rats.forEach(function(rat) {
  rat.addEventListener('click', function() {
    whack(rat)
  })
})