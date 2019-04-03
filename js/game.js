var rats = document.querySelectorAll('.rat');

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

function random_time(time) {
  return time[Math.floor(Math.random()*time.length)];
}

/**
 * function selects random mole displays it and hides it after a defined period of time
 */
setInterval(function(){
  var rats = document.querySelectorAll('.rat.hidden')
  if (rats.length > 0 ) {
    var randomRat = rats[Math.floor(Math.random() * rats.length)]
    randomRat.classList.remove('hidden')
    var time = [3000, 2000, 1000];

    setTimeout(function () {
      randomRat.classList.add('hidden')
    }, random_time(time))
  }
},1000)




