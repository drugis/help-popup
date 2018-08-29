'use strict';
/* globals angular */
define(['angular', 'angular-foundation-6'], function() {
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
        var toLoad = newLexicon.then ? newLexicon : $q.resolve(newLexicon);
        promises.push(toLoad);
        toLoad.then(function(getResult) {
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
          template: '' +
            '<a class="has-tip"' +
            ' tooltip-trigger="click"' +
            ' tooltip-append-to-body="true"' +
            ' tooltip-animation="true"' +
            ' tooltip-html-unsafe="{{helpText}}">' +
            ' <i class="fa fa-question-circle"></i>' +
            '</a>',
          scope: {
            helpKey: '@'
          },
          link: function(scope) {
            HelpPopupService.getHelpItem(scope.helpKey).then(function(helpItem) {
              scope.helpText = '' +
                '<h4>' + helpItem.title + '</h4>' +
                '<div class="tooltip-content">' + helpItem.text + '</div>' +
                '<br><div class="manual-link"><h6><a href="' + helpItem.link +
                '  " target="_blank">View in manual <i class="fa fa-external-link"></i></a></h6>' +
                '</div>';
            });
          }
        };
      }
    ]);
});
