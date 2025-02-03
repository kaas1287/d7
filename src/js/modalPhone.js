export let phone768 = document.getElementById('phoneButton2');
let phone = document.getElementById('phoneButton');
let form = document.getElementById('modalForm');
let drop = document.getElementById('dropMenu');
let phoneTXT = document.getElementById('phoneTXT');
console.log(form);
console.log(phoneTXT);
phone768.addEventListener('click' ,function show(){
    modalWindow.style.display = 'block';
    closeWrap.style.display = 'block';
    drop.style.display = 'none';
    phoneTXT.textContent = 'Заказать звонок';
    form.innerHTML = '<input name="" id="" type="tel" placeholder="Телефон" class="modal-form__number">';
})
phone.addEventListener('click' ,function show(){
    modalWindow.style.display = 'block';
    closeWrap.style.display = 'block';
    drop.style.display = 'none';
    phoneTXT.textContent = 'Заказать звонок';
    form.innerHTML = '<input name="" id="" type="tel" placeholder="Телефон" class="modal-form__number">';
   
})
    