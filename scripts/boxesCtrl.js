angular.module('boxesApp').controller('boxesCtrl', function($scope, $interval) {
    var n = 20 * 20, // 20 rows, 20 cols
        speed = 30, // ms
        dataSize = 1000,
        colors = ['#ff8080', '#ff80ac', '#ff80dd', '#f280ff', '#ca80ff', '#9b80ff', '#8086ff', '#80a6ff', '#80ccff', '#80e8ff', '#80ffe3', '#80ffc6', '#80ffaa', '#95ff80', '#b9ff80', '#e3ff80', '#fff480', '#ffd080', '#ffaa80', '#ff8c80'];

    $scope.boxes = [];
    for (var i = 0; i < n; i++) {
        var color = colors[Math.floor(Math.random() * colors.length)],
            randArr = [];
        while (randArr.length < dataSize) randArr.push(Math.random());
        $scope.boxes.push({
            color: color,
            active: i === n - 1,
            data: randArr
        });
    }

    $scope.rate = 0;
    var i = 0;
    var time = Date.now();
    $interval(function() {
        toggleActive($scope.boxes[i], i);
        toggleActive($scope.boxes[i - 1 < 0 ? n - 1 : i - 1], i - 1 < 0 ? n - 1 : i - 1);
        $scope.time = Date.now() - time;
        time = Date.now();
        i = (i + 1) % n
    }, speed);

    function toggleActive(box, k) {
        $scope.boxes.splice(k, 1, {
            color: box.color,
            active: !box.active,
            data: box.data
        });
    }
});
