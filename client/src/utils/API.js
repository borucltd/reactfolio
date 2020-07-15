import axios from "axios";


//const emailUrl = "https://www.mariusz.lnxsa.com/api/email";
const emailUrl = "http://localhost:3000/api/email";

// Export an object containing methods we'll use for accessing the random user API
export default  {
  sendEmail: function(from, subject, text) {

    const mailOptions = {
        "from": from,
        "subject": subject,
        "text": text
    };

    return axios
        .post(emailUrl, mailOptions)
        .then(res => console.log("well done: email sent"))
        .catch(err => console.log(err))
        
  }
};
