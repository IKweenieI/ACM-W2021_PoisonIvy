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
