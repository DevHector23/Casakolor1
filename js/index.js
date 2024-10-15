// Función para cargar HTML
async function loadHTML(url, element) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const html = await response.text();
    element.innerHTML = html;
  } catch (e) {
    console.error("Error al cargar el HTML:", e);
  }
}

// Cargar header y footer
document.addEventListener("DOMContentLoaded", () => {
  const headerPlaceholder = document.getElementById("header-placeholder");
  const footerPlaceholder = document.getElementById("footer-placeholder");

  loadHTML("header.html", headerPlaceholder);
  loadHTML("footer.html", footerPlaceholder);
});

// Ajustar el contenido principal
function adjustMainContent() {
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  const main = document.querySelector("main");

  if (header && footer && main) {
    const headerHeight = header.offsetHeight;
    const footerHeight = footer.offsetHeight;

    main.style.marginTop = `${headerHeight}px`;
    main.style.marginBottom = `${footerHeight}px`;
  }
}

// Ejecutar adjustMainContent después de cargar el header y el footer
window.addEventListener("load", () => {
  setTimeout(adjustMainContent, 100); // Pequeño retraso para asegurar que el contenido se ha cargado
});
window.addEventListener("resize", adjustMainContent);
