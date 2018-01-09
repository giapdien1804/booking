<template>
    <div class="carousel">
        <div class="carousel-container">
            <div class="carousel-content" :style="`width: ${contentWidth}px`">
                <slot/>
            </div>
        </div>
        <div class="carousel-navigation">
            <div class="carousel-navigation-left" @clicl="leftClick">
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
            </div>
            <div class="carousel-navigation-right" @click="rightClick">
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bulma-carousel",
        data: function () {
            return {
                items: null,
                contentWidth: 0,
                itemWidth: 0
            }
        },
        watch: {
            items: function (val, old) {
                if (val.length !== old.length) {
                    this.contentWidth = this.$el.clientWidth * this.items.length;
                    this.itemWidth = this.$el.clientWidth;
                    this.items.forEach((item, index) => {
                        item.style.order = index + 1;
                        item.style.width = this.itemWidth + 'px';
                    });
                } else if (val.length > 0)
                    clearInterval(this.timer)
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.update();
            },
            update() {
                this.$nextTick(() => {
                    this.timer = setInterval(() => {
                        this.items = this.$el.querySelectorAll('.carousel-item');
                    }, 500)
                });
            },
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
            },
            leftClick() {
                this.setOrder('left')
            },
            rightClick() {
                this.setOrder('right')
            }
        }
    }
</script>

<style scoped>

</style>