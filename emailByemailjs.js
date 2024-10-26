const form = document.querySelector(".contact-form");

function sendEmail(e) {
    e.preventDefault();

    var templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    };
    const serviceId = "service_jlraanh";
    const templateId = "template_6rue3kb";

    emailjs.send(serviceId, templateId, templateParams).then(() => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("message").value = "";
            alert("Your message has been sent. We'll be in touch soon.");
        }, (err) => {
            // console.log(err);
            alert(`Failed with status code ${err.status}`);
        },
    );
}

form.addEventListener("submit", sendEmail);
