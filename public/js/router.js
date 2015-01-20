/**
 *
 * @authors Your Name (you@example.org)
 * @date    2014-08-28 10:35:10
 * @version $Id$
 */
'use strict';

var routeApp = angular.module('demoCat', ['ngRoute']);

routeApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        var index = {
                templateUrl: 'tpl/list.html',
                controller: 'routeMain'
            },
            config = {
                templateUrl: 'tpl/config.html',
                controller: 'routeConfig'
            },
            page = {
                templateUrl: 'tpl/page.html',
                controller: 'routePage'
            };
        $routeProvider
            .when('/', index)
            .when('/config', config)
            .when('/:OP', page)
            .otherwise({
                redirectTo: '/'
            });
        //$locationProvider.html5Mode(true).hashPrefix('!'); //去除链接#符号,刷新bug
    }
]);
