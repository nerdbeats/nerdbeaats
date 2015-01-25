window.app.directive('bpFilterEffect', function () {
  return {
    restrict: 'E',
    templateUrl: 'components/effects/bp-filter/template.html',
    link: function ($scope) {
      var node = $scope.node;
      node.gain(-5);
      $scope.$watch('value', function (newValue) {
        node.frequency(newValue);
      });
    },
    scope: {
      node: '=',
      value: '=',
      type: '='
    }
  };
});
