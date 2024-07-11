const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'asharani17.n@gmail.com',  // Replace with your email
            pass: 'asha6695rani.'    // Replace with your email password
        }
    });

    const mailOptions = {
        from: email,
        to: 'asharani17.n@gmail.com',       // Replace with your email
        subject: 'New Message from Portfolio',
        text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.send('Message sent successfully!');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
