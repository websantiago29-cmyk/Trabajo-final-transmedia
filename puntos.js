/**
 * puntos.js — La Séptima: Ayer y Hoy — 35 PUNTOS
 * Orden: de norte a sur (Septimazo → Plaza de Bolívar)
 */
const PUNTOS_HISTORICOS = [

  // 1 — El Septimazo
  { id:1, lat:4.6051619, lng:-74.0716631,
    titulo:"El Septimazo", periodo:"Décadas recientes",
    subtitulo:"Peatonalización y cultura popular", categoria:"Espacio Público", emoji:"🎭",
    texto:"En las últimas décadas, el tramo de la Carrera Séptima entre las calles 19 y 26 se transformó en uno de los espacios peatonales más vivos del centro de Bogotá. Lo que antes era una vía dominada por buses y carros se convirtió en un corredor cultural donde conviven artistas callejeros, vendedores, músicos, manifestaciones y encuentros ciudadanos.\n\nEste fenómeno urbano conocido popularmente como 'El Septimazo' refleja cómo la ciudad resignificó la calle como espacio de encuentro y expresión. Hoy, caminar por este tramo es observar una mezcla de memoria, protesta, comercio y cultura popular que sigue redefiniendo el significado de la Séptima.",
    datoCurioso:"Cada domingo el Septimazo se convierte en escenario de más de cien artistas callejeros simultáneos, convirtiendo la calle en uno de los mercados informales de arte más grandes del país.",
    fuente:"Archivo de Bogotá / IDPC",
    imagenes:["images/p01-septimazo-1.jpg","images/p01-septimazo-2.jpg"], video:"", audio:"" },

  // 2 — Peatonalización
  { id:2, lat:4.6046839, lng:-74.0718372,
    titulo:"Peatonalización de la Carrera Séptima", periodo:"2012 – presente",
    subtitulo:"La calle volvió a pertenecer a los peatones", categoria:"Transformación Urbana", emoji:"🚶",
    texto:"En la segunda década del siglo XXI, la Carrera Séptima atravesó una de las transformaciones urbanas más visibles de su historia reciente: la peatonalización de varios de sus tramos en el centro de Bogotá. Las obras buscaron reorganizar la movilidad, ampliar el espacio público y devolver protagonismo a los peatones en un corredor que durante décadas había estado dominado por el tráfico vehicular. En este proceso, la Séptima dejó de ser solo una vía de paso para convertirse nuevamente en un lugar de permanencia, circulación cultural y encuentro ciudadano.\n\nLa intervención reforzó el carácter simbólico de esta calle como eje histórico de la ciudad. Con nuevos andenes, mobiliario urbano, iluminación y mejoras paisajísticas, la peatonalización consolidó un escenario donde hoy conviven artistas callejeros, vendedores, transeúntes, turistas y manifestaciones públicas. Más que una obra física, la transformación reactivó una antigua vocación de la Séptima: la de ser una calle viva, recorrida y apropiada por la ciudadanía.",
    datoCurioso:"Las fases recientes de peatonalización en el centro incluyeron los tramos entre la Avenida Jiménez y la calle 26, y entre la Plaza de Bolívar y la Casa de Nariño.",
    fuente:"Bogotá.gov.co / IDU / IDPC",
    imagenes:["images/p02-placeholder-1.jpg","images/p02-placeholder-2.jpg"], video:"", audio:"" },

  // 3 — Hallazgos arqueológicos
  { id:3, lat:4.6043357, lng:-74.0719735,
    titulo:"Hallazgos arqueológicos bajo la Séptima", periodo:"2012 – 2014",
    subtitulo:"Capas enterradas de la historia de Bogotá", categoria:"Arqueología Urbana", emoji:"🏺",
    texto:"Las obras de peatonalización de la Carrera Séptima no solo transformaron la superficie de la calle: también sacaron a la luz parte de la historia material enterrada bajo el centro de Bogotá. Durante las excavaciones arqueológicas realizadas en el corredor aparecieron estructuras de drenaje, aljibes del siglo XIX y basureros con materiales que datan desde los siglos XVI al XVIII. Estos hallazgos permitieron confirmar que la Séptima no es únicamente un espacio de memoria simbólica, sino también un archivo físico de la evolución urbana de la ciudad.\n\nLa importancia de estos descubrimientos radica en que muestran cómo, debajo del pavimento contemporáneo, sobreviven rastros de la vida cotidiana de distintas épocas: sistemas de agua, residuos domésticos y elementos de infraestructura que hablan de la manera en que Bogotá fue creciendo, organizándose y transformándose. Así, este punto del recorrido permite imaginar la ciudad en profundidad: no solo la que se ve en fachadas y monumentos, sino también la que sigue oculta bajo los pasos de quienes hoy la recorren.",
    datoCurioso:"Entre los hallazgos reportados oficialmente durante la peatonalización hubo aljibes del siglo XIX y basureros con materiales de los siglos XVI al XVIII.",
    fuente:"Bogotá.gov.co / Instituto Distrital de Patrimonio Cultural",
    imagenes:["images/p03-placeholder-1.jpg","images/p03-placeholder-2.jpg"], video:"", audio:"" },

  // 4 — Edificio Avianca (antes id:6, lat más al norte que 4 y 5 originales)
  { id:4, lat:4.6027263, lng:-74.0726525,
    titulo:"Edificio Avianca — Dos incendios en el mismo predio", periodo:"1948 — 1973",
    subtitulo:"Del Hotel Regina al rascacielos que ardió sobre Bogotá", categoria:"Arquitectura & Tragedia", emoji:"🔥",
    texto:"En el lote donde hoy se levanta el Edificio Avianca existió el Hotel Regina, uno de los establecimientos más reconocidos del centro de Bogotá a mediados del siglo XX. El 9 de abril de 1948, en medio del Bogotazo desatado tras el asesinato de Jorge Eliécer Gaitán, el Hotel Regina fue incendiado y quedó completamente destruido. El predio fue adquirido por Avianca, y entre 1966 y 1969 se construyó allí el primer rascacielos de Colombia: una torre de 37 pisos diseñada por las firmas Esguerra, Sáenz, Urdaneta y Samper, y Ricaurte, Carrizosa y Prieto. A su inauguración era el edificio más alto de América del Sur.\n\nCuatro años después de inaugurado, el mismo predio volvió a ser escenario de un gran incendio. El 23 de julio de 1973, pasadas las siete de la mañana, se inició un fuego en el piso 14 de la torre donde había almacenados materiales inflamables. Las mangueras de los bomberos solo alcanzaban hasta el piso 12, por lo que las llamas se propagaron rápidamente hacia arriba. El siniestro estuvo activo durante más de doce horas, dejó 4 muertos y más de 63 heridos, y destruyó 24 de los 37 pisos del edificio. La tragedia generó un profundo debate nacional sobre seguridad en edificios de gran altura y se convirtió en uno de los episodios más recordados de la historia de Bogotá.",
    datoCurioso:"El incendio de 1973 comenzó en el piso 14, que en realidad era el 13: los constructores lo habían renombrado por superstición. Las mangueras de los bomberos no llegaban más allá del piso 12.",
    fuente:"IDPC / Archivo de Bogotá / Señal Memoria / CPNAA",
    imagenes:["images/p06-avianca-1.jpg","images/p06-avianca-2.jpg"], video:"", audio:"" },

  // 5 — Iglesia de La Veracruz (antes id:7)
  { id:5, lat:4.6026352, lng:-74.0726913,
    titulo:"Iglesia de La Veracruz", periodo:"Siglo XVI — República",
    subtitulo:"El panteón criollo de la independencia", categoria:"Patrimonio Religioso", emoji:"🕊️",
    texto:"La Iglesia de La Veracruz es uno de los templos más antiguos de Bogotá. Su primera ermita fue construida apenas ocho años después de la fundación de la ciudad, y en 1597 recibió provisionalmente los restos del conquistador Gonzalo Jiménez de Quesada antes de su traslado definitivo a la Catedral Primada. En 1631 la Hermandad de la Santa Veracruz amplió la construcción dándole el carácter de iglesia que conserva hasta hoy. La Hermandad tenía como misión principal asistir a los condenados a muerte y darles cristiana sepultura, lo que convirtió al templo en testigo de algunos de los episodios más sombríos de la historia colonial y republicana.\n\nDurante la Época del Terror, entre junio y noviembre de 1816, las tropas españolas bajo el mando del reconquistador Pablo Morillo fusilaron a cerca de 80 próceres de la independencia colombiana. Entre ellos estaban Francisco José de Caldas, Jorge Tadeo Lozano y Antonio Villavicencio. Sus cuerpos fueron sepultados en una fosa común dentro de la iglesia, pues la Hermandad era la encargada de acompañar a los ajusticiados en su último trayecto. En 1910, con motivo del centenario de la independencia, la iglesia fue declarada Panteón Nacional. Hoy sus naves conservan retablos, inscripciones y tres Cristos históricos que acompañaron a los condenados en su camino al cadalso.",
    datoCurioso:"En los libros de cuentas de la iglesia hay registros de los gastos por enterrar a los próceres fusilados en 1816: 'Por tres pesos entregados al sacristán para que pagase los peones que cargaron y enterraron a Pedro de la Lastra, Antonio Baraya y un soldado...'",
    fuente:"Instituto Distrital de Patrimonio Cultural / Arquidiócesis de Bogotá / Archivo de Bogotá",
    imagenes:["images/p07-veracruz-1.jpg","images/p07-veracruz-2.jpg"], video:"", audio:"" },

  // 6 — Capilla del Humilladero (antes id:4)
  { id:6, lat:4.6025448, lng:-74.0727356,
    titulo:"Capilla del Humilladero", periodo:"Siglos XVI – XIX",
    subtitulo:"Un templo colonial desaparecido para abrir paso a la modernización", categoria:"Patrimonio Perdido", emoji:"⛪",
    texto:"En este sector existió durante siglos la Capilla del Humilladero, uno de los templos más antiguos del centro de Bogotá y parte del paisaje religioso de la ciudad colonial. Los humilladeros eran pequeñas capillas o santuarios ubicados en entradas y bordes urbanos, donde los viajeros se detenían a rezar antes de entrar plenamente a la ciudad. La del Humilladero bogotano estuvo ligada al antiguo entorno de la actual área de Parque Santander y fue un referente espiritual y urbano para quienes transitaban por este corredor.\n\nSu final llegó en el siglo XIX, cuando el proyecto de modernización republicana comenzó a transformar radicalmente el centro histórico. Según el Archivo de Bogotá, en 1876 el gobernador de Cundinamarca ocupó la capilla y la destinó a inspección de policía; poco después, en 1877, fue demolida para ampliar el Parque Santander. La decisión respondió a una lógica de renovación urbana que privilegió la apertura y embellecimiento del espacio público por encima de la conservación del templo. Su desaparición resume una tensión que se repite en la historia de Bogotá: la modernización de la ciudad a costa de la pérdida de parte de su patrimonio más antiguo.",
    datoCurioso:"Antes de su demolición, la Capilla del Humilladero alcanzó a ser utilizada como inspección de policía, un destino muy distinto al religioso para el que había sido creada.",
    fuente:"Archivo de Bogotá / Instituto Distrital de Patrimonio Cultural",
    imagenes:["images/p04-placeholder-1.jpg","images/p04-placeholder-2.jpg"], video:"", audio:"" },

  // 7 — La primera misa de Santa Fe (antes id:5)
  { id:7, lat:4.6024608, lng:-74.0727773,
    titulo:"La primera misa de Santa Fe", periodo:"1538",
    subtitulo:"El inicio simbólico de la ciudad en el entorno del actual Parque Santander", categoria:"Fundación de Bogotá", emoji:"✝️",
    texto:"De acuerdo con el Archivo de Bogotá, en la antigua plaza de las Yerbas —el sector donde hoy se encuentra el Parque Santander— se realizó realmente la primera misa de la ciudad en 1538. Esta afirmación es importante porque desplaza la idea más difundida que ubica todos los orígenes de Bogotá únicamente en otros puntos del centro histórico. En cambio, sitúa en este lugar uno de los actos fundacionales más significativos del establecimiento temprano de Santa Fe: la ceremonia religiosa que acompañó la instalación inicial del asentamiento español.\n\nLa importancia histórica de este hecho va más allá del rito litúrgico. En el mundo hispánico, la misa hacía parte del proceso simbólico y político de apropiación del territorio, pues vinculaba la fundación urbana con la autoridad de la Corona y con el orden cristiano. Por eso, este punto del recorrido no solo habla de religión: habla también del nacimiento de la ciudad como proyecto colonial. Pensar que uno de los primeros gestos fundacionales ocurrió aquí convierte este sector de la Séptima en una entrada privilegiada a la historia más temprana de Bogotá.",
    datoCurioso:"El Archivo de Bogotá sostiene que la fundación de facto de 1538 ocurrió en la plaza de las Yerbas, hoy Parque Santander, y que allí se hizo realmente la primera misa.",
    fuente:"Archivo de Bogotá / Historia de Bogotá / Academia Colombiana de Historia",
    imagenes:["images/p05-placeholder-1.jpg","images/p05-placeholder-2.jpg"], video:"", audio:"" },

  // 8 — Iglesia de la Orden Tercera
  { id:8, lat:4.6023786, lng:-74.0728244,
    titulo:"Iglesia de la Orden Tercera", periodo:"Siglo XVII — presente",
    subtitulo:"El legado franciscano en el centro de Bogotá", categoria:"Patrimonio Religioso", emoji:"✝️",
    texto:"La Iglesia de la Orden Tercera forma parte del antiguo complejo franciscano establecido en el centro de Bogotá desde la época colonial. Este templo fue construido para los miembros laicos de la orden franciscana —conocidos como terciarios— que querían participar de la vida religiosa sin ingresar al convento. Su arquitectura sencilla y sobria, característica de las órdenes mendicantes, contrasta con la ornamentación interior, que incluye retablos e imágenes de notable valor artístico colonial.\n\nJunto con las iglesias de San Francisco y La Veracruz, este templo conforma uno de los conjuntos de arquitectura colonial religiosa mejor conservados del norte de Suramérica. Las tres iglesias, ubicadas una al lado de la otra sobre la Carrera Séptima, representan más de cuatro siglos de historia urbana, religiosa y social de Bogotá. Su permanencia en pie, a pesar de terremotos, incendios y transformaciones urbanas, las convierte en uno de los testimonios más elocuentes de la ciudad que existió antes del Bogotazo y de las grandes reformas del siglo XX.",
    datoCurioso:"Las tres iglesias del complejo franciscano (San Francisco, La Veracruz y La Orden Tercera) forman uno de los conjuntos de arquitectura colonial religiosa mejor conservados del norte de Suramérica.",
    fuente:"Instituto Colombiano de Antropología e Historia (ICANH)",
    imagenes:["images/p08-ordentercera-1.jpg","images/p08-ordentercera-2.jpg"], video:"", audio:"" },

  // 9 — Parque Santander
  { id:9, lat:4.6022158, lng:-74.072917,
    titulo:"Parque Santander", periodo:"Época colonial — Siglo XXI",
    subtitulo:"Del mercado colonial al corazón del centro moderno", categoria:"Transformación Urbana", emoji:"🌿",
    texto:"Antes de convertirse en el Parque Santander, este lugar era conocido en la época colonial como la Plaza de las Yerbas, un mercado donde se vendían hierbas medicinales, alimentos y productos traídos de las zonas rurales cercanas. Era uno de los espacios más activos del centro de la ciudad: un lugar de intercambio económico, social y cultural donde convergían personas de distintos orígenes. La plaza también fue escenario de procesiones religiosas y de los primeros gestos fundacionales del asentamiento español en 1538, lo que la convierte en uno de los espacios con más capas de memoria de toda la Séptima.\n\nCon el avance del proyecto republicano en el siglo XIX, la plaza fue reformada y rebautizada en honor a Francisco de Paula Santander, figura clave de la independencia y de la organización del Estado colombiano. La estatua del prócer fue instalada en 1910 para conmemorar el centenario de la independencia. Hoy el parque sigue siendo uno de los puntos de encuentro más concurridos del centro histórico, rodeado de edificios emblemáticos como el Banco de la República —construido en el lote del desaparecido Hotel Granada— y el conjunto de iglesias coloniales que bordean la Carrera Séptima.",
    datoCurioso:"En el siglo XIX, el parque era conocido también como 'Plaza de los Ladrones'. La estatua de Santander fue instalada en 1910 para conmemorar el centenario de la independencia.",
    fuente:"Instituto Distrital de Patrimonio Cultural / Museo de Bogotá",
    imagenes:["images/p09-santander-1.jpg","images/p09-santander-2.jpg"], video:"", audio:"" },

  // 10 — Hotel Granada
  { id:10, lat:4.6021349, lng:-74.0729634,
    titulo:"Hotel Granada", periodo:"1928 — 1951",
    subtitulo:"La elegancia que desapareció del centro", categoria:"Vida Social & Arquitectura", emoji:"🏨",
    texto:"En el costado sur del Parque Santander, sobre la esquina de la Carrera Séptima con la Avenida Jiménez, se levantó en 1928 el Hotel Granada, diseñado por el arquitecto Alberto Manrique Martín en estilo Beaux-Arts. Con sus ocho plantas, 160 habitaciones, 108 apartamentos privados, salón de baile, American Bar y restaurante, el Granada fue considerado el hotel más lujoso de Colombia y uno de los más elegantes del continente. En 1947 fue escenario de uno de los momentos más celebrados de la música colombiana: Lucho Bermúdez presentó el porro y la cumbia en su pista de baile, introduciendo estos ritmos en la capital del país.\n\nA pesar de haber sobrevivido a los incendios del Bogotazo en 1948, el destino del Granada estaba sellado. El Banco de la República adquirió sus predios en 1949 y en 1951, sin una explicación pública clara, ordenó la demolición completa del hotel para construir su nueva sede. La desaparición del Granada dejó un vacío en la memoria de la ciudad y se convirtió en símbolo de una época en que la modernización avanzó a costa del patrimonio construido. El edificio del Banco de la República que lo reemplazó, con su fachada de mármol y sus relieves del escultor Vico Consorti, ocupa hoy ese mismo lote.",
    datoCurioso:"En 1947, el músico Lucho Bermúdez presentó el porro y la cumbia en el salón de baile del Hotel Granada, marcando el debut de estos ritmos costeños ante la alta sociedad bogotana.",
    fuente:"Museo de Bogotá / Archivo de Bogotá / Archivo fotográfico Saúl Orduz / Las2orillas",
    imagenes:["images/p10-granada-1.jpg","images/p10-granada-2.jpg"], video:"", audio:"" },

  // 11 — Iglesia de San Francisco
  { id:11, lat:4.601886, lng:-74.0731073,
    titulo:"Iglesia de San Francisco", periodo:"Siglo XVI — presente",
    subtitulo:"El templo colonial que sobrevivió a todo", categoria:"Patrimonio Religioso", emoji:"⛪",
    texto:"La Iglesia de San Francisco es uno de los templos más antiguos de Bogotá y uno de los pocos edificios coloniales que aún se conservan en pie sobre la Carrera Séptima. Su construcción comenzó en el siglo XVI, poco después de la fundación de la ciudad, y formó parte del convento de la orden franciscana que ocupó este sector del centro histórico durante siglos. A lo largo de su historia, el templo ha resistido terremotos, reformas urbanas y episodios de violencia, incluido el Bogotazo de 1948, que destruyó gran parte del centro a su alrededor sin que el edificio sufriera daños irreparables.\n\nSu interior es considerado una de las joyas del arte colonial en Colombia. El retablo mayor, construido en el siglo XVII en madera tallada y cubierto con pan de oro, es reconocido como una de las obras más destacadas de la artesanía colonial del país. La iglesia también alberga pinturas, esculturas y ornamentos que documentan cuatro siglos de devoción religiosa y de producción artística en la región. Junto con La Veracruz y La Orden Tercera, conforma un conjunto colonial único en el corazón de la Carrera Séptima que sigue siendo activo, visitado y parte viva del paisaje urbano de Bogotá.",
    datoCurioso:"El retablo mayor de la Iglesia de San Francisco, elaborado en el siglo XVII en madera tallada y cubierto con pan de oro, es considerado una de las obras maestras del arte colonial en Colombia.",
    fuente:"Instituto Colombiano de Antropología e Historia (ICANH)",
    imagenes:["images/p11-sanfrancisco-1.jpg","images/p11-sanfrancisco-2.jpg"], video:"", audio:"" },

  // 12 — La Loca Margarita (expandido con info verificada)
  { id:12, lat:4.6015, lng:-74.0732,
    titulo:"La Loca Margarita", periodo:"1920 — 1942",
    subtitulo:"Profesora, activista y personaje irrepetible del centro de Bogotá", categoria:"Memoria Popular", emoji:"👒",
    texto:"Margarita Villaquirá Aya nació en 1860 en Fusagasugá y llegó a Bogotá convertida en una de las figuras más singulares que han recorrido la Carrera Séptima. Maestra de profesión y militante del Partido Liberal, perdió a su esposo en la Batalla de Palonegro durante la Guerra de los Mil Días y vio a su hijo de 20 años ser asesinado por soldados conservadores. Desplazada por la violencia, llegó a la capital con sus pertenencias y las escrituras de un lote heredado en La Candelaria, donde construyó una vivienda que abrió a los más necesitados: albañiles, viudas, excombatientes, huérfanos. A partir de entonces comenzó a deambular por el centro de la ciudad, vestida de zaraza roja —el color de su partido—, descalza por decisión propia, gritando arengas liberales en la Plaza de Bolívar y denunciando la violencia y la exclusión en calles y chicherías.\n\nEntre las décadas de 1920 y 1940, Margarita Villaquirá se convirtió en una figura inevitable de la vida cotidiana bogotana. Fue amiga de políticos, damas de la alta sociedad y personajes populares como el 'Negro Chivas'. Se creía que podía predecir el futuro: estuvo presente el día del asesinato de Rafael Uribe Uribe frente al Capitolio en 1914, un evento que la marcó profundamente y del que se dice que presagió. Su historia, lejos de reducirse a la de una 'loca' anecdótica, es la de una mujer que enfrentó la guerra, el desplazamiento y la pérdida, y aun así siguió presente, visible y desafiante en el corazón de la ciudad. Murió en enero de 1942 a los 82 años de una neumonía; el Partido Liberal costeó su sepelio. El músico Milciades Garavito le dedicó una rumba criolla que lleva su nombre.",
    datoCurioso:"Margarita Villaquirá caminaba descalza por el centro a pesar de tener una amplia colección de zapatos rojos que sus amigos liberales le regalaban. Decía que desde 1914 sus ropas estaban manchadas con la sangre del general Uribe Uribe y por eso siempre vestía de rojo.",
    fuente:"Archivo de Bogotá / Alcaldía Mayor de Bogotá / Wikipedia / Semana",
    imagenes:["images/p12-margarita-1.jpg","images/p12-margarita-2.jpg"], video:"", audio:"" },

  // 13 — El tranvía (antes id:14, lat 4.6014662 > 4.6013797 de El Tiempo)
  { id:13, lat:4.6014662, lng:-74.0734847,
    titulo:"El tranvía de Bogotá en la Carrera Séptima", periodo:"1884 – 1951",
    subtitulo:"El transporte que modernizó la ciudad", categoria:"Historia Urbana", emoji:"🚋",
    texto:"Durante más de medio siglo el tranvía fue el principal sistema de transporte público de Bogotá y la Carrera Séptima fue uno de sus corredores más importantes. El primer tranvía comenzó a funcionar en 1884 utilizando carros tirados por mulas que conectaban el centro de la ciudad con Chapinero. Con el paso del tiempo el sistema fue modernizado y en 1910 se electrificó, convirtiéndose en uno de los símbolos de la modernización urbana de Bogotá durante el cambio de siglo.\n\nEl tranvía recorría precisamente este corredor del centro histórico, pasando por la Séptima y conectando los espacios políticos, comerciales y sociales más importantes de la ciudad. Sin embargo, gran parte de la infraestructura del sistema fue destruida durante los disturbios del Bogotazo en 1948. Aunque el servicio continuó por algunos años más, el sistema fue finalmente desmantelado en 1951, marcando el final de una etapa fundamental en la historia del transporte de Bogotá.",
    datoCurioso:"El tranvía eléctrico de Bogotá llegó a tener más de 40 kilómetros de líneas que conectaban el centro con barrios como Chapinero, San Diego y Teusaquillo.",
    fuente:"Archivo de Bogotá / Museo de Bogotá / Historia del Tranvía en Bogotá",
    imagenes:["images/p14-placeholder-1.jpg","images/p14-placeholder-2.jpg"], video:"", audio:"" },

  // 14 — Edificio El Tiempo (antes id:13, expandido)
  { id:14, lat:4.6013797, lng:-74.0733202,
    titulo:"Edificio El Tiempo", periodo:"Siglo XX — 1952",
    subtitulo:"Prensa, censura y poder político", categoria:"Historia de la Prensa", emoji:"📰",
    texto:"El periódico El Tiempo, fundado en 1911 y uno de los más influyentes de Colombia, tuvo una de sus sedes históricas en el centro de Bogotá, sobre la Carrera Séptima. Durante el siglo XX el edificio fue testigo del auge del periodismo bogotano y de su papel en la construcción de la opinión pública del país. Sin embargo, en 1952 la sede fue atacada e incendiada en el marco de una campaña de censura promovida por el régimen militar del general Gustavo Rojas Pinilla, que buscaba silenciar las voces críticas de la prensa liberal en Colombia.\n\nEl ataque contra El Tiempo fue parte de una oleada más amplia de represión a los medios de comunicación que también afectó a El Espectador. Ambos periódicos fueron objetivo de turbas organizadas que, con la connivencia del poder, incendiaron sus instalaciones para acallar la cobertura crítica del gobierno. El episodio se inscribe en una larga historia de tensiones entre periodismo y poder político en Colombia, y recuerda que la Séptima no fue solo escenario de manifestaciones populares, sino también de disputas por el control de la información y la libertad de expresión.",
    datoCurioso:"El incendio de las instalaciones de El Tiempo en 1952 fue parte de una oleada de ataques contra medios críticos al régimen militar, que también afectó al periódico El Espectador.",
    fuente:"Archivo histórico El Tiempo / Biblioteca Nacional",
    imagenes:["images/p13-eltiempo-1.jpg","images/p13-eltiempo-2.jpg"], video:"", audio:"" },

  // 15 — La Séptima corredor comercial
  { id:15, lat:4.6013262, lng:-74.0734789,
    titulo:"La Séptima como corredor comercial del siglo XX", periodo:"1900 – 1940",
    subtitulo:"Hoteles, vitrinas y cafés del centro moderno", categoria:"Vida Urbana", emoji:"🏬",
    texto:"Durante las primeras décadas del siglo XX la Carrera Séptima se consolidó como el principal corredor comercial y social de Bogotá. A lo largo de esta vía se concentraban hoteles elegantes, cafés, librerías, bancos y almacenes que reflejaban el crecimiento de la ciudad y la aparición de una vida urbana moderna. Caminar por la Séptima era recorrer el centro de la actividad económica y cultural de la capital.\n\nLos escaparates, las oficinas y los cafés del sector se convirtieron en lugares de encuentro para comerciantes, políticos, periodistas y estudiantes. Este ambiente urbano hizo que la calle se transformara en una especie de escenario público donde se mezclaban la vida cotidiana, la política y la cultura. Muchas de estas edificaciones desaparecieron tras el Bogotazo de 1948 y las posteriores transformaciones del centro histórico.",
    datoCurioso:"En las primeras décadas del siglo XX la Carrera Séptima era conocida como el lugar donde estaban las vitrinas más modernas y elegantes de Bogotá.",
    fuente:"Museo de Bogotá / Historia urbana del centro de Bogotá / Archivo de Bogotá",
    imagenes:["images/p15-placeholder-1.jpg","images/p15-placeholder-2.jpg"], video:"", audio:"" },

  // 16 — La Marcha del Silencio (antes id:17, lat 4.6012382)
  { id:16, lat:4.6012382, lng:-74.0735336,
    titulo:"La Marcha del Silencio", periodo:"7 de febrero de 1948",
    subtitulo:"La multitud que pidió paz antes del Bogotazo", categoria:"Historia Política", emoji:"✊",
    texto:"El 7 de febrero de 1948, apenas dos meses antes del asesinato de Jorge Eliécer Gaitán, miles de personas participaron en una manifestación conocida como la Marcha del Silencio. La movilización recorrió el centro de Bogotá y terminó en la Plaza de Bolívar, donde Gaitán pronunció uno de sus discursos más recordados denunciando la violencia política que vivía el país.\n\nLa marcha fue una demostración masiva de apoyo popular al líder liberal y evidenció la tensión política que atravesaba Colombia en ese momento. El silencio de la multitud buscaba simbolizar un reclamo colectivo por el fin de la violencia. Solo semanas después, el asesinato de Gaitán desataría el Bogotazo, uno de los episodios más dramáticos de la historia de la ciudad.",
    datoCurioso:"La Marcha del Silencio reunió a decenas de miles de personas en el centro de Bogotá y fue una de las mayores movilizaciones políticas del país antes del Bogotazo.",
    fuente:"Centro Nacional de Memoria Histórica / Archivo de Bogotá / Biblioteca Nacional",
    imagenes:["images/p17-placeholder-1.jpg","images/p17-placeholder-2.jpg"], video:"", audio:"" },

// 17 — Asesinato de Gaitán / El Bogotazo
{ id:17, lat:4.601156, lng:-74.0735853,
  titulo:"Asesinato de Jorge Eliécer Gaitán — El Bogotazo", periodo:"9 de abril de 1948",
  subtitulo:"El asesinato que cambió la historia de Colombia", categoria:"Historia Trágica", emoji:"⚫",
  texto:"El 9 de abril de 1948, hacia la 1:05 de la tarde, el líder liberal Jorge Eliécer Gaitán fue asesinado a tiros al salir de su oficina ubicada en la Carrera Séptima, cerca de la Avenida Jiménez. Gaitán era en ese momento el político más popular del país y uno de los candidatos con mayores posibilidades de convertirse en presidente de Colombia. Su discurso, centrado en la defensa de las clases populares y en la denuncia de la desigualdad social, había movilizado a miles de seguidores en todo el territorio nacional. El asesinato ocurrió en pleno centro de la ciudad y desató inmediatamente la indignación de quienes se encontraban en el sector.\n\nLa noticia se propagó rápidamente y en cuestión de minutos Bogotá se convirtió en escenario de una revuelta masiva conocida como El Bogotazo. Multitudes enfurecidas incendiaron edificios, destruyeron comercios, atacaron estaciones de policía y saquearon almacenes en distintas zonas del centro. Gran parte del corazón histórico de la ciudad quedó devastado por los disturbios. El episodio dejó miles de muertos y marcó el inicio de una etapa de violencia política conocida como “La Violencia”, que durante más de una década enfrentó a liberales y conservadores en todo el país. Hoy, varias placas conmemorativas recuerdan este lugar como uno de los puntos donde se desencadenó uno de los acontecimientos más decisivos de la historia colombiana.",
  datoCurioso:"Jorge Eliécer Gaitán fue asesinado a las 13:05 del 9 de abril de 1948. El Bogotazo dejó entre 2.000 y 5.000 muertos solo en Bogotá y destruyó más de ciento cuarenta manzanas del centro histórico.",
  fuente:"Casa Museo Jorge Eliécer Gaitán / Biblioteca Nacional",
  imagenes:["images/p18-gaitan-1.jpg","images/p18-gaitan-2.jpg"], video:"", audio:"" },
  // 18 — Procesiones religiosas (antes id:16, lat 4.6009936)
  { id:18, lat:4.6009936, lng:-74.0736899,
    titulo:"Procesiones y ceremonias religiosas del centro", periodo:"Siglos XVII – XX",
    subtitulo:"La Séptima como ruta ceremonial", categoria:"Memoria Religiosa", emoji:"🕊️",
    texto:"Desde la época colonial la Carrera Séptima ha sido una de las rutas tradicionales de las procesiones religiosas que atraviesan el centro histórico de Bogotá. Las iglesias de San Francisco, La Veracruz y la Orden Tercera formaban parte de un conjunto religioso muy importante, por lo que muchas celebraciones y procesiones transitaban por este corredor hacia el corazón político y espiritual de la ciudad.\n\nEstas ceremonias religiosas reflejaban la estrecha relación entre la vida urbana y la Iglesia durante los siglos coloniales y republicanos. Incluso en el siglo XX, la Séptima continuó siendo escenario de actos religiosos multitudinarios, demostrando que esta calle no solo fue un espacio comercial o político, sino también un lugar profundamente vinculado con la espiritualidad y las tradiciones de Bogotá.",
    datoCurioso:"Las iglesias de San Francisco, La Veracruz y la Orden Tercera forman uno de los conjuntos religiosos coloniales más importantes del centro histórico de Bogotá.",
    fuente:"Instituto Distrital de Patrimonio Cultural / Historia religiosa de Bogotá",
    imagenes:["images/p16-placeholder-1.jpg","images/p16-placeholder-2.jpg"], video:"", audio:"" },

  // 19 — Asesinato Rafael Uribe Uribe
  { id:19, lat:4.6003843, lng:-74.074066,
    titulo:"Asesinato de Rafael Uribe Uribe", periodo:"15 de octubre de 1914",
    subtitulo:"Un magnicidio antes del Bogotazo", categoria:"Historia Política", emoji:"⚫",
    texto:"El 15 de octubre de 1914 fue asesinado en el centro de Bogotá el general y líder liberal Rafael Uribe Uribe, una de las figuras políticas más influyentes de la Colombia de comienzos del siglo XX. El ataque ocurrió cerca del Capitolio Nacional cuando dos hombres lo atacaron con hachas mientras salía del edificio del Congreso.\n\nEl asesinato de Uribe Uribe conmocionó profundamente a la sociedad colombiana y se convirtió en uno de los magnicidios más recordados de la historia del país. Décadas después, el crimen sería recordado nuevamente tras el asesinato de Jorge Eliécer Gaitán en 1948, reforzando la idea de una historia política marcada por episodios de violencia en el centro de Bogotá.",
    datoCurioso:"El asesinato de Uribe Uribe inspiró años después la novela 'La mala hora' de Gabriel García Márquez, que se basó parcialmente en el clima de violencia política del país.",
    fuente:"Academia Colombiana de Historia / Archivo de Bogotá / Biblioteca Nacional",
    imagenes:["images/p19-placeholder-1.jpg","images/p19-placeholder-2.jpg"], video:"", audio:"" },

  // 20 — La Séptima Papeleta
  { id:20, lat:4.6000517, lng:-74.0742729,
    titulo:"La Séptima Papeleta y la Constitución de 1991", periodo:"1990 – 1991",
    subtitulo:"El movimiento estudiantil que cambió la Constitución", categoria:"Historia Política", emoji:"🗳️",
    texto:"A finales de la década de 1980 Colombia vivía una profunda crisis política marcada por la violencia del narcotráfico, el conflicto armado y la debilidad institucional. En este contexto surgió un movimiento estudiantil que impulsó la propuesta de convocar una Asamblea Constituyente para reformar el sistema político del país. La iniciativa se conoció como la 'Séptima Papeleta'.\n\nLas movilizaciones estudiantiles recorrieron las calles del centro de Bogotá, incluyendo la Carrera Séptima y la Plaza de Bolívar, convirtiendo este corredor en escenario de manifestaciones, debates y concentraciones ciudadanas. El movimiento logró impulsar la convocatoria de la Asamblea Constituyente de 1991, que dio origen a la actual Constitución Política de Colombia.",
    datoCurioso:"La 'Séptima Papeleta' recibió su nombre porque los ciudadanos introdujeron una papeleta adicional en las elecciones de 1990 para pedir una Asamblea Constituyente.",
    fuente:"Biblioteca Nacional de Colombia / Centro Nacional de Memoria Histórica",
    imagenes:["images/p20-placeholder-1.jpg","images/p20-placeholder-2.jpg"], video:"", audio:"" },

    // 21 — Café Windsor
{ id:21, lat:4.5996554, lng:-74.0745246,
  titulo:"Café Windsor", periodo:"1954",
  subtitulo:"El epicentro cultural donde Bogotá aprendió a debatir", categoria:"Memoria Estudiantil & Cultural", emoji:"☕",
  texto:"En esta zona del centro de Bogotá funcionó el Café Windsor, uno de los espacios de encuentro intelectual más recordados de la ciudad durante la primera mitad del siglo XX. Como muchos cafés históricos de América Latina y Europa, el Windsor era mucho más que un establecimiento comercial: era un lugar de conversación, debate y formación política. Estudiantes universitarios, periodistas, profesores, escritores y jóvenes activistas se reunían allí para discutir sobre literatura, filosofía, política y los acontecimientos del país. En una época en la que las universidades y los cafés eran espacios fundamentales de pensamiento crítico, el Windsor se convirtió en un punto de referencia para la vida cultural y estudiantil del centro de la ciudad.\n\nEl café también quedó ligado a uno de los episodios más dolorosos del movimiento estudiantil colombiano. En junio de 1954, durante el gobierno militar del general Gustavo Rojas Pinilla, se produjeron manifestaciones de estudiantes en el centro de Bogotá que terminaron en una violenta represión por parte de las fuerzas del Estado. El 8 y 9 de junio varios jóvenes fueron asesinados durante las protestas, un hecho que marcó profundamente la memoria política del país. Desde entonces, el sector del Windsor y sus alrededores se recuerdan como uno de los escenarios donde el movimiento estudiantil colombiano expresó su oposición a la dictadura y pagó un alto costo humano por hacerlo.",
  datoCurioso:"El 8 y 9 de junio de 1954 fueron asesinados al menos trece estudiantes durante protestas contra la dictadura de Gustavo Rojas Pinilla. El 9 de junio se conmemora hoy en Colombia como el Día del Estudiante Caído.",
  fuente:"ACNUR Colombia / Archivo histórico universitario",
  imagenes:["images/p21-windsor-1.jpg","images/p21-windsor-2.jpg"], video:"", audio:"" },

  // 22 — Incendio del Almacén Vida (expandido con datos verificados)
  { id:22, lat:4.5996, lng:-74.074652,
    titulo:"Incendio del Almacén Vida", periodo:"16 de diciembre de 1958",
    subtitulo:"La mayor tragedia por incendio en la historia de Colombia", categoria:"Tragedia Urbana", emoji:"🔥",
    texto:"El 16 de diciembre de 1958, en plena tarde de temporada navideña, ocurrió una de las peores tragedias en la historia del centro de Bogotá. El Almacén Vida, ubicado entre las calles 12 y 13 sobre la Carrera Séptima en La Candelaria, era uno de los comercios más populares del sector y estaba lleno de compradores y empleadas. Un cortocircuito encendió materiales inflamables en el corazón del local y en menos de media hora el fuego consumió el edificio de varios pisos. La chispa bloqueó inmediatamente las salidas del fondo del establecimiento, donde se encontraban la mayoría de los trabajadores y clientes. El pánico impidió una evacuación organizada.\n\nEl incendio dejó 88 personas muertas, en su mayoría mujeres empleadas del almacén que fallecieron por intoxicación con monóxido de carbono. El gobierno nacional decretó tres días de duelo y el país vivió la tragedia como duelo nacional, el primero desde la explosión de Cali en 1956. Francia envió 100 recipientes de plasma sanguíneo para atender a los heridos. Una de las consecuencias directas de la tragedia fue la creación del Cuerpo de Bomberos Voluntarios de Bogotá, fundado en febrero de 1959 para ampliar la capacidad de respuesta ante emergencias. El incendio del Almacén Vida sigue siendo considerado el más mortífero en la historia de Colombia.",
    datoCurioso:"De las 126 mujeres que trabajaban en el Almacén Vida, 37 resultaron víctimas fatales. Victoria Celis Gómez fue la única sobreviviente de quienes quedaron atrapadas en el interior del almacén y fue rescatada gracias a un tratamiento de respiración artificial.",
    fuente:"Wikipedia / Bomberos Voluntarios de Bogotá / El Tiempo / Archivo de Bogotá",
    imagenes:["images/p22-almacenvida-1.jpg","images/p22-almacenvida-2.jpg"], video:"", audio:"" },

// 23 — Calle Real del Comercio
{ id:23, lat:4.5989668, lng:-74.0749761,
  titulo:"Calle Real del Comercio", periodo:"Época colonial — Siglo XIX",
  subtitulo:"El corazón económico de la ciudad colonial", categoria:"Historia Colonial", emoji:"🏪",
  texto:"Durante la época colonial y buena parte del siglo XIX, la actual Carrera Séptima era conocida como la Calle Real del Comercio. Esta vía conectaba los principales espacios de poder y actividad económica de Santa Fe, desde la Plaza Mayor —hoy Plaza de Bolívar— hasta los barrios que crecían hacia el norte de la ciudad. A lo largo de la calle se concentraban tiendas, talleres artesanales, posadas, chicherías y comercios que abastecían tanto a los habitantes de la ciudad como a los viajeros que llegaban desde otras regiones del Virreinato de la Nueva Granada. Caminar por la Calle Real era recorrer el centro de la vida económica de la ciudad colonial.\n\nCon el paso del tiempo, la vía se consolidó como el eje principal del comercio y de la vida cotidiana de Bogotá. Comerciantes, vendedores ambulantes, funcionarios, religiosos y viajeros transitaban diariamente por esta calle, convirtiéndola en uno de los espacios más activos del centro urbano. Durante el siglo XIX comenzaron a aparecer también cafés, almacenes modernos y servicios que reflejaban los cambios de una ciudad que empezaba a transformarse con la llegada de nuevas formas de transporte y comercio. La antigua Calle Real del Comercio sería así el antecedente directo de la Carrera Séptima moderna, que continuó siendo durante décadas la arteria económica, social y política más importante de Bogotá.",
  datoCurioso:"En la Calle Real del Comercio existían en el siglo XIX más de veinte chicherías, establecimientos donde se vendía chicha, la bebida fermentada de maíz más popular entre la clase popular bogotana.",
  fuente:"Archivo General de la Nación / Museo de Bogotá",
  imagenes:["images/p23-callereal-1.jpg","images/p23-callereal-2.jpg"], video:"", audio:"" },

  // 24 — Casa del Florero
{ id:24, lat:4.5983653, lng:-74.0753508,
  titulo:"Casa del Florero", periodo:"20 de julio de 1810",
  subtitulo:"El pretexto que inició la independencia", categoria:"Independencia", emoji:"🌸",
  texto:"La Casa del Florero, hoy Museo de la Independencia, es uno de los edificios más emblemáticos de la historia colombiana. En este lugar ocurrió el episodio que desencadenó los acontecimientos del 20 de julio de 1810, fecha considerada el inicio del proceso de independencia del dominio español. Ese día, un grupo de criollos buscó deliberadamente provocar un incidente con el comerciante español José González Llorente solicitándole el préstamo de un florero para un banquete en honor al comisionado real Antonio Villavicencio. Ante la negativa del comerciante, la situación fue utilizada como pretexto para agitar a la población y convocar una reunión política que terminaría cuestionando la autoridad colonial.\n\nEl incidente del florero desencadenó una movilización popular que culminó con la formación de una Junta de Gobierno en Santa Fe, marcando el inicio del proceso que conduciría a la independencia de la Nueva Granada. Aunque la ruptura definitiva con España tardaría varios años más, el 20 de julio quedó grabado en la memoria nacional como el momento simbólico en que comenzó la lucha por la autonomía política. Hoy la Casa del Florero funciona como museo y conserva objetos, documentos y relatos que permiten comprender cómo este episodio, aparentemente cotidiano, se convirtió en uno de los eventos fundacionales de la historia de Colombia.",
  datoCurioso:"El florero pertenecía al comerciante español José González Llorente. La disputa fue planificada por los criollos como una estrategia para provocar una reacción pública que permitiera convocar la Junta de Gobierno del 20 de julio de 1810.",
  fuente:"Museo de la Independencia — Casa del Florero / Ministerio de Cultura",
  imagenes:["images/p24-florero-1.jpg","images/p24-florero-2.jpg"], video:"", audio:"" },

  // 25 — Palacio de Justicia (expandido)
  { id:25, lat:4.5982958, lng:-74.075435,
    titulo:"Palacio de Justicia", periodo:"6 y 7 de noviembre de 1985",
    subtitulo:"La toma que Colombia no ha terminado de procesar", categoria:"Historia Reciente", emoji:"⚖️",
    texto:"El Palacio de Justicia fue escenario de uno de los episodios más dramáticos y dolorosos de la historia reciente de Colombia. El 6 de noviembre de 1985, el grupo guerrillero M-19 tomó por asalto el edificio, exigiendo un juicio político al entonces presidente Belisario Betancur. Dentro del edificio se encontraban magistrados de la Corte Suprema de Justicia, empleados, visitantes y cientos de rehenes. El gobierno rechazó toda negociación y ordenó la retoma militar del palacio mediante una operación que incluyó tanques de guerra en pleno corazón de la Plaza de Bolívar.\n\nDurante los dos días que duró la confrontación, el edificio fue consumido por el fuego y los enfrentamientos armados. Fallecieron 98 personas, entre ellas once magistrados de la Corte Suprema. Sin embargo, lo que más ha marcado la memoria histórica del hecho es la desaparición forzada de once personas que salieron vivas del palacio y nunca aparecieron: cafeteros, empleados y estudiantes que fueron vistos al salir del edificio y cuyo paradero sigue siendo una herida abierta. El caso continúa siendo investigado como crimen de Estado por organismos internacionales de derechos humanos.",
    datoCurioso:"Durante la toma desaparecieron once personas cuyo paradero aún no ha sido esclarecido. El caso sigue siendo investigado como un crimen de Estado por organismos internacionales.",
    fuente:"Comisión de la Verdad / Centro Nacional de Memoria Histórica",
    imagenes:["images/p25-palacioJusticia-1.jpg","images/p25-palacioJusticia-2.jpg"], video:"", audio:"" },

 // 26 — Plaza de Bolívar Protestas y Paz
{ id:26, lat:4.5979506, lng:-74.0756509,
  titulo:"Plaza de Bolívar — Protestas y Paz", periodo:"Siglo XX — 2016",
  subtitulo:"El escenario de las grandes luchas ciudadanas", categoria:"Historia Política", emoji:"✊",
  texto:"La Plaza de Bolívar ha sido durante siglos el principal escenario político de Bogotá y del país. Desde la época colonial, cuando era conocida como Plaza Mayor, este espacio ha concentrado las ceremonias públicas, las decisiones del poder y también las expresiones de inconformidad ciudadana. A lo largo del siglo XX la plaza se convirtió en punto de llegada de marchas estudiantiles, concentraciones obreras, protestas políticas y celebraciones nacionales. Por su ubicación frente al Capitolio Nacional, el Palacio de Justicia, la Catedral Primada y el Palacio Liévano, la plaza funciona como el corazón simbólico donde se encuentran los poderes del Estado y la voz de la ciudadanía.\n\nEn el siglo XXI este lugar continuó siendo escenario de momentos decisivos para la vida política del país. Uno de los más recordados ocurrió en 2016, cuando miles de personas se reunieron en la plaza tras la firma del acuerdo de paz entre el gobierno colombiano y la guerrilla de las FARC. Durante varios días se instaló allí un campamento ciudadano por la paz, con vigilias, debates y actos culturales que transformaron el espacio en un símbolo de esperanza y reconciliación. La imagen de la plaza llena de jóvenes, estudiantes y organizaciones sociales recordó que, más allá de los edificios que la rodean, este lugar sigue siendo el escenario donde la sociedad colombiana expresa sus aspiraciones y sus conflictos.",
  datoCurioso:"La estatua ecuestre del Libertador Simón Bolívar, obra del escultor italiano Pietro Tenerani, fue inaugurada en 1846. La plaza ha sido escenario de algunos de los momentos políticos más importantes de la historia de Colombia.",
  fuente:"IDPC / Secretaría de Gobierno de Bogotá",
  imagenes:["images/p26-plazabolivar-paz-1.jpg","images/p26-plazabolivar-paz-2.jpg"], video:"", audio:"" },

// 27 — Galerías de Arrubla / Palacio Liévano
{ id:27, lat:4.5978674, lng:-74.0757313,
  titulo:"Galerías de Arrubla / Palacio Liévano", periodo:"1900 — presente",
  subtitulo:"Cuando el fuego destruyó la memoria de la ciudad", categoria:"Arquitectura & Historia", emoji:"🏛️",
  texto:"En el lugar donde hoy se levanta el Palacio Liévano, actual sede de la Alcaldía Mayor de Bogotá, existieron durante el siglo XIX las Galerías de Arrubla. Este complejo comercial fue construido por el empresario español Bruno Arrubla y se convirtió en uno de los edificios más importantes de la ciudad republicana. Las galerías albergaban oficinas, tiendas, despachos públicos y espacios administrativos, además de custodiar parte del archivo histórico de Bogotá. Su arquitectura, inspirada en modelos comerciales europeos, representaba la modernización del centro urbano en una época en que la ciudad comenzaba a expandirse y a consolidar una vida comercial más dinámica alrededor de la Plaza de Bolívar.\n\nEl 20 de mayo de 1900 un incendio devastador destruyó completamente el edificio. Las llamas consumieron no solo las estructuras comerciales, sino también una enorme cantidad de documentos históricos que se conservaban en sus oficinas, incluyendo archivos coloniales y registros de los primeros años de la República. La pérdida fue tan grande que el episodio es considerado uno de los mayores desastres documentales en la historia de Colombia. Años después, sobre las ruinas del antiguo complejo se construyó el Palacio Liévano, inaugurado a comienzos del siglo XX y convertido desde entonces en la sede del gobierno de la ciudad, cerrando así una etapa de destrucción y renovación en el corazón político de Bogotá.",
  datoCurioso:"El incendio de 1900 destruyó documentos irremplazables de la época colonial y los primeros años de la República. Es considerado uno de los mayores desastres documentales en la historia de Colombia.",
  fuente:"Archivo de Bogotá / Alcaldía Mayor de Bogotá",
  imagenes:["images/p27-arrubla-1.jpg","images/p27-arrubla-2.jpg"], video:"", audio:"" },

  // ── PUNTOS 28-35: PLAZA DE BOLÍVAR (coords reales) ───────────────────────────

// 28 — Estatua de Simón Bolívar (centro exacto de la plaza)
{ id:28, lat:4.59810, lng:-74.07583,
  titulo:"Estatua de Simón Bolívar", periodo:"1846",
  subtitulo:"El primer monumento público de Bogotá", categoria:"Memoria Nacional", emoji:"🗿",
  texto:"En el centro de la Plaza de Bolívar se levanta la estatua ecuestre de Simón Bolívar, inaugurada el 20 de julio de 1846. Fue el primer monumento público erigido en Bogotá y uno de los más antiguos dedicados al Libertador en toda América Latina. La escultura fue realizada por el artista italiano Pietro Tenerani, uno de los escultores más reconocidos del neoclasicismo europeo. La obra representa a Bolívar montado a caballo, mirando hacia el oriente, en una pose que simboliza liderazgo y movimiento. Su instalación marcó un cambio importante en la manera en que la ciudad comenzó a conmemorar su historia, pasando de los símbolos coloniales a monumentos dedicados a los héroes de la independencia.\n\nLa llegada de la escultura también transformó profundamente el significado de la antigua Plaza Mayor. Durante la época colonial, este espacio había sido un mercado y centro administrativo del poder español. Con la instalación del monumento, la plaza fue rebautizada como Plaza de Bolívar y comenzó a consolidarse como el principal escenario cívico y político de la República. Desde entonces, la estatua ha sido testigo de celebraciones nacionales, protestas, ceremonias oficiales y acontecimientos históricos que han marcado la vida del país. Más que un simple monumento, se convirtió en el punto simbólico desde el cual se organiza la memoria histórica del centro de Bogotá.",
  datoCurioso:"La estatua fue fundida en Múnich y transportada en barco hasta Colombia antes de ser instalada en la plaza en 1846.",
  fuente:"Museo de Bogotá / Archivo de Bogotá",
  imagenes:["images/p28-placeholder-1.jpg","images/p28-placeholder-2.jpg"], video:"", audio:"" },

  // 29 — Visita del Papa Juan Pablo II (Plaza de Bolívar)
{ id:29, lat:4.59832, lng:-74.07553,
  titulo:"Visita del Papa Juan Pablo II a Colombia", periodo:"1986",
  subtitulo:"Una multitud histórica en la Plaza de Bolívar", categoria:"Historia Religiosa Contemporánea", emoji:"✝️",
  texto:"En julio de 1986, el papa Juan Pablo II visitó Colombia en una de las giras pastorales más importantes realizadas por un pontífice en América Latina durante el siglo XX. Durante su paso por Bogotá, la Plaza de Bolívar se convirtió en uno de los escenarios centrales de su visita. Miles de personas provenientes de distintas regiones del país se congregaron en el corazón histórico de la ciudad para participar en actos litúrgicos, escuchar sus mensajes y presenciar un momento que quedó profundamente grabado en la memoria colectiva de la capital.\n\nLa presencia del papa en este lugar tuvo un fuerte significado simbólico. Frente a la Catedral Primada, el Capitolio Nacional y el Palacio de Justicia, la plaza se transformó en un espacio de encuentro espiritual en medio de una época marcada por tensiones políticas y violencia en el país. Los discursos del pontífice hicieron un llamado a la reconciliación, la paz y la justicia social. Para muchos colombianos, aquella jornada convirtió la Plaza de Bolívar en un escenario donde la fe, la historia y la vida pública del país se cruzaron de manera memorable.",
  datoCurioso:"La visita de Juan Pablo II a Colombia en 1986 fue la primera de un papa al país y reunió a multitudes históricas en ciudades como Bogotá, Medellín, Cali y Cartagena.",
  fuente:"Conferencia Episcopal de Colombia / Archivo de Bogotá / Historia de la visita papal de 1986",
  imagenes:["images/p29-placeholder-1.jpg","images/p29-placeholder-2.jpg"], video:"", audio:"" },

// 30 — Plaza de Bolívar: escenario de protestas históricas
{ id:30, lat:4.59793, lng:-74.07548,
  titulo:"Plaza de Bolívar — Escenario de protestas ciudadanas", periodo:"Siglo XIX — presente",
  subtitulo:"El lugar donde la ciudadanía le habla al poder", categoria:"Historia Política", emoji:"✊",
  texto:"Desde el siglo XIX, la Plaza de Bolívar se ha consolidado como el principal escenario de protestas, manifestaciones y movilizaciones ciudadanas en Colombia. Su ubicación frente al Capitolio Nacional, el Palacio de Justicia y el Palacio Liévano la convirtió naturalmente en el lugar donde la ciudadanía se reúne para expresar demandas políticas, sociales y económicas. A lo largo del tiempo, sindicatos, estudiantes, campesinos, movimientos sociales y ciudadanos de todas las regiones del país han llegado hasta este espacio para hacer visibles sus reclamos frente a las instituciones del Estado.\n\nEn distintos momentos de la historia reciente, la plaza ha sido punto de llegada de grandes marchas que recorren la Carrera Séptima desde el norte de la ciudad. Protestas por la paz, movilizaciones estudiantiles, concentraciones contra la violencia y manifestaciones por reformas políticas han llenado este lugar con miles de personas. Cada generación ha convertido la plaza en su propio escenario de participación democrática, recordando que más allá de los edificios que la rodean, este espacio sigue siendo el lugar donde la ciudadanía se reúne para hacerse escuchar.",
  datoCurioso:"Muchas de las marchas que terminan en la Plaza de Bolívar recorren previamente la Carrera Séptima, lo que refuerza el papel histórico de esta avenida como corredor de movilización ciudadana en Bogotá.",
  fuente:"Archivo de Bogotá / Centro Nacional de Memoria Histórica / Museo de Bogotá",
  imagenes:["images/p30-placeholder-1.jpg","images/p30-placeholder-2.jpg"], video:"", audio:"" },

// 31 — Paro Nacional de 2021 en la Plaza de Bolívar
{ id:31, lat:4.59843, lng:-74.07572,
  titulo:"Paro Nacional de 2021 — La Plaza de Bolívar en protesta", periodo:"2021",
  subtitulo:"Una generación en las calles del centro de Bogotá", categoria:"Historia Reciente", emoji:"✊",
  texto:"En 2021, la Plaza de Bolívar volvió a convertirse en el epicentro de las movilizaciones ciudadanas en Colombia durante el Paro Nacional. Miles de personas, especialmente jóvenes, estudiantes, trabajadores y colectivos sociales, se congregaron en el centro histórico de Bogotá para manifestarse contra las reformas propuestas por el gobierno y para expresar un descontento más amplio frente a la desigualdad social, la violencia policial y las condiciones económicas del país. La Carrera Séptima, que conecta gran parte del centro con el norte de la ciudad, fue uno de los principales corredores por donde avanzaron las marchas hasta llegar a la plaza.\n\nDurante varias semanas, la Plaza de Bolívar se transformó en un espacio de asamblea ciudadana, conciertos improvisados, intervenciones artísticas y debates públicos. Pancartas, banderas y performances ocuparon el lugar frente a las instituciones del poder político, recordando el papel histórico de este espacio como escenario de participación y protesta. Las imágenes de la plaza llena de manifestantes circularon por todo el mundo y volvieron a confirmar que este lugar sigue siendo el punto donde la ciudadanía colombiana se reúne para expresar sus demandas y reclamar cambios en la vida política y social del país.",
  datoCurioso:"Durante el Paro Nacional de 2021, la Plaza de Bolívar fue escenario de concentraciones masivas, actos culturales y asambleas ciudadanas que reunieron a miles de manifestantes provenientes de distintos sectores sociales.",
  fuente:"Archivo de Bogotá / Centro Nacional de Memoria Histórica / prensa nacional 2021",
  imagenes:["images/p31-placeholder-1.jpg","images/p31-placeholder-2.jpg"], video:"", audio:"" },

  // 32 — Campamento por la Paz en la Plaza de Bolívar
{ id:32, lat:4.59818, lng:-74.07618,
  titulo:"Campamento por la Paz en la Plaza de Bolívar", periodo:"2016",
  subtitulo:"Jóvenes acampan en el corazón político del país", categoria:"Historia Reciente", emoji:"🏕️",
  texto:"En octubre de 2016, la Plaza de Bolívar se convirtió en escenario de una movilización ciudadana inédita tras el plebiscito por la paz entre el gobierno colombiano y la guerrilla de las FARC. Luego de que el acuerdo fuera rechazado por un estrecho margen en las urnas, cientos de jóvenes, estudiantes y organizaciones sociales instalaron un campamento permanente en la plaza para exigir que el proceso de paz continuara. Durante varios días, carpas, pancartas y banderas ocuparon el espacio frente a las principales instituciones del Estado, transformando la plaza en un lugar de vigilia y movilización pacífica.\n\nEl llamado “Campamento por la Paz” se convirtió en un símbolo de presión ciudadana y de esperanza en medio de la incertidumbre política. Los manifestantes organizaron asambleas, debates, conciertos y actos culturales que reunieron a miles de personas que apoyaban la negociación del conflicto armado. La presencia constante de ciudadanos en la plaza contribuyó a mantener el tema en el centro del debate público y fue parte del ambiente social que impulsó la renegociación del acuerdo y su posterior aprobación en el Congreso. Así, la Plaza de Bolívar volvió a demostrar su papel histórico como el espacio donde la sociedad colombiana se reúne para defender sus ideales y reclamar decisiones que marquen el futuro del país.",
  datoCurioso:"El Campamento por la Paz permaneció durante varios días en la Plaza de Bolívar y reunió principalmente a jóvenes universitarios que pedían mantener vivo el proceso de negociación con las FARC.",
  fuente:"Archivo de Bogotá / Centro Nacional de Memoria Histórica / prensa nacional 2016",
  imagenes:["images/p32-placeholder-1.jpg","images/p32-placeholder-2.jpg"], video:"", audio:"" },

  // 33 — Plaza de Bolívar: centro político del país
{ id:33, lat:4.59823, lng:-74.07565,
  titulo:"Plaza de Bolívar — Corazón político de Colombia", periodo:"Siglo XIX — presente",
  subtitulo:"El escenario de posesiones presidenciales y decisiones históricas", categoria:"Historia Política", emoji:"🏛️",
  texto:"La Plaza de Bolívar ha sido durante más de dos siglos el principal escenario político de Colombia. Rodeada por el Capitolio Nacional, el Palacio de Justicia, el Palacio Liévano y la Catedral Primada, este espacio reúne simbólicamente los principales poderes del Estado: legislativo, judicial, administrativo y religioso. Por esta razón, la plaza se convirtió desde el siglo XIX en el lugar donde se realizan algunos de los actos oficiales más importantes del país, incluyendo ceremonias de Estado, concentraciones políticas y eventos que marcan los momentos decisivos de la vida nacional.\n\nEntre estos eventos se destacan las posesiones presidenciales, que en varias ocasiones han tenido lugar frente al Capitolio Nacional, ante la mirada de miles de ciudadanos reunidos en la plaza. En estos actos, el presidente electo asume formalmente el cargo y se dirige al país desde el corazón histórico de Bogotá. A lo largo del tiempo, este espacio ha sido testigo tanto de celebraciones institucionales como de manifestaciones ciudadanas, lo que refuerza su papel como el lugar donde el poder político y la participación pública se encuentran en la historia de Colombia.",
  datoCurioso:"La Plaza de Bolívar está rodeada por edificios que representan tres de los poderes del Estado colombiano: el Congreso (legislativo), el Palacio de Justicia (judicial) y el Palacio Liévano (administrativo), lo que refuerza su papel como centro político del país.",
  fuente:"Archivo de Bogotá / Museo de Bogotá / Historia de la Plaza de Bolívar",
  imagenes:["images/p33-placeholder-1.jpg","images/p33-placeholder-2.jpg"], video:"", audio:"" },

  // 34 — La Plaza Mayor colonial
  { id:34, lat:4.59800, lng:-74.07590,
    titulo:"La Plaza Mayor — Origen colonial de la Plaza de Bolívar", periodo:"Siglo XVI — Siglo XIX",
    subtitulo:"Mercado, poder y ceremonia en el corazón de Santa Fe", categoria:"Historia Colonial", emoji:"🏪",
    texto:"Antes de llamarse Plaza de Bolívar, este espacio fue la Plaza Mayor de Santa Fe, el centro neurálgico de la ciudad colonial desde su fundación en el siglo XVI. En ella convergían todas las funciones que definían la vida urbana de la época: mercados donde se vendían alimentos y productos de las regiones, audiencias públicas, autos de fe, ceremonias religiosas y actos de gobierno. La plaza era el lugar donde el poder se mostraba, se celebraba y se imponía ante la sociedad colonial.\n\nCon la llegada del período republicano en el siglo XIX, la plaza fue progresivamente transformada. Se eliminaron los puestos de mercado, se trazaron jardines y en 1846 fue instalada la estatua ecuestre de Simón Bolívar, que le dio su nombre actual. Esta transformación reflejó el cambio de modelo político: de una plaza colonial dominada por la Iglesia y la Corona, a un espacio republicano centrado en la figura del Libertador y los ideales de independencia.",
    datoCurioso:"La plaza ha tenido varios nombres a lo largo de su historia: Plaza Mayor, Plaza de la Constitución y finalmente Plaza de Bolívar, nombre que recibió tras la instalación de la estatua ecuestre del Libertador en 1846.",
    fuente:"Museo de Bogotá / Archivo de Bogotá / Instituto Distrital de Patrimonio Cultural",
    imagenes:["images/p34-placeholder-1.jpg","images/p34-placeholder-2.jpg"], video:"", audio:"" },

  // 35 — La Plaza de Bolívar hoy (fin del recorrido)
  { id:35, lat:4.59835, lng:-74.07600,
    titulo:"La Plaza de Bolívar hoy", periodo:"Siglo XXI",
    subtitulo:"El corazón histórico y político de Bogotá",
    categoria:"Memoria Urbana", emoji:"📍",
    texto:"Desde la época colonial hasta la actualidad, la Plaza de Bolívar ha sido el centro político, social y simbólico de Bogotá. Rodeada por la Catedral Primada, el Capitolio Nacional, el Palacio de Justicia y el Palacio Liévano, la plaza condensa en su geometría la presencia simultánea de los poderes religioso, legislativo, judicial y administrativo del país. Pocas plazas en América Latina reúnen tanta densidad institucional y simbólica en un espacio tan compacto.\n\nHoy la plaza es a la vez monumento, escenario y lugar de encuentro. Es punto de llegada de marchas que recorren la Séptima desde el norte, escenario de conciertos y celebraciones culturales, destino de turistas y estudiantes, y tribuna donde los ciudadanos siguen planteando sus demandas al poder. Para quienes han recorrido este trayecto desde el Septimazo, la plaza es el final natural de un corredor que no es solo una calle: es una línea de tiempo viva que conecta la ciudad de hoy con sus capas más profundas de memoria.",
    datoCurioso:"La Plaza de Bolívar está rodeada por los tres poderes del Estado: el judicial (Palacio de Justicia), el legislativo (Capitolio Nacional) y el administrativo (Palacio Liévano), además de la Catedral Primada como sede religiosa.",
    fuente:"Museo de Bogotá / Archivo de Bogotá / IDPC",
    imagenes:["images/p35-placeholder-1.jpg","images/p35-placeholder-2.jpg"], video:"", audio:"" }

]
