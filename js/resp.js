burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar');
rightNav=document.querySelector('.rightNav');
navlist=document.querySelector('.nav-list');
log=document.querySelector('.login');

log.addEventListener('click',()=>{
    document.getElementById("login").onclick=function(){
        window.location.href="/login.html";
    }
})

burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('v-class');
})