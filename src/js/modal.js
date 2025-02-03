export let mesage = document.getElementById('mesageButton');
 let modalWindow = document.getElementById('modalWindow');
 let drop = document.getElementById('dropMenu');
 let modalClose = document.getElementById('Modalclose');
 let all = document.getElementById('allContent');
 let mesage2 = document.getElementById('mesageButton2');
let form = document.getElementById('modalForm');
let phoneTXT = document.getElementById('phoneTXT');
let closeWrap = document.getElementById('closeWrap');

const windowInnerWidth = window.innerWidth;

mesage2.addEventListener('click' ,function show(){
    modalWindow.style.display = 'block';
    drop.style.display = 'none'
    closeWrap.style.display = 'block';
    if (form.innerHTML == '<input name="" id="" type="tel" placeholder="Телефон" class="modal-form__number">');{
        phoneTXT.textContent = 'Обратная связь';
        form.innerHTML = '<input name=""  type="text" placeholder="Имя" class="modal-form__name"> <input name=""  type="tel" placeholder="Телефон" class="modal-form__number"> <input name=""  type="email" placeholder="Электронная почта" class="modal-form__email"> <textarea name=""  placeholder="Сообщение" class="modal-form__mesage"></textarea>'
    }
})
export default mesage.addEventListener('click' ,function show(){
    modalWindow.style.display = 'block';
    drop.style.display = 'none'
    closeWrap.style.display = 'block';
    if (form.innerHTML == '<input name="" id="" type="tel" placeholder="Телефон" class="modal-form__number">');{
        phoneTXT.textContent = 'Обратная связь';
        form.innerHTML = '<input name=""  type="text" placeholder="Имя" class="modal-form__name"> <input name=""  type="tel" placeholder="Телефон" class="modal-form__number"> <input name=""  type="email" placeholder="Электронная почта" class="modal-form__email"> <textarea name=""  placeholder="Сообщение" class="modal-form__mesage"></textarea>'
    }
})
modalClose.addEventListener('click' ,function show(){
    if (windowInnerWidth > 1439) {
        modalWindow.style.display = 'none';
        closeWrap.style.display = 'none';
        drop.style.display = 'block';
        all.style.display = 'block';
    } else {
        modalWindow.style.display = 'none';
        drop.style.display = 'none';
        all.style.display = 'block';
        closeWrap.style.display = 'none';
    }
})
closeWrap.addEventListener('click' ,function show(){
    if (windowInnerWidth > 1439) {
        modalWindow.style.display = 'none';
        drop.style.display = 'block';
        all.style.display = 'block';
        closeWrap.style.display = 'none';
    } else {   
    modalWindow.style.display = 'none';
        drop.style.display = 'none';
        all.style.display = 'block';
        closeWrap.style.display = 'none';
    }

})