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

rats.forEach(function(rat) {
  rat.addEventListener('click', function() {
    whack(rat)
  })
})

/**
 * this function randomises between the times entered
 * @param times (amount of time)
 * @returns one of the times entered at random
 */
function random_time(times) {
  return times[Math.floor(Math.random()*times.length)];
}

/**
 * function selects random mole displays it and hides it after a defined period of time
 */
function showRat(){
    var rats = document.querySelectorAll('.rat.hidden')
    if (rats.length > 0 ) {
        var randomRat = rats[Math.floor(Math.random() * rats.length)]
        randomRat.classList.remove('hidden')
        var time = [3000, 2000, 1000];

        setTimeout(function () {
            randomRat.classList.add('hidden')
        }, random_time(time))
    }
    gameLoop()
}

/**
 * keeps track of time
 * @returns increments of 1 to a value
 */
function gameClock() {
    gameTimer = gameTimer + 1
    return gameTimer
}

/**
 * as the gameClock increases, each 5 seconds, rat frequency increases/time periods decrease between rats
 * function creates a loop by calling showRat which calls back gameLoop
 */

function gameLoop(){
    if (gameTimer % 5 === 0) {
     frequency = frequency - 100
    }

    setTimeout(showRat, frequency)
}

document.querySelector('.start_button').addEventListener('click', function() {
    setInterval(gameClock, 1000)
    gameLoop()
})


