const plantsoil = document.querySelector('.soil')
const plantflower = document.querySelector('.plant')


plantsoil.addEventListener('click', () => {
    if(plantflower.classList.contains('plant')) {
        plantflower.classList.add('active');
    }
});