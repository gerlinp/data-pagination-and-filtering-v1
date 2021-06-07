/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



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
         if (i >= start && i <= end) {
            console.log(`test ${i}`);
            studentList.innerHTML += `
               <li class="student-item cf">
                  <div class="student-details">
                     <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
                     <h3>${list[i].name.first} ${list[i].name.last}</h3>
                     <span class="email">ethel.dean@example.com</span>
                  </div>
                  <div class="joined-details">
                     <span class="date">Joined 12-15-2005</span>
                  </div>
               </li>`
            ;
         } 
      };
   };
 showPage(data,1);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
