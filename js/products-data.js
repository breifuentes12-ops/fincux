// ==========================================================
// FINCUX - Datos de productos
// Fuente única de datos: la usan index.html (destacados), productos.html
// y producto-detalle.html. No repetir estos datos en otros archivos.
// OJO: productores, precios y disponibilidad son datos de muestra del
// proyecto; deben sustituirse por información real y confirmada.
// ==========================================================

const PRODUCTS = [
  {
    id: "leche-fresca",
    name: "Leche",
    price: "$1.800",
    priceUnit: "litro",
    producer: "Don Héctor Pérez",
    vereda: "El Retiro",
    tag: "Lácteos",
    img: "img/leche.jpg",
    description:
      "Leche fresca de vaca, ordeñada cada mañana en la vereda El Retiro.Ideal para queseras, panaderías y restaurantes.",
    available: "500 litros/semana",
  },
  {
    id: "carne",
    name: "Carne",
    price: "$22.000",
    priceUnit: "kg",
    producer: "Finca La Esperanza",
    vereda: "Providencia",
    tag: "Ganadería",
    img: "img/carne.jpg",
    description:
      "Ganado criollo criado en pasto natural.",
    available: "200 kg/semana",
  },
  {
    id: "yuca",
    name: "Yuca",
    price: "$1.200",
    priceUnit: "kg",
    producer: "María González",
    vereda: "San Isidro",
    tag: "Tubérculos",
    img: "img/yuca.jpg",
    description:
      "Yuca blanca cosechada semanalmente en lotes propios. Excelente para cocción, harinas y almidones. Se entrega limpia y clasificada por tamaño.",
    available: "800 kg/semana",
  },
  {
    id: "name-espino",
    name: "Ñame",
    price: "$1.500",
    priceUnit: "kg",
    producer: "Agro Familia Torres",
    vereda: "Los Llanos",
    tag: "Tubérculos",
    img: "img/name.jpg",
    description:
      "Ñame de primera calidad, cosechado a mano. Alta demanda en restaurantes por su textura y sabor.",
    available: "600 kg/semana",
  },
  {
    id: "arroz-paddy",
    name: "Arroz",
    price: "$1.800",
    priceUnit: "kg",
    producer: "Carlos Mendoza",
    vereda: "Belén",
    tag: "Granos",
    img: "img/arroz.jpg",
    description:
      "Arroz, con humedad controlada para larga conservación.Disponible en bulto de 50 kg. Ideal para molinos y grandes cocinas.",
    available: "2 ton/cosecha",
  },
  {
    id: "platano-harton",
    name: "Plátano",
    price: "$900",
    priceUnit: "kg",
    producer: "Rosa Bernal",
    vereda: "La Ceiba",
    tag: "Frutas",
    img: "img/platano.jpg",
    description:
      "Plátano verde para cocinar, cosechado en racimos. Entrega semanal en cargas de 40 kg. Calidad consistente para restaurantes y comercio local.",
    available: "400 kg/semana",
  },
  {
    id: "maiz-amarillo",
    name: "Maíz",
    price: "$1.100",
    priceUnit: "kg",
    producer: "Pedro Alvarado",
    vereda: "Santa Rosa",
    tag: "Granos",
    img: "img/maiz.jpg",
    description:
      "Maíz amarillo duro, seco y limpio. Ideal para concentrados, arepas industriales y harinas. Producción sin agroquímicos pesados.",
    available: "1 ton/cosecha",
  },
  {
    id: "queso-costeno",
    name: "Queso",
    price: "$14.000",
    priceUnit: "kg",
    producer: "Lácteos Sahagún SAS",
    vereda: "El Retiro",
    tag: "Lácteos",
    img: "img/queso.jpg",
    description:
      "Queso costeño salado, elaborado artesanalmente con leche fresca local. Alta demanda en restaurantes y tiendas. Presentación en bloques de 1 kg.",
    available: "300 kg/semana",
  },
];

const FILTERS_TAG = ["Todos", "Lácteos", "Ganadería", "Tubérculos", "Granos", "Frutas"];
const FILTERS_VEREDA = ["Todas", "El Retiro", "Providencia", "San Isidro", "Los Llanos", "Belén", "La Ceiba", "Santa Rosa"];