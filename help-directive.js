angular.module('help-directive', ['mm.foundation'])

.directive('inlineHelp', [function(){
  return {
    restrict: 'AE',
    replace:false,
    template: '<a popover="{{helpText}}" ><i class="fa  fa-question-circle"></i></a>',
    scope: {
      helpKey: '@'
    }, link: function(scope) {
      scope.helpText = 'blabla';
    }
  }
}])
