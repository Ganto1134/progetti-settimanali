const inputLista = document.getElementById('input')

const listone = document.getElementById('lista');

function aggiungiLista() { 
    if (inputLista.value === '') { 
        alert('Devi scrivere qualcosa da fare');
    } else { 
        let li = document.createElement('li');
        li.innerHTML = inputLista.value;
        listone.appendChild(li);
        let i = document.createElement('i');
        i.classList.add('far', 'fa-trash-alt') ;
        li.appendChild(i);
    } ;
};

 listone.addEventListener('click', function(e){ 
        if (e.target.tagName === 'LI'){ 
            e.target.classList.toggle('classList')
            }  else if(e.target.tagName === 'I') { 
            e.target.parentElement.remove();
    }  
    }); 

  /*  function checked(evt) { 
        evt.target.classList.toggle('classList');
    }
    listone.addEventListener('click', checked, false) */

    /* const pezziLista = listone.getElementByTagName('li')
    pezziLista.addEventListener('click', function(){ 
        pezziLista.classList.toggle('classList');
    }); */
