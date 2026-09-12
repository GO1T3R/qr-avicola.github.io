const profile = {
  businessName: "Corporativo Avicola del Caribe",
  handle: "@CorporativoAvicoladelCaribe",
  links: [
    { label: "WhatsApp", url: "https://wa.me/?text=Hola%2C%20deseo%20mas%20informacion%20sobre%20Corporativo%20Avicola%20del%20Caribe", icon: "fa-brands fa-whatsapp", color: "whatsapp" },
    { label: "Correo", url: "mailto:atencion@grupoavicoladelcaribe.com.mx", icon: "fa-solid fa-envelope", color: "email" },
    { label: "Sitio web", url: "https://corporativoavicoladelcaribe.com.mx", icon: "fa-solid fa-globe", color: "website" },
    { label: "Catálogo", url: "https://corporativoavicoladelcaribe.com.mx/catalogo", icon: "fa-solid fa-book-open", color: "website" },
  ],
};

const promotions = [
  {
    tag: "Promoción de temporada",
    title: "Pavo",
    description: "Consulta disponibilidad y precios especiales para tu pedido.",
    icon: "fa-solid fa-drumstick-bite",
  },
  {
    tag: "Producto",
    title: "Huevo",
    description: "Frescura y calidad para tu negocio todos los días.",
    icon: "fa-solid fa-egg",
  },
];

document.title = `${profile.businessName} | Enlaces`;
document.querySelector("#business-name").textContent = profile.businessName;
document.querySelector("#business-handle").textContent = profile.handle;

const linksList = document.querySelector("#links-list");

profile.links.forEach(({ label, url, icon, color }) => {
  const listItem = document.createElement("li");
  listItem.className = "link-item";

  const link = document.createElement("a");
  link.href = url;
  if (!url.startsWith("mailto:")) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
  link.setAttribute("aria-label", `Abrir ${label}`);

  const linkIcon = document.createElement("i");
  linkIcon.className = `link-icon ${icon} ${color}`;
  linkIcon.setAttribute("aria-hidden", "true");

  link.append(linkIcon, document.createTextNode(label));
  listItem.append(link);
  linksList.append(listItem);
});

const announcementTrack = document.querySelector("#announcement-track");

function createAnnouncement(promotion) {
  return `
    <span class="announcement-item">
      <i class="${promotion.icon}" aria-hidden="true"></i>
      <span class="announcement-label">${promotion.tag}</span>
      <span>${promotion.title}: ${promotion.description}</span>
    </span>`;
}

const announcementItems = promotions.map(createAnnouncement).join("");
announcementTrack.innerHTML = announcementItems + announcementItems;