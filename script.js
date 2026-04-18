const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const dropdownContent = document.querySelector('.dropdown-content');
const laysubmenu=document.querySelector(".laysubmenu")

function show(button) {
    button.children[1].classList.toggle('rotate')
    let btnsibling=button.nextElementSibling
    btnsibling.classList.toggle('show')
    cekDrop(button)
}

function cekDrop(btncek){
    let alldrop=document.querySelectorAll('.dropdown-content.show')
    alldrop.forEach(a=>{
        if(a!=btncek.nextElementSibling){
            a.classList.remove('show')
            a.parentElement.children[0].children[1].classList.remove('rotate')
        }
    })
}

hamburger.addEventListener("click",e=>{
    hamburger.classList.toggle("active")
    laysubmenu.classList.toggle("active")
})