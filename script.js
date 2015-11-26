angular.module('myApp', ['ui.bootstrap','angular-drawer','ngAnimate']);

angular.module('myApp').config(function() {
    new WOW().init();
});
angular.module('myApp').run(['$anchorScroll', function($anchorScroll) {
    $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
}]);

angular.module('myApp').value("numberValue", 999);


angular.module('myApp').controller('mainCtrl', function ($scope, $modal, $log,$location, $anchorScroll) {

    var signup1 = function () {
        $modal.open({
            templateUrl: 'signupModal.html',
            controller: $scope.signupCtrl,
            resolve: {
                user: function () {
                    return $scope.user;
                }
            }
        });
    };
    var login1 = function () {
        $modal.open({
            templateUrl: 'loginModal.html',
            controller:$scope.loginCtrl,
            resolve: {
                user: function () {
                    return $scope.user;
                }
            }
        });
    };

    //scope calls
    $scope.signupOpen=function(){
        signup1();
    };
    $scope.loginOpen=function(){
        login1();
    }
    $scope.signupCtrl = function ($scope, $modalInstance) {
        $scope.log1 = function () {
            $modalInstance.dismiss('cancel');
            login1();

        };
        $scope.cancelLogin = function () {
            $modalInstance.dismiss('cancel');
        }
    };
    $scope.loginCtrl= function ($scope, $modalInstance) {
        //if you want close modalLogin you can call cancelLogin here
      $scope.sign1=function(){
          $modalInstance.dismiss('cancel');
          signup1();
      };
        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        }
    };
    //scope calls
    $scope.signupOpen=function($scope, $modalInstance){
        $modalInstance.dismiss('cancel');
        signup1();
    };
    $scope.loginOpen=function($scope, $modalInstance){
        login1();
        $modalInstance.dismiss('cancel');

    };
    //anchorscroll
    $scope.scrollTo = function(id) {
        $location.hash(id);
        console.log($location.hash());
        $anchorScroll();
    };
    //active hyperlink
    $scope.selectedIndex = 0;

    $scope.itemClicked = function (a) {
        $scope.selectedIndex = a;
    };

    //slides

        $scope.myInterval = 3000;
    $scope.slides = [
        {
            image: './images/blur.jpg'
        },
        {
            image: './images/blur3.jpg'
        },
        {
            image: './images/blur4.jpg'
        },
        {
            image: './images/blur5.jpg'
        }
    ];

});

