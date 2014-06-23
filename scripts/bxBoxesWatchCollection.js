angular.module('boxesApp').directive('bxBoxes', function() {
    return {
        scope: {
            boxes: '=bxModel'
        },
        link: function(scope, el, attrs) {
            scope.boxEls = [];
            scope.$watch('boxes', function(boxes) {
                boxes && boxes.forEach(function(box) {
                    var boxEl = angular.element("<span>")
                        .addClass('box')
                        .css({
                            background: box.color
                        });
                    scope.boxEls.push(boxEl);
                    el.append(boxEl);
                });
            });
        },
        controller: function($scope) {
            $scope.$watchCollection('boxes', function(boxes) {
                boxes && $scope.boxEls.forEach(function(boxEl, i) {
                    if (boxes[i].active) boxEl.addClass('active');
                    else boxEl.removeClass('active');
                });
            });
        }
    };
});
