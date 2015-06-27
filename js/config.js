define(function(){
	var config = {};
	config.jqueryVersion="1.7.1.min";

	
	config.app = 'wedding';             ////////////////////** Required//////////////////////////
	
	config.version = '1.0';
	config.build = '1001';
	config.debug = false; // kills cache of js/css files if true
	config.jqueryMobileEnable = false;
	config.extraScripts = []; // set to empty array if app does not require login
	
	config.offline = false;
	return config;
});