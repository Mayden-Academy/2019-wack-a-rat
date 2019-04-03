var rats = document.querySelectorAll('.rat')
var gameTimer = 0
var frequency = 1500

/**
 * When you click on a rat, it disappears.
 *
 * @param {Node} rat The rat that is clicked.
 */
function whack(rat) {
  rat.classList.add('hidden')
}

/**
 * When you click on a rat, it disappears / gets whacked.
 *
 * @param {Nodelist} rats The rats in the DOM to add whack click event
 */
function startWhacking(rats) {
  rats.forEach(function(rat) {
    rat.addEventListener('click', function() {
      whack(rat)
    })
  })
}

/**
 * A function that randomly selects an item from an array
 * 
 * @param {Array} array The array to pick from
 * @returns {Item} An item from the array
 */
function pickRandom(array) {
  return array[Math.floor(Math.random()*array.length)]
}

/**
 * function selects random mole displays it and hides it after a defined period of time
 */
function showRat() {
  var hiddenRats = document.querySelectorAll('.rat.hidden')
  if (hiddenRats.length > 0) {
    var randomRat = pickRandom(rats)
    var time = [3000, 2000, 1000]
    randomRat.classList.remove('hidden')
        
    setTimeout(function() {
      randomRat.classList.add('hidden')
    }, pickRandom(time))
  }
  gameLoop()
}

/**
 * A function that keeps track of the game clock
 * @returns gameTimer plus 1
 */
function gameClock() {
  gameTimer += 1
}

/**
 * as the gameClock increases, each 5 seconds, rat frequency increases/time periods decrease between rats
 * function creates a loop by calling showRat which calls back gameLoop
 */
function gameLoop() {
  if (gameTimer % 5 === 0) {
    frequency -= 100
  }

  setTimeout(showRat, frequency)
}

document.querySelector('.start_button').addEventListener('click', function() {
  setInterval(gameClock, 1000)
  startWhacking(rats)
  gameLoop()
})
