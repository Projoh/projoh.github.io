var fadespd = 175;
var fadedelay = 300;

$(document).ready(function() {
		if($(window).height() > 700) {
			makeAllActive();
		}
	    $(".button-collapse").sideNav();
	    $('div#projectssection').fadeOut(10);
	    $('div#skillssection').fadeOut(10);
	    $('div#worksection').fadeOut(10);
	    goToAbout();
		$('.collapsible').collapsible({
      		accordion : false 
    	});
	    
});

function fadeOut(x) {
	var newname = 'div#' + x;
	$(newname).fadeOut(300);
}

function fadeIn(x) {
	var newname = "div#" + x;
	setTimeout(function() {
	$(newname).fadeIn(100);
	},fadedelay)
}

function goToProjects() {
	fadeOut('aboutsection');
	fadeOut('skillssection');
	fadeOut('worksection');
	fadeIn('projectssection');
}
function goToAbout() {
	fadeOut('projectssection');
	fadeOut('skillssection');
	fadeOut('worksection');
	fadeIn('aboutsection');
	$('div#residencediv').fadeOut(20);
	$('div#residencediv').fadeIn(2000);
	Materialize.showStaggeredList('#schoollist');
	Materialize.showStaggeredList('#worklist');
}
function goToSkills() {
	fadeOut('aboutsection');
	fadeOut('projectssection');
	fadeOut('worksection');
	fadeIn('skillssection');
	Materialize.showStaggeredList('#otherskills');
	Materialize.showStaggeredList('#programminglist');
}
function goToWork() {
	fadeOut('aboutsection');
	fadeOut('projectssection');
	fadeOut('skillssection');
	fadeIn('worksection');
	Materialize.showStaggeredList('#workcomputer');
	Materialize.showStaggeredList('#volunteer');
}

function makeAllActive() {
	for (i = 0; i < 10; i++) { 
    	$('div#ex'+i).toggleClass( "active" );
	}
}