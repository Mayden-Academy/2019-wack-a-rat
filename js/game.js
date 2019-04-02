var rats = document.querySelectorAll('.rat')
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

function hideRats(rats) {
    rats.forEach(function(rat) {
        rat.classList.add('hidden')
    })
}

/**
 * Timer
 *Timer which counts from 30 to 0 and then shows TIMES UP!
 * @type {number}
 */
var count = 30;

var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

function timer() {
  count = count - 1
  if (count === 0) {
    document.querySelector('.clock').innerHTML = 'TIME\'S UP!'
    hideRats(rats);
    clearInterval(counter)
  } else {
    document.querySelector('.clock').innerHTML = count
  }
}
