/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list'),
    form = document.querySelector('.add'),
    input = form.querySelector('.adding__input'),
    checkbox = form.querySelector('[type = "checkbox"]'),
    deletes = movieList.querySelectorAll('.delete');
// movies = movieList.querySelectorAll('.promo__interactive-item');

// console.log(movies.firstElementChild);

deletes.addEventListener('click', (event) => {
    console.log('asdasd');
})

function addFilm() {
    movieList.innerHTML = "";
    movieDB.movies.forEach((film, i) => {
        movieList.innerHTML += `<li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
            `
    })
}


form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (checkbox) console.log("Добавляем любимый фильм");

    ///sad
    // console.log(input.value.length);//3
    // console.log(input.value[0]);//d
    if (input.value.length > 21) {
        const input21 = input.value.slice([0], [21]) + "." + "." + ".";
        movieList.innerHTML = '';
        movieDB.movies.push(input21);
        movieDB.movies.sort();
        addFilm();
    } else if (input.value.length < 21) {
        movieList.innerHTML = '';
        movieDB.movies.push(input.value);
        movieDB.movies.sort();
        addFilm();
    }
    // console.log(input.value);


})

adv.forEach(element => {
    element.remove();
});

genre.textContent = 'драма';

poster.style.backgroundImage = 'url("../img/bg.jpg")';


movieDB.movies.sort();
addFilm();


