var rats = document.querySelectorAll('.rat')
var clock = document.querySelector('.clock')
var timer = 30
var frequency = 1500
var score = 0
var gameLoopId

/**
 * When you click on a rat, it disappears.
 *
 * @param {Node} rat The rat that is clicked.
 */
function whack(rat) {
    rat.classList.add('hidden')
}

/**
 * When you click on a rat, a class of hidden is added to its DOM node.
 *
 * @param {Nodelist} rats The rats in the DOM to add whack click event
 */
function startWhacking(rats) {
    rats.forEach(function(rat) {
        rat.addEventListener('click', function() {
            whack(rat)
            addToScore()
        })
    })
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
* A function to add a point to the score and update the scoreboard.
 *
 */
function addToScore() {
    score += 1
    document.querySelector('.score').textContent = 'Rats - '+ score
}

/**
 * A function that randomly selects an item from an array
 *
 * @param {Array} array The array to pick from
 * @return {Item} An item from the array
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
 * as the gameClock increases, each 5 seconds, rat frequency increases/time periods decrease between rats
 * function creates a loop by calling showRat which calls back gameLoop
 */
function gameLoop() {
    if (timer % 5 === 0) {
        frequency -= 100
    }

    gameLoopId = setTimeout(showRat, frequency)
}

/**
 * Timer which counts down from 30 to 0 and then shows TIMES UP!
 * Expecting parametetr - timer ( the amount of seconds left)
 */
function countDown() {
    timer -= 1
    if (timer < 1) {
        clock.innerHTML = 'TIME\'S UP!'
        clearTimeout(gameLoopId)
        hideRats(rats)
    } else {
        clock.innerHTML = timer
    }
}

var startClock = function() {
    setInterval(countDown, 1000)
}

document.querySelector('.start_button').addEventListener('click', function() {
    startClock()
    startWhacking(rats)
    gameLoop()
})
