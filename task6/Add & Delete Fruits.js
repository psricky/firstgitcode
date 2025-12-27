const listItems = document.querySelectorAll('li');
for (let i = 0; i < listItems.length; i++){
    const li = listItems[i];
    const deleteBtn = li.querySelector('.delete-btn');
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    deleteBtn.insertAdjacentElement('afterend', editBtn);
}


const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const fruitToAdd = document.getElementById('fruit-to-add');
    const newLi = document.createElement('li');
    const newLiText = document.createTextNode(fruitToAdd.value);
    newLi.appendChild(newLiText);
    newLi.className = 'fruit';
    const deleteBtn = document.createElement('button');
    const deleteBtnText = document.createTextNode('x');
    deleteBtn.appendChild(deleteBtnText);
    deleteBtn.className = 'delete-btn';
    const editBtn = document.createElement('button');
    const editBtnText = document.createTextNode('Edit');
    editBtn.appendChild(editBtnText);
    editBtn.className = 'edit-btn';
    newLi.appendChild(editBtn);
    newLi.appendChild(deleteBtn);
    fruits.appendChild(newLi);
});

const delbtn = document.querySelector('.delete-btn');
delbtn.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        const fruitToDelete = event.target.parentElement;
        fruits.removeChild(fruitToDelete);
    }
});