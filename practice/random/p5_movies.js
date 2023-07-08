let api = 'http://www.omdbapi.com/?apikey=cf2dfa76&t='


function findMovie(){
    let movie = document.getElementById('search');
    fetch(api + movie.value).then(function (response) {
        return response.json()
    }).then(function (data) {
        document.getElementById('landing').classList.add('gayab');
        document.getElementById('movie-info').classList.remove('gayab');
        document.getElementById('title').innerText = data.Title;
        document.getElementById('desc').innerText = data.Plot;
        document.getElementById('rating').innerText = data.Ratings[0].Value;
        document.getElementById('year').innerText = data.Year;
        document.getElementById('director').innerText = data.Director;
        document.getElementById('genre').innerText = data.Genre;
        document.getElementById('poster').src = data.Poster;
        console.log(data);
    })
}


