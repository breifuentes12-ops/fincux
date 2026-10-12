// ==========================================================
// FINCUX - Detalle de producto
// Lee ?id= de la URL (ej: producto-detalle.html?id=yuca), busca el producto
// en PRODUCTS (js/products-data.js) y lo muestra.
// ==========================================================

document.addEventListener("DOMContentLoaded", function () {
  const detailContent = document.getElementById("detailContent");
  const notFound = document.getElementById("notFound");
  const notFoundText = document.getElementById("notFoundText");

  // Crea un elemento con clase y texto (evita armar HTML con datos)
  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  // Añade un <li><strong>Etiqueta:</strong> valor</li>
  function metaItem(list, label, value) {
    const li = document.createElement("li");
    li.appendChild(el("strong", "", label + ": "));
    li.appendChild(document.createTextNode(value));
    list.appendChild(li);
  }

  // 1. Leer el id de la URL
  const id = new URLSearchParams(window.location.search).get("id");
  const product = id
    ? PRODUCTS.find(function (p) { return p.id === id; })
    : null;

  // 2. Sin id o id inexistente: mensaje claro y enlace al catálogo
  if (!product) {
    detailContent.hidden = true;
    notFoundText.textContent = id
      ? "No encontramos el producto que buscas. Es posible que el enlace esté incompleto o que el producto ya no esté en el catálogo."
      : "No se indicó ningún producto. Elige uno desde el catálogo.";
    notFound.hidden = false;
    document.title = "Producto no encontrado | Fincux";
    return;
  }

  // 3. Título de la pestaña
  document.title = product.name + " | Fincux";

    // 4. Contenido principal: nombre, foto, precio, cantidad, ubicación y productor
  detailContent.innerHTML = "";

  const imageBox = el("div", "detail-image");
  const img = document.createElement("img");
  img.src = product.img;
  img.alt = product.name;
  img.width = 700;
  img.height = 480;
  imageBox.appendChild(img);

  const info = el("div", "detail-info");
  info.appendChild(el("h1", "", product.name));

  const price = el("p", "detail-price", product.price + " ");
  price.appendChild(el("span", "", "/ " + product.priceUnit));
  info.appendChild(price);

  const list = el("ul", "detail-meta-list");
  metaItem(list, "Disponible", product.available);
  metaItem(list, "Ubicación", "Vereda " + product.vereda + ", Sahagún");
  metaItem(list, "Productor", product.producer);
  info.appendChild(list);

  const contact = el("a", "btn btn-accent detail-contact-btn", "Consultar producto");
  contact.href = "contacto.html?asunto=" + encodeURIComponent("Quiero consultar: " + product.name);
  info.appendChild(contact);

  detailContent.appendChild(imageBox);
  detailContent.appendChild(info);
});