'use strict';

var app = angular.module('todoListApp');

app.controller('mainCtrl', function($scope, dataService){

  $scope.addTodo = function(todo) {
    var todo = {name: "This is a new todo."};
    $scope.todos.unshift(todo);
  };

  $scope.helloConsole = dataService.helloConsole;

  $scope.editing = false;

  $scope.helloWorld = function(){
    console.log("Hello there!");
  };

  $scope.learningNgChange = function(){
    console.log("An input changed!");
  };

  dataService.getTodos(function(response){
    console.log(response.data);
    $scope.todos =  response.data;
  });

  $scope.deleteTodo = function(todo, index) {
    dataService.deleteTodo(todo);
    $scope.todos.splice(index, 1);
  };

  $scope.saveTodos = function(todo) {
    var filteredTodos = $scope.todos.filter(function(todo) {
      if (todo.edited) {
        return todo;
      }
    });
    dataService.saveTodos(filteredTodos);
  };

});
