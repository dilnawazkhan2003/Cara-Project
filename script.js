
const bar=document.getElementById('bar');
const nav=document.getElementById('navbar');
const close=document.getElementById('close');

if(bar){
   bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(close){
   close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}


const goToTopBtn = document.getElementById('goToTopBtn');


window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    goToTopBtn.style.display = "block";
  } else {
    goToTopBtn.style.display = "none";
  }
};


goToTopBtn .onclick = function() {
    smoothScrollToTop();
  }


function smoothScrollToTop() {
  const scrollDuration = 1000; 
  const startingY = window.scrollY || document.documentElement.scrollTop;
  const startTime = performance.now();

  
  function scrollStep(timestamp) {
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / scrollDuration, 1); 

    
    const easedProgress = progress < 0.5 
      ? (2 * progress * progress)  
      : (1 - Math.pow(-2 * progress + 2, 2) / 2); 

    window.scrollTo(0, startingY * (1 - easedProgress)); 
    if (progress < 1) {
      requestAnimationFrame(scrollStep); 
    }
  }

  requestAnimationFrame(scrollStep);
}

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dot');
let currentSlide = 0;

function showSlide(index) {

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}


dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});


setInterval(nextSlide, 2000);



