 const menuBatton = document.getElementById('BattonDropMenu');
 const dropMenu = document.getElementById('dropMenu');
 const all = document.getElementById('allContent');
 const windowInnerWidth = window.innerWidth;

 menuBatton.addEventListener('click' ,function () {
    if (windowInnerWidth > 767) {
        dropMenu.style.display = 'block';
        dropMenu.style.position = 'fixed';
        
    } else {
    all.style.display = 'none';
    dropMenu.style.display = 'block';
}
});
const dropClose = document.getElementById('dropClose');
export default dropClose.addEventListener('click' ,function () {
    all.style.display = 'block';
    dropMenu.style.display = 'none';
    
});