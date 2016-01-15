$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var weather = $("select#weather").val();
    var water = $("select#water").val();
    var vibe = $("select#vibe").val();
    var family = $("select#family").val();
    var budget = $("select#budget").val();

    

    $('#ok').show();

      event.preventDefault();
   });

});
