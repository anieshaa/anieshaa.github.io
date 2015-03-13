$(document).ready(function(){
  var card_array = ["blue", "blue", "red", "red", "yellow", "yellow", "green", "green", "orange", "orange", "purple", "purple", "white", "white", "pink", "pink", "brown", "brown", "magenta", "magenta"]
  
var click_count = 0;
  for(i in card_array){ //creates the cards
    $('#card_holder').append('<div class="card"><p>'+card_array[i]+'</p></div>');
  }
  $('.card').click(function(){ //when card is clicked...
  if (click_count == 0){
    $(this).find('p').css("opacity", 1); // shows whats behind the card
    click_count = 1;
     }
     else{
       
     }
  });
});
