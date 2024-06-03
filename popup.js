document.addEventListener('DOMContentLoaded', function() {
    chrome.runtime.sendMessage({type: "getCopiedText"}, response => {
        document.getElementById('copiedText').textContent = response.text;
    });
});
