$(document).ready(function(){
	$('#add-btn').on('click',function(){
		$('.first').show();

		console.log("hello");
		var value=$('#enter-text').val();

		$('#check').append('<li id="check-list"><input type="checkbox" name="c1" id="tick-box"> <p id="para-text">'+value+'</p> <button id="save"><i class="fa fa-pencil-square-o"></i></button></li>');
		
	});
	$(document).on('click', '#save', function(){



		if ($(this).html()==('<i class="fa fa-pencil-square-o"></i>')) { 
			var input = $('<input 	/>', {
				'class':'edit-text',
				'type': 'text',
				'name': 'unique',
				'value': $(this).prev().html()

			});
			$(this).parent().append(input);
			$(this).prev().remove();
			input.focus();

			$(this).html('Save');
			$(this).css({
				'padding': '8px 9px 8px 9px'
			});
		}
		else{

			$('.edit-text').parent().append($('<p id="para-text" />').html($('.edit-text').val()));
			$('.edit-text').remove();
			console.log("else");
			$(this).html('<i class="fa fa-pencil-square-o"></i>');
			$(this).css({
				'padding': '0px 9px 0px 9px'
			});
		}


	});
	$(document).on('change', '#tick-box', function(){
		
		$('.second').show();
		if(this.checked){
			$(this).closest('#check-list').hide();
			$('#check-two').append($(this).closest('#check-list').show());
		}
		else{
			$(this).closest('#check-list').show();
		}

	});
	$('.fa-window-close').on('click',function(){
		$('.second').hide();

	})


	


	
});