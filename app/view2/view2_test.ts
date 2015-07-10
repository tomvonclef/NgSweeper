'use strict';

declare var module; // TODO: figure why this isn't taken care of by the Jasmine typing files
declare var inject; // TODO: figure why this isn't taken care of by the Jasmine typing files

describe('myApp.view2 module', function() {

  beforeEach(module('myApp.view2'));

  describe('view2 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view2Ctrl = $controller('View2Ctrl');
      expect(view2Ctrl).toBeDefined();
    }));

  });
});
