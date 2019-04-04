var rats = document.querySelectorAll('.rat')
var clock = document.querySelector('.clock')
var gameOver = document.querySelector('.game-over')
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
 * A function to add a point to the score and update the scoreboard.
 */
function addToScore() {
    score += 1
    document.querySelector('.score').textContent = 'Rats - '+ score
}

/**
 * When you click on a rat, it is hidden and score is updated.
 *
 * @param {Nodelist} rats The rats in the DOM
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
 * A function that randomly selects an item from an array
 *
 * @param {Array} array The array to pick from
 * @return {Item} An item from the array
 */
function pickRandom(array) {
    return array[Math.floor(Math.random()*array.length)]
}

/**
 * A function that selects a random mole, displays it
 * and hides it after a defined period of time
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
 * As gameClock increases rat frequency increases
 * function creates a loop by calling showRat which calls back gameLoop
 */
function gameLoop() {
    if (timer % 5 === 0) {
        frequency -= 100
    }
    gameLoopId = setTimeout(showRat, frequency)
}

/**
 * A function to display the final score after the game is over.
 *
 */
function showFinalScore() {
    gameOver.classList.remove('hidden')
    gameOver.innerHTML = '<p>Game Over!</p><p class="final-score">You whacked ' + score + ' rats</p>'
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
 * Timer which counts down from 30 and then shows TIMES UP!
 */
function countDown() {
    timer -= 1
    if (timer < 1) {
        clock.innerHTML = 0
        clearTimeout(gameLoopId)
        hideRats(rats)
        showFinalScore()
    } else {
        clock.innerHTML = timer
    }
}

/**
 * A function that starts counting down the game clock.
 */
function startClock() {
    setInterval(countDown, 1000)
}

document.querySelector('.start_button').addEventListener('click', function() {
    startClock()
    startWhacking(rats)
    gameLoop()
})
