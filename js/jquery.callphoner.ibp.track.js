jQuery(document).ready(function(){
	if (typeof _ibp_phone_number !== 'undefined') {
    edi_phone = _ibp_phone_number;

edi_phone = edi_phone.replace("(", "");

edi_phone = edi_phone.replace(")", "");

edi_phone = edi_phone.replace(" ", "");

edi_phone = edi_phone.replace("-", "");

edi_phone = "+1"+edi_phone;

jQuery('a.call').attr('href', 'tel:'+edi_phone);
}


	jQuery("a.call").each(function() {
		var href = jQuery(this).attr("href");
		var target = jQuery(this).attr("target");
		var text = jQuery(this).text();
		jQuery(this).click(function(event) { // when someone clicks these links
			event.preventDefault(); // don't open the link yet
			ga('send', 'event', 'PhoneCall', 'click', href);
			console.log(href); // create a custom event
			setTimeout(function() { // now wait 300 milliseconds...
				window.open(href,(!target?"_self":target)); // ...and open the link as usual
			},300);
		});
	});

});