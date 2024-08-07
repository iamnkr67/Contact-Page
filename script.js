const message = document.getElementById("message");
const mailMeButton = document.getElementById("mailMeButton");
mailMeButton.addEventListener("click", () => {
  if (message.value) {
    const mailtoUrl = `mailto:nitesh1483.be22@chitkarauniversity.edu.in?subject=Mail from website&body=${encodeURIComponent(
      message.value,
    )}`;
    window.open(mailtoUrl);
  }
});

const whatsappButton = document.getElementById("whatsappButton");
whatsappButton.addEventListener("click", () => {
  if (message.value) {
    const whatsappUrl = `https://wa.me/+918092925661?text=${encodeURIComponent(
      message.value,
    )}`;
    window.open(whatsappUrl);
  }
});

const callButton = document.getElementById("callButton");
callButton.addEventListener("click", () => {
        const call = `tel:+91 8092925661`;
        window.open(call);
});
