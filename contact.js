const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nom = document.getElementById("nom").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const subject = encodeURIComponent("Contact portfolio - " + nom);
        const body = encodeURIComponent(
            "Nom : " + nom + "\n" +
            "Email : " + email + "\n\n" +
            message
        );

        window.location.href =
            "mailto:adelinemeistertzheim@gmail.com?subject=" +
            subject +
            "&body=" +
            body;
    });
}
