var args = arguments[0] || {};

$.feedWebView.url = "http://wccm.org/jms2015/feed.html";

function doOpen(evt) {

	if (OS_ANDROID) {
		abx.title = "The John Main Seminar 2015 - Live Blog";
		abx.titleFont = "Expo Sans Pro Regular.otf";
		abx.titleColor = "#4A678C";

		//actionBarHelper.setIcon('/drawericonw@2x.png');

	}
}