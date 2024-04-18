const navbar = document.querySelector(".navbar");
const btnnav = document.querySelector("#btn_nav")
btnnav.addEventListener("click",function(){
    navbar.classList.toggle("active");
    document.addEventListener("click",function(e){
        if (!e.composedPath().includes(btnnav)&&
            !e.composedPath().includes(navbar)
        ) {
            navbar.classList.remove("active");
        }
    });
});