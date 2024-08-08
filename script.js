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
   Alldata = data.results;
   console.log(Alldata);



const moviList = document.querySelector('.movieList');

//i will upddate this later to make the user choose the letter
let queryLetter = "D";

// Sorting by category
const Popular = Alldata.filter(data => data.popularity > 1000); 
const AToZ = Alldata.filter(data => data.title.slice(0, 1) === queryLetter);

console.log(Popular);
console.log(AToZ)
console.log(Alldata[0].title.slice(0, 1));

moviList.innerHTML = Alldata.map(data => 
         `<div class="p-2">
         <div class="mm">
             <div class="img">
               <img width="25px" height="auto" src="${IMG_PATH}${data.backdrop_path}" alt="${data.title}">
               <span class="aaa">${data.title}<span class="season">( ${data.release_date} )</span></span>
             </div>
             <div class="ss">
               <span>HDTV/DVD</span>
             </div>
         </div>
       </div>`
      ).join('');
})





// let Alldata;

// // Fetch movie data from the API
// fetch(APILINK)
//    .then(res => res.json())
//    .then(data => { 
//       Alldata = data.results;

//       console.log(Alldata);

//       // Render movie list after fetching data
//       const moviList = document.querySelector('.movieList');
//       moviList.innerHTML = Alldata.map(data => 
//          `<div class="p-2">
//             <div class="mm">
//                 <div class="img">
//                   <img src="${IMG_PATH}${data.poster_path}" alt="${data.title}">
//                   <span>${data.title}<span class="season">( ${data.release_date} )</span></span>
//                 </div>
//                 <div class="ss">
//                   <span>HDTV/DVD</span>
//                 </div>
//             </div>
//           </div>`
//       ).join(''); // Join the array of HTML strings into a single string
//    });