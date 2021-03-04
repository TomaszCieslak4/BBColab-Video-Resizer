var slider = document.getElementById('width');
var check = document.getElementById('check');
var sliderVal = document.getElementById('sliderVal');
var currScale = "25";
var lastScale = "25";
sliderVal.innerHTML = "Enabled";

check.oninput = function() {
  checkVal = check.value;
  if (checkVal==='on') {
    check.value = 'off';
    sliderVal.innerHTML = '[Disabled]';
    slider.disabled = true;
    lastScale = currScale;
    currScale = '0';
    send('0');
  }
  else {
    check.value = 'on';
    sliderVal.innerHTML = '[Enabled]';
    slider.disabled = false;
    currScale = lastScale;
    send(currScale);
  }
  console.log(check.value);
}


slider.oninput = function() {
    lastScale = currScale;
    currScale = slider.value;
    sliderVal.innerHTML = '[Enabled]';
    if(typeof slider.value !== 'undefined') {
      send(slider.value);
  }
}


function send(val) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {value: val}, function(response) {
      console.log(response.return);
    });
  });

}