angular.module('boxesApp').directive('bxBoxes', function($rootScope) {
    return {
        scope: {
            boxes: '=bxBoxes'
        },
        templateUrl: 'bxBoxesNgRepeat.html'
    };
});
