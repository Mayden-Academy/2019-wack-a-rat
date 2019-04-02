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

