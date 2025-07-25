let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
    search.classList.remove('active');
};




window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
    search.classList.remove('active');

};   



let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick =() =>{
    search.classList.toggle('active')
    navlist.classList.remove('open');
    menu.classList.remove('bx-x');
}


document.getElementById("cta-btn").onclick = function(){
    alert("Please, Go Our Order Section");
}

document.getElementById("order-btn").onclick = function(){
    alert("Order is Recorded");
}