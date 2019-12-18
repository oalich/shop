module.exports = function (grunt) {
    var config = {
        efiliale: 'shop'
    };
    
    grunt.file.defaultEncoding = 'iso-8859-15';

    grunt.initConfig({
        config: config,
        pkg: grunt.file.readJSON(config.efiliale + '/package.json'),

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> */\n',
                beautify: false,
                mangle: true,
                compress: {
                    //drop_console: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-ng-classify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.registerTask('default', ['watch']);

    grunt.registerTask('build', function (val) {
        if(typeof val === 'undefined') {
            grunt.log.writeln('Path is not defined. usage: grunt build:PathToShop');
            grunt.log.writeln('As long nothing is defined, we will proceed with "shop" as default path');
            config.efiliale = 'shop';
        } else {
            config.efiliale = val;
        }

        grunt.task.run(['uglify']);
    });
};

