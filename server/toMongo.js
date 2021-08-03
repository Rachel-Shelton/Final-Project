const {v4: uuidv4}  = require("uuid")

const plants = [
  // {
  //   //with uu_id?
//   id: uuidv4(),
  //   commonName: "",
  //   //optional
  //   synonyms: "",
  //   binomialName: "",
  //   origin: "",
  //   image: "",
  //   //t/f if t but check if f make red
  //   //on click on characteristic second dropdown for order
  //   petFriendly: "",
  //   //sun, average, shade
  //   light: "",
  //   //often, sometimes, rarely
  //   water: "",
  //   //soil, leca,water, air
  //   growingMedium: "",
  //   //dramaqueen, moderate, independent
  //   care: "",
  //   //propogation methods
  //   propogation: "",
  //   //by genetics, not care
  //   siblings: "N/A",
  // },

  {
    _id: uuidv4(),
    commonName: "Golden Pothos",
    //optional
    synonyms: "Pothos, Devil's Ivy, Taro Vine, Ivy Arum",
    binomialName: "Epipremnum aureum",
    origin: "Mo'orea Island of French Polynesia",
    image: "/assets/Golden-Pothos.jpg",
    //t/f if t but check if f make red
    //on click on characteristic second dropdown for order
    petFriendly: false,
    //sun, average, shade
    //Light Shade
    light: "Average",
    //often, sometimes, rarely
    water: "Sometimes",
    //soil, leca,water, air
    growingMedium: "Soil, Water",
    //dramaqueen, moderate, independent
    care: "Moderate",
    //propogation methods
    propogation: "Air layering, Softwood cuttings",
    //by genetics, not care
    siblings: "N/A",
  },

  {
    _id: uuidv4(),
    commonName: "String of Pearls",
    //optional
    synonyms: "Curio, Rosary Vine, String of Beads",
    binomialName: "Curio rowleyanus",
    origin: "Southwest Africa",
    image: "/assets/string-of-pearls.jpg",
    //t/f if t but check if f make red
    //on click on characteristic second dropdown for order
    petFriendly: false,
    //sun, average, shade
    //light shade
    light: "Average",
    //often, sometimes, rarely
    water: "Sometimes",
    //soil, leca,water, air
    growingMedium: "Soil",
    //dramaqueen, moderate, independent
    care: "Moderate",
    //propogation methods
    propogation: "Soil",
    //by genetics, not care
    siblings: "N/A",
  },

  {
    _id: uuidv4(),
    commonName: "Aloe Vera",
    //optional
    synonyms: "Medicinal Aloe, Aloe barbadensis, Savila",
    binomialName: "Aloe vera",
    origin: "Arabian Penninsula",
    image: "/assets/aloe-vera.jfif",
    //t/f if t but check if f make red
    //on click on characteristic second dropdown for order
    petFriendly: false,
    //sun, average, shade
    light: "Any",
    //often, sometimes, rarely
    water: "Sometimes",
    //soil, leca,water, air
    growingMedium: "Soil",
    //dramaqueen, moderate, independent
    care: "Moderate",
    //propogation methods
    propogation: "The pups, softwood cuttings",
    //by genetics, not care
    siblings: "N/A",
  },

  {
    _id: uuidv4(),
    commonName: "Monstera",
    //optional
    synonyms:
      "Ceriman, Mexican Breadfruit, Split-Leaf Philodendron, Windowleaf",
    binomialName: "Monstera deliciosa",
    origin: "Southern Mexico",
    image: "/assets/monstera.jpg",
    //t/f if t but check if f make red
    //on click on characteristic second dropdown for order
    petFriendly: false,
    //sun, average, shade
    //light shade
    light: "shade",
    //often, sometimes, rarely
    //needs consistently moist soil
    water: "Often",
    //soil, leca,water, air
    growingMedium: "soil",
    //dramaqueen, moderate, independent
    //-dramaqueen
    care: "moderate",
    //propogation methods
    propogation: "Layering",
    //by genetics, not care
    siblings: "N/A",
  },

  {
    _id: uuidv4(),
    commonName: "Pink Princess Philodendron",
    //optional
    synonyms: "Blushing Philodendron",
    binomialName: "Philodendron erubescens",
    origin: "Colombia",
    image: "/assets/princess.jpg",
    //t/f if t but check if f make red
    //on click on characteristic second dropdown for order
    petFriendly: false,
    //sun, average, shade
    //partial to full
    light: "shade",
    //often, sometimes, rarely
    water: "average",
    //soil, leca,water, air
    growingMedium: "soil",
    //dramaqueen, moderate, independent
    care: "moderate",
    //propogation methods
    propogation: "leaf cuttings",
    //by genetics, not care
    siblings: "N/A",
  },

  {
    _id: uuidv4(),
    commonName: "Snake Plant",
    //optional
    synonyms: "Goldbanded Snake Plant 'Twist', Sansevaria",
    binomialName: "Sansevieria trifasciata",
    origin: "West Africa",
    image: "/assets/snake-plant.jpg",
    //t/f if t but check if f make red
    //on click on characteristic second dropdown for order
    petFriendly: false,
    //sun, average, shade
    light: "Any",
    //often, sometimes, rarely
    water: "Sometimes",
    //soil, leca,water, air
    growingMedium: "Soil",
    //dramaqueen, moderate, independent
    care: "Moderate",
    //propogation methods
    propogation: "Leaf cuttings",
    //by genetics, not care
    siblings: "N/A",
  },

  {
    _id: uuidv4(),
    commonName: "Boston Fern",
    //optional
    synonyms: "N/A",
    binomialName: "Nephrolepis exalta bostoniensis",
    origin: "Tropical regions of the world",
    image: "/assets/boston-fern.jfif",
    //t/f if t but check if f make red
    //on click on characteristic second dropdown for order
    petFriendly: true,
    //sun, average, shade
    light: "Any",
    //often, sometimes, rarely
    water: "Sometimes",
    //soil, leca,water, air
    growingMedium: "Soil",
    //dramaqueen, moderate, independent
    care: "Drama Queen",
    //propogation methods
    propogation: "The Pups",
    //by genetics, not care
    siblings: "N/A",
  },

  {
    _id: uuidv4(),
    commonName: "African Violet",
    //optional
    synonyms: "N/A",
    binomialName: "Saintpaulia",
    origin: "Tanzania, Kenya",
    image: "/assets/african-violet.jpg",
    //t/f if t but check if f make red
    //on click on characteristic second dropdown for order
    petFriendly: true,
    //sun, average, shade
    light: "Sun",
    //often, sometimes, rarely
    water: "average",
    //soil, leca,water, air
    growingMedium: "soil",
    //dramaqueen, moderate, independent
    care: "moderate",
    //propogation methods
    propogation: "Leaf cuttings",
    //by genetics, not care
    siblings: "N/A",
  },

  {
    _id: uuidv4(),
    commonName: "Australian Hoya",
    //optional
    synonyms: "Wax Plant, Australian Waxflower, Porcelain Flower",
    binomialName: "Hoya australis",
    origin: "Australia",
    image: "/assets/hoya.jfif",
    //t/f if t but check if f make red
    //on click on characteristic second dropdown for order
    petFriendly: true,
    //sun, average, shade
    light: "Average",
    //often, sometimes, rarely
    water: "sometimes",
    //soil, leca,water, air
    growingMedium: "Soil",
    //dramaqueen, moderate, independent
    care: "Moderate",
    //propogation methods
    propogation: "Unknown",
    //by genetics, not care
    siblings: "N/A",
  },

  {
    _id: uuidv4(),
    commonName: "Fiddleleaf Fig",
    //optional
    synonyms: "Lyrate-Leaf Fig",
    binomialName: "Ficus lyrata",
    origin: "Western Africa",
    image: "/assets/fiddleleaf.jpg",
    //t/f if t but check if f make red
    //on click on characteristic second dropdown for order
    petFriendly: false,
    //sun, average, shade
    //light-partial shade
    light: "shade",
    //often, sometimes, rarely
    water: "sometimes",
    //soil, leca,water, air
    growingMedium: "soil",
    //dramaqueen, moderate, independent
    care: "moderate",
    //propogation methods
    propogation: "woody stem cuttings",
    //by genetics, not care
    siblings: "N/A",
  },

  {
    _id: uuidv4(),
    commonName: "Old Lady Cactus",
    //optional
    synonyms: "Old Lady Pincushion",
    binomialName: "Mammillaria hahniana",
    origin: "Mexico",
    image: "/assets/old-lady-cactus.jfif",
    //t/f if t but check if f make red
    //on click on characteristic second dropdown for order
    petFriendly: false,
    //sun, average, shade
    light: "full sun",
    //often, sometimes, rarely
    water: "once/2wk",
    //soil, leca, water, air
    growingMedium: "Sandy Potting Mix",
    //dramaqueen, moderate, independent
    care: "independent",
    //propogation methods
    propogation: "seeds, cut surface, woody stem cutting",
    //by genetics, not care
    siblings: "N/A",
  },

  {
    _id: uuidv4(),
    commonName: "Easter Cactus",
    //optional
    synonyms: "Violet Easter Lily Cactus",
    binomialName: "Echinopsis obrepanda",
    origin: "Bolivia, believed",
    image: "/assets/easter-cactus.jfif",
    //t/f if t but check if f make red
    //on click on characteristic second dropdown for order
    petFriendly: false,
    //sun, average, shade
    light: "partial light",
    //often, sometimes, rarely
    water: "once/wk",
    //soil, leca,water, air
    growingMedium: "sandy soil",
    //dramaqueen, moderate, independent
    care: "independent",
    //propogation methods
    propogation: "seeds, cut surface, woody stem cutting",
    //by genetics, not care
    siblings: "N/A",
  },

  {
    _id: uuidv4(),
    commonName: "Bunny Ears Cactus",
    //optional
    synonyms: "Polka Dots, Honey Bunny, Alba Bunny Ears",
    binomialName: "Opuntia microdasys",
    origin: "Central and Northern Mexico",
    image: "/assets/bunny-ears.jpg",
    //t/f if t but check if f make red
    //on click on characteristic second dropdown for order
    petFriendly: false,
    //sun, average, shade
    light: "partial",
    //often, sometimes, rarely
    water: "3-4wks",
    //soil, leca,water, air
    growingMedium: "soil",
    //dramaqueen, moderate, independent
    care: "independent",
    //propogation methods
    propogation: "seets, grafting, woody stem cutting",
    //by genetics, not care
    siblings: "N/A",
  },

  {
    _id: uuidv4(),
    commonName: "Lady's Slipper Orchid",  //optional
    synonyms: "Showy Lady's Slipper",
    binomialName: "Cypripedium reginae",
    origin: "Northern North America",
    image: "/assets/lady's-slipper.jpg",
    //t/f if t but check if f make red
    //on click on characteristic second dropdown for order
    petFriendly: true,
    //sun, average, shade
    light: "shade",
    //often, sometimes, rarely
    //needs lots of moisture, suitable for a water garden
    water: "often",
    //soil, leca,water, air
    growingMedium: "soil, air",
    //dramaqueen, moderate, independent
    care: "moderate",
    //propogation methods
    propogation: "seeds",
    //by genetics, not care
    siblings: "N/A",
  },

  {
    _id: uuidv4(),
    commonName: "Westphalia Pansy",
    //optional
    synonyms: "Blue Zinc Violet High Calamine Pansy, Zinc Pansy",
    binomialName: "Viola lutea",
    origin: "Europe",
    image: "/assets/mountain-pansy.jpg",
    //t/f if t but check if f make red
    //on click on characteristic second dropdown for order
    petFriendly: false,
    //sun, average, shade
    light: "sun, partial shade",
    //often, sometimes, rarely
    water: "Unknown",
    //soil, leca,water, air
    growingMedium: "soil",
    //dramaqueen, moderate, independent
    care: "moderate",
    //propogation methods
    propogation: "seeds",
    //by genetics, not care
    siblings: "N/A",
  },

  {
    _id: uuidv4(),
    commonName: "Spider Plant",
    //optional
    synonyms: "Ribbon Plant, Anthericum, Spider Ivy",
    binomialName: "Chlorophytum comosum",
    origin: "Tropical Africa and Southern Africa",
    image: "/assets/spider-plant.jfif",
    //t/f if t but check if f make red
    //on click on characteristic second dropdown for order
    petFriendly: true,
    //sun, average, shade
    light: "average",
    //often, sometimes, rarely
    //soil must be kept damp
    water: "often",
    //soil, leca,water, air
    growingMedium: "soil, water",
    //dramaqueen, moderate, independent
    care: "moderate",
    //propogation methods
    propogation: "The pups",
    //by genetics, not care
    siblings: "N/A",
  },
];

const posts = [

  //{
  //   username: "",
  //   timestamp: "2021-08-2",
  //   likedBy: [],
  //   propagatedBy: [];
  //   status: ``,
  //   media: [
  //     {
  //       type: "",
  //       url: "",
  //     },
  //   ],
  // },
  {
    _id: uuidv4(),
    username: "R_S",
    timestamp: "2021-02-14",
    likedBy: [],
    propagatedBy: [],
    status: `Just saw a Echinopsis (Echinopsis calochlora) in a video and I need to find one. Does anyone know of a plant nursery in the greater Montreal area that sells them? Thank you xx`,
    media: [],
  },
  {
    _id: uuidv4(),
    username: "Cat-J",
    timestamp: "2021-05-17",
    likedBy: [],
    propagatedBy: [],
    status: `Cats are a menace I swear (ironic innit). I left the room for 5 minutes and I come back to this... `,
    media: [
      {
        type: "img",
        url: "/assets/knocked-over.jpg",
      },
    ],
  },
  {
    _id: uuidv4(),
    username: "L'arme",
    timestamp: "2020-09-15",
    likedBy: [],
    propagatedBy: [],
    status: `It's finally here! On my way to cross it off the wishlist<3`,
    media: [
      {
        type: "img",
        url: "/assets/delivered-plant.jpg",
      },
    ],
  },
  {
    _id: uuidv4(),
    username: "Amy JK",
    timestamp: "2020-07-10",
    likedBy: [],
    propagatedBy: [],
    status: `Saw this in a garden on my way to work. Can anyone identify it?`,
    media: [
      {
        type: "img",
        url: "/assets/passing-garden.jpg",
      },
    ],
  },
  {
    _id: uuidv4(),
    username: "Amy JK",
    timestamp: "2019-04-26",
    likedBy: [],
    propagatedBy: [],
    status: `How are you all today? My orchid woke up and wanted to say hello lol`,
    media: [
      {
        type: "img",
        url: "/assets/Orch_id-Puuidv4()2.jpg",
      },
    ],
  },
  {
    _id: uuidv4(),
    username: "JonnyG",
    timestamp: "2020-01-01",
    likedBy: [],
    propagatedBy: [],
    status: `It's a great day to be a plant dad...look how healthy they all are.`,
    media: [
      {
        type: "img",
        url: "/assets/plant-dad.jpg",
      },
    ],
  },
  {
    _id: uuidv4(),
    username: "L'arme",
    timestamp: "2020-03-26",
    likedBy: [],
    propagatedBy: [],
    status: `Building myself a little greenhouse. Any veteran plant parents have any advice?`,
    media: [],
  },
];

module.exports = {
  plants,
  posts,
};
