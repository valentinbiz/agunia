const SHOP_DATA = [
  {
    title: 'Flowers',
    items: [
      {
        id: 1,
        name: 'Brown Banana Flower',
        imageUrl: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zmxvd2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
        price: 25,
      },
      {
        id: 2,
        name: 'Ficus',
        imageUrl: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zmxvd2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',        price: 18,
      },
      {
        id: 3,
        name: 'Papadie',
        imageUrl: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zmxvd2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',        price: 35,
      },
      {
        id: 4,
        name: 'Crini',
        imageUrl: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zmxvd2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',        price: 25,
      },
      {
        id: 5,
        name: 'Curu gainii',
        imageUrl: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zmxvd2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',        price: 18,
      },
      {
        id: 6,
        name: 'Trandafiri',
        imageUrl: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zmxvd2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',        price: 14,
      },
      {
        id: 7,
        name: 'Lalele',
        imageUrl: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zmxvd2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',        price: 18,
      },
      {
        id: 8,
        name: 'White Roses',
        imageUrl: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zmxvd2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',        price: 14,
      },
      {
        id: 9,
        name: 'Blue Lalea',
        imageUrl: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zmxvd2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',        price: 16,
      },
    ],
  },
  {
    title: 'Bedroom',
    items: [
      {
        id: 10,
        name: 'Bed',
        imageUrl: 'https://images.unsplash.com/photo-1574643156929-51fa098b0394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        price: 220,
      },
      {
        id: 11,
        name: 'Bedside Table',
        imageUrl: 'https://images.unsplash.com/photo-1574643156929-51fa098b0394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        price: 280,
      },
      {
        id: 12,
        name: 'Mirror',
        imageUrl: 'https://images.unsplash.com/photo-1574643156929-51fa098b0394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                price: 110,
      },
      {
        id: 13,
        name: 'Warderobe',
        imageUrl: 'https://images.unsplash.com/photo-1574643156929-51fa098b0394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',        price: 160,
      },
      {
        id: 14,
        name: 'Rug',
        imageUrl: 'https://images.unsplash.com/photo-1574643156929-51fa098b0394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',        price: 160,
      },
      {
        id: 15,
        name: 'Pillows',
        imageUrl: 'https://images.unsplash.com/photo-1574643156929-51fa098b0394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',        price: 160,
      },
      {
        id: 16,
        name: 'Table',
        imageUrl: 'https://images.unsplash.com/photo-1574643156929-51fa098b0394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',        price: 190,
      },
      {
        id: 17,
        name: 'Chairs',
        imageUrl: 'https://images.unsplash.com/photo-1574643156929-51fa098b0394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',        price: 200,
      },
    ],
  },
  {
    title: 'Kitchen',
    items: [
      {
        id: 18,
        name: 'Sink',
        imageUrl: 'https://images.unsplash.com/photo-1550223026-0d6fd780c560?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGtpdGNoZW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
        price: 125,
      },
      {
        id: 19,
        name: 'Fridge',
        imageUrl: 'https://images.unsplash.com/photo-1550223026-0d6fd780c560?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGtpdGNoZW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',        price: 90,
      },
      {
        id: 20,
        name: 'Table and Chairs',
        imageUrl: 'https://images.unsplash.com/photo-1550223026-0d6fd780c560?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGtpdGNoZW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',        price: 90,
      },
      {
        id: 21,
        name: 'Kitchen Utensils',
        imageUrl: 'https://images.unsplash.com/photo-1550223026-0d6fd780c560?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGtpdGNoZW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',        price: 165,
      },
      {
        id: 22,
        name: 'Knives',
        imageUrl: 'https://images.unsplash.com/photo-1550223026-0d6fd780c560?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGtpdGNoZW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',        price: 185,
      },
    ],
  },
  {
    title: 'Bathroom',
    items: [
      {
        id: 23,
        name: 'Sink',
        imageUrl: 'https://images.unsplash.com/photo-1628602813485-4e8b09442e98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJhdGhyb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
        price: 25,
      },
      {
        id: 24,
        name: 'Toilet',
        imageUrl: 'https://images.unsplash.com/photo-1628602813485-4e8b09442e98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJhdGhyb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',        price: 20,
      },
      {
        id: 25,
        name: 'Bathtub',
        imageUrl: 'https://images.unsplash.com/photo-1628602813485-4e8b09442e98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJhdGhyb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',        price: 80,
      },
      {
        id: 26,
        name: 'Shower',
        imageUrl: 'https://images.unsplash.com/photo-1628602813485-4e8b09442e98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJhdGhyb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',        price: 80,
      },
      {
        id: 27,
        name: 'Toilet Brush',
        imageUrl: 'https://images.unsplash.com/photo-1628602813485-4e8b09442e98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJhdGhyb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',        price: 45,
      },
      {
        id: 28,
        name: 'Toiletries',
        imageUrl: 'https://images.unsplash.com/photo-1628602813485-4e8b09442e98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJhdGhyb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',        price: 135,
      },
      {
        id: 29,
        name: 'Mirror',
        imageUrl: 'https://images.unsplash.com/photo-1628602813485-4e8b09442e98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJhdGhyb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',        price: 20,
      },
    ],
  },
  {
    title: 'Office',
    items: [
      {
        id: 30,
        name: 'Desk',
        imageUrl: 'https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
        price: 325,
      },
      {
        id: 31,
        name: 'Computer',
        imageUrl: 'https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',        price: 20,
      },
      {
        id: 32,
        name: 'Office Chair',
        imageUrl: 'https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',        price: 25,
      },
      {
        id: 33,
        name: 'Bookshelf',
        imageUrl: 'https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',        price: 25,
      },
      {
        id: 34,
        name: 'Reading Chair',
        imageUrl: 'https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',        price: 40,
      },
      {
        id: 35,
        name: 'Desk Utensils',
        imageUrl: 'https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',        price: 25,
      },
    ],
  },
];


export default SHOP_DATA;