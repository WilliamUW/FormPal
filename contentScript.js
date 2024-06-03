document.addEventListener("copy", () => {
    const selection = window.getSelection();
    if (selection) {
        chrome.runtime.sendMessage({type: "copy", text: selection.toString()});
    }
});
