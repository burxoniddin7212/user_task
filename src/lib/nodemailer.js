import nodemailer from "nodemailer";


export let nodemailer_function = async (gmail, message) => {
  let transporter = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "bahodirjon742551996@gmail.com",
      pass: "kzkquiiibwgrvruw"
    },
  });

  let info = await transporter.sendMail({
    from: '"SERIUS AGENSY "  <foo@example.com>',
    to: gmail,
    subject: message,
    text: message,
    html: `${message}</b>`
  });
}

//main("liverpul7212@gmail.com", "real madrid").catch(console.error);