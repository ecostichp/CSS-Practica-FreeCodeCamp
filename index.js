// Código para abrir y cerrar el menú hamburguesa, para los celulares

const nav = document.getElementById("primary-navigation")
const navToggle = document.getElementById("mobile-nav-toggle")

navToggle.addEventListener("click", () => {
    
    const visiblity = nav.getAttribute("mostrar-menu-mobile");
    if (visiblity === "false") {
        nav.setAttribute("mostrar-menu-mobile", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("mostrar-menu-mobile", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})