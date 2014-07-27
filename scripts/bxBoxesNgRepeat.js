angular.module('boxesApp').directive('bxBoxes', function() {
    return {
        scope: {
            boxes: '=bxBoxes'
        },
        templateUrl: 'bxBoxesNgRepeat.html'
    };
});
