/**
 * main.js — La Séptima: Ayer y Hoy
 * Lógica principal del mapa interactivo.
 * Maneja marcadores, InfoWindows, panel lateral y controles.
 */

/* ================================================================
   ESTADO GLOBAL
   ================================================================ */
let map;
let markers = [];
let infoWindows = [];
let activeInfoWindow = null;
let markersVisible = true;
let panelOpen = false;

/* ================================================================
   ESTILOS PERSONALIZADOS DEL MAPA (estética sepia/histórica)
   ================================================================ */
const MAP_STYLES = [
  { elementType: "geometry",        stylers: [{ color: "#ebe3d5" }] },
  { elementType: "labels.text.fill",stylers: [{ color: "#523735" }] },
  { elementType: "labels.text.stroke",stylers: [{ color: "#f5f1eb" }] },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [{ color: "#c9b2a6" }]
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "geometry.stroke",
    stylers: [{ color: "#dcd2be" }]
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [{ color: "#ae9e90" }]
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry",
    stylers: [{ color: "#dfd2ae" }]
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#dfd2ae" }]
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#93817c" }]
  },
  {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [{ color: "#a5b076" }]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#447530" }]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#f5f1eb" }]
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [{ color: "#fdfcf8" }]
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#f8c967" }]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#e9bc62" }]
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [{ color: "#e98d58" }]
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry.stroke",
    stylers: [{ color: "#db8555" }]
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [{ color: "#806b63" }]
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [{ color: "#dfd2ae" }]
  },
  {
    featureType: "transit.line",
    elementType: "labels.text.fill",
    stylers: [{ color: "#8f7d77" }]
  },
  {
    featureType: "transit.line",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#ebe3cd" }]
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [{ color: "#dfd2ae" }]
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [{ color: "#b9d3c2" }]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#92998d" }]
  }
];

/* ================================================================
   SVG DE MARCADOR PERSONALIZADO
   ================================================================ */
function crearIconoMarcador(numero) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="46" viewBox="0 0 36 46">
      <defs>
        <filter id="shadow" x="-30%" y="-20%" width="160%" height="160%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="rgba(30,26,20,0.5)"/>
        </filter>
      </defs>
      <path filter="url(#shadow)"
        d="M18 2 C9 2 2 9 2 18 C2 30 18 44 18 44 C18 44 34 30 34 18 C34 9 27 2 18 2 Z"
        fill="#1e1a14" stroke="#c8a84b" stroke-width="2"/>
      <circle cx="18" cy="17" r="10" fill="#c8a84b" opacity="0.15"/>
      <text x="18" y="22" text-anchor="middle"
        font-family="'Playfair Display', Georgia, serif"
        font-weight="900" font-size="13"
        fill="#e8c96a">${numero}</text>
    </svg>
  `.trim();

  return {
    url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg),
    scaledSize: new google.maps.Size(36, 46),
    anchor: new google.maps.Point(18, 44)
  };
}

/* ================================================================
   CONTENIDO HTML DEL INFOWINDOW
   ================================================================ */
function crearContenidoIW(punto) {
  return `
    <div class="iw-container">
      <div class="iw-header">
        <div class="iw-number">Punto ${punto.id} de ${PUNTOS_HISTORICOS.length}</div>
        <div class="iw-title">${punto.titulo}</div>
      </div>
      <div class="iw-body">
        <div class="iw-date">📅 ${punto.fecha}</div>
        <div class="iw-desc">${punto.descripcion}</div>
        <div class="iw-tag">${punto.emoji} ${punto.categoria}</div>
      </div>
    </div>
  `;
}

/* ================================================================
   INICIALIZACIÓN DEL MAPA (callback de Google Maps API)
   ================================================================ */
function initMap() {

  // Centro: Mitad del recorrido Museo Nacional → Plaza de Bolívar
  const centro = { lat: 4.6070, lng: -74.0630 };

  map = new google.maps.Map(document.getElementById('map'), {
    center: centro,
    zoom: 15,
    styles: MAP_STYLES,
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: true,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_CENTER
    },
    streetViewControlOptions: {
      position: google.maps.ControlPosition.RIGHT_CENTER
    }
  });

  // Crear polilínea del recorrido
  const rutaCoordenadas = PUNTOS_HISTORICOS.map(p => ({ lat: p.lat, lng: p.lng }));
  const rutaLinea = new google.maps.Polyline({
    path: rutaCoordenadas,
    geodesic: true,
    strokeColor: '#c8a84b',
    strokeOpacity: 0.6,
    strokeWeight: 3,
    map: map
  });

  // Crear marcadores e InfoWindows para cada punto
  PUNTOS_HISTORICOS.forEach((punto, index) => {

    const marker = new google.maps.Marker({
      position: { lat: punto.lat, lng: punto.lng },
      map: map,
      title: punto.titulo,
      icon: crearIconoMarcador(punto.id),
      animation: google.maps.Animation.DROP,
      zIndex: 100 + index
    });

    const infoWindow = new google.maps.InfoWindow({
      content: crearContenidoIW(punto),
      maxWidth: 300
    });

    // Evento: clic en marcador
    marker.addListener('click', () => {
      // Cerrar InfoWindow activo si existe
      if (activeInfoWindow) {
        activeInfoWindow.close();
      }
      infoWindow.open(map, marker);
      activeInfoWindow = infoWindow;

      // Centrar mapa suavemente en el marcador
      map.panTo(marker.getPosition());
    });

    // Hover: animación bounce
    marker.addListener('mouseover', () => {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    });
    marker.addListener('mouseout', () => {
      marker.setAnimation(null);
    });

    // Guardar referencias
    markers.push(marker);
    infoWindows.push(infoWindow);
  });

  // Cerrar InfoWindow al hacer clic en el mapa
  map.addListener('click', () => {
    if (activeInfoWindow) {
      activeInfoWindow.close();
      activeInfoWindow = null;
    }
  });

  // Construir lista del panel lateral
  construirPanelLista();
}

/* ================================================================
   PANEL LATERAL
   ================================================================ */
function construirPanelLista() {
  const lista = document.getElementById('panel-list');
  if (!lista) return;

  PUNTOS_HISTORICOS.forEach((punto, index) => {
    const item = document.createElement('div');
    item.className = 'panel-item';
    item.innerHTML = `
      <div class="panel-item-num">${punto.id}</div>
      <div class="panel-item-info">
        <div class="panel-item-title">${punto.emoji} ${punto.titulo}</div>
        <div class="panel-item-year">${punto.fecha}</div>
      </div>
    `;
    // Al hacer clic en el ítem del panel → ir al marcador
    item.addEventListener('click', () => {
      irAlPunto(index);
    });
    lista.appendChild(item);
  });
}

function irAlPunto(index) {
  const marker = markers[index];
  const iw = infoWindows[index];
  if (!marker || !iw) return;

  // Cerrar panel en móvil al seleccionar punto
  if (window.innerWidth < 768) {
    togglePanel(false);
  }

  // Centrar y abrir InfoWindow
  map.setCenter(marker.getPosition());
  map.setZoom(17);

  if (activeInfoWindow) activeInfoWindow.close();
  iw.open(map, marker);
  activeInfoWindow = iw;

  // Animar marcador
  marker.setAnimation(google.maps.Animation.BOUNCE);
  setTimeout(() => marker.setAnimation(null), 1400);
}

/* ================================================================
   CONTROLES DE LA UI
   ================================================================ */

/**
 * Activa/desactiva visibilidad de todos los marcadores.
 */
function toggleMarcadores() {
  markersVisible = !markersVisible;
  markers.forEach(m => m.setVisible(markersVisible));

  const btn = document.getElementById('btn-toggle');
  if (btn) {
    btn.textContent = markersVisible ? '👁 Ocultar Puntos' : '👁 Mostrar Puntos';
    btn.classList.toggle('active', !markersVisible);
  }

  // Cerrar InfoWindow activa si se ocultan marcadores
  if (!markersVisible && activeInfoWindow) {
    activeInfoWindow.close();
    activeInfoWindow = null;
  }
}

/**
 * Abre o cierra el panel lateral.
 */
function togglePanel(forceState) {
  panelOpen = (forceState !== undefined) ? forceState : !panelOpen;
  const panel = document.getElementById('side-panel');
  if (panel) {
    panel.classList.toggle('open', panelOpen);
  }
}

/* ================================================================
   INICIALIZACIÓN CUANDO EL DOM ESTÁ LISTO
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {

  // Botón toggle de marcadores
  const btnToggle = document.getElementById('btn-toggle');
  if (btnToggle) {
    btnToggle.addEventListener('click', toggleMarcadores);
  }

  // Botón abrir panel
  const btnPanel = document.getElementById('btn-panel');
  if (btnPanel) {
    btnPanel.addEventListener('click', () => togglePanel());
  }

  // Botón cerrar panel
  const btnPanelClose = document.getElementById('btn-panel-close');
  if (btnPanelClose) {
    btnPanelClose.addEventListener('click', () => togglePanel(false));
  }
});
