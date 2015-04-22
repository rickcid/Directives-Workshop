var app = angular.module('directiveWorkshop');

app.directive('showPending', function($q) {

  return {
    restrict: 'AE',
    scope: {
      request: '&'
    },
    link: function(scope, elem, attrs) {
      console.log('Directives: scope, element, attrs', scope, elem, attrs);
      //var currentTime = new Date();
      //scope.time = currentTime.toString();

      var spinIcon = angular.element('<img style = "height:25px" src="/img/spinner.gif"></img>');
      spinIcon.hide();
      elem.after(spinIcon);

      var invokeRequest = function() {
        var deferred = $q.defer();
        deferred.resolve(scope.request());
        return deferred.promise;
      }
      elem.click(function(){
        elem.hide();
        spinIcon.show();
        invokeRequest().then(function(){
          setTimeout(function() {
            elem.show();
            spinIcon.hide();
          }, 3000);
        })
      })

    },
    //transclude: true,
    //templateUrl: '/templates/showPendingTemp.html'

  }

})