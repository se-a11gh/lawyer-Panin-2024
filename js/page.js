/* Фильтр категорий вопросов */
let block_filter = document.querySelector('.block_filter');
if(block_filter){
    let btn_onFilter_span = document.querySelectorAll('.btn_onFilter span');
    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 800){
            block_filter.style.opacity = "1";
        }else{
            block_filter.style.opacity = "0";
        }
    });
    btn_onFilter_span.forEach((e)=>{
        e.addEventListener('click', (el)=>{
            let span1 = el.target.parentElement.firstElementChild;
            let span2 = el.target.parentElement.lastElementChild;
            span1.classList.toggle('fltr_op');
            span2.classList.toggle('fltr_op');
            el.target.parentElement.classList.toggle('btn_onFilter_new');
            if(!span1.matches('.fltr_op')){
                block_filter.style.opacity = "1";
            }else{
                block_filter.style.opacity = "0";
            }
        });
    })
}