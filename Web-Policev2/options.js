
$(function() {
    $("#childLabour").on('change', function(e) {
        if (e.target.checked){
            chrome.storage.local.set({'cl': true}, function(){
            });
        } else {
            chrome.storage.local.set({'cl': false}, function(){
            });
        }
    });

    chrome.storage.local.get('cl', function(status){
        var switchStatus = status.cl;

        if(switchStatus) {
            $('#childLabour').prop('checked', true);
        } else {
            $('#childLabour').prop('checked', false);
        }
    });
    $("#animalCruelty").on('change', function(e) {
        if (e.target.checked){
            chrome.storage.local.set({'ac': true}, function(){
            });
        } else {
            chrome.storage.local.set({'ac': false}, function(){
            });
        }
    });

    chrome.storage.local.get('ac', function(status){
        var switchStatus = status.ac;

        if(switchStatus) {
            $('#animalCruelty').prop('checked', true);
        } else {
            $('#animalCruelty').prop('checked', false);
        }
    });
    $("#indianAlternatives").on('change', function(e) {
        if (e.target.checked){
            chrome.storage.local.set({'ia': true}, function(){
            });
        } else {
            chrome.storage.local.set({'ia': false}, function(){
            });
        }
    });
    
    chrome.storage.local.get('ia', function(status){
        var switchStatus = status.ia;

        if(switchStatus) {
            $('#indianAlternatives').prop('checked', true);
        } else {
            $('#indianAlternatives').prop('checked', false);
        }
    });
});
