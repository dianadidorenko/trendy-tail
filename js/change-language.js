const langButtons = document.querySelectorAll("[data-btn]");
const allLangs = ["ua", "en"];
const currentPathName = window.location.pathname;
let currentLang =
  localStorage.getItem("language") || checkBrowserLang() || "ua";
let currentTexts = {};

const homeTexts = {
  "not-found-1": {
    ua: "Упс!",
    en: "Oops!",
  },
  "not-found-2": {
    ua: "Нічого не було знайдено по Вашому запиту. Спробуйте ще раз :)",
    en: "Nothing was found for your request. Try again :)",
  },
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
  "catalog_page-2-5": {
    ua: "Новинки",
    en: "New",
  },
  "catalog_page-2-6": {
    ua: "Перейти до Новинок",
    en: "See new collection",
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
    en: "DOG BEDS",
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
    ua: "Наш партнер по доставці",
    en: "Our delivery partner",
  },
  "delivery_page-4": {
    ua: "Оплата",
    en: "Payment",
  },
  "delivery_page-6": {
    ua: "П’ятниця після 12.00",
    en: "Friday after 12.00",
  },
  "delivery_page-7": {
    ua: "Ваше замовлення, оформлене у понеділок- п’ятницю відправиться в той же день до Вас",
    en: "Your order placed on Monday-Friday will be sent to you on the same day",
  },
  "delivery_page-8": {
    ua: "До 12.00",
    en: "Until 12.00",
  },
  "delivery_page-9": {
    ua: "Ваше замовлення, оформлене у понеділок- п’ятницю відправиться в той же день до Вас",
    en: "Your order placed on Monday-Friday will be sent to you on the same day",
  },
  "delivery_page-10": {
    ua: "П’ятниця після 12.00",
    en: "Friday after 12.00",
  },
  "delivery_page-11": {
    ua: "Ваше замовлення, оформлене у понеділок- п’ятницю відправиться наступного дня до Вас",
    en: "Your order placed on Monday-Friday will be sent to you the next day",
  },
  "delivery_page-12": {
    ua: "1-2 дні",
    en: "1-2 days",
  },
  "delivery_page-13": {
    ua: "Ваше замовлення, оформлене у п’ятницю, субботу та неділю після 12 відправиться до Вас в понеділок",
    en: "Your order placed on Friday, Saturday and Sunday after 12 will be sent to you on Monday",
  },
  "delivery_page-14": {
    ua: "Накладний платіж",
    en: "Cash on delivery payment",
  },
  "delivery_page-15": {
    ua: "100% оплата з безкоштовною доставкою",
    en: "100% payment with free shipping",
  },
  "delivery_page-16": {
    ua: "Банківська карта",
    en: "Bank card",
  },
  "delivery_page-17": {
    ua: "Звертаємо вашу увагу, що при використанні купонів/сертифікатів, підсумкова сума може відрізнятися.",
    en: "Please note that when using coupons/certificates, the final amount may differ",
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
  "profile_page-title": {
    ua: "Профіль",
    en: "Profile",
  },
  "profile_page-1": {
    ua: "Профіль",
    en: "Profile",
  },
  "profile_page-2": {
    ua: "Профіль",
    en: "Profile",
  },
  "profile_page-3": {
    ua: "ВАШІ ДАНІ",
    en: "YOUR DATA",
  },
  "profile_page-4": {
    ua: "Ім'я",
    en: "Name",
  },
  "profile_page-5": {
    ua: "Введіть лише літери",
    en: "Enter only letters",
  },
  "profile_page-6": {
    ua: "Прізвище",
    en: "Surname",
  },
  "profile_page-7": {
    ua: "Введіть лише літери",
    en: "Enter only letters",
  },
  "profile_page-8": {
    ua: "Телефон:",
    en: "Phone:",
  },
  "profile_page-9": {
    ua: "Мінімум 13 символів",
    en: "Minimum 13 characters",
  },
  "profile_page-11": {
    ua: "Приклад ukr@.net",
    en: "Example of ukr@.net",
  },
  "profile_page-12": {
    ua: "Місто:",
    en: "City:",
  },
  "profile_page-13": {
    ua: "Введіть лише літери",
    en: "Enter only letters",
  },
  "profile_page-14": {
    ua: "Ваше фото:",
    en: "Your photo:",
  },
  "profile_page-15": {
    ua: "Зберегти",
    en: "Save",
  },
  "profile_page-16": {
    ua: "Вийти",
    en: "Exit",
  },
  "order_page-title": {
    ua: "Замовлення",
    en: "Order",
  },
  "order_page-1": {
    ua: "Замовлення",
    en: "Order",
  },
  "order_page-2": {
    ua: "Ваш кошик порожній :(",
    en: "Your cart is empty :(",
  },
  "order_page-3": {
    ua: "ЗАМОВЛЕННЯ",
    en: "ORDER",
  },
  "order_page-4": {
    ua: "Оформлення замовлення",
    en: "Placing an order",
  },
  "order_page-5": {
    ua: "Заповніть наступні поля для оформлення вашого замовлення.",
    en: "Fill in the following fields to complete your order.",
  },
  "order_page-6": {
    ua: "Ваші дані",
    en: "Your data",
  },
  "order_page-7": {
    ua: "Введіть лише літери",
    en: "Enter only letters",
  },
  "order_page-8": {
    ua: "Введіть лише літери",
    en: "Enter only letters",
  },
  "order_page-9": {
    ua: "Мінімум 13 символів",
    en: "Minimum 13 characters",
  },
  "order_page-10": {
    ua: "Приклад mail@ukr.net",
    en: "Example of mail@ukr.net",
  },
  "order_page-11": {
    ua: "Доставка",
    en: "Delivery",
  },
  "order_page-12": {
    ua: "НоваПошта",
    en: "NovaPoshta",
  },
  "order_page-13": {
    ua: "Доставка по Україні 1-3 дні",
    en: "Delivery in Ukraine 1-3 days",
  },
  "order_page-14": {
    ua: "УкрПошта",
    en: "UkrPoshta",
  },
  "order_page-15": {
    ua: "Доставка по Україні 3-5 днів",
    en: "Delivery in Ukraine 3-5 days",
  },
  "order_page-16": {
    ua: "Доставка по Україні до 7 днів",
    en: "Delivery in Ukraine up to 7 days",
  },
  "order_page-17": {
    ua: "Віниця",
    en: "Vinnitsa",
  },
  "order_page-18": {
    ua: "Волинь",
    en: "Volyn",
  },
  "order_page-19": {
    ua: "Днепр",
    en: "Dnepr",
  },
  "order_page-20": {
    ua: "Житомир",
    en: "Zhytomyr",
  },
  "order_page-21": {
    ua: "Закарпаття",
    en: "Transcarpathia",
  },
  "order_page-22": {
    ua: "Запоріжжя",
    en: "Zaporizhzhia",
  },
  "order_page-23": {
    ua: "Івано-Франківськ",
    en: "Ivano-Frankivsk",
  },
  "order_page-24": {
    ua: "Київ",
    en: "Kyiv",
  },
  "order_page-25": {
    ua: "Кіровоград",
    en: "Kirovohrad",
  },
  "order_page-26": {
    ua: "Львів",
    en: "Lviv",
  },
  "order_page-27": {
    ua: "Миколаїв",
    en: "Mykolaiv",
  },
  "order_page-28": {
    ua: "Одеса",
    en: "Odesa",
  },
  "order_page-29": {
    ua: "Полтава",
    en: "Poltava",
  },
  "order_page-30": {
    ua: "Рівне",
    en: "Rivne",
  },
  "order_page-31": {
    ua: "Суми",
    en: "Sumy",
  },
  "order_page-32": {
    ua: "Тернопіль",
    en: "Ternopil",
  },
  "order_page-33": {
    ua: "Харків",
    en: "Kharkiv",
  },
  "order_page-34": {
    ua: "Херсон",
    en: "Kherson",
  },
  "order_page-35": {
    ua: "Хмельніцьк",
    en: "Khmelnitsk",
  },
  "order_page-36": {
    ua: "Черкаси",
    en: "Cherkasy",
  },
  "order_page-37": {
    ua: "Чернівці",
    en: "Chernivtsi",
  },
  "order_page-38": {
    ua: "Чернігів",
    en: "Chernihiv",
  },
  "order_page-39": {
    ua: "Оплата",
    en: "Payment",
  },
  "order_page-40": {
    ua: "Післяплата",
    en: "Afterpayment",
  },
  "order_page-41": {
    ua: "Оплата при отримуванні",
    en: "Payment upon receipt",
  },
  "order_page-42": {
    ua: "Я згоден з умовами угоди користувача.",
    en: "I agree to the terms of the user agreement.",
  },
  "order_page-43": {
    ua: "Я погоджуюсь з умовами сервісу.",
    en: "I agree to the terms of service.",
  },
  "order_page-44": {
    ua: "Мені не потрібно телефонувати для підтвердження замовлення.",
    en: "I don't need to call to confirm my order.",
  },
  "order_page-45": {
    ua: "Ваше замовлення",
    en: "Your order",
  },
  "order_page-46": {
    ua: "Усього:",
    en: "Total:",
  },
  "order_page-47": {
    ua: "грн",
    en: "UAH",
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
  "carrying_page-title": {
    ua: "Сумки-переноски",
    en: "Carrying bags",
  },
  "carrying_page-1": {
    ua: "Сумки-переноски",
    en: "Carrying bags",
  },
  "clothes_page-title": {
    ua: "Одяг",
    en: "Clothes",
  },
  "clothes_page-1": {
    ua: "Одяг",
    en: "Clothes",
  },
  "beds_page-title": {
    ua: "Ліжка",
    en: "Beds",
  },
  "beds_page-1": {
    ua: "Ліжка",
    en: "Beds",
  },
  "sale_page-title": {
    ua: "Знижки",
    en: "Discount",
  },
  "sale_page-1": {
    ua: "Знижки",
    en: "Discount",
  },
  "new_page-title": {
    ua: "Новинки",
    en: "New",
  },
  "new_page-1": {
    ua: "Новинки",
    en: "New",
  },
  "bed-ascold_page-title": {
    ua: "Ліжко Ascold",
    en: "Bed Ascold",
  },
  "bed-denver_page-title": {
    ua: "Ліжко Denver",
    en: "Bed Denver",
  },
  "bed-lux_page-title": {
    ua: "Ліжко Lux",
    en: "Bed Lux",
  },
  "bed-prime_page-title": {
    ua: "Ліжко Prime",
    en: "Bed Prime",
  },
  "bed-simon_page-title": {
    ua: "Ліжко Simon",
    en: "Bed Simon",
  },
  "carrying-remy_page-title": {
    ua: "Сумка-переноска Remy",
    en: "Remy carrier bag",
  },
  "carrying-silva_page-title": {
    ua: "Сумка-переноска Silva",
    en: "Silva carrier bag",
  },
  "carrying-vesta_page-title": {
    ua: "Сумка-переноска Vesta",
    en: "Vesta carrier bag",
  },
  "collar-bright_page-title": {
    ua: "Комірець Bright",
    en: "Bright collar",
  },
  "cap-mood_page-title": {
    ua: "Кепка Mood",
    en: "Mood cap",
  },
  "pled-bliss_page-title": {
    ua: "Плед Bliss",
    en: "Bliss plaid",
  },
  "futbolka-maria_page-title": {
    ua: "Футболка Maria",
    en: "T-shirt Maria",
  },
  "hoodie-sofia_page-title": {
    ua: "Худі Sofia",
    en: "Hoodie Sofia",
  },
  "kombinezon-puzzle_page-title": {
    ua: "Комбінезон Puzzle",
    en: "Puzzle overalls",
  },
  "raincoat-ariel_page-title": {
    ua: "Дощовик Ariel",
    en: "Raincoat Ariel",
  },
  "tolstovka-soft_page-title": {
    ua: "Толстовка Soft",
    en: "Soft sweatshirt",
  },
  "tolstovka-delicate_page-title": {
    ua: "Толстовка Delicate",
    en: "Delicate sweatshirt",
  },
  "tolstovka-delicate_page-1": {
    ua: "Толстовка Delicate",
    en: "Delicate sweatshirt",
  },
  "tolstovka-delicate_page-2": {
    ua: "Толстовка Delicate",
    en: "Delicate sweatshirt",
  },
  "tolstovka-soft_page-1": {
    ua: "Толстовка Soft",
    en: "Soft sweatshirt",
  },
  "tolstovka-soft_page-2": {
    ua: "Толстовка Soft",
    en: "Soft sweatshirt",
  },
  "tolstovka-soft_page-3": {
    ua: "Він створений спеціально для улюбленців, яким не сидиться вдома. Комбінезон зручний, не сковує рухи, відмінно прилягає о тіла і дуже теплий.",
    en: "It was created especially for pets who are not at home. The overalls are comfortable, do not constrain movements, fit perfectly against the body and are very warm.",
  },
  "tolstovka-delicate_page-3": {
    ua: "Це базова річ у гардеробі кожного чотирилапого друга, яка буде незамінна в будь-який сезон. Худі можна вдягати в прохолодну погоду навесні, влітку і восени.",
    en: "This is a basic thing in the wardrobe of every four-legged friend, which will be indispensable in any season. Hoodies can be worn in cool weather in spring, summer and autumn.",
  },
  "tolstovka-delicate_page-4": {
    ua: "Трикотаж",
    en: "Jersey",
  },
  "tolstovka-delicate_page-5": {
    ua: "Червоний",
    en: "Red",
  },
  "tolstovka-delicate_page-6": {
    ua: "Стиль і свобода рухів, зручність і комфорт - все це вашому улюбленцю забезпечить толстовка DELICATE. Це базова річ у гардеробі кожного чотирилапого друга, яка буде незамінна в будь-який сезон. Толстовку можна вдягати в прохолодну погоду навесні, влітку і восени. Високий комір-снуд чудово захистить улюбленця від вітру і туману. Толстовку можна вдягати під верхній одяг (дощовик, жилет) для додаткового тепла і комфорту.",
    en: "Style and freedom of movement, convenience and comfort - all this will be provided to your pet by the DELICATE hoodie. This is a basic thing in the wardrobe of every four-legged friend, which will be indispensable in any season. The sweatshirt can be worn in cool weather in spring, summer and autumn. A high snood collar will perfectly protect your pet from wind and fog. The sweatshirt can be worn under outerwear (raincoat, vest) for additional warmth and comfort.",
  },
  "tolstovka-delicate_page-7": {
    ua: "стильна базова річ;",
    en: "a stylish basic thing;",
  },
  "tolstovka-delicate_page-8": {
    ua: "світловідбиваючі елементи для безпечних прогулянок у сутінках;",
    en: "reflective elements for safe walks at dusk;",
  },
  "tolstovka-delicate_page-9": {
    ua: "комір-снуд з резинкою та фіксатором.",
    en: "snood collar with elastic band and fastener.",
  },
  "tolstovka-soft_page-5": {
    ua: "Сірий/білий",
    en: "Grey/white",
  },
  "tolstovka-soft_page-8": {
    ua: "оригінальне сполучення фактур та кольорів;",
    en: "original combination of textures and colors;",
  },
  "tolstovka-soft_page-10": {
    ua: "зручність вдягання;",
    en: "comfort of wearing;",
  },
  "tolstovka-soft_page-11": {
    ua: "простий догляд.",
    en: "simple care.",
  },
  "raincoat-ariel_page-1": {
    ua: "Дощовик Ariel",
    en: "Soft sweatshirt",
  },
  "raincoat-ariel_page-2": {
    ua: "Дощовик Ariel",
    en: "Raincoat Ariel",
  },
  "kombinezon-puzzle_page-1": {
    ua: "Комбінезон Puzzle",
    en: "Puzzle overalls",
  },
  "kombinezon-puzzle_page-2": {
    ua: "Комбінезон Puzzle",
    en: "Puzzle overalls",
  },
  "kombinezon-puzzle_page-3": {
    ua: "Він створений спеціально для улюбленців, яким не сидиться вдома. Комбінезон зручний, не сковує рухи, відмінно прилягає до тіла і дуже теплий.",
    en: "It was created especially for pets who are not at home. The overalls are comfortable, do not constrain movements, fit perfectly to the body and are very warm.",
  },
  "tolstovka-soft_page-3": {
    ua: "Він створений спеціально для улюбленців, яким не сидиться вдома. Комбінезон зручний, не сковує рухи, відмінно прилягає до тіла і дуже теплий.",
    en: "It was created especially for pets who are not at home. The overalls are comfortable, do not constrain movements, fit perfectly to the body and are very warm.",
  },
  "hoodie-sofia_page-1": {
    ua: "Худі Sofia",
    en: "Hoodie Sofia",
  },
  "hoodie-sofia_page-2": {
    ua: "Худі Sofia",
    en: "Hoodie Sofia",
  },
  "futbolka-maria_page-1": {
    ua: "Футболка Maria",
    en: "T-shirt Maria",
  },
  "futbolka-maria_page-2": {
    ua: "Футболка Maria",
    en: "T-shirt Maria",
  },
  "pled-bliss_page-1": {
    ua: "Плед Bliss",
    en: "Bliss plaid",
  },
  "pled-bliss_page-2": {
    ua: "Плед Bliss",
    en: "Bliss plaid",
  },
  "cap-mood_page-1": {
    ua: "Кепка Mood",
    en: "Mood cap",
  },
  "cap-mood_page-2": {
    ua: "Кепка Mood",
    en: "Mood cap",
  },
  "collar-bright_page-1": {
    ua: "Комірець Bright",
    en: "Bright collar",
  },
  "collar-bright_page-2": {
    ua: "Комірець Bright",
    en: "Bright collar",
  },
  "carrying-silva_page-1": {
    ua: "Сумка-переноска Silva",
    en: "Silva carrier bag",
  },
  "carrying-vesta_page-1": {
    ua: "Сумка-переноска Vesta",
    en: "Vesta carrier bag",
  },
  "carrying-silva_page-2": {
    ua: "Сумка-переноска Silva",
    en: "Silva carrier bag",
  },
  "carrying-vesta_page-2": {
    ua: "Сумка-переноска Vesta",
    en: "Vesta carrier bag",
  },
  "carrying-silva_page-3": {
    ua: "Сумка-переноска SILVA - це гарантований комфорт для вашого улюбленця під час будь-якої подорожі! Зручна форма, віконечко для огляду і вентиляції – все для зручності вашого чотириногого друга.",
    en: "The SILVA carrier bag is guaranteed comfort for your pet during any trip! A comfortable shape, a window for viewing and ventilation - all for the convenience of your four-legged friend.",
  },
  "carrying-vesta_page-3": {
    ua: "Сумка-переноска має віконця, в які улюбленець може дивитися під час подорожі. М’яке дно і стіни роблять мандрівку комфортною. Господар може нести сумку в руці або на плечі — є зручні ручки і довгий ремінь з м’якою накладкою.",
    en: "The carrier bag has windows into which your pet can look while traveling. The soft bottom and walls make the journey comfortable. The owner can carry the bag in his hand or on his shoulder - there are comfortable handles and a long strap with a soft pad.",
  },
  "collar-bright_page-3": {
    ua: "Комірець з темно-синьої джинсової тканини та яскраво-лимонної бавовни надійно фіксується липучкою, яка міцно тримається.",
    en: "Crafted from navy blue denim and bright lemon cotton, the collar is secured with velcro for a strong hold.",
  },
  "cap-mood_page-3": {
    ua: "Поєднання темно-синьої джинсової тканини та яскраво-лимонного трикотажу, фіксатор у вигляді ромашки, стильна термоаплікація.",
    en: "A combination of dark blue denim and bright lemon knitwear, a daisy fastener, stylish thermal appliqué.",
  },
  "pled-bliss_page-3": {
    ua: "Неймовірно м'який і пухнастий плед для вашого улюбленця. Чотирилапінеодмінно оцінять необхідність цього аксесуара. Ніжні кольори, теплий плюш, акуратна обробка і вишивка-логотип - плед стане частиною декору у вашому інтер'єрі, вбереже меблі від шерсті і зробить життя вашого улюбленця ще більш комфортним.",
    en: "Incredibly soft and fluffy blanket for your pet. Four-legged friends will definitely appreciate the need for this accessory. Gentle colors, warm plush, neat finishing and logo embroidery - the plaid will become part of the decor in your interior, protect the furniture from wool and make your pet's life even more comfortable.",
  },
  "futbolka-maria_page-3": {
    ua: "Українські улюбленці – найгарніші в світі. А якщо ваша чотирилапа красуні вдягне яскраву футболку з термоаплікацією-вишивкою, від неї просто неможливо буде відвести очей! Футболка зручна та м’якенька, рукави-ліхтарики з резинкою є окрасою моделі, а термоаплікація з квітковим орнаментом перетворює її на святкове вбрання.",
    en: "Ukrainian pets are the most beautiful in the world. And if your four-legged beauty wears a bright t-shirt with heat application-embroidery, it will be impossible to take your eyes off her! The t-shirt is comfortable and soft, the lantern sleeves with an elastic band are the decoration of the model, and the thermal application with a floral ornament turns it into a festive outfit.",
  },
  "hoodie-sofia_page-3": {
    ua: "Модель, продумана до дрібниць! Толстовка з теплого м’якого трикотажу має нейтральний колір та класичний крій, але яскраві резинки та лаконічна металева прикраса додають їй індивідуальності. Завдяки унікальними лекалам толстовка добре  сідає по фігурі, але не стримує рухи. Це найзручніше вбрання для активних та грайливих хвостиків.",
    en: "A model thought out to the smallest detail! The sweatshirt is made of warm, soft knitwear and has a neutral color and a classic cut, but bright elastics and laconic metal decoration add personality to it. Thanks to the unique patterns, the hoodie sits well on the figure, but does not constrain movements. This is the most comfortable outfit for active and playful ponytails.",
  },
  "raincoat-ariel_page-3": {
    ua: "Зручно та стильно! Дощовик ARIEL створено спеціально для хвостатих модниць, які воліють почуватися у будь-яку погоду комфортно та мати неперевершений вигляд. Дощовик ARIEL– це вдале поєднання практичності та сучасного дизайну. Комбінація водонепроникного матеріалу трендових кольорів та якісної фурнітури гарантує бездоганний вигляд та суху спинку навіть у зливу. Підкладка зберігає тепло, а резинка на поясі гарантує ідеальне прилягання до тіла.",
    en: "Comfortable and stylish! The ARIEL raincoat was created especially for fashionable women who prefer to feel comfortable in any weather and have an unsurpassed look. Raincoat ARIEL is a successful combination of practicality and modern design. The combination of waterproof material in trendy colors and high-quality accessories guarantees a perfect look and a dry back even in a downpour. The lining keeps warm, and the elastic band on the waist guarantees a perfect fit to the body.",
  },
  "hoodie-sofia_page-4": {
    ua: "Весна/Осінь",
    en: "Spring/Autumn",
  },
  "raincoat-ariel_page-4": {
    ua: "модель із закритим животом;",
    en: "model with a closed stomach;",
  },
  "raincoat-ariel_page-5": {
    ua: "блискуча плащова тканина надійно захищає від вологи;",
    en: "shiny raincoat fabric reliably protects against moisture;",
  },
  "raincoat-ariel_page-6": {
    ua: "ніжні кольори;",
    en: "gentle colors;",
  },
  "raincoat-ariel_page-7": {
    ua: "зручна та практична застібка на кнопках.",
    en: "convenient and practical button fastening.",
  },
  "raincoat-ariel_page-8": {
    ua: "Матеріал: плащова тканина, підкладкова тканина.",
    en: "Material: raincoat fabric, lining fabric.",
  },
  "kombinezon-puzzle_page-4": {
    ua: "Зима",
    en: "Winter",
  },
  "hoodie-sofia_page-5": {
    ua: "Сірий/малиновий",
    en: "Grey/Crimson",
  },
  "kombinezon-puzzle_page-6": {
    ua: "Різнокольоровий",
    en: "Multicolored",
  },
  "hoodie-sofia_page-6": {
    ua: "Характеристики моделі:",
    en: "Features of the model:",
  },
  "hoodie-sofia_page-7": {
    ua: "теплий приємний на дотик трикотаж;",
    en: "warm knitwear that is pleasant to the touch;",
  },
  "hoodie-sofia_page-8": {
    ua: "оригінальне сполучення кольорів;",
    en: "original combination of colors;",
  },
  "hoodie-sofia_page-9": {
    ua: "універсальний крій;",
    en: "universal cut;",
  },
  "hoodie-sofia_page-10": {
    ua: "зручна застібка - блискавка.",
    en: "convenient fastener - zipper.",
  },
  "hoodie-sofia_page-11": {
    ua: "Матеріал: трикотаж тринитка.",
    en: "Material: tricot knitwear.",
  },
  "carrying-remy_page-1": {
    ua: "Сумка-переноска Remy",
    en: "Remy carrier bag",
  },
  "carrying-remy_page-2": {
    ua: "Сумка-переноска Remy",
    en: "Remy carrier bag",
  },
  "bed-ascold_page-1": {
    ua: "Ліжко Ascold",
    en: "Bed Ascold",
  },
  "bed-denver_page-1": {
    ua: "Ліжко Denver",
    en: "Bed Denver",
  },
  "bed-lux_page-1": {
    ua: "Ліжко Lux",
    en: "Bed Lux",
  },
  "bed-prime_page-1": {
    ua: "Ліжко Prime",
    en: "Bed Prime",
  },
  "bed-simon_page-1": {
    ua: "Ліжко Simon",
    en: "Bed Simon",
  },
  "bed-ascold_page-2": {
    ua: "Ліжко Ascold",
    en: "Bed Ascold",
  },
  "bed-denver_page-2": {
    ua: "Ліжко Denver",
    en: "Bed Denver",
  },
  "bed-lux_page-2": {
    ua: "Ліжко Lux",
    en: "Bed Lux",
  },
  "bed-prime_page-2": {
    ua: "Ліжко Prime",
    en: "Bed Prime",
  },
  "bed-simon_page-2": {
    ua: "Ліжко Simon",
    en: "Bed Simon",
  },
  "bed-ascold_page-2-5": {
    ua: "Лежак розроблено спеціально для собак середніх і великих порід. Завдяки застібкам блискавкам подушки з дна та бортиків можна виймати, а чохол чистити або мити.",
    en: "The bed is designed specifically for dogs of medium and large breeds. Thanks to the zippers, the pillows can be removed from the bottom and sides, and the cover can be cleaned or washed.",
  },
  "bed-denver_page-2-5": {
    ua: "М'яка тканина, плавні лінії, округлі бортики - все це робить лежак ASCOLD чудовим місцем відпочинку для улюбленця і прикрасою будинку.",
    en: "Soft fabric, smooth lines, rounded sides - all this makes the ASCOLD lounger a great place to rest for your pet and a decoration of the house.",
  },
  "bed-lux_page-2-5": {
    ua: "Лежак розроблено спеціально для собак середніх і великих порід. Завдяки застібкам блискавкам подушки з дна та бортиків можна виймати, а чохол чистити або мити.",
    en: "The bed is designed specifically for dogs of medium and large breeds. Thanks to the zippers, the pillows can be removed from the bottom and sides, and the cover can be cleaned or washed.",
  },
  "bed-prime_page-2-5": {
    ua: "Стиль та суперкомфорт для найвибагливіших улюбленців. Лежак Prime дуже зручний завдяки м’яким бортикам з наповнювачем-холофайбером, а дно – ніби пухнаста хмаринка.",
    en: "Style and super comfort for the most demanding pets. The Prime lounger is very comfortable thanks to the soft sides with holofiber filling, and the bottom is like a fluffy cloud.",
  },
  "bed-simon_page-2-5": {
    ua: "Лежак з бортиками на кнопках, за допомогою яких можна легко трансформувати лежак в матрац або диван.",
    en: "A bed with sides on buttons, with the help of which you can easily transform the deck chair into a mattress or sofa.",
  },
  "carrying-remy_page-3": {
    ua: "Створено з турботою про комфорт господаря і улюбленця!Переваги моделі: оптимальна форма, зйомний «дах», віконечко з сіткою, довгі м’які ручки, кишеня для дрібниць.",
    en: "Created with care for the comfort of the owner and pet! Advantages of the model: optimal shape, removable 'roof', window with a net, long soft handles, pocket for small things.",
  },
  "kombinezon-puzzle_page-7": {
    ua: "Що може бути приємнішим за неквапливу прогулянку в морозний день у зручному тепленькому комбінезоні PUZZLE? Він створений спеціально для улюбленців, яким не сидиться вдома. Комбінезон зручний, не сковує рухи, відмінно прилягає до тіла і дуже теплий. Плащова тканина, з якої виготовлено комбінезон, не пропускає вологу, а силіконовий наповнювач та хутряна підкладка гарно зберігають тепло. Високий комір забезпечує додатковий комфорт, а резинки на рукавах щільно прилягають до лап та запобігають потраплянню снігу.",
    en: "What could be nicer than a leisurely walk on a frosty day in a comfortable warm PUZZLE overall? It was created especially for pets who are not at home. The overalls are comfortable, do not constrain movements, fit perfectly to the body and are very warm. The raincoat fabric from which the overalls are made does not allow moisture to pass through, and the silicone filler and fur lining retain heat well. The high collar provides additional comfort, and the elastic bands on the sleeves fit tightly to the paws and prevent snow from entering.",
  },
  "kombinezon-puzzle_page-8": {
    ua: "яскрава тканина, завдяки якій улюбленця видно здалеку;",
    en: "bright fabric, thanks to which the pet can be seen from afar;",
  },
  "kombinezon-puzzle_page-9": {
    ua: "зручна застібка на грудях – кнопки;",
    en: "convenient fastening on the chest - buttons;",
  },
  "kombinezon-puzzle_page-10": {
    ua: "резинки на поясі забезпечують щільне прилягання комбінезону до тіла.",
    en: "elastic bands on the waist ensure a tight fit of the overalls to the body.",
  },
  "bed-ascold_page-3": {
    ua: "Бренд:",
    en: "Brand:",
  },
  "bed-ascold_page-4": {
    ua: "Розмір",
    en: "Size:",
  },
  "collar-bright_page-4": {
    ua: "Сезон:",
    en: "Season:",
  },
  "collar-bright_page-5": {
    ua: "Літо",
    en: "Summer",
  },
  "collar-bright_page-6": {
    ua: "Джинс",
    en: "Jeans",
  },
  "cap-mood_page-5": {
    ua: "Джинс/салатовий",
    en: "Jeans/light green",
  },
  "pled-bliss_page-5": {
    ua: "Рожевий",
    en: "Pink",
  },
  "futbolka-maria_page-5": {
    ua: "Жовтий",
    en: "Yellow",
  },
  "futbolka-maria_page-6": {
    ua: "Таблиця розмірів",
    en: "Table of sizes",
  },
  "futbolka-maria_page-7": {
    ua: "Переваги футболки:",
    en: "Advantages of the T-shirt:",
  },
  "futbolka-maria_page-8": {
    ua: "крій для чотирилапих красунь – із закритим животом;",
    en: "cut for four-legged beauties - with a closed stomach;",
  },
  "futbolka-maria_page-9": {
    ua: "м’який та еластичний бавовняний трикотаж;",
    en: "soft and elastic cotton jersey;",
  },
  "futbolka-maria_page-10": {
    ua: "вишуканий візерунок на спинці;",
    en: "exquisite pattern on the back;",
  },
  "futbolka-maria_page-11": {
    ua: "зручність вдягання.",
    en: "comfort of wearing.",
  },
  "futbolka-maria_page-12": {
    ua: "Матеріал: бавовняний трикотаж.",
    en: "Material: cotton jersey.",
  },
  "futbolka-maria_page-13": {
    ua: "Рекомендується ручне прання при температурі не вище 40 ℃.",
    en: "Hand washing at a temperature not higher than 40 ℃ is recommended.",
  },
  "collar-bright_page-7": {
    ua: "Стильний аксесуар для чотирилапих модників. Комірець з темно-синьої джинсової тканини та яскраво-лимонної бавовни надійно фіксується липучкою, яка міцно тримається. Прикрашає комірець ґудзик-ромашка. Досить лише цього маленького аксесуару, щоб створити досконалий літній образ.",
    en: "A stylish accessory for four-legged fashionistas. Crafted from navy blue denim and bright lemon cotton, the collar is secured with Velcro for a strong hold. A daisy button decorates the collar. Just this little accessory is enough to create a perfect summer look.",
  },
  "collar-bright_page-8": {
    ua: "Матеріал: 95% котон, 5% еластан.",
    en: "Material: 95% cotton, 5% elastane.",
  },
  "collar-bright_page-9": {
    ua: "Матеріал: 95% котон, 5% еластан.",
    en: "Material: 95% cotton, 5% elastane.",
  },
  "futbolka-maria_page-4": {
    ua: "80% котон, 20% поліестер",
    en: "80% cotton, 20% polyester",
  },
  "bed-ascold_page-5": {
    ua: "52x40x17 см, 62x50x19 см",
    en: "52x40x17 cm, 62x50x19 cm",
  },
  "bed-denver_page-5": {
    ua: "80x60x13 см, 102x76x14 см",
    en: "80x60x13 cm, 102x76x14 cm",
  },
  "bed-lux_page-5": {
    ua: "66x52x24 см",
    en: "66x52x24 cm",
  },
  "carrying-silva_page-4": {
    ua: "34x24x20 см",
    en: "34x24x20 cm",
  },
  "carrying-silva_page-6": {
    ua: "34x24x20 см",
    en: "34x24x20 cm",
  },
  "bed-simon_page-5": {
    ua: "52х42х18 см, 66х54х20 см",
    en: "52х42х18 cm, 66х54х20 cm",
  },
  "pled-bliss_page-4": {
    ua: "77х60 см, 77х100 см",
    en: "77х60 cm, 77х100 cm",
  },
  "carrying-vesta_page-4": {
    ua: "38x22x22 см",
    en: "38x22x22 cm",
  },
  "pled-bliss_page-6": {
    ua: "77х60 см",
    en: "77х60 cm",
  },
  "pled-bliss_page-7": {
    ua: "77х60 см",
    en: "77х60 cm",
  },
  "carrying-vesta_page-7": {
    ua: "77х100 см",
    en: "77х100 cm",
  },
  "bed-ascold_page-6": {
    ua: "Матеріал:",
    en: "Material:",
  },
  "bed-ascold_page-7": {
    ua: "100% поліестер",
    en: "100% polyester",
  },
  "bed-simon_page-7": {
    ua: "100% поліестер, Холофайбер",
    en: "100% polyester, Holofiber",
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
  "carrying-silva_page-5": {
    ua: "Сірий",
    en: "Grey",
  },
  "carrying-vesta_page-5": {
    ua: "Синій",
    en: "Blue",
  },
  "bed-denver_page-10": {
    ua: "Теракот/сірий",
    en: "Terracotta/grey",
  },
  "bed-lux_page-10": {
    ua: "Синій/сірий",
    en: "Blue/grey",
  },
  "bed-simon_page-10": {
    ua: "Сірий/чорний",
    en: "Grey/black",
  },
  "carrying-remy_page-5": {
    ua: "Чорний",
    en: "Black",
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
  "bed-denver_page-15": {
    ua: "80x60x13 см",
    en: "80x60x13 cm",
  },
  "bed-denver_page-16": {
    ua: "102x76x14 см",
    en: "102x76x14 cm",
  },
  "bed-prime_page-16": {
    ua: "60x50x18 см",
    en: "60x50x18 cm",
  },
  "bed-prime_page-17": {
    ua: "78x60x20 см",
    en: "78x60x20 cm",
  },
  "bed-lux_page-15": {
    ua: "66x52x24 см",
    en: "66x52x24 cm",
  },
  "bed-simon_page-15": {
    ua: "52х42х18 см",
    en: "52х42х18 cm",
  },
  "bed-simon_page-16": {
    ua: "66х54х20 см",
    en: "66х54х20 cm",
  },
  "bed-prime_page-15": {
    ua: "60x50x18 см, 78x60x20 см",
    en: "60x50x18 cm, 78x60x20 cm",
  },
  "carrying-remy_page-6": {
    ua: "40x28x21 см",
    en: "40x28x21 cm",
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
  "bed-simon_page-18": {
    ua: "Лежак з бортиками на кнопках, за допомогою яких можна легко трансформувати лежак в матрац або диван. Виготовлений з двох видів тканини: зовнішня сторона - щільна, зносостійка, непромокаюча; внутрішня сторона - м'яка, пухнаста, затишна. По периметру вшита змійка, яка дозволяє виймати наповнювач (холофайбер), що дуже зручно для чищення лежака.",
    en: "A deck chair with sides on buttons, with the help of which you can easily transform the bed into a mattress or sofa. Made of two types of fabric: the outer side is dense, wear-resistant, waterproof; the inner side is soft, fluffy, cozy. A snake is sewn around the perimeter, which allows you to remove the filler (holofiber), which is very convenient for cleaning the bed.",
  },
  "bed-denver_page-18": {
    ua: "Лежак DENVER спеціально розроблений для активних собак. Лежак стійкий до механічних пошкоджень, тому легко витримає будь-які ігри та перепади настрою вашого улюбленця. Наповнювач — гіпоалергенний холофайбер, завдяки якому лежак довгий час зберігає форму і не вбирає запахи. Наявність застібок-блискавок дозволяє виймати з лежака всі подушки з наповнювачем і легко чистити чохол.",
    en: "The DENVER bed is specially designed for active dogs. The bed is resistant to mechanical damage, so it can easily withstand any games and mood swings of your pet. Filler — hypoallergenic holofiber, thanks to which the sunbed retains its shape for a long time and does not absorb odors. The presence of zippers allows you to remove all pillows with filler from the sunbed and easily clean the cover.",
  },
  "bed-lux_page-18": {
    ua: "Його можна використовувати як ковдру або брати з собою на прогулянку чи пікнік. Наповнювач - гіпоалергенний холофайбер. На подушці є застібка-блискавка, за допомогою якої наповнювач можна виймати. Так чистити подушку буде набагато зручніше.",
    en: "It can be used as a blanket or taken with you on a walk or picnic. The filler is hypoallergenic holofiber. The pillow has a zipper with which the filler can be removed. It will be much more convenient to clean the pillow.",
  },
  "bed-lux_page-19": {
    ua: "Рекомендується ручне чищення лежака за допомогою губки з миючим засобом або без нього.",
    en: "Manual cleaning of the sunbed with a sponge with or without detergent is recommended.",
  },
  "bed-prime_page-18": {
    ua: "Стиль та суперкомфорт для найвибагливіших улюбленців. Лежак PRIME дуже зручний завдяки м’яким бортикам з наповнювачем-холофайбером, а дно – ніби пухнаста хмаринка. Тканина приємна на дотик і водночас цупка, тож улюбленець буде задоволений відпочинком. А ви будете задоволені зручністю догляду за лежаком. Завдяки застібкам-блискавкам в дні та бортиках моделі можна виймати подушки з наповнювачем і прати чохол окремо.",
    en: "Style and super comfort for the most demanding pets. The PRIME lounger is very comfortable thanks to the soft sides with holofiber filler, and the bottom is like a fluffy cloud. The fabric is pleasant to the touch and at the same time thick, so your pet will be satisfied with the rest. And you will be satisfied with the convenience of taking care of the sunbed. Thanks to the zippers in the bottom and sides of the model, you can remove the pillows with filler and wash the cover separately.",
  },
  "bed-denver_page-19": {
    ua: "міцність та довговічність;",
    en: "strength and durability;",
  },
  "bed-denver_page-20": {
    ua: "зручність чищення і прання;",
    en: "ease of cleaning and washing;",
  },
  "bed-simon_page-20": {
    ua: "y згорнутому вигляді 52х42х18 см (внутрішне місце 32х23 см). У розгорнутому вигляді 77х66х10 см;",
    en: "folded 52x42x18 cm (inner space 32x23 cm). When unfolded, it is 77x66x10 cm;",
  },
  "bed-simon_page-21": {
    ua: "y згорнутому вигляді 54х66х20 см (внутрішне місце 45х30 см). У розгорнутому вигляді 90х72х13 см.",
    en: "folded 54x66x20 cm (inner space 45x30 cm). When unfolded, it measures 90x72x13 cm.",
  },
  "bed-denver_page-21": {
    ua: "гіпоалергнний наповнювач.",
    en: "hypoallergenic filler.",
  },
  "bed-prime_page-19": {
    ua: "стильний сучасний дизайн;",
    en: "stylish modern design;",
  },
  "bed-prime_page-20": {
    ua: "гіпоалергенний наповнювач;",
    en: "hypoallergenic filler;",
  },
  "bed-prime_page-21": {
    ua: "простота догляду завдяки знімному чохлу.",
    en: "ease of maintenance thanks to the removable cover.",
  },
  "carrying-silva_page-7": {
    ua: "зовні сумка оформлена плащовою тканиною, тому легко миється і швидко сохне;",
    en: "the outside of the bag is decorated with raincoat fabric, so it is easy to wash and dries quickly;",
  },
  "carrying-silva_page-8": {
    ua: "середині стінки обшиті приємною на дотик гладенькою тканиною, яка добре очищується від шерсті;",
    en: "the middle of the walls are lined with a smooth fabric that is pleasant to the touch and cleans well from wool;",
  },
  "carrying-silva_page-9": {
    ua: "зручні м'які ручки дозволяють носити сумку в руці і через плече, а надійна застібка не дасть вашому улюбленцю раптово вистрибнути.",
    en: "comfortable soft handles allow you to carry the bag in your hand and over your shoulder, and a reliable fastener will prevent your pet from suddenly jumping out.",
  },
  "cap-mood_page-6": {
    ua: "Поєднання темно-синьої джинсової тканини та яскраво-лимонного трикотажу, фіксатор у вигляді ромашки, стильна термоаплікація – все це робить аксесуар не лише корисним у спекотний день, але й надзвичайно стильним.",
    en: "The combination of dark blue denim fabric and bright lemon knitwear, a daisy-shaped fastener, stylish thermal application - all this makes the accessory not only useful on a hot day, but also extremely stylish.",
  },
  "bed-denver_page-22": {
    ua: "Поради з догляду:",
    en: "Care tips:",
  },
  "bed-simon_page-22": {
    ua: "спальне місце-трансформер: лежак, матрас, диван;",
    en: "sleeping place-transformer: sunbed, mattress, sofa;",
  },
  "bed-simon_page-23": {
    ua: "зручність чищення і прання;",
    en: "ease of cleaning and washing;",
  },
  "bed-simon_page-24": {
    ua: "спальне місце-трансформер: лежак, матрас, диван;",
    en: "sleeping place-transformer: sunbed, mattress, sofa;",
  },
  "bed-denver_page-23": {
    ua: "гіпоалергенний наповнювач.",
    en: "hypoallergenic filler.",
  },
  "bed-ascold_page-19": {
    ua: "Переваги лежака:",
    en: "Advantages of a bed:",
  },
  "pled-bliss_page-8": {
    ua: "Переваги пледа BLISS:",
    en: "Advantages of BLISS plaid:",
  },
  "bed-ascold_page-20": {
    ua: "вишуканий дизайн і модний колір;",
    en: "exquisite design and fashionable color;",
  },
  "pled-bliss_page-9": {
    ua: "захистить меблі від шерсті та забруднень;",
    en: "will protect furniture from wool and dirt;",
  },
  "pled-bliss_page-10": {
    ua: "допоможе улюбленцям зігрітися в холодну погоду;",
    en: "will help pets to warm up in cold weather;",
  },
  "pled-bliss_page-11": {
    ua: "незамінна річ в машину або сумку-переноску;",
    en: "an irreplaceable thing in the car or a carrying bag;",
  },
  "pled-bliss_page-12": {
    ua: "аксесуар, який перетворить будь-яке місце в затишне гніздечко.",
    en: "an accessory that will turn any place into a cozy nest.",
  },
  "pled-bliss_page-13": {
    ua: "Покажіть улюбленцю свою любов, зробіть його улюблене місце ще затишніше.",
    en: "Show your love to your pet, make his favorite place even cozier.",
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
  "wiki-title": {
    ua: "Введіть те, що вас цікавить і отримуйте інформацію з Вікіпедія",
    en: "Enter what interests you and get information from Wikipedia",
  },
  "location_page-title": {
    ua: "Моя локація",
    en: "My location",
  },
  "location_page-1": {
    ua: "Моя локація",
    en: "My location",
  },
  "location_page-2": {
    ua: "Визначте моє місцезнаходження",
    en: "Define my place",
  },
  "location_page-3": {
    ua: "Дозвольте знайти місцезнаходження",
    en: "Allow to detect location",
  },
  "chat_page-title": {
    ua: "Chat GPT для Trendy Tail",
    en: "Chat GPT for Trendy Tail",
  },
  "chat_page-1": {
    ua: "Chat GPT для Trendy Tail",
    en: "Chat GPT for Trendy Tail",
  },
  "not-found_page-1": {
    ua: "Ми не знайдемо те, що ви шукали.",
    en: "We can't find what you're looking for.",
  },
  "not-found_page-2": {
    ua: "На жаль, сторінку, яку ви шукали, не вдалося знайти. Це може бути тимчасово недоступними, переміщеними або більше не існувати.",
    en: "Sorry, the page you were looking for could not be found. It may be temporarily unavailable, moved or no longer exist",
  },
  "not-found_page-3": {
    ua: "Перевірте введену URL-адресу на наявність помилок і повторіть спробу. Крім того, знайдіть те, чого не вистачає, або подивіться навколо решта нашого сайту.",
    en: "Check the URL you entered for errors and try again. Also, find what's missing or look around the rest of our site.",
  },
  "size-table_page-1": {
    ua: "Розмірна сітка",
    en: "Dimensional grid",
  },
  "size-table_page-2": {
    ua: "Довжина тіла 'A'",
    en: "Body length 'A'",
  },
  "size-table_page-3": {
    ua: "Переконайтесь, що ваш собака стоїть прямо. Виміряйте довжину тіла від шиї до хвоста. Якщо довжина тіла між розмірами, то краще вибрати більшу.",
    en: "Make sure your dog is standing straight. Measure the length of the body from the neck to the tail. If the length of the body is between the sizes, then it is better to choose a larger one.",
  },
  "size-table_page-4": {
    ua: "Об'єм грудей 'B'",
    en: "Breast volume 'B'",
  },
  "size-table_page-5": {
    ua: "Відміряйте найширшу частину грудей вашого вихованця. Зверніть увагу, що модель одягу може бути тонкою або вільною відповідно до дизайну, тканини або за власним смаком.",
    en: "Measure the widest part of your pet's chest. Please note that the clothing model can be thin or loose according to the design, fabric or personal taste.",
  },
  "size-table_page-6": {
    ua: "Розмір",
    en: "Size",
  },
  "size-table_page-7": {
    ua: "'A' довжина спини (см)",
    en: "'A' back length (cm)",
  },
  "size-table_page-8": {
    ua: "'B' довжина спини (см)",
    en: "'B' back length (cm)",
  },
  "size-table_page-9": {
    ua: "Вага (кг)",
    en: "Weight (kg)",
  },
  "size-table_page-10": {
    ua: "Рекомендовані породи",
    en: "Recommended breeds",
  },
  "size-table_page-11": {
    ua: "до 1.5",
    en: "to 1.5",
  },
  "size-table_page-12": {
    ua: "Цуценята дрібних порід",
    en: "Puppies of small breeds",
  },
  "size-table_page-13": {
    ua: "Мініатюрний йоркширський тер'єр, чихуахуа, мініатюрний пінчер, той-тер'єр",
    en: "Miniature Yorkshire Terrier, Chihuahua, Miniature Pinscher, Toy Terrier",
  },
  "size-table_page-14": {
    ua: "XS такса",
    en: "XS dachshund",
  },
  "size-table_page-15": {
    ua: "Такса",
    en: "Dachshund",
  },
  "size-table_page-16": {
    ua: "Йоркширський тер'єр, чихуахуа, мініатюрний пінчер, той-тер'єр, померанський шпіц, мальтезе, мальтіпу",
    en: "Yorkshire Terrier, Chihuahua, Miniature Pinscher, Toy Terrier, Pomeranian, Maltese, Maltipoo",
  },
  "size-table_page-17": {
    ua: "Йоркширський тер'єр, чихуахуа, мініатюрний пінчер, той-тер'єр, померанський шпіц, мальтезе, мальтіпу",
    en: "Yorkshire Terrier, Chihuahua, Miniature Pinscher, Toy Terrier, Pomeranian, Maltese, Maltipoo",
  },
  "size-table_page-18": {
    ua: "S такса",
    en: "S dachshund",
  },
  "size-table_page-19": {
    ua: "Такса",
    en: "Dachshund",
  },
  "size-table_page-20": {
    ua: "Мопс, французький бульдог",
    en: "Pug, French bulldog",
  },
  "size-table_page-21": {
    ua: "S2 такса",
    en: "S2 dachshund",
  },
  "size-table_page-22": {
    ua: "Такса, пекінес, невеликі коргі",
    en: "Dachshund, Pekingese, small corgis",
  },
  "size-table_page-23": {
    ua: "Пінчер, бішон фризе, джек-рассел-тер'єр",
    en: "Pinscher, Bichon Frize, Jack Russell Terrier",
  },
  "size-table_page-24": {
    ua: " Мальтезе, ши-тцу, той- пудель, карликовий пудель (собаки середніх порід), бішон фризе, кавалер-кінг-чарльз-спанієль",
    en: "Maltese, Shih Tzu, Toy Poodle, Miniature Poodle (medium breed dogs), Bichon Frize, Cavalier King Charles Spaniel",
  },
  "size-table_page-25": {
    ua: "M такса",
    en: "M dachshund",
  },
  "size-table_page-26": {
    ua: "Такса",
    en: "Dachshund",
  },
  "size-table_page-27": {
    ua: "Мопс, французький бульдог",
    en: "Pug, French bulldog",
  },
  "size-table_page-28": {
    ua: "Джек-рассел-тер'єр",
    en: "Jack Russell Terrier",
  },
  "size-table_page-29": {
    ua: "Китайська чубата, ши-тцу, той- пудель, пудель, шнауцер, японський хін, кокер-спанієль",
    en: "Chinese Crested, Shih Tzu, Toy Poodle, Poodle, Schnauzer, Japanese Chin, Cocker Spaniel",
  },
  "size-table_page-30": {
    ua: "Шнауцер, кокер-спаніель, фокстер'єр, скотчтер'єр, цвергшнауцер, англійський спанієль, міні бультер'єр",
    en: "Schnauzer, Cocker Spaniel, Fox Terrier, Scotch Terrier, Miniature Schnauzer, English Spaniel, Mini Bull Terrier",
  },
  "size-table_page-31": {
    ua: "Самоїд, бультер'єр",
    en: "Samoyed, bull terrier",
  },
  "size-table_page-32": {
    ua: "Самоїд великий, стаффорд, бультер'єр",
    en: "Great Samoyed, Stafford, Bull Terrier",
  },
  "size-table_page-33": {
    ua: "Стаффорд, хаскі",
    en: "Stafford, Husky",
  },
  "size-table_page-34": {
    ua: "Ретрівер, лабрадор, боксер",
    en: "Retriever, labrador, boxer",
  },
  "size-table_page-35": {
    ua: "Вівчарка, ротвейлер, доберман",
    en: "Shepherd, Rottweiler, Doberman",
  },
  "size-table_page-36": {
    ua: "Кане-корсо",
    en: "Cane Corso",
  },
  "pop-up-cart_page-1": {
    ua: "ТОВАР УСПІШНО ДОДАНО ДО ВАШОГО КОШИКА",
    en: "ITEM WAS SUCCESSFULLY ADDED TO YOUR CART",
  },
  "pop-up-cart_page-2": {
    ua: "Продовжити покупки",
    en: "Continue shopping",
  },
  "pop-up-cart_page-3": {
    ua: "Оформити замовлення",
    en: "To order",
  },
  "pop-up-cart_page-4": {
    ua: "Розмір:",
    en: "Size:",
  },
  "pop-up-cart_page-5": {
    ua: "Кількість:",
    en: "Quantity:",
  },
  "pop-up-cart_page-6": {
    ua: "Ітого:",
    en: "Total:",
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
