chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		var links = $("a");

		for (var link = 0; link < links.length; link++){
			links[link].href += '&tag=triangleface-20';
		}
		// ----------------------------------------------------------
	}
	}, 10);
});