let category = document.getElementById('category');
let allCategories = document.getElementById('all-categories');
let museums = document.getElementById('museums');
let historical = document.getElementById('historical');
let archaeological= document.getElementById('archaeological');
let search = document.getElementById('search');
let museumsClass = document.querySelector('.museums');
let historicalClass = document.querySelector('.historical-landmarks');
let archaeologicalClass= document.querySelector('.archaeological-sites');






search.addEventListener('click', function(e){
       e.preventDefault();
    
        if(category.value == museums.value){
            museumsClass.style = `width : 100%; display: flex; justify-content: space-around;`
            historicalClass.style.display = 'none';
            archaeologicalClass.style.display = 'none';
            
        }
        else if(category.value == historical.value){
            historicalClass.style = `width : 100%; display: flex; justify-content: space-around;`
            museumsClass.style.display = 'none';
            archaeologicalClass.style.display = 'none';
        }
        else if(category.value == archaeological.value){
            archaeologicalClass.style = `width : 100%; display: flex; justify-content: space-around;`
            museumsClass.style.display = 'none';
            historicalClass.style.display = 'none';
        }
        else if(category.value == allCategories.value){
            museumsClass.style.display = 'block';
            historicalClass.style.display = 'block';
            archaeologicalClass.style.display= 'block';
        }
    })

let filter=document.querySelector('.filter');
function book(){
    filter.classList.toggle('b-text');
    }
    
