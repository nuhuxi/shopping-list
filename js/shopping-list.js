$(document).ready(function() {
// these statements tell us the "state" of the user
    $("#addbutton").mouseup(function() {
      var addthisitem = $("#additeminput").val();
        $("#thelist").append("<li> item from add</li>");
    })
    $("#small-dumpster").mouseup(function() {
      var addthisitem = $("#additeminput").val();
      alert("Dumpster!");
    })
    $(document).keyup(function(event) {
      var addthisitem = $("#additeminput").val();
      if (event.keyCode === 13) {
		var newelement = "<li>"+addthisitem+"   <img src='images/small-trash-can.png' alt='trashcan'/></li>"; 
      	$("#thelist").append(newelement); 
		addthisitem="";
		$("#additeminput").val("");
        }      
    })
    $('form').submit(function(e){ e.preventDefault(); });



  });

