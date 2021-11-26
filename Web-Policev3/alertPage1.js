try {

document.getElementById("btn-cont").addEventListener('click', function(){
window.open('','_self').close();
});
document.getElementById("btn-alt").addEventListener('click',function(){
chrome.storage.local.get('alt',function(stats){

  var URL=stats.alt;
  if(URL!=null || URL!=undefined)
  {
  window.open(URL,null);
}
});
});
}
catch(err)
{
  // no-action
}
