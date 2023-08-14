![preview-hw](/gh-hw-preview.jpg)
# WEBSTUDIO (website)
**Individual project.**

**Role:** developer.

**Title:** WebStudio.

**Description:** business card site for a web studio.

**Target:** website development according to the design layout.

**Basic functionality:** аdaptive layout, "Mobile First" approach, responsive images, optimized graphics for Retina Display, transform effects, modal window, favicon.

**Skills:** HTML5, CSS and little bit JavaScript.

--------------------------------------------------
**Індивідуальний проект.**

**Роль:** розробник.

**Назва:** WebStudio.

**Опис:** сайт візитка для веб-студії.

**Ціль:** розробка сайту згідно [дизайн-макету](<https://www.figma.com/file/7DbgmHW2lcF0Cxkrr1Hrg7/Web-Studio-goit-markup-hw-(Version-3.0)?type=design&node-id=297046%3A1554&mode=design&t=nwh54MzAvT9AgDUL-1>)..

**Навички:** HTML5, CSS і трішки JavaScript.

**Базовий функціонал:**
- Верстка адаптивна, виконана щодо трьох точок перелому: 428px, 768px і 1160px.
- При написанні стилів використаний підхід `Mobile First.
- Оптимізація розмірів векторної та растрової графіки.
- Забезпечення підтримки відображення картинок для retina-екранів.
- Оптимізація завантаження зображень.
- Відображення фавікону сторінки.
- Реалізація модального вікна.



## КОРИСНІ ПОСИЛАННЯ
### Генерація SVG-спрайту

[**Icomoon**](https://icomoon.io/)

### Оптимізація створеного SVG-спрайту

[**svgomg**](https://jakearchibald.github.io/svgomg/)

### Стандарти написання коду

[**Code Guide**](https://codeguide.co/)

### Нормалізатор стилів

[**modern-nomalize**](https://github.com/sindresorhus/modern-normalize)

### Оптимізація зображень

[**squoosh**](https://squoosh.app/)

### HTML-валідатор

[**Html Checker**](http://validator.w3.org/nu/)

### Форматування вихідного коду
[**Prettier - Code formatter**](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) — розширення Visual Studio Code


## ПАМ'ЯТКА ПО ПРОЕКТУ

### Притискання футеру до низу сторінки HTML CSS FLEX

```css
html,
body {
  height: 100%;
}
.wrapper-in-body {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
main {
  flex: 1 1 auto;
}
```

### Респонсивний елемент <img> (атрибут srcset)

Дозволяє завантажувати різні версії (розміри) однакового зображення.

**Дескриптор x** (прив'язка до щільністі екрану)

Вказує браузеру, для якої щільності екрану підходить версія зображення.

```html
<img srcset="photo.jpg 1x, photo@2x.jpg 2x" src="photo.jpg" alt="Опис зображення для всіх версій" />
```

**Дескриптор w** (прив'язка до фізичних розмірів зображення)

Вказує браузеру, яке зображення слід обрати, виходячи зі щільності пікселів, розміру в'юпорту та
оригінального розміру зображення.

```html
<img
  srcset="photo-300.jpg 300w, photo-600.jpg 600w, photo-1200.jpg 1200w"
  src="photo-300.jpg"
  alt="Опис зображення для всіх версій"
/>
```

**Атрибут sizes** (при використанні дескриптора w)

Вказує браузеру, приблизний розмір полотна, на якому буде зображення.

```html
<img
  srcset="photo-300.jpg 300w, photo-600.jpg 600w, photo-1200.jpg 1200w"
  sizes="(min-width: 900px) 600px, (min-width: 600px) 300px, 100vw"
  src="photo-300.jpg"
  alt="Опис зображення для всіх версій"
/>
```

`(min-width: 900px) 600px` - при ширині в'юпорту від 900px, розмір зображення 600px.

`(min-width: 600px) 300px` - при ширині в'юпорту від 600px, розмір зображення 300px. 

`100vw` - повна
ширина в'юпорту (значення за замовчуванням, яке вказується останнім).

### Респонсивний елемент <picture> (атрибут srcset)

Дозволяє завантажувати зображення різного формату (розширення), зображення різної геометрії
(кадрування) або зображення для підтримки режиму темної теми.

```html
<picture>
  //дозволить браузеру завантажити зображення з розширенням .webp, якщо він його підтримує
  <source srcset="photo.webp 1x, photo@2x.webp 2x" type="image/webp" />
  //якщо не підтримує завантажить з розширенням .jpeg
  <source srcset="photo.jpg 1x, photo@2x.jpg 2x" type="image/jpeg" />
  //якщо екран ширше 600px буде завантажений photo-wide.jpg
  <source srcset="photo-wide.jpg" media="(min-width: 600px)" type="image/jpg" />
  <img src="photo.jpg" alt="photo" />
</picture>
```

Cлід пам'ятати, що якщо медіа-запит визначається як помилковий (не підходить), то цей елемент
[**<source>**](https://developer.mozilla.org/ru/docs/Web/HTML/Element/source#attr-sizes)
пропускається. Порядок важливий: від більшого зображення (desktop) до меншого (mobile).

Найвигідніше `<picture>` використовувати при зміні `media="(orientation: landscape/portrait)"` —
[Responsive Images](https://webdesign.tutsplus.com/quick-tip-how-to-use-html5-picture-for-responsive-images--cms-21015t)

Більш детально про
[Responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

### Респонсивні фонові зображення (медіа-функції **min-device-pixel-ratio** і **min-resolution**)

Для ретинізаціі фонового зображення необхідно задати розмір фону елемента, що дорівнює розміру
самого елемента.

```css
.hero {
  width: 200px;
  height: 300px;
  background-image: url(../hero-bg.jpg);
  background-size: 200px 300px;
}
```

Або можна задати значенням cover, щоб фон повністю заповнював елемент

```css
.hero {
  background-image: linear-gradient(rgba(46, 47, 66, 0.7), rgba(46, 47, 66, 0.7)),
    url(../hero-bg-mobile-1x.jpg);
  background-size: cover;
}
@media (min-device-pixel-ratio: 2),
  (-webkit-min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
  .hero {
    background-image: linear-gradient(rgba(46, 47, 66, 0.7), rgba(46, 47, 66, 0.7)),
      url(../hero-bg-mobile-2x.jpg);
  }
}
```

### Змінні (палітра кольорів макета, набори шрифтів і т.д.)

```css
:root {
  --text: #434455;
  --transition-dur: 250ms
  --transition-timing-func: cubic-bezier(0.4, 0, 0.2, 1);
}
.text-wrapper {
  color: var(--text);
  transition: color var(--transition-dur) var(--transition-timing-func);
}
```

### Медіа-запити (min-width: ) і (max-width: )

```css
.container {
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
}

@media screen and (max-width: 767px) {
  .container {
    max-width: 428px;
  }
}
/* ============= TABLET STYLES ============= */
@media screen and (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}
/* ============= DESKTOP STYLES ============= */
@media screen and (min-width: 1200px) {
  .container {
    max-width: 1160px;
  }
}
```

### SVG-спрайт

```html
<li class="social-list-item">
  <a href="" class="social-list-item-link">
    <svg class="social-list-item-icon" aria-label="instagram">
      <use href="./images/icons.svg#instagram"></use>
    </svg>
  </a>
</li>
```
```css
.social-list-item-icon {
  width: 16px;
  height: 16px;
  fill: #000;
  fill-opacity: 0.5;
  stroke: #fff;
  stroke-width: 1px;
  stroke-opacity: 0.5;
}
```

### Відкриття/закриття модального вікна

Скрипт для модального вікна

```js
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
```

Для того щоб скрипт спрацював, необхідно додати до розмітки спеціальні атрибути, за якими скрипт
шукає елементи:

- `data-modal-open` - на кнопку відкриття модального вікна.
- `data-modal-close` - на кнопку закриття модального вікна.
- `data-modal` - на бекдроп модального вікна.
