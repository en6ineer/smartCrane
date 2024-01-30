const buttonCreate = document.getElementById('Create')

// document.body.onload = addElement;





buttonCreate.addEventListener('click', function () {

    var my_div = document.querySelector('.grid-container');  
    // let parent = document.querySelectorAll('.grid-container');
    for (let i = 1; i <= 429; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('circle')
    my_div.append(newDiv)

    }

    

})
