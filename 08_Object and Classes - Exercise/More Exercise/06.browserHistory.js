function manageBrowserHistory(browser, actions) {
    for (let action of actions) {
        let [command, site] = action.split(" ");

        if (command === "Open") {
            browser["Open Tabs"].push(site);
            browser["Browser Logs"].push(action);
        } else if (command === "Close") {
            if (browser["Open Tabs"].includes(site)) {
                browser["Open Tabs"] = browser["Open Tabs"].filter((tab) => tab !== site);
                browser["Recently Closed"].push(site);
                browser["Browser Logs"].push(action);
            }
        } else if (action === "Clear History and Cache") {
            browser["Open Tabs"] = [];
            browser["Recently Closed"] = [];
            browser["Browser Logs"] = [];
        }
    }

    console.log(browser["Browser Name"]);
    console.log(`Open Tabs: ${browser["Open Tabs"].join(", ")}`);
    console.log(`Recently Closed: ${browser["Recently Closed"].join(", ")}`);
    console.log(`Browser Logs: ${browser["Browser Logs"].join(", ")}`);
}

// Example Usage
manageBrowserHistory(
    {
        "Browser Name": "Google Chrome",
        "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
        "Recently Closed": ["Yahoo", "Gmail"],
        "Browser Logs": [
            "Open YouTube",
            "Open Yahoo",
            "Open Google Translate",
            "Close Yahoo",
            "Open Gmail",
            "Close Gmail",
            "Open Facebook",
        ],
    },
    ["Close Facebook", "Open StackOverFlow", "Open Google"]
);

manageBrowserHistory(
    {
        "Browser Name": "Mozilla Firefox",
        "Open Tabs": ["YouTube"],
        "Recently Closed": ["Gmail", "Dropbox"],
        "Browser Logs": [
            "Open Gmail",
            "Close Gmail",
            "Open Dropbox",
            "Open YouTube",
            "Close Dropbox",
        ],
    },
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);