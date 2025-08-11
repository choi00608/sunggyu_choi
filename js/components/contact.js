export const contactHTML = `
<section id="contact" class="container my-5">
    <h2 class="text-center mb-4">Get In Touch</h2>
    <div class="row text-center">
        <div class="col">
            <p class="lead">
                I'm always open to new opportunities and collaborations.
                Whether you have a project idea, a question about my work, or just want to connect, feel free to reach out!
            </p>
            <a href="#" id="email-me-btn" class="btn btn-success m-2">Email Me</a>
            <a href="https://github.com/choi00608" target="_blank" class="btn btn-dark m-2">GitHub</a>
            <!--<a href="https://linkedin.com/in/cheolsukim" target="_blank" class="btn btn-info m-2">LinkedIn</a>-->
        </div>
    </div>
    <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
      <div id="clipboardToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <strong class="me-auto">Notification</strong>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          Email address copied to clipboard!
        </div>
      </div>
    </div>
</section>
`;

export function setupContactSection() {
    const emailBtn = document.getElementById('email-me-btn');
    if (emailBtn) {
        emailBtn.addEventListener('click', async (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            const emailAddress = 'choi00608@gamil.com';
            try {
                await navigator.clipboard.writeText(emailAddress);
                // Show Bootstrap Toast
                const toastEl = document.getElementById('clipboardToast');
                if (toastEl) {
                    const toast = new bootstrap.Toast(toastEl);
                    toast.show();
                }
            } catch (err) {
                console.error('Failed to copy email: ', err);
                alert('Failed to copy email address. Please copy it manually: ' + emailAddress);
            }
        });
    }
}