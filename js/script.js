/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
let studentList = document.querySelector('.student-list')

function showPage(list,page) {
   let start = (page * 9) - 9;
   let end = (page * 9);
   let studentList = document.querySelector('.student-list')
   studentList.innerHTML = '';
   for (let i = start; i < end; i++) {
         if (i > 41) {
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
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
let linkList = document.querySelector('.link-list');
function addPagination(list) {

   let pageButtons = 5;
   linkList.innerHTML = '';
   for (let i = 1; i <= pageButtons; i++) {
      linkList.innerHTML += `
      <li>
         <button type="button">${i}</button>
      </li>`
   };
};


linkList.addEventListener('click', function(e) {
   showPage(data,e.target.innerHTML);
   } 
);


// Call functions
showPage(data,1);
addPagination(data);