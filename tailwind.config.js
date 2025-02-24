export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Вкажіть шляхи до всіх ваших файлів, де використовуються класи Tailwind
  ],
  theme: {
    extend: {
      // Тут можна розширити стандартні налаштування теми
      colors: {
        'custom-blue': '#1DA1F2',
        'custom-gray': '#333333',
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    // Якщо хочете використовувати плагіни, додавайте їх сюди
  ],
}