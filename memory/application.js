$(document).ready(function(){
  var card_array = ["blue", "blue", "red", "red", "yellow", "yellow", "green", "green", "orange", "orange", "purple", "purple", "white", "white", "pink", "pink", "brown", "brown", "magenta", "magenta"]

  for(i in card_array){
    $('#card_holder').append('<div class="card"><p>'+card_array[i]+'</p></div>');
  }
  $('.card').click(function(){
    $(this).find('p').css("opacity", 1);
  });
});
