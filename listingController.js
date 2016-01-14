angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.newListing = {
            "code": "____", 
            "name": "____", 
            "coordinates": {
                "latitude": 0.000000, 
                "longitude": 0.000000
            }, 
            "address": "Street, City, State, Zip"
        };
    $scope.detailedInfo = {
            "code": "____", 
            "name": "____", 
            "coordinates": {
                "latitude": 0.000000, 
                "longitude": 0.000000
            }, 
            "address": "Street, City, State, Zip"
        };

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      $scope.listings.push($scope.newListing);
      $scope.newListing = {
            "code": "____", 
            "name": "____", 
            "coordinates": {
                "latitude": 0.000000, 
                "longitude": 0.000000
            }, 
            "address": "Street, City, State, Zip"
        };
    };
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index,1);
    };
    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);