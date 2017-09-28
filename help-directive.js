'use strict';
/* globals angular */
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
        for (var propertyName in lexicon) {
          if (lexicon.hasOwnProperty(propertyName)) {
            lexicons[propertyName] = lexicon[propertyName];
          }
        }
      });
    }

    return {
      getHelpItem: getHelpItem,
      loadLexicon: loadLexicon
    };
  }])

  .directive('inlineHelp', ['HelpPopupService',
    function(HelpPopupService) {
      return {
        restrict: 'AE',
        replace: false,
        // template: '<a popover="{{helpText}}" popover-append-to-body="true" popover-animation="true" popover-title="{{title}}" popover-link="{{link}}"><i class="fa  fa-question-circle"></i></a>',
        template: '' +
          '<a class="has-tip"' +
          ' tooltip-placement="bottom"' +
          ' tooltip-trigger="click" ' +
          ' tooltip-append-to-body="true"' +
          ' tooltip-html-unsafe="{{helpText}}">' +
          ' <i class="fa fa-question-circle"></i>' +
          '</a>',
        scope: {
          helpKey: '@'
        },
        link: function(scope) {
          HelpPopupService.getHelpItem(scope.helpKey).then(function(helpItem) {
            scope.title = helpItem.title;
            scope.link = helpItem.link;
            scope.helpText = '' +
              '<h4>' + helpItem.title + '</h4>' +
              '<div>' + helpItem.text + '</div>' +
              '<br><div class="manual-link"><h6><a href="' + helpItem.link +
              '  " target="_blank">View in manuel <i class="fa fa-external-link"></i></a></h6>' +
              '</div>';
          });
        }
      };
    }
  ]);