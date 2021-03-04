var lastScale = '25';

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
    console.log('Value: ', request.value);
    if(typeof request.value !== 'undefined') {
        lastScale = request.value;
        document.getElementById('follow-video').style.setProperty('width', request.value+'rem');

    }
    sendResponse({return: "Received"});
}
);
