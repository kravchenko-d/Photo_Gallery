# Фотогалерея

Сайт с возможностью загрузки изображений через админку Directus.
- При клике на фотографию на сайте появляется всплывающее окно с изображением в полном размере.
- При загрузке изображений любых размеров и соотношений верстка сохраняется.
- Реализована адаптивная верстка.

Используемые технологии:
- React
- Vite
- Tailwind
- Directus
- Axios
- Mobx
- Docker

Frontend: http://localhost:5173/

Backend (Directus): http://localhost:8055/admin/

Данные для входа в админку Directus:
- логин: admin@example.com
- пароль: d1r3ctu5

## Запуск приложения
- Клонировать репозиторий из GitHub
```bash
git clone https://github.com/kravchenko-d/Photo_Gallery.git
```
- Запустить Docker Compose:
```bash
docker compose up
```
- Установить модули:
```
npm i
```
- Запустить приложение:
```bash
npm run dev
```
## Скриншоты
![Frontend](/screenshots/screenshot_1.jpg)
![Frontend - popup](/screenshots/screenshot_2.jpg)
![Backend - Directus](/screenshots/screenshot_3.jpg)