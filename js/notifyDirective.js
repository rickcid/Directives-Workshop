var app = angular.module("notifyDirective", []);


app.directive('notifyBox', function() {
  return {  
    scope: {
      title: '=',
      body: '=',
      icon: '='
    },
    link: function(scope, element, attrs) {
      var Notification = window.Notification || window.mozNotification || window.webkitNotification;
          Notification.requestPermission(function (permission) {
                //console.log(permission);
            });
        

      element.click(function() {
      
      var notification = new Notification(
        scope.title, {body: scope.body,icon: scope.icon})

        notification.onshow = function() {
        setTimeout(notification.close.bind(notification), 5000);
      }
      })
    }
  };
});