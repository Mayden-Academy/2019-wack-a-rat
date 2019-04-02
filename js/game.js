var rats = document.querySelectorAll('.rat')

/**
 * When you click on a rat, it disappears.
 *
 * @param {Node} rat The rat that is clicked.
 */
function whack(rat) {
  rat.classList.add('hidden')
}

rats.forEach(function(rat) {
  rat.addEventListener('click', function() {
    whack(rat)
  })
})

/**
 * When the game starts, all rats are hidden
 *
 * @param rats All 6 rats
 */
function hideAll(rats) {
  rats.classList.add('hidden')
}

rats.forEach(function(rat) {
  hideAll(rat)
})
// document.querySelector('.button').addEventListener('click', function() {
//
// })

//waiting for the linked buttons