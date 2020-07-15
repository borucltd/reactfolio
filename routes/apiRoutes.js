const nodemailer = require("nodemailer");

const destination = "nodemariuszlnxsa@gmail.com";
const pwd = "sql23@joints"

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: destination,
    pass: pwd  }
});


 function routeGmail(app) {
   
    app.post("/api/email", function(req, res) {

    const  mailOptions = {
      from: req.body.from,
      to: destination,
      subject: `${req.body.from} ${req.body.subject}`,
      text: req.body.text
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        res.status(500).end();
        console.log('Error:' + error);
      } else {
        res.status(201).end();
        console.log('Email sent: ' + info.response);
      }
    });
   });
}


exports.routeGmail = routeGmail;