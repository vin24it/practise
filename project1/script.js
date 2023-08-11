let bar=document.getElementById('bar');
let nav=document.getElementById('navbar');
let close=document.getElementById('close')

if(bar){
    bar.addEventListener('onclick',()=>{
        // nav.classList.add('active')
        alert('hello')
    })
}

if(close){
    bar.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}