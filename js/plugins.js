// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
    $(".nano").nanoScroller({});
    $(".fancy-login").fancybox({
        maxWidth    : 800,
        maxHeight   : 600,
        fitToView   : true,
        autoSize    : true,
        closeClick  : false,
        closeBtn : false,
        openEffect  : 'none',
        closeEffect : 'none'
    });
    var $fancy = $(".fancy-resize").fancybox({
        maxWidth    : 800,
        maxHeight   : 600,
        fitToView   : true,
        autoSize    : true,
        autoResize  : true,
        closeClick  : false,
        closeBtn : false,
        openEffect  : 'none',
        closeEffect : 'none',
        ajax: {
            complete: function(jqXHR, textStatus) {
                $('.close-modal').bind('click', function(event){
                    $.fancybox.close();
                });                 
                
            }
        }
   
    }); 
}());

// Place any jQuery/helper plugins in here.
