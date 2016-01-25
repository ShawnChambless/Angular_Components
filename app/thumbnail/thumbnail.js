angular.module('app')
.directive('ssThumbnail',function() {
    return {
        restrict: 'E',
        scope: {
          title: '@',
          ref: '@',
          thumbnail: '@',
          description: '@',
          price: '@'
        },
        templateUrl: 'app/thumbnail/thumbnailTmpl.html',
        link: function(scope, elem, attrs) {
            var description = attrs.desc;
            
            elem            
            .on('mouseover', function(e) {
                e.stopPropagation();
                elem.addClass('hover');
            })
            
            .on('mouseout', function() {
               elem
                .removeClass('hover')
            });
        }
    };
});