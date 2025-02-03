export let reedMoreButton = document.getElementById('reedMore');
export let mainContent = document.getElementById('mainContent');
export let reedMoreTxt = document.getElementById('buttonTxt');
let count = 0;
export default reedMoreButton.addEventListener('click' ,function () {
    
   count++;
    if (count%2 === 1) {
        reedMoreButton.style.backgroundImage = 'url("img/reed_more180.svg")';
        reedMoreTxt.innerText = 'Скрыть';
        mainContent.innerHTML = '  <p>Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.</p> </br> </br> <p> Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера<span>, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.</span> </p> '
    } else {
        reedMoreButton.style.backgroundImage = 'url("img/reed_more.svg")';
        reedMoreTxt.innerText = 'Читать далее';
        mainContent.innerHTML = '  <p>Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.</p> </br> </br> <p hidden> Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера<span hidden>, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.</span> </p> '
    }
    
    
});
