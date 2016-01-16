$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var weather = $("select#weather").val();
    var water = $("select#water").val();
    var vibe = $("select#vibe").val();
    var family = $("select#family").val();
    var budget = $("select#budget").val();



      if (weather === "Yes" && water === "No" && vibe === "Yes" && family === "Yes" && budget === "Yes") {
      $(".name").text(nameInput);
      $('#dl').show();
  }

      else if (weather === "Yes" && water === "No" && vibe === "Yes" && family === "Yes" && budget === "No") {
      $(".name").text(nameInput);
      $('#dw').show();
}

      else (weather === "No" && water === "No" && vibe === "Yes" && family === "Yes" && budget === "Yes") {
      $(".name").text(nameInput);
      $('#vancouver').show();
}


  event.preventDefault();
   });
});
