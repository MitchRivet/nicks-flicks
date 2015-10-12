nicksFlicks.controller('ReviewContentCtrl', function ReviewContentCtrl($scope, $stateParams, ReviewsFactory, UtilitiesFactory) {
  $scope.thisReview = UtilitiesFactory.findById(ReviewsFactory.reviews, $stateParams.reviewId);
});
