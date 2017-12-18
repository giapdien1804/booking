<template>
    <a href="" class="tooltip has-text-danger" @click.prevent="clickLink"
       data-tooltip="Delete">
        <i class="fa fa-trash"></i>
    </a>
</template>
<script>
    import {setCookie} from 'tiny-cookie'

    export default {
        name: 'deleteLink',
        props: {
            dataMessage: {
                type: String,
                default: ''
            },
            dataUrl: {
                type: String,
                default: ''
            }
        },
        methods: {
            clickLink() {
                window.Message({
                    type: 'danger',
                    title: 'Confirm delete',
                    message: this.dataMessage,
                    showConfirm: true,
                    onConfirm: () => {
                        window.axios.delete(this.dataUrl)
                            .then(res => {
                                if (typeof res.data.notification !== 'undefined')
                                    setCookie('notification', res.data.notification, JSON.stringify)

                                if (typeof res.data.location !== 'undefined')
                                    window.location.href = res.data.location
                            })
                            .catch(error => {
                                if (typeof error.response.data.notification !== 'undefined')
                                    window.Notification(error.response.data.notification)
                            })
                    }
                })
            }
        }
    }
</script>