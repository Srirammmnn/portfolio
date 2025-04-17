
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(() => {
      alert("Message sent successfully!");
      this.reset();
    }, (error) => {
      console.error("Email send error:", error);
      alert("Failed to send message. Please try again later.");
    });
});
666



