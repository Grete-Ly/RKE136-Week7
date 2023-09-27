const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const movieDate = document.querySelector('.userInputDate')
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');
const movieDateToDisplay = document.querySelector('.favoriteMovieDate');

let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let dateInStorage = localStorage.getItem('releaseDate');

if(titleInStorage && imageUrlInStorage && dateInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(57, 57, 110, 0.495), rgba(55, 41, 41, 0.505)),
    url('${imageUrlInStorage}')`;
    movieDateToDisplay.textContent = dateInStorage;
}


btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let movieDateInput = movieDate.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('releaseDate', movieDateInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    movieDateToDisplay.textContent = movieDateInput;
    container.style.backgroundImage = `linear-gradient(rgba(57, 57, 110, 0.495), rgba(55, 41, 41, 0.505)),
    url('${posterUrlInput}')`;
    movieTitle.value = '';
    moviePosterUrl.value = '';
    movieDate.value = '';
});