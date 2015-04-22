var app = angular.module('directiveWorkshop');

app.directive('showPending', function($q) {

  return {
    restrict: 'AE',
    scope: {
      request: '&'//The “&” operator allows you to invoke or evaluate an expression on
                  // the parent scope of whatever the directive is within.
                  //It enables you to pass data into a scoped method within the template.
    },
    link: function(scope, elem, attrs) {
      console.log('Directives: scope, element, attrs', elem);
      //angular.element is an alias for the JQuery function that delegates to anglrs jqLite
      var spinIcon = angular.element('<img style = "height:25px" src="/img/spinner.gif"></img>');
      spinIcon.hide();
      elem.after(spinIcon);//Insert spinIcon after the DOM element, in this case showPending/show-pending

      var invokeRequest = function() {//
        var deferred = $q.defer();
        deferred.resolve(scope.request());//envokes the mainCtrl.getData() expression from parent scope
        return deferred.promise;
      }
      elem.click(function(){//Invoked when DOM element show-pending, which is in a button, is clicked
        elem.hide();//Hides the button, or show-pending element
        spinIcon.show();//Shows the spinIcon
        invokeRequest().then(function(){//Invokes invokeRequest function and runs places a promise on it
          setTimeout(function() {//the promise is a timeout function that doesn't execute until time lapse
            elem.show();//Shows button
            spinIcon.hide();//Hides the spinIcon again
          }, 3000);
        })
      })

    },
    //transclude: true,
    //templateUrl: '/templates/showPendingTemp.html'

  }

})