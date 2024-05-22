let arrowScroll = document.getElementById('scroll');
window.onscroll = function(){
    if(scrollY >= 400){
        arrowScroll.style.display = 'block';
    }else{
        arrowScroll.style.display = 'none';
    }
}

arrowScroll.onclick = function(){
    scroll({
        top:0,
        left:0,
        behavior: "smooth"
    })
}


const toggleMenuBtn = document.getElementById('toggle-menue');
const navigation = document.querySelector('nav');

toggleMenuBtn.addEventListener('click', function() {
  navigation.classList.toggle('show');
  book();
});

