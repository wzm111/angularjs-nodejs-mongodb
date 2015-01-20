'use strict';


var catRes = angular.module('catRes', ['ngResource']);
/*var date = new Date();
var seconds = date.getTime();
*/

catRes.factory('ademos', ['$resource',
        function($resource) {
            var obj = {
                index: $resource('/api/demos/:OP')
            }


            return {index : obj.index};
    }]
);
