var i = 1;
var fadespd = 100;
var fadedelay = 500;

$(document).ready(function() {
	setTimeout(function() {
	$('div#name').fadeIn(100);
	$('form').fadeIn(100);
	}, 1000);
});

function website(){
	if (i === 1) {
	startup();
	setTimeout(function() {
	$('p#para').fadeIn(fadespd);
	$('img#websites').fadeIn(100);	
	},100)
	} else {
	$('p#leftalign').fadeOut(100);	
	$('img#resume').fadeOut(100);	
	setTimeout(function() {
	$('img#websites').fadeIn(fadedelay);
	$('p#para').fadeIn(fadedelay);	
	}, 250);
	}
}


function resume1() {
	if (i === 1) {
	startup();
	setTimeout(function() {
	$('img#resume').fadeIn(100);	
	},fadedelay)
	} else {
	$('p#leftalign').fadeOut(100);	
	$('p#para').fadeOut(100);
	$('img#websites').fadeOut(100);	
	setTimeout(function() {
	$('img#resume').fadeIn(100);	
	
	}, 250);
	}

}

function contact() {
if (i === 1) {
	startup();
	setTimeout(function() {
	$('p#leftalign').fadeIn(100);
	},fadedelay)
	} else {
	$('p#para').fadeOut(100);
	$('img#websites').fadeOut(100);	
	$('img#resume').fadeOut(100);	
	setTimeout(function() {
	$('p#leftalign').fadeIn(100);	
	}, 250);
	}

}

function startup() {
	i++;
	$('div#name').animate({
	paddingTop:'0px',
	}, 100);
}
