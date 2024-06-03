let lastCopiedText = '';

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === "copy") {
        lastCopiedText = request.text;
    }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === "getCopiedText") {
        sendResponse({text: lastCopiedText});
    }
});
