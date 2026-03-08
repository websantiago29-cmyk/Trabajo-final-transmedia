/**
 * puntos.js — La Séptima: Ayer y Hoy
 * 18 puntos históricos: Cra. 7 #18-50 (Septimazo) → Plaza de Bolívar
 *
 * Campos por punto:
 *   id, lat, lng, titulo, periodo, subtitulo, categoria, emoji,
 *   texto, datoCurioso, fuente,
 *   imagenes: ["ruta1.jpg", "ruta2.jpg"],   ← hasta 3 imágenes
 *   video: "ruta.mp4" o "",                 ← opcional
 *   audio: ""                               ← opcional, futuro uso
 *
 * Para agregar imágenes: reemplaza las rutas en el array imagenes[].
 * Para agregar video: escribe la ruta en el campo video.
 * Los marcadores en el mapa están ordenados de norte a sur (Calle 24 → Plaza Bolívar).
 */

const PUNTOS_HISTORICOS = [

  // ── 1 ─────────────────────────────────────────────────────────────────
  {
    id: 1,
    lat: 4.6051619,
    lng: -74.0716631,
    titulo: "El Septimazo",
    periodo: "Décadas recientes",
    subtitulo: "Peatonalización y cultura popular",
    categoria: "Espacio Público",
    emoji: "🎭",
    texto: "En las últimas décadas, el tramo de la Carrera Séptima entre las calles 19 y 26 se transformó en uno de los espacios peatonales más vivos del centro de Bogotá. Lo que antes era una vía dominada por buses y carros se convirtió en un corredor cultural donde conviven artistas callejeros, vendedores, músicos, manifestaciones y encuentros ciudadanos.\n\nEste fenómeno urbano conocido popularmente como 'El Septimazo' refleja cómo la ciudad resignificó la calle como espacio de encuentro y expresión. Hoy, caminar por este tramo es observar una mezcla de memoria, protesta, comercio y cultura popular que sigue redefiniendo el significado de la Séptima en la vida cotidiana de Bogotá.",
    datoCurioso: "Cada domingo el Septimazo se convierte en escenario de más de cien artistas callejeros simultáneos, convirtiendo la calle en uno de los mercados informales de arte más grandes del país.",
    fuente: "Archivo de Bogotá / IDPC",
    imagenes: [
      "images/p01-septimazo-1.jpg",
      "images/p01-septimazo-2.jpg"
    ],
    video: "",
    audio: ""
  },

  // ── 2 ─────────────────────────────────────────────────────────────────
  {
    id: 2,
    lat: 4.6013797,
    lng: -74.0733202,
    titulo: "Edificio El Tiempo",
    periodo: "Siglo XX — 1952",
    subtitulo: "Prensa, censura y poder político",
    categoria: "Historia de la Prensa",
    emoji: "📰",
    texto: "El periódico El Tiempo, uno de los más importantes de Colombia, tuvo una de sus sedes históricas en el centro de Bogotá, cerca de la Carrera Séptima. Desde allí se narraron algunos de los acontecimientos más importantes del país durante el siglo XX.\n\nEn 1952, durante el gobierno del general Gustavo Rojas Pinilla, el edificio fue atacado e incendiado en medio de la censura contra la prensa. El episodio refleja las tensiones entre poder político y libertad de expresión que han marcado distintos momentos de la historia colombiana.",
    datoCurioso: "El incendio de las instalaciones de El Tiempo en 1952 fue parte de una oleada de ataques contra medios de comunicación críticos al régimen militar, que también afectó al periódico El Espectador.",
    fuente: "Archivo histórico El Tiempo / Biblioteca Nacional",
    imagenes: [
      "images/p02-eltiempo-1.jpg",
      "images/p02-eltiempo-2.jpg"
    ],
    video: "",
    audio: ""
  },

  // ── 3 ─────────────────────────────────────────────────────────────────
  {
    id: 3,
    lat: 4.5996,
    lng: -74.074652,
    titulo: "Incendio del Almacén Vida",
    periodo: "16 de diciembre de 1958",
    subtitulo: "Una tragedia que marcó el comercio del centro",
    categoria: "Tragedia Urbana",
    emoji: "🔥",
    texto: "El 16 de diciembre de 1958 ocurrió una de las tragedias urbanas más recordadas del centro de Bogotá: el incendio del Almacén Vida, un popular comercio ubicado en la Carrera Séptima. El fuego se propagó rápidamente por el edificio, generando una situación caótica que dejó decenas de víctimas.\n\nLa tragedia conmocionó a la ciudad y reveló las deficiencias en las condiciones de seguridad de muchos edificios comerciales de la época. Aunque con el tiempo el hecho fue eclipsado por otros eventos históricos del centro, el incendio del Almacén Vida permanece como uno de los episodios más trágicos en la historia del comercio de la Séptima.",
    datoCurioso: "El incendio ocurrió durante las compras navideñas, cuando el almacén estaba lleno de clientes. La tragedia impulsó reformas en los códigos de construcción y seguridad en edificios comerciales de Bogotá.",
    fuente: "Hemeroteca El Tiempo / Archivo de Bogotá",
    imagenes: [
      "images/p03-incendio-1.jpg",
      "images/p03-incendio-2.jpg"
    ],
    video: "",
    audio: ""
  },

  // ── 4 ─────────────────────────────────────────────────────────────────
  {
    id: 4,
    lat: 4.6027263,
    lng: -74.0726525,
    titulo: "Edificio Avianca / Hotel Regina",
    periodo: "1948 — 1973",
    subtitulo: "Dos incendios que marcaron la historia de Bogotá",
    categoria: "Arquitectura & Tragedia",
    emoji: "🏙️",
    texto: "En este lugar se encontraba el Hotel Regina, uno de los edificios más representativos del centro de Bogotá en la primera mitad del siglo XX. Durante el Bogotazo de 1948, el hotel fue incendiado en medio de los disturbios que siguieron al asesinato de Jorge Eliécer Gaitán.\n\nAños después se construyó el Edificio Avianca, uno de los primeros rascacielos modernos del país. Sin embargo, en 1973 el edificio sufrió un devastador incendio que se convirtió en uno de los más recordados de la historia de la ciudad. El lugar resume dos momentos distintos de crisis urbana que marcaron la memoria del centro de Bogotá.",
    datoCurioso: "El Edificio Avianca, inaugurado en 1969, fue durante años el más alto de Colombia con sus 37 pisos. El incendio de 1973 ocurrió mientras el edificio aún era relativamente nuevo y generó un gran debate sobre seguridad en rascacielos.",
    fuente: "IDPC / Archivo de Bogotá",
    imagenes: [
      "images/p04-avianca-1.jpg",
      "images/p04-avianca-2.jpg"
    ],
    video: "",
    audio: ""
  },

  // ── 5 ─────────────────────────────────────────────────────────────────
  {
    id: 5,
    lat: 4.6021349,
    lng: -74.0729634,
    titulo: "Hotel Granada",
    periodo: "Siglo XX — Demolición",
    subtitulo: "La elegancia que desapareció del centro",
    categoria: "Vida Social & Arquitectura",
    emoji: "🏨",
    texto: "Durante el siglo XX, el Hotel Granada fue uno de los edificios más elegantes y prestigiosos del centro de Bogotá. Ubicado cerca del actual Parque Santander, representaba el auge de la vida social, política y cultural de la ciudad, atrayendo a diplomáticos, empresarios y visitantes extranjeros.\n\nCon el paso de las décadas, el centro de Bogotá cambió profundamente y muchos de sus edificios históricos fueron reemplazados. El Hotel Granada fue demolido como parte de las transformaciones urbanas del sector, dando paso a nuevas construcciones como las del Banco de la República, reflejando la transición del centro tradicional hacia un centro financiero e institucional.",
    datoCurioso: "El Hotel Granada era considerado el establecimiento hotelero más lujoso de Colombia en su época. En sus salones se celebraron acuerdos diplomáticos y recepciones de estado que marcaron la historia política del país.",
    fuente: "Museo de Bogotá / Archivo fotográfico Saúl Orduz",
    imagenes: [
      "images/p05-granada-1.jpg",
      "images/p05-granada-2.jpg"
    ],
    video: "",
    audio: ""
  },

  // ── 6 ─────────────────────────────────────────────────────────────────
  {
    id: 6,
    lat: 4.6014747,
    lng: -74.073363,
    titulo: "La Loca Margarita",
    periodo: "1920 — 1940",
    subtitulo: "Un personaje que la ciudad no pudo olvidar",
    categoria: "Memoria Popular",
    emoji: "👒",
    texto: "Entre las décadas de 1920 y 1940, una mujer conocida como 'La Loca Margarita' se convirtió en uno de los personajes más famosos del centro de Bogotá. Margarita Villaquirá caminaba diariamente por la Carrera Séptima con su ropa extravagante y su actitud desafiante frente a la sociedad.\n\nAunque muchos la consideraban simplemente una figura pintoresca de la ciudad, con el tiempo se convirtió en un símbolo de la cultura popular bogotana. Su historia refleja cómo las calles del centro también han sido escenario de personajes que, sin ser políticos ni líderes, dejaron huella en la memoria colectiva de la ciudad.",
    datoCurioso: "Margarita Villaquirá se volvió tan icónica que varios fotógrafos de la época la retrataron repetidamente. Sus fotografías hoy hacen parte del archivo histórico de Bogotá y son testimonio de la vida cotidiana en la Séptima del siglo XX.",
    fuente: "Archivo de Bogotá / Colección fotográfica histórica",
    imagenes: [
      "images/p06-margarita-1.jpg",
      "images/p06-margarita-2.jpg"
    ],
    video: "",
    audio: ""
  },

  // ── 7 ─────────────────────────────────────────────────────────────────
  {
    id: 7,
    lat: 4.6022158,
    lng: -74.072917,
    titulo: "Parque Santander / Plaza de las Yerbas",
    periodo: "Época colonial — Siglo XXI",
    subtitulo: "Del mercado colonial al corazón del centro moderno",
    categoria: "Transformación Urbana",
    emoji: "🌿",
    texto: "Antes de convertirse en el Parque Santander, este lugar era conocido en la época colonial como la Plaza de las Yerbas, un mercado donde se vendían hierbas medicinales, alimentos y productos traídos de las zonas rurales cercanas. Era uno de los puntos más activos de la vida cotidiana de la ciudad colonial.\n\nCon el tiempo, el lugar fue transformándose en un espacio urbano más formal. Hoy el parque rinde homenaje a Francisco de Paula Santander, figura clave de la independencia de Colombia, y sigue siendo un punto de encuentro en el centro histórico, rodeado de bancos, comercios e instituciones que narran distintas etapas del desarrollo de Bogotá.",
    datoCurioso: "En el siglo XIX, el parque era conocido también como 'Plaza de los Ladrones', nombre que refleja la compleja vida social del lugar. La estatua de Santander fue instalada en 1910 para conmemorar el centenario de la independencia.",
    fuente: "Instituto Distrital de Patrimonio Cultural / Museo de Bogotá",
    imagenes: [
      "images/p07-santander-1.jpg",
      "images/p07-santander-2.jpg"
    ],
    video: "",
    audio: ""
  },

  // ── 8 ─────────────────────────────────────────────────────────────────
  {
    id: 8,
    lat: 4.6012382,
    lng: -74.0735336,
    titulo: "Asesinato de Jorge Eliecer Gaitan (BOGOTAZO)",
    periodo: "9 de abril de 1948",
    subtitulo: "El asesinato que cambió la historia de Colombia",
    categoria: "Historia Trágica",
    emoji: "⚫",
    texto: "El 9 de abril de 1948, en la intersección de la Carrera Séptima con la Avenida Jiménez, fue asesinado el líder liberal Jorge Eliécer Gaitán, uno de los políticos más influyentes de la historia colombiana. Su muerte provocó una explosión de violencia conocida como El Bogotazo.\n\nLas protestas y disturbios que siguieron destruyeron gran parte del centro de Bogotá y marcaron el inicio de una etapa de violencia política en el país. Hoy, placas conmemorativas en el suelo recuerdan el lugar donde ocurrió el asesinato que cambió la historia de Colombia.",
    datoCurioso: "Jorge Eliécer Gaitán fue asesinado a las 13:05 del 9 de abril de 1948 frente a su oficina. El Bogotazo dejó entre 2.000 y 5.000 muertos solo en Bogotá y destruyó más de ciento cuarenta manzanas del centro histórico.",
    fuente: "Casa Museo Jorge Eliécer Gaitán / Biblioteca Nacional",
    imagenes: [
      "images/p08-gaitan-1.jpg",
      "images/p08-gaitan-2.jpg"
    ],
    video: "",
    audio: ""
  },

  // ── 9 ─────────────────────────────────────────────────────────────────
  {
    id: 9,
    lat: 4.5996554,
    lng: -74.0745246,
    titulo: "Café Windsor, el epicentro cultural donde Bogotá aprendió a debatir al calor de un buen tinto",
    periodo: "1954",
    subtitulo: "Intelectuales, estudiantes y represión estatal",
    categoria: "Memoria Estudiantil",
    emoji: "🎓",
    texto: "En esta zona del centro funcionaba el Café Windsor, uno de los lugares de encuentro intelectual más conocidos de la Bogotá de mediados del siglo XX. Estudiantes, periodistas y escritores se reunían allí para debatir política, literatura y actualidad.\n\nSin embargo, este lugar también está asociado a un episodio trágico: en 1954, durante protestas estudiantiles contra el gobierno militar, varios jóvenes fueron asesinados por fuerzas del Estado. El hecho marcó profundamente la memoria del movimiento estudiantil en Colombia.",
    datoCurioso: "El 8 y 9 de junio de 1954 fueron asesinados al menos trece estudiantes durante las protestas en Bogotá. El 9 de junio se conmemora hoy en Colombia como el Día del Estudiante Caído en su honor.",
    fuente: "ACNUR Colombia / Archivo histórico universitario",
    imagenes: [
      "images/p09-windsor-1.jpg",
      "images/p09-windsor-2.jpg"
    ],
    video: "",
    audio: ""
  },

  // ── 10 ────────────────────────────────────────────────────────────────
  {
    id: 10,
    lat: 4.5989668,
    lng: -74.0749761,
    titulo: "Calle Real del Comercio",
    periodo: "Época colonial — Siglo XIX",
    subtitulo: "El corazón económico de la ciudad colonial",
    categoria: "Historia Colonial",
    emoji: "🏪",
    texto: "Durante la época colonial y gran parte del siglo XIX, la actual Carrera Séptima era conocida como la Calle Real del Comercio. A lo largo de esta vía se concentraban tiendas, cafés, hoteles y negocios que definían la vida económica de la ciudad.\n\nEl tránsito de tranvías, vendedores ambulantes, comerciantes y ciudadanos convirtió esta calle en el verdadero corazón urbano de Bogotá. Con el paso del tiempo, el nombre cambió, pero la Séptima continuó siendo uno de los espacios más importantes para la vida pública de la ciudad.",
    datoCurioso: "En la Calle Real del Comercio existían en el siglo XIX más de veinte chicherías, establecimientos donde se vendía chicha, la bebida fermentada de maíz que era la más popular entre la clase popular bogotana.",
    fuente: "Archivo General de la Nación / Museo de Bogotá",
    imagenes: [
      "images/p10-callereal-1.jpg",
      "images/p10-callereal-2.jpg"
    ],
    video: "",
    audio: ""
  },

  // ── 11 ────────────────────────────────────────────────────────────────
  {
    id: 11,
    lat: 4.601886,
    lng: -74.0731073,
    titulo: "Iglesia de San Francisco",
    periodo: "Siglo XVI — presente",
    subtitulo: "El templo colonial que sobrevivió a todo",
    categoria: "Patrimonio Religioso",
    emoji: "⛪",
    texto: "La Iglesia de San Francisco es uno de los templos más antiguos de Bogotá y uno de los pocos edificios coloniales que aún se conservan en pie en la Carrera Séptima. Su construcción comenzó en el siglo XVI y durante siglos ha sido testigo de la transformación de la ciudad a su alrededor.\n\nA lo largo de la historia, el templo ha sobrevivido a terremotos, reformas urbanas y episodios violentos como el Bogotazo de 1948. Su presencia recuerda la Bogotá colonial que existía mucho antes de que la Séptima se convirtiera en la gran arteria urbana que conocemos hoy.",
    datoCurioso: "El retablo mayor de la Iglesia de San Francisco es considerado una de las obras maestras del arte colonial en Colombia. Construido en el siglo XVII, está elaborado en madera tallada y cubierto con pan de oro.",
    fuente: "Instituto Colombiano de Antropología e Historia (ICANH)",
    imagenes: [
      "images/p11-sanfrancisco-1.jpg",
      "images/p11-sanfrancisco-2.jpg"
    ],
    video: "",
    audio: ""
  },

  // ── 12 ────────────────────────────────────────────────────────────────
  {
    id: 12,
    lat: 4.6026352,
    lng: -74.0726913,
    titulo: "Iglesia de La Veracruz",
    periodo: "Siglo XVI — República",
    subtitulo: "El panteón criollo de la independencia",
    categoria: "Patrimonio Religioso",
    emoji: "🕊️",
    texto: "La Iglesia de La Veracruz fue construida en el siglo XVI y se convirtió en el templo asociado a las élites criollas de la ciudad. Durante la época colonial y los primeros años de la República, varias figuras importantes de la historia política y militar de Colombia fueron enterradas en este lugar.\n\nDentro del templo reposan restos de personajes vinculados a la independencia, lo que convierte a la iglesia en un pequeño archivo histórico de la ciudad. Aunque muchos transeúntes pasan frente a ella sin detenerse, su interior guarda parte de la memoria política de Bogotá.",
    datoCurioso: "La iglesia alberga los restos de algunos de los 'mártires de la independencia' ejecutados por el reconquistador Pablo Morillo entre 1816 y 1819. Por eso es conocida popularmente como 'la iglesia de los mártires'.",
    fuente: "Instituto Distrital de Patrimonio Cultural",
    imagenes: [
      "images/p12-veracruz-1.jpg",
      "images/p12-veracruz-2.jpg"
    ],
    video: "",
    audio: ""
  },

  // ── 13 ────────────────────────────────────────────────────────────────
  {
    id: 13,
 lat: 4.6023786,
    lng: -74.0728244,
    titulo: "Iglesia de la Orden Tercera",
    periodo: "Siglo XVII — presente",
    subtitulo: "El legado franciscano en el centro de Bogotá",
    categoria: "Patrimonio Religioso",
    emoji: "✝️",
    texto: "La Iglesia de la Orden Tercera forma parte del antiguo complejo franciscano que se estableció en el centro de Bogotá desde la época colonial. Este templo estaba destinado a los miembros laicos de la orden franciscana, conocidos como la Orden Tercera.\n\nSu arquitectura y decoración reflejan el poder que las órdenes religiosas tuvieron en la vida social de la ciudad durante siglos. Junto con las iglesias de San Francisco y La Veracruz, este templo forma un conjunto histórico único que revela la importancia de la religión en la formación de Bogotá.",
    datoCurioso: "Las tres iglesias del complejo franciscano (San Francisco, La Veracruz y La Orden Tercera) están conectadas entre sí y forman uno de los conjuntos de arquitectura colonial religiosa mejor conservados del norte de Suramérica.",
    fuente: "Instituto Colombiano de Antropología e Historia (ICANH)",
    imagenes: [
      "images/p13-ordentercera-1.jpg",
      "images/p13-ordentercera-2.jpg"
    ],
    video: "",
    audio: ""
  },

  // ── 14 ────────────────────────────────────────────────────────────────
  {
    id: 14,
    lat: 4.5983653,
    lng: -74.0753508,
    titulo: "Casa del Florero",
    periodo: "20 de julio de 1810",
    subtitulo: "El pretexto que inició la independencia",
    categoria: "Independencia",
    emoji: "🌸",
    texto: "La Casa del Florero, hoy Museo de la Independencia, es uno de los edificios más importantes de la historia colombiana. El 20 de julio de 1810, una disputa por el préstamo de un florero desencadenó una serie de acontecimientos que terminaron con el inicio del proceso de independencia.\n\nAunque el episodio del florero fue solo un pretexto político, el lugar se convirtió en símbolo del nacimiento de la República. Hoy el museo conserva objetos y relatos que permiten comprender cómo comenzó el proceso que llevó a Colombia a separarse del dominio español.",
    datoCurioso: "El florero que desencadenó la revuelta pertenecía al comerciante español José González Llorente. La disputa fue orquestada deliberadamente por los criollos como excusa para convocar al pueblo y declarar la junta de gobierno.",
    fuente: "Museo de la Independencia — Casa del Florero / Ministerio de Cultura",
    imagenes: [
      "images/p14-florero-1.jpg",
      "images/p14-florero-2.jpg"
    ],
    video: "",
    audio: ""
  },

  // ── 15 ────────────────────────────────────────────────────────────────
  {
    id: 15,
    lat: 4.5978674,
    lng: -74.0757313,
    titulo: "Galerías de Arrubla / Palacio Liévano",
    periodo: "1900 — presente",
    subtitulo: "Cuando el fuego destruyó la memoria de la ciudad",
    categoria: "Arquitectura & Historia",
    emoji: "🏛️",
    texto: "En el lugar donde hoy se encuentra el Palacio Liévano, sede de la Alcaldía de Bogotá, existieron las Galerías de Arrubla, un complejo comercial del siglo XIX que albergaba oficinas, tiendas y parte del archivo histórico de la ciudad.\n\nEn 1900 un incendio destruyó completamente las galerías y gran parte de los documentos históricos que allí se conservaban. Tras el desastre, el edificio fue reemplazado por el Palacio Liévano, que hoy ocupa uno de los costados de la Plaza de Bolívar.",
    datoCurioso: "El incendio de las Galerías de Arrubla en 1900 destruyó documentos irremplazables de la época colonial y los primeros años de la República. Es considerado uno de los mayores desastres documentales en la historia de Colombia.",
    fuente: "Archivo de Bogotá / Alcaldía Mayor de Bogotá",
    imagenes: [
      "images/p15-lievano-1.jpg",
      "images/p15-lievano-2.jpg"
    ],
    video: "",
    audio: ""
  },

  // ── 16 ────────────────────────────────────────────────────────────────
  {
    id: 16,
    lat: 4.5982958,
    lng: -74.075435,
    titulo: "Palacio de Justicia",
    periodo: "6 y 7 de noviembre de 1985",
    subtitulo: "La toma que Colombia no ha terminado de procesar",
    categoria: "Historia Reciente",
    emoji: "⚖️",
    texto: "El Palacio de Justicia, ubicado en el costado norte de la Plaza de Bolívar, fue escenario de uno de los episodios más dramáticos de la historia reciente de Colombia. En noviembre de 1985, el edificio fue tomado por el grupo guerrillero M-19.\n\nLa retoma militar del edificio provocó un incendio, numerosas víctimas y la desaparición de varias personas. El hecho dejó una profunda huella en la memoria del país y continúa siendo objeto de investigaciones y debates sobre justicia y memoria histórica.",
    datoCurioso: "Durante la toma del Palacio de Justicia desaparecieron once personas cuyo paradero aún no ha sido esclarecido completamente. El caso sigue siendo investigado como un crimen de Estado por organismos internacionales de derechos humanos.",
    fuente: "Comisión de la Verdad / Centro Nacional de Memoria Histórica",
    imagenes: [
      "images/p16-palacioJusticia-1.jpg",
      "images/p16-palacioJusticia-2.jpg"
    ],
    video: "",
    audio: ""
  },

  // ── 17 ────────────────────────────────────────────────────────────────
  {
    id: 17,
    lat: 4.5979506,
    lng: -74.0756509,
    titulo: "Plaza de Bolívar — Protestas y Paz",
    periodo: "Siglo XX — 2016",
    subtitulo: "El escenario de las grandes luchas ciudadanas",
    categoria: "Historia Política",
    emoji: "✊",
    texto: "La Plaza de Bolívar ha sido durante siglos el principal escenario político de Bogotá. En este lugar se han realizado manifestaciones, celebraciones, protestas y actos oficiales que reflejan las tensiones y transformaciones del país.\n\nEn 2016, tras el acuerdo de paz entre el gobierno colombiano y la guerrilla de las FARC, miles de personas se reunieron en la plaza para apoyar el proceso. Durante semanas incluso se instaló un campamento por la paz, convirtiendo la plaza en un espacio simbólico de diálogo y esperanza.",
    datoCurioso: "La Plaza de Bolívar fue diseñada en su forma actual por el arquitecto Lorenzo Faccini en 1846. La estatua ecuestre del Libertador Simón Bolívar, obra del escultor italiano Pietro Tenerani, fue inaugurada en 1846.",
    fuente: "IDPC / Secretaría de Gobierno de Bogotá",
    imagenes: [
      "images/p17-plazabolivar-paz-1.jpg",
      "images/p17-plazabolivar-paz-2.jpg"
    ],
    video: "",
    audio: ""
  },

  // ── 18 ────────────────────────────────────────────────────────────────
  {
    id: 18,
    lat: 4.5980619,
    lng: -74.0756243,
    titulo: "Plaza de Bolívar — Visitas Papales",
    periodo: "1968 — 2017",
    subtitulo: "El corazón de la fe en Colombia",
    categoria: "Historia Religiosa",
    emoji: "✨",
    texto: "La Plaza de Bolívar también ha sido escenario de grandes encuentros religiosos. A lo largo de la historia reciente, varios papas han visitado Bogotá y han realizado actos públicos cerca de este lugar.\n\nEntre ellos destacan las visitas de Pablo VI en 1968, Juan Pablo II en 1986 y Francisco en 2017, eventos que reunieron a miles de fieles y marcaron momentos importantes para la Iglesia Católica en Colombia.",
    datoCurioso: "La visita del Papa Francisco en 2017 fue la más multitudinaria de la historia reciente de Colombia. En la Plaza de Bolívar se celebró una misa que reunió a más de un millón de personas, convirtiéndola en uno de los eventos con mayor asistencia en la historia de Bogotá.",
    fuente: "Conferencia Episcopal de Colombia / Archivo de la Alcaldía Mayor",
    imagenes: [
      "images/p18-plazabolivar-papa-1.jpg",
      "images/p18-plazabolivar-papa-2.jpg"
    ],
    video: "",
    audio: ""
  }

]; // fin PUNTOS_HISTORICOS
