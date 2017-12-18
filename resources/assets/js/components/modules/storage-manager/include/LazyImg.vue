<template>
    <figure :class="getImageClass">
        <div v-if="imageState === 'img-loading'" class="img-lazy-loading ">
            <div class="img-lazy-load">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <a :href="imageLink">
            <img :class="imageState"
                 :width="getWidth"
                 :height="getHeight"
                 :data-state="imageState"
                 :src="computedUrl"
                 :alt="imageAlt"/>
        </a>
        <slot></slot>
    </figure>
</template>

<script>
    export default {
        name: 'lazyImg',
        props: {
            imageSource: {
                type: String,
                required: true
            },
            imageWidth: 0,
            imageHeight: 0,
            imageLink: '',
            imageAlt: '',
            imageRatio: {
                type: Array,
                default: function () {
                    return [16, 9]
                }
            },
            imageClass: {
                type: String,
                default: ''
            },
            imageErrorCallback: {
                type: Function,
                default: function () {
                }
            },
            imageSuccessCallback: {
                type: Function,
                default: function () {
                }
            }
        },
        data() {
            return {
                imageState: 'loading',
                asyncImage: new Image()
            }
        },
        computed: {
            getWidth() {
                return this.imageWidth > 0 ? this.imageWidth : false
            },
            getHeight() {
                return this.imageHeight > 0 ? this.imageHeight : false
            },
            getImageClass() {
                return 'image is-' + this.imageRatio[0] + 'by' + this.imageRatio[1] + ' ' + this.imageClass
            },
            computedUrl() {
                if (this.imageState === 'img-loading' || this.imageState === 'img-error') {
                    this.asyncImage.width = this.imageRatio[0]
                    this.asyncImage.height = this.imageRatio[1]
                }
                if (this.imageState === 'img-loaded') {
                    return this.asyncImage.src
                }

                if (this.imageState === 'img-error') {
                    return '/storage/no-image.gif'
                }

                return ''
            }
        },
        methods: {
            fetchImage(url) {
                this.asyncImage.onload = this.imageOnLoad
                this.asyncImage.onerror = this.imageOnError
                this.imageState = 'img-loading'
                this.asyncImage.src = this.imageSource
            },
            imageOnLoad() {
                this.imageState = 'img-loaded'
                this.imageSuccessCallback()
            },
            imageOnError(isError) {
                this.imageState = 'img-error'
                this.imageErrorCallback()
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.fetchImage()
            })
        }
    }
</script>
<style lang="scss">
    @-webkit-keyframes img-lazy-load {
        0% {
            -webkit-transform: rotate(0);
            transform: rotate(0);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @keyframes img-lazy-load {
        0% {
            -webkit-transform: rotate(0);
            transform: rotate(0);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    .img-lazy-loading {
        width: 200px;
        height: 200px;
        margin: auto;
        transform: scale(0.5);
        position: absolute;
        top: calc(50% - 100px);
        left: calc(50% - 100px);

        .img-lazy-load {
            position: relative;
            width: 100%;
            height: 100%;

            div {
                position: absolute;
                width: 16px;
                height: 16px;
                border-radius: 50%;
                -webkit-animation: img-lazy-load 1.5s cubic-bezier(0.5, 0, 0.5, 1) infinite;
                animation: img-lazy-load 1.5s cubic-bezier(0.5, 0, 0.5, 1) infinite;
            }
            div:nth-child(0) {
                background: green;
                top: 134.613px;
                left: 147.535px;
                -webkit-transform-origin: -47.535px -34.613px;
                transform-origin: -47.535px -34.613px;
                -webkit-animation-delay: 0s;
                animation-delay: 0s;
            }
            div:nth-child(1) {
                background: green;
                top: 147.535px;
                left: 134.613px;
                -webkit-transform-origin: -34.613px -47.535px;
                transform-origin: -34.613px -47.535px;
                -webkit-animation-delay: -0.062s;
                animation-delay: -0.062s;
            }
            div:nth-child(2) {
                background: green;
                top: 156.672px;
                left: 118.788px;
                -webkit-transform-origin: -18.788px -56.672px;
                transform-origin: -18.788px -56.672px;
                -webkit-animation-delay: -0.125s;
                animation-delay: -0.125s;
            }
            div:nth-child(3) {
                background: green;
                top: 161.401px;
                left: 101.137px;
                -webkit-transform-origin: -1.137px -61.401px;
                transform-origin: -1.137px -61.401px;
                -webkit-animation-delay: -0.187s;
                animation-delay: -0.187s;
            }
            div:nth-child(4) {
                background: green;
                top: 161.401px;
                left: 82.863px;
                -webkit-transform-origin: 17.137px -61.401px;
                transform-origin: 17.137px -61.401px;
                -webkit-animation-delay: -0.25s;
                animation-delay: -0.25s;
            }
            div:nth-child(5) {
                background: green;
                top: 156.672px;
                left: 65.212px;
                -webkit-transform-origin: 34.788px -56.672px;
                transform-origin: 34.788px -56.672px;
                -webkit-animation-delay: -0.312s;
                animation-delay: -0.312s;
            }
            div:nth-child(6) {
                background: green;
                top: 147.535px;
                left: 49.387px;
                -webkit-transform-origin: 50.613px -47.535px;
                transform-origin: 50.613px -47.535px;
                -webkit-animation-delay: -0.375s;
                animation-delay: -0.375s;
            }
            div:nth-child(7) {
                background: green;
                top: 134.613px;
                left: 36.465px;
                -webkit-transform-origin: 63.535px -34.613px;
                transform-origin: 63.535px -34.613px;
                -webkit-animation-delay: -0.437s;
                animation-delay: -0.437s;
            }
        }
    }
</style>
