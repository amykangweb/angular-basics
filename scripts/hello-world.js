var app = angular.module('todoListApp');

app.directive('helloWorld', function() {
  return {
    restrict: 'E',
    template: "This is the hello world directive."
  };
});
