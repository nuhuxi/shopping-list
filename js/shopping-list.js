$(document).ready(function() {
// these statements tell us the "state" of the user
    $("#addbutton").mousedown(function() {
      var addthisitem = $("#additeminput").val();
      alert(addthisitem);
      addanitemtothelist(addthisitem);
    })
    $("#small-dumpster").mousedown(function() {
      var addthisitem = $("#additeminput").val();
      alert("Dumpster!");
    })
    $(document).keydown(function(event) {
      var addthisitem = $("#additeminput").val();
      if (event.keyCode === 13) { 
        alert(addthisitem);}      
    })



  });

