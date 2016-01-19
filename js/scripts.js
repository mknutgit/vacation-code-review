$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var weather = $("select#weather").val();
    var water = $("select#water").val();
    var vibe = $("select#vibe").val();
    var family = $("select#family").val();
    var budget = $("select#budget").val();

//-----Disney Land-----//
    if (weather === "Yes" && water === "No" && vibe === "Yes" && family === "Yes" && budget === "Yes") {
      $(".name").text(nameInput);
      $('#dl').show();
  }
      else if (weather === "Yes" && water === "No" && vibe === "Yes" && family === "No" && budget === "Yes") {
      $(".name").text(nameInput);
      $('#dl').show();
  }
    else if (weather === "Yes" && water === "No" && vibe === "No" && family === "Yes" && budget === "Yes") {
      $(".name").text(nameInput);
      $('#dl').show();
  }
    else if (weather === "Yes" && water === "No" && vibe === "No" && family === "No" && budget === "Yes") {
      $(".name").text(nameInput);
      $('#dl').show();
  }

  //-----Disney World-----//
    else if (weather === "Yes" && water === "No" && vibe === "Yes" && family === "Yes" && budget === "No") {
      $(".name").text(nameInput);
      $('#dw').show();
    }
    else if (weather === "Yes" && water === "No" && vibe === "No" && family === "No" && budget === "No") {
      $(".name").text(nameInput);
      $('#dw').show();
    }
    else if (weather === "Yes" && water === "No" && vibe === "No" && family === "Yes" && budget === "No") {
      $(".name").text(nameInput);
      $('#dw').show();
    }
    else if (weather === "Yes" && water === "No" && vibe === "Yes" && family === "No" && budget === "No") {
      $(".name").text(nameInput);
      $('#dw').show();
    }

    //-----Key West-----//
    else if (weather === "Yes" && water === "Yes" && vibe === "No" && family === "No" && budget === "Yes") {
      $(".name").text(nameInput);
      $('#kw').show();
    }
    else if (weather === "Yes" && water === "Yes" && vibe === "Yes" && family === "No" && budget === "Yes") {
      $(".name").text(nameInput);
      $('#kw').show();
    }
    else if (weather === "Yes" && water === "Yes" && vibe === "Yes" && family === "Yes" && budget === "Yes") {
      $(".name").text(nameInput);
      $('#kw').show();
    }
    else if (weather === "Yes" && water === "Yes" && vibe === "No" && family === "Yes" && budget === "Yes") {
      $(".name").text(nameInput);
      $('#kw').show();
    }
    //-----Ibiza-----//
    else if (weather === "Yes" && water === "Yes" && vibe === "Yes" && family === "No" && budget === "No") {
      $(".name").text(nameInput);
      $('#ibiza').show();
    }
    else if (weather === "Yes" && water === "Yes" && vibe === "No" && family === "Yes" && budget === "No") {
      $(".name").text(nameInput);
      $('#ibiza').show();
    }
    else if (weather === "Yes" && water === "Yes" && vibe === "No" && family === "No" && budget === "No") {
      $(".name").text(nameInput);
      $('#ibiza').show();
    }
    else if (weather === "Yes" && water === "Yes" && vibe === "Yes" && family === "Yes" && budget === "No") {
      $(".name").text(nameInput);
      $('#ibiza').show();
    }
    //-----Vancouver BC-----//
    else if (weather === "No" && water === "Yes" && vibe === "Yes" && family === "Yes" && budget === "Yes") {
      $(".name").text(nameInput);
      $('#vancouver').show();
    }
    else if (weather === "No" && water === "Yes" && vibe === "No" && family === "Yes" && budget === "Yes") {
      $(".name").text(nameInput);
      $('#vancouver').show();
    }
    else if (weather === "No" && water === "Yes" && vibe === "Yes" && family === "No" && budget === "Yes") {
      $(".name").text(nameInput);
      $('#vancouver').show();
    }
    else if (weather === "No" && water === "Yes" && vibe === "No" && family === "No" && budget === "Yes") {
      $(".name").text(nameInput);
      $('#vancouver').show();
    }
    //-----Mt Hood-----//
    else if (weather === "No" && water === "No" && vibe === "No" && family === "Yes" && budget === "Yes") {
      $(".name").text(nameInput);
      $('#mthood').show();
    }
    else if (weather === "No" && water === "No" && vibe === "No" && family === "No" && budget === "Yes") {
      $(".name").text(nameInput);
      $('#mthood').show();
    }
    else if (weather === "No" && water === "No" && vibe === "Yes" && family === "No" && budget === "Yes") {
      $(".name").text(nameInput);
      $('#kmthood').show();
    }
    else if (weather === "No" && water === "No" && vibe === "Yes" && family === "Yes" && budget === "Yes") {
      $(".name").text(nameInput);
      $('#mthood').show();
    }
    //-----Amsterdam-----//
    else if (weather === "No" && water === "Yes" && vibe === "Yes" && family === "Yes" && budget === "No") {
      $(".name").text(nameInput);
      $('#amsterdam').show();
    }
    else if (weather === "No" && water === "Yes" && vibe === "Yes" && family === "No" && budget === "No") {
      $(".name").text(nameInput);
      $('#amsterdam').show();
    }
    else if (weather === "No" && water === "Yes" && vibe === "No" && family === "No" && budget === "No") {
      $(".name").text(nameInput);
      $('#amsterdam').show();
    }
    else if (weather === "No" && water === "Yes" && vibe === "Yes" && family === "Yes" && budget === "No") {
      $(".name").text(nameInput);
      $('#amsterdam').show();
    }
    //-----Whistler-----//
    else if (weather === "No" && water === "No" && vibe === "Yes" && family === "Yes" && budget === "No") {
      $(".name").text(nameInput);
      $('#whistler').show();
    }
    else if (weather === "No" && water === "No" && vibe === "Yes" && family === "No" && budget === "No") {
      $(".name").text(nameInput);
      $('#whistler').show();
    }
    else if (weather === "No" && water === "No" && vibe === "No" && family === "No" && budget === "No") {
      $(".name").text(nameInput);
      $('#whistler').show();
    }
    else if (weather === "No" && water === "No" && vibe === "No" && family === "Yes" && budget === "No") {
      $(".name").text(nameInput);
      $('#whistler').show();
    }


  event.preventDefault();
   });
});
