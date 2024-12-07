// import nodemailer from "nodemailer";

// const sendBDSEmail = async (options: { email: string; subject: string; message: string }) => {
//     const transporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",
//         port: 587,
//         secure: false,
//         auth: {
//             user: "bistanagoudarsiddu@gmail.com",
//             pass: "pqid bngq hpdl aofo",
//         },
//     });

//     const mailOptions = {
//         from: "bistanagoudarsiddu@gmail.com",
//         to: options.email,
//         subject: options.subject,
//         text: options.message,
//     };

//     transporter.sendMail(mailOptions, function(error, info) {
//         if (error) {
//             console.log(error, 'error');
//         } else {
//             // console.log('mail sent',info);
//         }
//     });
// };

// export default sendBDSEmail;
