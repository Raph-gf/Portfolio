const btnResume = document.querySelectorAll(".header__resume--pdf");
console.log(btnResume);
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".btn-close-qrcode");

const closeModal = () => {
  const qrCodeCanvas = document.querySelector(".qrcode__img");
  if (qrCodeCanvas) {
    qrCodeCanvas.remove();
  }
  document.querySelector(".qrcode").classList.remove("qrcode-active");
  document.querySelector(".overlay").classList.remove("overlay-active");
};

const displayModalAndQRcode = () => {
  const cvUrl =
    "https://drive.google.com/file/d/1IHqWoDjlcz76UB3rHRjv7pmlAtuYIEu1/view?usp=sharing";

  // Crée dynamiquement le canvas
  let qrCodeCanvas = document.querySelector(".qrcode__img");
  if (!qrCodeCanvas) {
    qrCodeCanvas = document.createElement("canvas");
    qrCodeCanvas.classList.add("qrcode__img");
    document.querySelector(".qrcode__container").appendChild(qrCodeCanvas);
  }

  // Génère le QR code
  QRCode.toCanvas(qrCodeCanvas, cvUrl, function (error) {
    if (error) console.error(error);
    console.log("QR Code généré avec succès !");
  });

  // Affiche la modal et l'overlay
  document.querySelector(".qrcode").classList.add("qrcode-active");
  document.querySelector(".overlay").classList.add("overlay-active");
};

btnResume.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (!btn) return;
    displayModalAndQRcode();
  });
});

overlay.addEventListener("click", function (e) {
  if (e.target.classList.contains("overlay-active")) {
    closeModal();
  }
});

btnClose.addEventListener("click", function () {
  if (!btnClose) return;
  document.querySelector(".qrcode").classList.remove("qrcode-active");
  document.querySelector(".overlay").classList.remove("overlay-active");
  closeModal();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
