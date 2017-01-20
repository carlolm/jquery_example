alert("Hello! I am an alert box!!");

$(document).ready(function() {
	$('.box').fadeIn('slow');
	$('.box').selectable();
	alert('jQuery enabled');
});