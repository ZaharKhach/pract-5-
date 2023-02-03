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



function addFilm(films, parent) {
    parent.innerHTML = "";
    films.forEach((film, i) => {
        parent.innerHTML += `<li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
            `;
        const deletee = document.querySelector('.delete');
         deletee.addEventListener('click', () => {
            deletee.parentElement.remove();
        })
    })
}


const deleteAdv = (arr) => {
    arr.forEach(element => {
        element.remove();
    });
}

function sortArr(arr) {
    arr.sort();
}

const makeChanges = () => {
    genre.textContent = 'драма';
    poster.style.backgroundImage = 'url("../img/bg.jpg")';
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (checkbox.checked) {
        console.log("Добавляем любимый фильм");
    }
    ///sad
    // console.log(input.value.length);//3
    // console.log(input.value[0]);//d
    if (input.value){
        if (input.value.length > 21) {
            const input21 = input.value.slice([0], [21]) + "." + "." + ".";
            movieDB.movies.push(input21);
            sortArr(movieDB.movies);
            addFilm(movieDB.movies, movieList);
        } else if (input.value.length < 21) {
            movieDB.movies.push(input.value);
            sortArr(movieDB.movies);
            addFilm(movieDB.movies, movieList);
        }
    }
    // console.log(input.value);


})

deleteAdv(adv);

makeChanges();

sortArr(movieDB.movies);

addFilm(movieDB.movies, movieList);


