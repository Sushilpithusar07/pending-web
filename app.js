let body = document.querySelector("body");
let searchBtn = document.querySelector(".search");
let navLeft = document.querySelector(".nav-left");
let searchBar = document.querySelector(".search-bar");

let navRight = document.querySelector(".nav-right");
let x = document.querySelector("#x");

searchBtn.addEventListener("click", function(){
        navLeft.style.display = "none";
        searchBar.style.display = "inline";
       x.classList.add("fa-x");
    });


x.addEventListener("click", function() {
    navLeft.style.display = "flex";
    searchBar.style.display = "none";

});

let barBtn = document.querySelector(".fa-bars");
let menu = document.querySelector(".menu");
let logo = document.querySelector(".logo");

barBtn.addEventListener("click", function(){
    menu.classList.add("topToBottom");
    barBtn.classList.remove("fa-bars");
    logo.innerHTML = "Logo";
 });

 let xBtn = document.querySelector(".xBtn");
 
 xBtn.addEventListener("click", function(){
    menu.classList.remove("topToBottom");
    barBtn.classList.add("fa-bars");
    logo.innerHTML = "Home";
 });

 let cartBtn = document.querySelector(".fa-bucket");
let cart = document.querySelector(".cart");
 cartBtn.addEventListener("click", function(){
    cart.classList.add("cartSlide");
});

let cartBackBtn = document.querySelector(".cart-back-btn");
cartBackBtn.addEventListener("click", function(){
    cart.classList.remove("cartSlide");

});

let box1AddBtn = document.querySelector(".box1-add-btn");
let cartMsg = document.querySelector(".cart-msg");
let box1 = document.querySelector(".box1");

box1AddBtn.addEventListener("click", function() {
    cartMsg.remove();
    cart.append(box1);
});

let box2AddBtn = document.querySelector(".box2-add-btn");
let box2 = document.querySelector(".box2");

box2AddBtn.addEventListener("click", function() {
    cart.append(box2);
});