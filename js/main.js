const myNav = document.getElementById('header')
const mybutton = document.getElementById('btn-back-to-top')
window.onscroll = function() {
  if(window.scrollY > 150){
    myNav.classList.add('scrolled')
    mybutton.style.display = "block";
  }else{
    myNav.classList.remove('scrolled')
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}