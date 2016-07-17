var fadespd = 100;
var fadedelay = 100;

jQuery(document).ready(function($) {
		$('div#projectssection').fadeOut(0);
	    $('div#skillssection').fadeOut(0);
	    $('div#worksection').fadeOut(0);
	    $('div#aboutsection').fadeOut(0);
		if(location.hash == "" || location.hash == null) {
			location.hash = "about";
		} else {
			goTo(location.hash);
		}
		
		if($(window).height() > 700) {
			makeAllActive();
		}

	    $(".button-collapse").sideNav();
		$('.collapsible').collapsible({
      		accordion : false 
    	});	  
    	 $('ul.tabs').tabs();
});

function fadeOut(x) {
	var newname = 'div#' + x;
	$(newname).fadeOut(100);
}

function fadeIn(x) {
	var newname = "div#" + x;
	setTimeout(function() {
	$(newname).fadeIn(fadespd);
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

function jumpTo(path) {
	var url = location.href;  
    location.href = "#"+path;
}

function goTo(path) {
	path = path.replace('#', "");
	$('ul.tabs').tabs('select_tab', path);
	switch(path) {
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


function pageManagerGoBack() {	
	var lastpage = pages[pages.length-1];
	if(!(lastpage == undefined)) {
		jumpTo(lastpage);
	}
}

$(window).on('hashchange', function() {
	goTo('' + location.hash);
});