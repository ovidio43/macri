function adjustHeight(){
	var dashHeight = $('.dashboard').height();
	var overlayHeight = $('#load-data').height();
	//alert("fondo: "+dashHeight+" encima: "+ overlayHeight);
	if(overlayHeight >dashHeight){
		$('.dashboard').height(overlayHeight);
		$('#overlay-dashboard').height(overlayHeight);
	}else{
		$('.dashboard').height(overlayHeight);
		$('#overlay-dashboard').height(overlayHeight);
	}
}
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
 
		    $('.loadthanks-friend').bind('click', function(event){
		    	event.preventDefault();
		    	$('#overlay-dashboard').removeClass('white').addClass($(this).attr('data-color')+' small-overlay'); 
		    	$('.small-overlay').height($('.in').height()*2);
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
function heightBanner(){
	var h=$(window).height();
	$('.height-banner').height(h);
	$('.nano').attr('style','height:'+(h-41)+'px!important');
}
$(document).ready(function(){
	heightBanner();
    var mobile = (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
    $('.in').bind('click', function(){
    	$('#overlay-dashboard').attr('class','');
    	$('#overlay-dashboard').addClass($(this).attr('data-color')).css('display','block');
    	adjustHeight();
		$('#load-data').load("include/"+$(this).attr('data-src'),function(){          
		    loadAfterAjax();  
		    adjustHeight();
		});    	
    });
    $('.close').bind('click', function(){
    	$('#overlay-dashboard').css('display','none');
    	$('.dashboard').css('height','auto');
    	$('#load-data').html('');
    });
    $('.close-alert').bind('click', function(){
    	$('.alert').css('display','none');
    });    
    jQuery(window).resize(function() {
    	//adjustHeight();
    	heightBanner();
    });    

	$('.fancy-resize').trigger('click');

});


