function createProductCard(product) {
  const url = "producto-detalle.html?id=" + encodeURIComponent(product.id);

  const card = document.createElement("article");
  card.className = "product-card";

  const imgLink = document.createElement("a");
  imgLink.className = "product-img";
  imgLink.href = url;
  imgLink.tabIndex = -1;
  imgLink.setAttribute("aria-hidden", "true");
  const img = document.createElement("img");
  img.src = product.img;
  img.alt = "";
  img.loading = "lazy";
  img.width = 700;
  img.height = 480;
  imgLink.appendChild(img);

  const body = document.createElement("div");
  body.className = "product-body";

  const title = document.createElement("h3");
  title.textContent = product.name;

  const price = document.createElement("p");
  price.className = "product-price";
  price.textContent = product.price + " ";
  const unit = document.createElement("span");
  unit.textContent = "/ " + product.priceUnit;
  price.appendChild(unit);

  const producer = document.createElement("p");
  producer.className = "product-meta";
  producer.textContent = "Productor: " + product.producer;

  const button = document.createElement("a");
  button.className = "btn btn-primary btn-card";
  button.href = url;
  button.textContent = "Ver producto";
  button.setAttribute("aria-label", "Ver producto: " + product.name);

  body.append(title, price, producer, button);
  card.append(imgLink, body);
  return card;
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".nav-mobile");

  if (!toggleBtn || !mobileMenu) return;

  function setMenu(open) {
    mobileMenu.classList.toggle("open", open);
    toggleBtn.classList.toggle("open", open);
    toggleBtn.setAttribute("aria-expanded", open ? "true" : "false");
    toggleBtn.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  }

  // Abrir / cerrar con el botón hamburguesa
  toggleBtn.addEventListener("click", function () {
    setMenu(!mobileMenu.classList.contains("open"));
  });

  // Cerrar al tocar un enlace del menú
  mobileMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setMenu(false);
    });
  });

  // Cerrar con la tecla Escape
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && mobileMenu.classList.contains("open")) {
      setMenu(false);
      toggleBtn.focus();
    }
  });

  // Si la pantalla pasa a tamaño de escritorio, dejar el menú cerrado
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) setMenu(false);
  });
});