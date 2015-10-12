var nicksFlicks = angular.module('nicksFlicks', ['ui.router']);

nicksFlicks.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('reviews', {
    url: "/reviews",
    templateUrl: "partials/reviews.html",
    controller: "ReviewsCtrl"
  });

  $stateProvider.state('reviews.content', {
    url: "/:reviewId",
    templateUrl: "partials/reviews.content.html",
    controller: "ReviewsCtrl"
  });

});
