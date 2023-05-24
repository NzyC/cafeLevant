import coffeeFrappe from "./assets/drinks/coffee-frappe.jpg";
import cookiesAndCream from "./assets/drinks/cookie-frappe.jpg";
import biscoffFrappe from "./assets/drinks/biscoff-frappe.jpg"
import tumericShot from "./assets/drinks/tumeric-shot.jpg";
import raspberryMilkshake from "./assets/drinks/raspberry-milkshake.jpg"
import chocolateMilkshake from "./assets/drinks/chocolate-milkshake.jpg"
import caramelMilkshake from "./assets/drinks/caramel-milkshake.jpg"
import avacadoSmoothie from "./assets/drinks/avacado-smoothie.jpg"
import mangoSmoothie from "./assets/drinks/mago-smoothie.jpg"
import bananaSmoothie from "./assets/drinks/banana-smoothie.jpg"
import berrySmoothie from "./assets/drinks/berry-smoothie.jpg";
import citrusBang from "./assets/drinks/citrus-bang.jpg"
import watermelonMint from "./assets/drinks/watermelon-mint.jpg"
import greenMachine from "./assets/drinks/green-machine.jpg"
import mintCrush from "./assets/drinks/mint-crush.jpg"
import pomegranateCrush from "./assets/drinks/pomegranet.jpg"
import dirtyV from "./assets/drinks/dirty-v.jpg"
import avocadoSourdough from "./assets/breakfast/Avocado Sourdough.jpg";
import acaiBowl from "./assets/breakfast/acai-bowl.jpg";
import atayefPancakes from "./assets/breakfast/ashta-pancakes.jpg";
import levanteOmelete from "./assets/breakfast/levant-omelette.jpg";
import lambEggs from "./assets/breakfast/lamb-eggs.jpg"
import eggsBenny from "./assets/breakfast/eggs-bennedict.jpg"
import chilliEggs from "./assets/breakfast/chilli-eggs.jpg"
import eggsOnToast from "./assets/breakfast/eggs-on-toast.jpg"
import sultanBoard from "./assets/breakfast/sultan-board.jpg"
import cheeseCroissant from "./assets/breakfast/cheese-croissant.jpg"
import fruitToast from "./assets/breakfast/fruit-toast.jpg"
import cheeseKaak from "./assets/breakfast/cheeseKaak.jpg"
import softDrink from "./assets/soft-drink.jpg"


export const drinkCategories = [
  {
    id: 1,
    name:  "Specialty Teas",
  },
  {
    id: 2,
    name:  "Hot Brewed",
  },
  {
    id: 3,
    name:  "Hot Drinks",
  },
  {
    id: 4,
    name: "Levantine",
  },
  {
    id: 5,
    name:  "Cold Drinks",
  },
  {
    id: 6,
    name:  "Milkshakes",
  },
  {
    id: 7,
    name:  "Shots",
  },
  {
    id: 8,
    name:  "Smoothies",
  },
  {
    id: 9,
    name:  "Frappe's",
  },
  {
    id: 10,
    name:  "Juices",
  },
  {
    id: 11,
    name:  "Levant Cocktails",
  },
  {
    id: 12,
    name:  "Soft Drinks",
  },
]

export const specialtyTeas = [
  {
    id: 74,
    name: "AUSSIE CUPPA",
    description: "simply black tea.",
    price: {
      takeaway: 4,
      dineIn: 9,
    },
  },
  {
    id: 1,
    name: "JORDANIAN SAGE",
    description: "Shai bil maremiah. Ceylon black tea with sage",
    price: {
      takeaway: 4,
      dineIn: 9,
    },
  },
  {
    id: 2,
    name: "LEBANESE CINNAMON",
    description:
      "Shai bil Kirfi. Ceylon black tea with cinnamon and a hint of rose",
    price: {
      takeaway: 4,
      dineIn: 9,
    },
  },
  {
    id: 3,
    name: "MORROCAN MINT",
    description: "Atai bil Na'na'. Gunpowder green tea with refreshing mint ",
    price: {
      takeaway: 4,
      dineIn: 9,
    },
  },
  {
    id: 4,
    name: "IRAQI DRIED LIME",
    description:
      "Chai Numi Basra. Tisane tea featuring exotic bitter dried limes",
    price: {
      takeaway: 4,
      dineIn: 9,
    },
  },
  {
    id: 5,
    name: "SYRIAN ANISEED",
    description: "Shai bil yansoon. Ceylon black tea with aniseed",
    price: {
      takeaway: 4,
      dineIn: 9,
    },
  },
  {
    id: 6,
    name: "PERSIAN CARDAMOM",
    description:
      "Chayi ba Hel. Darjeeling, Earl grey and Ceylon black teas, spiced with aromatic cardamom and rose",
    price: {
      takeaway: 4,
      dineIn: 9,
    },
  },
];

export const hotBrewed = [
  {
    id: 7,
    name: "PALESTINIAN MINT",
    description: "Shai bil Na'na'. Ceylon black tea with mint",
    price: {
      takeaway: 4,
      dineIn: 9,
      iced: 7,
    },
  },
  {
    id: 8,
    name: "EGYPTIAN HIBISCUS",
    description: "Karkady. Caffeine free hibsicus leaf",
    price: {
      takeaway: 4,
      dineIn: 9,
      iced: 7,
    },
  },
  {
    id: 9,
    name: "TURKISH APPLE",
    description:
      "Elma Chai. Caffeine free with real apple, cinnamon and cloves",
    price: {
      takeaway: 4,
      dineIn: 9,
      iced: 7,
    },
  },
];

export const hot = [
  {
    id: 10,
    name: "ESPRESSO",
    description: "house blend, single origin +0.5",
    price: 4.5,
  },
  {
    id: 11,
    name: "MACCHIATO",
    description: "house blend, single origin +0.5",
    price: 4.5,
  },
  {
    id: 12,
    name: "PICCOLO",
    description: "house blend, single origin +0.5",
    price: 4.5,
  },
  {
    id: 13,
    name: "CAPPUCINO",
    description: "house blend, single origin +0.5",
    price: {
      reg: 4,
      lrg: 4.5,
    },
  },
  {
    id: 14,
    name: "LATTE",
    description: "house blend, single origin +0.5",
    price: {
      reg: 4,
      lrg: 4.5,
    },
  },
  {
    id: 15,
    name: "FLAT WHITE",
    description: "house blend, single origin +0.5",
    price: {
      reg: 4,
      lrg: 4.5,
    },
  },
  {
    id: 16,
    name: "LONG BLACK",
    description: "house blend, single origin +0.5",
    price: {
      reg: 4,
      lrg: 4.5,
    },
  },
  {
    id: 17,
    name: "BELGIAN MOCHA",
    description: null,
    price: {
      reg: 5.5,
      lrg: 6,
    },
  },
  {
    id: 18,
    name: "BELGIAN HOT CHOCOLATE",
    description: null,
    price: {
      reg: 5.5,
      lrg: 6,
    },
  },
  {
    id: 19,
    name: "BELGIAN WHITE CHOCOLATE",
    description: null,
    price: {
      reg: 5.5,
      lrg: 6,
    },
  },
  {
    id: 20,
    name: "CHAI ADDICT CHAI LATTE",
    description: null,
    price: {
      reg: 5.5,
      lrg: 6,
    },
  },
  {
    id: 21,
    name: "MATCHA LATTE",
    description: null,
    price: {
      reg: 5.5,
      lrg: 6,
    },
  },
  {
    id: 77,
    name: "TURMERIC LATTE",
    description: null,
    price: {
      reg: 5.5,
      lrg: 6,
    },
  },
  {
    id: 78,
    name: "DIRTY CHAI",
    description: null,
    price: {
      reg: 5.5,
      lrg: 6,
    },
  },
];

export const levantineCoffee = [
  {
    id: 22,
    name: "ARABIC",
    description: "Made by the Brik on hot sand",
    price: 7,
  },
  {
    id: 23,
    name: "ARABIC WITH CARDAMOM",
    description: "Made by the Brik on hot sand",
    price: 7,
  },
  {
    id: 24,
    name: "LEVANT WITH MASTICA",
    description: "Made by the Brik on hot sand",
    price: 7,
  },
];

export const cold = [
  {
    id: 25,
    name: "ICED LONG BLACK",
    description: null,
    price: 7,
  },
  {
    id: 26,
    name: "ICED LATTE",
    description: null,
    price: 7,
  },
  {
    id: 27,
    name: "ICED CHOCOLATE",
    description: null,
    price: 7,
  },
  {
    id: 79,
    name: "ICED CHAI",
    description: null,
    price: 7,
  },
  {
    id: 80,
    name: "ICED MATCHA",
    description: null,
    price: 7,
  },
];

export const milkshakes = [
  {
    id: 27,
    name: "RASPBERRY",
    description: null,
    price: {
      reg: 8,
      lrg: 6,
    },
    img: raspberryMilkshake
  },
  {
    id: 28,
    name: "CHOCOLATE",
    description: null,
    price: {
      reg: 8,
      lrg: 6,
    },
    img: chocolateMilkshake
  },
  {
    id: 29,
    name: "CARAMEL",
    description: null,
    price: {
      reg: 8,
      lrg: 6,
    },
    img: caramelMilkshake
  },
];

export const smoothies = [
  {
    id: 30,
    name: "BANANA",
    description: "milk, banana, honey",
    price: 10,
    img: bananaSmoothie
  },
  {
    id: 31,
    name: "MANGO",
    description: "milk, mango, honey",
    price: 10,
    img: mangoSmoothie
  },
  {
    id: 32,
    name: "BERRY",
    description: "milk, mixed berries, banana, yoghurt, honey",
    price: 10,
    img: berrySmoothie
  },
  {
    id: 33,
    name: "AVACADO",
    description:
      "milk, avocado, greens, raw cacoa, pics peanut butter, honey",
    price: 10,
    img: avacadoSmoothie
  },
  {
    id: 81,
    name: "ACAI",
    description: "organic acai, guarana syrup, banana, cane sugar",
    price: 10,
    img: raspberryMilkshake
  },
];

export const frappe = [
  {
    id: 34,
    name: "LEVANT DATE",
    description:
      "Milk, dates, date molasses, icecream, pecans, whipped cream",
    price: 10,
    img: cookiesAndCream,
  },
  {
    id: 35,
    name: "CARAMEL LOTUS",
    description: "Milk, bisco, ice cream, caramel, banana, whipped cream",
    price: 10,
    img: biscoffFrappe,
  },
  {
    id: 36,
    name: "COFFEE",
    description: "Milk, espresso, ice cream, whipped cream",
    price: 10,
    img: coffeeFrappe,
  },
  {
    id: 37,
    name: "COOKIES & CREAM",
    description: "Milk, Oreo cookies, vanilla ice cream, banana, cream",
    price: 10,
    img: cookiesAndCream,
  },
];

export const juices = [
  {
    id: 38,
    name: "CITRUS BANG",
    description: "Orange, lemon, lime, ginger",
    price: 7.5,
    img: citrusBang,
  },
  {
    id: 39,
    name: "WAM",
    description: "Watermelon, apple, mint",
    price: 7.5,
    img: watermelonMint,
  },
  {
    id: 40,
    name: "GREEN MACHINE",
    description: "Celery, green apple, spinach, cucumber, lemon",
    price: 7.5,
    img: greenMachine,
  },
];

export const shots = [
  {
    id: 82,
    name: "TURMERIC SHOT",
    description:
      "tumeric, ginger, raw apple cider vinegar, lemon, black pepper",
    price: 8,
    img: tumericShot,
  },
  {
    id: 83,
    name: "GINGER SHOT",
    description: "ginger, lemon",
    price: 8,
    img: tumericShot,
  },
];

export const postDecaf = [
  {
    id: 84,
    name: "COLD DRIP",
    description: "takeaway +.1",
    price: 7,
    img: null,
  },
  {
    id: 85,
    name: "BATCH BREW",
    description: "upgrade to refillable +3.5",
    price: 6.5,
    img: null,
  },
];

export const levantCocktails = [
  {
    id: 86,
    name: "LEMON MINT CRUSH",
    description: "fresh lemon, mint, raw sugar syrup",
    price: 10,
    img: mintCrush,
  },
  {
    id: 87,
    name: "RASPBERRY POMEGRANATE CRUSH",
    description: "pomegranate juice, raspberry syrup, lime",
    price: 10,
    img: pomegranateCrush,
  },
  {
    id: 88,
    name: "DIRTY V",
    description: "jalapeno salt rimmed, lime, V",
    price: 10,
    img: dirtyV,
  },
];

export const softDrinks = [
  {
    id: 89,
    name: "FIJI WATER BOTTLE",
    description: null,
    price: 4.5,
    img: softDrink
  },
  {
    id: 90,
    name: "SAN PELEGRINO SPARKLING",
    description: null,
    price: 4.5,
    img: softDrink
  },
  {
    id: 91,
    name: "COKE",
    description: null,
    price: 4.5,
    img: softDrink
  },
  {
    id: 92,
    name: "COKE NO SUGAR",
    description: null,
    price: 4.5,
    img: softDrink
  },
  {
    id: 93,
    name: "V",
    description: null,
    price: 4.5,
    img: softDrink
  },
  {
    id: 94,
    name: "V NO SUGAR",
    description: null,
    price: 4.5,
    img: softDrink
  },
  {
    id: 95,
    name: "PUREZZA SPARKLING 750ML (DINE IN ONLY)",
    description: null,
    price: 5,
    img: softDrink
  },
]


export const breakfast = [
  {
    id: 41,
    name: "EGGS BENEDICT",
    description:
      "Mulloon Creek organic poached egg, spinach, smoked salmon, sourdough, hollandaise sauce",
    price: 24,
    img: eggsBenny
  },
  {
    id: 42,
    name: "ASHTA ATAYEF PANCAKES",
    description:
      "Levantine clotted cream, caramelised banana, fresh berries, maple syrup served with pistachio ice cream",
    price: 22,
    img: atayefPancakes,
  },
  {
    id: 43,
    name: "ORGANIC ACAI BOWL",
    description:
      "Strawberries, banana, granola. Add Watermelon, Peanut butter, Nutella, Biscoff, Honey, GF Granola +2",
    price: 15,
    img: acaiBowl,
  },
  {
    id: 44,
    name: "AVOCADO SOURDOUGH",
    description:
      "Mulloon Creek organic poached egg, Persian feta, pickled fennel, radish",
    price: 21,
    img: avocadoSourdough,
  },
  {
    id: 45,
    name: "LAMB EGGS",
    description:
      "2 Mulloon Creek organic fried eggs, lamb kafta, sumac onion, roasted capsicum with labneh, tomato, cucumber, pita bread",
    price: 24,
    img: lambEggs
  },
  {
    id: 46,
    name: "CHILLI MUSHROOMS",
    description:
      "2 Mulloon Creek organic poached eggs, tea smoked labneh, burnt butter, dukkah",
    price: 24,
    img: chilliEggs
  },
  {
    id: 47,
    name: "ORGANIC EGGS & TOAST",
    description:
      "eggs your way (fried/scrambled/ poached) served with sourdough, add extra sides to make your ultimate big brekky",
    price: 15,
    img: eggsOnToast
  },
  {
    id: 48,
    name: "LEVANT OMELETTE",
    description:
      "Organic eggs, slow cooked wild mushroom, mozzarella, spinach with beef rashers & sourdough",
    price: 24,
    img: levanteOmelete,
  },
  {
    id: 50,
    name: "THE SULTAN'S BREAKFAST (2 PEOPLE)",
    description:
      "Sujuk, scrambled/fried eggs, labneh, house made beans, grilled halloumi, tomato, cucumber, za'atar, our pickles & olives, sourdough, warm kaāk with a pot of tea",
    price: 64,
    img: sultanBoard
  },
  {
    id: 49,
    name: "FRUIT TOAST",
    description: null,
    price: 6,
    img: fruitToast
  },
  {
    id: 85,
    name: "CHEESE KAAK TOASTIE (LEBANESE STYLE PITA POCKET)",
    description: null,
    price: 7,
    img: cheeseKaak
  },
  {
    id: 86,
    name: "BASTURMA + CHEESE CROISSANT",
    description: null,
    price: 9,
    img: cheeseCroissant
  },
];