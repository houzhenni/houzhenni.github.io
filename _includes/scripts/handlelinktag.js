(function() {
	var aTags = document.getElementsByTagName("a");
	var regExForA = /^https:\/\/www\.houzhenni(\.com\/$|\.com\/\d.+)/;
	for (let i = 0; i < aTags.length; i++) {
		if (!regExForA.test(aTags[i].href) && aTags[i].target != "_blank") {
		  aTags[i].target = "_blank";
		}
	}
})();