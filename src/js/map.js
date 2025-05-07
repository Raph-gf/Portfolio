const container = document.querySelector(".footer__map-container");
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_KEY || "";
const zoom = import.meta.env.VITE_MAP_DEFAULT_ZOOM || "10";
const address = "Paris, France";
const size = "600x400";

const renderGoogleMap = () => {
  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(
    address
  )}&zoom=${zoom}&size=${size}&maptype=roadmap&markers=color:red%7C${encodeURIComponent(
    address
  )}&key=${GOOGLE_MAPS_API_KEY}`;

  container.innerHTML = `
    <img src="${mapUrl}" 
         class="footer__map-img" 
         alt="Carte de localisation"
         loading="lazy"
         >
  `;
};

document.addEventListener("DOMContentLoaded", renderGoogleMap);
