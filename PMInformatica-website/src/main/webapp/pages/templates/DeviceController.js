angular.module('pmInformaticaWebSiteAngular.controllers')

.controller('DeviceController',
		[ '$scope', function($scope) {
			
			
			$scope.isMobileDevice ;
			$scope.containerClass ;
						
			$scope.isMobile = function(){
				
				if( isMobile.any() ){
					$scope.isMobileDevice = true;
					$scope.containerClass = "container-mobile";
				}
				else{
					$scope.isMobileDevice = false;
					$scope.containerClass = "container";
				}
			};
			
			var isMobile = {
				    Android: function() {
				        return navigator.userAgent.match(/Android/i);
				    },
				    BlackBerry: function() {
				        return navigator.userAgent.match(/BlackBerry/i);
				    },
				    iOS: function() {
				        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
				    },
				    Opera: function() {
				        return navigator.userAgent.match(/Opera Mini/i);
				    },
				    Windows: function() {
				        return navigator.userAgent.match(/IEMobile/i);
				    },
				    any: function() {
				        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
				    }
				};
			
} ]);
