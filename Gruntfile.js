'use strict';

var config= {
	app_folder: 'app',
};

module.exports= function(grunt){

	var serveStatic = require('serve-static');

	grunt.initConfig({

		config: config,

		watch: {
			livereload: {
				options: {
					livereload: '<%= connect.livereload.options.livereload %>'
				},
				files: [
				  '<%= config.app_folder %>/**'
				]
			}
		},

		connect: {
			livereload: {
				options:{
					port: 9000,
					hostname: 'localhost',
					open: true,
					livereload:9999,
					middleware: function(connect){
						return [
								serveStatic(config.app_folder)
						];
					}
				}
			},
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('serve',['connect:livereload','watch']);


}		