/**
 *
 * @authors Your Name (you@example.org)
 * @date    2014-08-25 19:15:33
 * @version $Id$
 */
'use strict';

routeApp.controller('routeConfig', ['$scope', '$http',
    function($scope, $http) {
        $scope.configData = {};

        function cfgData() {
            $http.get('config/config.js').success(function(data) {
                $scope.configData = data;
            })
        }

        //获取
        $http.get('/api/config').success(function(data) {
            $scope.Global = data;
            if ($scope.Global == '') {
                return cfgData();
            } else {
                $scope.configData = $scope.Global[0];
            }
        }).error(function(data) {
            console.log('错误' + data);
        })

        //确定修改
        $scope.reviseConfig = function() {
            if ($scope.Global == '') {
                $http.post('/api/config', $scope.configData).success(function(data) {
                    $scope.Global = data;
                    $scope.configData = $scope.Global[0];
                }).error(function(data) {
                    console.log('错误' + data);
                })
            } else {
                //提交
                $http.post('/api/config/' + $scope.configData._id, $scope.configData).success(function(data) {

                }).error(function(data) {
                    console.log('错误' + data);
                })
            }
        }

        //增加导航
        $scope.addNav = function() {
            $scope.configData.webnav.push({
                name: '导航名',
                url: '/'
            });
        }
        //删除导航
        $scope.removeNav = function(index) {
            $scope.configData.webnav = $scope.configData.webnav.delArray(index);
        }

        //删除数组指定元素
        Array.prototype.delArray = function(n) {　
            if (n < 0) {
                return this;
            } else {
                return this.slice(0, n).concat(this.slice(n + 1, this.length));　
            }　
        }

    }
]);

routeApp.controller('AppCtrl', ['$scope', '$http','$element',
    function($scope, $http, $element) {
        $scope.global = {};

        function cfgData() {
            $http.get('config/config.js').success(function(data) {
                $scope.global = data;
            })
        }
        //获取
        $http.get('/api/config').success(function(data) {
            $scope.Global = data;
            if ($scope.Global == '') {
                return cfgData();
            } else {
                $scope.global = $scope.Global[0];
            }
        }).error(function(data) {
            console.log('错误' + data);
        })


        //test
        var getBai = angular.element(document.querySelector(".getBai"));
        var getHei = angular.element(document.querySelector(".getHei"));
        getBai.on('click', function(event) {
        	event.preventDefault();
        	$element.find('body').addClass('bai').removeClass('hei');
        });
        getHei.on('click', function(event) {
        	event.preventDefault();
        	$element.find('body').addClass('hei').removeClass('bai');
        });
    }
]);
