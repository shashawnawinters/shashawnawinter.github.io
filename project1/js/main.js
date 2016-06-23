var cards = shuffleIndexes(['blackrose.jpg', 'golden.jpeg', 'flower.jpg', 'fvl.jpg', 'nani.jpg', 'sequins2.jpg', 'blackrose.jpg', 'golden.jpeg', 'flower.jpg', 'fvl.jpg', 'nani.jpg', 'sequins2.jpg']);
var rowNumber = 0

cards.forEach(function(card, i) {
  if (i === 0 || i % 4 === 0) {
    $('#board').append('<div class="row" id="row' + i + '"></div>');
    rowNumber = i;
  }

  $('#row' + rowNumber).append('<div class="col-3"><img src="images/Jashton.JPG" width="100" data-card="' + card + '" /></div>');
})

// 1. Look up accessing data attributes with jQuery
// 2. Create a click handler for all images  $('#board').on(click, )
  // - Change src attribute of img tags
  // - Flip back over if no match

function shuffleIndexes(indexArray) {
  var random = 0;
  var temp = 0;
  for ( var i = 1; i < indexArray.length; i++) {
    random = Math.round(Math.random() * i);
    temp = indexArray[i];
    indexArray[i] = indexArray[random];
    indexArray[random] = temp;
  }

  return indexArray;
}


    
