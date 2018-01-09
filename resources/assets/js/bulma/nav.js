class Nav {
    constructor(element) {
        this.element = element;
        this.init()
    }

    init() {
        this.element.addEventListener('click', function () {

            // Get the target from the "data-target" attribute
            let target = $el.dataset.target;
            let $target = document.querySelector(target);

            // Toggle the class on both the "navbar-burger" and the "navbar-menu"
            $el.classList.toggle('is-active');
            $target.classList.toggle('is-active')

        })
    }
}

export default Nav;
