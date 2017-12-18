<template>
    <div :class="`card ${color!==''?' is-' + color:''}`" :id="geIdName">
        <header :class="`card-header ${headerColor!==''?' is-' + headerColor:''}`" v-if="showHeader">
            <p class="card-header-title" v-text="cardTitle"></p>
            <a href="#" class="card-header-icon" aria-label="more options" v-if="showIcon" @click.prevent="clickIcon">
                <span class="icon">
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                </span>
            </a>
        </header>
        <div :class="{'card-content':showContent,'show-content':true,'hide-content':!isOpen}">
            <p class="card-header-title" v-text="cardTitle" v-if="!showHeader && cardTitle !==''"></p>
            <slot></slot>
        </div>
        <footer class="card-footer" v-if="showFooter">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>
<script>
    import GDS from "../plugins/gds/gds";

    export default {
        name: 'bulmaCard',
        props: {
            idName: {
                type: String,
                default: () => ''
            },
            color: {
                type: String,
                default: () => ''
            },
            headerColor: {
                type: String,
                default: () => ''
            },
            showFooter: {
                type: [Boolean, String],
                default: () => false
            },
            showContent: {
                type: [Boolean, String],
                default: () => true
            },
            showHeader: {
                type: [Boolean, String],
                default: () => true
            },
            cardTitle: {
                type: String,
                default: () => ''
            },
            showIcon: {
                type: [Boolean, String],
                default: () => true
            },
        },
        data: () => ({
            isOpen: true
        }),
        computed: {
            geIdName() {
                if (this.idName === '')
                    return GDS.uuidv4()

                return this.idName
            }
        },
        methods: {
            clickIcon() {
                this.isOpen = !this.isOpen
                let elem_icon = this.$el.querySelector('.card-header-icon')
                let elem_content = this.$el.querySelector('.show-content')
                if (this.isOpen) {
                    TweenMax.to(elem_icon, 0.3, {rotation: 0})
                    TweenMax.set(elem_content, {height: 'auto', padding: '1.5rem'})
                    TweenMax.from(elem_content, 0.3, {height: 0, padding: 0})
                } else {
                    TweenMax.to(elem_icon, 0.3, {rotation: 90})
                    TweenMax.to(elem_content, 0.3, {height: 0, padding: 0})
                }

            }
        }
    }
</script>