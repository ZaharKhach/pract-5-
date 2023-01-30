/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

// const adv = document.getElementsByClassName('promo__adv');
const adv = document.querySelector('.promo__adv');
let film = document.querySelector('.promo__bg');
let listOfFilm = document.querySelectorAll('.promo__interactive-item');
console.log(listOfFilm[0]);
// console.log(film);


const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
// console.log(movieDB.movies[0]);
adv.remove();


film.querySelector('.promo__genre').textContent = "драма";


// bcIconOfFilm.style.cssText = 'background: url('../img/bg.jpg')';
// bcIconOfFilm.style.cssText =" height: 360px; background: url('../img/bg.jpg') center (center / cover) no-repeat; background-position: top; padding: 107px 0 0 61px;"
film.style.backgroundImage = "url(../img/bg.jpg)";
// bcIconOfFilm.style.cssText = 'url('../img/mars.webp')'

movieDB.movies.sort();
listOfFilm.forEach(function (element, index) {
    console.log(element);   
    element.innerHTML =  `${index + 1}. ${movieDB.movies[index]} <div class="delete"></div>`
    // element.insertAdjacentElement('beforebegin',`${movieDB.movies[index]} <div class="delete"></div>`);
    // console.log(element);
});
// listOfFilm.sort();

