angular.module('boxesApp').controller('boxesCtrl', function($rootScope, $scope) {
    var n = 20 * 20, // 20 rows, 20 cols
        dataSize = 1500,
        colors = ['#ff8080', '#ff80ac', '#ff80dd', '#f280ff', '#ca80ff', '#9b80ff', '#8086ff', '#80a6ff', '#80ccff', '#80e8ff', '#80ffe3', '#80ffc6', '#80ffaa', '#95ff80', '#b9ff80', '#e3ff80', '#fff480', '#ffd080', '#ffaa80', '#ff8c80'];

    // generate boxes
    $scope.boxes = [];
    for (var i = 0; i < n; i++) {
        var color = colors[Math.floor(Math.random() * colors.length)],
            randArr = [];
        while (randArr.length < dataSize) randArr.push(Math.random());
        $scope.boxes.push({
            color: color,
            opened: false,
            data: randArr
        });
    }

    $scope.colors = {
        list: colors,
        opened: null
    }

    $rootScope.time = null;

    $scope.$watch('colors.opened', function(color) {
        // // Option 1:
        // // keep the reference to the 'boxes' array, but change
        // // references to 'box' objects inside the array.
        // // this will not enable us to use a simple shallow-watch
        // // on 'boxes'.
        // for (var i = 0; i < $scope.boxes.length; i++) {
        //     var box = $scope.boxes[i];
        //     $scope.boxes.splice(i, 1, {
        //         color: box.color,
        //         opened: box.color === color,
        //         data: box.data
        //     });
        // }

        // Option 2:
        // generate a completely new array, thus changing the reference
        // in $scope.boxes.
        // This requires more memory, but enables us to use a simple
        // shallow-watch on 'boxes'.
        $scope.boxes = $scope.boxes.map(function(box) {
            return {
                color: box.color,
                opened: box.color === color,
                data: box.data
            };
        });
    });
});
