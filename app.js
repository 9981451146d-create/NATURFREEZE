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
    "id": "mix-berries",
    "name": "Mix de berries",
    "category": "frutas congeladas",
    "presentation": "2 kg",
    "price": 180,
    "stock": 999,
    "image": "assets/logo-naturfreeze-mark.jpg",
    "detail": "Producto congelado NaturFreeze Cancún. Excelente calidad y precio sujeto a cambio sin previo aviso."
  },
  {
    "id": "fresas",
    "name": "Fresas congeladas",
    "category": "frutas congeladas",
    "presentation": "2 kg",
    "price": 170,
    "stock": 999,
    "image": "assets/logo-naturfreeze-mark.jpg",
    "detail": "Producto congelado NaturFreeze Cancún. Excelente calidad y precio sujeto a cambio sin previo aviso."
  },
  {
    "id": "mango",
    "name": "Mango congelado",
    "category": "frutas congeladas",
    "presentation": "2 kg",
    "price": 170,
    "stock": 999,
    "image": "assets/logo-naturfreeze-mark.jpg",
    "detail": "Producto congelado NaturFreeze Cancún. Excelente calidad y precio sujeto a cambio sin previo aviso."
  },
  {
    "id": "papas-francesa",
    "name": "Papas a la francesa",
    "category": "papas y verduras",
    "presentation": "2.5 kg",
    "price": 120,
    "stock": 999,
    "image": "assets/logo-naturfreeze-mark.jpg",
    "detail": "Producto congelado NaturFreeze Cancún. Excelente calidad y precio sujeto a cambio sin previo aviso."
  },
  {
    "id": "papas-gajo-1kg",
    "name": "Papas gajo",
    "category": "papas y verduras",
    "presentation": "1 kg",
    "price": 80,
    "stock": 999,
    "image": "assets/logo-naturfreeze-mark.jpg",
    "detail": "Producto congelado NaturFreeze Cancún. Excelente calidad y precio sujeto a cambio sin previo aviso."
  },
  {
    "id": "papas-gajo-25kg",
    "name": "Papas gajo",
    "category": "papas y verduras",
    "presentation": "2.5 kg",
    "price": 180,
    "stock": 999,
    "image": "assets/logo-naturfreeze-mark.jpg",
    "detail": "Producto congelado NaturFreeze Cancún. Excelente calidad y precio sujeto a cambio sin previo aviso."
  },
  {
    "id": "aros-cebolla",
    "name": "Aros de cebolla",
    "category": "papas y verduras",
    "presentation": "1 kg",
    "price": 120,
    "stock": 999,
    "image": "assets/logo-naturfreeze-mark.jpg",
    "detail": "Producto congelado NaturFreeze Cancún. Excelente calidad y precio sujeto a cambio sin previo aviso."
  },
  {
    "id": "nuggets-dinosaurio",
    "name": "Nuggets dinosaurio",
    "category": "empanizados",
    "presentation": "1 kg",
    "price": 130,
    "stock": 999,
    "image": "assets/logo-naturfreeze-mark.jpg",
    "detail": "Producto congelado NaturFreeze Cancún. Excelente calidad y precio sujeto a cambio sin previo aviso."
  },
  {
    "id": "nuggets-tradicional",
    "name": "Nuggets tradicional",
    "category": "empanizados",
    "presentation": "1 kg",
    "price": 110,
    "stock": 999,
    "image": "assets/logo-naturfreeze-mark.jpg",
    "detail": "Producto congelado NaturFreeze Cancún. Excelente calidad y precio sujeto a cambio sin previo aviso."
  },
  {
    "id": "boneless-pechuga",
    "name": "Boneless de pechuga",
    "category": "empanizados",
    "presentation": "1 kg",
    "price": 170,
    "stock": 999,
    "image": "assets/logo-naturfreeze-mark.jpg",
    "detail": "Producto congelado NaturFreeze Cancún. Excelente calidad y precio sujeto a cambio sin previo aviso."
  },
  {
    "id": "dedos-queso",
    "name": "Dedos de queso",
    "category": "empanizados",
    "presentation": "1 kg",
    "price": 280,
    "stock": 999,
    "image": "assets/logo-naturfreeze-mark.jpg",
    "detail": "Producto congelado NaturFreeze Cancún. Excelente calidad y precio sujeto a cambio sin previo aviso."
  },
  {
    "id": "tiras-pechuga-picosas",
    "name": "Tiras de pechuga picosas",
    "category": "empanizados",
    "presentation": "1 kg",
    "price": 175,
    "stock": 999,
    "image": "assets/logo-naturfreeze-mark.jpg",
    "detail": "Producto congelado NaturFreeze Cancún. Excelente calidad y precio sujeto a cambio sin previo aviso."
  },
  {
    "id": "palomitas-pechuga",
    "name": "Palomitas de pechuga",
    "category": "empanizados",
    "presentation": "1 kg",
    "price": 125,
    "stock": 999,
    "image": "assets/logo-naturfreeze-mark.jpg",
    "detail": "Producto congelado NaturFreeze Cancún. Excelente calidad y precio sujeto a cambio sin previo aviso."
  },
  {
    "id": "jalapenos-poppers",
    "name": "Jalapeños poppers",
    "category": "empanizados",
    "presentation": "1 kg",
    "price": 270,
    "stock": 999,
    "image": "assets/logo-naturfreeze-mark.jpg",
    "detail": "Producto congelado NaturFreeze Cancún. Excelente calidad y precio sujeto a cambio sin previo aviso."
  },
  {
    "id": "mix-mariscos",
    "name": "Mix de mariscos",
    "category": "mariscos",
    "presentation": "500 g",
    "price": 70,
    "stock": 999,
    "image": "assets/logo-naturfreeze-mark.jpg",
    "detail": "Producto congelado NaturFreeze Cancún. Excelente calidad y precio sujeto a cambio sin previo aviso."
  },
  {
    "id": "camaron-jumbo",
    "name": "Camarón Jumbo 16/20",
    "category": "mariscos",
    "presentation": "1 kg",
    "price": 280,
    "stock": 999,
    "image": "assets/logo-naturfreeze-mark.jpg",
    "detail": "Producto congelado NaturFreeze Cancún. Excelente calidad y precio sujeto a cambio sin previo aviso."
  },
  {
    "id": "camaron-grande",
    "name": "Camarón grande 21/25",
    "category": "mariscos",
    "presentation": "1 kg",
    "price": 240,
    "stock": 999,
    "image": "assets/logo-naturfreeze-mark.jpg",
    "detail": "Producto congelado NaturFreeze Cancún. Excelente calidad y precio sujeto a cambio sin previo aviso."
  },
  {
    "id": "camaron-mediano",
    "name": "Camarón mediano 41/50",
    "category": "mariscos",
    "presentation": "1 kg",
    "price": 200,
    "stock": 999,
    "image": "assets/logo-naturfreeze-mark.jpg",
    "detail": "Producto congelado NaturFreeze Cancún. Excelente calidad y precio sujeto a cambio sin previo aviso."
  },
  {
    "id": "camaron-chico",
    "name": "Camarón chico 61/70",
    "category": "mariscos",
    "presentation": "1 kg",
    "price": 180,
    "stock": 999,
    "image": "assets/logo-naturfreeze-mark.jpg",
    "detail": "Producto congelado NaturFreeze Cancún. Excelente calidad y precio sujeto a cambio sin previo aviso."
  },
  {
    "id": "filete-tilapia-premium",
    "name": "Filete de tilapia Premium",
    "category": "pescados",
    "presentation": "1 kg",
    "price": 115,
    "stock": 999,
    "image": "assets/logo-naturfreeze-mark.jpg",
    "detail": "Producto congelado NaturFreeze Cancún. Excelente calidad y precio sujeto a cambio sin previo aviso."
  },
  {
    "id": "filete-basa-premium",
    "name": "Filete Basa premium",
    "category": "pescados",
    "presentation": "1 kg",
    "price": 110,
    "stock": 999,
    "image": "assets/logo-naturfreeze-mark.jpg",
    "detail": "Producto congelado NaturFreeze Cancún. Excelente calidad y precio sujeto a cambio sin previo aviso."
  },
  {
    "id": "pechuga-importada-iqf",
    "name": "Pechuga de pollo importada IQF",
    "category": "aves",
    "presentation": "1 kg",
    "price": 120,
    "stock": 999,
    "image": "assets/logo-naturfreeze-mark.jpg",
    "detail": "Producto congelado NaturFreeze Cancún. Excelente calidad y precio sujeto a cambio sin previo aviso."
  },
  {
    "id": "pechuga-brasilena-iqf",
    "name": "Pechuga brasileña sin hueso IQF",
    "category": "aves",
    "presentation": "1 kg",
    "price": 120,
    "stock": 999,
    "image": "assets/logo-naturfreeze-mark.jpg",
    "detail": "Producto congelado NaturFreeze Cancún. Excelente calidad y precio sujeto a cambio sin previo aviso."
  },
  {
    "id": "carne-pollo-hamburguesa",
    "name": "Carne de pollo para hamburguesas",
    "category": "aves",
    "presentation": "1 kg",
    "price": 136,
    "stock": 999,
    "image": "assets/logo-naturfreeze-mark.jpg",
    "detail": "Producto congelado NaturFreeze Cancún. Excelente calidad y precio sujeto a cambio sin previo aviso."
  },
  {
    "id": "arrachera-nortenita",
    "name": "Arrachera norteñita",
    "category": "carnes",
    "presentation": "1 kg",
    "price": 170,
    "stock": 999,
    "image": "assets/logo-naturfreeze-mark.jpg",
    "detail": "Producto congelado NaturFreeze Cancún. Excelente calidad y precio sujeto a cambio sin previo aviso."
  },
  {
    "id": "chuleta-ahumada-8pz",
    "name": "Chuleta ahumada paquete de 8 pz",
    "category": "carnes",
    "presentation": "1.1 kg a 1.4 kg aprox.",
    "price": 140,
    "stock": 999,
    "image": "assets/logo-naturfreeze-mark.jpg",
    "detail": "Producto congelado NaturFreeze Cancún. Excelente calidad y precio sujeto a cambio sin previo aviso."
  },
  {
    "id": "rib-eye",
    "name": "Rib Eye",
    "category": "carnes",
    "presentation": "Porción según peso",
    "price": 400,
    "stock": 999,
    "image": "assets/logo-naturfreeze-mark.jpg",
    "detail": "Producto congelado NaturFreeze Cancún. Excelente calidad y precio sujeto a cambio sin previo aviso."
  },
  {
    "id": "carne-res-hamburguesa",
    "name": "Carne de res para hamburguesa",
    "category": "carnes",
    "presentation": "1 kg",
    "price": 0,
    "stock": 0,
    "image": "assets/logo-naturfreeze-mark.jpg",
    "detail": "Agotado por el momento."
  }
];

const PRODUCT_EDITS_KEY = "naturfreezeProductEdits";
const CUSTOM_PRODUCTS_KEY = "naturfreezeCustomProducts";
const ORDERS_KEY = "naturfreezeAdminOrders";
const NOTES_KEY = "naturfreezeAdminNotes";
const STORE_SETTINGS_KEY = "naturfreezeStoreSettings";
let productEdits = readStored(PRODUCT_EDITS_KEY, {});
let customProducts = readStored(CUSTOM_PRODUCTS_KEY, []);
let adminOrders = readStored(ORDERS_KEY, []);
let storeSettings = readStored(STORE_SETTINGS_KEY, {
  openTime: "12:00",
  closeTime: "18:00",
  manualClosed: false
});
let adminNotes = readStored(NOTES_KEY, [
  { id: 1, title: "Inventario frío", text: "Revisar productos agotados antes de abrir pedidos.", color: "green" },
  { id: 2, title: "Rutas 2:00 pm", text: "Confirmar pedidos con ubicación exacta antes de salir.", color: "blue" },
  { id: 3, title: "Pagos", text: "Pedir comprobante cuando el cliente elija transferencia.", color: "pink" }
]);
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
const adminCanceledCount = document.querySelector("#adminCanceledCount");
const completedOrdersCount = document.querySelector("#completedOrdersCount");
const soldOutCount = document.querySelector("#soldOutCount");
const adminLastUpdate = document.querySelector("#adminLastUpdate");
const miniChart = document.querySelector("#miniChart");
const financeTable = document.querySelector("#financeTable");
const noteForm = document.querySelector("#noteForm");
const noteTitle = document.querySelector("#noteTitle");
const noteText = document.querySelector("#noteText");
const notesList = document.querySelector("#notesList");
const storeSettingsForm = document.querySelector("#storeSettingsForm");
const storeOpenTime = document.querySelector("#storeOpenTime");
const storeCloseTime = document.querySelector("#storeCloseTime");
const storeManualClosed = document.querySelector("#storeManualClosed");
const storeSettingsStatus = document.querySelector("#storeSettingsStatus");
const productEditor = document.querySelector("#productEditor");
const closeProductEditor = document.querySelector("#closeProductEditor");
const editProductPreview = document.querySelector("#editProductPreview");
const orderConfirmModal = document.querySelector("#orderConfirmModal");
const orderConfirmDetails = document.querySelector("#orderConfirmDetails");
const closeOrderModal = document.querySelector("#closeOrderModal");
const approveOrderFromModal = document.querySelector("#approveOrderFromModal");
const cancelOrderFromModal = document.querySelector("#cancelOrderFromModal");
const financePeriod = document.querySelector("#financePeriod");
const printFinance = document.querySelector("#printFinance");
const adminOrdersElement = document.querySelector("#adminOrders");
const adminProductCards = document.querySelector("#adminProductCards");
const editProduct = document.querySelector("#editProduct");
const editProductCategory = document.querySelector("#editProductCategory");
const editProductName = document.querySelector("#editProductName");
const editProductPrice = document.querySelector("#editProductPrice");
const editProductStock = document.querySelector("#editProductStock");
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
let adminRouteLastOrigin = null;
let adminRouteLastRecalcAt = 0;
let activeRouteStepIndex = 0;
let adminRouteViewMode = "overview";
let currentRouteStopId = null;
let currentRouteSchedule = null;
let cartStep = 1;
let activeOrderStatusFilter = "preparing";
let modalOrderId = null;
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
          stock: Number.isFinite(Number(product.stock)) ? Number(product.stock) : 999,
          presentation: product.presentation || "1 pieza",
          image: product.image || "assets/logo-naturfreeze-mark.jpg",
          detail: product.detail || "Producto NaturFreeze.",
          hidden: Boolean(product.hidden)
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

function updateProductStock(productId, nextStock) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  product.stock = Math.max(0, nextStock);
  productEdits[product.id] = {
    ...(productEdits[product.id] || {}),
    stock: product.stock
  };
  writeStored(PRODUCT_EDITS_KEY, productEdits);
  saveProductToFirebase(product);
}

function reduceInventoryForOrder(rows) {
  rows.forEach((row) => {
    const currentStock = Number.isFinite(Number(row.stock)) ? Number(row.stock) : 999;
    updateProductStock(row.id, currentStock - row.quantity);
  });
  renderProducts();
  renderAdminDashboard();
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

function playIceCrack(start = 0) {
  const context = getSoundContext();
  if (!context || !soundUnlocked) return;
  const noiseBuffer = context.createBuffer(1, context.sampleRate * 0.16, context.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  for (let index = 0; index < output.length; index += 1) {
    output[index] = (Math.random() * 2 - 1) * (1 - index / output.length);
  }
  const source = context.createBufferSource();
  const filter = context.createBiquadFilter();
  const volume = context.createGain();
  filter.type = "highpass";
  filter.frequency.value = 1800;
  volume.gain.setValueAtTime(0.0001, context.currentTime + start);
  volume.gain.exponentialRampToValueAtTime(0.075, context.currentTime + start + 0.01);
  volume.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + start + 0.16);
  source.buffer = noiseBuffer;
  source.connect(filter);
  filter.connect(volume);
  volume.connect(context.destination);
  source.start(context.currentTime + start);
  source.stop(context.currentTime + start + 0.18);
}

function playSound(type = "tap") {
  if (!soundUnlocked) return;

  if (type === "welcome") {
    playIceCrack(0);
    playTone(987.77, 0.02, 0.10, 0.035, "triangle");
    playTone(1318.51, 0.12, 0.16, 0.035, "sine");
    playTone(1760, 0.26, 0.18, 0.028, "sine");
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

function setCartStep(step, animatePacking = false) {
  cartStep = Math.min(3, Math.max(1, step));
  document.querySelectorAll("[data-cart-step]").forEach((section) => {
    section.classList.toggle("active", Number(section.dataset.cartStep) === cartStep);
  });
  document.querySelectorAll("[data-step-indicator]").forEach((indicator) => {
    const indicatorStep = Number(indicator.dataset.stepIndicator);
    indicator.classList.toggle("active", indicatorStep === cartStep);
    indicator.classList.toggle("done", indicatorStep < cartStep);
  });

  if (animatePacking) {
    const packing = document.querySelector("#packingAnimation");
    if (packing) {
      packing.classList.remove("play");
      window.requestAnimationFrame(() => packing.classList.add("play"));
    }
  }

  if (cartStep === 2) {
    initDeliveryMap();
  }

  document.querySelector(".cart-panel")?.scrollTo({ top: 0, behavior: "smooth" });
}

function validateCartSummary() {
  if (!cart.size) {
    showToast("Agrega al menos un producto.");
    return false;
  }
  return true;
}

function validateDeliveryStep() {
  const name = document.querySelector("#customerName").value.trim();
  const phone = document.querySelector("#customerPhone").value.trim();
  const address = document.querySelector("#customerAddress").value.trim();
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
  switchAdminView("summary");
  renderAdminDashboard();
  playSound("success");
  showToast("Administrador activo.");
}

function logoutAdmin() {
  adminPassword.value = "";
  adminLogin.hidden = false;
  adminPos.hidden = true;
}

function isStoreOpenNow() {
  if (storeSettings.manualClosed) return false;
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const [openHour, openMinute] = (storeSettings.openTime || "12:00").split(":").map(Number);
  const [closeHour, closeMinute] = (storeSettings.closeTime || "18:00").split(":").map(Number);
  const openMinutes = openHour * 60 + openMinute;
  const closeMinutes = closeHour * 60 + closeMinute;
  return currentMinutes >= openMinutes && currentMinutes <= closeMinutes;
}

function renderStoreSettings() {
  if (storeOpenTime) storeOpenTime.value = storeSettings.openTime || "12:00";
  if (storeCloseTime) storeCloseTime.value = storeSettings.closeTime || "18:00";
  if (storeManualClosed) storeManualClosed.checked = Boolean(storeSettings.manualClosed);
  const isOpen = isStoreOpenNow();
  const statusText = isOpen ? "Actualmente abierta" : "Actualmente cerrada";
  document.querySelectorAll(".store-status-pill").forEach((pill) => {
    pill.classList.toggle("closed", !isOpen);
    pill.innerHTML = `<span></span> ${statusText}`;
  });
  if (storeSettingsStatus) storeSettingsStatus.textContent = statusText;
}

function saveStoreSettings(event) {
  event.preventDefault();
  storeSettings = {
    openTime: storeOpenTime?.value || "12:00",
    closeTime: storeCloseTime?.value || "18:00",
    manualClosed: Boolean(storeManualClosed?.checked)
  };
  writeStored(STORE_SETTINGS_KEY, storeSettings);
  renderStoreSettings();
  showToast("Configuración guardada.");
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
    if (posLines) posLines.innerHTML = '<p class="cart-note">Aun no hay ventas entregadas.</p>';
    return;
  }

  if (!posLines) return;

  posLines.innerHTML = deliveredOrders.map((order) => `
    <article class="sale-ticket">
      <div class="ticket-head">
        <strong>NaturFreeze</strong>
        <span>Ticket #${order.id}</span>
      </div>
      <p>${order.deliveredAt || order.date}</p>
      <div class="ticket-customer">
        <b>${order.customer}</b>
        <span>${order.phone || "Sin teléfono"}</span>
      </div>
      <ul>
        ${order.items.map((item) => `<li><span>${item.quantity} x ${item.name}</span><b>${money(item.subtotal || 0)}</b></li>`).join("")}
      </ul>
      <div class="ticket-total"><span>Total</span><strong>${money(order.total)}</strong></div>
      <button class="copy-button" type="button" data-print-ticket="${order.id}">Imprimir ticket</button>
    </article>
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
  renderFinance();
  renderStoreSettings();
}

function renderAdminStats() {
  if (!adminOrderCount) return;
  const pendingOrders = adminOrders.filter((order) => !["Entregado", "Cancelado"].includes(order.status)).length;
  const deliveredOrders = adminOrders.filter((order) => order.status === "Entregado" && !order.saleCleared);
  const canceledOrders = adminOrders.filter((order) => order.status === "Cancelado");
  const ordersTotal = deliveredOrders.reduce((sum, order) => sum + order.total, 0);
  const productsSold = deliveredOrders.reduce((sum, order) => {
    return sum + order.items.reduce((itemSum, item) => itemSum + item.quantity, 0);
  }, 0);
  adminOrderCount.textContent = pendingOrders;
  adminSalesTotal.textContent = money(ordersTotal);
  adminProductsTotal.textContent = products.length;
  if (adminCanceledCount) adminCanceledCount.textContent = canceledOrders.length;
  if (completedOrdersCount) completedOrdersCount.textContent = deliveredOrders.length;
  if (soldOutCount) soldOutCount.textContent = products.filter((product) => Number(product.stock) <= 0).length;
  if (posTotal) posTotal.textContent = money(ordersTotal);
  if (posCount) posCount.textContent = productsSold;
  if (adminLastUpdate) adminLastUpdate.textContent = `Última actualización: ${new Date().toLocaleString("es-MX", { dateStyle: "short", timeStyle: "short" })}`;
  if (miniChart) {
    const bars = [pendingOrders, deliveredOrders.length, canceledOrders.length, products.filter((product) => Number(product.stock) <= 0).length, Math.max(1, Math.round(ordersTotal / 100))];
    miniChart.innerHTML = bars.map((bar, index) => `<span style="height:${Math.max(18, Math.min(100, bar * 18))}px" data-bar="${index}"></span>`).join("");
  }
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

  const preparingOrders = adminOrders.filter((order) => !order.status || order.status === "Pendiente");
  const deliveringOrders = adminOrders.filter((order) => order.status === "Confirmado");
  const deliveredOrders = adminOrders.filter((order) => order.status === "Entregado");
  const canceledOrders = adminOrders.filter((order) => order.status === "Cancelado");
  const schedules = ["2:00 pm", "6:00 pm"];

  if (activeOrderStatusFilter === "delivering") {
    adminOrdersElement.innerHTML = schedules.map((schedule) => renderScheduleCard(schedule, deliveringOrders)).join("");
  } else if (activeOrderStatusFilter === "delivered") {
    adminOrdersElement.innerHTML = renderOrderList(deliveredOrders, "No hay pedidos entregados hoy.");
  } else if (activeOrderStatusFilter === "canceled") {
    adminOrdersElement.innerHTML = renderOrderList(canceledOrders, "No hay cancelaciones.");
  } else {
    adminOrdersElement.innerHTML = `
      <div class="orders-prep-banner">
        <strong>Pedidos en preparación</strong>
        <span>Confirma cada pedido, revisa la ubicación y después entra a Entregando para iniciar ruta.</span>
      </div>
      ${renderOrderList(preparingOrders, "No hay pedidos en preparación.")}
    `;
  }

  renderAdminStats();
}

function renderScheduleCard(schedule, pendingOrders) {
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
}

function renderOrderList(orders, emptyText) {
  if (!orders.length) return `<p class="empty-admin-state">${emptyText}</p>`;

  return `
    <div class="orders-table">
      ${orders.map((order) => `
        <article class="order-row ${order.status === "Cancelado" ? "canceled" : ""}">
          <div>
            <strong>#${order.id}</strong>
            <span>${order.customer} | ${order.phone || "Sin teléfono"}</span>
          </div>
          <div>
            <small>${order.items.map((item) => `${item.quantity} x ${item.name}`).join(" | ")}</small>
            <small>${order.address || "Sin dirección"}</small>
          </div>
          <b>${money(order.total)}</b>
          <em>${order.status || "Preparando"}</em>
          <div class="order-row-actions">
            ${(!order.status || order.status === "Pendiente") ? `<button class="copy-button" type="button" data-confirm-order="${order.id}">Confirmar</button>` : ""}
            ${order.status === "Confirmado" ? `<button class="copy-button" type="button" data-route-order="${order.id}">Entrar</button>` : ""}
            ${order.status === "Entregado" ? `<button class="copy-button" type="button" data-print-ticket="${order.id}">Ticket</button>` : ""}
            ${order.status === "Cancelado" || order.status === "Entregado" ? "" : `<button class="secondary-action" type="button" data-cancel-order="${order.id}">Cancelar</button>`}
          </div>
        </article>
      `).join("")}
    </div>
  `;
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
        <div class="admin-navigation">
          <div class="admin-route-map" id="adminRouteMap" aria-label="Mapa interno de entrega"></div>
          <div class="route-view-actions route-map-actions">
            <button class="active route-icon-button route-icon-route" type="button" data-route-view="overview" aria-label="Ver ruta completa"><span></span></button>
            <button class="route-icon-button route-icon-near" type="button" data-route-view="close" aria-label="Vista cercana"><span></span></button>
            <button class="route-icon-button route-icon-fullscreen" type="button" data-route-fullscreen aria-label="Pantalla completa"><span></span></button>
          </div>
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
              <small id="routeOrderDetails">Los detalles del pedido aparecerán aquí al acercarte.</small>
            </div>
            <div class="route-contact-actions">
              <button class="route-delivered-button" type="button" data-route-deliver-current>Pedido entregado</button>
              <a class="route-chat-button" id="routeWhatsAppButton" href="#" target="_blank" rel="noreferrer">WhatsApp</a>
              <a class="route-call-button" id="routeCallButton" href="#">Llamar</a>
            </div>
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
  const orders = adminOrders.filter((item) => item.status === "Confirmado" && item.schedule === schedule && item.coords);
  if (!orders.length) {
    showToast("No hay pedidos con ubicación exacta en este horario.");
    return;
  }
  const order = orders[0];
  const routeStops = adminOrders
    .filter((item) => item.status === "Confirmado" && item.schedule === schedule && item.coords)
    .map((item) => ({
      id: item.id,
      customer: item.customer,
      phone: item.phone,
      address: item.address,
      payment: item.payment,
      items: item.items,
      schedule: item.schedule,
      total: item.total,
      subtotal: item.subtotal,
      shipping: item.shipping,
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
  adminRouteLastOrigin = null;
  adminRouteLastRecalcAt = 0;
  activeRouteStepIndex = 0;
  adminRouteViewMode = "overview";
  currentRouteStopId = null;
  currentRouteSchedule = null;
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
  const orderDetails = document.querySelector("#routeOrderDetails");
  const whatsAppButton = document.querySelector("#routeWhatsAppButton");
  const callButton = document.querySelector("#routeCallButton");
  const speedKmh = Number.isFinite(current.speed) ? Math.max(0, Math.round(current.speed * 3.6)) : 0;
  const firstStop = order.routeStops?.[0] || order;

  if (speedText) speedText.textContent = speedKmh;

  if (etaText) {
    etaText.textContent = adminRouteSummary
      ? formatRouteEta(adminRouteSummary)
      : destination ? getRouteEstimate(distanceKm(current, destination)) : "Sin destino";
  }

  if (destinationText) {
    destinationText.textContent = firstStop?.address || order.address || "Entrega NaturFreeze";
  }

  currentRouteStopId = firstStop?.id || order.id;
  currentRouteSchedule = firstStop?.schedule || order.schedule;
  const distanceMeters = destination ? distanceKm(current, destination) * 1000 : Infinity;
  if (orderDetails) {
    const productsText = firstStop?.items?.map((item) => `${item.quantity} x ${item.name}`).join(" | ") || "Sin productos";
    orderDetails.textContent = distanceMeters <= 180
      ? `${firstStop.customer || "Cliente"}: ${productsText}. Total ${money(firstStop.total || 0)}.`
      : `Siguiente entrega: ${firstStop.customer || "Cliente"} | ${productsText}`;
  }
  const phoneDigits = String(firstStop?.phone || "").replace(/\D/g, "");
  if (whatsAppButton) {
    whatsAppButton.href = phoneDigits.length >= 10
      ? `https://wa.me/52${phoneDigits.slice(-10)}?text=${encodeURIComponent("Hola, soy de NaturFreeze. Ya voy en camino con tu pedido.")}`
      : "#";
    whatsAppButton.classList.toggle("disabled", phoneDigits.length < 10);
  }
  if (callButton) {
    callButton.href = phoneDigits.length >= 10 ? `tel:${phoneDigits.slice(-10)}` : "#";
    callButton.classList.toggle("disabled", phoneDigits.length < 10);
  }
}

function sortStopsByNearest(current, stops) {
  const remaining = [...stops];
  const sorted = [];
  let origin = { lat: current.lat, lng: current.lng };

  while (remaining.length) {
    const nearestIndex = remaining
      .map((stop, index) => ({ index, kilometers: distanceKm(origin, stop.coords) }))
      .sort((a, b) => a.kilometers - b.kilometers)[0].index;
    const [nearest] = remaining.splice(nearestIndex, 1);
    sorted.push(nearest);
    origin = nearest.coords;
  }

  return sorted;
}

function distanceToRouteMeters(current, points) {
  if (!points?.length) return Infinity;
  const currentCoords = { lat: current.lat, lng: current.lng };
  return Math.min(...points.map(([lat, lng]) => distanceKm(currentCoords, { lat, lng }) * 1000));
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
    adminRouteMap.setView(adminRouteUserMarker.getLatLng(), 18);
  } else if (adminRouteLine) {
    adminRouteMap.fitBounds(adminRouteLine.getBounds(), { padding: [28, 28] });
  }
}

function toggleRouteFullscreen() {
  const routeCard = document.querySelector("#adminRouteCard");
  if (!routeCard) return;

  routeCard.classList.toggle("route-fullscreen");
  document.body.classList.toggle("map-fullscreen-open", routeCard.classList.contains("route-fullscreen"));
  window.setTimeout(() => {
    if (!adminRouteMap) return;
    adminRouteMap.invalidateSize();
    if (adminRouteViewMode === "close" && adminRouteUserMarker) {
      adminRouteMap.setView(adminRouteUserMarker.getLatLng(), 18);
    } else if (adminRouteLine) {
      adminRouteMap.fitBounds(adminRouteLine.getBounds(), { padding: [28, 28] });
    }
  }, 160);
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

  if (order.routeStops?.length) {
    order.routeStops = sortStopsByNearest(current, order.routeStops);
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

  const movedSinceRoute = adminRouteLastOrigin
    ? distanceKm({ lat: current.lat, lng: current.lng }, adminRouteLastOrigin) * 1000
    : Infinity;
  const offRouteMeters = adminRouteLine && adminRouteLoadedFor
    ? distanceToRouteMeters(current, adminRouteLine.getLatLngs().map((point) => [point.lat, point.lng]))
    : 0;
  const canRecalculate = Date.now() - adminRouteLastRecalcAt > 18000;
  if (adminRouteLoadedFor && canRecalculate && (movedSinceRoute > 220 || offRouteMeters > 120)) {
    adminRouteLoadedFor = null;
    adminRouteSummary = null;
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
  adminRouteLastRecalcAt = Date.now();
  adminRouteLastOrigin = { lat: current.lat, lng: current.lng };

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
  activeOrderStatusFilter = "delivered";
  switchAdminView("orders");
  renderAdminDashboard();
  showToast("Pedido entregado y agregado al punto de venta.");
}

function markCurrentRouteStopDelivered() {
  if (!currentRouteStopId) {
    showToast("Todavía no hay una entrega seleccionada en la ruta.");
    return;
  }
  const schedule = currentRouteSchedule;
  markOrderDelivered(currentRouteStopId, true);
  const nextOrder = adminOrders.find((order) => (
    order.status === "Confirmado" &&
    order.schedule === schedule &&
    String(order.id) !== String(currentRouteStopId) &&
    order.coords
  ));
  if (nextOrder) {
    window.setTimeout(() => {
      activeRouteSchedule = schedule;
      openDeliveryRouteForSchedule(schedule);
      showToast("Siguiente entrega cargada.");
    }, 250);
  } else {
    currentRouteStopId = null;
    currentRouteSchedule = null;
    stopAdminRouteTracking();
    resetAdminRouteMap();
    showToast("Todas las entregas de este horario quedaron listas.");
  }
}

function cancelOrder(id) {
  adminOrders = adminOrders.map((order) => {
    if (String(order.id) !== String(id)) return order;
    updateOrderInFirebase(order.id, {
      status: "Cancelado",
      canceledAt: window.firebase?.firestore?.FieldValue?.serverTimestamp?.() || new Date().toISOString()
    });
    return { ...order, status: "Cancelado" };
  });
  writeStored(ORDERS_KEY, adminOrders);
  renderAdminDashboard();
  showToast("Pedido cancelado.");
}

function openOrderConfirmModal(id) {
  const order = adminOrders.find((item) => String(item.id) === String(id));
  if (!order || !orderConfirmModal || !orderConfirmDetails) return;

  modalOrderId = order.id;
  orderConfirmDetails.innerHTML = `
    <div class="confirm-detail-grid">
      <div><span>Nombre</span><strong>${order.customer || "Sin nombre"}</strong></div>
      <div><span>Teléfono</span><strong>${order.phone || "Sin teléfono"}</strong></div>
      <div><span>Recibe</span><strong>${order.recipient || order.customer || "Sin dato"}</strong></div>
      <div><span>Horario</span><strong>${order.schedule || "Sin horario"}</strong></div>
      <div><span>Pago</span><strong>${order.payment || "Sin pago"}</strong></div>
      <div><span>Total</span><strong>${money(order.total || 0)}</strong></div>
    </div>
    <div class="confirm-block">
      <span>Dirección exacta</span>
      <p>${order.address || "Sin dirección"}</p>
      <small>${order.coords ? `Coordenadas: ${formatCoord(order.coords.lat)}, ${formatCoord(order.coords.lng)}` : "Sin coordenadas exactas"}</small>
    </div>
    <div class="confirm-block">
      <span>Productos</span>
      <ul>${order.items.map((item) => `<li>${item.quantity} x ${item.name} - ${money(item.subtotal || 0)}</li>`).join("")}</ul>
    </div>
    <div class="confirm-block">
      <span>Detalles de entrega</span>
      <p>${order.buildingType || "Sin tipo"} | ${order.addressDetails || "Sin especificaciones"}</p>
    </div>
  `;
  orderConfirmModal.hidden = false;
}

function closeOrderConfirmModal() {
  modalOrderId = null;
  if (orderConfirmModal) orderConfirmModal.hidden = true;
}

function approveOrder(id) {
  adminOrders = adminOrders.map((order) => {
    if (String(order.id) !== String(id)) return order;
    updateOrderInFirebase(order.id, {
      status: "Confirmado",
      confirmedAt: window.firebase?.firestore?.FieldValue?.serverTimestamp?.() || new Date().toISOString()
    });
    return { ...order, status: "Confirmado" };
  });
  writeStored(ORDERS_KEY, adminOrders);
  closeOrderConfirmModal();
  activeOrderStatusFilter = "delivering";
  document.querySelectorAll("[data-order-status-filter]").forEach((button) => {
    button.classList.toggle("active", button.dataset.orderStatusFilter === "delivering");
  });
  renderAdminDashboard();
  showToast("Pedido confirmado y enviado a Entregando.");
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
  activeOrderStatusFilter = "delivered";
  switchAdminView("orders");
  renderAdminDashboard();
  showToast(`Horario ${schedule} entregado y agregado al punto de venta.`);
}

function renderFinance() {
  if (!financeTable) return;

  const period = financePeriod?.value || "day";
  const delivered = adminOrders.filter((order) => order.status === "Entregado" && isOrderInPeriod(order, period));
  const canceled = adminOrders.filter((order) => order.status === "Cancelado" && isOrderInPeriod(order, period));
  const financeRows = buildFinanceRows(delivered, period);
  const gross = financeRows.reduce((sum, row) => sum + row.total, 0);
  const subtotal = financeRows.reduce((sum, row) => sum + row.subtotal, 0);
  const shippingTotal = financeRows.reduce((sum, row) => sum + row.shipping, 0);
  const canceledTotal = canceled.reduce((sum, order) => sum + (order.total || 0), 0);
  const label = getFinancePeriodLabel(period);

  financeTable.innerHTML = `
    <div class="finance-ticket">
      <div>
        <span>Resumen del ${label}</span>
        <strong>NaturFreeze Cancún</strong>
      </div>
      <p>${new Date().toLocaleString("es-MX", { dateStyle: "full", timeStyle: "short" })}</p>
    </div>
    <div class="finance-summary-grid">
      <div><span>Ganancias subtotales</span><strong>${money(subtotal)}</strong></div>
      <div><span>Ganancias de envío</span><strong>${money(shippingTotal)}</strong></div>
      <div><span>Ganancias totales</span><strong>${money(gross)}</strong></div>
    </div>
    <table>
      <thead>
        <tr>
          <th>Fecha de facturación por ${label}</th>
          <th>Ganancias subtotales</th>
          <th>Ganancias de envío</th>
          <th>Ganancias totales</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        ${financeRows.map((row) => `
          <tr class="finance-main-row">
            <td>${row.label}</td>
            <td>${money(row.subtotal)}</td>
            <td>${money(row.shipping)}</td>
            <td>${money(row.total)}</td>
            <td><span class="finance-ok">${row.paid ? "Pagado" : "Por pagar"}</span></td>
            <td>
              <div class="finance-action-wrap">
                <button class="finance-more-button" type="button" data-finance-more="${row.id}">ver más</button>
                <div class="finance-action-menu" id="financeMenu-${row.id}" hidden>
                  <button type="button" data-finance-breakdown="${row.id}">Detalles de desglose</button>
                  <button type="button" data-finance-print="${row.id}">Imprimir ticket</button>
                </div>
              </div>
            </td>
          </tr>
          <tr class="finance-breakdown-row" id="financeBreakdown-${row.id}" hidden>
            <td colspan="6">
              <div class="finance-breakdown">
                <div>
                  <h4>Ganancias totales</h4>
                  <strong>${money(row.total)}</strong>
                  <span>${row.paid ? "Pagado" : "Por pagar"}</span>
                  <p>Periodo de facturación<br>${row.label}</p>
                </div>
                <div>
                  <h4>Detalles de la tarifa</h4>
                  <p><span>Precio total del producto sin promoción</span><strong>${money(row.subtotal)}</strong></p>
                  <p><span>Costo de promoción</span><strong>${money(0)}</strong></p>
                  <p><span>Envío</span><strong>${money(row.shipping)}</strong></p>
                  <p><span>Monto total recibido</span><strong>${money(row.total)}</strong></p>
                </div>
              </div>
            </td>
          </tr>
        `).join("")}
        ${financeRows.length ? "" : `<tr><td colspan="6">No hay ventas entregadas en este ${label}.</td></tr>`}
      </tbody>
    </table>
    <small>Cancelaciones en este periodo: ${canceled.length} | Monto cancelado: ${money(canceledTotal)}</small>
  `;
}

function getFinancePeriodLabel(period) {
  if (period === "month") return "mes";
  if (period === "week") return "semana";
  return "día";
}

function buildFinanceRows(orders, period) {
  const groups = new Map();
  orders.forEach((order) => {
    const date = parseOrderDate(order);
    const key = getFinanceGroupKey(date, period);
    const label = getFinanceGroupLabel(date, period);
    const subtotal = Number(order.subtotal) || Math.max(0, Number(order.total || 0) - Number(order.shipping || 0));
    const shippingAmount = Number(order.shipping) || 0;
    const current = groups.get(key) || {
      id: key.replace(/[^a-z0-9]/gi, "-"),
      label,
      subtotal: 0,
      shipping: 0,
      total: 0,
      paid: true,
      orders: []
    };
    current.subtotal += subtotal;
    current.shipping += shippingAmount;
    current.total += Number(order.total) || subtotal + shippingAmount;
    current.orders.push(order);
    groups.set(key, current);
  });
  return Array.from(groups.values()).sort((a, b) => b.id.localeCompare(a.id));
}

function getFinanceGroupKey(date, period) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  if (period === "month") return `${year}-${month}`;
  if (period === "week") {
    const start = new Date(date);
    start.setHours(0, 0, 0, 0);
    const weekday = start.getDay() || 7;
    start.setDate(start.getDate() - weekday + 1);
    return `${start.getFullYear()}-${String(start.getMonth() + 1).padStart(2, "0")}-${String(start.getDate()).padStart(2, "0")}`;
  }
  return `${year}-${month}-${day}`;
}

function getFinanceGroupLabel(date, period) {
  if (period === "month") {
    return date.toLocaleDateString("es-MX", { month: "long", year: "numeric" });
  }
  if (period === "week") {
    const start = new Date(date);
    start.setHours(0, 0, 0, 0);
    const weekday = start.getDay() || 7;
    start.setDate(start.getDate() - weekday + 1);
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    return `${start.toLocaleDateString("es-MX")} - ${end.toLocaleDateString("es-MX")}`;
  }
  return date.toLocaleDateString("es-MX", { day: "2-digit", month: "2-digit", year: "numeric" });
}

function parseOrderDate(order) {
  const rawDate = order.deliveredAt || order.date || order.createdAt;
  if (rawDate?.toDate) return rawDate.toDate();
  if (typeof rawDate === "string") {
    const parsed = new Date(rawDate);
    if (!Number.isNaN(parsed.getTime())) return parsed;
  }
  return new Date();
}

function isOrderInPeriod(order, period) {
  const date = parseOrderDate(order);
  const now = new Date();
  const start = new Date(now);
  start.setHours(0, 0, 0, 0);
  if (period === "week") {
    const day = start.getDay() || 7;
    start.setDate(start.getDate() - day + 1);
  }
  if (period === "month") {
    start.setDate(1);
  }
  return date >= start;
}

function printHtml(title, html) {
  const printWindow = window.open("", "_blank", "width=420,height=700");
  if (!printWindow) {
    showToast("El navegador bloqueó la ventana de impresión.");
    return;
  }
  printWindow.document.write(`
    <!doctype html>
    <html lang="es">
      <head>
        <title>${title}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 26px; color: #1f2933; }
          h1, h2, h3 { margin: 0 0 12px; }
          .print-head { display: flex; justify-content: space-between; gap: 24px; margin-bottom: 24px; }
          .brand { font-size: 28px; font-weight: 900; color: #05386b; }
          .muted { color: #64748b; font-size: 12px; font-weight: 700; }
          .box { display: grid; gap: 4px; margin: 12px 0; }
          table { width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 13px; }
          th { background: #dedede; }
          th, td { padding: 10px; border-bottom: 1px solid #ddd; text-align: left; }
          ul { padding-left: 18px; }
          .totals { width: 260px; margin-left: auto; margin-top: 18px; }
          .totals div { display: flex; justify-content: space-between; padding: 7px 0; }
          .total { font-size: 22px; font-weight: 900; border-top: 2px solid #111; }
        </style>
      </head>
      <body>${html}</body>
    </html>
  `);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
}

function printTicket(id) {
  const order = adminOrders.find((item) => String(item.id) === String(id));
  if (!order) return;
  printHtml(`Ticket ${order.id}`, `
    ${renderPrintableTicket(order, false)}
  `);
}

function printFinanceSummary() {
  const period = financePeriod?.value || "day";
  const rows = buildFinanceRows(adminOrders.filter((order) => order.status === "Entregado" && isOrderInPeriod(order, period)), period);
  printHtml("Resumen financiero NaturFreeze", renderPrintableFinance(rows, getFinancePeriodLabel(period)));
}

function printFinanceRow(rowId) {
  const period = financePeriod?.value || "day";
  const rows = buildFinanceRows(adminOrders.filter((order) => order.status === "Entregado" && isOrderInPeriod(order, period)), period);
  const row = rows.find((item) => item.id === rowId);
  if (!row) return;
  printHtml(`Orden de venta ${row.label}`, renderPrintableFinance([row], getFinancePeriodLabel(period)));
}

function renderPrintableFinance(rows, label) {
  const subtotal = rows.reduce((sum, row) => sum + row.subtotal, 0);
  const shippingAmount = rows.reduce((sum, row) => sum + row.shipping, 0);
  const total = rows.reduce((sum, row) => sum + row.total, 0);
  const allOrders = rows.flatMap((row) => row.orders);
  return `
    <div class="print-head">
      <div>
        <div class="brand">NATURFREEZE</div>
        <div class="muted">Cancún, Quintana Roo, México</div>
        <div class="muted">Productos congelados de alta calidad</div>
      </div>
      <div>
        <h2>Orden de Venta</h2>
        <strong>#NF${Date.now().toString().slice(-6)}</strong>
        <div class="muted">${new Date().toLocaleDateString("es-MX")}</div>
      </div>
    </div>
    <div class="box">
      <strong>Periodo de facturación por ${label}</strong>
      <span>${rows.map((row) => row.label).join(" | ") || "Sin ventas"}</span>
      <span>Método: efectivo o transferencia</span>
    </div>
    <table>
      <thead>
        <tr>
          <th>Cantidad</th>
          <th>Artículo</th>
          <th>Precio unitario</th>
          <th>Envío</th>
          <th>Importe bruto</th>
        </tr>
      </thead>
      <tbody>
        ${allOrders.flatMap((order) => order.items.map((item) => `
          <tr>
            <td>${item.quantity}</td>
            <td>${item.name}</td>
            <td>${money((item.subtotal || 0) / Math.max(1, item.quantity || 1))}</td>
            <td>${money(order.shipping || 0)}</td>
            <td>${money(item.subtotal || 0)}</td>
          </tr>
        `)).join("") || `<tr><td colspan="5">Sin ventas</td></tr>`}
      </tbody>
    </table>
    <div class="totals">
      <div><span>Subtotal</span><strong>${money(subtotal)}</strong></div>
      <div><span>Envío</span><strong>${money(shippingAmount)}</strong></div>
      <div><span>Impuesto</span><strong>${money(0)}</strong></div>
      <div class="total"><span>Total</span><strong>${money(total)}</strong></div>
    </div>
  `;
}

function renderPrintableTicket(order, full = true) {
  return `
    <div class="print-head">
      <div>
        <div class="brand">NATURFREEZE</div>
        <div class="muted">Cancún, Quintana Roo</div>
      </div>
      <div>
        <h2>${full ? "Orden de Venta" : "Ticket"}</h2>
        <strong>#${order.id}</strong>
        <div class="muted">${order.deliveredAt || order.date || ""}</div>
      </div>
    </div>
    <p><strong>Cliente:</strong> ${order.customer || ""}</p>
    <p><strong>Teléfono:</strong> ${order.phone || ""}</p>
    <p><strong>Método de pago:</strong> ${order.payment || ""}</p>
    <table>
      <thead><tr><th>Cantidad</th><th>Artículo</th><th>Precio</th><th>Importe</th></tr></thead>
      <tbody>${order.items.map((item) => `
        <tr>
          <td>${item.quantity}</td>
          <td>${item.name}</td>
          <td>${money((item.subtotal || 0) / Math.max(1, item.quantity || 1))}</td>
          <td>${money(item.subtotal || 0)}</td>
        </tr>
      `).join("")}</tbody>
    </table>
    <div class="totals">
      <div><span>Subtotal</span><strong>${money(order.subtotal || 0)}</strong></div>
      <div><span>Envío</span><strong>${money(order.shipping || 0)}</strong></div>
      <div class="total"><span>Total</span><strong>${money(order.total || 0)}</strong></div>
    </div>
  `;
}

function renderNotes() {
  if (!notesList) return;

  notesList.innerHTML = adminNotes.map((note) => `
    <article class="note-card ${note.color || "green"}">
      <strong>${note.title}</strong>
      <p>${note.text}</p>
      <button type="button" data-delete-note="${note.id}" aria-label="Eliminar nota">x</button>
    </article>
  `).join("");
}

function addNote(event) {
  event.preventDefault();
  const title = noteTitle.value.trim();
  const text = noteText.value.trim();
  if (!title || !text) {
    showToast("Escribe título y nota.");
    return;
  }

  const colors = ["green", "blue", "pink"];
  adminNotes = [{ id: Date.now(), title, text, color: colors[adminNotes.length % colors.length] }, ...adminNotes];
  writeStored(NOTES_KEY, adminNotes);
  noteTitle.value = "";
  noteText.value = "";
  renderNotes();
  showToast("Nota guardada.");
}

function deleteNote(id) {
  adminNotes = adminNotes.filter((note) => String(note.id) !== String(id));
  writeStored(NOTES_KEY, adminNotes);
  renderNotes();
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
  const orders = adminOrders.filter((order) => order.status === "Confirmado" && order.schedule === schedule && order.coords);
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
  editProductStock.value = Number.isFinite(Number(product.stock)) ? Number(product.stock) : 999;
  editProductPresentation.value = product.presentation;
  editProductImage.value = product.image;
  if (editProductPreview) editProductPreview.src = product.image;
  editProductDetail.value = product.detail;
}

function startNewProduct() {
  editProduct.value = products[0]?.id || "";
  editProductCategory.value = "";
  editProductName.value = "";
  editProductPrice.value = "";
  editProductStock.value = "999";
  editProductPresentation.value = "";
  editProductImage.value = "assets/logo-naturfreeze-mark.jpg";
  if (editProductPreview) editProductPreview.src = "assets/logo-naturfreeze-mark.jpg";
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
    stock: Math.max(0, Number(editProductStock.value) || 0),
    presentation: editProductPresentation.value.trim() || existingProduct.presentation || "1 pieza",
    image: editProductImage.value.trim() || existingProduct.image || "assets/logo-naturfreeze-mark.jpg",
    detail: editProductDetail.value.trim() || existingProduct.detail || "Producto NaturFreeze.",
    hidden: false
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
    closeProductEditorPanel();
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
  closeProductEditorPanel();
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
    if (editProductPreview) editProductPreview.src = reader.result;
    showToast("Imagen cargada para probar.");
  });
  reader.readAsDataURL(file);
}

function renderAdminProductCards() {
  if (!adminProductCards) return;

  const categoryOrder = [
    "frutas congeladas",
    "papas y verduras",
    "empanizados",
    "mariscos",
    "pescados",
    "aves",
    "carnes",
    "agotados",
    "general"
  ];
  const visibleProducts = products.filter((product) => !product.hidden);
  const extraCategories = [...new Set(visibleProducts.map((product) => product.category))]
    .filter((category) => !categoryOrder.includes(category));
  const groupedProducts = [...categoryOrder, ...extraCategories]
    .map((category) => ({
      category,
      products: visibleProducts.filter((product) => product.category === category)
    }))
    .filter((group) => group.products.length);

  adminProductCards.innerHTML = groupedProducts.map((group) => `
    <section class="admin-product-category">
      <div class="admin-product-category-head">
        <strong>${getCategoryLabel(group.category)}</strong>
        <span>${group.products.length}</span>
      </div>
      ${group.products.map((product) => `
    <article class="admin-product-card ${Number(product.stock) <= 0 ? "sold-out" : ""}">
      <img src="${product.image}" alt="${product.name}">
      <div>
        <h4>${product.name}</h4>
        <p>${product.presentation} | ${getCategoryLabel(product.category)}</p>
        <p>${product.detail}</p>
      </div>
      <div class="admin-product-actions">
        <span class="product-price-label">Tarifa de precio</span>
        <strong>${money(product.price)}</strong>
        <button class="product-state ${Number(product.stock) <= 0 ? "off" : ""}" type="button" data-toggle-product="${product.id}">
          <span></span>${Number(product.stock) <= 0 ? "No disponible" : "Disponible"}
        </button>
        <button class="kebab-button" type="button" data-product-menu="${product.id}" aria-label="Opciones de producto">...</button>
        <div class="product-row-menu" id="productMenu-${product.id}" hidden>
          <button type="button" data-edit-product="${product.id}">Editar</button>
          <button type="button" data-delete-product="${product.id}">Eliminar</button>
        </div>
      </div>
    </article>
      `).join("")}
    </section>
  `).join("");
}

function getCategoryLabel(category) {
  const labels = {
    "frutas congeladas": "Frutas congeladas",
    "papas y verduras": "Papas y verduras",
    empanizados: "Empanizados",
    mariscos: "De mar",
    pescados: "Pescados",
    aves: "Aves",
    carnes: "Carnes",
    agotados: "Agotados",
    general: "General"
  };
  return labels[category] || category || "General";
}

function openProductEditor(id) {
  editProduct.dataset.mode = "";
  loadProductEditor(id);
  productEditor?.classList.add("open");
  productEditor?.scrollIntoView({ behavior: "smooth", block: "start" });
  showToast("Producto listo para editar.");
}

function closeProductEditorPanel() {
  productEditor?.classList.remove("open");
}

function deleteProduct(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  product.stock = 0;
  product.hidden = true;
  productEdits[product.id] = { ...(productEdits[product.id] || {}), stock: 0, hidden: true };
  writeStored(PRODUCT_EDITS_KEY, productEdits);
  saveProductToFirebase(product);
  renderProducts();
  renderAdminDashboard();
  showToast("Producto eliminado del menú.");
}

function toggleProductAvailability(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  const isOff = Number(product.stock) <= 0;
  product.stock = isOff ? 999 : 0;
  product.hidden = false;
  productEdits[product.id] = { ...(productEdits[product.id] || {}), stock: product.stock, hidden: false };
  writeStored(PRODUCT_EDITS_KEY, productEdits);
  saveProductToFirebase(product);
  renderProducts();
  renderAdminDashboard();
  showToast(isOff ? "Producto disponible." : "Producto no disponible.");
}
function getFilteredProducts() {
  const query = normalizeText(activeSearch.trim());
  return products.filter((product) => !product.hidden).filter((product) => {
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
    const stock = Number.isFinite(Number(product.stock)) ? Number(product.stock) : 999;
    const soldOut = stock <= 0;
    const status = quantity ? `<span class="quantity-pill">En pedido: ${quantity}</span>` : "";
    return `
      <article class="product-card ${soldOut ? "sold-out" : ""}">
        <div class="product-image-wrap">
          <img src="${product.image}" alt="${product.name}">
          ${status}
          ${soldOut ? '<span class="sold-out-pill">Agotado</span>' : ""}
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
          <button class="add-button" type="button" data-product="${product.id}" ${soldOut ? "disabled" : ""}>
            ${soldOut ? "Agotado" : quantity ? "Agregar otro" : "Agregar a mis pedidos"}
          </button>
        </div>
      </article>
    `;
  }).join("");
}

function getCartRows() {
  return [...cart.entries()].map(([id, quantity]) => {
    const product = products.find((item) => item.id === id);
    if (!product) return null;
    return { ...product, quantity, subtotal: product.price * quantity };
  }).filter(Boolean);
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
  const product = products.find((item) => item.id === id);
  if (!product) return;
  const stock = Number.isFinite(Number(product.stock)) ? Number(product.stock) : 999;
  const nextQuantity = (cart.get(id) || 0) + 1;

  if (stock <= 0) {
    showToast("Producto agotado por ahora.");
    return;
  }

  if (nextQuantity > stock) {
    showToast(`Solo quedan ${stock} disponible(s).`);
    return;
  }

  cart.set(id, nextQuantity);
  renderCart();
  playSound("success");
  showToast("Producto agregado a mis pedidos.");
}

function changeQuantity(id, amount) {
  const nextQuantity = (cart.get(id) || 0) + amount;
  const product = products.find((item) => item.id === id);
  const stock = product && Number.isFinite(Number(product.stock)) ? Number(product.stock) : 999;

  if (nextQuantity <= 0) {
    cart.delete(id);
  } else if (nextQuantity > stock) {
    showToast(`Solo quedan ${stock} disponible(s).`);
    return;
  } else {
    cart.set(id, nextQuantity);
  }
  renderCart();
}

function openCart() {
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
  setCartStep(1);
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
  return validateCartSummary() && validateDeliveryStep();
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
      id: row.id,
      name: row.name,
      quantity: row.quantity,
      subtotal: row.subtotal
    }))
  });
  reduceInventoryForOrder(rows);

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
const clearPosButton = document.querySelector("#clearPos");
if (clearPosButton) clearPosButton.addEventListener("click", clearPosSale);
document.querySelector("#clearOrders").addEventListener("click", clearWebOrders);
document.querySelector("#saveProductEdit").addEventListener("click", saveProductEdit);
document.querySelector("#resetProductEdits").addEventListener("click", resetProductEdits);
const newProductButton = document.querySelector("#newProductButton");
if (newProductButton) newProductButton.addEventListener("click", startNewProduct);
const newProductHeaderButton = document.querySelector("#newProductHeaderButton");
if (newProductHeaderButton) newProductHeaderButton.addEventListener("click", () => {
  startNewProduct();
  productEditor?.classList.add("open");
  productEditor?.scrollIntoView({ behavior: "smooth", block: "start" });
});
editProduct.addEventListener("change", () => loadProductEditor(editProduct.value));
editProductUpload.addEventListener("change", () => previewUploadedProductImage(editProductUpload.files[0]));
if (closeProductEditor) closeProductEditor.addEventListener("click", closeProductEditorPanel);
if (closeOrderModal) closeOrderModal.addEventListener("click", closeOrderConfirmModal);
if (approveOrderFromModal) {
  approveOrderFromModal.addEventListener("click", () => {
    if (modalOrderId) approveOrder(modalOrderId);
  });
}
if (cancelOrderFromModal) {
  cancelOrderFromModal.addEventListener("click", () => {
    if (modalOrderId) {
      cancelOrder(modalOrderId);
      closeOrderConfirmModal();
    }
  });
}
if (financePeriod) financePeriod.addEventListener("change", renderFinance);
if (printFinance) printFinance.addEventListener("click", printFinanceSummary);
if (financeTable) {
  financeTable.addEventListener("click", (event) => {
    const moreButton = event.target.closest("[data-finance-more]");
    const breakdownButton = event.target.closest("[data-finance-breakdown]");
    const financePrintButton = event.target.closest("[data-finance-print]");

    if (moreButton) {
      const menu = document.querySelector(`#financeMenu-${CSS.escape(moreButton.dataset.financeMore)}`);
      document.querySelectorAll(".finance-action-menu").forEach((item) => {
        if (item !== menu) item.hidden = true;
      });
      if (menu) menu.hidden = !menu.hidden;
    }
    if (breakdownButton) {
      const detail = document.querySelector(`#financeBreakdown-${CSS.escape(breakdownButton.dataset.financeBreakdown)}`);
      if (detail) detail.hidden = !detail.hidden;
      document.querySelectorAll(".finance-action-menu").forEach((item) => item.hidden = true);
    }
    if (financePrintButton) printFinanceRow(financePrintButton.dataset.financePrint);
  });
}
if (posLines) {
  posLines.addEventListener("click", (event) => {
    const printButton = event.target.closest("[data-print-ticket]");
    if (printButton) printTicket(printButton.dataset.printTicket);
  });
}
adminProductCards.addEventListener("click", (event) => {
  const menuButton = event.target.closest("[data-product-menu]");
  const editButton = event.target.closest("[data-edit-product]");
  const deleteButton = event.target.closest("[data-delete-product]");
  const toggleButton = event.target.closest("[data-toggle-product]");

  if (menuButton) {
    const menu = document.querySelector(`#productMenu-${CSS.escape(menuButton.dataset.productMenu)}`);
    document.querySelectorAll(".product-row-menu").forEach((item) => {
      if (item !== menu) item.hidden = true;
    });
    if (menu) menu.hidden = !menu.hidden;
  }
  if (editButton) openProductEditor(editButton.dataset.editProduct);
  if (deleteButton) deleteProduct(deleteButton.dataset.deleteProduct);
  if (toggleButton) toggleProductAvailability(toggleButton.dataset.toggleProduct);
});
document.querySelector("#adminTabs").addEventListener("click", (event) => {
  const button = event.target.closest("[data-admin-view]");
  if (button) switchAdminView(button.dataset.adminView);
});
document.querySelectorAll("[data-order-status-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-order-status-filter]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeOrderStatusFilter = button.dataset.orderStatusFilter;
    renderAdminOrders();
  });
});
if (noteForm) noteForm.addEventListener("submit", addNote);
if (storeSettingsForm) storeSettingsForm.addEventListener("submit", saveStoreSettings);
if (notesList) {
  notesList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-delete-note]");
    if (button) deleteNote(button.dataset.deleteNote);
  });
}
adminPassword.addEventListener("keydown", (event) => {
  if (event.key === "Enter") loginAdmin();
});
adminOrdersElement.addEventListener("click", (event) => {
  const openButton = event.target.closest("[data-open-order]");
  const openScheduleButton = event.target.closest("[data-open-schedule]");
  const confirmScheduleButton = event.target.closest("[data-confirm-schedule]");
  const arrivedScheduleButton = event.target.closest("[data-arrived-schedule]");
  const deliverScheduleButton = event.target.closest("[data-deliver-schedule]");
  const confirmOrderButton = event.target.closest("[data-confirm-order]");
  const routeButton = event.target.closest("[data-route-order]");
  const arrivedButton = event.target.closest("[data-arrived-order]");
  const deliverButton = event.target.closest("[data-deliver-order]");
  const cancelButton = event.target.closest("[data-cancel-order]");
  const printTicketButton = event.target.closest("[data-print-ticket]");
  const routeViewButton = event.target.closest("[data-route-view]");
  const routeFullscreenButton = event.target.closest("[data-route-fullscreen]");
  const routeDeliverCurrentButton = event.target.closest("[data-route-deliver-current]");

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
  if (confirmOrderButton) openOrderConfirmModal(confirmOrderButton.dataset.confirmOrder);
  if (routeButton) openDeliveryRoute(routeButton.dataset.routeOrder);
  if (arrivedButton) checkDeliveryArrival(arrivedButton.dataset.arrivedOrder);
  if (deliverButton) markOrderDelivered(deliverButton.dataset.deliverOrder);
  if (cancelButton) cancelOrder(cancelButton.dataset.cancelOrder);
  if (printTicketButton) printTicket(printTicketButton.dataset.printTicket);
  if (routeViewButton) setRouteViewMode(routeViewButton.dataset.routeView);
  if (routeFullscreenButton) toggleRouteFullscreen();
  if (routeDeliverCurrentButton) markCurrentRouteStopDelivered();
});
adminDrawer.addEventListener("click", (event) => {
  if (event.target === adminDrawer) closeAdmin();
});
document.querySelector("#openCart").addEventListener("click", openCart);
document.querySelector("#closeCart").addEventListener("click", closeCart);
document.querySelector("#cartNextSummary").addEventListener("click", () => {
  if (validateCartSummary()) setCartStep(2, true);
});
document.querySelector("#cartNextAddress").addEventListener("click", () => {
  if (validateDeliveryStep()) setCartStep(3);
});
document.querySelector("#cartBackAddress").addEventListener("click", () => setCartStep(1));
document.querySelector("#cartBackPayment").addEventListener("click", () => setCartStep(2));
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

