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
const radioButtons = document.querySelectorAll('#category input[type="radio"]');


let Alldata;
let category = "Recent"; // selceted category

fetch(APILINK).then(res => res.json())
.then(function(data){ 
   Alldata = data.results;
   console.log(Alldata);

   //function for targeting the values inside the category buttons
function settingCategory (){

   radioButtons.forEach( radio => {
      radio.addEventListener('click', (e)=> {
         category = e.target.id;
         const radioId = e.target.id;
    
         const label = document.querySelector(`label[for="${radioId}"]`);

         category = label.textContent;

      })
   })

}

//caling this functionn so that automatically when user clikc buttns it gets executed
settingCategory();

// console.log(category)

const moviList = document.querySelector('.movieList');

//i will upddate this later to make the user choose the letter
let queryLetter = "D";

// Sorting by category
const Popular = Alldata.filter(data => data.popularity > 1000); 
const AToZ = Alldata.filter(data => data.title.slice(0, 1) === queryLetter);

console.log(Popular);
console.log(AToZ)
console.log(Alldata[0].title.slice(0, 1));

if (category === "Recent") { moviList.innerHTML = Alldata.map(data => 
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
      ).join('')

  } else if ( category === "Popular") {
   moviList.innerHTML = Popular.map(data => 
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
   ).join('')
  }

}) 





