<template>
    <div :class="['notification',type ? `is-${type}` : '']" v-if="show">
        <button type="button" class="delete" @click="closedByUser"></button>
        <h4 v-if="title" class="notification-title" v-text="title"></h4>
        <div v-html="message"></div>
    </div>
</template>

<script>
    export default {
        name: 'notification',
        props: {
            type: {
                type: String,
                default: 'info'
            },
            title: String,
            message: String,
            direction: {
                type: String,
                default: 'Right'
            },
            duration: {
                type: Number,
                default: 5000
            },
            container: {
                type: String,
                default: '.notifications'
            }
        },

        data() {
            return {
                $_parent_: null,
                show: true
            }
        },

        created() {
            let $parent = this.$parent
            if (!$parent) {
                let parent = document.querySelector(this.container)
                if (!parent) {
                    // Lazy creating `div.notifications` container.
                    const className = this.container.replace('.', '')
                    const Notifications = Vue.extend({
                        name: 'Notifications',
                        render(h) {
                            return h('div', {
                                'class': {
                                    [`${className}`]: true
                                }
                            })
                        }
                    })
                    $parent = new Notifications().$mount()
                    document.body.appendChild($parent.$el)
                } else {
                    $parent = parent.__vue__
                }
                // Hacked.
                this.$_parent_ = $parent
            }
        },
        mounted() {
            if (this.$_parent_) {
                this.$_parent_.$el.appendChild(this.$el)
                this.$parent = this.$_parent_
                delete this.$_parent_
            }
            TweenMax.fromTo(this.$el, 0.3, {right: '-100%'}, {right: 0})

            if (this.duration > 0) {
                this.timer = setTimeout(() => this.close(), this.duration)
            }
        },

        destroyed() {
            this.$el.remove()
        },

        methods: {
            closedByUser() {
                this.$emit('closed-by-user')
                clearTimeout(this.timer)
                TweenMax.to(this.$el, 0.3, {right: '-100%'}).eventCallback('onComplete', () => {
                    this.show = false
                    this.$destroy()
                })
            },

            close() {
                this.$emit('closed-automatically')
                clearTimeout(this.timer)

                TweenMax.to(this.$el, 0.3, {right: '-100%'}).eventCallback('onComplete', () => {
                    this.show = false
                    this.$destroy()
                })
            },
        }
    }
</script>

<style lang="scss">
    .notifications {
        position: fixed;
        overflow: hidden;
        top: 55px;
        right: 0;
        .alert {
            margin-bottom: 10px;
        }
        z-index: 99999;
    }

    .notification {
        position: relative;
        min-width: 300px;
        backface-visibility: hidden;
        transform: translate3d(0, 0, 0);
    }
</style>
