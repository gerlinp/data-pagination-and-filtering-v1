const header = document.querySelector('.header')
const linkList = document.querySelector('.link-list');
let btns = linkList.getElementsByTagName('button')
let filteredList = data;

/* 
showPage function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list,page) {
    let start = (page * 9) - 9;
    let end = (page * 9);
    let studentList = document.querySelector('.student-list');
    studentList.innerHTML = '';
    for (let i = start; i < end; i++) {
        if(filteredList.length == 0) {
            studentList.innerHTML = `<h2 class="noResult">No results found</h2>`
        } else if (i >= filteredList.length){
            break;
        } else if ( i >= start && i <= end) {
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
        }
    };

};

/*
Pagination function
This function will create and insert/append the elements needed for the pagination buttons
*/

function pagination() {
    let items = linkList.getElementsByTagName('li');
    let pageButtons = Math.ceil(filteredList.length / 9);
    linkList.innerHTML = '';
    for (let i = 1; i <= pageButtons; i++) {
        linkList.innerHTML += `
        <li>
           <button id="btn-${i}" type="button">${i}</button>
        </li>`
    };
};

/*
Event Listener
Applies pagination & showpage function to buttons.
*/
linkList.addEventListener('click', e => {
    if ( e.target.tagName == 'BUTTON' ) {
        pagination();
        showPage(filteredList,e.target.innerHTML)
        for (let i = 0; i < btns.length; i++) {
            if (btns[i].textContent == e.target.innerHTML) {
               btns[i].classList.add('active');
            }
         }; 
    }
 });


 /*
Searchbar 
Adding search bar
*/

header.innerHTML += `
<label for="search" class="student-search">
  <span>Search by name</span>
  <input id="search" type="text" name="searchbar" placeholder="Search by name...">
  <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
</label>`;

const searchBar = document.querySelector('#search'); // global varibale for search bar.

 /*
Search & Filter
Adding Eventlistener to searchbar while  filtering  results on keyup.
*/

searchBar.addEventListener('keyup', (e) => {
    let search = e.target.value.toUpperCase();
    console.log(search)
    filteredList = data.filter(student => {
        studentName = `${student.name.first.toUpperCase()} ${student.name.last.toUpperCase()}`    
  	    return studentName.indexOf(search) > -1;
  });
  pagination(filteredList);
  showPage(filteredList,1);
  activeBtn() 
});


//  Applies active class to first button
function activeBtn() {
    let first = document.querySelector('#btn-1');
    first.classList.add('active');
};

// Call functions

function firstLoad() {
    showPage(filteredList,1);
    pagination(filteredList);
    activeBtn() 
}
firstLoad(); 


