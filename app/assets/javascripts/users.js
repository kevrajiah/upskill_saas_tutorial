/* global $, Stripe */

$(document).on('turbolinks:load', function(){
    var theForm = $('#pro-form');
    var submitBtn = $('#form-signup-btn');

    Stripe.setPublishableKey($('meta[name="stripe-key"]').attr('content'));
    
    submitBtn.click(function(event){
        event.preventDefault();
        
        var ccNum = $('#card_number').val(), 
            cvcNum = $('#card_code').val(),
            expMonth = $('#card_month').val(),
            expYear = $('#card_year').val();
            
        Stripe.createToken({
            number: ccNum,
            cvc: cvcNum,
            exp_month: expMonth,
            exp_year: expYear
        }, stripeResponseHandler);
    }); 
    
});