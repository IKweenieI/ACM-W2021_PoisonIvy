function CSVstring_to_Array(data, delimiter = ',') {
    const titles = data.slice(0, data
        .indexOf('\n')).split(delimiter);
    const titleValues = data.slice(data
        .indexOf('\n') + 1).split('\n');
    const ansArray = titleValues.map(function (v) {
        const values = v.split(delimiter);
        const storeKeyValue = titles.reduce(
            function (obj, title, index) {
                obj[title] = values[index];
                return obj;
            }, {});
        return storeKeyValue;
    });
    return ansArray;
};
chrome.runtime.onInstalled.addListener(function(reason){
  $.ajax({
    url:'database_final.csv',
    type:'get',
    success:function(data){
      var dataset=CSVstring_to_Array(data);
      console.log(dataset);
      chrome.storage.local.set({
  list:dataset},function(){
    console.log("array stored");
  });
    }
  });
});


chrome.tabs.onUpdated.addListener(function(tabId, changedInfo, tab){
var newrl=changedInfo.url;
chrome.storage.local.get({
  list:[]
},
function(data){
    console.log(data.list);
    var checking=data.list;
    for(var i=0; i<(checking.length);i++){
      if(newrl==checking[i].company){
        var action=checking[i].activity;
        chrome.storage.local.get('cl', function(status){
            var switchStatus = status.cl;
            if(parseInt(action)==1 && switchStatus)
            {
        var URL = "http://127.0.0.1:8000/alrt1.html";
        window.open(URL, null);
      }
        });
        chrome.storage.local.get('ac',function(status){
          var switchStatus = status.ac;
          if(parseInt(action)==2 && switchStatus)
          {
            var URL = "http://127.0.0.1:8000/alrt2.html";
            window.open(URL, null);
          }
        });
      }
      }
});
});
chrome.storage.onChanged.addListener(function(changes, areaName){
    chrome.storage.local.get('cl', function(status){
        var switchStatus = status.cl;

        if(switchStatus) {
            $('#childLabour').prop('checked', true);
        } else {
            $('#childLabour').prop('checked', false);
        }
    });
});
chrome.storage.onChanged.addListener(function(changes, areaName){
    chrome.storage.local.get('ac', function(status){
        var switchStatus = status.ac;

        if(switchStatus) {
            $('#animalCruelty').prop('checked', true);
        } else {
            $('#animalCruelty').prop('checked', false);
        }
    });
});
chrome.storage.onChanged.addListener(function(changes, areaName){
    chrome.storage.local.get('ia', function(status){
        var switchStatus = status.ia;

        if(switchStatus) {
            $('#indianAlternatives').prop('checked', true);
        } else {
            $('#indianAlternatives').prop('checked', false);
        }
    });
});
