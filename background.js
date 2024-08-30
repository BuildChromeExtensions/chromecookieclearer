
// When the action icon on the toolbar is clicked
chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.sendMessage(tab.id, 'cookies');
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action == 'remove-cookie') {

        // remove 
        chrome.cookies.remove({ url: message.url, name: message.name, }, (cookie) => {
            console.log(cookie);
        });

    } else if (message.action == 'remove-all') {

        // remove the those cookies
        chrome.cookies.getAll({ url: message.url }, (cookies) => {
            for (const cookie of cookies) {
                chrome.cookies.remove({ url: message.url, name: cookie.name, });
            }
        });
        
    }
})


// When a cookie changes
chrome.cookies.onChanged.addListener((data) => {
    // console.log(data);
});

