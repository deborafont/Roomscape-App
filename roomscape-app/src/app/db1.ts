import { RoomScapes } from './dbroomscape';
//import { asapScheduler } from 'rxjs';

export const ROOMSCAPES: RoomScapes[] = [
  {
    name: "Chicken Banana Room Escape",
    direction: "C/ Rocafort, 12, 08015 Barcelona", 
    latitude: 41.375861, 
    longitude: 2.158012,
    image: ['../assets/imgs/ChickenBanana.jpg'],
    rooms: 
    [
      {
        roomname: "Mafia",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Policíaco",
        minplayers: 2,
        maxplayers: 6,
        time: 60,
        link: "https://www.chickenbanana.com/es/sala/mafia"
      },
      {
        roomname: "Psiquiatría",
        roomimage: ['../assets/imgs/ChickenBananaPsiquiatria.jpg'],
        theme: "Tensión",
        minplayers: 2,
        maxplayers: 6,
        time: 60, 
        link: "https://www.chickenbanana.com/es/sala/psiquiatria"
      },
      {
        roomname: "Prisión",
        roomimage: ['../assets/imgs/ChickenBananaPrision.jpg'],
        theme: "Policíaco",
        minplayers: 4,
        maxplayers: 6,
        time: 60, 
        link: "https://www.chickenbanana.com/es/sala/preso"
      }
    ]
  },
  {
    name: "Cronologic 1 Escape Room",
    direction: "Av/ Meridiana, 129, 08026 Barcelona", 
    latitude: 41.409303,
    longitude: 2.186584,
    image: ['../assets/imgs/Cronologic.jpg'],
    rooms: 
    [
      {
        roomname: "La creación",
        roomimage: ['../assets/imgs/Cronologic1LaCreacion.jpg'],
        theme: "Viaje temporal",
        minplayers: 2,
        maxplayers: 5,
        time: 60, 
        link: "https://www.cronologic.es/cronologic-1/"
      }
    ]
  },
  {
    name: "Cronologic 2 Room Escape",
    direction: "C/ Clot, 133, 08026 Barcelona", 
    latitude: 41.411147, 
    longitude: 2.189381,
    image: ['../assets/imgs/Cronologic.jpg'],
    rooms: 
    [
      {
        roomname: "El viaje continúa",
        roomimage: ['../assets/imgs/Cronologic2ElViaje.jpg'],
        theme: "Viaje temporal",
        minplayers: 2,
        maxplayers: 5,
        time: 75, 
        link: "https://www.cronologic.es/cronologic-2/"
      }
    ]
  },
  {
    name: "Escape Barcelona, Local Valldaura",
    direction: "Paseo Valldaura, 158 E-F, 08042 Barcelona", 
    latitude: 41.438396, 
    longitude: 2.167253,
    image: ['../assets/imgs/Escape.jpg'],
    rooms: 
    [
      {
        roomname: "La Maldición del Faraón",
        roomimage: ['../assets/imgs/EscapeLaMaldicion.jpg'],
        theme: "Aventura",
        minplayers: 2,
        maxplayers: 6,
        time: 60,
        link: "https://www.escapebarcelona.com/la-maldicion-del-faraon.php"
      },
      {
        roomname: "El Templo Perdido",
        roomimage: ['../assets/imgs/EscapeElTemplo.jpg'],
        theme: "Aventura",
        minplayers: 2,
        maxplayers: 6,
        time: 60,
        link: "https://www.escapebarcelona.com/el-templo-perdido.php"
      }
    ]
  },
  {
    name: "Escape Barcelona, Local Baró",
    direction: "C/ Baró, 17, 08921 Santa Coloma de Gramenet", 
    latitude: 41.451573, 
    longitude: 2.202611,
    image: ['../assets/imgs/Escape.jpg'],
    rooms: 
    [
      {
        roomname: "Jurassic Land",
        roomimage: ['../assets/imgs/EscapeJurassic.jpg'],
        theme: "Aventura",
        minplayers: 4,
        maxplayers: 10,
        time: 60, 
        link: "https://www.escapebarcelona.com/jurassic-land.php"
      },
      {
        roomname: "Alien, el origen",
        roomimage: ['../assets/imgs/EscapeAlien.jpg'],
        theme: "Tensión",
        minplayers: 4,
        maxplayers: 10,
        time: 60,
        link: "https://www.escapebarcelona.com/alien-el-origen.php"
      },
      {
        roomname: "Tomb Hunter, la Leyenda de Akasha",
        roomimage: ['../assets/imgs/EscapeTomb.jpg'],
        theme: "Tensión",
        minplayers: 4,
        maxplayers: 8,
        time: 60,
        link: "https://www.escapebarcelona.com/tomb-hunter-la-leyenda-de-akasha.php"
      }
    ]
  }, 
  {
  name: "Komnata Quest - Room Escape",
  direction: "C/ Cecs de Sant Cugat, 10, 08003 Barcelona", 
  latitude: 41.386245, 
  longitude: 2.180710,
  image: ['../assets/imgs/Komnata.jpg'],
  rooms: [
    {
      roomname: "La Barceloneta Pecadora",
      roomimage: ['../assets/imgs/KomnataLaBarceloneta.jpg'],
      theme: "Adulto",
      minplayers: 3,
      maxplayers: 5,
      time: 60, 
      link: "https://komnataquest.es/barcelona/escape-room-quest-sinsp/"
    },
    {
      roomname: "Castillo Sant'Angelo",
      roomimage: ['../assets/imgs/KomnataCastillo.jpg'],
      theme: "Histórico",
      minplayers: 3,
      maxplayers: 5,
      time: 60,
      link: "https://komnataquest.es/barcelona/escape-room-quest-sanangeloit/"
    }
  ]
}, 
{
  name: "Whitechapel Room Escape",
  direction: "C/ Acàcies, 23, 08027 Barcelona", 
  latitude: 41.424630, 
  longitude: 2.178037,
  image: ['../assets/imgs/Whitechapel.jpg'],
//   link: "uo",
  rooms: [
    {
      roomname: "Whitechapel",
      roomimage: ['../assets/imgs/Whitechapel.jpg'],
      theme: "Terror",
      minplayers: 2,
      maxplayers: 6,
      time: 60, 
      link: "http://www.roomwhitechapel.com/index.php"
    }
  ]
}, 
{
  name: "XCAPE - Escape Room Barcelona",
  direction: "C/ Sant Antoni Maria Claret, 258, 08041 Barcelona", 
  latitude: 41.412221, 
  longitude: 2.176078,
  image: ['../assets/imgs/Xcape.jpg'],
  rooms: [
    {
        roomname: "Galería de cadáveres",
        roomimage: ['../assets/imgs/XcapeGaleria.jpg'],
        theme: "Investigación",
        minplayers: 2,
        maxplayers: 6,
        time: 60, 
        link: "https://www.xcaperoombcn.com/room/galeria-de-cadaveres/"
    },
    {
      roomname: "El Diario de Miko",
      roomimage: ['../assets/imgs/XcapeElDiario.jpg'],
      theme: "Terror",
      minplayers: 2,
      maxplayers: 6,
      time: 60, 
      link: "https://www.xcaperoombcn.com/room/el-diario-de-miko/"
    },
    {
      roomname: "El Casino Royal",
      roomimage: ['../assets/imgs/XcapeElCasino.jpg'],
      theme: "Policíaco",
      minplayers: 2,
      maxplayers: 6,
      time: 60, 
      link: "https://www.xcaperoombcn.com/room/el-casino-royal/"
    }
  ]
}, 
{
  name: "Room Of Riddles - Escape Room Barcelona",
  direction: "C/ Salvador Espriu, 61, 08005 Barcelona", 
  latitude: 41.390775, 
  longitude: 2.198054,
  image: ['../assets/imgs/RoomRiddles.jpg'],
  rooms: [
    {
        roomname: "Capitanes de puerto",
        roomimage: ['../assets/imgs/RoomRiddlesCapitanes.jpg'],
        theme: "Investigación",
        minplayers: 2,
        maxplayers: 12,
        time: 60, 
        link: "https://www.xcaperoombcn.com/room/academia-de-capitanes-de-puerto-de-barcelona/"
    },
    {
      roomname: "El coleccionista de arte",
      roomimage: ['../assets/imgs/RoomRiddlesElColeccionista.jpg'],
      theme: "Investigación",
      minplayers: 2,
      maxplayers: 6,
      time: 60, 
      link: "https://www.xcaperoombcn.com/room/el-coleccionista-de-arte/"
    }
  ]
}, 
{
  name: "Retobox Escape Room Barcelona",
  direction: "C/ Fernando Pessoa, 17, 08030 Barcelona", 
  latitude: 41.439495, 
  longitude: 2.193073,
  image: ['../assets/imgs/Retobox.jpg'],
  rooms: [
    {
        roomname: "La Celda",
        roomimage: ['../assets/imgs/RetoboxLaCelda.jpg'],
        theme: "Policíaco",
        minplayers: 2,
        maxplayers: 4,
        time: 60, 
        link: "https://www.roomescaperetobox.com/escapes-rooms/la-celda"
    },
    {
      roomname: "Capitán Pessoa",
      roomimage: ['../assets/imgs/RetoboxCapitan.jpg'],
      theme: "Histórico",
      minplayers: 1,
      maxplayers: 2,
      time: 25, 
      link: "https://www.roomescaperetobox.com/escapes-rooms/escape-room-para-dos-personas"
    },
    {
      roomname: "Cabaret",
      roomimage: ['../assets/imgs/RetoboxCabaret.jpg'],
      theme: "Místico",
      minplayers: 2,
      maxplayers: 6,
      time: 60, 
      link: "https://www.roomescaperetobox.com/escapes-rooms/cabaret"
    }
  ]
}, 
{
  name: "Questeros",
  direction: "C/ Diputació, 152, 08011 Barcelona", 
  latitude: 41.383357, 
  longitude: 2.158017,
  image: ['../assets/imgs/Questeros.jpg'],
  rooms: [
    {
        roomname: "Pesadilla en la calle Diputació",
        roomimage: ['../assets/imgs/QuesterosPesadilla.jpg'],
        theme: "Terror",
        minplayers: 2,
        maxplayers: 5,
        time: 60, 
        link: "https://questeros.es/quests/pesadilla"
    },
    {
      roomname: "Escape Houdini",
      roomimage: ['../assets/imgs/QuesterosHoudini.jpg'],
      theme: "Histórico",
      minplayers: 2,
      maxplayers: 5,
      time: 60, 
      link: "https://questeros.es/quests/houdini"
    },
    {
      roomname: "Rebelión de las máquinas",
      roomimage: ['../assets/imgs/QuesterosRebelion.jpg'],
      theme: "Apocalipsis",
      minplayers: 2,
      maxplayers: 6,
      time: 60, 
      link: "https://questeros.es/quests/rebelion"
    }
  ]
}, 
{
  name: "Doppler Room Escape",
  direction: "C/ Legalitat, 12, 08024 Barcelona", 
  latitude: 41.407737, 
  longitude: 2.159651,
  image: ['../assets/imgs/Doppler.jpg'],
  rooms: [
    {
      roomname: "La Misión: Acto 1 - Vientos de Pólvora",
      roomimage: ['../assets/imgs/DopplerVientos.jpg'],
      theme: "Investigación",
      minplayers: 2,
      maxplayers: 16,
      time: 60, 
      link: "https://www.dopplerexperiences.com/#la-mision"
    }
  ]
}, 
{
  name: "Picadero Motel Escape Room",
  direction: "Passaje de Nogués, 8, 08025 Barcelona", 
  latitude: 41.407538,
  longitude: 2.166959,
  image: ['../assets/imgs/PicaderoMotel.jpg'],
  rooms: [
    {
      roomname: "Picadero Motel",
      roomimage: ['../assets/imgs/PicaderoMotelSala.jpg'],
      theme: "Terror",
      minplayers: 2,
      maxplayers: 6,
      time: 60, 
      link: "https://www.picaderomotel.com/"
    }
  ]
}, 
{
  name: "Maximum Escape",
  direction: "C/ Girona, 27, 08010 Barcelona", 
  latitude: 41.391920, 
  longitude: 2.174847,
  image: ['../assets/imgs/Maximum.jpg'],
  rooms: [
    {
      roomname: "Gangster: dinero, armas y alcohol",
      roomimage: ['../assets/imgs/MaximumGangster.jpg'],
      theme: "Policíaco",
      minplayers: 2,
      maxplayers: 4,
      time: 60, 
      link: "https://barcelona.maximumescape.com/es/quests/Gangsters"
    },
    {
      roomname: "La Mazmorra: la última partida",
      roomimage: ['../assets/imgs/MaximumLaMazmorra.jpg'],
      theme: "Histórico",
      minplayers: 2,
      maxplayers: 4,
      time: 60, 
      link: "https://barcelona.maximumescape.com/es/quests/Mazmorra"
    },
    {
      roomname: "Refugio 27",
      roomimage: ['../assets/imgs/MaximumRefugio.jpg'],
      theme: "Apocalipsis",
      minplayers: 3,
      maxplayers: 5,
      time: 90, 
      link: "https://barcelona.maximumescape.com/es/quests/Vault%2027"
    }
  ]
}, 
{
  name: "Maximum Escape 2",
  direction: "C/ Trafalgar, 17, 08010 Barcelona", 
  latitude: 41.389101, 
  longitude: 2.175304,
  image: ['../assets/imgs/Maximum.jpg'],
  rooms: [
    {
      roomname: "¡Maldita Fama!",
      roomimage: ['../assets/imgs/MaximumMalditaFama.jpg'],
      theme: "Familiar",
      minplayers: 2,
      maxplayers: 4,
      time: 60, 
      link: "https://barcelona.maximumescape.com/es/quests/Zen%20room"
    },
    {
      roomname: "Prisioneros de Alkaban",
      roomimage: ['../assets/imgs/MaximumPrisioneros.jpg'],
      theme: "Místico",
      minplayers: 2,
      maxplayers: 4,
      time: 60, 
      link: "https://barcelona.maximumescape.com/es/quests/Alkaban"
    },
    {
      roomname: "Nave Ulysses",
      roomimage: ['../assets/imgs/MaximumNave.jpg'],
      theme: "Aventura",
      minplayers: 2,
      maxplayers: 4,
      time: 60, 
      link: "https://barcelona.maximumescape.com/es/quests/Ulysses"
    },
    {
      roomname: "Oscuridad",
      roomimage: ['../assets/imgs/MaximumOscuridad.jpg'],
      theme: "Aventura",
      minplayers: 2,
      maxplayers: 4,
      time: 50, 
      link: "https://barcelona.maximumescape.com/es/quests/Darkness"
    },
    {
      roomname: "Sherlock Holmes contra el Diablo Londinense",
      roomimage: ['../assets/imgs/MaximumSherlock.jpg'],
      theme: "Tensión",
      minplayers: 2,
      maxplayers: 4,
      time: 60, 
      link: "https://barcelona.maximumescape.com/es/quests/Sherlock"
    }
  ]
}, 
{
  name: "Escape Hunt Barcelona",
  direction: "C/ Nàpols, 255 bis, 08025 Barcelona", 
  latitude: 41.401997, 
  longitude: 2.170337,
  image: ['../assets/imgs/ChickenBanana.jpg'],
  rooms: [
    {
        roomname: "Escuela de ladrones",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Histórico",
        minplayers: 2,
        maxplayers: 6,
        time: 60, 
        link: "https://escapehunt.com/es/barcelona/games/escuela-de-ladrones/"
    },
    {
        roomname: "El misterio de Gaudí",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Histórico",
        minplayers: 2,
        maxplayers: 6,
        time: 60, 
        link: "https://escapehunt.com/es/barcelona/games/el-misterio-de-gaudi/"
    },
    {
        roomname: "la Vampira de Barcelona",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Histórico",
        minplayers: 2,
        maxplayers: 6,
        time: 90, 
        link: "https://escapehunt.com/es/barcelona/games/la-vampira-de-barcelona-2/"
    }
  ]
}, 
{
  name: "Temps Limit - Escape Room",
  direction: "C/ Sant Antoni Maria Claret, 17, 08037 Barcelona", 
  latitude: 41.403903, 
  longitude: 2.164484,
  image: ['../assets/imgs/ChickenBanana.jpg'],
  rooms: [
    {
        roomname: "La cabaña de Slumach",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Histórico",
        minplayers: 1,
        maxplayers: 2,
        time: 60, 
        link: "https://tempslimit.com/la-cabana-de-slumach/"
    },
    {
        roomname: "la puerta mágica",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Místico",
        minplayers: 2,
        maxplayers: 6,
        time: 60, 
        link: "https://tempslimit.com/la-puerta-magica/"
    }
  ]
}, 
{
  name: "Magic Escape Room",
  direction: "C/ Ramón y Cajal, 67, 08012 Barcelona", 
  latitude: 41.404081, 
  longitude: 2.160893,
  image: ['../assets/imgs/ChickenBanana.jpg'],
  rooms: [
    {
        roomname: "Magic Escape",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Familiar",
        minplayers: 2,
        maxplayers: 10,
        time: 60, 
        link: "http://www.magicescape.es/inicio"
    }
  ]
}, 
{
  name: "Roomin Escape",
  direction: "C/ Robí, 6, 08012 Barcelona", 
  latitude: 41.404549, 
  longitude: 2.155292,
  image: ['../assets/imgs/ChickenBanana.jpg'],
  rooms: [
    {
        roomname: "Roomin",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Investigación",
        minplayers: 2,
        maxplayers: 5,
        time: 60, 
        link: "https://www.roomin.es/es/"
    }
  ]
}, 
{
  name: "LOCK-CLOCK Escape Room",
  direction: "Pasaje del Patriarca, 4-10 Local D 08002 Barcelona", 
  latitude: 41.386123, 
  longitude: 2.173700,
  image: ['../assets/imgs/ChickenBanana.jpg'],
  rooms: [
    {
        roomname: "Misión Gaudí",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Histórico",
        minplayers: 2,
        maxplayers: 5,
        time: 60, 
        link: "https://lock-clock.com/es/game/gaudi"
    },
    {
        roomname: "Tesoro Azteca",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Familiar",
        minplayers: 2,
        maxplayers: 5,
        time: 60, 
        link: "https://lock-clock.com/es/game/conquistadors"
    },
    {
        roomname: "After Party",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Adulto",
        minplayers: 3,
        maxplayers: 6,
        time: 60, 
        link: "https://lock-clock.com/es/game/party"
    }
  ]
}, 
{
  name: "BarceLocked",
  direction: "C/ Arc de Sant Silvestre, 3, 08003 Barcelona", 
  latitude: 41.385180, 
  longitude: 2.178451,
  image: ['../assets/imgs/ChickenBanana.jpg'],
  rooms: [
    {
        roomname: "BarceLocked",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Histórico",
        minplayers: 2,
        maxplayers: 7,
        time: 60, 
        link: "https://barcelocked.com/"
    }
  ]
},
{
  name: "Room Escape Mystery",
  direction: "Av/ Diagonal, 111-113, 08005 Barcelona", 
  latitude: 41.407060, 
  longitude: 2.202883,
  image: ['../assets/imgs/ChickenBanana.jpg'],
  rooms: [
    {
        roomname: "La Cámara Acorazada",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Investigación",
        minplayers: 3,
        maxplayers: 7,
        time: 60, 
        link: "https://mysteryescape.es/reservas-la-camara-acorazada-mystery-escape/"
    },
    {
        roomname: "El Misterio de la Mansión",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Místico",
        minplayers: 3,
        maxplayers: 21,
        time: 60, 
        link: "https://mysteryescape.es/reservas-el-misterio-la-mansion/"
    }
  ]
},
{
  name: "Play Escape Room",
  direction: "C/ Llull, 256, local, 08005 Barcelona", 
  latitude: 41.403751, 
  longitude: 2.205957,
  image: ['../assets/imgs/ChickenBanana.jpg'],
  rooms: [
    {
        roomname: "Alcatraz Medieval",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Histórico",
        minplayers: 2,
        maxplayers: 6,
        time: 60, 
        link: "https://playescaperoom.es/room/escape-room-medieval/"
    },
    {
        roomname: "Alcatraz Classic",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Policíaco",
        minplayers: 2,
        maxplayers: 6,
        time: 60, 
        link: "https://playescaperoom.es/room/escape-room-alcatraz/"
    },
    {
        roomname: "Origen",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Apocalipsis",
        minplayers: 2,
        maxplayers: 6,
        time: 60, 
        link: "https://playescaperoom.es/room/escape-room-de-ciencia-ficcion-origen/"
    }
  ]
},
{
  name: "Top Secret",
  direction: "Gran Via de les Corts Catalanes, 926, 08018 Barcelona", 
  latitude: 41.408176, 
  longitude: 2.194074,
  image: ['../assets/imgs/ChickenBanana.jpg'],
  rooms: [
    {
        roomname: "Ley Seca",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Histórico",
        minplayers: 2,
        maxplayers: 5,
        time: 60, 
        link: "https://www.topsecretbarcelona.com/ley-seca"
    },
    {
        roomname: "Attractions",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Terror",
        minplayers: 2,
        maxplayers: 6,
        time: 60, 
        link: "https://www.topsecretbarcelona.com/attractions"
    },
    {
        roomname: "Sinner",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Adulto",
        minplayers: 2,
        maxplayers: 2,
        time: 45, 
        link: "https://www.topsecretbarcelona.com/sinners"
    },
    {
        roomname: "La Ofrenda",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Místico",
        minplayers: 2,
        maxplayers: 2,
        time: 60, 
        link: "https://www.topsecretbarcelona.com/la-ofrenda"
    },
    {
        roomname: "Reclutas",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Infantil",
        minplayers: 6,
        maxplayers: 20,
        time: 60, 
        link: "https://www.topsecretbarcelona.com/reclutas"
    },
    {
        roomname: "Win or Lose",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Concurso",
        minplayers: 8,
        maxplayers: 20,
        time: 60, 
        link: "https://www.topsecretbarcelona.com/win-or-lose"
    }
  ]
},
{
  name: "Enigmik Escape Room",
  direction: "C/ Rosselló, 508, 08026 Barcelona", 
  latitude: 41.409852, 
  longitude: 2.179613,
  image: ['../assets/imgs/ChickenBanana.jpg'],
  rooms: [
    {
        roomname: "NW6 Bunker",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Investigación",
        minplayers: 2,
        maxplayers: 6,
        time: 60, 
        link: "https://www.enigmik.com/nw6bunker/"
    },
    {
        roomname: "La cervecería",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Investigación",
        minplayers: 4,
        maxplayers: 6,
        time: 80, 
        link: "https://www.enigmik.com/lacerveceria/"
    }
  ]
},
{
  name: "Intríngulis Room Escape",
  direction: "C/ Portugal, 4, 08027 Barcelona", 
  latitude: 41.426078, 
  longitude: 2.191216,
  image: ['../assets/imgs/ChickenBanana.jpg'],
  rooms: [
    {
        roomname: "Petit Piaf Hotel",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Competitivo",
        minplayers: 2,
        maxplayers: 5,
        time: 90, 
        link: "http://www.intringulisbcn.com/reserves.php"
    }
  ]
},
{
  name: "Juego Enigma Room Escape",
  direction: "C/ Acàcies, 38, 08027 Barcelona", 
  latitude: 41.425268, 
  longitude: 2.178228,
  image: ['../assets/imgs/ChickenBanana.jpg'],
  rooms: [
    {
        roomname: "El virus",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Investigación",
        minplayers: 2,
        maxplayers: 6,
        time: 60, 
        link: "https://juegoenigma.es/es/juego-el-virus/"
    },
    {
        roomname: "El asesino de Keylock City",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Investigación",
        minplayers: 15,
        maxplayers: 60,
        time: 60, 
        link: "https://juegoenigma.es/es/juego-asesino/"
    }
  ]
},
{
  name: "Escape World Barcelona",
  direction: "C/ Lluís Sagnier, 16-18, 08032 Barcelona", 
  latitude: 41.424476, 
  longitude: 2.175808,
  image: ['../assets/imgs/ChickenBanana.jpg'],
  rooms: [
    {
        roomname: "La casa de Emily",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Místico",
        minplayers: 2,
        maxplayers: 4,
        time: 60, 
        link: "http://www.escapeworldbarcelona.com/la-casa-de-emily/"
    },
    {
        roomname: "Aventura de Piratas",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Histórico",
        minplayers: 2,
        maxplayers: 6,
        time: 60, 
        link: "http://www.escapeworldbarcelona.com/aventura-de-piratas/"
    }
  ]
},
{
  name: "Escape World Barcelona 2",
  direction: "C/ Gayarre, 49, 08014 Barcelona", 
  latitude: 41.373522, 
  longitude: 2.140409,
  image: ['../assets/imgs/ChickenBanana.jpg'],
  rooms: [
    {
        roomname: "La Nave del Científico loco",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Apocalipsis",
        minplayers: 2,
        maxplayers: 7,
        time: 60, 
        link: "http://www.escapeworldbarcelona.com/la-nave-del-cientifico-loco/"
    },
    {
        roomname: "La Calle de la Magia",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Místico",
        minplayers: 2,
        maxplayers: 4,
        time: 60, 
        link: "http://www.escapeworldbarcelona.com/la-calle-de-la-magia/"
    }
  ]
},
{
  name: "Fear Escape Room",
  direction: "Av/ Mare de Déu de Montserrat, 199, 08041 Barcelona", 
  latitude: 41.420842, 
  longitude: 2.173437,
  image: ['../assets/imgs/ChickenBanana.jpg'],
  rooms: [
    {
        roomname: "Zombie outbreak",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Tensión",
        minplayers: 2,
        maxplayers: 8,
        time: 80, 
        link: "https://fearescaperoom.com/zombie-outbreak-roomescape/"
    }
  ]
},
{
  name: "Simulacre VUIT Room Escape",
  direction: "C/ Varsòvia, 15, 08041 Barcelona", 
  latitude: 41.423574, 
  longitude: 2.176475,
  image: ['../assets/imgs/ChickenBanana.jpg'],
  rooms: [
    {
        roomname: "Amazonas",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Aventura",
        minplayers: 2,
        maxplayers: 6,
        time: 60, 
        link: "http://roomescapesimulacrevuit.es/juego-escape-amazonas/"
    },
    {
        roomname: "El Rescate",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Empresas",
        minplayers: 2,
        maxplayers: 5,
        time: 45, 
        link: "https://roomescapesimulacrevuit.es/room-escape-portatil-barcelona/"
    },
    {
        roomname: "Andana 9 3/4",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Místico",
        minplayers: 2,
        maxplayers: 6,
        time: 60, 
        link: "http://roomescapesimulacrevuit.es/juego-escape-room-harry-potter/"
    },
    {
        roomname: "Víctima 17",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Empresas",
        minplayers: 15,
        maxplayers: 80,
        time: 90, 
        link: "https://roomescapesimulacrevuit.es/juego-escape-victima-17/"
    },
    {
        roomname: "West",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Empresas",
        minplayers: 15,
        maxplayers: 150,
        time: 90, 
        link: "https://roomescapesimulacrevuit.es/juego-escape-west/"
    },
    {
        roomname: "El poder del futuro",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Infantil",
        minplayers: 9,
        maxplayers: 30,
        time: 90, 
        link: "https://roomescapesimulacrevuit.es/room-escape-ninos-barcelona/"
    }
  ]
},
{
  name: "Atropos",
  direction: "C/ Garrotxa, 4, 08041 Barcelona", 
  latitude: 41.421810, 
  longitude: 2.178785,
  image: ['../assets/imgs/ChickenBanana.jpg'],
  rooms: [
    {
        roomname: "Aegis",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Terror",
        minplayers: 2,
        maxplayers: 6,
        time: 70, 
        link: "https://atroposescape.com/"
    }
  ]
},
{
  name: "Jigsaw Escape Room",
  direction: "C/ Indústria, 268, 08026 Barcelona", 
  latitude: 41.413237, 
  longitude: 2.179358,
  image: ['../assets/imgs/ChickenBanana.jpg'],
  rooms: [
    {
        roomname: "Catalepsia",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Adulto",
        minplayers: 2,
        maxplayers: 2,
        time: 30, 
        link: "http://www.vivetuentierro.com/"
    },
    {
        roomname: "Jigsaw",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Terror",
        minplayers: 2,
        maxplayers: 8,
        time: 60, 
        link: "http://www.horrorbox.es/producto/jigsaw-escape-room/"
    }
  ]
},
{
  name: "Ouija Escape Room",
  direction: "Passatge de Roura, 25, 08026 Barcelona", 
  latitude: 41.413233, 
  longitude: 2.179602,
  image: ['../assets/imgs/ChickenBanana.jpg'],
  rooms: [
    {
        roomname: "Ouija",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Místico",
        minplayers: 2,
        maxplayers: 6,
        time: 60, 
        link: "http://www.horrorbox.es/producto/ouija-escape-room/"
    }
  ]
},
{
  name: "Escape Rooms Tactic",
  direction: "C/ Castillejos, 287, 08025 Barcelona", 
  latitude: 41.407355, 
  longitude: 2.176909,
  image: ['../assets/imgs/ChickenBanana.jpg'],
  rooms: [
    {
        roomname: "Chernobil",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Apocalipsis",
        minplayers: 2,
        maxplayers: 6,
        time: 60, 
        link: "https://tacticgame.es/quest/chernobil/"
    },
    {
        roomname: "La Casa Paranormal",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Místico",
        minplayers: 2,
        maxplayers: 6,
        time: 60, 
        link: "https://tacticgame.es/quest/casa-paranormal-barcelona/"
    },
    {
        roomname: "Zombie Epidemia",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Apocalipsis",
        minplayers: 2,
        maxplayers: 6,
        time: 60, 
        link: "https://tacticgame.es/quest/epidemia-z/"
    }
  ]
},
{
  name: "Conundroom",
  direction: "Av/ Diagonal, 300, 08013 Barcelona", 
  latitude: 41.402489, 
  longitude: 2.182300,
  image: ['../assets/imgs/ChickenBanana.jpg'],
  rooms: [
    {
        roomname: "La oficina de Mr. Ascott",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Investigación",
        minplayers: 2,
        maxplayers: 6,
        time: 60, 
        link: "https://www.conundroom.es/salas/mr-ascott/"
    },
    {
        roomname: "Expedición Zero",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Aventura",
        minplayers: 4,
        maxplayers: 18,
        time: 75, 
        link: "https://www.conundroom.es/salas/expedicion-zero/"
    }
  ]
},
{
  name: "60'ESCAPE Barcelona",
  direction: "C/ Rocafort, 15, 08015 Barcelona", 
  latitude: 41.375776, 
  longitude: 2.157797,
  image: ['../assets/imgs/ChickenBanana.jpg'],
  rooms: [
    {
        roomname: "Los infiltrados",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Investigación",
        minplayers: 4,
        maxplayers: 22,
        time: 60, 
        link: "https://60escape.es/escape-room-los-infiltrados/"
    }
  ]
},
{
  name: "Bizarre Escape Room",
  direction: "C/ Blesa, 24, 08004 Barcelona", 
  latitude: 41.372399, 
  longitude: 2.168040,
  image: ['../assets/imgs/ChickenBanana.jpg'],
  rooms: [
    {
        roomname: "Circus",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Aventura",
        minplayers: 2,
        maxplayers: 6,
        time: 60, 
        link: "https://bizarrebcn.com/salas/circus/"
    },
    {
        roomname: "Toys",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Investigación",
        minplayers: 2,
        maxplayers: 6,
        time: 60, 
        link: "https://bizarrebcn.com/salas/toys/"
    }
  ]
},
{
  name: "Escape Room Barcelona - Questory",
  direction: "C/ Galileu, 158, 08028 Barcelona", 
  latitude: 41.380763, 
  longitude: 2.133815,
  image: ['../assets/imgs/ChickenBanana.jpg'],
  rooms: [
    {
        roomname: "Saw experience",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Adulto",
        minplayers: 2,
        maxplayers: 5,
        time: 60, 
        link: "https://questory.es/saw-experience-2019/"
    },
    {
        roomname: "Prison break",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Investigación",
        minplayers: 2,
        maxplayers: 6,
        time: 60, 
        link: "https://questory.es/prison-break-2019/"
    },
    {
        roomname: "El último robo",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Investigación",
        minplayers: 2,
        maxplayers: 5,
        time: 60, 
        link: "https://questory.es/el-ultimo-robo-2019/"
    }
  ]
},
{
  name: "Escape Room Barcelona - Kidnapped in BCN",
  direction: "Travessera de les Corts, 84E, 08028 Barcelona", 
  latitude: 41.379473, 
  longitude: 2.124318,
  image: ['../assets/imgs/ChickenBanana.jpg'],
  rooms: [
    {
        roomname: "Kidnapped in BCN",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Tensión",
        minplayers: 3,
        maxplayers: 5,
        time: 90, 
        link: "https://kidnappedinbcn.com/"
    }
  ]
},
{
  name: "Escape Room Immersion",
  direction: "C/ Melcior de Palau, 9, 08028 Barcelona", 
  latitude: 41.378254, 
  longitude: 2.130523,
  image: ['../assets/imgs/ChickenBanana.jpg'],
  rooms: [
    {
        roomname: "Submarino",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Simulador",
        minplayers: 3,
        maxplayers: 12,
        time: 60, 
        link: "https://www.escaperoomimmersion.com/"
    }
  ]
},
{
  name: "Room Escape Pastisseria Kessler Galimany",
  direction: "C/ Cros, 4, 08014 Barcelona", 
  latitude: 41.374940, 
  longitude: 2.137903,
  image: ['../assets/imgs/ChickenBanana.jpg'],
  rooms: [
    {
        roomname: "Kessler escape room",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Investigación",
        minplayers: 2,
        maxplayers: 6,
        time: 75, 
        link: "https://kesslerescaperoom.es/"
    }
  ]
},
{
  name: "Tic Tac Room Escape",
  direction: "C/ Sant Frederic, 8, 08028 Barcelona", 
  latitude: 41.373552, 
  longitude: 2.128433,
  image: ['../assets/imgs/ChickenBanana.jpg'],
  rooms: [
    {
        roomname: "Walter Gate",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Investigación",
        minplayers: 2,
        maxplayers: 6,
        time: 60, 
        link: "http://tictacroom.es/producto/walter-gate/"
    }
  ]
},
{
  name: "Escrypt Escape Room Barcelona",
  direction: "C/ Moianès, 20, 08014 Barcelona", 
  latitude: 41.371250, 
  longitude: 2.142490,
  image: ['../assets/imgs/ChickenBanana.jpg'],
  rooms: [
    {
        roomname: "Encrypt Room",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Terror",
        minplayers: 2,
        maxplayers: 6,
        time: 60, 
        link: "https://www.encryptroom.com/reservas/"
    }
  ]
},
{
  name: "Monasterium",
  direction: "Gran Via de les Corts Catalanes, 202, 08004 Barcelona", 
  latitude: 41.368864, 
  longitude: 2.141299,
  image: ['../assets/imgs/ChickenBanana.jpg'],
  rooms: [
    {
        roomname: "El Monasterio",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Histórico",
        minplayers: 2,
        maxplayers: 8,
        time: 60, 
        link: "http://escapemonasterium.com/"
    }
  ]
},
{
  name: "Escapa Si Puedes",
  direction: "C/ Trajà, 14, 08004 Barcelona", 
  latitude: 41.368318, 
  longitude: 2.141994,
  image: ['../assets/imgs/ChickenBanana.jpg'],
  rooms: [
    {
        roomname: "Agencia 29",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Investigación",
        minplayers: 2,
        maxplayers: 5,
        time: 60, 
        link: "https://www.escapasipuedes.com/agencia-29/"
    },
    {
        roomname: "Alien 4.5",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Investigación",
        minplayers: 2,
        maxplayers: 5,
        time: 60, 
        link: "https://www.escapasipuedes.com/alien-45/"
    }
  ]
},
{
  name: "Proyecto Target | Macro Room Escape",
  direction: "C/ Santa Dorotea, 6, 08004 Barcelona", 
  latitude: 41.371437, 
  longitude: 2.145504,
  image: ['../assets/imgs/ChickenBanana.jpg'],
  rooms: [
    {
        roomname: "Proyecto Target",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Investigación",
        minplayers: 2,
        maxplayers: 6,
        time: 60, 
        link: "https://www.proyectotarget.com/"
    }
  ]
},
{
  name: "El Proyecto de la Bruja",
  direction: "C/ Leiva, 39, 08014 Barcelona", 
  latitude: 41.373952, 
  longitude: 2.144718,
  image: ['../assets/imgs/ChickenBanana.jpg'],
  rooms: [
    {
        roomname: "El Proyecto de la Bruja",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Místico",
        minplayers: 8,
        maxplayers: 25,
        time: 75, 
        link: "https://www.elproyectodelabruja.com/"
    }
  ]
},
{
  name: "Parlament 51 Escape Room",
  direction: "C/ Parlament, 51, 08015 Barcelona", 
  latitude: 41.377465, 
  longitude: 2.163729,
  image: ['../assets/imgs/ChickenBanana.jpg'],
  rooms: [
    {
        roomname: "El Proyecto de la Bruja",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Místico",
        minplayers: 3,
        maxplayers: 6,
        time: 60, 
        link: "http://parlament51.com/reservar/"
    }
  ]
},
{
  name: "TOTEM",
  direction: "Passeig Valldaura, 111, 08042 Barcelona", 
  latitude: 41.439908, 
  longitude: 2.163856,
  image: ['../assets/imgs/ChickenBanana.jpg'],
  rooms: [
    {
        roomname: "Las profecías de El Bosco",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Místico",
        minplayers: 2,
        maxplayers: 7,
        time: 60, 
        link: "http://totemescaperoom.com/es/"
    },
    {
        roomname: "Génesis",
        roomimage: ['../assets/imgs/ChickenBananaMafia.jpg'],
        theme: "Apocalipsis",
        minplayers: 2,
        maxplayers: 7,
        time: 60, 
        link: "http://totemescaperoom.com/es/"
    }
  ]
}
];
