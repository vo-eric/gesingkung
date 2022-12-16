//ộ
//ố;

const products = [
  {
    id: 1,
    name: 'Bột Bánh Bao',
    englishName: 'Steamed Bun',
    size: 16,
    measurement: 'oz',
    quantity: 40,
    sku: 'SK-01',
    image: 'https://vo-eric.github.io/gesingkungimages/bot-banh-bao.jpg',
  },
  {
    id: 2,
    name: 'Bột Làm Bánh Bột Lọc',
    englishName: 'Transparent Wet Rice Rolls',
    size: 12,
    measurement: 'oz',
    quantity: 45,
    sku: 'SK-02',
    image:
      'https://vo-eric.github.io/gesingkungimages/bot-lam-banh-bot-loc.jpg',
  },
  {
    id: 3,
    name: 'Bột Khoai Tinh Khiềt',
    englishName: 'Potato Starch',
    size: 12,
    measurement: 'oz',
    quantity: 45,
    sku: 'SK-03',
    image:
      'https://vo-eric.github.io/gesingkungimages/bot-khoai-tinh-khiet.jpg',
  },
  {
    id: 4,
    name: 'Bot Tom & Chuoi Chien',
    englishName: 'Banana and Shrimp Batter Mix',
    size: 12,
    measurement: 'oz',
    quantity: 45,
    sku: 'SK-04',
    image:
      'https://vo-eric.github.io/gesingkungimages/bot-chuoi-chien-tom-chien.jpg',
  },
  {
    id: 5,
    name: 'Bột Bánh Cuốn',
    englishName: 'Steamed Rice Rolls Flour',
    size: 12,
    measurement: 'oz',
    quantity: 45,
    sku: 'SK-05',
    image: 'https://vo-eric.github.io/gesingkungimages/bot-banh-cuon.jpg',
  },
  {
    id: 6,
    name: 'Bột Bánh Xèo',
    englishName: 'Prepared Flour',
    size: 12,
    measurement: 'oz',
    quantity: 45,
    sku: 'SK-06',
    image: 'https://vo-eric.github.io/gesingkungimages/bot-banh-xeo.jpg',
  },
  {
    id: 7,
    name: 'Bột Chiên Triều Châu',
    englishName: 'Tia Chieu Fried Cake',
    size: 12,
    measurement: 'oz',
    quantity: 45,
    sku: 'SK-06A',
    image:
      'https://vo-eric.github.io/gesingkungimages/bot-chien-trieu-chau.jpg',
  },
  {
    id: 8,
    name: 'Bột Bánh Bèo',
    englishName: 'White Rice Cake',
    size: 12,
    measurement: 'oz',
    quantity: 45,
    sku: 'SK-07',
    image: 'https://vo-eric.github.io/gesingkungimages/bot-banh-beo.jpg',
  },
  {
    id: 9,
    name: 'Bột Há Cảo',
    englishName: 'Steamed Shrimp Dumpling',
    size: 12,
    measurement: 'oz',
    quantity: 45,
    sku: 'SK-08',
    image: 'https://vo-eric.github.io/gesingkungimages/bot-ha-cao.jpg',
  },
  {
    id: 10,
    name: 'Bột Bánh Bò',
    englishName: 'Steamed Rice Cake Flour',
    size: 12,
    measurement: 'oz',
    quantity: 45,
    sku: 'SK-09',
    image: 'https://vo-eric.github.io/gesingkungimages/bot-banh-bo.jpg',
  },
  {
    id: 11,
    name: 'Bột Bánh Cống',
    englishName: '',
    size: 12,
    measurement: 'oz',
    quantity: 45,
    sku: 'SK-10',
    image: 'https://vo-eric.github.io/gesingkungimages/bot-banh-cong.jpg',
  },
  {
    id: 12,
    name: 'Bột Bánh Giò',
    englishName: 'Steamed Pork Rice Flour',
    size: 12,
    measurement: 'oz',
    quantity: 45,
    sku: 'SK-11',
    image: 'https://vo-eric.github.io/gesingkungimages/bot-banh-gio.jpg',
  },
  {
    id: 13,
    name: 'Bột Bánh Khọt',
    englishName: 'Little Circle Shrimp Cake',
    size: 12,
    measurement: 'oz',
    quantity: 45,
    sku: 'SK-12',
    image: 'https://vo-eric.github.io/gesingkungimages/bot-banh-khot.jpg',
  },
  {
    id: 14,
    name: 'Bột Làm Hột Lựu',
    englishName: 'Guava Cube',
    size: 12,
    measurement: 'oz',
    quantity: 45,
    sku: 'SK-13',
    image: 'https://vo-eric.github.io/gesingkungimages/bot-lam-hot-luu.jpg',
  },
  {
    id: 15,
    name: 'Cà Ri Bơ (Ít Cay)',
    englishName: 'Madras Curry (Mild)',
    size: 2,
    measurement: 'oz',
    quantity: 50,
    sku: 'SK-14',
    image: 'https://vo-eric.github.io/gesingkungimages/ca-ri-bo-it-cay.jpg',
  },
  {
    id: 16,
    name: 'Gia Vị Nấu Bún Bò Húê',
    englishName: 'Oriental Mixed Chili',
    size: 2,
    measurement: 'oz',
    quantity: 50,
    sku: 'SK-15',
    image:
      'https://vo-eric.github.io/gesingkungimages/gia-vi-nau-bun-bo-hue.jpg',
  },
  {
    id: 17,
    name: 'Gia Vi Ragu',
    englishName: 'Stew Seasoning',
    size: 2,
    measurement: 'oz',
    quantity: 50,
    sku: 'SK-15A',
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 18,
    name: 'Bun Bo Hue',
    englishName: 'Oriental Mix Chili (Bottle)',
    size: 16,
    measurement: 'oz',
    quantity: 12,
    sku: 'SK-15B',
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 19,
    name: 'Bun Bo Hue',
    englishName: 'Oriental Mix Chili (Bottle)',
    size: 5,
    measurement: 'lbs',
    quantity: 4,
    sku: 'SK-15B',
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 20,
    name: 'Gia Vị Nấu Phở',
    englishName: 'Chinese Special Spice',
    size: 2,
    measurement: 'oz',
    quantity: 50,
    sku: 'SK-16',
    image: 'https://vo-eric.github.io/gesingkungimages/gia-vi-nau-pho.jpg',
  },
  {
    id: 21,
    name: 'Gia Vị Phá Lấu',
    englishName: 'Oriental Mixed Soy Sauce',
    size: 2,
    measurement: 'oz',
    quantity: 50,
    sku: 'SK-17',
    image:
      'https://vo-eric.github.io/gesingkungimages/gia-vi-pha-lau-saigon.jpg',
  },
  {
    id: 22,
    name: 'Ngũ Vị Hương',
    englishName: 'Oriental Special Five Spices',
    size: 2,
    measurement: 'oz',
    quantity: 50,
    sku: 'SK-17A',
    image: 'https://vo-eric.github.io/gesingkungimages/ngu-vi-huong.jpg',
  },
  {
    id: 23,
    name: 'Gia Vị Nấu Bò Kho',
    englishName: 'Oriental Beef Spice',
    size: 2,
    measurement: 'oz',
    quantity: 50,
    sku: 'SK-18',
    image: 'https://vo-eric.github.io/gesingkungimages/gia-vi-nau-bo-kho.jpg',
  },
  {
    id: 24,
    name: 'Bo Kho',
    englishName: 'Oriental Beef Spices (Bottle)',
    size: 16,
    measurement: 'oz',
    quantity: 12,
    sku: 'SK-18B',
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 25,
    name: 'Bo Kho',
    englishName: 'Oriental Beef Spices (Bottle)',
    size: 5,
    measurement: 'lbs',
    quantity: 4,
    sku: 'SK-18D',
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 26,
    name: 'Gia Vi Ga Xa Ot',
    englishName: 'Roast Rib, Beef, Chicken',
    size: 2,
    measurement: 'oz',
    quantity: 50,
    sku: 'SK-19',
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 27,
    name: 'Gia Vi Ga Xa Ot',
    englishName: 'Roast Rib, Beef, Chicken',
    size: 16,
    measurement: 'oz',
    quantity: 12,
    sku: 'SK-19B',
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 28,
    name: 'Cà Ri Nị Ấn Độ',
    englishName: 'Madras Curry Powder',
    size: 2,
    measurement: 'oz',
    quantity: 50,
    sku: 'SK-20',
    image: 'https://vo-eric.github.io/gesingkungimages/ca-ri-ni-an-do-2.jpg',
  },
  {
    id: 29,
    name: 'Cà Ri Nị Ấn Độ (Chai)',
    englishName: 'Madras Curry Powder (Bottle)',
    size: 4,
    measurement: 'oz',
    quantity: 12,
    sku: 'SK-21',
    image: 'https://vo-eric.github.io/gesingkungimages/ca-ri-ni-an-do-4.jpg',
  },
  {
    id: 30,
    name: 'Cà Ri Nị Ấn Độ (Chai)',
    englishName: 'Madras Curry Powder (Bottle)',
    size: 16,
    measurement: 'oz',
    quantity: 12,
    sku: 'SK-21A',
    image: 'https://vo-eric.github.io/gesingkungimages/ca-ri-ni-an-do-16.jpg',
  },
  {
    id: 31,
    name: 'Ca Ri Ni (Chai)',
    englishName: 'Madras Curry Powder',
    size: 5,
    measurement: 'lbs',
    quantity: 4,
    sku: 'SK-21B',
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 32,
    name: 'Ca Ri Dau',
    englishName: 'Madras Curry Paste',
    size: 8,
    measurement: 'oz',
    quantity: 12,
    sku: 'SK-22',
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 33,
    name: 'Gia Vị Thịt & Cá Kho Tộ',
    englishName: 'Spices for Catfish Sauce',
    size: 16,
    measurement: 'oz',
    quantity: 12,
    sku: 'SK-22B',
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 34,
    name: 'Gia Vị Thịt & Cá Kho Tộ',
    englishName: 'Spices for Catfish Sauce',
    size: 5,
    measurement: 'lbs',
    quantity: 4,
    sku: 'SK-22D',
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 35,
    name: 'Gia Vị Thịt & Cá Kho Tộ',
    englishName: 'Spices for Catfish Sauce',
    size: 2,
    measurement: 'oz',
    quantity: 50,
    sku: 'SK-23',
    image:
      'https://vo-eric.github.io/gesingkungimages/gia-vi-thit-ca-kho-to.jpg',
  },
  {
    id: 36,
    name: 'Gia Vị Làm Chạo Tôm',
    englishName: 'BBQ Shrimp Balls',
    size: 2,
    measurement: 'oz',
    quantity: 50,
    sku: 'SK-24',
    image: 'https://vo-eric.github.io/gesingkungimages/gia-vi-lam-chao-tom.jpg',
  },
  {
    id: 37,
    name: 'Gia Vị Nấu Mi Vịt Tiềm (Filter)',
    englishName: 'Spice for Duck Noodle Soup',
    size: 2,
    measurement: 'oz',
    quantity: 24,
    sku: 'SK-25',
    image:
      'https://vo-eric.github.io/gesingkungimages/gia-vi-nau-mi-vit-tiem.jpg',
  },
  {
    id: 38,
    name: 'Gia Vị Nấu Phở (Filter)',
    englishName: 'Chinese Special Sauce',
    size: 2,
    measurement: 'oz',
    quantity: 24,
    sku: 'SK-26',
    image:
      'https://vo-eric.github.io/gesingkungimages/gia-vi-nau-pho-filter.jpg',
  },
  {
    id: 39,
    name: 'Phá Lấu',
    englishName: 'Oriental Mixed Soy Sauce',
    size: 2,
    measurement: 'oz',
    quantity: 24,
    sku: 'SK-27',
    image: 'https://vo-eric.github.io/gesingkungimages/pha-lau.jpg',
  },
  {
    id: 40,
    name: 'Gia Vị Tôm Rang Muối',
    englishName: 'Frying Salty Shrimp Mix',
    size: 3,
    measurement: 'oz',
    quantity: 50,
    sku: 'SK-28',
    image:
      'https://vo-eric.github.io/gesingkungimages/gia-vi-tom-rang-muoi.jpg',
  },
  {
    id: 41,
    name: 'Gia Vi Canh Ga Chien Bo',
    englishName: 'Chicken Wings Butter Fry',
    size: 3,
    measurement: 'oz',
    quantity: 50,
    sku: 'SK-28A',
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 42,
    name: 'Gia Vị Tôm & Bò Nướng Vỉ',
    englishName: 'Spice for V.N. Beef & Shrimp',
    size: 2,
    measurement: 'oz',
    quantity: 50,
    sku: 'SK-29',
    image:
      'https://vo-eric.github.io/gesingkungimages/gia-vi-tom-bo-nuong-vi.jpg',
  },
  {
    id: 43,
    name: 'Gia Vị Nấu Mì Quãng Phan Thiết',
    englishName: 'Spice for V.N. Noodle Soup',
    size: 2,
    measurement: 'oz',
    quantity: 50,
    sku: 'SK-30',
    image:
      'https://vo-eric.github.io/gesingkungimages/gia-vi-nau-mi-quang-phan-thiet.jpg',
  },
  {
    id: 44,
    name: 'Gia Vị Lẩu Vịt Nấu Chao',
    englishName: 'Spice for V.N. Duck Soup',
    size: 2,
    measurement: 'oz',
    quantity: 50,
    sku: 'SK-31',
    image:
      'https://vo-eric.github.io/gesingkungimages/gia-vi-lau-vit-nau-chao.jpg',
  },
  {
    id: 45,
    name: 'Gia Vị Nem Nướng Thư Đưc',
    englishName: 'Spice for V.N. Barbeque',
    size: 2,
    measurement: 'oz',
    quantity: 50,
    sku: 'SK-32',
    image:
      'https://vo-eric.github.io/gesingkungimages/gia-vi-nem-nuong-thu-duc.jpg',
  },
  {
    id: 46,
    name: 'Thính Saigon',
    englishName: 'Roast Rice Powder',
    size: 3,
    measurement: 'oz',
    quantity: 100,
    sku: 'SK-33',
    image: 'https://vo-eric.github.io/gesingkungimages/thinh-saigon-3.jpg',
  },
  {
    id: 47,
    name: 'Thính Saigon',
    englishName: 'Roast Rice Powder',
    size: 16,
    measurement: 'oz',
    quantity: 24,
    sku: 'SK-33A',
    image: 'https://vo-eric.github.io/gesingkungimages/thinh-saigon-16.jpg',
  },
  {
    id: 48,
    name: 'Thinh Saigon',
    englishName: 'Roast Rice Powder',
    size: 5,
    measurement: 'lbs',
    quantity: 10,
    sku: 'SK-33B',
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 49,
    name: 'Bột Nghệ',
    englishName: 'Turmeric',
    size: 2,
    measurement: 'oz',
    quantity: 50,
    sku: 'SK-34',
    image: 'https://vo-eric.github.io/gesingkungimages/bot-nghe-2.jpg',
  },
  {
    id: 50,
    name: 'Hột Điều Màu',
    englishName: 'Annatto Seed',
    size: 2,
    measurement: 'oz',
    quantity: 50,
    sku: 'SK-35',
    image: 'https://vo-eric.github.io/gesingkungimages/hot-dieu-mau.jpg',
  },
  {
    id: 51,
    name: 'Hot Dieu Mau',
    englishName: 'Annatto Seed (Whole)',
    size: 5,
    measurement: 'lbs',
    quantity: 8,
    sku: 'SK-35A',
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 52,
    name: 'Lá Thơm',
    englishName: 'Bay Leaf',
    size: 0.5,
    measurement: 'oz',
    quantity: 50,
    sku: 'SK-36',
    image: 'https://vo-eric.github.io/gesingkungimages/la-thom.jpg',
  },
  {
    id: 53,
    name: 'La Thom',
    englishName: 'Bay Leaf',
    size: 1,
    measurement: 'lb',
    quantity: 5,
    sku: 'SK-36A',
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 54,
    name: 'Hột Ngò',
    englishName: 'Whole Coriander',
    size: 2,
    measurement: 'oz',
    quantity: 50,
    sku: 'SK-37',
    image: 'https://vo-eric.github.io/gesingkungimages/hot-ngo.jpg',
  },
  {
    id: 55,
    name: 'Hot Ngo',
    englishName: 'Whole Coriander',
    size: 5,
    measurement: 'lbs',
    quantity: 4,
    sku: 'SK-52A',
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 56,
    name: 'Ớt Miếng',
    englishName: 'Crushed Chili',
    size: 2,
    measurement: 'oz',
    quantity: 50,
    sku: 'SK-38',
    image: 'https://vo-eric.github.io/gesingkungimages/ot-mieng.jpg',
  },
  {
    id: 57,
    name: 'Ot Mieng',
    englishName: 'Crushed Chili',
    size: 5,
    measurement: 'lbs',
    quantity: 7,
    sku: 'SK-38A',
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 58,
    name: 'Ớt Màu',
    englishName: 'Paprika',
    size: 2,
    measurement: 'oz',
    quantity: 50,
    sku: 'SK-39',
    image: 'https://vo-eric.github.io/gesingkungimages/ot-mau.jpg',
  },
  {
    id: 59,
    name: 'Ot Mau',
    englishName: 'Paprika',
    size: 16,
    measurement: 'oz',
    quantity: 12,
    sku: 'SK-39A',
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 60,
    name: 'Ot Mau',
    englishName: 'Paprika',
    size: 5,
    measurement: 'lbs',
    quantity: 8,
    sku: 'SK-39B',
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 61,
    name: 'Ngò Om Nấu Canh Chua',
    englishName: 'Cumin',
    size: 2,
    measurement: 'oz',
    quantity: 50,
    sku: 'SK-40',
    image:
      'https://vo-eric.github.io/gesingkungimages/ngo-om-nau-canh-chua.jpg',
  },
  {
    id: 62,
    name: 'Hành Xấy',
    englishName: 'Chopped Onion',
    size: 2,
    measurement: 'oz',
    quantity: 50,
    sku: 'SK-41',
    image: 'https://vo-eric.github.io/gesingkungimages/hanh-xay.jpg',
  },
  {
    id: 63,
    name: 'Hanh Xay',
    englishName: 'Chopped Onion',
    size: 5,
    measurement: 'lbs',
    quantity: 5,
    sku: 'SK-41A',
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 64,
    name: 'Tiều Hồi',
    englishName: 'Fennel Seed',
    size: 2,
    measurement: 'oz',
    quantity: 50,
    sku: 'SK-42',
    image: 'https://vo-eric.github.io/gesingkungimages/tieu-hoi.jpg',
  },
  {
    id: 65,
    name: 'Bột Nghệ (Chai)',
    englishName: 'Turmeric (Bottle)',
    size: 4,
    measurement: 'oz',
    quantity: 12,
    sku: 'SK-43',
    image: 'https://vo-eric.github.io/gesingkungimages/bot-nghe-4.jpg',
  },
  {
    id: 66,
    name: 'Bột Nghệ (Chai)',
    englishName: 'Turmeric (Bottle)',
    size: 16,
    measurement: 'oz',
    quantity: 12,
    sku: 'SK-43A',
    image: 'https://vo-eric.github.io/gesingkungimages/bot-nghe-16.jpg',
  },
  {
    id: 67,
    name: 'Ngũ Vị Hương (Chai)',
    englishName: 'Oriental Special Five Spices (Bottle)',
    size: 4,
    measurement: 'oz',
    quantity: 12,
    sku: 'SK-44',
    image: 'https://vo-eric.github.io/gesingkungimages/ngu-vi-huong-4.jpg',
  },
  {
    id: 68,
    name: 'Ngũ Vị Hương Huong (Chai)',
    englishName: 'Oriental Special Five Spices (Bottle)',
    size: 16,
    measurement: 'oz',
    quantity: 12,
    sku: 'SK-44A',
    image: 'https://vo-eric.github.io/gesingkungimages/ngu-vi-huong-16.jpg',
  },
  {
    id: 69,
    name: 'Me Trang',
    englishName: 'Sesame Seed',
    size: 5,
    measurement: 'lbs',
    quantity: 8,
    sku: 'SK-46A',
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 70,
    name: 'Ot Cay',
    englishName: 'Cayenne',
    size: 5,
    measurement: 'lbs',
    quantity: 8,
    sku: 'SK-49A',
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 71,
    name: 'Tieu Hoi',
    englishName: 'Fennel Seed (Whole)',
    size: 5,
    measurement: 'lbs',
    quantity: 5,
    sku: 'SK-50A',
    image: 'https://via.placeholder.com/200',
  },
];

let isMobileUser = false;

const detectMobileUser = () => {
  if ('maxTouchPoints' in navigator) {
    isMobileUser = navigator.maxTouchPoints > 0;
  } else if ('msMaxTouchPoints' in navigator) {
    isMobileUser = navigator.msMaxTouchPoints > 0;
  } else {
    var mQ = window.matchMedia && matchMedia('(pointer:coarse)');
    if (mQ && mQ.media === '(pointer:coarse)') {
      isMobileUser = !!mQ.matches;
    } else if ('orientation' in window) {
      isMobileUser = true; // deprecated, but good fallback
    } else {
      // Only as a last resort, fall back to user agent sniffing
      var UA = navigator.userAgent;
      isMobileUser =
        /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
        /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
    }
  }

  return isMobileUser;
};

const prods = document.querySelector('.product-list');
function addProducts() {
  products.forEach((product, i) => {
    let addLazyLoading = false;

    if (product.image !== 'https://via.placeholder.com/200') {
      const listItem = document.createElement('li');
      listItem.classList.add('product-item');

      if (!isMobileUser && i % 4 !== 0) {
        listItem.classList.add('custom-border');
      }

      if (isMobileUser && i > 5) addLazyLoading = true;
      // loading = 'lazy';

      listItem.innerHTML = `
        <div class="product-info">
          <img 
            class="product-image" 
            src=${product.image} 
            loading=${addLazyLoading ? 'lazy' : 'eager'} 
            height=300 
            width=250 
            alt=${product.englishName} 
            />
          <strong class="product-name">${product.name}</strong>
          <p class="product-name-eng">${product.englishName}</p>
          <p class="product-details">${product.quantity} x ${product.size}${
        product.measurement
      }</p>
        </div>
      `;

      prods.appendChild(listItem);
    } else {
      console.log('name:', product.name);
      console.log('sku:', product.sku);
      console.log('english:', product.englishName);
      console.log('size:', product.size);
      console.log('========');
    }
  });
}

detectMobileUser();
addProducts();
