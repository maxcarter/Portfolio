$(document).ready(function() {
    
    /**
     * Stellar
     * Parallax Background
     */
    $.stellar({
        horizontalScrolling: false,
        responsive: true
    });

    /**
     * Timeliner
     * Initialize Time-Line plugin
     */
    $.timeliner({timelineContainer:'#timeline',});


    /**
     * Waypoints
     */

    // ----------- Navmenu-Fade-in
    $('.waypoint-navmenu-in').waypoint(function(direction) {
            $( "#logo-hex" ).css({"display":"block"});
            $('#navmenu').stop().fadeIn( "slow", "linear", function(){
                $( "#logo-hex" ).animate({
                    top: "19px"
                }, 500, function() {
                  // Animation complete.
                });
            });
    });

    // ----------- Navmenu-Fade-out
    $('.waypoint-navmenu-out').waypoint(function(direction) {
            $('#navmenu').stop().fadeOut( "slow", "linear");
            $( "#logo-hex" ).fadeOut("slow","linear", function(){
                $( "#logo-hex" ).removeAttr( 'style' );
            });
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


    /**
     * Parallax Space Background
     */
    var strength1 = 50;
    var strength2 = 100;
    var strength3 = 200;
    $("html").mousemove(function(e){
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var newvalueX = 1* pageX * -1;
        var newvalueY = 1* pageY * -1;
        $('#background').css("background-position", (strength1 / $(window).width() * pageX * -1)+"px "+(strength1  / $(window).height() * pageY * -1)+"px");
        $('#middleground').css("background-position", (strength2 / $(window).width() * pageX * -1)+"px "+(strength2  / $(window).height() * pageY * -1)+"px");
        $('#foreground').css("background-position", (strength3 / $(window).width() * pageX * -1)+"px "+(strength3  / $(window).height() * pageY * -1)+"px");
    });


    /**
     * Contact Form Submit
     * Makes post request to formSubmit.php and processes response.
     */
    $('#contact_form #submit').click( function( event) {
        event.preventDefault();
        $.ajax({
            url: 'resources/php/formSubmit.php',
            type: 'post',
            dataType: 'json',
            data: $('form#contact_form').serialize(),
            success: function(data) {
                console.log(data);
                $( ".form_result_error" ).css({"display":"none"});
                $( "#contact_form .detail" ).val('');
                $( "#contact_form .mess" ).val('');
                
                $( ".form_result_success" )
                    .css({"display":"block"})
                    .html(data.message);
            },
            error: function(data) {
                console.log(data);
                $( ".form_result_success" ).css({"display":"none"});
                $( ".form_result_error" )
                   .css({"display":"block"})
                   .html(data.responseJSON.message);
            }
        });
    });

});