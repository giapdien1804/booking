<template>
    <div class="has-relative">
        <div class="slider-content">
            <slot/>
        </div>
        <div class="controlsContainer" v-if="slider !== null">
            <div @click="leftClick">
                <span class="icon"><i class="fa fa-chevron-left"></i> </span>
            </div>
            <div @click="rightClick">
                <span class="icon"><i class="fa fa-chevron-right"></i> </span>
            </div>
        </div>
    </div>
</template>

<script>
    import {tns} from 'tiny-slider/src/tiny-slider.module';

    export default {
        name: "tiny-slider",
        props: {
            mode: {
                type: String,
                default: 'carousel'
            },
            axis: {
                type: [String],
                validator: value => {
                    return value === 'horizontal' || value === 'vertical';
                }
            },
            items: {
                type: [String, Number],
                default: 1
            },
            gutter: {
                type: [String, Number],
                default: 0
            },
            edgePadding: {
                type: [String, Number],
                default: 0
            },
            fixedWidth: {
                type: [String, Boolean, Number],
                default: false
            },
            slideBy: {
                type: [String, Number],
                default: 1
            },
            controls: {
                type: [String, Boolean],
                default: true
            },
            nav: {
                type: [Boolean],
                default: true
            },
            navContainer: {
                type: [Boolean, Node],
                default: false
            },
            arrowKeys: {
                type: [Boolean],
                default: false
            },
            speed: {
                type: [String, Number],
                default: 300
            },
            autoplay: {
                type: [Boolean],
                default: false
            },
            autoplayTimeout: {
                type: [Number],
                default: 5000
            },
            autoplayDirection: {
                type: [String],
                default: 'forward',
                validator: value => {
                    return value === 'forward' || value === 'backward';
                }
            },
            autoplayText: {
                type: [Array],
                default: () => ['start', 'stop']
            },
            autoplayHoverPause: {
                type: [Boolean],
                default: false
            },
            autoplayButton: {
                type: [Boolean, Node, String],
                default: false,
            },
            autoplayButtonOutput: {
                type: [Boolean],
                default: true
            },
            autoplayResetOnVisibility: {
                type: [Boolean],
                default: true,
            },
            animateIn: {
                type: [String],
                default: 'tns-fadeIn'
            },
            animateOut: {
                type: [String],
                default: 'tns-fadeOut'
            },
            animateNormal: {
                type: [String],
                default: 'tns-normal'
            },
            animateDelay: {
                type: [String, Number, Boolean],
                default: false
            },
            loop: {
                type: [Boolean],
                default: true
            },
            rewind: {
                type: [Boolean],
                default: false
            },
            autoHeight: {
                type: [Boolean],
                default: false
            },
            responsive: {
                type: [Boolean, Object],
                default: true
            },
            lazyload: {
                type: [Boolean],
                default: false
            },
            touch: {
                type: [Boolean],
                default: true
            },
            mouseDrag: {
                type: [Boolean],
                default: false
            },
            nested: {
                type: [String, Boolean],
                default: false,
                validator: value => {
                    return value === 'inner' || value === 'outer' || value === false;
                }
            },
            freezable: {
                type: [Boolean],
                default: true
            },
            disable: {
                type: [Boolean],
                default: false
            },
            onInit: {
                type: [Function, Boolean],
                default: false
            }
        },
        data: function () {
            return {
                settings: [],
                slider: null
            }
        },
        mounted: function () {
            this.init();
            this.$nextTick(() => {
                this.reload();
            });
        },
        beforeDestroy: function () {
            this.destroy();
        },
        methods: {
            init() {
                this.settings = {
                    container: this.$el.querySelector('.slider-content'),
                    items: this.items,
                    mode: this.mode,
                    gutter: this.gutter,
                    edgePadding: this.edgePadding,
                    fixedWidth: !this.fixedWidth ? this.fixedWidth : parseInt(this.fixedWidth, 10),
                    slideBy: this.slideBy,
                    controls: false,
                    controlsContainer: false,
                    nav: this.nav,
                    navContainer: this.navContainer,
                    arrowKeys: this.arrowKeys,
                    speed: this.speed,
                    autoplay: this.autoplay,
                    autoplayTimeout: this.autoplayTimeout,
                    autoplayDirection: this.autoplayDirection,
                    autoplayText: this.autoplayText,
                    autoplayHoverPause: this.autoplayHoverPause,
                    autoplayButton: this.autoplayButton,
                    autoplayButtonOutput: this.autoplayButtonOutput,
                    autoplayResetOnVisibility: this.autoplayResetOnVisibility,
                    animateIn: this.animateIn,
                    animateOut: this.animateOut,
                    animateNormal: this.animateNormal,
                    animateDelay: this.animateDelay,
                    loop: this.loop,
                    rewind: this.rewind,
                    autoHeight: this.autoHeight,
                    responsive: this.responsive,
                    lazyload: this.lazyload,
                    touch: this.touch,
                    mouseDrag: this.mouseDrag,
                    nested: this.nested,
                    freezable: this.freezable,
                    disable: this.disable,
                    onInit: this.onInit
                };
            },
            goTo: function (value) {
                this.slider.goTo(value)
            },
            getInfo: function () {
                this.$emit('getInfo', this.slider.getInfo(), this.slider);
            },
            destroy: function () {
                if (this.slider !== null)
                    this.slider.destroy();

                this.slider = null;
            },
            reload() {
                this.destroy();
                this.$nextTick(() => {
                    if (this.$el.querySelector('.slider-content').childElementCount > 1) {
                        this.slider = tns(this.settings);
                    }
                });
            },
            leftClick() {
                this.goTo('prev')
            },
            rightClick() {
                this.goTo('next')
            }
        }
    }
</script>

<style lang="scss">
    .controlsContainer {
        > div {
            position: absolute;
            top: 50%;
            background-color: rgba(10, 10, 10, 0.2);
            cursor: pointer;
            padding: .7em;
            border-radius: 290486px;

            &:hover {
                background-color: rgba(10, 10, 10, 0.3);
            }

            .icon {
                color: whitesmoke;
            }
        }
        div:nth-child(1) {
            float: left;
            left: 2px;
        }
        div:nth-child(2) {
            float: right;
            right: 2px;
        }
    }

    .tns-outer {
        padding: 0 !important; // remove padding: clientWidth = width + padding (0) = width
        [hidden] {
            display: none !important;
        }
        [aria-controls], [data-action] {
            cursor: pointer;
        }
        &.ms-touch {
            overflow-x: scroll;
            overflow-y: hidden;
            -ms-overflow-style: none; // Hides the scrollbar.
            -ms-scroll-chaining: none; // Prevents Metro from swiping to the next tab or app.
            -ms-scroll-snap-type: mandatory; // Forces a snap scroll behavior on your images.
            -ms-scroll-snap-points-x: snapInterval(0%, 100%); // Defines the y and x intervals to snap to when scrolling.
        }

        .tns-nav {
            position: absolute;
            bottom: -20px;
            left: 50%;
            transform: translateX(-50%);

            > button {
                display: inline-block;
                padding: 5px;
                border-radius: 290486px;
                background-color: rgba(47, 49, 51, 0.5);
                border: none;

                &:not(:last-child) {
                    margin-right: 3px;
                }

                &.tns-nav-active {
                    background-color: rgba(47, 49, 51, 0.9);
                }
            }
        }
    }

    .tns-slider {
        -webkit-transition: all 0s;
        -moz-transition: all 0s;
        transition: all 0s;
        > .tns-item {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
        }
    }

    .tns-horizontal.tns-subpixel {
        white-space: nowrap;
        > .tns-item {
            display: inline-block;
            vertical-align: top;
            white-space: normal;
        }
    }

    .tns-horizontal.tns-no-subpixel {
        &:after {
            content: '';
            display: table;
            clear: both;
        }
        > .tns-item {
            float: left;
            margin-right: -100%;
        }
    }

    .tns-no-calc {
        position: relative;
        left: 0;
    }

    .tns-gallery {
        position: relative;
        left: 0;
        // overflow: hidden;
        > .tns-item {
            position: absolute;
            left: -100%;
            -webkit-transition: opacity 0s;
            -moz-transition: opacity 0s;
            -webkit-transition: transform 0s, opacity 0s;
            -moz-transition: transform 0s, opacity 0s;
            transition: transform 0s, opacity 0s;
        }
    }

    .tns-lazy-img {
        -webkit-transition: opacity 0.6s;
        -moz-transition: opacity 0.6s;
        transition: opacity 0.6s;
        opacity: 0.6;
        &.loaded {
            opacity: 1;
        }
    }

    .tns-ah {
        -webkit-transition: height 0s;
        -moz-transition: height 0s;
        transition: height 0s;
    }

    .tns-ovh {
        overflow: hidden;
    }

    .tns-hdx {
        overflow-x: hidden;
    }

    .tns-hdy {
        overflow-y: hidden;
    }

    .tns-visually-hidden {
        position: absolute;
        left: -10000em;
    }

    .tns-transparent {
        opacity: 0;
        visibility: hidden;
    }

    .tns-fadeIn {
        opacity: 1;
        filter: alpha(opacity=100);
        z-index: 0;
    }

    .tns-normal, .tns-fadeOut {
        opacity: 0;
        filter: alpha(opacity=0);
        z-index: -1;
    }
</style>