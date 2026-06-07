# Naturfreeze Cancún

Sitio web / tienda para Naturfreeze.

## Cómo abrirlo

Abre `index.html` en el navegador o abre esta carpeta completa en Visual Studio Code:

`C:\Users\d9981\Documents\NaturFreeze`

## Qué incluye esta versión

- Logo mejorado en `assets/logo.svg`.
- Catálogo de productos con buscador.
- Filtros por categoría.
- Carrito llamado "Mis pedidos".
- Cantidad visible por producto agregado.
- Subtotal de productos.
- Costo de envío separado.
- Total estimado.
- Opción para usar ubicación actual.
- Dirección manual si el cliente no quiere compartir ubicación.
- Tipo de edificio obligatorio: casa, departamento, edificio, hotel, oficinas, negocio u otro.
- Campo de especificaciones: piso, puerta, habitación, recepción, referencias, etc.
- Pedido completo enviado por WhatsApp.
- Aviso para enviar comprobante por WhatsApp si paga por transferencia.

## Dónde cambiar productos y precios

Edita `app.js` y busca:

```js
const products = [
```

Cada producto tiene:

- `name`: nombre.
- `category`: categoría.
- `presentation`: presentación.
- `price`: precio.
- `image`: imagen.
- `detail`: descripción.

## Dónde cambiar tarifa de envío

En `app.js`, al inicio:

```js
const BASE_SHIPPING = 25;
const PRICE_PER_KM = 8;
```

`BASE_SHIPPING` es el envío mínimo.

`PRICE_PER_KM` es el costo extra por kilómetro estimado.

## Fotos reales

Para cambiar fotos, guarda tus imágenes dentro de `assets` y cambia el campo `image` de cada producto.

Ejemplo:

```js
image: "assets/tilapia.jpg",
```

Puedes usar nombres como:

- `assets/tilapia.jpg`
- `assets/pollo-picoso.jpg`
- `assets/mix-berries.jpg`
- `assets/fresas.jpg`
- `assets/mango.jpg`
- `assets/papas.jpg`
- `assets/nuggets.jpg`
- `assets/aros-cebolla.jpg`

## WhatsApp

El número actual configurado es:

`998 350 0558`

En codigo aparece como:

```js
const WHATSAPP_NUMBER = "529983500558";
```

## Pago con tarjeta

Para cobrar tarjeta de forma real no se deben pedir ni guardar números de tarjeta dentro de esta página. Lo correcto es conectar Mercado Pago, Stripe o Clip con checkout seguro.
