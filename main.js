$(document).ready(function() {

    $('.panel, .container-alert, .container-register').hide();

// oldal lapozó

    $('.panel, .container-alert, .container-register').hide();
            $('.menu a').on('click', function() {
                $('.menu a.active').removeClass('active');
                $(this).addClass('active');

                var panelToShow = $(this).attr('rel');

                $('.action').fadeOut(100, function() {
                    $(this).removeClass('action');

                $('#'+panelToShow).fadeIn(100, function() {
                    $(this).addClass('action');
            });
        });
    }); 

    // slider 

    $(".galery-image a").click( function(ev) {
        ev.preventDefault();
        var link = $(this);
        $('.container-slider').css({'transform' : 'scale(1)' , '-webkit-transform' : 'scale(1)', '-ms-transform' : 'scale(1)'} , function() { 
            document.location = link.attr("#href");
        });
    });

    $('.times').on('click', function() {
        $('.container-slider').css({'transform' : 'scale(0)'});
    });

    // űrlap mező 
        
        $('.form-group .btn').click(function() {

            var textName = $("#registerName").val();
            var textEmail = $('#registerEmail').val();

            if(textName  == '') {
                $('.container-alert').fadeIn(200);
                $('.container-alert').css({'z-index' : '1'}); 
                    $('.row-alert').on('click', function() {
                        $('.container-alert').fadeOut(200);
                    }); 
            }
            else if(textEmail  == '') {
                $('.container-alert').fadeIn(200); 
                    $('.row-alert').on('click', function() {
                        $('.container-alert').fadeOut(200);
                    });          
                }
            else {
                $('.container-register').fadeIn(200); 
                $('.container-register').css({'z-index' : '1'}); 
                $('.row-register h2').on('click', function() {
                    $('.container-register').fadeOut(200);
                    $('form').submit();
                });
            }
        });

    // owl carousel 
 
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            }
        }
	});


});
