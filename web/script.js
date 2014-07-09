<%--
Created by IntelliJ IDEA.
User: dfaulhaber
Date: 7/9/2014
Time: 11:21 AM
To change this template use File | Settings | File Templates.
--%>

(function() {

    var app = angular.module("githubViewer", []);

    var MainController = function($scope, $http) {

    var onUserComplete = function(response) {

    $scope.user = response.data;
    $http.get($scope.user.repos_url)
    .then(onRepos, onError);

    };

    var onRepos = function(response) {

    $scope.repos = response.data;

    };

    var onError = function(reason) {

    $scope.error = "Could not fetch the user";

    };

    $scope.search = function(username) {

    $http.get("https://api.github.com/users/" + username)
    .then(onUserComplete, onError);

    };

    $scope.message = "GitHub Viewer";
    $scope.repoSortOrder = "-stargazers_count";

    };
//scope and http is for java minifier.
    app.controller("MainController", ["$scope", "$http", MainController]);

    }());