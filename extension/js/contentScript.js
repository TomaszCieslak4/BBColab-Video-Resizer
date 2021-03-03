chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
    console.log('Value: ', request.value);
    if(typeof request.value !== 'undefined') {
        console.log(document.documentElement.style.getPropertyValue('--custom-width'));
        document.documentElement.style.setProperty('--custom-width',  request.value+'rem');
    }
    sendResponse({return: "Received"});
}
);
