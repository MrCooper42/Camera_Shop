'use strict';

const app = angular.module("cameraShop", [])


app.controller("cameraCart", ($scope) => {
  $scope.order = "rating"
  $scope.data = [{
    title: 'Nikon D3100 DSLR',
    image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
    rating: 3.4,
    price: 369.99,
    onSale: true
  }, {
    title: 'Canon EOS 70D',
    image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',
    rating: 2.0,
    price: 1099.0,
    onSale: false
  }, {
    title: 'Nikon D810A',
    image: 'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',
    rating: 4.2,
    price: 3796.95,
    onSale: true
  }]

  $scope.total = 0;
  $scope.currentItems = [];

  let tax = .10;

  $scope.addItem = (point) => {
    $scope.currentItems.push(point);
    updatePrice();
  }

  const updatePrice = () => {
    let sum = 0;
    for (let i = 0; i < $scope.currentItems.length; i++) {
      sum += $scope.currentItems[i].price;
    }

    $scope.total = sum + (sum * tax);
    $scope.total = Math.floor($scope.total);
    console.log($scope.total);
  }
})
