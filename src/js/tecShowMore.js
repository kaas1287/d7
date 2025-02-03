export let showButton_tec = document.getElementById('show_more_tec');
export let hiddenElement_tec = Array.from(document.getElementsByClassName('tec-media768__item_show'));
export let textButtonShow_tec = document.getElementById('textButtonShow_tec');

export default showButton_tec.addEventListener('click' ,function show(){
    
    hiddenElement_tec.forEach(function(elem){
    if (elem.style.display == 'none') {
    elem.style.display = 'block';
    textButtonShow_tec.textContent = 'Cкрыть';
    showButton_tec.style.backgroundImage = 'url("img/reed_more180.svg")'
  } else {
    elem.style.display = 'none';
    textButtonShow_tec.textContent = 'Показать все';
    showButton_tec.style.backgroundImage = 'url("img/reed_more.svg")'
  }
  })
})