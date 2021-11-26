document.getElementById("btn-cont").addEventListener('click', function(){
window.open('','_self').close();
});
document.getElementById("btn-alt").addEventListener('click',function(){
  var URL = "http://127.0.0.1:8000/alternatives.html";
  window.open(URL, null);
});
