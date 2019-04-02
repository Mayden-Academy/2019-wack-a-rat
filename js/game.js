var rats = document.querySelectorAll('.rat');
var timer = 30;
var counter = setInterval(timeDown, 1000); //1000 will  run it every 1 second
var clock = document.querySelector('.clock')
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
 * Hide all the rats.
 *
 * @param {Nodelist} rats All the rats.
 *//
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

function timer() {
  count = count - 1
  if (count === 0) {
    document.querySelector('.clock').innerHTML = 'TIME\'S UP!'
    hideRats(rats);
    clearInterval(counter)
  } else {
    clock.innerHTML = timer
  }
}
