$(document).ready(function(){
	var images = function(input, add) {

		if (input.files) {
			var num = input.files.length;

			for (i = 0; i < num; i++) {
				var reader = new FileReader();
				reader.onload = function(event) {
					$($.parseHTML('<img>')).attr('src', event.target.result).appendTo(add).css('width','150px');
				}
				reader.readAsDataURL(input.files[i]);
				
			}
		}
	};
	$('#filePhoto').on('change', function() {
		images(this, '#inner');
	});

});