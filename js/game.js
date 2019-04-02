var rats = document.querySelectorAll('.rat');
var timer = 30;
var counter = setInterval(timeDown, 1000); //1000 will  run it every 1 second
var clock = document.querySelector('.clock')
/**
 * When you click on a rat, it disappears.
 *
 * @param {Node} rat The rat that is clicked.
 */
function whack(rat) {
  rat.classList.add('hidden');
}

rats.forEach(function(rat) {
  rat.addEventListener('click', function() {
    whack(rat);
  });
});

/**
 * TimeDown
 *Timer which counts down from 30 to 0 and then shows TIMES UP!
 * Expecting parametetr - timer ( the amount of seconds left)
 * @type {number}
 */

function timeDown() {
  timer = timer - 1
  if (timer === 0) {
     clock.innerHTML = 'TIMES UP!'
    clearInterval(counter)
  } else {
    clock.innerHTML = timer
  }
}

