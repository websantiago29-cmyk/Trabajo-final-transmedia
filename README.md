# 🗺️ La Séptima: Ayer y Hoy

Proyecto web interactivo que presenta un recorrido histórico virtual por la **Carrera Séptima de Bogotá**, desde el Museo Nacional hasta la Plaza de Bolívar.

## 📁 Estructura del Proyecto

```
la-septima/
├── index.html       → Página principal (landing)
├── recorrido.html   → Mapa interactivo con marcadores
├── style.css        → Estilos compartidos (diseño editorial histórico)
├── main.js          → Lógica del mapa, marcadores e interacción
├── puntos.js        → Array con los 10 puntos históricos
├── images/          → Carpeta para imágenes (íconos, miniaturas)
└── README.md        → Este archivo
```

## 🚀 Despliegue en GitHub Pages

### 1. Obtener API Key de Google Maps

1. Ve a [Google Cloud Console](https://console.cloud.google.com/).
2. Crea un proyecto nuevo o selecciona uno existente.
3. Navega a **APIs & Services → Library**.
4. Busca y activa **"Maps JavaScript API"**.
5. Ve a **APIs & Services → Credentials**.
6. Crea una **API Key** nueva.
7. Restringe la key a tu dominio:
   - En "Application restrictions" → "HTTP referrers"
   - Agrega: `https://TU_USUARIO.github.io/*`

### 2. Configurar la API Key

Abre `recorrido.html` y reemplaza `TU_API_KEY_AQUI` al final del archivo:

```html
<!-- ANTES -->
src="https://maps.googleapis.com/maps/api/js?key=TU_API_KEY_AQUI&callback=initMap"

<!-- DESPUÉS (con tu key real) -->
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyABC123...&callback=initMap"
```

### 3. Subir a GitHub

```bash
# Inicializar repositorio
git init
git add .
git commit -m "Primer commit: La Séptima Ayer y Hoy"

# Conectar con GitHub
git remote add origin https://github.com/TU_USUARIO/la-septima.git
git branch -M main
git push -u origin main
```

### 4. Activar GitHub Pages

1. Ve a tu repositorio en GitHub.
2. Click en **Settings** → **Pages**.
3. En **Source**, selecciona **"Deploy from a branch"**.
4. Selecciona la rama `main` y carpeta `/ (root)`.
5. Click **Save**.

Tu sitio estará disponible en:  
`https://TU_USUARIO.github.io/la-septima/`

---

## 🎨 Características

- **Diseño editorial histórico** con tipografía Playfair Display e IM Fell English.
- **10 marcadores** con íconos SVG personalizados numerados.
- **InfoWindows** con título, fecha, descripción y categoría de cada punto.
- **Panel lateral** con lista navegable de todos los puntos.
- **Polilínea dorada** que traza el recorrido completo.
- **Mapa estilizado** en paleta sepia/histórica.
- **Responsive** — funciona en móvil, tablet y escritorio.
- **Animaciones de entrada** suaves en la página principal.

## 📍 Puntos Históricos

| # | Punto | Fecha |
|---|-------|-------|
| 1 | Museo Nacional de Colombia | 1823 |
| 2 | Palacio de la Gobernación de Cundinamarca | 1885 |
| 3 | Tranvía Eléctrico de Bogotá | 1910 |
| 4 | El 9 de Abril — El Bogotazo | 1948 |
| 5 | Plaza de Toros La Santamaría | 1931 |
| 6 | El Gran Hotel Granada | 1929 |
| 7 | Librería Lerner — La Calle del Libro | 1938 |
| 8 | Proclama de la Independencia | 1810 |
| 9 | Edificio Liévano — Alcaldía Mayor | 1905 |
| 10 | Plaza de Bolívar | Siglo XVI |

## 🛠️ Tecnologías

- HTML5 semántico
- CSS3 (variables, grid, flexbox, animaciones)
- JavaScript vanilla (ES6+)
- Google Maps JavaScript API v3
- Google Fonts (Playfair Display, Crimson Pro, IM Fell English)

---

*Proyecto académico de historia urbana — Bogotá, Colombia*
