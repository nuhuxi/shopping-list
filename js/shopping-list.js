var addbuttonclicked = false;
var addthisitem = "";
var newelement = "";

$(document).ready(function() {
// these statements tell us the "state" of the user
    $("#addbutton").mouseup(function() {
      addbuttonclicked="true";
		  userwantstoAdd();
    });
    $("#small-dumpster").mouseup(function() {
      addthisitem = $("#additeminput").val();
      alert("Dumpster!");
    });
    $(document).keyup(function(event) {
      if (event.keyCode === 13) {
		    userwantstoAdd();}
  
    });
    $('form').submit(function(e){ e.preventDefault(); 
    });
  });



function userwantstoAdd() {
  addthisitem = $("#additeminput").val();
  newelement = "<li>"+addthisitem+"   <img src='images/small-trash-can.png' alt='trashcan'/></li>"; 
  $("#thelist").append(newelement); 
  $("#additeminput").val("");
  			
  };




