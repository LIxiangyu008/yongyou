$(document).ready(function(){
	$('#slider1').owlCarousel({
		items:3,
		autoPlay:false,
		pagination:false,
		navigation:true,
		stopOnHover:true,
		navigationText:["",""],
		itemsDesktop:[3000,3],
		itemsDesktopSmall:[1199,2],
		itemsTablet:[979,2],
		itemsTabletSmall:[768,2],
		itemsMobile:[599,3]
	});
	$('#slider1s').owlCarousel({
		items:3,
		autoPlay:false,
		pagination:false,
		navigation:true,
		stopOnHover:true,
		navigationText:["",""],
		itemsDesktop:[3000,3],
		itemsDesktopSmall:[1199,2],
		itemsTablet:[979,2],
		itemsTabletSmall:[768,2],
		itemsMobile:[599,3]
	});
		$('#owl-example').owlCarousel({
			items:1,
			autoPlay:3000,
			pagination:false,
			navigation:true,
			stopOnHover:true,
			navigationText:["",""],
			itemsDesktop:[3000,1],
			itemsDesktopSmall:[1199,1],
			itemsTablet:[979,1],
			itemsTabletSmall:[768,1],
			itemsMobile:[699,1]
		});
		$('#owl-example1').owlCarousel({
			items:3,
			autoPlay:false,
			pagination:false,
			navigation:true,
			stopOnHover:true,
			navigationText:["",""],
			itemsDesktop:[3000,3],
			itemsDesktopSmall:[1199,3],
			itemsTablet:[979,3],
			itemsTabletSmall:[768,1],
			itemsMobile:[699,1]
		});
		$('#owl-example2').owlCarousel({
			items:5,
			autoPlay:false,
			pagination:false,
			navigation:true,
			stopOnHover:true,
			navigationText:["",""],
			itemsDesktop:[3000,4],
			itemsDesktopSmall:[1199,4],
			itemsTablet:[979,4],
			itemsTabletSmall:[768,3],
			itemsMobile:[479,3]
		});
  		$('#owl-example3').owlCarousel({
			items:3,
			autoPlay:false,
			pagination:true,
			navigation:false,
			stopOnHover:true,
			navigationText:["",""],
			itemsDesktop:[3000,1],
			itemsDesktopSmall:[1199,1],
			itemsTablet:[979,1],
			itemsTabletSmall:[768,1],
			itemsMobile:[479,1]
		});
	});  