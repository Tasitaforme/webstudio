(() => {
    const refs = {
        openMenuBtn: document.querySelector("[data-menu-open]"),
        closeMenuBtn: document.querySelector("[data-menu-close]"),
        menu: document.querySelector("[data-menu]"),
        body: document.querySelector("body"),
        menulist: document.querySelector(".mobile-menu-list"),
    };

    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
    refs.menulist.addEventListener('click', removeMenu);
    
    function toggleMenu() {
      refs.menu.classList.toggle("is-open");
      refs.body.classList.toggle("no-scroll");
    }
    function removeMenu() {
      refs.menu.classList.remove('is-open');
      refs.body.classList.remove('no-scroll');
    }
})();