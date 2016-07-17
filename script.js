var fadeOutSpd = 195;
var fadedelay = 0;

jQuery(document).ready(function($) {
    $('div#projectssection').fadeOut(0);
    $('div#skillssection').fadeOut(0);
    $('div#worksection').fadeOut(0);
    $('div#aboutsection').fadeOut(0);
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
});

function fadeOutSection(x) {
    var newname = 'div#' + x;
    $(newname).fadeOut(fadeOutSpd);
}

function fadeInSection(x) {
    var newname = "div#" + x;
    $(newname).fadeIn(225);
}

function goToProjects() {
    fadeOutSection('aboutsection');
    fadeOutSection('skillssection');
    fadeOutSection('worksection');
    fadeInSection('projectssection');
}

function goToAbout() {
    fadeOutSection('projectssection');
    fadeOutSection('skillssection');
    fadeOutSection('worksection');
    fadeInSection('aboutsection');
    $('div#residencediv').fadeOut(0);
    $('div#residencediv').fadeIn(300);
    Materialize.showStaggeredList('#schoollist');
    Materialize.showStaggeredList('#worklist');
}

function goToSkills() {
    fadeOutSection('aboutsection');
    fadeOutSection('projectssection');
    fadeOutSection('worksection');
    fadeInSection('skillssection');
    Materialize.showStaggeredList('#otherskills');
    Materialize.showStaggeredList('#programminglist');
}

function goToWork() {
    fadeOutSection('aboutsection');
    fadeOutSection('projectssection');
    fadeOutSection('skillssection');
    fadeInSection('worksection');
    Materialize.showStaggeredList('#workcomputer');
    Materialize.showStaggeredList('#volunteer');
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
    switch (path) {
        case 'about':
            goToAbout();
            break;
        case 'projects':
            goToProjects();
            break;
        case 'skills':
            goToSkills();
            break;
        case 'work':
            goToWork();
            break;
    }
}

$(window).on('hashchange', function() {
    goTo('' + location.hash);
});