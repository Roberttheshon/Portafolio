const button = document.querySelector('#botonMi');

button.addEventListener('click', (e) => {
    e.preventDefault();

     const containerSobreMi = document.querySelector('#container_sobreMi')

     if(containerSobreMi.classList.contains('block')){
        containerSobreMi.classList.remove('block');
        containerSobreMi.classList.add('hidden');
     }else{
        containerSobreMi.classList.remove('hidden');
     containerSobreMi.classList.add('block');
     }
     


})