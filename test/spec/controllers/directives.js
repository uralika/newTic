'use strict';

describe('Controller: DirectivesCtrl', function () {

  // load the controller's module
  beforeEach(module('newTicApp'));

  var DirectivesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DirectivesCtrl = $controller('DirectivesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
