// require('dotenv').config();

const form = document.querySelector(".contact-form");

function sendMail(e) {
    e.preventDefault()

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // console.log(`C Name: ${name}`);
    // console.log(`C email: ${email}`);
    // console.log(`C phone: ${phone}`);
    // console.log(`C message: ${message}`);

    Email.send({
        SecureToken: "super-weak-now-but-the-real-one-is-secure",
        To : "mymailusername@core.systems",
        From : "yourlovelyname@yourcompany.com",
        Subject : `${name} Getting In Touch`,
        Body : `${message}\nRegards\n${name}\n${email}\n${phone}`
    }).then(
        message => alert(message)
    );

    alert("Your message has been sent. We'll be in touch soon.");
}

form.addEventListener("submit", sendMail);
