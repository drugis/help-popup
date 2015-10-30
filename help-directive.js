angular.module('help-directive', ['mm.foundation', ])

.factory('HelpPopupService', [function() {
  var lexicon = {};

  function getHelpItem(key){
    return lexicon[key];
  }
  function loadLexicon(newLexicon){
    for(propertyName in newLexicon) {
      if(newLexicon.hasOwnProperty(propertyName)) {
        lexicon[propertyName] = newLexicon[propertyName];
      }
    }
  };

  return {
    getHelpItem: getHelpItem,
    loadLexicon: loadLexicon
  };

}])

.directive('inlineHelp', ['HelpPopupService', function(HelpPopupService) {
  return {
    restrict: 'AE',
    replace: false,
    template: '<a popover="{{helpText}}" popover-append-to-body="true" popover-animation="true" popover-title="{{title}}" popover-link="{{link}}"><i class="fa  fa-question-circle"></i></a>',
    scope: {
      helpKey: '@'
    },
    link: function(scope) {
      var helpItem = HelpPopupService.getHelpItem(scope.helpKey);
      scope.title = helpItem.title;
      scope.helpText = helpItem.text;
      scope.link = helpItem.link;
    }
  }
}])
