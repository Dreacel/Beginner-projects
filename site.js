const plantsoil = document.querySelector('.soil')
const plantflower = document.querySelector('.plant')


plantsoil.addEventListener('click', () => {
    if(plantflower.classList.contains('plant')) {
        plantflower.classList.add('active');
        plantsoil.classList.remove('active');
    }
});

plantflower.addEventListener('click', () => {
    if(plantsoil.classList.contains('soil')) {
        plantsoil.classList.add('active');
        plantflower.classList.remove('active');
    }
});