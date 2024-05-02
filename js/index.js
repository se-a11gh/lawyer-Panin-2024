/* Общая анимация */
const animItems = document.querySelectorAll("._anim-items");
if(animItems.length > 0){
    window.addEventListener("scroll", animOnScroll);
function animOnScroll(){
for (let index = 0; index < animItems.length; index++) {
    const animItem = animItems[index];
    const animItemHeight = animItem.offsetHeight;
    const animItemOffset = offset(animItem).top;
    let animItemPoint = window.innerHeight - animItemHeight / 1.5;
    if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / 1.5;
    }
    if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add("_active");
    }
}}
function offset(el) {
    const rect = el.getBoundingClientRect(),    
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log(rect);
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}}



/* popUP-инфо про адвоката */
let a_foto = document.querySelector('.adv_fon__content_foto img');
if(a_foto){
let adv_fon_info = document.querySelector('.adv_fon__content_info');
let a_about_more = document.querySelector('.adv_fon__content_about_more');
let a_nambers = document.querySelector('.adv_fon__content_numbers');
let a_soc = document.querySelectorAll('.adv_fon__content_social a');
let btn_selectExp = document.querySelectorAll('.btn_selectExp');
btn_selectExp.forEach((e)=>{ 
e.addEventListener('click', (r)=>{
popFoneClose[1].classList.toggle('visib')
async function readFile() {
    const data = await fetch("../DB/lawyers.json");
    const obj = await data.json();
    function getInfo(indx){
        adv_fon_info.firstElementChild.innerHTML = obj.advok[0].advk_name[indx].name;
        a_nambers.innerHTML = obj.advok[1].advk_numbers[indx].numbrs;
        a_foto.src = obj.advok[2].advk_photo[indx].src;
        adv_fon_info.lastElementChild.innerHTML = obj.advok[3].advk_about[indx].about;
        a_about_more.innerHTML = obj.advok[4].advk_about_more[indx].about_more;
        a_soc[0].href = obj.advok[5].advk_social[indx].facb;
        a_soc[1].href = obj.advok[5].advk_social[indx].insta;
        a_soc[2].href = obj.advok[5].advk_social[indx].twit;
    }
    if(r.target.dataset.ex == 'exprt1'){ getInfo(0)}
    if(r.target.dataset.ex == 'exprt2'){ getInfo(1)}   
    if(r.target.dataset.ex == 'exprt3'){ getInfo(2)}
    if(r.target.dataset.ex == 'exprt4'){ getInfo(3)} 
}
readFile();
});
});
}


/* Показ сертификатов */
let selct_sertif = document.querySelectorAll('.selct_sertif_js');
if(selct_sertif){  
let foto_out = document.querySelector('.adv_fon_sertf > img');
selct_sertif.forEach((el)=>{
el.addEventListener('click', (e)=>{ 
    console.log(222);
    popFoneClose[2].classList.toggle('visib');
    foto_out.src = e.target.src;}); 
});
}


/* LazyLoad */
function scrollPage(myImg, observer) {
    myImg.forEach((e) => {
    if (e.intersectionRatio > 0 && !e.target.dataset.loaded) {
    e.target.src = e.target.getAttribute('data-src');
    e.target.dataset.loaded = true;
    }
    });
}
let observer = new IntersectionObserver(scrollPage, {
root: null,
rootMargin: '150px',
threshold: 0.1
});
const images = document.querySelectorAll('.lazload');
images.forEach((e)=>{
observer.observe(e);
});