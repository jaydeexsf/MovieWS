const button = document.querySelectorAll('.cbtn');

function handleClick () {
   if (button.classList.contains('btn-light')) {
    button.classList.add('btn-info');
    button.classList.remove('btn-light');
   } else {
    button.classList.add('btn-light');
    button.classList.remove('btn-info');
   }
}

const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&page=1';
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&query=";

let Alldata;

fetch(APILINK).then(res => res.json())
.then(function(data){ 
   Alldata = data;

   console.log(Alldata);
})


const moviList = document.querySelector('.movieList');

moviList.innerHTML = ` 
      ${Alldata.forEach(data => {
            
      });}
            <div class="p-2">
              <div class="mm">
                  <div class="img">
                    <span><img src="" alt="a">${Alldata.title}<span class="season">( Season 1, episode 4 )</span></span>
                  </div>
                  <div class="ss">
                    <span>HDTV/DVD</span>
                  </div>
              </div>
            </div>

`