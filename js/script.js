let menu = document.querySelector(".menu");
let headerList = document.querySelector(".header__list");
let close = document.querySelector(".close");

menu.addEventListener( "click", function(e)  {
    console.log("Hello-world");
    console.log(e.target.className)
    if (e.target.className === "menu"){
        headerList.style.display = "block";
        menu.replaceWith(close)
   } 
});
close.addEventListener("click", function(e) {
    if (e.target.className === "close") {
        headerList.style.display = "none";
        close.replaceWith(menu)
   } 
});





