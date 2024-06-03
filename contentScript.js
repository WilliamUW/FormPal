document.addEventListener("copy", () => {
    const selection = window.getSelection();
    if (selection) {
        console.log(`Copied text: ${selection.toString()}`);
    }
});
