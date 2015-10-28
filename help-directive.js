angular.module('help-directive', ['mm.foundation'])

.directive('inline-help', [function(){
  return {
    restrict: 'AE',
    replace:false,
    template: '<i popover="{{helpText}}" class="fa fa-question-circle"></i>',
    scope: {
      helpKey: '@'
    }, link: function(scope) {
      scope.helpText = 'blabla';
    }
  }
}])
