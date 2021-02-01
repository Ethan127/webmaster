var homeNav=function(){
    $(function () {
        $(window).on('scroll', function () {
            if ( $(window).scrollTop() > window.innerHeight - 20 ) {
                $('.navbar').addClass('active');
            } else {
                $('.navbar').removeClass('active');
            }
        });
    });
}

var otherNav=function(){
    $(function () {
        $(window).on('scroll', function () {
            if ( $(window).scrollTop() > 15 ) {
                $('.navbar').addClass('active');
            } else {
                $('.navbar').removeClass('active');
            }
        });
    });
}