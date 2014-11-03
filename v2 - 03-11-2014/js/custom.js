
	//  COMMENT 
	
	//  COMMENT 
jQuery('#show1').bind('inview', function (event, visible) {
        if (visible == true) {
            jQuery(this).addClass("animated fadeInRightBig");

			
        }else{
            jQuery(this).removeClass("animated fadeInRightBig");

			//jQuery('.effect-box').unbind('inview');
        }
    });

//  COMMENT 	

//  COMMENT 
jQuery('#show2').bind('inview', function (event, visible) {
        if (visible == true) {
            jQuery(this).addClass("animated fadeInLeftBig");

			
        }else{
            jQuery(this).removeClass("animated fadeInLeftBig");

			//jQuery('.effect-box').unbind('inview');
        }
    });

//  COMMENT 

//  COMMENT 
jQuery('#show3').bind('inview', function (event, visible) {
        if (visible == true) {
            jQuery('#show3 .feature-box').addClass("animated bounceIn");

			
        }else{
            jQuery('#show3 .feature-box').removeClass("animated bounceIn");

			//jQuery('.effect-box').unbind('inview');
        }
    });

//  COMMENT 

//  COMMENT 
jQuery('#show4').bind('inview', function (event, visible) {
        if (visible == true) {
            jQuery('#show4 .thumbnail').addClass("animated bounceIn");

			
        }else{
            jQuery('#show4 .thumbnail').removeClass("animated bounceIn");

			//jQuery('.effect-box').unbind('inview');
        }
    });

//  COMMENT 



//  COMMENT 
jQuery('#showprice').bind('inview', function (event, visible) {
        if (visible == true) {
            jQuery('.price-feature-box').addClass("animated bounceIn");

			
        }else{
            jQuery('.price-feature-box').removeClass("animated bounceIn");

			//jQuery('.effect-box').unbind('inview');
        }
    });

//  COMMENT 





//  COMMENT 
jQuery('#showbar').bind('inview', function (event, visible) {
        if (visible == true) {
            jQuery('.bar').removeClass("notactive");

			
        }else{
             jQuery('.bar').addClass("notactive");

			//jQuery('.effect-box').unbind('inview');
        }
    });

//  COMMENT 
