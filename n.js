//Old design where the navbar is invisible but becomes white on scroll. Hard to read text.
/*var homeNav=function(){
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
}*/

var homeNav=function(){
    $(function () {
        $('.navbar').addClass('active');
    });
}
var otherNav=function(){
    $(function () {
        $('.navbar').addClass('active');
    });
}

var parallaxEffect=function(){
    $(function() {
        $(window).scroll(function() {
            var scrolled = $(window).scrollTop()
            $('.parallax').each(function(index, element) {
                var initY = $(this).offset().top
                var height = $(this).height()
                var endY  = initY + $(this).height()

                var visible = isInViewport(this)
                if(visible) {
                var diff = scrolled - initY
                var ratio = Math.round((diff))
                $(this).css('background-position','center ' + parseInt(ratio * 0.5) + 'px')
                }
            })
        })
    })
}

function isInViewport(node) {
    var rect = node.getBoundingClientRect()
    return (
      (rect.height > 0 || rect.width > 0) &&
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }


var navbar = `
<nav id="nav" class="navbar navbar-expand-lg fixed-top" style = "text-align-center">
    <div class="container"><a href="index.html" class="navbar-brand text-uppercase font-courier font-weight-bold"></a>
        
<button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right"><i class="fa fa-bars"></i></button>
        
        <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
                <li id="homel" class="nav-item"><a href="index.html" class="nav-link font-family font-weight-bold">Home</a></li>
                <li id="aboutl" class="nav-item"><a href="about.html" class="nav-link font-weight-bold">About Us</a></li>
                <li id="schedulel" class="nav-item"><a href="schedule.html" class="nav-link font-weight-bold">Schedule</a></li>
                <li id="servicesl" class="nav-item"><a href="services.html" class="nav-link font-weight-bold">Pricing</a></li>
                <li id="contactl" class="nav-item"><a href="contact.html" class="nav-link font-weight-bold">Contact</a></li>
                <li id="sourcesl" class="nav-item"><a href="sources.html" class="nav-link font-weight-bold">Sources</a></li>
                <li id="docl" class="nav-item"><a href="doc.html" class="nav-link font-weight-bold">Documentation</a></li>
            </ul>
        </div>

    </div>
</nav>`;