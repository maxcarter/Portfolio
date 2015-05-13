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

    /**
     * NavMenu animations
     */
    $(window).bind( 'hashchange', function(e) { 
        var anchor = document.location.hash;
            if( anchor === '#home' ) {
                $('#navmenu').stop().fadeOut( "slow", "linear");
                $( "#logo-hex" ).fadeOut("slow","linear", function(){
                    $( "#logo-hex" ).removeAttr( 'style' );
                });
            } else {
                $( "#logo-hex" ).css({"display":"block"});
                $('#navmenu').stop().fadeIn( "slow", "linear", function(){
                    $( "#logo-hex" ).animate({
                        top: "19px"
                    }, 500, function() {
                      // Animation complete.
                    });
                });
            }
    });

    /**
     * FlowType
     * Adjusts font size based on screen size
     */
    $('p').flowtype({
        minFont : 12,
        maxFont : 25
    });

    /**
     * Scroll To
     */
    $(".scroll").click(function(event){     
            event.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
        });

});