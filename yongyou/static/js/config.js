require.config({
	baseUrl: ".",
	paths: {
		text: "static/lib/requirejs/text",
		css: "static/lib/requirejs/css",
		jquery: "static/lib/jquery/jquery-1.11.2",
		knockout: "static/lib/knockout/knockout-3.2.0.debug",
		ujs: "static/lib/uui/js/u",
		wizard:"static/lib/jquery-bootstrap-wizard/jquery.bootstrap.wizard",
		director:"static/lib/director/director",
		'jquery.file.upload' : "static/lib/juqery-file-upload/9.9.2/js/jquery.fileupload",
		'jquery.ui.widget':"static/lib/jquery-ui/jquery.ui.widget",
		'jquery.iframe.transport':"static/lib/jquery-iframe-transport/jquery.iframe-transport"
	},
	shim: {
		ujs:{
			deps: ["jquery"]
		},
		'jquery.file.upload':{
			deps: ["jquery","jquery.ui.widget","jquery.iframe.transport","css!static/lib/juqery-file-upload/9.9.2/css/jquery.fileupload.css"]
		}
	}
});
