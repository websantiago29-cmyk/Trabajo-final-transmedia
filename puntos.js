/**
 * puntos.js — La Séptima: Ayer y Hoy
 * Arreglo de 10 puntos históricos entre el Museo Nacional y la Plaza de Bolívar.
 * Cada punto contiene: id, lat, lng, título, fecha, descripción, categoría.
 */

const PUNTOS_HISTORICOS = [
  {
    id: 1,
    lat: 4.61679,
    lng: -74.06617,
    titulo: "Museo Nacional de Colombia",
    fecha: "1823",
    descripcion: "Fundado por Francisco de Paula Santander como el primer museo de la república, el edificio fue construido originalmente como cárcel en 1874. Sobre la Carrera Séptima se erige como guardián de la memoria nacional, albergando más de 20.000 piezas.",
    categoria: "Cultura & Patrimonio",
    emoji: "🏛️"
  },
  {
    id: 2,
    lat: 4.61400,
    lng: -74.06500,
    titulo: "El Palacio de la Gobernación de Cundinamarca",
    fecha: "1885",
    descripcion: "En este sector funcionaba a fines del siglo XIX el corazón administrativo del departamento. La Séptima fue testigo de las marchas civiles y militares que partían desde sus puertas en época de la Regeneración.",
    categoria: "Historia Política",
    emoji: "⚖️"
  },
  {
    id: 3,
    lat: 4.61110,
    lng: -74.06380,
    titulo: "Tranvía Eléctrico de Bogotá",
    fecha: "1910",
    descripcion: "En 1910 los primeros tranvías eléctricos surcaron la Carrera Séptima, reemplazando las viejas mulas. El trayecto de la Séptima era el más concurrido, uniendo el centro con los barrios del norte emergentes como Chapinero.",
    categoria: "Transporte & Modernización",
    emoji: "🚃"
  },
  {
    id: 4,
    lat: 4.60850,
    lng: -74.06270,
    titulo: "El 9 de Abril de 1948 — El Bogotazo",
    fecha: "9 de abril de 1948",
    descripcion: "Sobre esta cuadra de la Séptima, minutos después del asesinato de Jorge Eliécer Gaitán, miles de ciudadanos salieron a las calles. Las llamas consumieron edificios históricos. El Bogotazo cambió para siempre el rostro del centro de Bogotá.",
    categoria: "Historia Trágica",
    emoji: "🔥"
  },
  {
    id: 5,
    lat: 4.60620,
    lng: -74.06200,
    titulo: "Plaza de Toros La Santamaría",
    fecha: "1931",
    descripcion: "Inaugurada en 1931 con diseño del arquitecto Esguerra, La Santamaría fue escenario de corridas de toros durante casi un siglo. La controversia sobre su uso ha marcado la historia cultural y política de la capital desde los años 90.",
    categoria: "Cultura & Espectáculo",
    emoji: "🏟️"
  },
  {
    id: 6,
    lat: 4.60350,
    lng: -74.06130,
    titulo: "El Gran Hotel Granada",
    fecha: "1929",
    descripcion: "En la calle 17 con Séptima funcionó el lujoso Hotel Granada, punto de encuentro de la élite bogotana, diplomáticos y artistas internacionales. Gabriel García Márquez lo frecuentó en sus años de periodista en Bogotá, hacia 1954.",
    categoria: "Vida Social & Turismo",
    emoji: "🏨"
  },
  {
    id: 7,
    lat: 4.60100,
    lng: -74.06080,
    titulo: "Librería Lerner — La Calle del Libro",
    fecha: "1938",
    descripcion: "En los años 40 y 50, el tramo de la Séptima entre calles 19 y 20 se convirtió en la 'calle del libro'. Librerías como Lerner, Central y Mundo dieron a Bogotá su reputación de ciudad lectora, reuniendo a intelectuales y bohemios de la época.",
    categoria: "Cultura & Letras",
    emoji: "📚"
  },
  {
    id: 8,
    lat: 4.59800,
    lng: -74.06020,
    titulo: "Proclama de la Independencia — 1810",
    fecha: "20 de julio de 1810",
    descripcion: "Cerca del Parque Santander, en lo que hoy es el cruce de la Séptima con la Calle 16, los patriotas recorrían la vía para reunirse en las casas conspiradoras. La Séptima fue la ruta simbólica de los criollos que el 20 de julio de 1810 proclamaron la independencia.",
    categoria: "Independencia",
    emoji: "🎖️"
  },
  {
    id: 9,
    lat: 4.59530,
    lng: -74.05940,
    titulo: "Edificio Liévano — Alcaldía Mayor",
    fecha: "1905 – 1960",
    descripcion: "Construido entre 1905 y 1960 frente a la Plaza de Bolívar, el edificio Liévano es sede de la Alcaldía Mayor de Bogotá. Su fachada neoclásica fue restaurada en varias ocasiones y es hoy uno de los iconos del skyline del centro histórico.",
    categoria: "Arquitectura & Gobierno",
    emoji: "🏛️"
  },
  {
    id: 10,
    lat: 4.59763,
    lng: -74.07587,
    titulo: "Plaza de Bolívar — Corazón de Bogotá",
    fecha: "Siglo XVI – presente",
    descripcion: "La Plaza de Bolívar, punto final del recorrido, ha sido centro de la vida bogotana desde 1539. Fundada por Gonzalo Jiménez de Quesada, ha sido escenario de mercados, ejecuciones, proclamas, desfiles militares, protestas y festejos populares.",
    categoria: "Centro Histórico",
    emoji: "⭐"
  }
];
