'user strict';

var path = require("path");

var src = 'src';
var dist = 'dist';

//default paths in src folder
var scss = 'global/scss';
var pug = 'pug';
var layout = 'layout';

//default paths in dist folder
var css = 'global/css';
var template = 'template';

var script = 'global/js';
var image = 'global/images';

var languages = {
	list:['en'],
	primary:'en'
};

module.exports.browserSync = {
	dev:{
		server:{
			baseDir: [src,dist],
			index:"template/index.html"
		},
    debugInfo: false,
		host: 'localhost',
		port:'8898',
		notify:false
	}
};

module.exports.image = {
	src:path.join(src,image,'/**/*.{png,jpg,gif}'),
	dist:path.join(dist,image),
	imageCfg:{
		progressive: true,
    	interlaced: true,
    	svgoPlugins: [{cleanupIDs: false}]
	}
};



module.exports.style = {
	src: path.join(src,scss,'/**/*.scss'),
	dist: path.join(dist,css),
	scssCfg:{

	}
};

module.exports.template = {
	languages:languages,
	src:path.join(src,pug,'/**/*.pug'),
	layoutSrc:path.join(src,pug,layout,'/**/*.pug'),
	dist:path.join(dist,template),
	cfg:{
		pretty:true,
		compileDebug:true
	}
};

module.exports.script = {
	src:path.join(src,script,'/**/*.js'),
	dist:path.join(dist,script)
}

module.exports.watch ={
	scss:path.join(src,scss,'/**/*.scss'),
	pug:path.join(src,pug,'/**/*.pug'),
	script:path.join(src,script,'/**/*.js')
}

