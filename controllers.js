EmployeeList.controller('AppCtrl',
  function AppCtrl ($scope) {
    $scope.employees = [{
      name: 'Shanthi Sivanesan',
      emailid:'shanthi@xyz.com',
      position:'Senior Software Engineer',
      phone: '123-456-7891',
      address: [
        '1123 El Camino Real',
        'Sunnyvale, CA 950129'
      ]
    },{
      name: 'Nive',
      emailid:'nive@xyz.com',
      position: 'Software Engineer',
      phone: '123-456-7891',
      address: [
        'xyz',
        'city, CA zip'
      ]
    }
    ];
  });

EmployeeList.controller('InfoCtrl',
  function InfoCtrl($scope, $routeParams) {
    $scope.employee = $scope.employees[$routeParams.id];
  });

EmployeeList.controller('AddCtrl',
  function AddCtrl($scope, $location) {
    $scope.employee = {};
    $scope.add = function () {
      $scope.employees.push($scope.employee);
      $location.url('/');
    };
  });

EmployeeList.controller('EditCtrl',
  function EditCtrl($scope, $routeParams, $location) {
    $scope.employee = $scope.employees[$routeParams.id];
    $scope.edit = function () {
      $scope.employees[$routeParams.id] = $scope.employee;
      $location.url('/');
    };
  });

EmployeeList.controller('RemoveCtrl',
  function RemoveCtrl($scope, $routeParams, $location) {
    $scope.employee = $scope.employees[$routeParams.id];
    $scope.remove = function () {
      $scope.employees.splice($routeParams.id, 1);
      $location.url('/');
    };
    $scope.back = function () {
      $location.url('/');
    };
  });