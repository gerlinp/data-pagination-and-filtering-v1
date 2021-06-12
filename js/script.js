/*
Global Variables
*/

const studentList = document.querySelector('.student-list')
const linkList = document.querySelector('.link-list');
const header = document.querySelector('.header');
let items = linkList.getElementsByTagName('li');
let btns = linkList.getElementsByTagName('button')
let pageButtons = 5;
let filteredData = data;

// search function
header.innerHTML += `
<label for="search" class="student-search">
  <span>Search by name</span>
  <input id="search" type="text" name="searchbar" placeholder="Search by name...">
  <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
</label>`;


const searchBar = document.querySelector('#search');
searchBar.addEventListener('keyup', (e) => {
   const searchString = e.target.value.toLowerCase();
   
    filteredData = data.filter( student => {
      let name = `${student.name.first.toLowerCase()} ${student.name.last.toLowerCase()}`
      console.log(filteredData);
      return name.includes(searchString) 
   })
   pageButtons = Math.ceil(filteredData.length / 9);
   showPage(filteredData,1)
   addPagination(filteredData)
   addRemove(btns[0]);
});
/*
showPage function 
grabs 9 students based off page selected. 
*/
function showPage(list,page) {
   let start = (page * 9) - 9;
   let end = (page * 9);
   let studentList = document.querySelector('.student-list')
   studentList.innerHTML = '';
   for (let i = start; i < end; i++) {
         if (list.length == 0) {
            studentList.innerHTML = `<h2 class="noResult">No results found</h2>`
         } else if (typeof list[i] === 'undefined') {
            break;
         } else if (i >= start && i <= end) {
            studentList.innerHTML += `
               <li class="student-item cf">
                  <div class="student-details">
                     <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
                     <h3>${list[i].name.first} ${list[i].name.last}</h3>
                     <span class="email">${list[i].email}</span>
                  </div>
                  <div class="joined-details">
                     <span class="date">${list[i].registered.date}</span>
                  </div>
               </li>`
            ;
         } 
      };
   };
/*
addPagination function
Appends page buttons to the to the site using the DOM
*/
function addPagination(list) {
   linkList.innerHTML = '';
   if ( pageButtons > 2 ) {
      for (let i = 1; i <= pageButtons; i++) {
         linkList.innerHTML += `
         <li>
            <button type="button">${i}</button>
         </li>`
      };
   }
};
/*
addRemove function -
 removes active class from non active pagination buttons.
 while adding it to active pagination button.
*/
const first = `<button type="button">1</button>`
function addRemove(targeted) {
   console.log(targeted)
   addPagination(filteredData);
   for (let i = 0; i < btns.length; i++) {
      if (btns[i].textContent == targeted.innerHTML) {
         btns[i].classList.add('active');
      }
   };
   let li = targeted.parentElement;
   showPage(data, targeted.textContent);
}
// Event Listeners
linkList.addEventListener('click', e => {
   if ( e.target.tagName == 'BUTTON' ) {
      addRemove(e.target);
   }
});
// Call functions
addPagination(data);
addRemove(btns[0]);
showPage(data,1);


