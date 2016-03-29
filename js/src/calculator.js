

$(function(){

	// the calculate function
	var calculate = function(){
		var amount = parseFloat( $('.amount').val().replace(/[^\d.]/ig, '') );

		var loan_info_first_six = $.loanInfo({
			amount: amount,
			rate: '1.99',
			term: '180'
		});

		var amount_remaining = amount - ( parseFloat( loan_info_first_six.payment_amount_formatted ) * 6 );

		$( '.payment-six' ).html( loan_info_first_six.payment_amount_formatted );

		var loan_info_remainder = $.loanInfo({
			amount: amount_remaining,
			rate: '3.5',
			term: '174'
		});

		$( '.payment-remaining' ).html( loan_info_remainder.payment_amount_formatted );

		$(".results").slideDown( "slow" );
		$(".tool").slideUp( "slow" );
	};


	// calculate on button click
	$( '.calculate' ).click( calculate );	


	// calculate on enter press
	$( '.amount' ).keypress(function( event ) {
		if ( event.which == 13 ) {
			event.preventDefault();
			calculate();
		}
	});


	// reverse the show/hide if they click the back button
	$(".go-back").click(function(){
		$(".results").slideUp( "slow" );
		$(".tool").slideDown( "slow" );
	});

});

