var i = 1;
var fadespd = 250;
var fadedelay = 500;

$(document).ready(function() {
	$('div#name').fadeIn(2500);
	$('form').fadeIn(2500);
});

function website(){
	if (i === 1) {
	startup();
	setTimeout(function() {
	$('p#para').fadeIn(fadespd);
	$('img#websites').fadeIn(250);	
	},250)
	} else {
	$('p#leftalign').fadeOut(250);	
	$('img#resume').fadeOut(250);	
	setTimeout(function() {
	$('img#websites').fadeIn(fadedelay);
	$('p#para').fadeIn(fadedelay);	
	}, 10);
	}
}


function resume1() {
	if (i === 1) {
	startup();
	setTimeout(function() {
	$('img#resume').fadeIn(250);	
	},fadedelay)
	} else {
	$('p#leftalign').fadeOut(250);	
	$('p#para').fadeOut(250);
	$('img#websites').fadeOut(250);	
	setTimeout(function() {
	$('img#resume').fadeIn(250);	
	
	}, 10);
	}

}

function contact() {
if (i === 1) {
	startup();
	setTimeout(function() {
	$('p#leftalign').fadeIn(250);
	},fadedelay)
	} else {
	$('p#para').fadeOut(250);
	$('img#websites').fadeOut(250);	
	$('img#resume').fadeOut(250);	
	setTimeout(function() {
	$('p#leftalign').fadeIn(250);	
	}, 10);
	}

}

function startup() {
	i++;
	$('div#name').animate({
	paddingTop:'0px',
	}, 250);
}
