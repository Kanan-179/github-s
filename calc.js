$(document).ready(function localTimer(){
  var date = new Date();
  document.getElementById("demo").innerHTML = date.toLocaleTimeString();   
  var changeDate = setInterval(localTimer ,1000);
})

function inputVal(value){
    document.getElementById("inputValtext").value += value;    document.getElementById("inputValtext").style.color = 'black';
}

function allClear(){
    document.getElementById("inputValtext").value = '';
}

function calc() { 
    let x = document.getElementById("inputValtext").value;
    let y = eval(x); 
    document.getElementById("inputValtext").value = y;    
    document.getElementById("inputValtext").style.color = 'limegreen';    
}

function back() {
    var a = document.getElementById("inputValtext").value;
    document.getElementById("inputValtext").value = a.slice(0,-1);
}


 



 