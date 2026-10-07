// =========================================
// CONTACT FORM VALIDATION
// =========================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const service = document.getElementById("service").value;
        const message = document.getElementById("message").value.trim();

        // Error elements
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const phoneError = document.getElementById("phoneError");
        const serviceError = document.getElementById("serviceError");
        const messageError = document.getElementById("messageError");
        const successMessage = document.getElementById("successMessage");

        // Clear previous errors
        nameError.textContent = "";
        emailError.textContent = "";
        phoneError.textContent = "";
        serviceError.textContent = "";
        messageError.textContent = "";
        successMessage.textContent = "";

        let isValid = true;

        // Name validation
        if (name === "") {
            nameError.textContent = "Please enter your name.";
            isValid = false;
        } else if (name.length < 3) {
            nameError.textContent =
                "Name must contain at least 3 characters.";
            isValid = false;
        }

        // Email validation
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            emailError.textContent = "Please enter your email.";
            isValid = false;
        } else if (!emailPattern.test(email)) {
            emailError.textContent =
                "Please enter a valid email address.";
            isValid = false;
        }

        // Phone validation
        const phonePattern =
            /^[0-9+\-\s]{10,15}$/;

        if (phone === "") {
            phoneError.textContent =
                "Please enter your phone number.";
            isValid = false;
        } else if (!phonePattern.test(phone)) {
            phoneError.textContent =
                "Please enter a valid phone number.";
            isValid = false;
        }

        // Service validation
        if (service === "") {
            serviceError.textContent =
                "Please select a service.";
            isValid = false;
        }

        // Message validation
        if (message === "") {
            messageError.textContent =
                "Please enter your message.";
            isValid = false;
        } else if (message.length < 10) {
            messageError.textContent =
                "Message must contain at least 10 characters.";
            isValid = false;
        }

        // Submit if everything is valid
        if (isValid) {

            successMessage.textContent =
                "Thank you! Your message has been submitted successfully.";

            contactForm.reset();
        }

    });

}
