const profile = {
  businessName: "Corporativo Avicola del Caribe",
  handle: "@CorporativoAvicoladelCaribe",
  links: [
    { label: "WhatsApp", url: "https://wa.me/529981471946?text=Hola%2C%20deseo%20mas%20informacion%20sobre%20Corporativo%20Avicola%20del%20Caribe", icon: "fa-brands fa-whatsapp", color: "whatsapp" },
    { label: "Correo", url: "mailto:atencion@grupoavicoladelcaribe.com.mx", icon: "fa-solid fa-envelope", color: "email" },
    { label: "Sitio web", url: "https://corporativoavicoladelcaribe.com.mx", icon: "fa-solid fa-globe", color: "website" },
    { label: "Catálogo", url: "https://corporativoavicoladelcaribe.com.mx/catalogo", icon: "fa-solid fa-book-open", color: "website" },
    {
      label: "Teléfonos",
      icon: "fa-solid fa-phone",
      color: "website",
      phones: [
        { label: "(998) 887 1596", url: "tel:+529988871596" },
        { label: "(998) 892 0298", url: "tel:+529988920298" },
      ],
      extensions: [
        { area: "Cobranza", ext: "109" },
        { area: "Facturación", ext: "111" },
        { area: "Recepción", ext: "101" },
      ],
    },
  ],
};

document.title = `${profile.businessName} | Enlaces`;
document.querySelector("#business-name").textContent = profile.businessName;
document.querySelector("#business-handle").textContent = profile.handle;

const linksList = document.querySelector("#links-list");

profile.links.forEach(({ label, url, icon, color, phones, extensions }) => {
  const listItem = document.createElement("li");
  listItem.className = "link-item";

  if (phones) {
    const details = document.createElement("details");
    details.className = "phone-card";

    const summary = document.createElement("summary");
    summary.className = "phone-toggle";
    summary.setAttribute("aria-label", `Mostrar ${label}`);

    const summaryIcon = document.createElement("i");
    summaryIcon.className = `link-icon ${icon} ${color}`;
    summaryIcon.setAttribute("aria-hidden", "true");

    const summaryText = document.createElement("span");
    summaryText.textContent = label;

    summary.append(summaryIcon, summaryText);

    const panel = document.createElement("div");
    panel.className = "phone-panel";

    phones.forEach(({ label: phoneLabel, url: phoneUrl }) => {
      const phoneLink = document.createElement("a");
      phoneLink.className = "phone-link";
      phoneLink.href = phoneUrl;
      phoneLink.textContent = phoneLabel;
      phoneLink.setAttribute("aria-label", `Llamar al ${phoneLabel}`);
      panel.append(phoneLink);
    });

    const extensionList = document.createElement("ul");
    extensionList.className = "extension-list";

    extensions.forEach(({ area, ext }) => {
      const extensionItem = document.createElement("li");
      extensionItem.textContent = `${area}: ext. ${ext}`;
      extensionList.append(extensionItem);
    });

    panel.append(extensionList);
    details.append(summary, panel);
    listItem.append(details);
    linksList.append(listItem);
    return;
  }

  const link = document.createElement("a");
  link.href = url;
  if (!url.startsWith("mailto:") && !url.startsWith("tel:")) {
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

