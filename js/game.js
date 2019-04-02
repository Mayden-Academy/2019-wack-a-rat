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


/**
 * This function selects a rat at random and if it already has a hidden state then it removes the hidden state
 * @param rat rat selected from query Selector
 */
// function randomRat (rat) {
//   var randomRat = rat[Math.floor(Math.random() * rat.length)]
//   if (randomRat.classList.contains('hidden')){
//     randomRat.classList.remove('hidden')
//   }
// }
//
//  randomRat(rats)


setInterval(function(){
  var rats = document.querySelectorAll('.rat.hidden')
  if (rats.length > 0 ) {
    var randomRat = rats[Math.floor(Math.random() * rats.length)]
    randomRat.classList.remove('hidden')
    setTimeout(function () {
      randomRat.classList.add('hidden')
    }, 1000)
  }

},2000)

