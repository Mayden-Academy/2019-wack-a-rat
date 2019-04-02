var rats = document.querySelectorAll('.rat')
var timer = 2
var counter = setInterval(timeDown, 1000) //1000 will run it every 1 second
var clock = document.querySelector('.clock')
var score = 0
var gameOver = document.querySelector('.game-over')
var finalScore = document.querySelector('.final-score')

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
 * TimeDown
 *Timer which counts down from 30 to 0 and then shows TIMES UP!
 * Expecting parametetr - timer ( the amount of seconds left)
 * @type {number} 
 */
function timeDown() {
  timer = timer - 1
  if (timer === 0) {
    clock.textContent = '0'
    hideRats(rats)
    showScore()
    clearInterval(counter)
  } else {
    clock.innerHTML = timer
  }
}

function showScore() {
  gameOver.classList.remove('hidden')
  gameOver.innerHTML = '<p>Game Over!</p><p class="final-score">Your score is ' + score + '</p>'
}
