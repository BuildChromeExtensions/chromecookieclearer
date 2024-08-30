chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message == 'cookies') {
        const name = window.prompt(`What cookie to delete? Enter ALL to remove all cookies.`);
        const url = window.location.href;

        if (name == "ALL") {
            
            // Send message to background script
            chrome.runtime.sendMessage({ action: "remove-all", url: url })
        } else if (name) {

            // Send message to background script
            chrome.runtime.sendMessage({
                action: "remove-cookie",
                name: name,
                url: url,
            })
        }

    }
})