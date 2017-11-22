$(document).ready(function(){
	var images = function(input, add) {

		
		var reader = new FileReader();
		reader.onload = function(event) {
			$($.parseHTML('<img>')).attr('src', event.target.result).appendTo(add).css('width','150px');
		}
		reader.readAsDataURL(input.files[0]);
		
		
	};
	$('#filePhoto').on('change', function() {
		images(this, '#inner');
	});

});