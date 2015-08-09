(function($) {

	// a11y - only display outlines for tabbing
	var lastKey = new Date(),
        lastClick = new Date();
        $(document).on( "focusin", function(e){
        	$(".keyboard-outline").removeClass("keyboard-outline");
        	var wasByKeyboard = lastClick < lastKey;
        	if( wasByKeyboard ) {
            		$( e.target ).addClass( "keyboard-outline");
        	}
    	});
    	$(document).on( "click", function(){
        	lastClick = new Date();
    	});
    	$(document).on( "keydown", function() {
        	lastKey = new Date();
    	});

    // Add detatched class if user has scrolled down.
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll >= 25) {
            $('#nav').addClass('detatched');
        } else {
            $('#nav').removeClass('detatched');
        }
    });

    // close navigation menu since its internal links
    $('.nav li a').on('click',function(){
        $('.navbar-collapse.in').collapse('hide');
    });

     $("#countdown").countdown({
        template : '<div class="count-item">%d<span>%td</span></div><div class="count-item">%h<span>%th</span></div><div class="count-item">%i<span>%ti</span></div><div class="count-item">%s<span>%ts</span></div>',
        //yearsAndMonths : true,
        date : "may 28, 2016 1700",
        onComplete : function(event) {
            $(this).html("<h2>OMG!</h2>");
        }
    });

    $(document).ready(function(){
        $('a[href^="#"]').on('click',function (e) {
            e.preventDefault();

            var target = this.hash;
            var $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        });
    });

})(jQuery);