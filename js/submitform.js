$(document).ready(function(){
	$("#submit").click(function(){					   				   
		$(".error").hide();
		var hasError = false;
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		
		var emailToVal = $("#emailTo").val();
		if(emailToVal == '') {
			$("#emailTo").after('<span class="error">Hai dimenticato di inserire il tuo indirizzo e-mail</span>');
			hasError = true;
		} else if(!emailReg.test(emailToVal)) {	
			$("#emailTo").after('<span class="error">Enter a valid email address to send to.</span>');
			hasError = true;
		}
		
		var emailFromVal = $("#emailFrom").val();
		if(emailFromVal == '') {
			$("#emailFrom").after('<span class="error">Hai dimenticato di inserire il tuo indirizzo e-mail</span>');
			hasError = true;
		} else if(!emailReg.test(emailFromVal)) {	
			$("#emailFrom").after('<span class="error">Inserisci un indirizzo e-mail valido.</span>');
			hasError = true;
		}
		
		var subjectVal = $("#subject").val();
		if(subjectVal == '') {
			$("#subject").after('<span class="error">Hai dimenticato di inserire l\'oggetto della e-mail.</span>');
			hasError = true;
		}
		
		var messageVal = $("#message").val();
		if(messageVal == '') {
			$("#message").after('<span class="error">Ehi, ma non hai proprio niente da dirmi?</span>');
			hasError = true;
		}
		
		
		if(hasError == false) {
			$(this).hide();
			$("#sendEmail li.buttons").append('<img src="images/loading.gif" alt="Loading" id="loading" />');
			
			$.post("../sendemail.php",
   				{ emailTo: emailToVal, emailFrom: emailFromVal, subject: subjectVal, message: messageVal },
   					function(data){
						$("#sendEmail").slideUp("normal", function() {				   
							
							$("#sendEmail").before('<h1>Success</h1><p>La tua e-mail é stata inviata con successo, grazie.</p>');											
						});
   					}
				 );
		}
		
		return false;
	});						   
});