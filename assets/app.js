
const socket = io()
const messages = document.querySelector('.messages')
const form = document.querySelector('.form')
const input = document.querySelector('.input')
// const userName = prompt()
window.addEventListener('load', () => {
    var my_div = document.querySelector('.grid-container');  
    // let parent = document.querySelectorAll('.grid-container');
    for (let i = 1; i <= 242; i++) { /* 429 */
    const newDiv = document.createElement('div');
    newDiv.classList.add('circle')
    my_div.append(newDiv)

    }

    var my_div = document.querySelector('.grid-container2');  
    // let parent = document.querySelectorAll('.grid-container');
    for (let i = 1; i <= 186; i++) { /* 429 */
    const newDiv = document.createElement('div');
    newDiv.classList.add('circle')
    my_div.append(newDiv)

    }
  });

  document.body.addEventListener('click', (event) => {
    const target = event.target.closest('.circle');
    if (!target) return;
    console.log("work")
    target.style.color = 'blue';
});

// document.querySelector(".circle").addEventListener("click", function() {

//     console.log("work")
    
//     });

// const buttonCreate = document.getElementById('Create')

// // document.body.onload = addElement;





// buttonCreate.addEventListener('click', function () {

   
    

// })
