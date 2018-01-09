// Inspired by http://madewithenvy.com/ecosystem/articles/2015/exploring-order-flexbox-carousel/

// Current item visible is always order 2
// Animate is order 1 -> 2
// Animaate reverse is order 2 <- 3

class Carousel {
    constructor(el) {
        this.element = el;
        this.current = 1;
        this.init()
    }

    init() {
        this.updateItem();

        this.element.querySelector('.carousel-navigation-left').addEventListener('click', (e) => {
            this.onLeftClick(e)
        }, false);
        this.element.querySelector('.carousel-navigation-right').addEventListener('click', (e) => {
            this.onRightClick(e)
        }, false);
    }

    updateItem() {
        this.carouselContent = this.element.querySelector('.carousel-content');
        this.items = this.carouselContent.querySelectorAll('.carousel-item');
        let item_width = this.element.clientWidth;
        console.log(item_width);
        this.carouselContent.style.width = item_width * this.items.length;

        this.items.forEach((item, index) => {
            item.style.order = index + 1;
        });


        // if (this.items.length === 1) this.onRightClick();
    }

    toggleReverse(check, action) {
        if (this.carouselContent.classList.contains('carousel-reverse') === check) {
            this.carouselContent.classList[action]('carousel-reverse');
        }
    };

    /**
     * toggleAnimate add or remove .carousel-animate to .carousel-content element
     */
    toggleAnimate() {
        this.carouselContent.classList.toggle('carousel-animate');
    };

    /**
     * setOrder change dynamically the order of all .carousel-item elements
     */
    setOrder(direction) {
        // initialize direction to change order
        if (direction === 'left') {
            direction = 1;
        } else if (direction === "right") {
            direction = -1;
        }

        let totalItem = this.items.length;

        this.items.forEach((item, index) => {
            let newOrder = 1;
            if (item.style.order) { // change order with direction
                let newValue = (parseInt(item.style.order, 10) + direction) % totalItem;
                newOrder = newValue ? newValue : totalItem;
            } else { // Initialize
                newOrder = index + 1;
            }
            item.style.order = newOrder;
        });

        // if (totalItem === 1) this.onRightClick();
    }

    onRightClick(evt) {
        // remove reverse
        // this.toggleReverse(true, "remove");
        // Disable transition to instant change order
        // this.toggleAnimate();
        // Change order of element
        // Current order 2 visible become order 3
        this.setOrder('right');
        // Enable transition to animate order 3 to order 2
        // setTimeout(this.toggleAnimate, 50);
    };

    onLeftClick(evt) {
        // add reverse
        // this.toggleReverse(false, "add");
        // Disable transition to instant change order
        // this.toggleAnimate();
        // Change order of element
        // Current order 2 visible become order 1
        this.setOrder('left');
        // Enable transition to animate order 1 to order 2
        // setTimeout(this.toggleAnimate, 50);
    };
}

export default Carousel;
