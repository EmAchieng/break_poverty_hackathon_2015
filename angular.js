var myApp = angular.module('MyApp', []);
	

myApp.controller('MyController', function($scope,$http){
				

$scope.formSubmit = function(){

    //console.log($scope.formData);

    $http.post('http://127.0.0.1:8081/students/', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
             

                 console.log(data);

               // console.log(data);
            })
            .error(function(data) {
               // console.log('Error: ' + data);
                $scope.error1 = "Failed to Save";
            });
};
});




myApp.controller('GetController', function($scope,$http){


    $http.get('http://127.0.0.1:8081/students')
            .success(function(data) {
             
             $scope.names = data;
               console.log(data);
            })
            .error(function(data) {
               // console.log('Error: ' + data);
            });



});

