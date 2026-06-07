const WHATSAPP_NUMBER = "529983500558";
const STORE_LOCATION = { lat: 21.173461, lng: -86.915554 };
const BASE_SHIPPING = 25;
const INCLUDED_KM = 3;
const PRICE_PER_EXTRA_KM = 10;

const products = [
  {
    id: "tilapia",
    name: "Filete de tilapia",
    category: "pescado",
    presentation: "1 kilo",
    price: 110,
    image: "assets/tilapia.jpg",
    detail: "Calidad premium, ideal para plancha, horno, frito o ceviche."
  },
  {
    id: "pollo-picoso",
    name: "Tiras de pechuga picosas",
    category: "pollo",
    presentation: "1 kilo",
    price: 170,
    image: "assets/pollo-picoso.jpg",
    detail: "100% pechuga de pollo, congelado IQF y alto en proteína."
  },
  {
    id: "berries",
    name: "Mix de berries",
    category: "fruta",
    presentation: "2 kilos",
    price: 180,
    image: "assets/mix-berries.jpg",
    detail: "Fresas, moras, arandanos y frambuesas para smoothies y postres."
  },
  {
    id: "mango",
    name: "Dados de mango",
    category: "fruta",
    presentation: "2 kilos",
    price: 170,
    image: "assets/mango.jpg",
    detail: "Mango congelado en cubos, practico para bebidas, postres y cocina."
  },
  {
    id: "fresas",
    name: "Fresas congeladas",
    category: "fruta",
    presentation: "2 kilos",
    price: 170,
    image: "assets/fresas.jpg",
    detail: "Fruta congelada lista para licuados, reposteria y salsas."
  },
  {
    id: "papas",
    name: "Papas a la francesa corte 3/8",
    category: "botana",
    presentation: "2.5 kilos",
    price: 120,
    image: "assets/papas.jpg",
    detail: "Papa congelada para restaurantes, negocios de comida y hogar."
  },
  {
    id: "nuggets",
    name: "Nugget de pollo con forma de dinosaurio",
    category: "pollo",
    presentation: "1 kilo",
    price: 126,
    image: "assets/nuggets.jpg",
    detail: "Prácticos, rendidores y listos para freír u hornear."
  },
  {
    id: "filete-pechuga",
    name: "Filete de pechuga natural",
    category: "pollo",
    presentation: "1 kilo",
    price: 170,
    image: "assets/filete-pechuga.jpg",
    detail: "Filetes de pechuga limpios y congelados, listos para cocinar."
  },
  {
    id: "boneless-natural",
    name: "Boneless de pechuga natural",
    category: "pollo",
    presentation: "1 kilo",
    price: 170,
    image: "assets/boneless.jpg",
    detail: "Carne blanca seleccionada, alta en proteína y congelada IQF."
  },
  {
    id: "filete-empanizado",
    name: "Filete de pechuga empanizado",
    category: "pollo",
    presentation: "1 kilo",
    price: 184,
    image: "assets/filete-empanizado.jpg",
    detail: "Fácil de preparar, ideal para freír, hornear o acompañar comidas."
  },
  {
    id: "aros-cebolla",
    name: "Aros de cebolla rebozado",
    category: "botana",
    presentation: "1 kilo",
    price: 100,
    image: "assets/aros-cebolla.jpg",
    detail: "Crujientes y rápidos de preparar como entrada o snack."
  }
];

const cart = new Map();
let activeFilter = "todos";
let activeSearch = "";
let shipping = BASE_SHIPPING;
let customerCoords = null;
let customerAccuracy = null;

const productGrid = document.querySelector("#productGrid");
const cartDrawer = document.querySelector("#cartDrawer");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("#cartCount");
const cartSubtotal = document.querySelector("#cartSubtotal");
const shippingTotal = document.querySelector("#shippingTotal");
const cartTotal = document.querySelector("#cartTotal");
const deliveryPreview = document.querySelector("#deliveryPreview");
const toast = document.querySelector("#toast");
const deliveryMode = document.querySelector("#deliveryMode");
const otherPersonFields = document.querySelector("#otherPersonFields");
const mapPicker = document.querySelector("#mapPicker");
const deliveryMapElement = document.querySelector("#deliveryMap");
const deliverySchedule = document.querySelector("#deliverySchedule");
const customDeliveryFields = document.querySelector("#customDeliveryFields");
const customDeliveryTime = document.querySelector("#customDeliveryTime");
const advanceProduct = document.querySelector("#advanceProduct");
const advanceFields = document.querySelector("#advanceFields");
const advanceDate = document.querySelector("#advanceDate");
const advanceTime = document.querySelector("#advanceTime");

let deliveryMap = null;
let deliveryMarker = null;
let storeMarker = null;

function money(value) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0
  }).format(value);
}

function normalizeText(text) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2800);
}

function onlyDigits(value) {
  return value.replace(/\D/g, "").slice(0, 10);
}

function isTenDigitPhone(value) {
  return /^\d{10}$/.test(value);
}

function formatCoord(value) {
  return Number(value).toFixed(6);
}

function cleanAddressForMessage(address) {
  return address
    .split("\n")
    .filter((line) => !line.includes("google.com/maps"))
    .join("\n")
    .replace(/Ubicación actual:\s*/i, "")
    .replace(/Ubicación seleccionada:\s*/i, "")
    .trim() || "Sin dirección escrita";
}

function getPreciseLocationLine() {
  if (!customerCoords) return "*Ubicación exacta:* no enviada";

  const lat = formatCoord(customerCoords.lat);
  const lng = formatCoord(customerCoords.lng);
  const accuracy = customerAccuracy ? ` | *Precisión aprox.:* ±${Math.round(customerAccuracy)} m` : "";
  return `*Ubicación exacta:* https://www.google.com/maps?q=${lat},${lng} | *Coordenadas:* ${lat}, ${lng}${accuracy}`;
}

function isTimeInDeliveryRange(value) {
  return value >= "12:00" && value <= "18:00";
}

function getDeliveryScheduleText() {
  if (deliverySchedule.value === "Personalizado") {
    return customDeliveryTime.value ? `Personalizado - ${customDeliveryTime.value}` : "";
  }

  return deliverySchedule.value;
}

function getFilteredProducts() {
  const query = normalizeText(activeSearch.trim());
  return products.filter((product) => {
    const matchesCategory = activeFilter === "todos" || product.category === activeFilter;
    const searchText = normalizeText(`${product.name} ${product.category} ${product.presentation} ${product.detail}`);
    const matchesSearch = !query || searchText.includes(query);
    return matchesCategory && matchesSearch;
  });
}

function renderProducts() {
  const visibleProducts = getFilteredProducts();

  if (!visibleProducts.length) {
    productGrid.innerHTML = "<p class=\"empty-state\">No encontramos productos con esa búsqueda.</p>";
    return;
  }

  productGrid.innerHTML = visibleProducts.map((product) => {
    const quantity = cart.get(product.id) || 0;
    const status = quantity ? `<span class="quantity-pill">En pedido: ${quantity}</span>` : "";
    return `
      <article class="product-card">
        <div class="product-image-wrap">
          <img src="${product.image}" alt="${product.name}">
          ${status}
        </div>
        <div class="product-info">
          <div>
            <h3>${product.name}</h3>
            <div class="product-meta">
              <span>${product.presentation}</span>
              <span>${product.category}</span>
            </div>
          </div>
          <p>${product.detail}</p>
          <div class="price">${money(product.price)}</div>
          <button class="add-button" type="button" data-product="${product.id}">
            ${quantity ? "Agregar otro" : "Agregar a mis pedidos"}
          </button>
        </div>
      </article>
    `;
  }).join("");
}

function getCartRows() {
  return [...cart.entries()].map(([id, quantity]) => {
    const product = products.find((item) => item.id === id);
    return { ...product, quantity, subtotal: product.price * quantity };
  });
}

function getSubtotal() {
  return getCartRows().reduce((sum, row) => sum + row.subtotal, 0);
}

function renderCart() {
  const rows = getCartRows();
  const totalItems = rows.reduce((sum, row) => sum + row.quantity, 0);
  const subtotal = rows.reduce((sum, row) => sum + row.subtotal, 0);
  const total = rows.length ? subtotal + shipping : 0;

  cartCount.textContent = totalItems;
  cartSubtotal.textContent = money(subtotal);
  shippingTotal.textContent = rows.length ? money(shipping) : money(0);
  cartTotal.textContent = money(total);
  deliveryPreview.textContent = "Según distancia";

  if (!rows.length) {
    cartItems.innerHTML = "<p class=\"cart-note\">Tu pedido está vacío.</p>";
    renderProducts();
    return;
  }

  cartItems.innerHTML = rows.map((row) => `
    <div class="cart-line">
      <div>
        <strong>${row.name}</strong>
        <div>${row.presentation} - ${money(row.price)} c/u</div>
        <small>Cantidad: ${row.quantity} | Subtotal: ${money(row.subtotal)}</small>
      </div>
      <div class="cart-controls" aria-label="Cantidad de ${row.name}">
        <button type="button" data-dec="${row.id}">-</button>
        <strong>${row.quantity}</strong>
        <button type="button" data-inc="${row.id}">+</button>
      </div>
    </div>
  `).join("");

  renderProducts();
}

function addToCart(id) {
  cart.set(id, (cart.get(id) || 0) + 1);
  renderCart();
  showToast("Producto agregado a mis pedidos.");
}

function changeQuantity(id, amount) {
  const nextQuantity = (cart.get(id) || 0) + amount;
  if (nextQuantity <= 0) {
    cart.delete(id);
  } else {
    cart.set(id, nextQuantity);
  }
  renderCart();
}

function openCart() {
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
  if (deliveryMode.value === "Otra persona") initDeliveryMap();
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

function distanceKm(from, to) {
  const earthRadius = 6371;
  const latDiff = (to.lat - from.lat) * Math.PI / 180;
  const lngDiff = (to.lng - from.lng) * Math.PI / 180;
  const lat1 = from.lat * Math.PI / 180;
  const lat2 = to.lat * Math.PI / 180;
  const a = Math.sin(latDiff / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(lngDiff / 2) ** 2;
  return earthRadius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function updateShippingFromCoords(coords) {
  customerCoords = coords;
  customerAccuracy = coords.accuracy || null;
  const kilometers = distanceKm(STORE_LOCATION, coords);
  const extraKm = Math.max(0, Math.ceil(kilometers) - INCLUDED_KM);
  shipping = BASE_SHIPPING + extraKm * PRICE_PER_EXTRA_KM;
  renderCart();
  return kilometers;
}

function extractCoords(text) {
  const atMatch = text.match(/@(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)/);
  const qMatch = text.match(/[?&]q=(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)/);
  const plainMatch = text.match(/(-?\d{1,2}\.\d+),\s*(-?\d{1,3}\.\d+)/);
  const match = atMatch || qMatch || plainMatch;

  if (!match) return null;

  return {
    lat: Number(match[1]),
    lng: Number(match[2])
  };
}

function updateShippingFromAddressText() {
  const address = document.querySelector("#customerAddress").value;
  const coords = extractCoords(address);
  if (!coords) return;

  const kilometers = updateShippingFromCoords(coords);
  setDeliveryMarker(coords);
  document.querySelector("#locationStatus").textContent = `Ubicación detectada. Distancia estimada: ${kilometers.toFixed(1)} km. Envío: ${money(shipping)}.`;
}

function initDeliveryMap() {
  if (!deliveryMapElement || typeof L === "undefined") {
    if (deliveryMapElement) {
      deliveryMapElement.innerHTML = "<p>El mapa no pudo cargar. Puedes escribir la dirección o pegar un enlace de ubicación.</p>";
    }
    return;
  }

  if (deliveryMap) {
    window.setTimeout(() => deliveryMap.invalidateSize(), 120);
    return;
  }

  deliveryMap = L.map(deliveryMapElement, {
    zoomControl: true,
    scrollWheelZoom: false
  }).setView([STORE_LOCATION.lat, STORE_LOCATION.lng], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap"
  }).addTo(deliveryMap);

  storeMarker = L.marker([STORE_LOCATION.lat, STORE_LOCATION.lng]).addTo(deliveryMap);
  storeMarker.bindPopup("Punto de partida / CEDIS");

  deliveryMap.on("click", (event) => {
    selectDeliveryCoords({
      lat: event.latlng.lat,
      lng: event.latlng.lng
    });
  });

  window.setTimeout(() => deliveryMap.invalidateSize(), 120);
}

function setDeliveryMarker(coords) {
  if (!deliveryMap || typeof L === "undefined") return;

  const position = [coords.lat, coords.lng];

  if (!deliveryMarker) {
    deliveryMarker = L.marker(position, { draggable: true }).addTo(deliveryMap);
    deliveryMarker.on("dragend", () => {
      const position = deliveryMarker.getLatLng();
      selectDeliveryCoords({ lat: position.lat, lng: position.lng });
    });
  } else {
    deliveryMarker.setLatLng(position);
  }

  deliveryMarker.bindPopup("Ubicación de entrega").openPopup();
}

async function selectDeliveryCoords(coords) {
  const kilometers = updateShippingFromCoords(coords);
  setDeliveryMarker(coords);
  deliveryMap.setView([coords.lat, coords.lng], Math.max(deliveryMap.getZoom(), 15));
  await tryReverseGeocode(coords, "Ubicación seleccionada");
  document.querySelector("#locationStatus").textContent = `Ubicación seleccionada. Distancia estimada: ${kilometers.toFixed(1)} km. Envío: ${money(shipping)}.`;
}

async function tryReverseGeocode(coords, label = "Ubicación actual") {
  const addressInput = document.querySelector("#customerAddress");
  const locationUrl = `https://www.google.com/maps?q=${coords.lat},${coords.lng}`;
  addressInput.value = `${label}: ${locationUrl}`;

  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coords.lat}&lon=${coords.lng}`);
    if (!response.ok) return;
    const data = await response.json();
    if (data.display_name) {
      addressInput.value = `${data.display_name}\n${locationUrl}`;
    }
  } catch (error) {
    addressInput.value = `${label}: ${locationUrl}`;
  }
}

function useCurrentLocation() {
  const status = document.querySelector("#locationStatus");

  if (deliveryMode.value === "Otra persona") {
    status.textContent = "Para otra persona, toca el mapa para elegir la ubicación de entrega.";
    return;
  }

  if (!navigator.geolocation) {
    status.textContent = "Tu navegador no permite ubicación. Puedes llenar la dirección manualmente.";
    return;
  }

  status.textContent = "Solicitando ubicación precisa...";
  navigator.geolocation.getCurrentPosition(async (position) => {
    const coords = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      accuracy: position.coords.accuracy
    };
    const kilometers = updateShippingFromCoords(coords);
    setDeliveryMarker(coords);
    await tryReverseGeocode(coords);
    status.textContent = `Ubicación tomada. Distancia estimada: ${kilometers.toFixed(1)} km. Envío: ${money(shipping)}.`;
  }, () => {
    status.textContent = "No se pudo tomar la ubicación. Puedes llenar la dirección manualmente.";
  }, {
    enableHighAccuracy: true,
    timeout: 20000,
    maximumAge: 0
  });
}

function validateOrder() {
  if (!getCartRows().length) {
    showToast("Agrega al menos un producto.");
    return false;
  }

  const name = document.querySelector("#customerName").value.trim();
  const phone = document.querySelector("#customerPhone").value.trim();
  const address = document.querySelector("#customerAddress").value.trim();
  const messageAddress = cleanAddressForMessage(address);
  const buildingType = document.querySelector("#buildingType").value;
  const mode = document.querySelector("#deliveryMode").value;
  const recipientName = document.querySelector("#recipientName").value.trim();
  const recipientPhone = document.querySelector("#recipientPhone").value.trim();
  const scheduleText = getDeliveryScheduleText();

  if (!name) {
    showToast("Escribe el nombre para el pedido.");
    return false;
  }

  if (!isTenDigitPhone(phone)) {
    showToast("El teléfono debe tener exactamente 10 dígitos.");
    return false;
  }

  if (!address) {
    showToast("Selecciona o escribe una dirección.");
    return false;
  }

  if (mode !== "Otra persona" && !customerCoords) {
    showToast("Usa tu ubicación actual para calcular el envío.");
    return false;
  }

  if (!buildingType) {
    showToast("Selecciona el tipo de edificio.");
    return false;
  }

  if (mode === "Otra persona" && (!recipientName || !isTenDigitPhone(recipientPhone))) {
    showToast("Escribe nombre y teléfono de 10 dígitos de quien recibe.");
    return false;
  }

  if (!scheduleText) {
    showToast("Selecciona el horario de entrega.");
    return false;
  }

  if (deliverySchedule.value === "Personalizado" && !isTimeInDeliveryRange(customDeliveryTime.value)) {
    showToast("El horario personalizado debe estar entre 12:00 y 18:00.");
    return false;
  }

  if (advanceProduct.value === "Sí" && (!advanceDate.value || !advanceTime.value)) {
    showToast("Selecciona día y horario del anticipo.");
    return false;
  }

  if (advanceProduct.value === "Sí" && !isTimeInDeliveryRange(advanceTime.value)) {
    showToast("El horario del anticipo debe estar entre 12:00 y 18:00.");
    return false;
  }

  return true;
}

function sendOrder() {
  if (!validateOrder()) return;

  const rows = getCartRows();
  const subtotal = getSubtotal();
  const total = subtotal + shipping;
  const name = document.querySelector("#customerName").value.trim();
  const phone = document.querySelector("#customerPhone").value.trim() || "Sin teléfono";
  const address = document.querySelector("#customerAddress").value.trim();
  const messageAddress = cleanAddressForMessage(address);
  const buildingType = document.querySelector("#buildingType").value;
  const addressDetails = document.querySelector("#addressDetails").value.trim() || "Sin especificaciones";
  const payment = document.querySelector("#paymentMethod").value;
  const scheduleText = getDeliveryScheduleText();
  const advanceLine = advanceProduct.value === "Sí"
    ? [`*Anticipo de producto:* Sí`, `*Día del anticipo:* ${advanceDate.value}`, `*Horario del anticipo:* ${advanceTime.value}`]
    : ["*Anticipo de producto:* No"];
  const mode = document.querySelector("#deliveryMode").value;
  const recipientName = document.querySelector("#recipientName").value.trim();
  const recipientPhone = document.querySelector("#recipientPhone").value.trim();
  const recipientLine = mode === "Otra persona"
    ? [`*Entrega para:* Otra persona`, `*Recibe:* ${recipientName}`, `*Teléfono de quien recibe:* ${recipientPhone}`]
    : ["*Entrega para:* Yo recibo el pedido"];
  const locationLine = getPreciseLocationLine();
  const items = rows
    .map((row) => `- ${row.quantity} x ${row.name} (${row.presentation}) = ${money(row.subtotal)}`)
    .join("\n");

  const message = [
    "Hola Naturfreeze, quiero hacer este pedido:",
    "",
    items,
    "",
    `*Subtotal productos:* ${money(subtotal)}`,
    `*Envío estimado:* ${money(shipping)}`,
    `*Total estimado:* ${money(total)}`,
    "",
    `*Nombre:* ${name}`,
    `*Teléfono:* ${phone}`,
    ...recipientLine,
    `*Dirección exacta:* ${messageAddress}`,
    `*Tipo de edificio:* ${buildingType}`,
    `*Especificaciones:* ${addressDetails}`,
    `*Horario de entrega:* ${scheduleText}`,
    ...advanceLine,
    locationLine,
    "",
    `*Forma de pago:* ${payment}`,
    "Si pago por transferencia, enviaré el comprobante por WhatsApp."
  ].join("\n");

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noreferrer");
}

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    renderProducts();
  });
});

document.querySelector("#productSearch").addEventListener("input", (event) => {
  activeSearch = event.target.value;
  renderProducts();
});

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-product]");
  if (button) addToCart(button.dataset.product);
});

cartItems.addEventListener("click", (event) => {
  const inc = event.target.closest("[data-inc]");
  const dec = event.target.closest("[data-dec]");
  if (inc) changeQuantity(inc.dataset.inc, 1);
  if (dec) changeQuantity(dec.dataset.dec, -1);
});

document.querySelector("#openCart").addEventListener("click", openCart);
document.querySelector("#closeCart").addEventListener("click", closeCart);
document.querySelector("#sendOrder").addEventListener("click", sendOrder);
document.querySelector("#useLocation").addEventListener("click", useCurrentLocation);
document.querySelector("#customerAddress").addEventListener("change", updateShippingFromAddressText);
document.querySelector("#customerAddress").addEventListener("blur", updateShippingFromAddressText);

document.querySelectorAll("#customerPhone, #recipientPhone").forEach((input) => {
  input.addEventListener("input", () => {
    input.value = onlyDigits(input.value);
  });
});

deliverySchedule.addEventListener("change", () => {
  customDeliveryFields.hidden = deliverySchedule.value !== "Personalizado";
});

advanceProduct.addEventListener("change", () => {
  advanceFields.hidden = advanceProduct.value !== "Sí";
});

deliveryMode.addEventListener("change", () => {
  const isOtherPerson = deliveryMode.value === "Otra persona";
  otherPersonFields.hidden = !isOtherPerson;
  mapPicker.hidden = !isOtherPerson;
  document.querySelector("#useLocation").hidden = isOtherPerson;

  if (isOtherPerson) {
    initDeliveryMap();
  }

  document.querySelector("#locationStatus").textContent = isOtherPerson
    ? "Toca el mapa para elegir la ubicación de entrega o escribe la dirección."
    : "Usa tu ubicación actual para calcular el envío.";
});

cartDrawer.addEventListener("click", (event) => {
  if (event.target === cartDrawer) closeCart();
});

document.querySelector("#copyClabe").addEventListener("click", async () => {
  await navigator.clipboard.writeText("722969010584124963");
  showToast("CLABE copiada.");
});

document.addEventListener("pointerdown", (event) => {
  const target = event.target.closest("button, a");
  if (!target) return;

  target.classList.remove("tap-feedback");
  window.requestAnimationFrame(() => target.classList.add("tap-feedback"));
});

document.addEventListener("animationend", (event) => {
  if (event.animationName === "tapPop") {
    event.target.classList.remove("tap-feedback");
  }
});

document.querySelector("#welcomeScreen").addEventListener("animationend", (event) => {
  if (event.animationName === "welcomeExit") {
    event.currentTarget.remove();
  }
});

renderProducts();
renderCart();
