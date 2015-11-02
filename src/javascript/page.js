/*
* This is the primary model for the entire app.
*/
var angular = require('angular'),
    config = require('./config'),
    d3 = require('d3')

var app = angular.module('bayes-webapp-base', [])

app.controller('AppCtrl', function ($scope) {

  $scope.test = 'string value from scope'
  $scope.configValue = config.CONFIG_VARIABLE_1;

})


