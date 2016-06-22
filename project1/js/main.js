console.log('Hello, I am working');

var cards         = ['blackrose', 'flower', 'fvl', 'golden', 'nani', 'sequins2'];
// cards = cards/concat(cards);
var pairs         = cards.concat(cards);
var chosenCards   = [];
var cardsToFlip   = [];
var cardsFlipped  = 0;

console.log(cards, '<--- My cards');
console.log(pairs, ' <--- My Pairs');
console.log('Below is the result of randomArray()...');
console.log(randomArray(pairs)) // need to qrite this function

$('.back').each(function(i, element) {
  $(this).attr('cards', pairs[i]);
});

$('.flip-container').click(function() {
  console.log('click working')
});


function randomArray(pairs) { 
  // 1. Generate a random number for every value in the `pairs` array
  // 2. Save each random number into an array
  // 3. Return the array you created

  var randomIndexes = [];


  pairs.forEach(function(pair, i) {
    randomIndexes.push(Math.floor(Math.random() * (i + 1)));
  });

  return randomIndexes;
} 
