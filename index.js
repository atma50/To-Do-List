const inputText = document.getElementById('inputText');
const ulList = document.getElementById('ulList');
const addToListBtn = document.getElementById('addToListBtn');

function addToList() {

  let inputValue = inputText.value.trim();

  if (inputValue !== '') {

    let li = document.createElement('li');
    li.textContent = inputValue;

    let deletBtn = document.createElement('button');
    deletBtn.textContent = 'x';

    deletBtn.style.backgroundColor = '#e57373';

    li.appendChild(deletBtn);

    deletBtn.addEventListener('click', function() {

      ulList.removeChild(li);

    });
    
    ulList.appendChild(li);

    inputText.value = '';

  }

}

/* addToListBtn.addEventListener('click', function() {

  let inputValue = inputText.value.trim();

  if (inputValue !== '') {

    let li = document.createElement('li');
    li.textContent = inputValue;

    ulList.appendChild(li);

    inputText.value = '';

  }

}); */

addToListBtn.addEventListener('click', addToList);

inputText.addEventListener('keydown', function(event) {

    if (event.key === 'Enter') {

      addToList();

    }

});
