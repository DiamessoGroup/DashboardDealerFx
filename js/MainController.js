app.controller('MainController', ['$scope', function($scope) { 
  $scope.cars= [
    {
      model: 'Lancer Sports',
      quantity: 65,
    },
    
    {
      model: 'RVR',
      quantity: 15,
    },
      
      
    {
      model: 'Outlander',
      quantity: 19,
    },
    
    {
      model: 'Mirage',
      quantity: 8,
    }
  ];
}]);