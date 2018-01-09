class DropdownClick {
    constructor() {
        this.init()
    }

    init() {
        let last_drop_open = undefined;
        document.addEventListener('click', function (el) {
            let target = el.target;
            if (target.closest('.dropdown-trigger[data-toggle="dropdown"]')) {
                last_drop_open = target.closest('.dropdown');
                last_drop_open.classList.toggle('is-active');
            } else if (last_drop_open) {
                last_drop_open.classList.remove('is-active');
            }
        })
    }
}

export default DropdownClick;
