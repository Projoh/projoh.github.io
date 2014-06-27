var i = 1;
$(document).ready(function() {
	$('div#name').fadeIn(2500);
	$('form').fadeIn(2500);
});

function website(){
	if (i === 1) {
	startup();
	setTimeout(function() {
	$('p#para').fadeIn(500);
	$('img#websites').fadeIn(500);	
	},500)
	} else {
	$('p#leftalign').fadeOut(500);	
	$('img#resume').fadeOut(500);	
	setTimeout(function() {
	document.getElementById("para").innerHTML="All of these pictures should be some pictures of examples of websites I made. That sentence is retarded on  purpose, fagot.<br>";
	$('img#websites').fadeIn(1500);
	$('p#para').fadeIn(1000);	
	}, 500);
		
	}
}


function resume1() {
	if (i === 1) {
	startup();
	setTimeout(function() {
	$('img#resume').fadeIn(500);	
	},1500)
	} else {
	$('p#leftalign').fadeOut(500);	
	$('p#para').fadeOut(500);
	$('img#websites').fadeOut(500);	
	setTimeout(function() {
	$('img#resume').fadeIn(500);	
	
	}, 800);
	}

}

function contact() {
if (i === 1) {
	startup();
	setTimeout(function() {
	$('p#leftalign').fadeIn(500);
	},1500)
	} else {
	$('p#para').fadeOut(500);
	$('img#websites').fadeOut(500);	
	$('img#resume').fadeOut(500);	
	setTimeout(function() {
	$('p#leftalign').fadeIn(500);	
	}, 800);
	}

}

function startup() {
	i++;
	$('div#name').animate({
	paddingTop:'0px',
	}, 500);
}
