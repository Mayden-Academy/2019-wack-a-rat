var rats = document.querySelectorAll('.rat')
var timer
var clock
var score = 0

/**
 * When you click on a rat, it disappears.
 *
 * @param {Node} rat The rat that is clicked.
 */
function whack(rat) {
  rat.classList.add('hidden')
}

/**
 * Every time a rat is clicked, add 1 to the score.
 */
function scoreCount(){
  score += 1
  document.querySelector(".score").textContent = "Rats - "+ score
}

rats.forEach(function(rat) {
  rat.addEventListener('click', function() {
    whack(rat)
    scoreCount()
  })
})

/**
 * When the game starts, all rats are hidden
 *
 * @param rats All 6 rats
 */
document.querySelector('.start_button').addEventListener('click', function() {
  hideRats(rats)
})

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

