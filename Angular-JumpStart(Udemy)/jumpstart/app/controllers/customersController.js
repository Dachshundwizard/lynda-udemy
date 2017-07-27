//Option 1 If app.js module was a var //

// app.controller('CustomersController', function ($scope) {
//     $scope.sortBy = 'name';
//     $scope.reverse = false;
//
//     $scope.customers= [{joined: '2000-12-02', name:'John', city:'Chandler', orderTotal: 9.9956}, {joined: '1965-01-25',name:'Zed', city:'Las Vegas', orderTotal: 19.99},{joined: '1944-06-15',name:'Tina', city:'New York', orderTotal:44.99}, {joined: '1995-03-28',name:'Dave', city:'Seattle', orderTotal:101.50}];
//     $scope.doSort = function(propName) {
//        $scope.sortBy = propName;
//        $scope.reverse = !$scope.reverse;
//     };
// });

//Option 2
// Now we dont have access to app (if our original module was 'var app =')
(function() { // Now everthing is pulled out of the global scope, since it is an anoynymous function

    angular.module('customersApp') // This gets us to the module
        .controller('CustomersController', ['$scope', function($scope) {
            $scope.sortBy = 'name';
            $scope.reverse = false;

            $scope.customers = [{
                joined: '2003-04-02',
                name: 'Nancy',
                city: 'Bellevue',
                orderTotal: 44.00
            }, {
                joined: '2000-12-02',
                name: 'John',
                city: 'Seattle',
                orderTotal: 744.92
            }, {
                joined: '2004-12-03',
                name: 'Justin',
                city: 'Co-ville',
                orderTotal: 1023.22
            }, {
                joined: '2000-12-02',
                name: 'John',
                city: 'Chandler',
                orderTotal: 9.9956
            }, {
                joined: '1965-01-25',
                name: 'Zed',
                city: 'Las Vegas',
                orderTotal: 19.99
            }, {
                joined: '1944-06-15',
                name: 'Tina',
                city: 'New York',
                orderTotal: 44.99
            }, {
                joined: '1995-03-28',
                name: 'Dave',
                city: 'Seattle',
                orderTotal: 101.50
            }];
            $scope.doSort = function(propName) {
                $scope.sortBy = propName;
                $scope.reverse = !$scope.reverse;
            };
        }]);
}());
