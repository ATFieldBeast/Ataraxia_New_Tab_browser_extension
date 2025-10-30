
// javascript code for option operations in OPTIONS page

// wallpaper settings

function initWallpaperConf() {
	// show uhd wallpaper
	if(readConf('enable_uhd_wallpaper') == 'no') {
		document.getElementById('use-uhd-wallpaper-checkbox').checked = false;
	}
	else {
		document.getElementById('use-uhd-wallpaper-checkbox').checked = true;
	}
}

function changeWallpaperConf() {
	// update uhd wallpaper conf
	if (document.getElementById('use-uhd-wallpaper-checkbox').checked == true) {
		writeConf('enable_uhd_wallpaper', 'yes');
	}
	else {
		writeConf('enable_uhd_wallpaper', 'no');
	}
	// change wallpaper_data conf to trigger wallpaper reload when open a new tab
	writeConf('wallpaper_date', '1970-01-01');
	alert(i18n('op_saved_alert'));
}


// ------------- exec --------------


// init wallpaper
initWallpaperConf();

// bind save wallpaper conf btn
document.getElementById('save-wallpaper-conf-btn').onclick = changeWallpaperConf;


