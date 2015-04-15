$(document).ready(function(){
  $('button').on('click', function(){ //when you click on the button
    var entry = $('input').val(); //finds the value of what is entered into the box
    $('ul').append("<li>"+entry+"</li>");//adds entry to the list
  })
});
