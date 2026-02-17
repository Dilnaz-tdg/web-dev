import { Product } from '../models/product';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Кофемашина Delonghi ECAM220.50.BG бежевый',
    description: 'Кофемашина DeLonghi Magnifica Start ECAM 220. 50. BG сочетает в себе множество возможностей для приготовления вкусного кофе а также простоту использования и надежность. Благодаря ей вы сможете насладиться идеальным напитком который зарядит вас энергией на весь день. Вы можете наслаждаться как молотым кофе так и кофе в зернах и открывать свои любимые композиции. ',
    price: 229990,
    rating: 4.8,
    image: 'products/kw2.jpg',
    images: [
      'products/kw2.jpg',
      'products/kw1.jpg',
      'products/kw3.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/kofemashina-delonghi-ecam220-50-bg-bezhevyi-145399057/?c=750000000',
  },

  {
    id: 2,
    name: 'Фитнес-браслет Xiaomi Smart Band 10 черный',
    description: 'Xiaomi Smart Band 10 — стильный и функциональный фитнес-браслет в черном цвете, который станет вашим надежным помощником в достижении спортивных целей и контроле здоровья.',
    price: 23608,
    rating: 5.0,
    image: 'products/x1.jpg',
    images: [
      'products/x2.jpg',
      'products/x3.jpg',
      'products/x4.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-10-chernyi-141530632/?c=750000000',
  },

  {
    id: 3,
    name: 'Электронная книга Amazon Kindle Paperwhite 2024 (12th Generation) черный',
    description: 'Данная модель Kindle Paperwhite 2024 года – новейшая модель с 7-дюймовым дисплеем Paperwhite, которая отличается улучшенной контрастностью и скоростью перелистывания страниц на 25% быстрее, чем у предыдущих версий.',
    price: 100494,
    rating: 5.0,
    image: 'products/k1.jpg',
    images: [
      'products/k2.jpg',
      'products/k3.jpg',
      'products/k4.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/amazon-kindle-paperwhite-2024-12th-generation-chernyi-129285472/?c=750000000',
  },

  {
    id: 4,
    name: 'Умная колонка Яндекс Станция Лайт YNDX-00025 фиолетовый',
    description: ' Яндекс.Станция Лайт — это яркая и компактная умная колонка, которая управляется голосом и сенсорными кнопками. Она здорово украсит интерьер и сможет развлечь ребенка: матовый корпус приятно держать в руках, а расцветка порадует глаз. У Алисы в Станции Лайт свой характер — он зависит от цвета устройства. ',
    price: 55000,
    rating: 4.9,
    image: 'products/c1.jpg',
    images: [
      'products/c2.jpg',
      'products/c3.jpg',
      'products/c4.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/jandeks-stantsija-lait-yndx-00025-fioletovyi-101870266/?c=750000000',
  },

  {
    id: 5,
    name: 'Напольный штатив Base B152H черный',
    description: 'Этот мобильный штатив надежно фиксирует смартфон или камеру, позволяя снимать с нужного ракурса и на идеальной высоте. Он обеспечит устойчивость, четкость изображения и удобство в использовании.',
    price: 10890,
    rating: 4.7,
    image: 'products/h1.jpg',
    images: [
      'products/h2.jpg',
      'products/h3.jpg',
      'products/h4.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/napol-nyi-shtativ-base-b152h-chernyi-124082213/?c=750000000',
  },

  {
    id: 6,
    name: 'Проектор HESOYAM A10',
    description: 'Проектор HESOYAM A10 — Ваш домашний кинотеатр в мини-формате\n' +
      'Наслаждайтесь киномоментами на широком экране с этим легким и мощным портативным проектором HESOYAM A10. Идеальное решение для просмотра фильмов, сериалов и игр в формате Full HD с четкими цветами и глубокими тенями.',
    price: 41999,
    rating: 5.0,
    image: 'products/pr1.jpg',
    images: [
      'products/pr1.jpg',
      'products/pr3.jpg',
      'products/pr4.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/proektor-hesoyam-a10-143239875/?c=750000000',
  },

  {
    id: 7,
    name: 'Аэрогриль Xiaomi Smart Air Fryer MAF15 5.5 л белый',
    description: 'Аэрогриль Xiaomi Smart Air Fryer MAF15 — умная готовка с минимумом масла. Объём 5.5 л, 11 автоматических программ, сенсорное управление и поддержка управления через приложение. Готовит хрустящие и полезные блюда быстро и удобно. Стильный дизайн и лёгкий уход делают его идеальным для кухни.',
    price: 139900,
    rating: 5.0,
    image: 'products/ar1.jpg',
    images: [
      'products/ar1.jpg',
      'products/ar2.jpg',
      'products/ar3.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-smart-air-fryer-maf15-5-5-l-belyi-120489647/?c=750000000',
  },

  {
    id: 8,
    name: 'Пылесос White Wave KH288 серый',
    description: 'Мощный, лёгкий и продуманный до мелочей — этот пылесос станет вашим универсальным помощником для дома, мебели и автомобиля.\n' +
      '\n' +
      '\n' +
      '4 режима в одном устройстве — вертикальный, ручной, для матраса и для труднодоступных мест. Подходит для уборки пола, дивана, машины и углов, куда раньше не доставали.',
    price: 9990,
    rating: 5.0,
    image: 'products/pl1.jpg',
    images: [
      'products/pl1.jpg',
      'products/pl2.jpg',
      'products/pl3.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/white-wave-kh288-seryi-148304448/?c=750000000',
  },

  {
    id: 9,
    name: 'Наушники JBL Tune 510BT черный',
    description: 'Наушники JBL Tune 510BT позволяют наслаждаться мощными басами благодаря технологии JBL Pure Bass без проводов. Эти простые в использовании наушники работают до 40 часов на одном заряде аккумулятора, а, подключив зарядный кабель USB-C всего на пять минут к сети питания, вы получите еще 2 часа воспроизведения.',
    price: 14692,
    rating: 5.0,
    image: 'products/n1.jpeg',
    images: [
      'products/n1.jpg',
      'products/n2.jpg',
      'products/n3.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-510bt-chernyi-101420081/?c=750000000',
  },

  {
    id: 10,
    name: 'Кофемашина HYDEN Aroma рожковая с капучинатором',
    description: 'Кофемашинас капучинатором HYDEN Aroma — это идеальное сочетание стиля, мощности и функциональности для настоящих ценителей кофе. Оснащённая мощным насосом с давлением 20 бар, она обеспечивает профессиональное качество приготовления напитков, позволяя раскрыть богатый вкус и насыщенный аромат каждого кофейного зерна. ',
    price: 59990,
    rating: 5.0,
    image: 'products/kk1.jpg',
    images: [
      'products/kk1.jpg',
      'products/kk2.jpg',
      'products/kk3.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/kofemashina-hyden-aroma-rozhkovaja-s-kapuchinatorom-146378246/?c=750000000',
  }




];
