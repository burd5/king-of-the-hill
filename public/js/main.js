document.querySelector('.findMovies').addEventListener('click', getMovie)
document.querySelector('.refresh').addEventListener('click', refreshQueue)

function refreshQueue(){
    document.location.reload()
}

async function getMovie() {
    
    let movie = await document.querySelector('.movieValue').value
    let year = await document.querySelector('.yearValue').value
    let movieTitles = [];
    let movieYear = [];
    let movieImg = [];
    let movieId = [];
    let errors = document.querySelector('.error')
    try {
    await fetch(`http://www.omdbapi.com/?&apikey=7462e3b8&s=${movie}&y=${year}`)
          .then((res) => res.json())
          .then((data) => {
              for(let i = 0; i < data.Search.length - 1; i++){
                movieTitles.push(data.Search[i].Title)
                movieYear.push(data.Search[i].Year)
                movieId.push(data.Search[i].imdbID)
                if(data.Search[i].Poster == "N/A"){
                    movieImg.push('https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png')
                }
                else{
                movieImg.push(data.Search[i].Poster)
                }
              }
              console.log(data)
              const displayResults = document.getElementById("movieQuery");
              for (let i = 0; i < movieTitles.length; i++) {
                const list = document.createElement('ul')
                list.classList.add('title-item')
                let li = document.createElement("li")
                li.id = 'title';
                let title = document.createTextNode(movieTitles[i]);
                li.appendChild(title);
                list.appendChild(li);
                let li2 = document.createElement("li")
                let year = document.createTextNode(`(${movieYear[i]})`);
                li2.classList.add('year-item')
                li2.appendChild(year);
                list.appendChild(li2);
                let img = document.createElement('img')
                img.src = (movieImg[i]);
                img.classList.add('img-item')
                list.appendChild(img);
                let imdb = document.createElement('a')
                imdb.innerText = 'IMDB'
                let hyperLink = `https://www.imdb.com/title/${movieId[i]}/`
                imdb.href = hyperLink
                imdb.classList.add('year-item')
                list.appendChild(imdb);
                let button = document.createElement('button')
                button.classList.add('movieButton')
                button.addEventListener('click', addToList)
                button.innerHTML = 'Add to List'
                list.appendChild(button)
                displayResults.appendChild(list)
            }})
        } catch (err) {
            errors.style.display = 'block'
            console.log(err)
        }

}



async function addToList(e,req){
    const movieTitle = await e.target.parentNode.firstChild.innerText
    const movieYear = await e.target.parentNode.children[1].innerText
    const imdb = await e.target.parentNode.children[3].href
    
    console.log(imdb, movieYear, movieTitle)

    let button = await e.target.parentNode.children[4]
    button.style.backgroundColor = 'rgb(96,186,238)'
    button.style.color = 'white'
    button.innerHTML = 'Added'
        
    try {
        const response = await fetch('/addMovie', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            movieTitle: movieTitle,
            movieYear: movieYear,
            imdb: imdb,
          }),
        });
        const data = await response.json();
        console.log(data)
      } catch (err) {
        console.error(err);
        return;
      }
}
