var addbuttonclicked = false;
var addthisitem = "";
var newelement = "";
var numitemsinlist = 1;

$(document).ready(function() {

// these statements tell us the "state" of the user
    $("#addbutton").mouseup(function() {
      addbuttonclicked="true";
		  userwantstoAdd();
    });
    $("#small-dumpster").mouseup(function() {
      removeAll();
    });
    $(document).keyup(function() {
      if (event.keyCode === 13) {
		    userwantstoAdd();}
  
    });

    $("#deletethisitem").mouseup(function() {
      alert("Hello world!");
    });

    $('form').submit(function(e){ e.preventDefault(); 
    });
  });



function userwantstoAdd() {
  if(numitemsinlist<8) {
      addthisitem = $("#additeminput").val();
      newelement = 
          "<li>"
          +addthisitem
          +"  <img id='deletethisitem' src='images/small-trash-can.png' alt='trashcan'/></li>"; 
      $("#thelist").append(newelement); 
      $("#additeminput").val("");
      numitemsinlist++;
  }
   else  {
    alert("Sorry. You can only put 7 items in the list.");	
          $("#additeminput").val("");
    }
  };
function removeAll() {
  $("#thelist").empty();
  numitemsinlist = 1;

}



