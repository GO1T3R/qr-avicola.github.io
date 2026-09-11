const profile = {
  businessName: "Corporativo Avicola del Caribe",
  handle: "@CorporativoAvicoladelCaribe",
  links: [
    { label: "Correo", url: "mailto:atencion@grupoavicoladelcaribe.com.mx", icon: "fa-solid fa-envelope", color: "email" },
    { label: "Sitio web", url: "https://corporativoavicoladelcaribe.com.mx", icon: "fa-solid fa-globe", color: "website" },
    { label: "Catálogo", url: "https://corporativoavicoladelcaribe.com.mx/catalogo", icon: "fa-solid fa-book-open", color: "website" },
  ],
};

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