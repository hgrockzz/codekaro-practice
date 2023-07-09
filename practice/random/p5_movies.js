let api = 'http://www.omdbapi.com/?apikey=cf2dfa76&t='

//find movies on pressing "enter"
document.getElementById("search").addEventListener("keypress", function(event) {
    if (event.key === "Enter"){
        event.preventDefault();
        document.getElementById('btn').click();
    }   
});

function findMovie(){
    let movie = document.getElementById('search');
    // let trailer = document.createElement("a");
    document.getElementById('trailer-box').innerText = "";

    fetch(api + movie.value).then(function (response) {
        return response.json()
    }).then(function (data) {
        document.getElementById('landing').classList.add('gayab');
        document.getElementById('movie-info').classList.remove('gayab');
        document.getElementById('title').innerText = data.Title + " (" + data.Year + ")";
        document.getElementById('desc').innerText = data.Plot;
        document.getElementById('director').innerText = data.Director;
        document.getElementById('genre').innerText = data.Genre;
        document.getElementById('imdb').innerText = data.imdbRating + " ⭐";
        document.getElementById('poster').src = data.Poster;
        let trailer = document.createElement("a");
        trailer.innerText = "Watch Trailer";
        trailer.href = "https://www.youtube.com/results?search_query=" + data.Title +" trailer";
        trailer.classList.add("trailer","btn");
        document.getElementById('trailer-box').appendChild(trailer);
        console.log(data);
    })
}


