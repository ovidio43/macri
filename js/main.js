$(document).ready(function(){
    var mobile = (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
    $('.in').bind('click', function(){
    	$('#overlay-dashboard').attr('class','');
    	$('#overlay-dashboard').addClass($(this).attr('data-color')).css('display','block');
    	
		$('#load-data').load("include/"+$(this).attr('data-src'),function(){          
		    loadAfterAjax();  
		    adjustHeight();
		});    	
    });
    $('.close').bind('click', function(){
    	$('#overlay-dashboard').css('display','none');
    	$('.dashboard').css('height','auto');
    });
    $('.close-alert').bind('click', function(){
    	$('.alert').css('display','none');
    });    
    
    function adjustHeight(){
    	var dashHeight = $('.dashboard').height();
    	var overlayHeight = $('#load-data').height();
    	
    	if(overlayHeight >dashHeight){
    		$('.dashboard').height(overlayHeight);
    	}else{
    		$('.dashboard').height(dashHeight);
    	}
    }
/**
 esto se usa solo para testear los siguientes pasos, debera ser eliminado o modificado segun lo que se necesite
*/
$('.fancy-resize').trigger('click');
	function loadAfterAjax(){

		/* oculta muestra detalle de twitter*/
		$('.select-options li').bind('click', function(){
			$('.select-options li').removeClass('active-tweet');
			$(this).addClass('active-tweet');
			$('.load-tweet').load("include/"+$(this).attr('data-src'),function(){  
				adjustHeight();        
				$('.load-thank').bind('click', function(event){
					event.preventDefault();
					$('.load-tweet').load("include/"+$(this).attr('data-src'),function(){   
					adjustHeight();       
					});			
				});
			});			
		});
	
		/* carga script despues de load ajax*/
	    $('.display-next-step').bind('click', function(event){
	    	event.preventDefault();
			$('#load-data').load("include/"+$(this).attr('data-src'),function(){ 
				adjustHeight();    
$('input[type="checkbox"].large').checkbox({
    buttonStyle: 'btn-link btn-large',
    checkedClass: 'icon-check',
    uncheckedClass: 'icon-check-empty'
});   
			    $('.loadthanks-friend').bind('click', function(event){
			    	event.preventDefault();
			    	$('#overlay-dashboard').removeClass('white').addClass($(this).attr('data-color')+' small-overlay'); 
					$('#load-data').load("include/"+$(this).attr('data-src'),function(){  
						adjustHeight();        
					        $('.close').bind('click', function(){
						    	$('#overlay-dashboard').css('display','none');
						    });
					});	    	
			    });
			});	    	
	    }); 		
	}
});


