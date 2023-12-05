
    let createBtn = document.getElementById('create-btn');
    let createName = document.getElementById('create-name');
    let createNmbr = document.getElementById('create-nmbr');
    let deleteBtn = document.getElementById('delete-btn')
    let errorMsg = document.querySelector('.error-msg');
    let errorMsg2 = document.querySelector('.error-msg2');

    document.addEventListener('DOMContentLoaded', function() {
      

        createBtn.addEventListener('click', function(){
            errorMsg.innerText = '';
            if (validateContact(createName, createNmbr)) {

            let contactList = document.querySelector('div.contact-list-section ul');
            let contactItem = document.createElement('li');
            contactItem.className = 'contact-item';

            let inputName = document.createElement('input');
            inputName.readOnly = true;
            inputName.setAttribute('id', 'show-name');
            inputName.style.backgroundColor = 'grey';
            inputName.value = createName.value;

            let inputNumber = document.createElement('input');
            inputNumber.readOnly = true;
            inputNumber.setAttribute('id', 'show-nmbr');
            inputNumber.style.backgroundColor = 'grey';
            inputNumber.value = createNmbr.value;

            let changeBtn = document.createElement('button');
            changeBtn.textContent = 'Ändra';
            changeBtn.className = 'change-btn';
            changeBtn.addEventListener('click', function() {
                editSave(contactItem);
            });

            let deleteBtn2 = document.createElement('button');
            deleteBtn2.textContent = 'Radera';
            deleteBtn2.className = 'delete-btn2';
            deleteBtn2.addEventListener('click', function(){
                deleteItem(contactItem);
            })

            contactItem.append(inputName);
            contactItem.append(inputNumber);
            contactList.append(contactItem);
            contactItem.appendChild(deleteBtn2);
            contactItem.appendChild(changeBtn);

            createName.value = '';
            createNmbr.value = '';

        }  else {
            errorMsg.innerText = "Får ej skapa tom kontakt."
        }

       

});

      })
function validateContact(createName, createNmbr){
    return createName.value.trim() !== '' && createNmbr.value.trim() !== '';
    }

function deleteList() {
    let contactList = document.querySelector('ul.contact-list');
    let listItems = contactList.querySelectorAll('li');
        listItems.forEach(item => {
            item.remove();
        });
    }
    
deleteBtn.addEventListener('click', deleteList);


function editSave(contactItem) {
    const inputName = contactItem.querySelector('#show-name');
    const inputNumber = contactItem.querySelector('#show-nmbr');
    const changeBtn = contactItem.querySelector('.change-btn');

    if (!validateContact(inputName, inputNumber)) {
        errorMsg2.innerText = "Får ej ändra till tom kontakt.";
        return;
    }

    if (changeBtn.textContent === 'Spara') {
        errorMsg2.innerText = " ";
        inputName.readOnly = true;
        inputNumber.readOnly = true;
        inputName.style.backgroundColor = 'grey';
        inputNumber.style.backgroundColor = 'grey';
        changeBtn.textContent = 'Ändra';
    } else {
        errorMsg2.innerText = " ";
        inputName.readOnly = false;
        inputNumber.readOnly = false;
        inputName.style.backgroundColor = 'white';
        inputNumber.style.backgroundColor = 'white';
        changeBtn.textContent = 'Spara';
    }

    
}

function deleteItem(contactItem){
    contactItem.remove();
}

/* Search function copied and modified from w3schools */

function searchFunction() {

    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.querySelector('.contact-list');
    li = ul.querySelectorAll('.contact-item');
  
    
    for (i = 0; i < li.length; i++) {
      a = li[i].querySelector('#show-name');
      txtValue = a.value || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "flex";
      } else {
        li[i].style.display = "none";
      }
    }
  }



  function sortList() {
    let list = document.querySelector('.contact-list');
    let listItems = list.querySelectorAll('li');
    let sortedItems = Array.from(listItems);

    sortedItems.sort((a, b) => {
        let nameA = a.querySelector('#show-name').value.toLowerCase();
        let nameB = b.querySelector('#show-name').value.toLowerCase();
        return nameA.localeCompare(nameB);
    });

    listItems.forEach(item => item.remove());

    sortedItems.forEach(item => list.appendChild(item));
}

