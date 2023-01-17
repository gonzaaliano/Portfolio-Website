// Scroll Navbar

const header = document.querySelector("header");
const sectionOne = document.querySelector(".banner");

const sectionOneOptions = {
    rootMargin: "-150px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function (
    entries, 
    sectionOneObserver
    ) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                header.classList.add("nav-scrolled");
            } else {
                header.classList.remove("nav-scrolled");
            }
        })
}, 
sectionOneOptions);

sectionOneObserver.observe(sectionOne);




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


// NAV RESPONSIVE

$(document).ready(function() {
    $('#icon').click(function() {
        $('ul').toggleClass('show');
    });
});

$(document).ready(function() {
    $('#cross-icon').click(function() {
        $('ul').toggleClass('show');
    });
});