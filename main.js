$(document).ready(function() {

    $('.panel').hide();

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
});
