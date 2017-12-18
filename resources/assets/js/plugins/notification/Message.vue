<template>
    <div class="columns is-centered">
        <div class="column is-half is-narrow">
            <article :class="`message is-${type}`">
                <div class="message-header">
                    <p><strong>{{type | capitalize}}</strong>! {{title}}</p>
                    <button class="delete" aria-label="delete" @click.prevent="closedByUser"></button>
                </div>
                <div class="message-body">
                    <div v-html="message"></div>
                    <div class="field mt-3">
                        <button :class="`button is-success ${loading}`"
                                v-if="showConfirm"
                                @click.prevent="okClick">Confirm
                        </button>
                        <button class="button is-light" @click.prevent="closedByUser">Cancel</button>
                    </div>
                </div>

            </article>
        </div>
    </div>

</template>
<script>
    export default {
        props: {
            type: {
                type: String,
                default: 'info'
            },
            message: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: ''
            },
            showConfirm: false,
            onConfirm: {
                type: Function,
                default: function () {
                    return false;
                }
            }
        },
        data() {
            return {
                $_parent_: null,
                loading: ''
            }
        },
        created() {
            let $parent = this.$parent
            if (!$parent) {
                let parent = document.querySelector('.message-group')
                if (!parent) {
                    const className = 'message-group'
                    const Notifications = Vue.extend({
                        name: 'Message',
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

            window.TweenMax.fromTo(this.$el.querySelector('.message'), 0.3,
                {scale: 0},
                {
                    scale: 1.2, onComplete: () => {
                    window.TweenMax.to(this.$el.querySelector('.message'), 0.2, {scale: 1})
                }
                }
            );

        },
        destroyed() {
            this.$el.remove()
            document.querySelector('.message-group').remove()
        },
        methods: {
            closedByUser() {
                this.$emit('closed-by-user')
                this.$destroy()
            },
            close() {
                this.$emit('closed-automatically')
                this.$destroy()
            },
            okClick() {
                this.loading = 'is-loading'
                this.onConfirm(this)
            }
        }
    }
</script>
<style>
    .message-group {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.41);
        z-index: 21;
    }

    .message-group .message {
        margin-top: 1%;
    }
</style>