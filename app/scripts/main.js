function cancelPayment(){
    $( ":input" ).each(function(index, element) {
      element.value = "";
    });
    
    var div = $("#paymentResult");
    div.removeClass("visible");
    div.addClass("hidden");
}