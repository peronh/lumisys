$(document).ready(function() {

    $('.panel, .times').hide();
    //$('.container-slider').hide();

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

    $(".galery-image a").click( function(ev) {
        ev.preventDefault();
        var link = $(this);
        $('.times').show();

        $('.container-slider').css({'z-index' : '1000'} , function() { document.location = link.attr("href");   //);

        //$(this).attr("href");
        //, function() { document.location = link.attr("href");
        });
    });

    
        
        $('.card-body button').click(function() {
        var textValue = $("#registerName").val();
        if(textValue=='') {
        alert("Kérjük, hogy a Név és az E-mail cím mezőket ne hagyja üresen");
        }
        });

    $('.times').on('click', function() {
        $('.container-slider').css({'z-index' : '-1000'});
    }),
 
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            }/*,
            768:{
                items:1
            },
            992:{
                items:1
            },
            1920:{
                items:1
            }*/
        }
	});


});
