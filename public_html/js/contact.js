AOS.init({
  duration: 800,
  once: true,
});

// --- IMPROVED FORM VALIDATION AND SUBMISSION ---
const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");

contactForm.addEventListener(
  "submit",
  (event) => {
    // Prevent default submission behavior first
    event.preventDefault();
    event.stopPropagation();

    // Check if the form is valid
    if (contactForm.checkValidity()) {
      // If valid, show success message
      formFeedback.innerHTML = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
              <strong>Gửi thành công!</strong> Cảm ơn bạn đã liên hệ, chúng tôi sẽ phản hồi sớm nhất.
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          `;

      // Clear the form and remove validation styles
      contactForm.reset();
      contactForm.classList.remove("was-validated");
    } else {
      // If invalid, add Bootstrap's validation styles
      contactForm.classList.add("was-validated");
    }
  },
  false
);
