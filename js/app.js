// Scroll Navbar

window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})



// Email JS
function validate() {
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let message = document.querySelector(".message");
    let sendBtn = document.querySelector(".send-btn");

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || message.value == "") {
            emptyerror();

        } else {
            sendmail(name.value, email.value, message.value);
            success();
        }

    })
}

// VALIDACION FORMULARIO

validate();

function sendmail(name, email, message) {
    emailjs.send("service_p9x17ch", "template_i3splii", {
        from_name: email,
        to_name: name,
        message: message,
    });
}

function emptyerror() {
    swal({
        title: "Oh no!",
        text: "Fields cannot be empty!",
        icon: "error",
    });
}

function success() {
    swal({
        title: "Email sent successfully",
        icon: "success",
    });
}