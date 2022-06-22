// Кнопка добавления на первом блоке
const add_button = document.querySelector('.add_genre_button');
add_button.onclick = add_genre;
let counter = 1;


function add_genre() {

    let parent_genre = document.querySelector('.genre_holder');
    let curent_block = document.querySelector('.genre_form')
    
    counter++;

    if (counter <4) {
        let new_genre = curent_block.cloneNode(true);
        parent_genre.appendChild(new_genre);
        // new_genre.classList.replace('btn-primary', 'btn-danger');
        new_genre.querySelector('.btn-primary').classList.add('btn-danger');
        new_genre.querySelector('.btn-primary').classList.remove('btn-primary');
        new_genre.querySelector('.fa-solid').classList.add('fa-minus');
        new_genre.querySelector('.fa-solid').classList.remove('fa-plus');

    } else   {
        
        alert('max amount of genre: 3');
   }   
    
}


// Создание (клонирование), похожих фильмов
const add_similar_button = document.querySelector('.add_similar_button');
add_similar_button.onclick = add_film;

let film_counter = 1;

function add_film() {
    let parent = document.querySelector('.similar_film_holders_container');
    let sim_film = document.querySelector('.film_holder');

    film_counter++;
    
    if (film_counter < 11) {
        let new_sim = sim_film.cloneNode(true);
        parent.appendChild(new_sim);
        // Переименовывание класса у блока
        // new_sim.classList.replace('film', 'film_' + (film_counter));     
    } else   {       
         alert('max amount of similar film: 10');
    }     
}

