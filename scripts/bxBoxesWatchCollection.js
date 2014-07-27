angular.module('boxesApp').directive('bxBoxes', function() {
    return {
        scope: {
            boxes: '=bxBoxes'
        },
        link: function(scope, el, attrs) {
            var boxEls = [];
            scope.boxes.forEach(function(box) {
                var boxEl = angular.element("<span>")
                    .addClass('box')
                    .css({
                        background: box.color
                    });
                boxEls.push(boxEl);
                el.append(boxEl);
            });
            scope.$watchCollection('boxes', function(boxes) {
                boxes && boxEls.forEach(function(boxEl, i) {
                    if (boxes[i].opened) boxEl.addClass('opened');
                    else boxEl.removeClass('opened');
                });
            });
        }
    };
});
