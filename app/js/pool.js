  function testJS() {

  	
  	localStorage.setItem('team',$('#max-teams').val());
  }

  function myFunction(){

  	var max=localStorage.getItem('team');
  	if(max==1)
  	{
  		$('li.name1,li.email1').nextAll().hide();
  		
  	}
  	if(max==2)
  	{
  		$('li.name2,li.email2').nextAll().hide();
  		
  	}
  	if(max==3)
  	{
  		$('li.name3,li.email3').nextAll().hide();
  		
  	}
  	if(max==4)
  	{
  		$('li.name4,li.email4').nextAll().hide();
  		
  	}
  	if(max==5)
  	{
  		$('li.name5,li.email5').nextAll().hide();
  		
  	}
  	if(max==6)
  	{
  		$('li.name6,li.email6').nextAll().hide();
  		
  	}
  	if(max==7)
  	{
  		$('li.name7,li.email7').nextAll().hide();
  		
  	}
  	if(max==8)
  	{
  		$('li.name8,li.email8').nextAll().hide();
  		
  	}
  	if(max==9)
  	{
  		$('li.name9,li.email9').nextAll().hide();
  		
  	}
  	if(max==10)
  	{
  		$('li.name10,li.email10').nextAll().hide();
  		
  	}
  	if(max==11)
  	{
  		$('li.name11,li.email11').nextAll().hide();
  		
  	}

  }

  function testDraft()
  {
  	var arr = {};
  	$('.pool-name').each(function(){
  		arr[this.id] = this.value;
  	});
  	localStorage.setItem('fieldString',JSON.stringify(arr));
  
  }

  function draft(){


  	var a= $('.drag1');
  	
        console.log(JSON.parse(localStorage.getItem('fieldString')));

       

    }
    $(document).ready(function(){  

    	$('#datetimepicker1').datetimepicker();
    	$('select').selectBoxIt();
    	$( "#sortable1, #sortable2" ).sortable({
    		connectWith: ".connectedSortable"
    	}).disableSelection();


    	$('.selectboxit-arrow-container').append('<i class=arrow-up></i>');
    	

    	
    	$('.fa-question-circle').mouseenter(function(){  	  	
    		$('.tooltiptext').css({
    			'visibility':'visible'
    		});
    	});
    	$('.fa-question-circle').mouseleave(function(){  	  	
    		$('.tooltiptext').css({
    			'visibility':'hidden'
    		});
    	});




    });
