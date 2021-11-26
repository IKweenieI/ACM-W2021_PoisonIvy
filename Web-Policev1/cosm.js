$(function(){
  var msg="";
  chrome.storage.local.get('c1',function(stats)
{
  var c1status=stats.c1;
  if(c1status){
    alert("This brand employs child labourers,are you sure you would like to continue using it ?");
  }
  chrome.storage.local.get('ia',function(stat){
    var iastatus=stat.ia;
    if(iastatus)
    {
      alert("This brand employs child labourers. Here are some indian alternative: https://www.disguisecosmetics.com https://rubysorganics.in/ https://www.soultree.in/ https://www.forestessentialsindia.com/ https://barenecessities.in/ https://www.justherbs.in/");
    }
  });
});
});
