nicksFlicks.factory('ReviewsFactory', function ReviewsFactory() {
  var factory = {};
  factory.reviews = [];

  factory.addReview = function() {
    factory.reviews.push({ reviewTitle: factory.reviewTitle, reviewContent: factory.reviewContent, reviewId: factory.reviews.length + 1});
    factory.reviewTitle = null;
    factory.reviewContent = null;

  };


  return factory;
});
