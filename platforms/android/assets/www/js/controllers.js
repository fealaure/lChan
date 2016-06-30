angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('boardListController', function($http, $scope, boardService){
    $scope.boards = [
      { title: '/a/', id: 1, idName: 'a'},
      { title: '/b/', id: 2, idName: 'b'},
      { title: '/c/', id: 3, idName: 'c'},
      { title: '/d/', id: 4, idName: 'd'},
      { title: '/e/', id: 5, idName: 'e'},
      { title: '/g/', id: 6, idName: 'g'},
      { title: '/gif/', id: 7, idName: 'gif'},
      { title: '/h/', id: 8, idName: 'h'},
      { title: '/hr/', id: 9, idName: 'hr'},
      { title: '/k/', id: 10, idName: 'k'},
      { title: '/m/', id: 11, idName: 'm'},
      { title: '/o/', id: 12, idName: 'o'},
      { title: '/p/', id: 13, idName: 'p'},
      { title: '/r/', id: 14, idName: 'r'},
      { title: '/s/', id: 15, idName: 's'},
      { title: '/t/', id: 16, idName: 't'},
      { title: '/u/', id: 17, idName: 'u'},
      { title: '/v/', id: 18, idName: 'v'},
      { title: '/vg/', id: 19, idName: 'vg'},
      { title: '/vr/', id: 20, idName: 'vr'},
      { title: '/w/', id: 21, idName: 'w'},
      { title: '/wg/', id: 22, idName: 'wg'},
      { title: '/i/', id: 23, idName: 'i'},
      { title: '/ic/', id: 24, idName: 'ic'},
      { title: '/r9k/', id: 25, idName: 'r9k'},
      { title: '/s4s/', id: 26, idName: 's4s'},
      { title: '/cm/', id: 27, idName: 'cm'},
      { title: '/hm/', id: 28, idName: 'hm'},
      { title: '/lgbt/', id: 29, idName: 'lgbt'},
      { title: '/y/', id: 30, idName: 'y'},
      { title: '/3/', id: 31, idName: '3'},
      { title: '/aco/', id: 32, idName: 'aco'},
      { title: '/adv/', id: 33, idName: 'adv'},
      { title: '/an/', id: 34, idName: 'an'},
      { title: '/asp/', id: 35, idName: 'asp'},
      { title: '/biz/', id: 36, idName: 'biz'},
      { title: '/cgl/', id: 37, idName: 'cgl'},
      { title: '/ck/', id: 38, idName: 'ck'},
      { title: '/co/', id: 39, idName: 'co'},
      { title: '/diy/', id: 40, idName: 'diy'},
      { title: '/fa/', id: 41, idName: 'fa'},
      { title: '/fit/', id: 42, idName: 'fit'},
      { title: '/gd/', id: 43, idName: 'gd'},
      { title: '/hc/', id: 44, idName: 'hc'},
      { title: '/his/', id: 45, idName: 'his'},
      { title: '/int/', id: 46, idName: 'int'},
      { title: '/jp/', id: 47, idName: 'jp'},
      { title: '/lit/', id: 48, idName: 'lit'},
      { title: '/mlp/', id: 49, idName: 'mlp'},
      { title: '/mu/', id: 50, idName: 'mu'},
      { title: '/n/', id: 51, idName: 'n'},
      { title: '/news/', id: 52, idName: 'news'},
      { title: '/out/', id: 53, idName: 'out'},
      { title: '/po/', id: 54, idName: 'po'},
      { title: '/pol/', id: 55, idName: 'pol'},
      { title: '/qst/', id: 56, idName: 'qst'},
      { title: '/sci/', id: 57, idName: 'sci'},
      { title: '/soc/', id: 58, idName: 'soc'},
      { title: '/sp/', id: 59, idName: 'sp'},
      { title: '/tg/', id: 60, idName: 'tg'},
      { title: '/toy/', id: 61, idName: 'toy'},
      { title: '/trv/', id: 62, idName: 'trv'},
      { title: '/tv/', id: 63, idName: 'tv'},
      { title: '/vp/', id: 64, idName: 'vp'},
      { title: '/wsg/', id: 65, idName: 'wsg'},
      { title: '/wsr/', id: 66, idName: 'wsr'},
      { title: '/x/', id: 67, idName: 'x'}
    ];
    $scope.setBoard=function(val){
         boardService.selectedBoard=val;
        //and your redirection stuff goes here.
    }; 
})

.controller('4ChanController', function($http, $scope, boardService, $ionicLoading){
    //teste
    $scope.show = function() {
    $ionicLoading.show({
        template: 'Loading...'
      }).then(function(){
         console.log("The loading indicator is now displayed");
      });
    };

    $scope.hide = function(){
      $ionicLoading.hide().then(function(){
         console.log("The loading indicator is now hidden");
      });
    };

    $scope.doRefresh = function () {
      $scope.stories = [];
      $http.get('http://a.4cdn.org/'+boardService.selectedBoard+'/1.json')
      .success(function(response){
        angular.forEach(response.threads, function(post){
          for (var i = 0; i < post.posts.length; i++) {
            $scope.stories.push(post.posts[i]);
          }
        })
        $scope.hide();
      })
      .finally(function() {
        $scope.$broadcast('scroll.refreshComplete');
      });
    }
    //inicia o loading
    $scope.show();
    //chama o serviço
    $scope.doRefresh();
    $scope.selectedBoard = boardService.selectedBoard;
    console.log($scope.selectedBoard);
})

.service('boardService', function() {
  this.selectedBoard;
});
