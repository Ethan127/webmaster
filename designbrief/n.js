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

var name = "Gomperta";

var navbar = `
<nav id="nav" class="navbar navbar-expand-lg fixed-top">
    <div class="container"><a href="index.html" class="navbar-brand text-uppercase font-weight-bold"><img class="logo" src="../assets/logo.png" height="60px"></a>
        
        <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right"><i class="fa fa-bars"></i></button>
        
        <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item"><a href="index.html" class="nav-link font-weight-bold">Home</a></li>
                <li class="nav-item"><a href="about.html" class="nav-link font-weight-bold">About Us</a></li>
                <li class="nav-item"><a href="services.html" class="nav-link font-weight-bold">Services</a></li>
                <li class="nav-item"><a href="contact.html" class="nav-link font-weight-bold">Contact</a></li>
                <li class="nav-item"><a href="../index.html" class="nav-link font-weight-bold">Main Website</a></li>
            </ul>
        </div>

    </div>
</nav>`;