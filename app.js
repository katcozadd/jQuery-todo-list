$(document).ready(function() {

	    $('#todo').on('submit', function(event) {
	    event.preventDefault();
    	var addOn = $('input[name=textBox]').val();
    	$('ul').append('<li>' + addOn + '</li>');
    	$('input[name=textBox]').val('');
    });
});



