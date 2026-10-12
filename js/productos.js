// ==========================================================
// FINCUX - Renderizado del catálogo
// Usa el array PRODUCTS (js/products-data.js) y createProductCard (js/main.js).
//  - productos.html: catálogo completo (#productsGrid).
//  - index.html: productos destacados (#featuredGrid).
// ==========================================================

document.addEventListener("DOMContentLoaded", function () {
  // -------------------- Destacados del inicio --------------------
  const featuredGrid = document.getElementById("featuredGrid");
  if (featuredGrid) {
    PRODUCTS.slice(0, 6).forEach(function (product) {
      featuredGrid.appendChild(createProductCard(product));
    });
  }

  // -------------------- Catálogo completo --------------------
  const grid = document.getElementById("productsGrid");
  const resultsCount = document.getElementById("resultsCount");
  if (!grid) return;

  PRODUCTS.forEach(function (product) {
    grid.appendChild(createProductCard(product));
  });

  if (resultsCount) {
    resultsCount.textContent =
      PRODUCTS.length + (PRODUCTS.length === 1 ? " producto" : " productos") + " en el catálogo";
  }
});