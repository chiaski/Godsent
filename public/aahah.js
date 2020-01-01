$( document ).ready(function() {
    
	var x = Math.max(0, Math.min(60, Math.ceil(Math.random() * 100)));
	var y = Math.max(0, Math.min(60, Math.ceil(Math.random() * 100)));
    
    $('.aword').each(function(){
        $('.aword').css({
            top: y + '%',
            left: x + '&'
        })
    });
    
});