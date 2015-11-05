angular.module('help-directive', ['mm.foundation'])

.factory('HelpPopupService', ['$q', function($q) {
  var lexicons = {};
  var promises = [];

  function getHelpItem(key) {
    return $q.all(promises).then(function() {
      return lexicons[key];
    });
  }

  function loadLexicon(newLexicon) {
    promises.push(newLexicon);
    newLexicon.then(function(getResult) {
      var lexicon = getResult.data;
      for (propertyName in lexicon) {
        if (lexicon.hasOwnProperty(propertyName)) {
          lexicons[propertyName] = lexicon[propertyName];
        }
      }
    });
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
}]);