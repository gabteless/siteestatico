const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((Entry) => {
        if(Entry.isIntersecting){
            Entry.target.classList.add('show');
        }
    });

}, {
    rootMargin: '0px'
});

hiddenElements.forEach((el) =>observer.observe(el));

const trocaTema = document.getElementById('trocar-tema');
const body = document.body;

trocaTema.addEventListener('click', () => {
    body.classList.toggle('lightmode');
});
