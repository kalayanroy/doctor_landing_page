document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-submission-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual form submission

            // Simulate form processing
            formStatus.textContent = 'Sending message...';
            formStatus.style.color = 'orange';

            setTimeout(() => {
                // Simulate success
                formStatus.textContent = 'Message sent successfully! (This is a demo)';
                formStatus.style.color = 'green';
                contactForm.reset(); // Reset form fields

                // Hide message after a few seconds
                setTimeout(() => {
                    formStatus.textContent = '';
                }, 5000);

            }, 1500);
        });
    }
});
