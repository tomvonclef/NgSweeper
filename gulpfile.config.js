'use strict';
var GulpConfig = (function () {
    function GulpConfig() {
        //Got tired of scrolling through all the comments so removed them
        //Don't hurt me AC :-)
        this.source = './';
        this.sourceApp = this.source + 'app/';

        this.tsOutputPath = this.sourceApp;
        this.allJavaScript = [this.sourceApp + '/**/*.js'];
        this.allTypeScript = this.sourceApp + '/**/*.ts';

        this.typings = './tools/typings/';
        this.libraryTypeScriptDefinitions = './tools/typings/**/*.ts';
        this.appTypeScriptReferences = this.typings + 'ngsweeper.d.ts';
    }
    return GulpConfig;
})();
module.exports = GulpConfig;
