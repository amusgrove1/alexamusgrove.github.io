// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){ //do what's inside when the document is ready
    $("#enforcement, #newsletter").validate( {  //run the validate plugin on the html element with id of email_form
        rules: {  //include the rules that must be followed here
            "email_1": {  //the email_1 element in the #email_form should meet the following conditions:
                required: true,  //email_1 is required
                email: true      //email_1 needs to be an email address
            },
			"email_2": {  //the email_1 element in the #email_form should meet the following conditions:
                required: true,  //email_1 is required
                email: true      //email_1 needs to be an email address
            },
            "first_name": {
                required: true  //first_name is required
            },
			"last_name": {
                required: true  //last_name is required
            },
			"address": {
			required:true
		
			},
			"message": {
			required: true
		}
		
        },
        messages: {  //include here the customized messages to alert the user to an input error
            //for each rule set above, you'll have a messages set here
            //to have truly customized messages, you'll have a 1:1 ratio of rules and messages
            "email_1": {
                required: "*Please enter your email address",  //if this rule is not met, this message will be displayed
                email: "*Please enter a valid email"
            },
			"email_2": {
                required: "*Please enter your email address",  //if this rule is not met, this message will be displayed
                email: "*Please enter a valid email"
            },
            "first_name": {
                required: "*Name is required"
            },
			"last_name": {
                required: "*Name is required"
           
            },
			"message": {
			required: "*A description is required"
		    
			},
			"address": {
			required: "*An address is required"
		    }
        }

	});
 });