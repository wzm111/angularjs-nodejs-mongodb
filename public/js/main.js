/**
 *
 * @authors wzm111
 * @date    2014-08-18 20:40:43
 * @version 0.0.1
 */
'use strict';
routeApp.controller('routeMain',['$scope', '$http','$rootScope', function($scope, $http,$rootScope){
    $scope.formData = {};
    $scope.saveId = {};
    $scope.dataId = null;
    $scope.btnShow = true;
    $scope.listLen = null;

    //获取
    $http.get('/api/demos').success(function(data) {
        $scope.demos = data;
        $scope.listLen = $scope.demos.length;
        $rootScope.global = $scope.demos;
    }).error(function(data) {
        console.log('错误' + data);
    })

    //添加
    $scope.creatDemo = function() {
        $http.post('/api/demos', $scope.formData).success(function(data) {
            $scope.formData = {};
            $scope.demos = data;
            $scope.listLen = $scope.demos.length;
            $rootScope.global = $scope.demos;
        }).error(function(data) {
            console.log('错误' + data);
        })

    }

    //获取选中ID
    $scope.getSelect = function(id) {
        $scope.saveId[id] = !$scope.saveId[id];
        if (!$scope.saveId[id]) {
            $scope.allFlags = false;
            delete $scope.saveId[id];
        }
        console.log($scope.saveId)
    }

    //删除
    $scope.deleteDemo = function() {
        for (var i in $scope.saveId) {
            var id = i;
            $http.delete('/api/demos/' + id).success(function(data) {
                $scope.demos = data;
                $scope.listLen = $scope.demos.length;
                $rootScope.global = $scope.demos;
                $scope.flags = false;
                $scope.allFlags = false;
            }).error(function(data) {
                console.log('错误' + data);
            })
        }
    }

    //全选
    $scope.allChecked = function() {
        $scope.allFlags = $scope.allFlags == true ? false : true;
        if ($scope.allFlags == true) {
            $scope.flags = true;
            for (var i in $scope.demos) {
                $scope.saveId[$scope.demos[i]._id] = true;
            }
        } else {
            $scope.flags = false;
            $scope.saveId = {};
        }
    }

    //修改内容复制
    $scope.getRevise = function(id) {
        $scope.btnShow = false;
        $http.get('/api/demos/' + id).success(function(data){
             $scope.formData = data;
        })
    }

    //确定修改
    $scope.reviseDemo = function(){
        if($scope.btnShow){return;}
        $scope.dataId = $scope.formData._id;
        $http.post('/api/demos/' + $scope.dataId, $scope.formData).success(function(data) {
            $scope.formData = {};
            $scope.dataId = null;
            $scope.btnShow = true;
            $scope.demos = data;
        }).error(function(data) {
            console.log('错误' + data);
        })
    }

    //显示个数
   $scope.getList = function(Num){
        $http.get('/api/demos').success(function(data) {
            if(Num == 0){
                $scope.demos = data;
            }else{
               $scope.demos = data.slice(0, Num); 
            }
        }).error(function(data) {
            console.log('错误' + data);
        })  
   }

}]);

routeApp.controller('routePage',['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
    $http.get('/api/demos/' + $routeParams.OP).success(function(data){
        $scope.demos = data;
    })
}]);
