const langButtons = document.querySelectorAll("[data-btn]");
const allLangs = ["ua", "en"];
const currentPathName = window.location.pathname;
let currentLang =
  localStorage.getItem("language") || checkBrowserLang() || "ua";
let currentTexts = {};

const homeTexts = {
  "home_page-title": {
    ua: "Головна",
    en: "Main",
  },
  "home_page-0": {
    ua: "Меню",
    en: "Menu",
  },
  "home_page-1": {
    ua: "Каталог",
    en: "Catalog",
  },
  "home_page-2": {
    ua: "О нас",
    en: "About us",
  },
  "home_page-3": {
    ua: "Доставка і оплата",
    en: "Delivery and Payment",
  },
  "home_page-4": {
    ua: "Контакти",
    en: "Contacts",
  },
  "home_page-5": {
    ua: "Відгуки",
    en: "Reviews",
  },
  "home_page-35": {
    ua: "Каталог",
    en: "Catalog",
  },
  "home_page-36": {
    ua: "О нас",
    en: "About us",
  },
  "home_page-37": {
    ua: "Доставка і оплата",
    en: "Delivery and Payment",
  },
  "home_page-38": {
    ua: "Контакти",
    en: "Contacts",
  },
  "home_page-39": {
    ua: "Відгуки",
    en: "Reviews",
  },
  "home_page-6": {
    ua: "Якісні зоотовари від виробника для ваших улюбленців",
    en: "Quality pet products from the manufacturer for your pets",
  },
  "home_page-7": {
    ua: "Онлайн магазин з продажу товарів для домашніх тварин з доставкою по всій Україні",
    en: "Online store selling products for pets with delivery throughout Ukraine",
  },
  "home_page-8": {
    ua: "ПЕРЕЙТИ ДО КАТАЛОГУ",
    en: "GO TO CATALOG",
  },
  "home_page-9": {
    ua: "О нас",
    en: "About us",
  },
  "home_page-10": {
    ua: "Давним-давно група любителів собак відкрила інтернет-магазин модного одягу для собак у невеликому містечку біля моря. Урочисте відкриття магазину пройшло успішно, на ньому було представлено стильні варіанти для собак усіх розмірів та порід. Команда використовувала маркетингові тактики, такі як соціальні мережі та співпраця з впливовими особами свійських тварин, щоб поширити інформацію. Вони спростили процес онлайн-покупок та забезпечили швидке обслуговування клієнтів. Магазин також пропонував практичні, але модні аксесуари. Цей інтернет-магазин одягу для собак ознаменував новий початок в індустрії моди для домашніх тварин, обіцяючи привнести інноваційні можливості у моду.",
    en: "A long time ago, a group of dog lovers opened an online fashion store for dogs in a small town by the sea. The grand opening of the store was a success, featuring stylish options for dogs of all sizes and breeds. The team used marketing tactics such as social media and partnering with pet influencers to spread the word. They simplified the online shopping process and provided fast customer service. The store also offered practical yet fashionable accessories. This online dog clothing store has marked a new beginning in the pet fashion industry, promising to bring innovation to fashion.",
  },
  "home_page-11": {
    ua: "Каталог",
    en: "Catalog",
  },
  "home_page-12": {
    ua: "НОВИНКИ",
    en: "NOVELTIES",
  },
  "home_page-13": {
    ua: "АКСЕСУАРИ",
    en: "ACCESSORIES",
  },
  "home_page-14": {
    ua: "ОДЯГ",
    en: "CLOTHES",
  },
  "home_page-15": {
    ua: "СУМКИ-ПЕРЕНОСКИ",
    en: "CARRY BAGS",
  },
  "home_page-16": {
    ua: "ЛІЖАКИ",
    en: "BEDS",
  },
  "home_page-17": {
    ua: "ЗНИЖКИ",
    en: "DISCOUNT",
  },
  "home_page-18": {
    ua: "Як зробити куртку для собаки? Відповідь в відео!",
    en: "How to make a jacket for a dog? The answer is in the video!",
  },
  "home_page-19": {
    ua: "В ТРЕНДІ",
    en: "IN TRENDY",
  },
  "home_page-20": {
    ua: "ДОЩОВИК ARIEL",
    en: "RAINCOAT ARIEL",
  },
  "home_page-21": {
    ua: "ФУТБОЛКА MARIA",
    en: "T-SHIRT MARIA",
  },
  "home_page-22": {
    ua: "ХУДІ SOFIA",
    en: "HOODIE SOFIA",
  },
  "home_page-23": {
    ua: "ТОЛСТОВКА SOFT",
    en: "SWEATSHIRT SOFT",
  },
  "home_page-24": {
    ua: "ЗАРЕЄСТРУВАТИСЯ",
    en: "REGISTER HERE",
  },
  "home_page-25": {
    ua: "ДОЩОВИК ARIEL",
    en: "RAINCOAT ARIEL",
  },
  "home_page-26": {
    ua: "ФУТБОЛКА MARIA",
    en: "T-SHIRT MARIA",
  },
  "home_page-27": {
    ua: "ХУДІ SOFIA",
    en: "HOODIE SOFIA",
  },
  "home_page-28": {
    ua: "ТОЛСТОВКА SOFT",
    en: "SWEATSHIRT SOFT",
  },
  "home_page-29": {
    ua: "ДОЩОВИК ARIEL",
    en: "RAINCOAT ARIEL",
  },
  "home_page-30": {
    ua: "ФУТБОЛКА MARIA",
    en: "T-SHIRT MARIA",
  },
  "home_page-31": {
    ua: "ХУДІ SOFIA",
    en: "HOODIE SOFIA",
  },
  "home_page-32": {
    ua: "ТОЛСТОВКА SOFT",
    en: "SWEATSHIRT SOFT",
  },
  "home_page-33": {
    ua: "СТАНЬ СВОЇМ",
    en: "BECOME YOURSELF",
  },
  "home_page-34": {
    ua: "Зареєструйся на сайті та отримайте масу привилеїв",
    en: "Register on the site and get a lot of privileges",
  },
  "home_page-40": {
    ua: "Зробити темніше?",
    en: "Make darker?",
  },
  "home_page-41": {
    ua: "Зробити світліше?",
    en: "Make lighter?",
  },
  //
  "home_page-42": {
    ua: "Тому що ми піклуємося про собак",
    en: "That's why we take care of dogs",
  },
  "home_page-43": {
    ua: "Каталог",
    en: "Catalog",
  },
  "home_page-44": {
    ua: "Новинки",
    en: "Novelties",
  },
  "home_page-45": {
    ua: "Аксесуари",
    en: "Accessories",
  },
  "home_page-46": {
    ua: "Одяг",
    en: "Clothes",
  },
  "home_page-47": {
    ua: "Сумки-переноски",
    en: "Carry bags",
  },
  "home_page-48": {
    ua: "Ліжаки",
    en: "Beds",
  },
  "home_page-49": {
    ua: "Знижки",
    en: "Discount",
  },
  "home_page-50": {
    ua: "Меню",
    en: "Menu",
  },
  "home_page-51": {
    ua: "Каталог",
    en: "Catalog",
  },
  "home_page-52": {
    ua: "О нас",
    en: "About us",
  },
  "home_page-53": {
    ua: "Доставка і оплата",
    en: "Delivery and Payment",
  },
  "home_page-54": {
    ua: "Контакти",
    en: "Contacts",
  },
  "home_page-55": {
    ua: "Відгуки",
    en: "Reviews",
  },
  "home_page-56": {
    ua: "Зв’язатися з нами",
    en: "Contact us",
  },
  "home_page-57": {
    ua: "Ім'я",
    en: "Name",
  },
  "home_page-58": {
    ua: "Ім'я повинно складатись лише з літер",
    en: "Contact us",
  },
  "home_page-59": {
    ua: "E-mail",
    en: "E-mail",
  },
  "home_page-60": {
    ua: "Імейл повинен бути у форматі user@ukr.net",
    en: "The email should be in the user@ukr.net format",
  },
  "home_page-61": {
    ua: "Текст повідомлення",
    en: "Text message",
  },
  "home_page-62": {
    ua: "Питання повинно містити мінімум 10 символів",
    en: "The question must contain at least 10 characters",
  },
  "home_page-63": {
    ua: "Надіслати",
    en: "Send",
  },
  "home_page-64": {
    ua: "Наші контакти",
    en: "Our contacts",
  },
  "home_page-65": {
    ua: "Тел:+38 (097) 437 94 24",
    en: "Tel:+38 (097) 437 94 24",
  },
  "home_page-66": {
    ua: "Графік роботи: Пн - Нд 9.00-19.00",
    en: "Working hours: Mon - Sun 9:00 a.m. - 7:00 p.m",
  },
  "home_page-67": {
    ua: "Пошта: trendytail@ukr.net",
    en: "Mail: trendytail@ukr.net",
  },
  "home_page-68": {
    ua: "Всі права захищені",
    en: "All rights reserved",
  },
  "catalog_page-title": {
    ua: "Каталог",
    en: "Catalog",
  },
  "catalog_page-1": {
    ua: "Головна >",
    en: "Main >",
  },
  "catalog_page-2": {
    ua: "Каталог",
    en: "Catalog",
  },
  "catalog_page-3": {
    ua: "Нова колекція вже тут!",
    en: "The new collection is here!",
  },
  "catalog_page-4": {
    ua: "Нова колекція вже тут!",
    en: "The new collection is here!",
  },
  "catalog_page-5": {
    ua: "Нова колекція вже тут!",
    en: "The new collection is here!",
  },
  "catalog_page-6": {
    ua: "Каталог",
    en: "Catalog",
  },
  "catalog_page-7": {
    ua: "ОДЯГ",
    en: "CLOTHES",
  },
  "catalog_page-8": {
    ua: "ЛІЖАКИ",
    en: "BEDS",
  },
  "catalog_page-9": {
    ua: "АКСЕСУАРИ",
    en: "ACCESSORIES",
  },
  "catalog_page-10": {
    ua: "СУМКИ-ПЕРЕНОСКИ",
    en: "CARRY BAGS",
  },
  "catalog_page-11": {
    ua: "ЗНИЖКИ",
    en: "DISCOUNT",
  },
  "catalog_page-12": {
    ua: "КАТЕГОРІЯ",
    en: "CATEGORY",
  },
  "catalog_page-13": {
    ua: "Одяг",
    en: "Cloth",
  },
  "catalog_page-14": {
    ua: "Ліжаки",
    en: "Beds",
  },
  "catalog_page-15": {
    ua: "Аксесуари",
    en: "Accessories",
  },
  "catalog_page-16": {
    ua: "Сумки-переноски",
    en: "Carry bags",
  },
  "catalog_page-17": {
    ua: "БРЕНД",
    en: "BRAND",
  },
  "catalog_page-18": {
    ua: "ЦІНА",
    en: "PRICE",
  },
  "catalog_page-19": {
    ua: "до 499 грн",
    en: "to 499 uah",
  },
  "catalog_page-20": {
    ua: "500-999 грн",
    en: "500-999 uah",
  },
  "catalog_page-21": {
    ua: "1000-1499 грн",
    en: "1000-1499 uah",
  },
  "catalog_page-22": {
    ua: "1500-1999 грн",
    en: "1500-1999 uah",
  },
  "catalog_page-23": {
    ua: "від 2000 грн",
    en: "from 2000 uah",
  },
  "catalog_page-24": {
    ua: "Знижки",
    en: "Discount",
  },
  "about-us_page-title": {
    ua: "О нас",
    en: "About us",
  },
  "about-us_page-1": {
    ua: "О нас",
    en: "About us",
  },
  "about-us_page-2": {
    ua: "НАША МЕТА ТА МІСІЯ",
    en: "OUR PURPOSE AND MISSION",
  },
  "about-us_page-3": {
    ua: "Мета та місія продажу одягу для собак – надати модні та функціональні варіанти одягу для наших пухнастих друзів. У зв'язку з зростаючою тенденцією володіння домашніми тваринами та бажанням ставитися до наших вихованців як до членів сім'ї, на ринку зростає попит на одяг для собак. Наша місія полягає в тому, щоб задовольнити цю потребу, пропонуючи широкий асортимент стильного та добре продуманого одягу, який не тільки покращує зовнішній вигляд собак, але й забезпечує комфорт та захист. зовнішній вигляд собак, але й забезпечує комфорт та захист.",
    en: "Dog apparel's goal and mission is to provide fashionable and functional clothing options for our furry friends. Due to the growing trend of pet ownership and the desire to treat our pets as family members, there is a growing demand for dog clothing in the market. Our mission is to meet this need by offering a wide range of stylish and well-designed clothing that not only enhances the appearance of dogs, but also provides comfort and protection. appearance of dogs, but also provides comfort and protection.",
  },
  "about-us_page-4": {
    ua: "Продаючи одяг для собак, ми прагнемо покращити загальне враження від володіння домашніми тваринами, дозволяючи власникам домашніх тварин висловлювати своє кохання та турботу за допомогою модних нарядів для своїх собачих компаньйонів. У нашій колекції ми прагнемо поєднувати моду та функціональність, гарантуючи, що наш одяг не тільки естетично привабливий, а й служить практичній меті. Будь то светри для холодних зимових днів або плащі для вологої погоди, наш одяг для собак призначений для задоволення різних потреб різних порід та розмірів.",
    en: "By selling dog apparel, we aim to improve the overall experience of pet ownership by allowing pet owners to express their love and care through fashionable apparel for their canine companions. In our collection, we strive to combine fashion and function, ensuring that our clothing is not only aesthetically pleasing, but also serves a practical purpose. Whether it's sweaters for cold winter days or raincoats for wet weather, our dog clothes are designed to meet the different needs of different breeds and sizes.",
  },
  "about-us_page-5": {
    ua: "Ми вважаємо, що перевдягання наших собак не лише додає елемент веселощів, а й допомагає створити міцніший зв'язок між людьми та їх пухнастими друзями. Так що приєднуйтесь до нас у ційзахоплюючій подорожі, щоб вбирати собак і робити їх життятрохи більш стильним і комфортним.",
    en: "We believe that dressing up our dogs not only adds an element of fun, but also helps create a stronger bond between people and their furry friends. So join us on this exciting journey to dress up dogs and make their lives a little more stylish and comfortable.",
  },
  "about-us_page-6": {
    ua: "Наші переваги",
    en: "Our advantages",
  },
  "about-us_page-7": {
    ua: "Широкий вибір елегантних дизайнів.",
    en: "A wide selection of elegant designs.",
  },
  "about-us_page-8": {
    ua: "Виняткове обслуговування клієнтів для вирішення будь-яких питань.",
    en: "Exceptional customer service to resolve any issues.",
  },
  "about-us_page-9": {
    ua: "Високоякісні матеріали, що забезпечують довговічність.",
    en: "High-quality materials that ensure durability.",
  },
  "about-us_page-10": {
    ua: "Ідеальні розміри для всіх порід собак.",
    en: "Perfect size for all dog breeds.",
  },
  "about-us_page-11": {
    ua: "Доступні ціни на будь-який бюджет.",
    en: "Affordable prices for any budget.",
  },
  "about-us_page-12": {
    ua: "Простий процес онлайн-замовлення.",
    en: "Easy online ordering process.",
  },
  "about-us_page-13": {
    ua: "Оперативні та надійні служби доставки.",
    en: "Prompt and reliable delivery services.",
  },
  "about-us_page-14": {
    ua: "Співпраця з відомими впливовими особами в галузі моди на своїх улюбленців.",
    en: "Collaborate with famous fashion influencers on your favorites.",
  },
  "about-us_page-15": {
    ua: "Регулярно оновлювані колекції відповідно до останніх тенденцій.",
    en: "Regularly updated collections according to the latest trends.",
  },
  "delivery_page-title": {
    ua: "Доставка і оплата",
    en: "Delivery and payment",
  },
  "delivery_page-1": {
    ua: "Доставка і оплата",
    en: "Delivery and payment",
  },
  "delivery_page-2": {
    ua: "ДОСТАВКА",
    en: "DELIVERY",
  },
  "delivery_page-3": {
    ua: "Варіанти доставки",
    en: "Delivery options",
  },
  "delivery_page-4": {
    ua: "Оплата",
    en: "Payment",
  },
  "contacts_page-title": {
    ua: "Контакти",
    en: "Contacts",
  },
  "contacts_page-1": {
    ua: "Контакти",
    en: "Contacts",
  },
  "contacts_page-2": {
    ua: "Контакти",
    en: "Contacts",
  },
  "contacts_page-3": {
    ua: "Для швидкого зв'язку з нами",
    en: "For quick communication with us",
  },
  "contacts_page-4": {
    ua: "Графік роботи: Понеділок - Неділя 09:00-19:00",
    en: "Working hours: Monday - Sunday 09:00-19:00",
  },
  "contacts_page-5": {
    ua: "Написати на пошту",
    en: "Mail us",
  },
  "contacts_page-6": {
    ua: "Заповнити форму",
    en: "Fill out the form",
  },
  "contacts_page-7": {
    ua: "Ім'я",
    en: "Name",
  },
  "contacts_page-8": {
    ua: "Введіть лише літери",
    en: "Enter only letters",
  },
  "contacts_page-9": {
    ua: "Телефон:",
    en: "Phone:",
  },
  "contacts_page-10": {
    ua: "Мінімум 9 символів",
    en: "Minimum 9 characters",
  },
  "contacts_page-11": {
    ua: "Імейл",
    en: "Mail",
  },
  "contacts_page-12": {
    ua: "Приклад ukr@.net",
    en: "Example of ukr@.net",
  },
  "contacts_page-13": {
    ua: "Країна",
    en: "Country",
  },
  "contacts_page-14": {
    ua: "Введіть лише літери",
    en: "Enter only letters",
  },
  "contacts_page-15": {
    ua: "Місто",
    en: "CIty",
  },
  "contacts_page-16": {
    ua: "Введіть лише літери",
    en: "Enter only letters",
  },
  "contacts_page-17": {
    ua: "Перевірка",
    en: "Check",
  },
  "contacts_page-18": {
    ua: "Неправильна сума",
    en: "Incorrect amount",
  },
  "contacts_page-19": {
    ua: "Введіть текст..",
    en: "Enter text..",
  },
  "contacts_page-20": {
    ua: "Мінімум 10 символів тексту",
    en: "Minimum of 10 text characters",
  },
  "contacts_page-21": {
    ua: "Мінімум 10 символів тексту",
    en: "Minimum of 10 text characters",
  },
  "contacts_page-22": {
    ua: "Надіслати",
    en: "Send",
  },
  "feedback_page-title": {
    ua: "Відгуки",
    en: "Reviews",
  },
  "feedback_page-1": {
    ua: "Відгуки",
    en: "Reviews",
  },
  "feedback_page-2": {
    ua: "Відгуки",
    en: "Reviews",
  },
  "feedback_page-3": {
    ua: "Залиште коментар",
    en: "Leave a comment",
  },
  "feedback_page-4": {
    ua: "Ім'я і фамілія:",
    en: "Name and surname:",
  },
  "feedback_page-5": {
    ua: "Коментар: ",
    en: "Comment:",
  },
  "feedback_page-6": {
    ua: "Ваша оцінка:",
    en: "Your rating:",
  },
  "feedback_page-7": {
    ua: " Додати коментар",
    en: "Add a comment",
  },
  "accessories_page-title": {
    ua: "Аксесуари",
    en: "Accessories",
  },
  "accessories_page-1": {
    ua: "Каталог >",
    en: "Catalog >",
  },
  "accessories_page-2": {
    ua: "Аксесуари",
    en: "Accessories",
  },
  "bed-ascold_page-title": {
    ua: "Ліжко Ascold",
    en: "Bed Ascold",
  },
  "bed-ascold_page-1": {
    ua: "Ліжко Ascold",
    en: "Bed Ascold",
  },
  "bed-ascold_page-2": {
    ua: "Ліжко Ascold",
    en: "Bed Ascold",
  },
  "bed-ascold_page-2-5": {
    ua: "М'яка тканина, плавні лінії, округлі бортики - все це робить лежак ASCOLD чудовим місцем відпочинку для улюбленця і прикрасою будинку.",
    en: "Soft fabric, smooth lines, rounded sides - all this makes the ASCOLD lounger a great place to rest for your pet and a decoration of the house.",
  },
  "bed-ascold_page-3": {
    ua: "Бренд:",
    en: "Brand:",
  },
  "bed-ascold_page-4": {
    ua: "Розмір",
    en: "Size:",
  },
  "bed-ascold_page-5": {
    ua: "52x40x17 см, 62x50x19 см",
    en: "52x40x17 cm, 62x50x19 cm",
  },
  "bed-ascold_page-6": {
    ua: "Матеріал:",
    en: "Material:",
  },
  "bed-ascold_page-7": {
    ua: "100% поліестер",
    en: "100% polyester",
  },
  "bed-ascold_page-8": {
    ua: "Серія:",
    en: "Series:",
  },
  "bed-ascold_page-9": {
    ua: "Колір:",
    en: "Color:",
  },
  "bed-ascold_page-10": {
    ua: "Бежевий",
    en: "Beige",
  },
  "bed-ascold_page-11": {
    ua: "Наявність:",
    en: "Availability:",
  },
  "bed-ascold_page-12": {
    ua: "В наявністі",
    en: "In stock",
  },
  "bed-ascold_page-13": {
    ua: "Розмір:",
    en: "Size:",
  },
  "bed-ascold_page-14": {
    ua: "52x40x17 см",
    en: "52x40x17 cm",
  },
  "bed-ascold_page-15": {
    ua: "62x50x19 см",
    en: "62x50x19 cm",
  },
  "bed-ascold_page-15": {
    ua: "62x50x19 см",
    en: "62x50x19 cm",
  },
  "bed-ascold_page-16": {
    ua: "КУПИТЬ",
    en: "BUY",
  },
  "bed-ascold_page-17": {
    ua: "ОПИС",
    en: "DESCRIPTION",
  },
  "bed-ascold_page-18": {
    ua: "Витончений лежак сподобається улюбленцям і завдяки м'якій подушці, зшитий з плюшу та меблевої тканини - її можна перевертати більш м'якої або цупкою стороною під настрій.",
    en: "Lovers will like the elegant lounger thanks to the soft pillow, sewn from plush and furniture fabric - it can be turned over to a softer or firmer side to suit the mood.",
  },
  "bed-ascold_page-19": {
    ua: "Переваги лежака:",
    en: "Advantages of a bed:",
  },
  "bed-ascold_page-20": {
    ua: "вишуканий дизайн і модний колір;",
    en: "exquisite design and fashionable color;",
  },
  "bed-ascold_page-21": {
    ua: "якісні матеріали: щільна меблева тканина, холлофайбер;",
    en: "high-quality materials: dense furniture fabric, holofiber;",
  },
  "bed-ascold_page-22": {
    ua: "прикраса - декоративна нашивка з логотипом.",
    en: "decoration - a decorative patch with a logo.",
  },
  "bed-ascold_page-23": {
    ua: "Подушка: знімна.",
    en: "Pillow: removable.",
  },
  "bed-ascold_page-24": {
    ua: "Наповнювач: гіпоалергенний холофайбер.",
    en: "Filling: hypoallergenic holofiber.",
  },
  "bed-ascold_page-25": {
    ua: "Правила догляду: ручне прання при температурі не вище 40 градусів.",
    en: "Care instructions: hand wash at a temperature not higher than 40 degrees.",
  },
};

// Check the website path
function checkPagePathName() {
  switch (currentPathName) {
    case "/index.html":
      currentTexts = homeTexts;
      break;

    default:
      currentTexts = homeTexts;
      break;
  }
}
checkPagePathName();

// Change the text language
function changeLang() {
  for (const key in currentTexts) {
    let elem = document.querySelector(`[data-lang=${key}]`);
    if (elem) {
      elem.textContent = currentTexts[key][currentLang];
    }
  }
}
changeLang();

// Put event listener on the each button
langButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (!event.target.classList.contains("header__btn_active")) {
      currentLang = event.target.dataset.btn;
      localStorage.setItem("language", event.target.dataset.btn);
      resetActiveClass(langButtons, "header__btn_active");
      btn.classList.add("header__btn_active");
      changeLang();
    }
  });
});

// Reset the active class in the sent array of elements
function resetActiveClass(arr, activeClass) {
  arr.forEach((elem) => {
    elem.classList.remove(activeClass);
  });
}

// Check the active button
function checkActiveLangButton() {
  switch (currentLang) {
    case "en":
      document
        .querySelector('[data-btn="en"]')
        .classList.add("header__btn_active");
      break;

    default:
      document
        .querySelector('[data-btn="ua"]')
        .classList.add("header__btn_active");
      break;
  }
}
checkActiveLangButton();

// Chech the browser language
function checkBrowserLang() {
  const navLang = navigator.language.slice(0, 2).toLowerCase();
  const result = allLangs.some((elem) => {
    return elem === navLang;
  });
  if (result) {
    return navLang;
  }
}

// console.log("navigator.language", checkBrowserLang());
