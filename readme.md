#Проект спорт-клуба "Super gym"
Адаптивность сетки: мобильная, планшетная и десктопная версии. Desktop First.
Брейкопойнты :
  - мобильная версия — 320px - 767px
  - планшетная версия — 768px - 1199px
  - десктопная версия — от 1200 px и выше
На всех промежуточных разрешениях используется резиновая вёрстка.
Кроссбраузерность: Chrome, Firefox, Safari.

Используемые технологии:
- HTML
- CSS
- JS
- методология BEM
- препроцессор Sass (SCSS)
- Swiper
- webpack, gulp

## [Гайд по работе со сборкой](/GUIDE.md) 📕

## Краткая инструкция по работе
Для начала работы у вас должент быть установлен **Node.js**

### Основные команды для работы
- Установка - `npm i`
- Запуск локального сервера без минификаций - `npm start`
- Запуск локального сервера c минификациями, <br>
данный вариант не используется в разработке, <br>
он нужен только для тестов производительности <br>
на локальном хосте  - `npm run dev`
- Сборка проекта, минификация скриптов <br>
и оптимизация изображений перед деплоем на прод - `npm run build`
- Запуск тестирования на соответствия кодгайдам - `npm test`
- Создание webp изображений в директории source - `npm run webp`

### Вся разработка ведётся в директории `source`
### Итоговый код попадает в директорию `build`
