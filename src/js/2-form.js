// Завдання 2 - Форма зворотного зв'язку
// Виконуй це завдання у файлах 2-form.html і 2-form.js.

// Додай у HTML розмітку форми.
// У JS напиши скрипт, який буде зберігати значення полів у локальне сховище,
//     коли користувач щось друкує.
// Виконуй це завдання у файлах 2 - form.html і 2 - form.js.
//  Розбий його на декілька підзавдань:

// Оголоси поза будь - якими функціями об’єкт formData з полями email та message,
// які спочатку мають порожні рядки як значення: { email: "", message: "" }.
// Використовуй метод делегування для відстеження змін у формі через подію input.
// Зберігай актуальні дані з полів email та message у formData та
// записуй цей об’єкт у локальне сховище.
// Використовуй ключ "feedback-form-state" для зберігання даних у сховищі.
// При завантаженні сторінки перевір, чи є дані у локальному сховищі.
//  Якщо так, використовуй їх для заповнення форми та об'єкта formData.
//  Якщо ні, залиш поля форми порожніми.
// Перед відправленням форми переконайся, що обидва поля форми заповнені.
// Якщо будь - яке з полів(властивостей об’єкта formData) порожнє,
//     показуй сповіщення з текстом «Fill please all fields».
//  Якщо всі поля заповнені, виведи у консоль об’єкт formData з
//  актуальними значеннями, очисти локальне сховище, об’єкт formData і поля форми.
const form = document.querySelector('.feedback-form');
const formData = { email: '', message: '' };
const STORAGE_KEY = 'feedback-form-state';

// Завантаження даних з локального сховища при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    Object.assign(formData, JSON.parse(savedData));
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
});
// Обробка події input та збереження даних у локальне сховище
form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});
// Обробка події submit форми
form.addEventListener('submit', event => {
  event.preventDefault();
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  if (email === '' || message === '') {
    return console.log('Fill please all fields');
  }
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  form.reset();
});
