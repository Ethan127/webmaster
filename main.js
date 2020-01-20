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

function scroll (a){
    var loc;
    var x = document.activeElement.tagName;
    if (a==="up"){
        loc = 'c' + x.charAt(1) - 1;
    }
    if (a==="down"){
        loc = 'c' + x.charAt(1) + 1;
    }
    console.log(loc);
    //location.href = loc;
}
