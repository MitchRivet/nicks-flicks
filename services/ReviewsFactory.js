nicksFlicks.factory('ReviewsFactory', function ReviewsFactory() {
  var factory = {};
  factory.reviews = [];

  factory.addReview = function() {
    factory.reviews.push({ title: factory.reviewTitle, content: factory.reviewContent, id: factory.reviews.length + 1});
    factory.reviewTitle = null;
    factory.reviewContent = null;

  };


  return factory;
});
