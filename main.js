/**
 * main.js — La Séptima: Ayer y Hoy
 * - Marcadores con estrella + número
 * - Polilínea dorada que une todos los puntos
 * - Halo translúcido sobre el corredor
 * - Frases narrativas GRANDES en Street View (estilo museográfico 3D)
 * - Control de volumen deslizante en la playlist
 * - Panel lateral y modal de punto histórico
 */

/* ================================================================
   PLAYLIST
   ================================================================ */
const PLAYLIST = [
  { titulo: 'Canela - Cesar Mora',               src: 'audio/cancion_1.mp3' },
  { titulo: 'La Derecha - El Puñal',             src: 'audio/cancion_2.mp3' },
  { titulo: 'La gata golosa - Fulgencio García', src: 'audio/cancion_3.mp3' },
  { titulo: 'La Calle Real',                     src: 'audio/cancion_4.mp3' },
  { titulo: 'La Calle Real (reprise)',           src: 'audio/cancion_3.mp3' }
];

/* ================================================================
   FRASES NARRATIVAS — asignadas por índice de punto (circular)
   ================================================================ */
const FRASES_SV = [
  'Aquí la ciudad aprendió a caminar su propia historia.',
  'La Séptima no se recorre: se recuerda.',
  'Cada esquina guarda una memoria que Bogotá aún no termina de contar.',
  'Por esta calle pasó el país entero.',
  'Aquí la multitud se volvió historia.',
  'Entre vitrinas, ruinas y pasos, Bogotá cambió para siempre.',
  'Esta no es solo una calle: es un archivo vivo.',
  'Donde hoy caminas, ayer ardió la ciudad.',
  'Aquí la memoria no está quieta: sigue pasando frente a nosotros.',
  'La Séptima ha sido plaza, protesta, duelo y celebración.',
  'Cada punto revela una capa distinta de Bogotá.',
  'Caminar aquí es atravesar siglos en unas pocas cuadras.',
  'La ciudad dejó huellas; este recorrido las vuelve visibles.',
  'Aquí se cruzan la historia oficial y la memoria de la calle.',
  'La Séptima sigue hablando, incluso cuando parece en silencio.'
];

/* ================================================================
   ESTADO GLOBAL
   ================================================================ */
let map;
let markers        = [];
let markersVisible = true;
let panelListOpen  = false;
let puntoActivo    = null;

let audioElement   = null;
let playlistIndex  = 0;
let isPlaying      = false;
let isMuted        = false;

let svOverlay      = null;
let svFraseTimer   = null;
let svFraseActual  = 0;
let svPanorama     = null;
let svNearestIdx   = -1;

/* ================================================================
   ESTILOS DEL MAPA — paleta sepia/histórica
   ================================================================ */
const MAP_STYLES = [
  { elementType:'geometry',          stylers:[{color:'#ebe3d5'}] },
  { elementType:'labels.text.fill',  stylers:[{color:'#523735'}] },
  { elementType:'labels.text.stroke',stylers:[{color:'#f5f1eb'}] },
  { featureType:'administrative',    elementType:'geometry.stroke',  stylers:[{color:'#c9b2a6'}] },
  { featureType:'landscape.natural', elementType:'geometry',         stylers:[{color:'#dfd2ae'}] },
  { featureType:'poi',               elementType:'geometry',         stylers:[{color:'#dfd2ae'}] },
  { featureType:'poi',               elementType:'labels.text.fill', stylers:[{color:'#93817c'}] },
  { featureType:'poi.park',          elementType:'geometry.fill',    stylers:[{color:'#a5b076'}] },
  { featureType:'poi.park',          elementType:'labels.text.fill', stylers:[{color:'#447530'}] },
  { featureType:'road',              elementType:'geometry',         stylers:[{color:'#f5f1eb'}] },
  { featureType:'road.arterial',     elementType:'geometry',         stylers:[{color:'#fdfcf8'}] },
  { featureType:'road.highway',      elementType:'geometry',         stylers:[{color:'#f8c967'}] },
  { featureType:'road.highway',      elementType:'geometry.stroke',  stylers:[{color:'#e9bc62'}] },
  { featureType:'road.local',        elementType:'labels.text.fill', stylers:[{color:'#806b63'}] },
  { featureType:'transit.line',      elementType:'geometry',         stylers:[{color:'#dfd2ae'}] },
  { featureType:'water',             elementType:'geometry.fill',    stylers:[{color:'#b9d3c2'}] },
  { featureType:'water',             elementType:'labels.text.fill', stylers:[{color:'#92998d'}] }
];

/* ================================================================
   ÍCONO SVG — estrella + número (punto 1 especial)
   ================================================================ */
function crearIcono(numero, activo) {

  // ── PUNTO 1: pin más grande con "INICIO" ─────────────────────
  if (numero === 1) {
    const bg   = activo ? '#c8a84b' : '#0e0b06';
    const star = activo ? '#0e0b06' : '#c8a84b';
    const text = activo ? '#0e0b06' : '#f0d878';
    const gId  = 'g1' + (activo ? 'a' : 'i');
    const svg  = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="84" viewBox="0 0 64 84">
      <defs>
        <filter id="sh1" x="-40%" y="-10%" width="180%" height="160%">
          <feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="rgba(200,168,75,0.55)"/>
        </filter>
        <radialGradient id="${gId}" cx="50%" cy="30%" r="65%">
          <stop offset="0%" stop-color="${activo ? '#f5e070' : '#1e1808'}"/>
          <stop offset="100%" stop-color="${bg}"/>
        </radialGradient>
      </defs>
      <path filter="url(#sh1)"
        d="M32 2 C16 2 4 14 4 30 C4 52 32 82 32 82 C32 82 60 52 60 30 C60 14 48 2 32 2 Z"
        fill="url(#${gId})" stroke="#c8a84b" stroke-width="2.5"/>
      <circle cx="32" cy="30" r="19" fill="none" stroke="${star}" stroke-width="0.7" stroke-dasharray="2,4" opacity="0.6"/>
      <path d="M32,14 L34.8,22.5 L43.5,22.5 L36.5,28 L39.3,36.5 L32,31 L24.7,36.5 L27.5,28 L20.5,22.5 L29.2,22.5 Z"
        fill="${star}"/>
      <text x="32" y="57" text-anchor="middle"
        font-family="'Playfair Display',Georgia,serif"
        font-weight="900" font-size="8" letter-spacing="1.5"
        fill="${text}">INICIO</text>
    </svg>`.trim();
    return {
      url:        'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg),
      scaledSize: new google.maps.Size(64, 84),
      anchor:     new google.maps.Point(32, 82)
    };
  }

  // ── RESTO DE PUNTOS ──────────────────────────────────────────
  const bg      = activo ? '#c8a84b' : '#1c1810';
  const starCol = activo ? '#1c1810' : '#e8c96a';
  const numCol  = activo ? '#1c1810' : '#c8a84b';
  const stroke  = activo ? '#e8c96a' : '#c8a84b';
  const starPath = 'M22,10 L23.5,15 L28,15 L24.5,18 L26,23 L22,20 L18,23 L19.5,18 L16,15 L20.5,15 Z';

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="62" viewBox="0 0 48 62">
    <defs>
      <filter id="sh${numero}" x="-30%" y="-15%" width="160%" height="165%">
        <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="rgba(10,8,4,0.7)"/>
      </filter>
    </defs>
    <path filter="url(#sh${numero})"
      d="M24 2 C12 2 3 11 3 23 C3 38 24 60 24 60 C24 60 45 38 45 23 C45 11 36 2 24 2 Z"
      fill="${bg}" stroke="${stroke}" stroke-width="2"/>
    <path d="${starPath}" fill="${starCol}" stroke="none"/>
    <text x="24" y="42"
      text-anchor="middle"
      font-family="'Playfair Display',Georgia,serif"
      font-weight="900"
      font-size="${numero > 9 ? '10' : '12'}"
      fill="${numCol}">${numero}</text>
  </svg>`.trim();

  return {
    url:        'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg),
    scaledSize: new google.maps.Size(48, 62),
    anchor:     new google.maps.Point(24, 60)
  };
}

/* ================================================================
   HALO TRANSLÚCIDO DEL CORREDOR
   ================================================================ */
function crearHaloRecorrido() {
  const cLat = 4.6025, cLng = -74.0738;
  const latR = 0.0080, lngR = 0.0035;
  const tilt = -2.82;
  const pts  = [];

  for (let d = 0; d <= 360; d += 8) {
    const r = d * Math.PI / 180;
    const x = lngR * Math.cos(r), y = latR * Math.sin(r);

    pts.push({
      lat: cLat + y * Math.cos(tilt) - x * Math.sin(tilt),
      lng: cLng + y * Math.sin(tilt) + x * Math.cos(tilt)
    });
  }

  new google.maps.Polygon({
    paths: pts,
    strokeColor: '#c8a84b',
    strokeOpacity: 0.3,
    strokeWeight: 1.2,
    fillColor: '#c8a84b',
    fillOpacity: 0.59,
    map: map,
    zIndex: 1
  });

}

/* ================================================================
   INICIALIZACIÓN DEL MAPA
   ================================================================ */
function initMap() {
  const centro = { lat: 4.6015, lng: -74.0735 };

  map = new google.maps.Map(document.getElementById('map'), {
    center: centro, zoom: 15, styles: MAP_STYLES,
    mapTypeControl: false, fullscreenControl: false,
    streetViewControl: true, zoomControl: true,
    zoomControlOptions:       { position: google.maps.ControlPosition.RIGHT_CENTER },
    streetViewControlOptions: { position: google.maps.ControlPosition.RIGHT_CENTER }
  });

  crearHaloRecorrido();

  // Polilínea dorada del recorrido
  new google.maps.Polyline({
    path:          PUNTOS_HISTORICOS.map(p => ({ lat: p.lat, lng: p.lng })),
    geodesic:      true,
    strokeColor:   '#c8a84b',
    strokeOpacity: 0.55,
    strokeWeight:  2.5,
    map,
    zIndex: 2
  });

  // Marcadores
  PUNTOS_HISTORICOS.forEach((punto, index) => {
    const marker = new google.maps.Marker({
      position:  { lat: punto.lat, lng: punto.lng },
      map,
      title:     punto.titulo,
      icon:      crearIcono(punto.id, false),
      animation: google.maps.Animation.DROP,
      zIndex:    100 + index
    });
    marker.addListener('click', () => abrirModalPunto(index));
    marker.addListener('mouseover', () => {
      if (puntoActivo !== index) marker.setAnimation(google.maps.Animation.BOUNCE);
    });
    marker.addListener('mouseout', () => marker.setAnimation(null));
    markers.push(marker);
  });

  map.addListener('click', () => cerrarModalPunto());
  construirPanelLista();
  iniciarPlaylist();
  configurarFrasesStreetView();
  agregarLabelInicio();
  setTimeout(mostrarSVHint, 2000);
}

/* ================================================================
   ETIQUETA "COMIENZA AQUÍ" SOBRE EL PUNTO 1
   ================================================================ */
function agregarLabelInicio() {
  const infoLabel = new google.maps.InfoWindow({
    content: '<div class="mapa-inicio-label"><span class="mil-arrow">▼</span><span>Comienza aquí</span></div>',
    disableAutoPan: true
  });
  infoLabel.open(map, markers[0]);
  markers[0].addListener('click', () => infoLabel.close());
  // Rebote inicial para llamar la atención
  markers[0].setAnimation(google.maps.Animation.BOUNCE);
  setTimeout(() => markers[0].setAnimation(null), 3000);
}

/* ================================================================
   HINT STREET VIEW — orientación flotante
   ================================================================ */
function mostrarSVHint() {
  const mapEl = document.getElementById('map');
  if (!mapEl) return;
  const hint = document.createElement('div');
  hint.id = 'sv-hint';
  hint.innerHTML = `
    <div class="svh-inner">
      <div class="svh-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="8" r="3"/><path d="M6 20v-2a6 6 0 0 1 12 0v2"/>
        </svg>
      </div>
      <div class="svh-texto">
        <strong>Recorre la Séptima en Street View</strong>
        <span>Arrastra el muñequito naranja al mapa</span>
      </div>
      <span class="svh-flecha">→</span>
    </div>
    <button class="svh-cerrar" aria-label="Cerrar">✕</button>`;
  mapEl.appendChild(hint);
  hint.querySelector('.svh-cerrar').addEventListener('click', () => hint.remove());
  setTimeout(() => { if (hint.parentNode) hint.remove(); }, 10000);
  const pano = map.getStreetView();
  pano.addListener('visible_changed', () => {
    if (pano.getVisible() && hint.parentNode) hint.remove();
  });
}

/* ================================================================
   FRASES EN STREET VIEW — panel grande museográfico con efecto 3D
   ================================================================ */
function configurarFrasesStreetView() {
  svPanorama = map.getStreetView();

  svPanorama.addListener('visible_changed', () => {
    if (svPanorama.getVisible()) {
      mostrarFrasesGrandes();
    } else {
      ocultarFrasesGrandes();
    }
  });

  // Actualizar frase al moverse
  svPanorama.addListener('position_changed', () => {
    if (svPanorama.getVisible()) actualizarFrasePorPosicion();
  });
}

function distanciaM(a, b) {
  const R = 6371000;
  const dLat = (b.lat - a.lat) * Math.PI / 180;
  const dLng = (b.lng - a.lng) * Math.PI / 180;
  const h = Math.sin(dLat/2)**2 + Math.cos(a.lat*Math.PI/180)*Math.cos(b.lat*Math.PI/180)*Math.sin(dLng/2)**2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

function actualizarFrasePorPosicion() {
  const pos = svPanorama.getPosition();
  if (!pos) return;
  const userPos = { lat: pos.lat(), lng: pos.lng() };
  let minDist = Infinity, nearestIdx = 0;
  PUNTOS_HISTORICOS.forEach((p, i) => {
    const d = distanciaM(userPos, { lat: p.lat, lng: p.lng });
    if (d < minDist) { minDist = d; nearestIdx = i; }
  });
  if (nearestIdx !== svNearestIdx) {
    svNearestIdx = nearestIdx;
    cambiarFrase(nearestIdx % FRASES_SV.length);
  }
}

function mostrarFrasesGrandes() {
  if (svOverlay) return;
  svNearestIdx = -1;
  svFraseActual = 0;

  svOverlay = document.createElement('div');
  svOverlay.id = 'sv-frase-grande';
  svOverlay.innerHTML = buildFraseHTML(FRASES_SV[0], 1);
  document.getElementById('map').appendChild(svOverlay);

  // Timer cíclico de respaldo cada 6 segundos
  svFraseTimer = setInterval(() => {
    if (svNearestIdx < 0) {
      svFraseActual = (svFraseActual + 1) % FRASES_SV.length;
      cambiarFrase(svFraseActual);
    }
  }, 6000);
}

function buildFraseHTML(frase, puntoId) {
  return `
    <div class="svf-panel">
      <div class="svf-inner">
        <div class="svf-deco" aria-hidden="true">
          <span class="svf-linea"></span>
          <span class="svf-estrella">✦</span>
          <span class="svf-linea"></span>
        </div>
        <p class="svf-texto" id="svf-texto">${frase}</p>
        <div class="svf-label">La Séptima · Ayer y Hoy</div>
      </div>
    </div>`;
}

function cambiarFrase(idx) {
  const el = document.getElementById('svf-texto');
  if (!el) return;
  el.classList.add('svf-fade-out');
  setTimeout(() => {
    el.textContent = FRASES_SV[idx % FRASES_SV.length];
    el.classList.remove('svf-fade-out');
    el.classList.add('svf-fade-in');
    setTimeout(() => el.classList.remove('svf-fade-in'), 500);
  }, 400);
}

function ocultarFrasesGrandes() {
  if (svFraseTimer) { clearInterval(svFraseTimer); svFraseTimer = null; }
  if (svOverlay) { svOverlay.remove(); svOverlay = null; }
  svNearestIdx = -1;
}

/* ================================================================
   MODAL DEL PUNTO HISTÓRICO
   ================================================================ */
function placeholderDecorativo(punto, slotIdx) {
  const v = (punto.id + slotIdx) % 5;
  const variantes = [
    `<span class="ph-ornamento">✦</span><p class="ph-texto">Imagen de archivo<br/>próximamente</p>`,
    `<span class="ph-numero">${String(punto.id).padStart(2,'0')}</span><p class="ph-texto">Memoria visual<br/>en construcción</p>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" class="ph-icon"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><circle cx="12" cy="13" r="3"/></svg><p class="ph-texto">Fotografía de archivo<br/>próximamente</p>`,
    `<p class="ph-cita">"La ciudad guarda<br/>sus imágenes"</p><span class="ph-ornamento ph-ornamento--sm">✦ ✦ ✦</span>`,
    `<span class="ph-ornamento ph-ornamento--grande">VII</span><p class="ph-texto">Archivo visual<br/>en preparación</p>`
  ];
  return variantes[v];
}

function mediaHTML(punto) {
  const imgs = (punto.imagenes || []).filter(s => s && s.trim()).slice(0, 2);

  const slot = (src, alt, idx) => src
    ? `<div class="pm-slot"><img src="${src}" alt="${alt}" class="pm-img" loading="lazy"></div>`
    : `<div class="pm-slot pm-slot--vacio">${placeholderDecorativo(punto, idx)}</div>`;

  return `<div class="pm-galeria">
    ${slot(imgs[0], punto.titulo + ' — imagen 1', 0)}
    ${slot(imgs[1], punto.titulo + ' — imagen 2', 1)}
  </div>`;
}

function abrirModalPunto(index) {
  const punto = PUNTOS_HISTORICOS[index];
  if (!punto) return;

  if (puntoActivo !== null && markers[puntoActivo]) {
    markers[puntoActivo].setIcon(crearIcono(PUNTOS_HISTORICOS[puntoActivo].id, false));
    markers[puntoActivo].setZIndex(100 + puntoActivo);
    markers[puntoActivo].setAnimation(null);
  }
  puntoActivo = index;
  markers[index].setIcon(crearIcono(punto.id, true));
  markers[index].setZIndex(999);
  map.panTo(markers[index].getPosition());

  const parrafos = punto.texto.split('\n\n').filter(p=>p.trim()).map(p=>`<p>${p.trim()}</p>`).join('');
  const datoCurioso = punto.datoCurioso ? `<div class="punto-dato-curioso"><span class="pdc-label">✦ Dato curioso</span><p>${punto.datoCurioso}</p></div>` : '';
  const fuente = punto.fuente ? `<p class="punto-fuente">Fuente: ${punto.fuente}</p>` : '';
  const total = PUNTOS_HISTORICOS.length;
  const prevOk = index > 0, nextOk = index < total - 1;

  document.getElementById('modal-punto-content').innerHTML = `
    <div class="punto-modal-header">
      <div class="punto-modal-meta">
        <span class="punto-modal-cat">${punto.categoria||'Historia'}</span>
        <span class="punto-modal-period">${punto.periodo||''}</span>
      </div>
      <h2 class="punto-modal-titulo" id="mp-title">${punto.id}. ${punto.titulo}</h2>
    </div>
    <div class="punto-modal-body">
      <div class="punto-modal-media">${mediaHTML(punto)}</div>
      <div class="punto-modal-texto">${parrafos}${datoCurioso}${fuente}</div>
    </div>
    <div class="punto-modal-nav">
      <button class="punto-nav-btn${prevOk?'':' punto-nav-btn--disabled'}"
        onclick="${prevOk?`abrirModalPunto(${index-1})`:'void(0)'}">← Anterior</button>
      <button class="punto-nav-btn punto-nav-btn--lista" onclick="togglePanelLista(true)">Ver todos</button>
      <button class="punto-nav-btn${nextOk?'':' punto-nav-btn--disabled'}"
        onclick="${nextOk?`abrirModalPunto(${index+1})`:'void(0)'}">Siguiente →</button>
    </div>`;

  const modal = document.getElementById('modal-punto');
  if (modal) { modal.classList.add('modal--open'); document.body.style.overflow='hidden'; }
}

function cerrarModalPunto() {
  const modal = document.getElementById('modal-punto');
  if (modal) modal.classList.remove('modal--open');
  document.body.style.overflow = '';
  if (puntoActivo !== null && markers[puntoActivo]) {
    markers[puntoActivo].setIcon(crearIcono(PUNTOS_HISTORICOS[puntoActivo].id, false));
    markers[puntoActivo].setZIndex(100 + puntoActivo);
  }
  puntoActivo = null;
}

/* ================================================================
   PANEL LATERAL
   ================================================================ */
function construirPanelLista() {
  const lista = document.getElementById('panel-list');
  if (!lista) return;
  PUNTOS_HISTORICOS.forEach((punto, index) => {
    const item = document.createElement('div');
    item.className = 'panel-item' + (punto.id === 1 ? ' panel-item--inicio' : '');
    item.setAttribute('role', 'listitem');
    if (punto.id === 1) {
      item.innerHTML = `
        <div class="panel-item-num panel-item-num--inicio">✦</div>
        <div class="panel-item-info">
          <div class="panel-item-title">${punto.titulo}</div>
          <div class="panel-item-year">${punto.periodo}</div>
          <span class="panel-inicio-badge">✦ Inicio del recorrido</span>
        </div>`;
    } else {
      item.innerHTML = `
        <div class="panel-item-num">${punto.id}</div>
        <div class="panel-item-info">
          <div class="panel-item-title">${punto.titulo}</div>
          <div class="panel-item-year">${punto.periodo}</div>
        </div>`;
    }
    item.addEventListener('click', () => irAlPunto(index));
    lista.appendChild(item);
  });
}

function irAlPunto(index) {
  if (window.innerWidth < 900) togglePanelLista(false);
  map.setCenter(markers[index].getPosition());
  map.setZoom(17);
  abrirModalPunto(index);
}

function togglePanelLista(force) {
  panelListOpen = force !== undefined ? force : !panelListOpen;
  const panel = document.getElementById('side-panel');
  if (panel) panel.classList.toggle('open', panelListOpen);
}

/* ================================================================
   MODAL DE GUÍA
   ================================================================ */
function abrirModalGuia() {
  const m = document.getElementById('modal-guia-mapa');
  if (m) { m.classList.add('modal--open'); document.body.style.overflow='hidden'; }
}
function cerrarModalGuia() {
  const m = document.getElementById('modal-guia-mapa');
  if (m) { m.classList.remove('modal--open'); document.body.style.overflow=''; }
}

/* ================================================================
   CONTROLES DEL MAPA
   ================================================================ */
function toggleMarcadores() {
  markersVisible = !markersVisible;
  markers.forEach(m => m.setVisible(markersVisible));
  const btn = document.getElementById('btn-toggle');
  if (btn) {
    btn.querySelector('.btn-toggle-label').textContent = markersVisible ? 'Ocultar Puntos' : 'Mostrar Puntos';
    btn.classList.toggle('active', !markersVisible);
  }
  if (!markersVisible) cerrarModalPunto();
}

/* ================================================================
   PLAYLIST — con control de volumen
   ================================================================ */
function iniciarPlaylist() {
  if (!PLAYLIST.length) {
    const player = document.getElementById('playlist-player');
    if (player) player.style.display = 'none';
    return;
  }
  audioElement = new Audio();
  audioElement.volume = 0.55;

  const autoplay = sessionStorage.getItem('iniciarPlaylist') === '1';
  sessionStorage.removeItem('iniciarPlaylist');
  cargarCancion(playlistIndex);
  if (autoplay) reproducir();

  audioElement.addEventListener('ended', () => avanzarCancion(1));
  audioElement.addEventListener('timeupdate', actualizarProgreso);

  // Inicializar slider de volumen
  const volSlider = document.getElementById('pl-volume');
  if (volSlider) {
    volSlider.value = Math.round(audioElement.volume * 100);
    volSlider.addEventListener('input', () => {
      if (!audioElement) return;
      const v = volSlider.value / 100;
      audioElement.volume = v;
      isMuted = v === 0;
      audioElement.muted = isMuted;
      actualizarIconoMute();
    });
  }
}

function cargarCancion(index) {
  if (!audioElement || !PLAYLIST[index]) return;
  audioElement.src = PLAYLIST[index].src;
  const nameEl = document.getElementById('pl-track-name');
  if (nameEl) nameEl.textContent = PLAYLIST[index].titulo;
  const bar = document.getElementById('pl-progress');
  if (bar) bar.style.width = '0%';
}

function reproducir() {
  if (!audioElement) return;
  audioElement.play().then(() => { isPlaying=true; actualizarBtnPlay(); })
    .catch(() => { isPlaying=false; actualizarBtnPlay(); });
}

function pausar() {
  if (!audioElement) return;
  audioElement.pause(); isPlaying=false; actualizarBtnPlay();
}

function togglePlay() { isPlaying ? pausar() : reproducir(); }

function avanzarCancion(dir) {
  playlistIndex = (playlistIndex + dir + PLAYLIST.length) % PLAYLIST.length;
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
  const bar  = document.getElementById('pl-progress');
  if (bar) bar.style.width = pct + '%';
}

function toggleMute() {
  if (!audioElement) return;
  isMuted = !isMuted;
  audioElement.muted = isMuted;
  actualizarIconoMute();
  const volSlider = document.getElementById('pl-volume');
  if (volSlider && !isMuted) volSlider.value = Math.round(audioElement.volume * 100);
  if (volSlider && isMuted) volSlider.value = 0;
}

function actualizarIconoMute() {
  const btn = document.getElementById('pl-mute');
  if (btn) btn.textContent = isMuted ? '🔇' : '🔊';
}

/* ================================================================
   INICIALIZACIÓN DOM
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const btnToggle    = document.getElementById('btn-toggle');
  const btnPanel     = document.getElementById('btn-panel');
  const btnPanelClose= document.getElementById('btn-panel-close');
  const btnPuntoClose= document.getElementById('btn-punto-close');
  const mpBackdrop   = document.getElementById('mp-backdrop');
  const btnPlay      = document.getElementById('pl-play');
  const btnPrev      = document.getElementById('pl-prev');
  const btnNext      = document.getElementById('pl-next');
  const btnMute      = document.getElementById('pl-mute');

  if (btnToggle)     btnToggle.addEventListener('click', toggleMarcadores);
  if (btnPanel)      btnPanel.addEventListener('click', () => togglePanelLista());
  if (btnPanelClose) btnPanelClose.addEventListener('click', () => togglePanelLista(false));
  if (btnPuntoClose) btnPuntoClose.addEventListener('click', cerrarModalPunto);
  if (mpBackdrop)    mpBackdrop.addEventListener('click', cerrarModalPunto);
  if (btnPlay)       btnPlay.addEventListener('click', togglePlay);
  if (btnPrev)       btnPrev.addEventListener('click', () => avanzarCancion(-1));
  if (btnNext)       btnNext.addEventListener('click', () => avanzarCancion(1));
  if (btnMute)       btnMute.addEventListener('click', toggleMute);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { cerrarModalPunto(); cerrarModalGuia(); }
  });
});
