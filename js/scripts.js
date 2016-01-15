$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var dateInput = $("input#date").val();
    var starttimeInput = $("input#starttime").val();
    var endtimeInput = $("input#endtime").val();

    $(".name").text(nameInput);
    $(".date").text(dateInput);
    $(".starttime").text(starttimeInput);
    $(".endtime").text(endtimeInput);

    $("#ok").show();

     event.preventDefault();
   });

   $("button#inverse").click(function() {
     $("body").toggleClass("black-background");
   });

});
