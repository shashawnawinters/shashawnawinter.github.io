console.log('Hello, I am working');

var cards         = ['blackrose', 'flower', 'fvl', 'golden', 'nani', 'sequins2'];
// cards = cards/concat(cards);
var pairs         = cards.concat(cards);
var chosenCards   = [];
var cardsToFlip   = [];

console.log(cards);

randomArray(pairs); // need to qrite this function

$('.back').each(function(i, element) {
  $(this).attr('cards', pairs[i]);
});

$('.flip-container').click(function() {
  console.log('click working')
});

function randomArray(pairs) { 
  for (var i = array.length - 1; i > 0; i--) {
    var  = Math.floor(Math.random() * (i + 1));
  }
  return 'I need to be implemented!';

}
