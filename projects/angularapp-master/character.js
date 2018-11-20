var app = angular.module('myApp', []);

app.controller('marvelCtrl', function($scope, $http) {
    $scope.submitSearch = function (isValid){
        $scope.searchHeader = "";
        if (isValid) {
            $scope.charsearch = "http://gateway.marvel.com/v1/public/characters?name="+$scope.textname+"&ts=1&apikey=2c3a73ffebee26ccf1f96d59cb058be8&hash=d56926dc1e566addca3cd9f67a881ade";
            $http.get($scope.charsearch).then(function (response) {
                $scope.searchData = response.data;
                console.log($scope.searchData);

                if ($scope.searchData.data.results.length > 0){
                    $scope.display = "The Character Details";
                    if($scope.searchData.data.results[0].description != ""){
                        $scope.description = $scope.searchData.data.results[0].description;
                    }
                    else{
                        $scope.description = "No description found for this character";
                    }


                    $scope.searchHeader = "Marvel Character Search Result For:" + $scope.textname;

                    $scope.image = $scope.searchData.data.results[0].thumbnail.path +"/landscape_xlarge."+ $scope.searchData.data.results[0].thumbnail.extension;

                    $scope.comicavailable = "Comics Available:"+ $scope.searchData.data.results[0].comics.available;
                    $scope.url =$scope.searchData.data.results[0].urls[1].url;
                    console.log($scope.url)

                    var image = document.getElementById("charimage");
                    image.style.visibility="visible";
                }
                else {
                    $scope.display = "Invalid search, no results!";
                    $scope.description = "";
                    $scope.searchHeader = "";
                    var image = document.getElementById("charimage");
                    image.style.display="none";
                    $scope.comicavailable = "";
                    document.getElementById("link").style.display = "none";
                }
            });
        }
        else{
            $scope.display = "Invalid Name entered.";
        }
    };
});