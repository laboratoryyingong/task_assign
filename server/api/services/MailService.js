"use strict";
const nodemailer = require("nodemailer");

function MailService() {

    this.transporter = null;

    this.init = async function () {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        this.transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: testAccount.user, // generated ethereal user
                pass: testAccount.pass // generated ethereal password
            }
        });
    }

    this.send = async function (from, to, subject, text, html) {
        // send mail with defined transport object
        let info = await this.transporter.sendMail({
            from: from, // sender address
            to: to, // list of receivers
            subject: subject, // Subject line
            text: text, // plain text body
            html: html // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }

}

module.exports = MailService;