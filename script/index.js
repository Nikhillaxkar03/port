const navMenu = document.querySelector("header nav ul");
const navIcon = document.querySelector(".Menu");

navIcon.addEventListener("click", ()=>{
    const menuStatus = navMenu.getAttribute("slider");


    if (menuStatus === "false") {
        navMenu.setAttribute("slider", "true");
    }
    else if(menuStatus === "true") {
        navMenu.setAttribute("slider", "false");
    }
})

