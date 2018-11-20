var app = angular.module('mycomicApp', []);
app.controller('comicCtrl', function($scope, $http) {
    $scope.comicSearch = function (isValid){
        $scope.searchHeader = "";
        if (isValid) {
            $scope.comicurl = "http://gateway.marvel.com/v1/public/comics?format=comic&title="+$scope.txtcomic+"&limit=10&ts=1&apikey=2c3a73ffebee26ccf1f96d59cb058be8&hash=d56926dc1e566addca3cd9f67a881ade";

            $http.get($scope.comicurl).then(function (response) {
                $scope.ComicData = response.data;
                console.log(response.data);

                if ($scope.ComicData.data.results.length > 0){
                    document.getElementById("filter").style.display = "block";
                    $scope.display = "The Comic Details";
                    $scope.searchHeader = "Marvel Comic Search Result For:" + $scope.txtcomic;
                }
                else {
                    $scope.display = "Invalid search, no results!";
                    $scope.searchHeader = "";
                }
//                on clicking by two radiobutton
                document.getElementById('filteredListtwo').addEventListener('click',function(){

                    $scope.comicurl = "http://gateway.marvel.com/v1/public/comics?format=comic&title="+$scope.txtcomic+"&limit=2&ts=1&apikey=2c3a73ffebee26ccf1f96d59cb058be8&hash=d56926dc1e566addca3cd9f67a881ade";
                    $http.get($scope.comicurl).then(function (response) {
                        $scope.ComicData = response.data;
                    });
                });
//                on clicking by 4 radiobutton
                document.getElementById('filteredListfour').addEventListener('click',function(){

                    $scope.comicurl = "http://gateway.marvel.com/v1/public/comics?format=comic&title="+$scope.txtcomic+"&limit=4&ts=1&apikey=2c3a73ffebee26ccf1f96d59cb058be8&hash=d56926dc1e566addca3cd9f67a881ade";
                    $http.get($scope.comicurl).then(function (response) {
                        $scope.ComicData = response.data;
                    });
                });
                document.getElementById('filteredListfull').addEventListener('click',function(){
//                on clicking default radiobutton
                    $scope.comicurl = "http://gateway.marvel.com/v1/public/comics?format=comic&title="+$scope.txtcomic+"&limit=10&ts=1&apikey=2c3a73ffebee26ccf1f96d59cb058be8&hash=d56926dc1e566addca3cd9f67a881ade";
                    $http.get($scope.comicurl).then(function (response) {
                        $scope.ComicData = response.data;
                    });
                });


            });
        }
        else{
            $scope.display = "Data Invalid";
        }
    };
});
