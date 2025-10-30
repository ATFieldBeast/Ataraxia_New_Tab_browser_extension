
// page title
function i18n_page_title(){
	document.title = i18n('op_title');
}

// display title
function i18n_display_title(){
	document.getElementById("display-title").innerHTML = i18n('op_title');
}

// nav bar
function i18n_nav() {
	document.getElementById("nav-wallpaper").innerHTML = i18n('op_nav_wallpaper');
}

// common btns
function i18n_op_common_btns() {
	// save
	var save_btns = document.getElementsByClassName('op-btn-save-this');
	for (var i=0; i<save_btns.length; i++) {
		save_btns[i].innerHTML = i18n('op_btn_save_this');
	}
	// reset default
	var reset_btns = document.getElementsByClassName('op-btn-reset-default');
	for (var i=0; i<reset_btns.length; i++) {
		reset_btns[i].innerHTML = i18n('op_btn_reset_default');
	}
}

// search wallpaper tab
function i18n_wallpaper_tab() {
	document.getElementById("uhd-wallpaper-prompt1").innerHTML = i18n('op_wallpaper_uhd_hint1');
	document.getElementById("uhd-wallpaper-prompt2").innerHTML = i18n('op_wallpaper_uhd_hint2');
	document.getElementById("use-uhd-wallpaper-checkbox-text").innerHTML = i18n('op_wallpaper_uhd_checkbox');
}

// exec

function exec_i18n() {
	i18n_page_title();
	i18n_display_title();
	i18n_nav();
	i18n_op_common_btns();
	i18n_wallpaper_tab();
}

exec_i18n();
