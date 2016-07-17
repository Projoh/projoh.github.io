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
    if (location.hash == "" || location.hash == null) {
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
}

$(window).on('hashchange', function() {
    goTo('' + location.hash);
});