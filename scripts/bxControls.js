angular.module('boxesApp').directive('bxControls', function($rootScope) {
    return {
        scope: {
            colors: '=bxControls'
        },
        templateUrl: 'controls.html',
        link: function(scope) {
            scope.click = function(color) {
                // We want to detach from Angular's digest cycle so we can
                // independently measure the time for one cycle.
                setTimeout(function() {
                    setColor(color);
                }, 0);
            }

            function setColor(color) {
                var time = Date.now();
                // trigger opening and closing of boxes:
                $rootScope.$apply(function(){
                    scope.colors.opened = color;
                });
                // measure how long it took:
                time = Date.now() - time;
                $rootScope.$apply(function(){
                    $rootScope.time = time;
                });
            }
        }
    };
});
