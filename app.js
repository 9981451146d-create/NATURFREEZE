const WHATSAPP_NUMBER = "529983500558";
const STORE_LOCATION = { lat: 21.173461, lng: -86.915554 };
const OPENROUTESERVICE_API_KEY = "eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6ImI4NzgwYWRhYjhkOTRiYjZiYWJkNTM5ZTdkZjA3NmIxIiwiaCI6Im11cm11cjY0In0=";
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
    detail: "100% pechuga de pollo, congelado IQF y alto en proteÃ­na."
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
    detail: "PrÃ¡cticos, rendidores y listos para freÃ­r u hornear."
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
    detail: "Carne blanca seleccionada, alta en proteÃ­na y congelada IQF."
  },
  {
    id: "filete-empanizado",
    name: "Filete de pechuga empanizado",
    category: "pollo",
    presentation: "1 kilo",
    price: 184,
    image: "assets/filete-empanizado.jpg",
    detail: "FÃ¡cil de preparar, ideal para freÃ­r, hornear o acompaÃ±ar comidas."
  },
  {
    id: "aros-cebolla",
    name: "Aros de cebolla rebozado",
    category: "botana",
    presentation: "1 kilo",
    price: 100,
    image: "assets/aros-cebolla.jpg",
    detail: "Crujientes y rÃ¡pidos de preparar como entrada o snack."
  }
];

const PRODUCT_EDITS_KEY = "naturfreezeProductEdits";
const CUSTOM_PRODUCTS_KEY = "naturfreezeCustomProducts";
const ORDERS_KEY = "naturfreezeAdminOrders";
let productEdits = readStored(PRODUCT_EDITS_KEY, {});
let customProducts = readStored(CUSTOM_PRODUCTS_KEY, []);
let adminOrders = readStored(ORDERS_KEY, []);

products.push(...customProducts);
applyStoredProductEdits();

const cart = new Map();
let activeFilter = "todos";
let activeSearch = "";
let shipping = BASE_SHIPPING;
let customerCoords = null;
let customerAccuracy = null;

const productGrid = document.querySelector("#productGrid");
const installAppButton = document.querySelector("#installApp");
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
const adminDrawer = document.querySelector("#adminDrawer");
const adminLogin = document.querySelector("#adminLogin");
const adminPos = document.querySelector("#adminPos");
const adminPassword = document.querySelector("#adminPassword");
const adminProduct = document.querySelector("#adminProduct");
const adminQuantity = document.querySelector("#adminQuantity");
const posLines = document.querySelector("#posLines");
const posTotal = document.querySelector("#posTotal");
const posCount = document.querySelector("#posCount");
const adminOrderCount = document.querySelector("#adminOrderCount");
const adminSalesTotal = document.querySelector("#adminSalesTotal");
const adminProductsTotal = document.querySelector("#adminProductsTotal");
const adminOrdersElement = document.querySelector("#adminOrders");
const adminProductCards = document.querySelector("#adminProductCards");
const editProduct = document.querySelector("#editProduct");
const editProductCategory = document.querySelector("#editProductCategory");
const editProductName = document.querySelector("#editProductName");
const editProductPrice = document.querySelector("#editProductPrice");
const editProductPresentation = document.querySelector("#editProductPresentation");
const editProductImage = document.querySelector("#editProductImage");
const editProductUpload = document.querySelector("#editProductUpload");
const editProductDetail = document.querySelector("#editProductDetail");
let activeOrderId = null;
let deferredInstallPrompt = null;

let posCart = [];

let deliveryMap = null;
let deliveryMarker = null;
let storeMarker = null;
let adminRouteMap = null;
let adminRouteUserMarker = null;
let adminRouteDestMarker = null;
let adminRouteLine = null;
let adminRouteAccuracyCircle = null;
let adminRouteWatchId = null;
let adminRouteRequesting = false;
let adminRouteLoadedFor = null;
let adminRouteSummary = null;
let adminRouteSteps = [];
let activeRouteStepIndex = 0;

function money(value) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0
  }).format(value);
}

function readStored(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch (error) {
    return fallback;
  }
}

function writeStored(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function setupInstallableApp() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("service-worker.js").catch(() => {});
    });
  }

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    installAppButton.hidden = false;
  });

  installAppButton.addEventListener("click", async () => {
    if (!deferredInstallPrompt) {
      showToast("Si no aparece, usa el menu del navegador y toca Instalar app.");
      return;
    }

    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    installAppButton.hidden = true;
  });

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    installAppButton.hidden = true;
    showToast("NaturFreeze instalada.");
  });
}

function applyStoredProductEdits() {
  Object.entries(productEdits).forEach(([id, edit]) => {
    const product = products.find((item) => item.id === id);
    if (product) Object.assign(product, edit);
  });
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
    .replace(/UbicaciÃ³n actual:\s*/i, "")
    .replace(/UbicaciÃ³n seleccionada:\s*/i, "")
    .trim() || "Sin direcciÃ³n escrita";
}

function getPreciseLocationLine() {
  if (!customerCoords) return "*UbicaciÃ³n exacta:* no enviada";

  const lat = formatCoord(customerCoords.lat);
  const lng = formatCoord(customerCoords.lng);
  const accuracy = customerAccuracy ? ` | *PrecisiÃ³n aprox.:* Â±${Math.round(customerAccuracy)} m` : "";
  return `*UbicaciÃ³n exacta:* https://www.google.com/maps?q=${lat},${lng} | *Coordenadas:* ${lat}, ${lng}${accuracy}`;
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


function openAdmin() {
  adminDrawer.classList.add("open");
  adminDrawer.setAttribute("aria-hidden", "false");
  renderAdminDashboard();
  window.setTimeout(() => adminPassword.focus(), 80);
}

function closeAdmin() {
  adminDrawer.classList.remove("open");
  adminDrawer.setAttribute("aria-hidden", "true");
  stopAdminRouteTracking();
  resetAdminRouteMap();
}

function renderAdminProducts() {
  if (editProduct) {
    const currentProductId = editProduct.value;
    editProduct.innerHTML = products.map((product) => `
      <option value="${product.id}">${product.name}</option>
    `).join("");
    const selectedProductId = products.some((product) => product.id === currentProductId)
      ? currentProductId
      : products[0].id;
    loadProductEditor(selectedProductId);
  }
}

function loginAdmin() {
  if (adminPassword.value !== "1234") {
    showToast("Clave incorrecta.");
    return;
  }

  adminLogin.hidden = true;
  adminPos.hidden = false;
  switchAdminView("pos");
  renderAdminDashboard();
  showToast("Administrador activo.");
}

function logoutAdmin() {
  adminPassword.value = "";
  adminLogin.hidden = false;
  adminPos.hidden = true;
}

function addPosItem() {
  const product = products.find((item) => item.id === adminProduct.value);
  const quantity = Math.max(1, Number(adminQuantity.value) || 1);
  if (!product) return;

  posCart.push({ ...product, quantity, subtotal: product.price * quantity });
  adminQuantity.value = "1";
  renderPosSale();
}

function renderPosSale() {
  const deliveredOrders = adminOrders.filter((order) => order.status === "Entregado" && !order.saleCleared);
  const total = deliveredOrders.reduce((sum, order) => sum + order.total, 0);
  const count = deliveredOrders.reduce((sum, order) => {
    return sum + order.items.reduce((itemSum, item) => itemSum + item.quantity, 0);
  }, 0);

  posTotal.textContent = money(total);
  posCount.textContent = count;
  renderAdminStats();

  if (!deliveredOrders.length) {
    posLines.innerHTML = '<p class="cart-note">Aun no hay ventas entregadas.</p>';
    return;
  }

  posLines.innerHTML = deliveredOrders.map((order) => `
    <div class="pos-line">
      <div>
        <strong>${order.customer}</strong>
        <small>${order.items.map((item) => `${item.quantity} x ${item.name}`).join(" | ")}</small>
        <small>${order.deliveredAt || order.date}</small>
      </div>
      <strong>${money(order.total)}</strong>
    </div>
  `).join("");
}

function clearPosSale() {
  adminOrders = adminOrders.map((order) => {
    if (order.status === "Entregado") return { ...order, saleCleared: true };
    return order;
  });
  writeStored(ORDERS_KEY, adminOrders);
  renderPosSale();
}

function renderAdminDashboard() {
  renderAdminProducts();
  renderPosSale();
  renderAdminOrders();
  renderAdminProductCards();
  renderAdminStats();
}

function renderAdminStats() {
  if (!adminOrderCount) return;
  const pendingOrders = adminOrders.filter((order) => order.status !== "Entregado").length;
  const ordersTotal = adminOrders
    .filter((order) => order.status === "Entregado" && !order.saleCleared)
    .reduce((sum, order) => sum + order.total, 0);
  adminOrderCount.textContent = pendingOrders;
  adminSalesTotal.textContent = money(ordersTotal);
  adminProductsTotal.textContent = products.length;
}

function switchAdminView(view) {
  document.querySelectorAll("[data-admin-view]").forEach((button) => {
    button.classList.toggle("active", button.dataset.adminView === view);
  });
  document.querySelectorAll("[data-admin-panel]").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.adminPanel === view);
  });
}

function saveWebOrder(order) {
  adminOrders = [order, ...adminOrders].slice(0, 30);
  writeStored(ORDERS_KEY, adminOrders);
  renderAdminDashboard();
}

function renderAdminOrders() {
  if (!adminOrdersElement) return;

  if (!adminOrders.length) {
    adminOrdersElement.innerHTML = '<p class="cart-note">Aun no hay pedidos enviados desde esta pagina.</p>';
    renderAdminStats();
    return;
  }

  adminOrdersElement.innerHTML = adminOrders.map((order) => `
    <article class="admin-order-card ${activeOrderId === order.id ? "open" : ""}">
      <div>
        <h4>${order.customer} <span class="order-status">${order.status || "Pendiente"}</span></h4>
        <p>${order.date} | ${order.phone} | ${order.payment}</p>
        <p>${order.address}</p>
        <p>${order.schedule} | Envio: ${money(order.shipping)}</p>
        ${activeOrderId === order.id ? `
          <div class="order-detail-panel">
            <p><strong>Recibe:</strong> ${order.recipient || order.customer}</p>
            <p><strong>Edificio:</strong> ${order.buildingType}</p>
            <p><strong>Especificaciones:</strong> ${order.addressDetails}</p>
            <ul>
              ${order.items.map((item) => `<li>${item.quantity} x ${item.name} - ${money(item.subtotal)}</li>`).join("")}
            </ul>
            <div class="order-actions">
              <button class="secondary-action" type="button" data-route-order="${order.id}">Ir a entrega</button>
              <button class="copy-button" type="button" data-arrived-order="${order.id}">Estoy en la entrega</button>
              <button class="add-button" type="button" data-deliver-order="${order.id}">Marcar entregado</button>
            </div>
            <div class="admin-route-card" id="adminRouteCard" hidden>
              <div>
                <strong>Ruta de entrega</strong>
                <span id="adminRouteStatus">Pide tu ubicacion para iniciar.</span>
              </div>
              <div class="admin-navigation">
                <div class="admin-route-map" id="adminRouteMap" aria-label="Mapa interno de entrega"></div>
                <div class="route-steps-card" id="routeStepsCard">
                  <span class="route-steps-label">Navegacion paso a paso</span>
                  <strong id="nextRouteInstruction">Esperando ruta...</strong>
                  <small id="nextRouteDistance">Cuando cargue la ruta apareceran los metros.</small>
                  <div class="route-step-progress" id="routeStepProgress">Paso 0 de 0</div>
                </div>
              </div>
            </div>
          </div>
        ` : ""}
      </div>
      <div class="order-card-side">
        <strong class="order-total-pill">${money(order.total)}</strong>
        <button class="copy-button" type="button" data-open-order="${order.id}">${activeOrderId === order.id ? "Cerrar" : "Entrar"}</button>
      </div>
    </article>
  `).join("");
  renderAdminStats();
}

function clearWebOrders() {
  adminOrders = adminOrders.filter((order) => order.status === "Entregado");
  writeStored(ORDERS_KEY, adminOrders);
  renderAdminOrders();
  showToast("Pedidos pendientes limpiados.");
}

function openDeliveryRoute(id) {
  const order = adminOrders.find((item) => item.id === Number(id));
  if (!order) return;

  activeOrderId = order.id;
  renderAdminOrders();

  const routeCard = document.querySelector("#adminRouteCard");
  const routeStatus = document.querySelector("#adminRouteStatus");
  if (routeCard) routeCard.hidden = false;

  if (routeStatus) routeStatus.textContent = "Pidiendo tu ubicacion actual...";

  if (!navigator.geolocation) {
    if (routeStatus) routeStatus.textContent = "Tu navegador no permite GPS.";
    return;
  }

  stopAdminRouteTracking();
  resetAdminRouteMap();

  adminRouteWatchId = navigator.geolocation.watchPosition(
    (position) => {
      const current = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        accuracy: position.coords.accuracy,
        heading: position.coords.heading
      };
      renderAdminRouteMap(order, current);
    },
    () => {
      if (routeStatus) routeStatus.textContent = "No pude leer tu ubicacion actual.";
      showToast("No pude leer tu ubicacion actual.");
    },
    { enableHighAccuracy: true, timeout: 12000, maximumAge: 0 }
  );
}

function stopAdminRouteTracking() {
  if (adminRouteWatchId !== null && navigator.geolocation) {
    navigator.geolocation.clearWatch(adminRouteWatchId);
    adminRouteWatchId = null;
  }
}

function resetAdminRouteMap() {
  if (adminRouteMap) adminRouteMap.remove();
  adminRouteMap = null;
  adminRouteUserMarker = null;
  adminRouteDestMarker = null;
  adminRouteLine = null;
  adminRouteAccuracyCircle = null;
  adminRouteRequesting = false;
  adminRouteLoadedFor = null;
  adminRouteSummary = null;
  adminRouteSteps = [];
  activeRouteStepIndex = 0;
}

function getRouteEstimate(kilometers) {
  const drivingMinutes = Math.max(2, Math.ceil((kilometers / 28) * 60));
  return `${kilometers.toFixed(2)} km | ${drivingMinutes} min aprox.`;
}

function formatRouteSummary(distanceMeters, durationSeconds) {
  const kilometers = distanceMeters / 1000;
  const minutes = Math.max(1, Math.round(durationSeconds / 60));
  return `${kilometers.toFixed(2)} km | ${minutes} min aprox.`;
}

function formatStepDistance(meters) {
  if (!Number.isFinite(meters)) return "";
  if (meters < 1000) return `${Math.round(meters)} m`;
  return `${(meters / 1000).toFixed(1)} km`;
}

function pointToCoords(point) {
  return point ? { lat: point[0], lng: point[1] } : null;
}

function updateActiveRouteStep(current) {
  if (!adminRouteSteps.length) return;

  const currentCoords = { lat: current.lat, lng: current.lng };
  const nextStep = adminRouteSteps[activeRouteStepIndex + 1];
  const nextPoint = pointToCoords(nextStep?.point);
  if (!nextPoint) {
    renderRouteInstructions(adminRouteSteps, activeRouteStepIndex);
    return;
  }

  const metersToNextStep = distanceKm(currentCoords, nextPoint) * 1000;
  if (metersToNextStep <= 45 && activeRouteStepIndex < adminRouteSteps.length - 1) {
    activeRouteStepIndex += 1;
  }

  renderRouteInstructions(adminRouteSteps, activeRouteStepIndex, metersToNextStep);
}

function rotateDriverMarker(heading) {
  if (!adminRouteUserMarker || !Number.isFinite(heading)) return;
  const markerElement = adminRouteUserMarker.getElement();
  const arrowElement = markerElement?.querySelector("span");
  if (arrowElement) {
    arrowElement.style.transform = `rotate(${heading}deg) translateY(-4px)`;
  }
}

function makeRouteIcon(type) {
  const label = type === "driver" ? "" : "Entrega";
  return L.divIcon({
    className: `route-marker route-marker-${type}`,
    html: `<span>${label}</span>`,
    iconSize: [58, 58],
    iconAnchor: [29, 29],
    popupAnchor: [0, -24]
  });
}

function enrichRouteSteps(steps, points) {
  return steps.map((step) => {
    const pointIndex = Array.isArray(step.way_points) ? step.way_points[0] : null;
    return {
      ...step,
      point: Number.isInteger(pointIndex) ? points[pointIndex] : null
    };
  });
}

async function fetchOpenRouteGeometry(current, destination) {
  const response = await fetch("https://api.openrouteservice.org/v2/directions/driving-car/geojson", {
    method: "POST",
    headers: {
      "Authorization": OPENROUTESERVICE_API_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      coordinates: [
        [current.lng, current.lat],
        [destination.lng, destination.lat]
      ],
      instructions: true,
      language: "es"
    })
  });

  if (!response.ok) {
    throw new Error(`OpenRouteService ${response.status}`);
  }

  const data = await response.json();
  const route = data.features?.[0];
  const coordinates = route?.geometry?.coordinates || [];
  const summary = route?.properties?.summary;
  const segments = route?.properties?.segments || [];
  if (!coordinates.length || !summary) {
    throw new Error("Ruta sin geometria");
  }

  const points = coordinates.map(([lng, lat]) => [lat, lng]);

  return {
    points,
    summary,
    steps: enrichRouteSteps(segments.flatMap((segment) => segment.steps || []), points)
  };
}

function renderAdminRouteMap(order, current) {
  const mapElement = document.querySelector("#adminRouteMap");
  const routeStatus = document.querySelector("#adminRouteStatus");
  if (!mapElement || typeof L === "undefined") {
    if (routeStatus) routeStatus.textContent = "El mapa no pudo cargar.";
    return;
  }

  const destination = order.coords;
  const accuracyText = current.accuracy ? ` Precision aprox.: ${Math.round(current.accuracy)} m.` : "";
  if (destination) {
    const kilometers = distanceKm(current, destination);
    const routeText = adminRouteSummary
      ? `Ruta por calles: ${formatRouteSummary(adminRouteSummary.distance, adminRouteSummary.duration)}`
      : `Calculando ruta por calles... Aproximado: ${getRouteEstimate(kilometers)}`;
    if (routeStatus) routeStatus.textContent = `En vivo: ${routeText}. Entrega: ${formatCoord(destination.lat)}, ${formatCoord(destination.lng)}.${accuracyText}`;
  } else if (routeStatus) {
    routeStatus.textContent = `En vivo: tu ubicacion actual ya aparece. Este pedido no tiene coordenadas exactas guardadas.${accuracyText}`;
  }

  if (!adminRouteMap) {
    adminRouteMap = L.map(mapElement, {
      zoomControl: true,
      scrollWheelZoom: true
    });

    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      attribution: "&copy; OpenStreetMap &copy; CARTO",
      maxZoom: 20
    }).addTo(adminRouteMap);
  }

  const currentPoint = [current.lat, current.lng];
  if (!adminRouteUserMarker) {
    adminRouteUserMarker = L.marker(currentPoint, {
      icon: makeRouteIcon("driver"),
      zIndexOffset: 1000
    }).addTo(adminRouteMap).bindPopup("Tu ubicacion actual").openPopup();
  } else {
    adminRouteUserMarker.setLatLng(currentPoint);
  }
  rotateDriverMarker(current.heading);

  if (!adminRouteAccuracyCircle) {
    adminRouteAccuracyCircle = L.circle(currentPoint, {
    radius: current.accuracy || 40,
      color: "#1d6df2",
      fillColor: "#1d6df2",
      fillOpacity: .10,
      weight: 2
    }).addTo(adminRouteMap);
  } else {
    adminRouteAccuracyCircle.setLatLng(currentPoint);
    adminRouteAccuracyCircle.setRadius(current.accuracy || 40);
  }

  updateActiveRouteStep(current);

  if (!destination) {
    adminRouteMap.setView(currentPoint, 16);
    window.setTimeout(() => adminRouteMap.invalidateSize(), 120);
    return;
  }

  const destinationPoint = [destination.lat, destination.lng];
  if (!adminRouteDestMarker) {
    adminRouteDestMarker = L.marker(destinationPoint, {
      icon: makeRouteIcon("dropoff")
    }).addTo(adminRouteMap).bindPopup(`Entrega: ${order.address}`);
  } else {
    adminRouteDestMarker.setLatLng(destinationPoint);
  }

  const fallbackLinePoints = [currentPoint, destinationPoint];
  if (!adminRouteLine) {
    adminRouteLine = L.polyline(fallbackLinePoints, {
      color: "#7fd733",
      weight: 6,
      opacity: .9,
      dashArray: "8 8"
    }).addTo(adminRouteMap);
  }

  if (!adminRouteLoadedFor && !adminRouteRequesting) {
    loadOpenRouteLine(order, current, destination);
  }

  adminRouteMap.fitBounds(adminRouteLine.getBounds(), { padding: [28, 28] });
  window.setTimeout(() => adminRouteMap.invalidateSize(), 120);
}

async function loadOpenRouteLine(order, current, destination) {
  const routeKey = `${order.id}:${formatCoord(current.lat)},${formatCoord(current.lng)}:${formatCoord(destination.lat)},${formatCoord(destination.lng)}`;
  adminRouteRequesting = true;

  try {
    const route = await fetchOpenRouteGeometry(current, destination);
    adminRouteSummary = route.summary;
    adminRouteLoadedFor = routeKey;

    if (!adminRouteMap) return;
    adminRouteLine.setLatLngs(route.points);
    adminRouteLine.setStyle({
      color: "#7fd733",
      weight: 7,
      opacity: .95,
      dashArray: ""
    });
    adminRouteMap.fitBounds(adminRouteLine.getBounds(), { padding: [28, 28] });

    const routeStatus = document.querySelector("#adminRouteStatus");
    if (routeStatus) {
      routeStatus.textContent = `En vivo: Ruta por calles: ${formatRouteSummary(route.summary.distance, route.summary.duration)}. Entrega: ${formatCoord(destination.lat)}, ${formatCoord(destination.lng)}.`;
    }
    adminRouteSteps = route.steps;
    activeRouteStepIndex = 0;
    renderRouteInstructions(adminRouteSteps, activeRouteStepIndex);
  } catch (error) {
    adminRouteLoadedFor = routeKey;
    const routeStatus = document.querySelector("#adminRouteStatus");
    if (routeStatus) routeStatus.textContent = "No pude calcular ruta por calles. Dejé la ruta aproximada en el mapa.";
    adminRouteSteps = [];
    activeRouteStepIndex = 0;
    renderRouteInstructions([]);
  } finally {
    adminRouteRequesting = false;
  }
}

function renderRouteInstructions(steps, activeIndex = 0, metersToNextStep = null) {
  const nextInstruction = document.querySelector("#nextRouteInstruction");
  const nextDistance = document.querySelector("#nextRouteDistance");
  const stepProgress = document.querySelector("#routeStepProgress");
  if (!nextInstruction || !nextDistance || !stepProgress) return;

  if (!steps.length) {
    nextInstruction.textContent = "Ruta aproximada";
    nextDistance.textContent = "No llegaron indicaciones por calles.";
    stepProgress.textContent = "Paso 0 de 0";
    return;
  }

  const currentStep = steps[activeIndex] || steps[0];
  nextInstruction.textContent = currentStep.instruction || "Sigue la ruta marcada";
  nextDistance.textContent = metersToNextStep
    ? `Siguiente maniobra en ${formatStepDistance(metersToNextStep)}`
    : formatStepDistance(currentStep.distance);
  stepProgress.textContent = `Paso ${activeIndex + 1} de ${steps.length}`;
}

function markOrderDelivered(id, detected = false) {
  adminOrders = adminOrders.map((order) => {
    if (order.id !== Number(id)) return order;
    return {
      ...order,
      status: "Entregado",
      deliveredAt: new Date().toLocaleString("es-MX", { dateStyle: "short", timeStyle: "short" }),
      deliveryDetected: detected
    };
  });
  writeStored(ORDERS_KEY, adminOrders);
  switchAdminView("pos");
  renderAdminDashboard();
  showToast("Pedido entregado y agregado al punto de venta.");
}

function checkDeliveryArrival(id) {
  const order = adminOrders.find((item) => item.id === Number(id));
  if (!order) return;

  if (!order.coords || !navigator.geolocation) {
    showToast("No hay GPS suficiente. Puedes marcarlo entregado manualmente.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const current = { lat: position.coords.latitude, lng: position.coords.longitude };
      const kilometers = distanceKm(current, order.coords);
      if (kilometers <= 0.18) {
        markOrderDelivered(order.id, true);
      } else {
        showToast(`Aun estas a ${kilometers.toFixed(2)} km de la entrega.`);
      }
    },
    () => showToast("No pude leer tu ubicacion actual."),
    { enableHighAccuracy: true, timeout: 12000, maximumAge: 0 }
  );
}

function loadProductEditor(id) {
  const product = products.find((item) => item.id === id);
  if (!product || !editProductName) return;

  editProduct.value = product.id;
  editProductCategory.value = product.category;
  editProductName.value = product.name;
  editProductPrice.value = product.price;
  editProductPresentation.value = product.presentation;
  editProductImage.value = product.image;
  editProductDetail.value = product.detail;
}

function startNewProduct() {
  editProduct.value = products[0]?.id || "";
  editProductCategory.value = "";
  editProductName.value = "";
  editProductPrice.value = "";
  editProductPresentation.value = "";
  editProductImage.value = "";
  editProductDetail.value = "";
  editProduct.dataset.mode = "new";
  showToast("Listo para crear producto nuevo.");
}

function productSlug(name) {
  return normalizeText(name)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40) || `producto-${Date.now()}`;
}

function saveProductEdit() {
  const existingProduct = products.find((item) => item.id === editProduct.value) || {};
  const edit = {
    category: editProductCategory.value.trim() || "general",
    name: editProductName.value.trim() || existingProduct.name || "Producto nuevo",
    price: Math.max(0, Number(editProductPrice.value) || 0),
    presentation: editProductPresentation.value.trim() || existingProduct.presentation || "1 pieza",
    image: editProductImage.value.trim() || existingProduct.image || "assets/logo-naturfreeze-mark.jpg",
    detail: editProductDetail.value.trim() || existingProduct.detail || "Producto NaturFreeze."
  };

  if (editProduct.dataset.mode === "new") {
    const product = { id: `${productSlug(edit.name)}-${Date.now()}`, ...edit };
    products.push(product);
    customProducts.push(product);
    writeStored(CUSTOM_PRODUCTS_KEY, customProducts);
    editProduct.dataset.mode = "";
    renderAdminProducts();
    loadProductEditor(product.id);
    renderProducts();
    renderCart();
    renderAdminDashboard();
    showToast("Producto nuevo agregado.");
    return;
  }

  const product = products.find((item) => item.id === editProduct.value);
  if (!product) return;

  Object.assign(product, edit);
  productEdits[product.id] = edit;
  writeStored(PRODUCT_EDITS_KEY, productEdits);

  customProducts = customProducts.map((item) => item.id === product.id ? product : item);
  writeStored(CUSTOM_PRODUCTS_KEY, customProducts);

  renderProducts();
  renderCart();
  renderAdminDashboard();
  showToast("Producto actualizado en esta pagina.");
}

function resetProductEdits() {
  productEdits = {};
  customProducts = [];
  localStorage.removeItem(PRODUCT_EDITS_KEY);
  localStorage.removeItem(CUSTOM_PRODUCTS_KEY);
  window.location.reload();
}

function previewUploadedProductImage(file) {
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    editProductImage.value = reader.result;
    showToast("Imagen cargada para probar.");
  });
  reader.readAsDataURL(file);
}

function renderAdminProductCards() {
  if (!adminProductCards) return;

  adminProductCards.innerHTML = products.map((product) => `
    <article class="admin-product-card">
      <img src="${product.image}" alt="${product.name}">
      <div>
        <h4>${product.name}</h4>
        <p>${product.presentation} | ${product.category}</p>
        <p>${product.detail}</p>
      </div>
      <div class="admin-product-actions">
        <strong>${money(product.price)}</strong>
        <button class="copy-button" type="button" data-edit-product="${product.id}">Editar</button>
      </div>
    </article>
  `).join("");
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
    productGrid.innerHTML = "<p class=\"empty-state\">No encontramos productos con esa bÃºsqueda.</p>";
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
  deliveryPreview.textContent = "SegÃºn distancia";

  if (!rows.length) {
    cartItems.innerHTML = "<p class=\"cart-note\">Tu pedido estÃ¡ vacÃ­o.</p>";
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
  document.querySelector("#locationStatus").textContent = `UbicaciÃ³n detectada. Distancia estimada: ${kilometers.toFixed(1)} km. EnvÃ­o: ${money(shipping)}.`;
}

function initDeliveryMap() {
  if (!deliveryMapElement || typeof L === "undefined") {
    if (deliveryMapElement) {
      deliveryMapElement.innerHTML = "<p>El mapa no pudo cargar. Puedes escribir la direcciÃ³n o pegar un enlace de ubicaciÃ³n.</p>";
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

  deliveryMarker.bindPopup("UbicaciÃ³n de entrega").openPopup();
}

async function selectDeliveryCoords(coords) {
  const kilometers = updateShippingFromCoords(coords);
  setDeliveryMarker(coords);
  deliveryMap.setView([coords.lat, coords.lng], Math.max(deliveryMap.getZoom(), 15));
  await tryReverseGeocode(coords, "UbicaciÃ³n seleccionada");
  document.querySelector("#locationStatus").textContent = `UbicaciÃ³n seleccionada. Distancia estimada: ${kilometers.toFixed(1)} km. EnvÃ­o: ${money(shipping)}.`;
}

async function tryReverseGeocode(coords, label = "UbicaciÃ³n actual") {
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
    status.textContent = "Para otra persona, toca el mapa para elegir la ubicaciÃ³n de entrega.";
    return;
  }

  if (!navigator.geolocation) {
    status.textContent = "Tu navegador no permite ubicaciÃ³n. Puedes llenar la direcciÃ³n manualmente.";
    return;
  }

  status.textContent = "Solicitando ubicaciÃ³n precisa...";
  navigator.geolocation.getCurrentPosition(async (position) => {
    const coords = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      accuracy: position.coords.accuracy
    };
    const kilometers = updateShippingFromCoords(coords);
    setDeliveryMarker(coords);
    await tryReverseGeocode(coords);
    status.textContent = `UbicaciÃ³n tomada. Distancia estimada: ${kilometers.toFixed(1)} km. EnvÃ­o: ${money(shipping)}.`;
  }, () => {
    status.textContent = "No se pudo tomar la ubicaciÃ³n. Puedes llenar la direcciÃ³n manualmente.";
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
    showToast("El telÃ©fono debe tener exactamente 10 dÃ­gitos.");
    return false;
  }

  if (!address) {
    showToast("Selecciona o escribe una direcciÃ³n.");
    return false;
  }

  if (mode !== "Otra persona" && !customerCoords) {
    showToast("Usa tu ubicaciÃ³n actual para calcular el envÃ­o.");
    return false;
  }

  if (!buildingType) {
    showToast("Selecciona el tipo de edificio.");
    return false;
  }

  if (mode === "Otra persona" && (!recipientName || !isTenDigitPhone(recipientPhone))) {
    showToast("Escribe nombre y telÃ©fono de 10 dÃ­gitos de quien recibe.");
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

  if (advanceProduct.value === "SÃ­" && (!advanceDate.value || !advanceTime.value)) {
    showToast("Selecciona dÃ­a y horario del anticipo.");
    return false;
  }

  if (advanceProduct.value === "SÃ­" && !isTimeInDeliveryRange(advanceTime.value)) {
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
  const phone = document.querySelector("#customerPhone").value.trim() || "Sin telÃ©fono";
  const address = document.querySelector("#customerAddress").value.trim();
  const messageAddress = cleanAddressForMessage(address);
  const buildingType = document.querySelector("#buildingType").value;
  const addressDetails = document.querySelector("#addressDetails").value.trim() || "Sin especificaciones";
  const payment = document.querySelector("#paymentMethod").value;
  const scheduleText = getDeliveryScheduleText();
  const advanceLine = advanceProduct.value === "SÃ­"
    ? [`*Anticipo de producto:* SÃ­`, `*DÃ­a del anticipo:* ${advanceDate.value}`, `*Horario del anticipo:* ${advanceTime.value}`]
    : ["*Anticipo de producto:* No"];
  const mode = document.querySelector("#deliveryMode").value;
  const recipientName = document.querySelector("#recipientName").value.trim();
  const recipientPhone = document.querySelector("#recipientPhone").value.trim();
  const recipientLine = mode === "Otra persona"
    ? [`*Entrega para:* Otra persona`, `*Recibe:* ${recipientName}`, `*TelÃ©fono de quien recibe:* ${recipientPhone}`]
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
    `*EnvÃ­o estimado:* ${money(shipping)}`,
    `*Total estimado:* ${money(total)}`,
    "",
    `*Nombre:* ${name}`,
    `*TelÃ©fono:* ${phone}`,
    ...recipientLine,
    `*DirecciÃ³n exacta:* ${messageAddress}`,
    `*Tipo de edificio:* ${buildingType}`,
    `*Especificaciones:* ${addressDetails}`,
    `*Horario de entrega:* ${scheduleText}`,
    ...advanceLine,
    locationLine,
    "",
    `*Forma de pago:* ${payment}`,
    "Si pago por transferencia, enviarÃ© el comprobante por WhatsApp."
  ].join("\n");

  saveWebOrder({
    id: Date.now(),
    date: new Date().toLocaleString("es-MX", { dateStyle: "short", timeStyle: "short" }),
    customer: name,
    phone,
    recipient: mode === "Otra persona" ? recipientName : name,
    address: messageAddress,
    buildingType,
    addressDetails,
    payment,
    schedule: scheduleText,
    status: "Pendiente",
    coords: customerCoords ? {
      lat: customerCoords.lat,
      lng: customerCoords.lng
    } : null,
    shipping,
    subtotal,
    total,
    items: rows.map((row) => ({
      name: row.name,
      quantity: row.quantity,
      subtotal: row.subtotal
    }))
  });

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

document.querySelector("#openAdmin").addEventListener("click", openAdmin);
document.querySelector("#closeAdmin").addEventListener("click", closeAdmin);
document.querySelector("#adminLoginButton").addEventListener("click", loginAdmin);
document.querySelector("#adminLogout").addEventListener("click", logoutAdmin);
document.querySelector("#clearPos").addEventListener("click", clearPosSale);
document.querySelector("#clearOrders").addEventListener("click", clearWebOrders);
document.querySelector("#saveProductEdit").addEventListener("click", saveProductEdit);
document.querySelector("#resetProductEdits").addEventListener("click", resetProductEdits);
document.querySelector("#newProductButton").addEventListener("click", startNewProduct);
editProduct.addEventListener("change", () => loadProductEditor(editProduct.value));
editProductUpload.addEventListener("change", () => previewUploadedProductImage(editProductUpload.files[0]));
adminProductCards.addEventListener("click", (event) => {
  const button = event.target.closest("[data-edit-product]");
  if (!button) return;
  editProduct.dataset.mode = "";
  loadProductEditor(button.dataset.editProduct);
  showToast("Producto listo para editar.");
});
document.querySelector("#adminTabs").addEventListener("click", (event) => {
  const button = event.target.closest("[data-admin-view]");
  if (button) switchAdminView(button.dataset.adminView);
});
adminPassword.addEventListener("keydown", (event) => {
  if (event.key === "Enter") loginAdmin();
});
adminOrdersElement.addEventListener("click", (event) => {
  const openButton = event.target.closest("[data-open-order]");
  const routeButton = event.target.closest("[data-route-order]");
  const arrivedButton = event.target.closest("[data-arrived-order]");
  const deliverButton = event.target.closest("[data-deliver-order]");

  if (openButton) {
    const id = Number(openButton.dataset.openOrder);
    activeOrderId = activeOrderId === id ? null : id;
    renderAdminOrders();
  }
  if (routeButton) openDeliveryRoute(routeButton.dataset.routeOrder);
  if (arrivedButton) checkDeliveryArrival(arrivedButton.dataset.arrivedOrder);
  if (deliverButton) markOrderDelivered(deliverButton.dataset.deliverOrder);
});
adminDrawer.addEventListener("click", (event) => {
  if (event.target === adminDrawer) closeAdmin();
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
  advanceFields.hidden = advanceProduct.value !== "SÃ­";
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
    ? "Toca el mapa para elegir la ubicaciÃ³n de entrega o escribe la direcciÃ³n."
    : "Usa tu ubicaciÃ³n actual para calcular el envÃ­o.";
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
setupInstallableApp();

