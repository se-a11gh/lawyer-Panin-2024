
/* PopUps */
const popFoneClose = document.querySelectorAll('.popup_js');
let blockConsult = document.querySelectorAll('.block__btnJs');
blockConsult.forEach((e)=>{
    e.addEventListener('click', (e)=>{
        if(e.currentTarget.dataset.btn == 'consl'){
            console.log(11);
            popFoneClose[0].classList.toggle('visib')
        }
        if(e.currentTarget.dataset.btn == 'ask'){
            console.log(popFoneClose[1]);
            popFoneClose[1].classList.toggle('visib')
        }
    });
});
popFoneClose.forEach((p)=>{
    p.addEventListener('click', (e)=>{
        if(e.target.dataset.close == 'cl3'){p.classList.toggle('visib')}
        if(e.target.dataset.close == 'cl5'){p.classList.toggle('visib')}
    });
});



/* Список услуг */
let listServise = document.querySelectorAll(".listJS_Up");
listServise.forEach((i)=>{
    let wrapListServ = document.querySelectorAll(".wrapListJS");
    i.addEventListener("click", ()=>{
        const sosed = i.nextElementSibling;
        sosed.style.cssText = `
        height: auto;
        padding: 10px;
        `;
    });
    wrapListServ.forEach((w)=>{
        w.addEventListener('mouseleave', ()=>{
            const sosed = i.nextElementSibling;
            sosed.style.cssText = `
            height: 0px;
            padding: 0px;
            `;
        });
    });
});



/* Боковое меню */
let element_body = document.querySelector('body');
let asideMenu = document.querySelector(".btn_close");
let menu = document.querySelector(".wrap_aside_menu");
let fonMenu = document.querySelector(".fon_aside_menu");
let btn_menu = document.querySelector(".btn_menu");
  btn_menu.addEventListener('click', (e)=>{
    element_body.classList.toggle('page_lock');
    fonMenu.classList.toggle('fonMenuShow');
    btn_menu.classList.toggle('active2');
  });



/* Верхняя панель контакты */
let topContcts = document.documentElement.getBoundingClientRect().top;
let head_addpanel = document.querySelector('.head_addpanel');
let close_dopHead = document.querySelector('.close_dopHead');
let contacts__1 = document.querySelectorAll('.contacts__1');
contacts__1.forEach((e)=>{
e.addEventListener('click', (e)=>{
    head_addpanel.style.top = `${-topContcts + 95}px`;
    close_dopHead.addEventListener('click', ()=>{
        head_addpanel.style.top = "-290px";
    });
});
});




/* Кнопки тел. и кнопка вверх */
let btn_up = document.querySelector('.btn_up');
let btn_phone = document.querySelector('.btn_phone');
window.addEventListener('scroll', ()=>{
if(scrollY > 1200){
    btn_up.classList.add('btn_visib');
    btn_phone.classList.add('btn_visib');
}
else{
    btn_up.classList.remove('btn_visib');
    btn_phone.classList.remove('btn_visib');
}
});
btn_up.addEventListener('click', ()=>{
window.scrollTo({ top: 0, left: 0, behavior: "smooth"});
});



/* Выпадающий список */
let listDownElements = document.querySelectorAll('.wrapp_listDown');
listDownElements.forEach((listDown) => {
  const input = listDown.querySelector('.block_input_val input');
  const list = listDown.querySelector('.list_select');
  const triggerElements = listDown.querySelectorAll('.list_select li');
  triggerElements.forEach((t) => {
    t.addEventListener('click', () => {
      input.value = t.textContent;
      list.style.height = '0px';
    });
  });
  const downButton = listDown.querySelector('.btn_down_js');
  downButton.addEventListener('click', () => {
    list.style.height = list.style.height === 'auto' ? '0px' : 'auto';
  });
});