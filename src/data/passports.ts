import { BuildingPassport } from '../types';

export const MAIN_BUILDING_PASSPORT: BuildingPassport = {
  id: 'lp-001-main',
  serialNumber: 'LP-1844-3D',
  title: 'ГОЛОВНИЙ КОРПУС',
  subtitle: 'Lviv Polytechnic National University Main Building',
  architect: 'Юліан Захаревич (Julian Zachariewicz)',
  style: 'Неоренесанс',
  yearBuilt: '1816 / 1877',
  description: 'Збудований 1816 року, за проектом видатного архітектора Юліана Захаревича (Julian Zachariewicz) у стилі неоренесанс.',
  heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwGZ8pV9M61A-_uWvxvL_FI6K8OfT2Fc1FliSiHLozcxlNL2CgM6qVtFa5VYGtBk7B1RbkogEsrnnK_zBkTak1mOxYYjlNLDbQpSlb8G6zDeGJwz7A1m28ZdykqANKEB8XICKISAzapydkSXsyiSnZ_PPU-c5J0lUG0lA4nrVSjd4u6_f24JmaOQFvGUmTF8fyPpWp3FTExEqN1mfD0ReOD9eWHzaYKD7m5GkJ2GPTSaC03PaNlyBvF1nPgRlygkuwUEc',
  nfcStatus: 'NFC AUTHENTICATED',
  edition: '№ 001 / 001',
  metrics: {
    topUkraineRank: '#1',
    consolidatedRank: '#3',
    studentsCount: '32 651',
    studentsLabel: 'Студентів',
  },
  scaleMetrics: [
    {
      icon: 'apartment',
      value: '35+',
      label: 'Навчальних корпусів',
    },
    {
      icon: 'location_city',
      value: '15',
      label: 'Гуртожитків',
    },
  ],
  historyFacts: [
    {
      id: 'fact-1',
      title: 'Унікальна Актова зала з полотнами Матейка',
      shortSummary: 'Актова зала з 11 монументальними полотнами-алегоріями «Тріумф прогресу».',
      fullText: 'Унікальна Актова зала з полотнами Матейка. Зала збереглася практично в автентичному вигляді з ХІХ століття. Її стіни прикрашають 11 монументальних картин-алегорій «Тріумф прогресу», створених за ескізами видатного польського художника Яна Матейка та його учнів у 1880-х роках. Вони символізують шлях людства від ремесел до науки й мистецтва',
      year: '1880-ті',
      tag: 'МИСТЕЦТВО & АРХІТЕКТУРА',
    },
    {
      id: 'fact-2',
      title: 'Читальна зала старої бібліотеки та маскарони',
      shortSummary: 'Деревʼяні шафи з авторськими маскаронами Захаревича і Марконі.',
      fullText: 'У колишній читальній залі старої бібліотеки (тепер зала ім. Юліана Захаревича) на дерев\'яних книжкових шафах збереглися маскарони — декоративні скульптурні голови. Деякі з них є стилізованими автопортретами самого архітектора Юліана Захаревича та скульптора Леонардо Марконі. Аналогічні за збереженістю університетські читальні зали такого рівня є лише в одиниці європейських вишів.',
      year: '1877',
      tag: 'СКУЛЬПТУРА & СПАДЩИНА',
    },
    {
      id: 'fact-3',
      title: 'Офіційний символ-логотип університету',
      shortSummary: 'Неоренесансний фасад з аркадою — головна візитівка закладу.',
      fullText: 'Офіційний символ-логотип. Фасад головного корпусу з його характерними неоренесансними рисами та аркадою став візитівкою університету — саме його стилізоване зображення розміщене на офіційному логотипі Львівської політехніки.',
      year: '1877 — 2026',
      tag: 'ГЕРАЛЬДИКА & БРЕНД',
    },
    {
      id: 'fact-4',
      title: 'Статус національної пам\'ятки',
      shortSummary: 'У листопаді 2024 року визнано пам\'яткою національного значення.',
      fullText: 'Статус національної пам\'ятки. Довгий час будівля мала статус пам’ятки місцевого значення, проте у листопаді 2024 року уряд офіційно змінив її категорію, визнавши головний корпус пам\'яткою архітектури, історії та монументального мистецтва національного значення.',
      year: 'Листопад 2024',
      tag: 'ОХОРОНА СПАДЩИНИ',
    },
  ],
  technicalSpecs: [
    {
      category: 'АРХІТЕКТУРНІ ПАРАМЕТРИ',
      items: [
        { key: 'Стиль', value: 'Історизм, неоренесанс (Neorenaissance)' },
        { key: 'Головний архітектор', value: 'Юліан Захаревич (Julian Zachariewicz)' },
        { key: 'Скульптурне оздоблення', value: 'Леонардо Марконі, Еміль Шредль' },
        { key: 'Загальна площа', value: '28 450 м²' },
        { key: 'Кількість поверхів', value: '3 наземні + цокольний + мансардний' },
        { key: 'Кількість колон портику', value: '6 коринфських колон' },
      ],
    },
    {
      category: 'КОНСТРУКТИВНІ МАТЕРІАЛИ',
      items: [
        { key: 'Фундамент & Стіни', value: 'Тесаний пісковик, червона повнотіла цегла' },
        { key: 'Перекриття актової зали', value: 'Клепані металеві ферми (Керовані інженерні розрахунки XIX ст.)' },
        { key: 'Сходи & Балюстради', value: 'Білий італійський мармур, карпатський сірий граніт' },
        { key: 'Світловий ліхтар', value: 'Октагональний засклений купол вестибюлю' },
      ],
    },
    {
      category: 'ІНЖЕНЕРНІ СИСТЕМИ & ТЕХНОЛОГІЇ',
      items: [
        { key: 'Опалення та вентиляція', value: 'Гравітаційна вентиляція + автономний теплопункт' },
        { key: 'Акустика зали Матейка', value: 'Природна реверберація 1.6 с (автентичний розрахунок)' },
        { key: 'Освітлення сходів', value: 'Природний світловий ліхтар (купольний атріум)' },
        { key: 'Моніторинг стану', value: 'Постійний геодезичний контроль несучих конструкцій' },
      ],
    },
  ],
  coordinates: {
    lat: 49.8354,
    lng: 24.0145,
    address: 'м. Львів, вул. Степана Бандери, 12',
  },
  provenance: {
    tokenHash: '0x8f73b19488a0e234c9c1b72e0081d683fa2e9a4f7831d3e8e19c0177e1124b89',
    blockNumber: '#184492026',
    verifiedAt: '2026-08-29 13:41:59 EEST',
    curator: 'Archival Prestige Curator Council & Lviv Polytechnic Digitization Lab',
    integrityScore: 99.98,
  },
};

export const ADDITIONAL_PASSPORTS: BuildingPassport[] = [
  MAIN_BUILDING_PASSPORT,
  {
    id: 'lp-002-chem',
    serialNumber: 'LP-1886-CH',
    title: 'КОРПУС № 1 (ХІМІЧНИЙ)',
    subtitle: 'Faculty of Chemical Technology & Chemistry Laboratories',
    architect: 'Юліан Захаревич',
    style: 'Неоренесанс / Технічний класицизм',
    yearBuilt: '1886',
    description: 'Один із найстаріших хімічних корпусів у Центрально-Східній Європі зі спеціалізованими витяжними баштами та автентичними лабораторіями.',
    heroImage: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
    nfcStatus: 'NFC AUTHENTICATED',
    edition: '№ 002 / 035',
    metrics: {
      topUkraineRank: '#1',
      consolidatedRank: '#3',
      studentsCount: '4 120',
      studentsLabel: 'Хіміків & Технологів',
    },
    scaleMetrics: [
      { icon: 'science', value: '28', label: 'Дослідницьких лабораторій' },
      { icon: 'school', value: '4', label: 'Спеціалізовані кафедри' },
    ],
    historyFacts: [
      {
        id: 'chem-fact-1',
        title: 'Інноваційна вентиляційна система 1886 року',
        shortSummary: 'Оригінальні керамічні повітропроводи, що функціонують понад 140 років.',
        fullText: 'Юліан Захаревич спроєктував будівлю із складною системою гравітаційної витяжки через центральні пілони даху, що забезпечувало безпеку дослідів без електричних моторів.',
        year: '1886',
        tag: 'ІНЖЕНЕРІЯ',
      },
    ],
    technicalSpecs: [
      {
        category: 'АРХІТЕКТУРНІ ПАРАМЕТРИ',
        items: [
          { key: 'Стиль', value: 'Неоренесанс' },
          { key: 'Загальна площа', value: '14 200 м²' },
          { key: 'Особливість', value: 'Хімічно стійкі гранітні робочі плити XIX ст.' },
        ],
      },
    ],
    coordinates: {
      lat: 49.8361,
      lng: 24.0152,
      address: 'м. Львів, вул. Професорська, 1',
    },
    provenance: {
      tokenHash: '0x9923ca1098b1a774ef82110cba483920feea29019b88301ecb0019283746ab12',
      blockNumber: '#188602026',
      verifiedAt: '2026-08-28 10:15:00 EEST',
      curator: 'Faculty of Chemistry Archival Group',
      integrityScore: 99.85,
    },
  },
  {
    id: 'lp-004-lib',
    serialNumber: 'LP-1930-NTB',
    title: 'НАУКОВО-ТЕХНІЧНА БІБЛІОТЕКА',
    subtitle: 'Scientific and Technical Library Archive',
    architect: 'Тадеуш Обмінський (Tadeusz Obmiński)',
    style: 'Модернізм / Ар-деко',
    yearBuilt: '1929-1935',
    description: 'Флагман інженерної думки та унікальне книгосховище з понад 3 мільйонами рідкісних інкунабул, креслень та монографій.',
    heroImage: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
    nfcStatus: 'NFC AUTHENTICATED',
    edition: '№ 004 / 035',
    metrics: {
      topUkraineRank: '#1',
      consolidatedRank: '#3',
      studentsCount: '3.1M+',
      studentsLabel: 'Одиниць зберігання',
    },
    scaleMetrics: [
      { icon: 'book', value: '3.1M', label: 'Рідкісних фоліантів' },
      { icon: 'apartment', value: '8', label: 'Читальних залів' },
    ],
    historyFacts: [
      {
        id: 'lib-fact-1',
        title: 'Унікальне залізобетонне книгосховище',
        shortSummary: 'Одне з перших у Львові спеціалізованих кліматичних сховищ.',
        fullText: 'Спроєктоване професором Тадеушем Обмінським за останніми стандартами протипожежної та температурної безпеки початку XX століття.',
        year: '1930',
        tag: 'МОДЕРНІЗМ',
      },
    ],
    technicalSpecs: [
      {
        category: 'БІБЛІОТЕЧНІ ФОНДИ',
        items: [
          { key: 'Рідкісні видання', value: 'Понад 50 000 старовинних креслень і карт' },
          { key: 'Сховище', value: '6 рівнів спеціалізованих металевих стелажів' },
        ],
      },
    ],
    coordinates: {
      lat: 49.8349,
      lng: 24.0138,
      address: 'м. Львів, вул. Професорська, 1',
    },
    provenance: {
      tokenHash: '0x44ab77c102830fde291881736ca9182390ff198734001928374991827364aa21',
      blockNumber: '#193002026',
      verifiedAt: '2026-08-25 15:40:22 EEST',
      curator: 'National Library Digitization Directorate',
      integrityScore: 100.0,
    },
  },
];
