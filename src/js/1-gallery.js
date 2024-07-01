// Завдання 1 - Галерея зображень
// Виконуй це завдання у файлах 1-gallery.html і 1-gallery.js.

// У попередньому домашньому завданні ти самостійно створила галерею зображень,
// використовуючи делегування подій, і додала через CDN бібліотеку модальне вікно
// для відображення повнорозмірної версії зображення.

// Створення галерей — це повсякденна задача розробника,
//     але писати їх вручну кожного разу занадто трудомістко.Для цього існують бібліотеки,
//     які реалізують усю логіку роботи галереї.

// Зроби таку саму галерею, але використовуючи бібліотеку SimpleLightbox,
//     яка повністю візьме на себе обробку кліків по зображеннях,
//     відкриття і закриття модального вікна, а також гортання зображень за допомогою клавіатури.
// Зверни увагу на такі деталі:

// Тобі більше не потрібно вручну встановлювати делегування подій,
//     оскільки бібліотека SimpleLightbox автоматично відстежує кліки по картках галереї.
// Немає необхідності додавати слухачі подій для елементів галереї.
// Окрема бібліотека BasicLightbox для створення модальних вікон більше не потрібна,
// оскільки функціонал відкриття модального вікна вбудовано в бібліотеку SimpleLightbox.
// Для встановлення бібліотек тепер не потрібно додавати CDN - посилання в index.html.
// Замість цього ми встановлюємо бібліотеки через npm в терміналі.
// Виконуй це завдання у файлах 1-gallery.html і 1-gallery.js. Розбий його на декілька підзавдань:
// Використовуй код з минулого домашнього завдання та виконай його рефакторинг.
// Не потрібно писати все з нуля.Наприклад, створення елементів галереї буде таким самим.
// А ось код делегування та відкриття модального вікна потрібно видалити.
// Додай бібліотеку SimpleLightbox як залежність проєкту, використовуючи npm .

// Для того щоб підключити CSS код бібліотеки в проєкт, необхідно додати ще один імпорт,
//     крім того, що описаний у документації.

// Наступний крок це ініціалізація бібліотеки після створення і додання елементів галереї у ul.gallery.
// Для цього ознайомся з документацією SimpleLightbox — насамперед секції «Usage» і «Markup».
// Після цього подивись у документації секцію «Options» і додай відображення підписів до зображень з
// атрибута alt.Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття модального вікна.

const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const gallery = document.querySelector('ul.gallery');
const galleryMarkup = images
  .map(({ preview, original, description }) => {
    return `   <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
  })
  .join('');
gallery.innerHTML = galleryMarkup;
