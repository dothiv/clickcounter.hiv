module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            development: {
                files: {
                    "css/styles.css": "lesscss/styles.less"
                }}}
    });

    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['less']);
};
