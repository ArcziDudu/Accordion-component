const accordion = document.querySelector('.accordion')
const  accordionBtns = document.querySelectorAll('.accordion-btn');

function openAccordionItems(){
    if(this.nextElementSibling.classList.contains('active')){
        this.nextElementSibling.classList.remove('active')
    }
    else{closeAccordion()
    this.nextElementSibling.classList.toggle('active')}
}
const closeAccordion = () => {
    const AllActive = document.querySelectorAll('.accordion-info');
    AllActive.forEach(item => item.classList.remove('active'))
}
const closeAll = (e)=>{
if (
    e.target.classList.contains('accordion-btn') ||
    e.target.classList.contains('accordion-info') ||
    e.target.classList.contains('accordion-info-text')
  )
        return

  closeAccordion()

}
accordionBtns.forEach(btn => btn.addEventListener('click', openAccordionItems))
window.addEventListener('click', closeAll)