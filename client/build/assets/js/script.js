$(function() {

const emailUrl = "https://www.mariusz.lnxsa.com/api/email";
//const emailUrl = "http://localhost:3001/api/email";
const emailEl = $("#email");
const subjectEl = $("#subject");
const messageEl = $("#message");
const sendEl = $("#send");

function validateEmail(...elements){

    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let errors = [0,0,0];

    console.log("Checking elements")

    if (reg.test(elements[0]) == false) 
    {
        errors[0] = 1;
    }

    if (elements[1] == "") {
        errors[1] = 1;
    }

    if (elements[2] == "") {
        errors[2] = 1;
    }
    
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    if (errors.reduce(reducer) > 0) 
    {
        alert('Please check email, subject or message field.');
        return false;
    } else {
        return true;
    }   
}

function emailSent() {

    emailEl.prop('disabled', true);
    subjectEl.prop('disabled', true);
    messageEl.prop('disabled', true);

    emailEl.css("background", "green");
    subjectEl.css("background-color", "green");
    messageEl.css("background-color", "green");
    messageEl.css('color', "white");
    messageEl.val('Email sent!!!');

}


sendEl.on("click",() => {
  
    const mailOptions = {
        "from": emailEl.val(),
        "subject": subjectEl.val(),
        "text": messageEl.val()
    };

    event.preventDefault();
    console.log(mailOptions);

    if (validateEmail(emailEl.val(),subjectEl.val(),messageEl.val())) {

        $.ajax({
            url: emailUrl,
            type: 'POST',
            data: mailOptions,
            timeout: 30000,
            error: function(){
                console.log("Some issues with the server..");
            },
            success: function(msg){ 
                emailSent();
                console.log("Email sent!!!");
            }
    });
    } else {
        console.log('Invalid e-mail/subject/message.');
    }
  
})

});