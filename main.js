/**
 * main.js — La Séptima: Ayer y Hoy
 * ─────────────────────────────────
 * - Mapa con marcadores grandes y visibles (incluso en Street View)
 * - Modal flotante centrado para cada punto histórico (no panel inferior)
 * - Playlist de audio con controles flotantes
 * - Panel lateral de lista de puntos
 *
 * INSTRUCCIÓN PLAYLIST:
 *   Agrega tus archivos de audio en el array PLAYLIST abajo.
 *   Ejemplo: { titulo: 'Nombre canción', src: 'audio/cancion_1.mp3' }
 */

/* ================================================================
   PLAYLIST — agrega tus canciones aquí
   Reemplaza los src con tus archivos de audio reales
   ================================================================ */
const PLAYLIST = [
  { titulo: 'Canela - Cesar Mora',     src: 'audio/cancion_1.mp3' },
  { titulo: 'La Derecha - El Puñal',         src: 'audio/cancion_2.mp3' },
  { titulo: 'La gata golosa - Fulgencio García',             src: 'audio/cancion_3.mp3' },
    { titulo: 'La Calle Real',             src: 'audio/cancion_4.mp3' },
      { titulo: 'La Calle Real',             src: 'audio/cancion_3.mp3' }
];

/* ================================================================
   ESTADO GLOBAL
   ================================================================ */
let map;
let markers       = [];
let markersVisible = true;
let panelListOpen  = false;
let puntoActivo    = null;

// Playlist state
let audioElement   = null;
let playlistIndex  = 0;
let isPlaying      = false;

/* ================================================================
   ESTILOS DEL MAPA — paleta sepia/histórica
   ================================================================ */
const MAP_STYLES = [
  { elementType: 'geometry',          stylers: [{ color: '#ebe3d5' }] },
  { elementType: 'labels.text.fill',  stylers: [{ color: '#523735' }] },
  { elementType: 'labels.text.stroke',stylers: [{ color: '#f5f1eb' }] },
  { featureType: 'administrative',    elementType: 'geometry.stroke',     stylers: [{ color: '#c9b2a6' }] },
  { featureType: 'landscape.natural', elementType: 'geometry',            stylers: [{ color: '#dfd2ae' }] },
  { featureType: 'poi',               elementType: 'geometry',            stylers: [{ color: '#dfd2ae' }] },
  { featureType: 'poi',               elementType: 'labels.text.fill',    stylers: [{ color: '#93817c' }] },
  { featureType: 'poi.park',          elementType: 'geometry.fill',       stylers: [{ color: '#a5b076' }] },
  { featureType: 'poi.park',          elementType: 'labels.text.fill',    stylers: [{ color: '#447530' }] },
  { featureType: 'road',              elementType: 'geometry',            stylers: [{ color: '#f5f1eb' }] },
  { featureType: 'road.arterial',     elementType: 'geometry',            stylers: [{ color: '#fdfcf8' }] },
  { featureType: 'road.highway',      elementType: 'geometry',            stylers: [{ color: '#f8c967' }] },
  { featureType: 'road.highway',      elementType: 'geometry.stroke',     stylers: [{ color: '#e9bc62' }] },
  { featureType: 'road.local',        elementType: 'labels.text.fill',    stylers: [{ color: '#806b63' }] },
  { featureType: 'transit.line',      elementType: 'geometry',            stylers: [{ color: '#dfd2ae' }] },
  { featureType: 'water',             elementType: 'geometry.fill',       stylers: [{ color: '#b9d3c2' }] },
  { featureType: 'water',             elementType: 'labels.text.fill',    stylers: [{ color: '#92998d' }] }
];

/* ================================================================
   ÍCONO SVG DEL MARCADOR
   Más grande (42×54px) para mejor visibilidad en Street View
   ================================================================ */
function crearIcono(numero, activo) {
  const bg     = activo ? '#c8a84b' : '#1c1810';
  const numCol = activo ? '#1c1810' : '#e8c96a';
  const ring   = activo ? 'rgba(200,168,75,0.4)' : 'rgba(200,168,75,0.15)';

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="56" viewBox="0 0 44 56">
      <defs>
        <filter id="s" x="-35%" y="-20%" width="170%" height="170%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="rgba(10,8,4,0.65)"/>
        </filter>
      </defs>
      <!-- Pin shape — más grande y visible -->
      <path filter="url(#s)"
        d="M22 2 C11 2 2 11 2 22 C2 36 22 54 22 54 C22 54 42 36 42 22 C42 11 33 2 22 2 Z"
        fill="${bg}" stroke="#c8a84b" stroke-width="2.5"/>
      <!-- Halo interior -->
      <circle cx="22" cy="21" r="12" fill="${ring}"/>
      <!-- Número -->
      <text x="22" y="27"
        text-anchor="middle"
        font-family="'Playfair Display', Georgia, serif"
        font-weight="900"
        font-size="${numero > 9 ? '11' : '13'}"
        fill="${numCol}">${numero}</text>
    </svg>
  `.trim();

  return {
    url:         'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg),
    scaledSize:  new google.maps.Size(44, 56),
    anchor:      new google.maps.Point(22, 54)
  };
}

/* ================================================================
   INICIALIZACIÓN DEL MAPA — callback de Google Maps
   ================================================================ */
function initMap() {

  // Centro del tramo: Septimazo → Plaza de Bolívar
  const centro = { lat: 4.6040, lng: -74.0710 };

  map = new google.maps.Map(document.getElementById('map'), {
    center: centro,
    zoom: 15,
    styles: MAP_STYLES,
    mapTypeControl:      false,
    fullscreenControl:   false,
    streetViewControl:   true,
    zoomControl:         true,
    zoomControlOptions:  { position: google.maps.ControlPosition.RIGHT_CENTER },
    streetViewControlOptions: { position: google.maps.ControlPosition.RIGHT_CENTER }
  });

  // Polilínea del recorrido (línea dorada)
  new google.maps.Polyline({
    path:          PUNTOS_HISTORICOS.map(p => ({ lat: p.lat, lng: p.lng })),
    geodesic:      true,
    strokeColor:   '#c8a84b',
    strokeOpacity: 0.65,
    strokeWeight:  3,
    map
  });

  // Crear marcadores
  PUNTOS_HISTORICOS.forEach((punto, index) => {
    const marker = new google.maps.Marker({
      position:  { lat: punto.lat, lng: punto.lng },
      map,
      title:     punto.titulo,
      icon:      crearIcono(punto.id, false),
      animation: google.maps.Animation.DROP,
      zIndex:    100 + index
    });

    // Clic → abrir modal del punto
    marker.addListener('click', () => abrirModalPunto(index));

    // Hover: bounce breve
    marker.addListener('mouseover', () => {
      if (puntoActivo !== index) marker.setAnimation(google.maps.Animation.BOUNCE);
    });
    marker.addListener('mouseout', () => marker.setAnimation(null));

    markers.push(marker);
  });

  // Clic en el mapa vacío → cerrar modal
  map.addListener('click', () => cerrarModalPunto());

  // Construir lista del panel lateral
  construirPanelLista();

  // Inicializar playlist (puede no reproducirse hasta interacción del usuario)
  iniciarPlaylist();
}

/* ================================================================
   MODAL DEL PUNTO HISTÓRICO
   ================================================================ */

/** Genera el HTML de la media (galería o video) */
function mediaHTML(punto) {
  if (punto.video && punto.video.trim() !== '') {
    const img = punto.imagenes && punto.imagenes[0]
      ? `<img src="${punto.imagenes[0]}" alt="Imagen de ${punto.titulo}" class="punto-media-img" loading="lazy">`
      : `<div class="punto-media-placeholder">📷 Imagen próximamente</div>`;
    return `
      <video class="punto-media-video" controls preload="metadata">
        <source src="${punto.video}" type="video/mp4">
      </video>
      ${img}`;
  }

  const imgs = punto.imagenes && punto.imagenes.length > 0 ? punto.imagenes : [];
  if (!imgs.length) {
    return `<div class="punto-media-placeholder">📷 Imágenes próximamente</div>`;
  }

  return `<div class="punto-media-galeria">
    ${imgs.map((src, i) => `
      <img src="${src}" alt="Imagen ${i + 1} – ${punto.titulo}" class="punto-media-img" loading="lazy"
           onerror="this.parentElement && (this.style.display='none')">`
    ).join('')}
  </div>`;
}

/** Abre el modal flotante para el punto en la posición `index` */
function abrirModalPunto(index) {
  const punto = PUNTOS_HISTORICOS[index];
  if (!punto) return;

  // Actualizar ícono activo/inactivo
  if (puntoActivo !== null && markers[puntoActivo]) {
    markers[puntoActivo].setIcon(crearIcono(PUNTOS_HISTORICOS[puntoActivo].id, false));
    markers[puntoActivo].setZIndex(100 + puntoActivo);
    markers[puntoActivo].setAnimation(null);
  }
  puntoActivo = index;
  markers[index].setIcon(crearIcono(punto.id, true));
  markers[index].setZIndex(999);
  markers[index].setAnimation(null);

  map.panTo(markers[index].getPosition());

  // Párrafos del texto
  const parrafos = punto.texto.split('\n\n')
    .filter(p => p.trim())
    .map(p => `<p>${p.trim()}</p>`)
    .join('');

  const datoCurioso = punto.datoCurioso
    ? `<div class="punto-dato-curioso">
        <div class="punto-dato-label">💡 Dato curioso</div>
        <p>${punto.datoCurioso}</p>
       </div>` : '';

  const fuente = punto.fuente
    ? `<div class="punto-fuente">Fuente: ${punto.fuente}</div>` : '';

  // Botones de navegación prev/next
  const prev = index > 0
    ? `<button class="punto-nav-btn" onclick="abrirModalPunto(${index - 1})" title="${PUNTOS_HISTORICOS[index - 1].titulo}">← Anterior</button>`
    : `<span class="punto-nav-btn punto-nav-btn--disabled">← Anterior</span>`;

  const next = index < PUNTOS_HISTORICOS.length - 1
    ? `<button class="punto-nav-btn" onclick="abrirModalPunto(${index + 1})" title="${PUNTOS_HISTORICOS[index + 1].titulo}">Siguiente →</button>`
    : `<span class="punto-nav-btn punto-nav-btn--disabled">Siguiente →</span>`;

  // Inyectar contenido
  document.getElementById('modal-punto-content').innerHTML = `
    <div class="punto-modal-cabecera">
      <div class="punto-meta-top">
        <span class="punto-num">Punto ${punto.id} <span class="punto-total">/ ${PUNTOS_HISTORICOS.length}</span></span>
        <span class="punto-categoria">${punto.emoji} ${punto.categoria}</span>
      </div>
      <h2 class="punto-titulo" id="mp-title">${punto.titulo}</h2>
      <div class="punto-periodo">${punto.periodo}</div>
      <div class="punto-subtitulo">${punto.subtitulo}</div>
    </div>

    <div class="punto-divider"></div>

    <div class="punto-modal-body">
      <div class="punto-col-media">${mediaHTML(punto)}</div>
      <div class="punto-col-texto">
        <div class="punto-texto">${parrafos}</div>
        ${datoCurioso}
        ${fuente}
      </div>
    </div>

    <div class="punto-modal-nav">
      ${prev}
      <button class="punto-nav-btn punto-nav-btn--lista" onclick="togglePanelLista(true)">☰ Lista</button>
      ${next}
    </div>
  `;

  // Abrir modal
  const modal = document.getElementById('modal-punto');
  if (modal) {
    modal.classList.add('modal--open');
    // Asegurar scroll al top del contenido
    const box = document.getElementById('modal-punto-box');
    if (box) box.scrollTop = 0;
  }
}

/** Cierra el modal del punto */
function cerrarModalPunto() {
  const modal = document.getElementById('modal-punto');
  if (modal) modal.classList.remove('modal--open');

  if (puntoActivo !== null && markers[puntoActivo]) {
    markers[puntoActivo].setIcon(crearIcono(PUNTOS_HISTORICOS[puntoActivo].id, false));
    markers[puntoActivo].setZIndex(100 + puntoActivo);
  }
  puntoActivo = null;
}

/* ================================================================
   PANEL LATERAL — lista de puntos
   ================================================================ */
function construirPanelLista() {
  const lista = document.getElementById('panel-list');
  if (!lista) return;

  PUNTOS_HISTORICOS.forEach((punto, index) => {
    const item = document.createElement('div');
    item.className = 'panel-item';
    item.setAttribute('role', 'listitem');
    item.innerHTML = `
      <div class="panel-item-num">${punto.id}</div>
      <div class="panel-item-info">
        <div class="panel-item-title">${punto.titulo}</div>
        <div class="panel-item-year">${punto.periodo}</div>
      </div>`;
    item.addEventListener('click', () => irAlPunto(index));
    lista.appendChild(item);
  });
}

/** Navega al marcador y abre su modal */
function irAlPunto(index) {
  if (window.innerWidth < 900) togglePanelLista(false);
  map.setCenter(markers[index].getPosition());
  map.setZoom(17);
  abrirModalPunto(index);
}

/** Abre/cierra el panel lateral de lista */
function togglePanelLista(force) {
  panelListOpen = force !== undefined ? force : !panelListOpen;
  const panel = document.getElementById('side-panel');
  if (panel) panel.classList.toggle('open', panelListOpen);
}

/* ================================================================
   MODAL DE GUÍA (en recorrido.html)
   ================================================================ */
function abrirModalGuia() {
  const m = document.getElementById('modal-guia-mapa');
  if (m) {
    m.classList.add('modal--open');
    document.body.style.overflow = 'hidden';
  }
}

function cerrarModalGuia() {
  const m = document.getElementById('modal-guia-mapa');
  if (m) {
    m.classList.remove('modal--open');
    document.body.style.overflow = '';
  }
}

/* ================================================================
   CONTROLES DEL MAPA
   ================================================================ */
function toggleMarcadores() {
  markersVisible = !markersVisible;
  markers.forEach(m => m.setVisible(markersVisible));
  const btn = document.getElementById('btn-toggle');
  if (btn) {
    btn.querySelector('.btn-toggle-label').textContent =
      markersVisible ? 'Ocultar Puntos' : 'Mostrar Puntos';
    btn.classList.toggle('active', !markersVisible);
  }
  if (!markersVisible) cerrarModalPunto();
}

/* ================================================================
   PLAYLIST — reproductor de audio
   ================================================================ */
function iniciarPlaylist() {
  if (!PLAYLIST.length) {
    // No hay canciones: ocultar el player
    const player = document.getElementById('playlist-player');
    if (player) player.style.display = 'none';
    return;
  }

  audioElement = new Audio();
  audioElement.volume = 0.55;

  // Si el usuario llegó desde "Explorar el recorrido", reproducir automáticamente
  const autoplay = sessionStorage.getItem('iniciarPlaylist') === '1';
  sessionStorage.removeItem('iniciarPlaylist');

  cargarCancion(playlistIndex);

  if (autoplay) {
    reproducir();
  }

  // Avanzar automáticamente al terminar la canción
  audioElement.addEventListener('ended', () => {
    avanzarCancion(1);
  });

  // Actualizar barra de progreso
  audioElement.addEventListener('timeupdate', actualizarProgreso);
}

function cargarCancion(index) {
  if (!audioElement || !PLAYLIST[index]) return;
  const cancion = PLAYLIST[index];
  audioElement.src = cancion.src;
  const nameEl = document.getElementById('pl-track-name');
  if (nameEl) nameEl.textContent = cancion.titulo;
  document.getElementById('pl-progress').style.width = '0%';
}

function reproducir() {
  if (!audioElement) return;
  audioElement.play().then(() => {
    isPlaying = true;
    actualizarBtnPlay();
  }).catch(() => {
    // El navegador bloquea autoplay sin interacción
    isPlaying = false;
    actualizarBtnPlay();
  });
}

function pausar() {
  if (!audioElement) return;
  audioElement.pause();
  isPlaying = false;
  actualizarBtnPlay();
}

function togglePlay() {
  isPlaying ? pausar() : reproducir();
}

function avanzarCancion(direccion) {
  playlistIndex = (playlistIndex + direccion + PLAYLIST.length) % PLAYLIST.length;
  cargarCancion(playlistIndex);
  if (isPlaying) reproducir();
}

function actualizarBtnPlay() {
  const icon = document.getElementById('pl-play-icon');
  if (icon) icon.textContent = isPlaying ? '⏸' : '▶';
}

function actualizarProgreso() {
  if (!audioElement || !audioElement.duration) return;
  const pct = (audioElement.currentTime / audioElement.duration) * 100;
  const bar = document.getElementById('pl-progress');
  if (bar) bar.style.width = pct + '%';
}

// Toggle mute
let isMuted = false;
function toggleMute() {
  if (!audioElement) return;
  isMuted = !isMuted;
  audioElement.muted = isMuted;
  const btn = document.getElementById('pl-mute');
  if (btn) btn.textContent = isMuted ? '🔇' : '🔊';
}

/* ================================================================
   INICIALIZACIÓN DOM
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {

  // Toggle marcadores
  const btnToggle = document.getElementById('btn-toggle');
  if (btnToggle) btnToggle.addEventListener('click', toggleMarcadores);

  // Abrir lista
  const btnPanel = document.getElementById('btn-panel');
  if (btnPanel) btnPanel.addEventListener('click', () => togglePanelLista());

  // Cerrar lista
  const btnPanelClose = document.getElementById('btn-panel-close');
  if (btnPanelClose) btnPanelClose.addEventListener('click', () => togglePanelLista(false));

  // Cerrar modal de punto
  const btnPuntoClose = document.getElementById('btn-punto-close');
  if (btnPuntoClose) btnPuntoClose.addEventListener('click', cerrarModalPunto);

  // Backdrop del modal de punto
  const mpBackdrop = document.getElementById('mp-backdrop');
  if (mpBackdrop) mpBackdrop.addEventListener('click', cerrarModalPunto);

  // Controles playlist
  const btnPlay = document.getElementById('pl-play');
  if (btnPlay) btnPlay.addEventListener('click', togglePlay);

  const btnPrev = document.getElementById('pl-prev');
  if (btnPrev) btnPrev.addEventListener('click', () => avanzarCancion(-1));

  const btnNext = document.getElementById('pl-next');
  if (btnNext) btnNext.addEventListener('click', () => avanzarCancion(1));

  const btnMute = document.getElementById('pl-mute');
  if (btnMute) btnMute.addEventListener('click', toggleMute);

  // Escape cierra modales
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      cerrarModalPunto();
      cerrarModalGuia();
    }
  });

});
