jQuery(document).ready(function($) {
    fadeOutSpd = 195;
    fadedelay = 0;
	lastlocation = 'aboutsection';
	initialize();
});



function fadeOutSection(x) {
    var newname = 'div#' + x;
    $(newname).fadeOut(fadeOutSpd);
}

function fadeInSection(x) {
    var newname = "div#" + x;
    $(newname).fadeIn(225);
}

function makeAllActive() {
    for (i = 0; i < 10; i++) {
        $('div#ex' + i).toggleClass("active");
    }
}

function jumpTo(path) {
    var url = location.href;
    location.href = "#" + path;
}

function goTo(path) {
    path = path.replace('#', "");
    $('ul.tabs').tabs('select_tab', path);
    path = path+ 'section';
    $('div#' + lastlocation).toggle(false);
    fadeInSection(path);
    lastlocation = path;
    switch (path) {
        case 'aboutsection':
            $('div#residencediv').fadeOut(0);
    		$('div#residencediv').fadeIn(300);
    		Materialize.showStaggeredList('#schoollist');
    		Materialize.showStaggeredList('#worklist');
            break;
        case 'projectssection':
            goToProjects();
            break;
        case 'skillssection':
            Materialize.showStaggeredList('#otherskills');
    		Materialize.showStaggeredList('#programminglist');
            break;
        case 'worksection':
            Materialize.showStaggeredList('#workcomputer');
    		Materialize.showStaggeredList('#volunteer');
            break;
    }
}

function initialize() {
	Materialize.toast('k ' + location.hash, 4000)
    if (location.hash == "" || location.hash == null || location.hash == "#!") {
        location.hash = "about";
    } else {
        goTo(location.hash);
    }

    if ($(window).height() > 700) {
        makeAllActive();
    }

    $(".button-collapse").sideNav();
    $('.collapsible').collapsible({
        accordion: false
    });
    $('ul.tabs').tabs();

    // Google Tracking:
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-80849181-1', 'auto');
      ga('send', 'pageview');
}

$(window).on('hashchange', function() {
    goTo('' + location.hash);
});
