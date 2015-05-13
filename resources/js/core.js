var min_width=530; // This value determins when to switch to mobile
var screenSize={
    mobile:function(){
            // ----------- Navmenu
            $(".nav-text").css({"display":"none"});
            $("#navmenu div ul li a").css({"font-size":"40px"});
            $("#navmenu div ul li a i").css({"margin-top":"20px"});
        },
    tablet:function(){
            // ----------- Navmenu
            $(".nav-text").css({"display":"none"});
            $("#navmenu div ul li a").css({"font-size":"40px"});
            $("#navmenu div ul li a i").css({"margin-top":"20px"});
        },
    laptop:function(){
            // ----------- Navmenu
            $(".nav-text").removeAttr( 'style' );
            $("#navmenu div ul li a").removeAttr( 'style' );
            $("#navmenu div ul li a i").removeAttr( 'style' );

        },
    desktop:function(){
            // ----------- Navmenu
            $(".nav-text").removeAttr( 'style' );
            $("#navmenu div ul li a").removeAttr( 'style' );
            $("#navmenu div ul li a i").removeAttr( 'style' );

        }
};

$(document).ready(function() {
    
    /**
     * Cross platform support
     * Customizes website based on screen size
     */
    var $window = $(window);
    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize>=1100)
        {
            screenSize.desktop();
        }
        else if((windowsize <= 900) && (windowsize > min_width))
        {
            screenSize.tablet();
        }
        else if (windowsize <= min_width) 
        {
            screenSize.mobile();
        }
        else
        {
            screenSize.laptop();
        }
    }
    checkWidth();
    $(window).resize(checkWidth); 
});