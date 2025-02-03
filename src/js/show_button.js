export let showButton = document.getElementById('show_more');
export let hiddenElement = Array.from(document.getElementsByClassName('swiper-width768__item_none'));
export let textButtonShow = document.getElementById('textButtonShow');

export default showButton.addEventListener('click' ,function show(){
    
  hiddenElement.forEach(function(elem){
    if (elem.style.display == 'none') {
    elem.style.display = 'flex';
    textButtonShow.textContent = 'Cкрыть';
    showButton.style.backgroundImage = 'url("img/reed_more180.svg")'
  } else {
    elem.style.display = 'none';
    textButtonShow.textContent = 'Показать все';
    showButton.style.backgroundImage = 'url("img/reed_more.svg")'
  }
  })
})