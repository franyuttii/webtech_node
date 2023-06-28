const faqs = document.querySelectorAll('.faq-accordeon');

faqs.forEach(faq => {
  faq.addEventListener('click', ()=> {
    faq.classList.toggle('active');
  })
})