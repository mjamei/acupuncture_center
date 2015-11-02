/*
* This is the primary model for the entire app.
*/
var angular = require('angular'),
    config = require('./config'),
    d3 = require('d3')

var app = angular.module('bayes-webapp-base', [])

app.controller('AppCtrl', function ($scope, $http) {

  $scope.test = 'string value from scope'
  $scope.configValue = config.CONFIG_VARIABLE_1;

  $http.get('/data/example_data.json').then(function (res) {
    var d3Container = d3.select('#d3-container')
    d3Container.selectAll('div.bar')
      .data(res.data.values)
      .enter()
      .append('div')
      .classed('bar', true)
      .style('height', '10px')
      .style('width', d => (d * 10) + 'px')
  })

})


