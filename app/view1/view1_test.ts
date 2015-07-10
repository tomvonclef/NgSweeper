'use strict';

declare var module; // TODO: figure why this isn't taken care of by the Jasmine typing files
declare var inject; // TODO: figure why this isn't taken care of by the Jasmine typing files

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});
