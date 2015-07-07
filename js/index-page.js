
$(function () {
    /*
    - how to call the plugin:
    $( selector ).cbpFWSlider( [options] );
    - options:
    {
        // default transition speed (ms)
        speed : 500,
        // default transition easing
        
    }
    - destroy:
    $( selector ).cbpFWSlider( 'destroy' );
    */

    $('#cbp-fwslider').cbpFWSlider({
        easing: 'ease'
});

});

$('.carousel[data-type="multi"] .item').each(function () {
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < 2; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});


