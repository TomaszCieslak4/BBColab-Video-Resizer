var slider = document.getElementById('width');
var output = document.getElementById('sliderVal');

output.innerHTML = slider.value;
slider.oninput = function() {
    output.innerHTML = slider.value;
    if(typeof slider.value !== 'undefined')
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {value: slider.value}, function(response) {
          console.log(response.return);
        });
      });
}
