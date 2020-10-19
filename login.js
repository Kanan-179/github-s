$(document).ready(function() {
  $("#submit").click(function() {
    if ($("#uname").val() !== "" || $("#pssw").val() !== "") {
      alert("Login succes");
    } else {
      alert("Fill out of fields");
    }
  });

    
let modal1 =  $("#id01");  
let modal2 =  $("#id02");  
    
$('#signupclose').click(function(){
    modal2.hide();
})    
    
    
$("#btn1").click(function(){
  modal1.toggle();
});
    
$("#btn2").click(function(){
  modal2.toggle();
});
    

    
});
    

