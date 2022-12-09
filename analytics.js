(function addGA() {
    window["GoogleAnalyticsObject"] = "ga";

    window.ga =
        window.ga ||
        function () {
            window.ga.q = window.ga.q || [];
            window.ga.q.push(arguments);
        };

    window.ga.l = 1 * new Date();

    var analyticsScript = document.createElement("script");
    var firstScript = document.getElementsByTagName("script")[0];

    analyticsScript.async = 1;
    analyticsScript.src = "./ga.js";
    firstScript.parentNode.insertBefore(analyticsScript, firstScript);
})();

ga("create", "UA-210471096-1", "auto");

// https://stackoverflow.com/questions/48560583/add-google-analytics-to-a-chrome-extension
ga("set", "checkProtocolTask", null);

if (window.location.href.indexOf("chrome-extension://") === 0) {
    let version = "popup-version-error";

    try {
        version = chrome.runtime.getManifest().version;
    } catch (_) {}

    ga("send", "pageview", `/popup@${version}`);
} else {
    ga("send", "pageView", "/web");
}
