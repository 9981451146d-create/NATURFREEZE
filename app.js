const WHATSAPP_NUMBER = "529983500558";
const STORE_LOCATION = { lat: 21.173461, lng: -86.915554 };
const OPENROUTESERVICE_API_KEY = "eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6ImI4NzgwYWRhYjhkOTRiYjZiYWJkNTM5ZTdkZjA3NmIxIiwiaCI6Im11cm11cjY0In0=";
const BASE_SHIPPING = 25;
const INCLUDED_KM = 3;
const PRICE_PER_EXTRA_KM = 10;
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDDO5y_xjbXFFOI_Adik9KAWCmumzTgMHM",
  authDomain: "naturfreeze.firebaseapp.com",
  projectId: "naturfreeze",
  storageBucket: "naturfreeze.firebasestorage.app",
  messagingSenderId: "1007695932173",
  appId: "1:1007695932173:web:77e7e6e773a884c68fde44"
};

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

const PRODUCT_EDITS_KEY = "naturfreezeProductEdits";
const CUSTOM_PRODUCTS_KEY = "naturfreezeCustomProducts";
const ORDERS_KEY = "naturfreezeAdminOrders";
let productEdits = readStored(PRODUCT_EDITS_KEY, {});
let customProducts = readStored(CUSTOM_PRODUCTS_KEY, []);
let adminOrders = readStored(ORDERS_KEY, []);
const defaultProducts = products.map((product) => ({ ...product }));
let firestoreDb = null;
let firebaseReady = false;

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
const payHereButton = document.querySelector("#payHere");
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
let activeRouteSchedule = null;
let deferredInstallPrompt = null;

let posCart = [];

let deliveryMap = null;
let deliveryMarker = null;
let storeMarker = null;
let adminRouteMap = null;
let adminRouteUserMarker = null;
let adminRouteDestMarker = null;
let adminRouteLine = null;
let adminRouteDestMarkers = [];
let adminRouteWatchId = null;
let adminRouteRequesting = false;
let adminRouteLoadedFor = null;
let adminRouteSummary = null;
let adminRouteSteps = [];
let activeRouteStepIndex = 0;
let adminRouteViewMode = "overview";
let soundContext = null;
let soundUnlocked = false;
let welcomeSoundPlayed = false;

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

function setupFirebaseSync() {
  if (!window.firebase?.initializeApp) {
    showToast("Firebase no cargó. La página seguirá guardando en este navegador.");
    return;
  }

  try {
    window.firebase.initializeApp(FIREBASE_CONFIG);
    firestoreDb = window.firebase.firestore();
    firebaseReady = true;
    seedProductsToFirebase();
    subscribeFirebaseProducts();
    subscribeFirebaseOrders();
  } catch (error) {
    console.warn("Firebase no pudo iniciar", error);
    firebaseReady = false;
  }
}

function subscribeFirebaseOrders() {
  if (!firestoreDb) return;

  firestoreDb.collection("orders")
    .orderBy("createdAt", "desc")
    .limit(80)
    .onSnapshot((snapshot) => {
      adminOrders = snapshot.docs.map((doc) => normalizeFirebaseOrder(doc.id, doc.data()));
      writeStored(ORDERS_KEY, adminOrders);
      renderAdminDashboard();
    }, (error) => {
      console.warn("No pude leer pedidos de Firebase", error);
      showToast("Firebase pedidos no respondió. Uso respaldo local.");
    });
}

function subscribeFirebaseProducts() {
  if (!firestoreDb) return;

  firestoreDb.collection("products")
    .orderBy("name")
    .onSnapshot((snapshot) => {
      if (snapshot.empty) return;

      const remoteProducts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      const merged = new Map(defaultProducts.map((product) => [product.id, { ...product }]));
      remoteProducts.forEach((product) => {
        merged.set(product.id, {
          id: product.id,
          category: product.category || "general",
          name: product.name || "Producto NaturFreeze",
          price: Number(product.price) || 0,
          presentation: product.presentation || "1 pieza",
          image: product.image || "assets/logo-naturfreeze-mark.jpg",
          detail: product.detail || "Producto NaturFreeze."
        });
      });

      products.splice(0, products.length, ...Array.from(merged.values()));
      renderProducts();
      renderCart();
      renderAdminDashboard();
    }, (error) => {
      console.warn("No pude leer productos de Firebase", error);
    });
}

function normalizeFirebaseOrder(id, data) {
  const createdDate = data.createdAt?.toDate ? data.createdAt.toDate() : new Date(data.createdAt || Date.now());
  const deliveredDate = data.deliveredAt?.toDate ? data.deliveredAt.toDate() : null;
  return {
    ...data,
    id,
    date: data.date || createdDate.toLocaleString("es-MX", { dateStyle: "short", timeStyle: "short" }),
    deliveredAt: data.deliveredAtText || (deliveredDate ? deliveredDate.toLocaleString("es-MX", { dateStyle: "short", timeStyle: "short" }) : data.deliveredAt),
    items: Array.isArray(data.items) ? data.items : [],
    shipping: Number(data.shipping) || 0,
    subtotal: Number(data.subtotal) || 0,
    total: Number(data.total) || 0
  };
}

function saveOrderToFirebase(order) {
  if (!firestoreDb) return Promise.resolve(false);

  const docId = String(order.id);
  return firestoreDb.collection("orders").doc(docId).set({
    ...order,
    id: docId,
    createdAt: window.firebase.firestore.FieldValue.serverTimestamp()
  }, { merge: true }).then(() => true).catch((error) => {
    console.warn("No pude guardar pedido en Firebase", error);
    showToast("Pedido enviado, pero Firebase no lo guardó. Revisa internet.");
    return false;
  });
}

function saveProductToFirebase(product) {
  if (!firestoreDb) return Promise.resolve(false);

  return firestoreDb.collection("products").doc(product.id).set({
    ...product,
    updatedAt: window.firebase.firestore.FieldValue.serverTimestamp()
  }, { merge: true }).then(() => true).catch((error) => {
    console.warn("No pude guardar producto en Firebase", error);
    showToast("Producto guardado localmente, pero Firebase no respondió.");
    return false;
  });
}

function updateOrderInFirebase(id, updates) {
  if (!firestoreDb) return Promise.resolve(false);

  return firestoreDb.collection("orders").doc(String(id)).set({
    ...updates,
    updatedAt: window.firebase.firestore.FieldValue.serverTimestamp()
  }, { merge: true }).then(() => true).catch((error) => {
    console.warn("No pude actualizar pedido en Firebase", error);
    return false;
  });
}

function seedProductsToFirebase() {
  if (!firestoreDb) return;
  firestoreDb.collection("products").limit(1).get().then((snapshot) => {
    if (!snapshot.empty) return;
    defaultProducts.forEach((product) => saveProductToFirebase(product));
  }).catch((error) => {
    console.warn("No pude preparar productos iniciales", error);
  });
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
    playSound("success");
    showToast("NaturFreeze instalada.");
  });
}

function getSoundContext() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return null;
  if (!soundContext) soundContext = new AudioContext();
  return soundContext;
}

function unlockSound() {
  const context = getSoundContext();
  if (!context) return;
  if (context.state === "suspended") context.resume();
  soundUnlocked = true;
  if (!welcomeSoundPlayed) {
    welcomeSoundPlayed = true;
    window.setTimeout(() => playSound("welcome"), 80);
  }
}

function playTone(frequency, start, duration, gain = 0.05, type = "sine") {
  const context = getSoundContext();
  if (!context || !soundUnlocked) return;

  const oscillator = context.createOscillator();
  const volume = context.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, context.currentTime + start);
  volume.gain.setValueAtTime(0.0001, context.currentTime + start);
  volume.gain.exponentialRampToValueAtTime(gain, context.currentTime + start + 0.02);
  volume.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + start + duration);
  oscillator.connect(volume);
  volume.connect(context.destination);
  oscillator.start(context.currentTime + start);
  oscillator.stop(context.currentTime + start + duration + 0.03);
}

function playSound(type = "tap") {
  if (!soundUnlocked) return;

  if (type === "welcome") {
    playTone(523.25, 0, 0.12, 0.045);
    playTone(659.25, 0.10, 0.14, 0.045);
    playTone(783.99, 0.22, 0.20, 0.05);
    return;
  }

  if (type === "success") {
    playTone(587.33, 0, 0.10, 0.05);
    playTone(880, 0.10, 0.18, 0.055);
    return;
  }

  if (type === "route") {
    playTone(392, 0, 0.08, 0.04, "triangle");
    playTone(523.25, 0.08, 0.11, 0.045, "triangle");
    return;
  }

  playTone(720, 0, 0.045, 0.03, "triangle");
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
  playSound("success");
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
    if (order.status === "Entregado") {
      updateOrderInFirebase(order.id, { saleCleared: true });
      return { ...order, saleCleared: true };
    }
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
  saveOrderToFirebase(order);
  renderAdminDashboard();
}

function renderAdminOrders() {
  if (!adminOrdersElement) return;

  const pendingOrders = adminOrders.filter((order) => order.status !== "Entregado");
  if (!pendingOrders.length) {
    adminOrdersElement.innerHTML = '<p class="cart-note">Aun no hay pedidos enviados desde esta pagina.</p>';
    renderAdminStats();
    return;
  }

  const schedules = ["2:00 pm", "6:00 pm"];
  adminOrdersElement.innerHTML = schedules.map((schedule) => {
    const orders = pendingOrders.filter((order) => order.schedule === schedule);
    const total = orders.reduce((sum, order) => sum + order.total, 0);
    const itemCount = orders.reduce((sum, order) => {
      return sum + order.items.reduce((itemsSum, item) => itemsSum + item.quantity, 0);
    }, 0);
    const isOpen = activeRouteSchedule === schedule;

    return `
      <article class="schedule-card ${isOpen ? "open" : ""}">
        <div class="schedule-card-head">
          <div>
            <span class="eyebrow">Ruta de reparto</span>
            <h4>${schedule}</h4>
            <p>${orders.length} pedido(s) | ${itemCount} producto(s)</p>
          </div>
          <strong class="order-total-pill">${money(total)}</strong>
        </div>
        <button class="add-button full" type="button" data-open-schedule="${schedule}" ${orders.length ? "" : "disabled"}>
          ${isOpen ? "Ocultar ruta" : "Entregar horario"}
        </button>
        ${isOpen ? renderScheduleDetail(schedule, orders) : ""}
      </article>
    `;
  }).join("");
  renderAdminStats();
}

function renderScheduleDetail(schedule, orders) {
  if (!orders.length) {
    return '<div class="order-detail-panel"><p>No hay pedidos pendientes en este horario.</p></div>';
  }

  return `
    <div class="order-detail-panel schedule-detail">
      <div class="schedule-summary">
        <strong>Pedidos para entregar a las ${schedule}</strong>
        <span>Revisa la lista y confirma para abrir la navegación.</span>
      </div>
      ${orders.map((order, index) => `
        <div class="schedule-order-line">
          <span>${index + 1}</span>
          <div>
            <strong>${order.customer}</strong>
            <p>${order.address}</p>
            <small>${order.items.map((item) => `${item.quantity} x ${item.name}`).join(" | ")}</small>
          </div>
          <b>${money(order.total)}</b>
        </div>
      `).join("")}
      <div class="order-actions">
        <button class="secondary-action" type="button" data-confirm-schedule="${schedule}">Confirmar ruta</button>
        <button class="copy-button" type="button" data-arrived-schedule="${schedule}">Estoy en la entrega</button>
        <button class="add-button" type="button" data-deliver-schedule="${schedule}">Marcar horario entregado</button>
      </div>
      <div class="admin-route-card" id="adminRouteCard" hidden>
        <div>
          <strong>Ruta de entrega</strong>
          <span id="adminRouteStatus">Confirma la ruta para iniciar.</span>
        </div>
        <div class="route-view-actions">
          <button class="active" type="button" data-route-view="overview">Mapa completo</button>
          <button type="button" data-route-view="close">Vista cercana</button>
        </div>
        <div class="admin-navigation">
          <div class="admin-route-map" id="adminRouteMap" aria-label="Mapa interno de entrega"></div>
          <div class="route-steps-card" id="routeStepsCard">
            <span class="route-turn-icon" aria-hidden="true"></span>
            <strong id="nextRouteInstruction">Esperando ruta...</strong>
            <small id="nextRouteDistance">Cuando cargue la ruta aparecerán los metros.</small>
            <div class="route-step-progress" id="routeStepProgress">Paso 0 de 0</div>
          </div>
          <div class="route-speed-pill" id="routeSpeedPill">
            <strong id="routeSpeed">0</strong>
            <span>km/h</span>
          </div>
          <div class="route-bottom-sheet">
            <div>
              <strong id="routeEta">Calculando...</strong>
              <span id="routeDestinationText">Entrega NaturFreeze</span>
            </div>
            <button class="copy-button" type="button" data-route-view="overview">Mapa</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function clearWebOrders() {
  adminOrders
    .filter((order) => order.status !== "Entregado")
    .forEach((order) => updateOrderInFirebase(order.id, { status: "Cancelado" }));
  adminOrders = adminOrders.filter((order) => order.status === "Entregado");
  writeStored(ORDERS_KEY, adminOrders);
  renderAdminOrders();
  showToast("Pedidos pendientes limpiados.");
}

function openDeliveryRoute(id) {
  const order = adminOrders.find((item) => String(item.id) === String(id));
  if (!order) return;
  openDeliveryRouteForSchedule(order.schedule);
}

function openDeliveryRouteForSchedule(schedule) {
  const orders = adminOrders.filter((item) => item.status !== "Entregado" && item.schedule === schedule && item.coords);
  if (!orders.length) {
    showToast("No hay pedidos con ubicación exacta en este horario.");
    return;
  }
  const order = orders[0];
  const routeStops = adminOrders
    .filter((item) => item.status !== "Entregado" && item.schedule === schedule && item.coords)
    .map((item) => ({
      id: item.id,
      customer: item.customer,
      address: item.address,
      schedule: item.schedule,
      total: item.total,
      coords: item.coords
    }));
  const routeOrder = { ...order, routeStops };

  activeOrderId = order.id;
  activeRouteSchedule = schedule;
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
        heading: position.coords.heading,
        speed: position.coords.speed
      };
      renderAdminRouteMap(routeOrder, current);
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
  adminRouteDestMarkers = [];
  adminRouteLine = null;
  adminRouteRequesting = false;
  adminRouteLoadedFor = null;
  adminRouteSummary = null;
  adminRouteSteps = [];
  activeRouteStepIndex = 0;
  adminRouteViewMode = "overview";
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

function formatRouteEta(summary) {
  if (!summary) return "Calculando...";
  const kilometers = summary.distance / 1000;
  const minutes = Math.max(1, Math.round(summary.duration / 60));
  return `${minutes} min ${kilometers.toFixed(1)} km`;
}

function updateRouteBottomSheet(order, current, destination) {
  const speedText = document.querySelector("#routeSpeed");
  const etaText = document.querySelector("#routeEta");
  const destinationText = document.querySelector("#routeDestinationText");
  const speedKmh = Number.isFinite(current.speed) ? Math.max(0, Math.round(current.speed * 3.6)) : 0;

  if (speedText) speedText.textContent = speedKmh;

  if (etaText) {
    etaText.textContent = adminRouteSummary
      ? formatRouteEta(adminRouteSummary)
      : destination ? getRouteEstimate(distanceKm(current, destination)) : "Sin destino";
  }

  if (destinationText) {
    const firstStop = order.routeStops?.[0];
    destinationText.textContent = firstStop?.address || order.address || "Entrega NaturFreeze";
  }
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

function setRouteViewMode(mode) {
  adminRouteViewMode = mode;
  document.querySelectorAll("[data-route-view]").forEach((button) => {
    button.classList.toggle("active", button.dataset.routeView === mode);
  });

  if (!adminRouteMap || !adminRouteUserMarker) return;
  if (mode === "close") {
    adminRouteMap.setView(adminRouteUserMarker.getLatLng(), 17);
  } else if (adminRouteLine) {
    adminRouteMap.fitBounds(adminRouteLine.getBounds(), { padding: [28, 28] });
  }
}

function makeRouteIcon(type, number = "") {
  const label = type === "driver" ? "" : number;
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

function getRouteDestinations(order) {
  if (order.routeStops?.length) return order.routeStops.map((stop) => stop.coords);
  return order.coords ? [order.coords] : [];
}

async function fetchOpenRouteGeometry(current, destinations) {
  const stops = Array.isArray(destinations) ? destinations : [destinations];
  const response = await fetch("https://api.openrouteservice.org/v2/directions/driving-car/geojson", {
    method: "POST",
    headers: {
      "Authorization": OPENROUTESERVICE_API_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      coordinates: [
        [current.lng, current.lat],
        ...stops.map((destination) => [destination.lng, destination.lat])
      ],
      instructions: true,
      language: "es"
    })
  });

  if (!response.ok) {
    throw new Error(`No se pudo calcular ruta: ${response.status}`);
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

  const destinations = getRouteDestinations(order);
  const destination = destinations[0] || null;
  updateRouteBottomSheet(order, current, destination);
  if (destination) {
    const kilometers = distanceKm(current, destination);
    const routeText = adminRouteSummary
      ? `Ruta por calles: ${formatRouteSummary(adminRouteSummary.distance, adminRouteSummary.duration)}`
      : `Calculando ruta por calles... Aproximado: ${getRouteEstimate(kilometers)}`;
    if (routeStatus) routeStatus.textContent = `${routeText}. ${destinations.length} entrega(s) a las ${order.schedule}.`;
  } else if (routeStatus) {
    routeStatus.textContent = "Tu ubicacion actual ya aparece. Este pedido no tiene coordenadas exactas guardadas.";
  }

  if (!adminRouteMap) {
    adminRouteMap = L.map(mapElement, {
      zoomControl: true,
      scrollWheelZoom: true
    });

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap",
      maxZoom: 19
    }).addTo(adminRouteMap);
  }

  const currentPoint = [current.lat, current.lng];
  if (!adminRouteUserMarker) {
    adminRouteUserMarker = L.marker(currentPoint, {
      icon: makeRouteIcon("driver"),
      zIndexOffset: 1000
    }).addTo(adminRouteMap);
  } else {
    adminRouteUserMarker.setLatLng(currentPoint);
  }
  rotateDriverMarker(current.heading);

  updateActiveRouteStep(current);

  if (!destination) {
    adminRouteMap.setView(currentPoint, 16);
    window.setTimeout(() => adminRouteMap.invalidateSize(), 120);
    return;
  }

  if (!adminRouteDestMarkers.length) {
    adminRouteDestMarkers = (order.routeStops || [{ ...order, coords: destination }]).map((stop, index) => {
      return L.marker([stop.coords.lat, stop.coords.lng], {
        icon: makeRouteIcon("dropoff", index + 1)
      }).addTo(adminRouteMap).bindPopup(`Entrega ${index + 1}: ${stop.customer}<br>${stop.address}`);
    });
    adminRouteDestMarker = adminRouteDestMarkers[0] || null;
  }

  const fallbackLinePoints = [currentPoint, ...destinations.map((stop) => [stop.lat, stop.lng])];
  if (!adminRouteLine) {
    adminRouteLine = L.polyline(fallbackLinePoints, {
      color: "#4169ff",
      weight: 8,
      opacity: .9,
      dashArray: "8 8"
    }).addTo(adminRouteMap);
  }

  if (!adminRouteLoadedFor && !adminRouteRequesting) {
    loadOpenRouteLine(order, current, destinations);
  }

  if (adminRouteViewMode === "close") {
    adminRouteMap.setView(currentPoint, 18);
  } else {
    adminRouteMap.fitBounds(adminRouteLine.getBounds(), { padding: [28, 28] });
  }
  window.setTimeout(() => adminRouteMap.invalidateSize(), 120);
}

async function loadOpenRouteLine(order, current, destinations) {
  const lastDestination = destinations[destinations.length - 1];
  const routeKey = `${order.id}:${order.schedule}:${formatCoord(current.lat)},${formatCoord(current.lng)}:${destinations.length}:${formatCoord(lastDestination.lat)},${formatCoord(lastDestination.lng)}`;
  adminRouteRequesting = true;

  try {
    const route = await fetchOpenRouteGeometry(current, destinations);
    adminRouteSummary = route.summary;
    adminRouteLoadedFor = routeKey;

    if (!adminRouteMap) return;
    adminRouteLine.setLatLngs(route.points);
    adminRouteLine.setStyle({
      color: "#4169ff",
      weight: 9,
      opacity: .95,
      dashArray: ""
    });
    playSound("route");
    adminRouteMap.fitBounds(adminRouteLine.getBounds(), { padding: [28, 28] });

    const routeStatus = document.querySelector("#adminRouteStatus");
    if (routeStatus) {
      routeStatus.textContent = `En vivo: Ruta por calles: ${formatRouteSummary(route.summary.distance, route.summary.duration)}. ${destinations.length} entrega(s) a las ${order.schedule}.`;
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
  const deliveredAt = new Date().toLocaleString("es-MX", { dateStyle: "short", timeStyle: "short" });
  adminOrders = adminOrders.map((order) => {
    if (String(order.id) !== String(id)) return order;
    updateOrderInFirebase(order.id, {
      status: "Entregado",
      deliveredAtText: deliveredAt,
      deliveredAt: window.firebase?.firestore?.FieldValue?.serverTimestamp?.() || deliveredAt,
      deliveryDetected: detected
    });
    return {
      ...order,
      status: "Entregado",
      deliveredAt,
      deliveryDetected: detected
    };
  });
  writeStored(ORDERS_KEY, adminOrders);
  switchAdminView("pos");
  renderAdminDashboard();
  showToast("Pedido entregado y agregado al punto de venta.");
}

function markScheduleDelivered(schedule, detected = false) {
  const deliveredAt = new Date().toLocaleString("es-MX", { dateStyle: "short", timeStyle: "short" });
  adminOrders = adminOrders.map((order) => {
    if (order.schedule !== schedule || order.status === "Entregado") return order;
    updateOrderInFirebase(order.id, {
      status: "Entregado",
      deliveredAtText: deliveredAt,
      deliveredAt: window.firebase?.firestore?.FieldValue?.serverTimestamp?.() || deliveredAt,
      deliveryDetected: detected
    });
    return {
      ...order,
      status: "Entregado",
      deliveredAt,
      deliveryDetected: detected
    };
  });
  writeStored(ORDERS_KEY, adminOrders);
  stopAdminRouteTracking();
  resetAdminRouteMap();
  activeRouteSchedule = null;
  switchAdminView("pos");
  renderAdminDashboard();
  showToast(`Horario ${schedule} entregado y agregado al punto de venta.`);
}

function checkDeliveryArrival(id) {
  const order = adminOrders.find((item) => String(item.id) === String(id));
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

function checkScheduleArrival(schedule) {
  const orders = adminOrders.filter((order) => order.status !== "Entregado" && order.schedule === schedule && order.coords);
  if (!orders.length || !navigator.geolocation) {
    showToast("No hay GPS suficiente para revisar este horario.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const current = { lat: position.coords.latitude, lng: position.coords.longitude };
      const nearest = orders
        .map((order) => ({ order, kilometers: distanceKm(current, order.coords) }))
        .sort((a, b) => a.kilometers - b.kilometers)[0];

      if (nearest.kilometers <= 0.18) {
        markOrderDelivered(nearest.order.id, true);
      } else {
        showToast(`La entrega más cercana está a ${nearest.kilometers.toFixed(2)} km.`);
      }
    },
    () => showToast("No pude leer tu ubicación actual."),
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
    saveProductToFirebase(product);
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
  saveProductToFirebase(product);

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
  playSound("success");
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
  initDeliveryMap();
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

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
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

  if (!navigator.geolocation) {
    status.textContent = "Tu navegador no permite ubicación. Toca el punto exacto en el mapa.";
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
    status.textContent = "No se pudo tomar la ubicación. Toca el punto exacto en el mapa.";
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
    showToast("Escribe una referencia de dirección.");
    return false;
  }

  if (!customerCoords) {
    showToast("Elige el punto exacto de entrega en el mapa.");
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
    locationLine,
    "",
    `*Forma de pago:* ${payment}`,
    "Quiero pagar en la página cuando esté disponible."
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

  playSound("success");
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
if (payHereButton) {
  payHereButton.addEventListener("click", () => {
    document.querySelector("#paymentStatus").textContent = "Pago en línea preparado. Falta conectar Mercado Pago para cobrar dinero real.";
    showToast("Para cobrar aquí falta conectar Mercado Pago.");
  });
}
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
  const openScheduleButton = event.target.closest("[data-open-schedule]");
  const confirmScheduleButton = event.target.closest("[data-confirm-schedule]");
  const arrivedScheduleButton = event.target.closest("[data-arrived-schedule]");
  const deliverScheduleButton = event.target.closest("[data-deliver-schedule]");
  const routeButton = event.target.closest("[data-route-order]");
  const arrivedButton = event.target.closest("[data-arrived-order]");
  const deliverButton = event.target.closest("[data-deliver-order]");
  const routeViewButton = event.target.closest("[data-route-view]");

  if (openButton) {
    const id = openButton.dataset.openOrder;
    activeOrderId = String(activeOrderId) === String(id) ? null : id;
    renderAdminOrders();
  }
  if (openScheduleButton) {
    const schedule = openScheduleButton.dataset.openSchedule;
    activeRouteSchedule = activeRouteSchedule === schedule ? null : schedule;
    stopAdminRouteTracking();
    resetAdminRouteMap();
    renderAdminOrders();
  }
  if (confirmScheduleButton) openDeliveryRouteForSchedule(confirmScheduleButton.dataset.confirmSchedule);
  if (arrivedScheduleButton) checkScheduleArrival(arrivedScheduleButton.dataset.arrivedSchedule);
  if (deliverScheduleButton) markScheduleDelivered(deliverScheduleButton.dataset.deliverSchedule);
  if (routeButton) openDeliveryRoute(routeButton.dataset.routeOrder);
  if (arrivedButton) checkDeliveryArrival(arrivedButton.dataset.arrivedOrder);
  if (deliverButton) markOrderDelivered(deliverButton.dataset.deliverOrder);
  if (routeViewButton) setRouteViewMode(routeViewButton.dataset.routeView);
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
  customDeliveryFields.hidden = true;
});

advanceProduct.addEventListener("change", () => {
  advanceFields.hidden = true;
});

deliveryMode.addEventListener("change", () => {
  const isOtherPerson = deliveryMode.value === "Otra persona";
  otherPersonFields.hidden = !isOtherPerson;
  mapPicker.hidden = false;
  document.querySelector("#useLocation").hidden = false;

  initDeliveryMap();

  document.querySelector("#locationStatus").textContent = isOtherPerson
    ? "Toca el punto exacto de entrega para esa persona."
    : "Usa tu ubicación actual o toca el punto exacto de entrega.";
});

cartDrawer.addEventListener("click", (event) => {
  if (event.target === cartDrawer) closeCart();
});

document.querySelector("#copyClabe").addEventListener("click", async () => {
  await navigator.clipboard.writeText("722969010584124963");
  showToast("CLABE copiada.");
});

document.addEventListener("pointerdown", (event) => {
  unlockSound();
  const target = event.target.closest("button, a");
  if (!target) return;

  playSound("tap");
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
setupFirebaseSync();

