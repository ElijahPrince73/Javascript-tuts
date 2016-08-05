$(function() { 
	
	  $(".tab-panels .tabs li").on('click',function() { 
	  
		var panelToDisplay = $(this).attr('rel');
		
		$('.tab-panels .tabs').find('li.active').removeClass('active');
		$(this).addClass('active');
		
		$('.tab-panels .panel.active').slideUp(300,function() { 
		
		  $(this).removeClass('active');
		  $('#'+panelToDisplay).slideDown(300,function() { 
		    $(this).addClass('active');
		  });
		
		
		});
	  
	  });
	
	});