var i = 1;
var fadespd = 175;
var fadedelay = 500;

$(document).ready(function() {
	setTimeout(function() {
	$('div#name').fadeIn(175);
	$('form').fadeIn(175);
	}, 100);
});

function website(){
	if (i === 1) {
	startup();
	setTimeout(function() {
	$('p#para').fadeIn(fadespd);
	$('img#websites').fadeIn(275);	
	},175)
	} else {
	$('p#leftalign').fadeOut(175);	
	$('#resume').fadeOut(175);	
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
	$('#resume').fadeIn(275);	
	},fadedelay)
	} else {
	$('p#leftalign').fadeOut(175);	
	$('p#para').fadeOut(175);
	$('img#websites').fadeOut(175);	
	setTimeout(function() {
	$('#resume').fadeIn(175);	
	
	}, 250);
	}

}

function contact() {
if (i === 1) {
	startup();
	setTimeout(function() {
	$('p#leftalign').fadeIn(275);
	},fadedelay)
	} else {
	$('p#para').fadeOut(175);
	$('img#websites').fadeOut(175);	
	$('#resume').fadeOut(175);	
	setTimeout(function() {
	$('p#leftalign').fadeIn(175);	
	}, 250);
	}

}

function startup() {
	i++;
	$('div#name').animate({
	paddingTop:'0px',
	}, 400);
}
