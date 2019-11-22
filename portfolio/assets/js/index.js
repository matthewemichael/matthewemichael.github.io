$('.nav').click(function() {
    var id = $(this).attr('id');
    $('html, body').animate({
        scrollTop: ($('#' + id + '.section').offset().top)
    }, 1000);
});

$('.down-arrow').click(function() {
    var id = $(this).attr('id');
    $('html, body').animate({
        scrollTop: ($('#' + id + '.section').offset().top)
    }, 1000);
});

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });
});