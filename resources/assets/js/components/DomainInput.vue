<template>
    <div class="field has-addons search-domain-ip">
        <div class="control">
            <input class="input" name="name" v-model="domain" type="text" placeholder="Domain">
        </div>
        <div class="control">
            <input class="input" name="ip" v-model="ip" type="text" placeholder="Ip address">
        </div>
        <div class="control">
            <button type="button" @click="searchIP" class="button is-info">
                <span class="icon"><i class="fa fa-search"></i> </span>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "domainInput",
        props: {
            domainName: '',
            domainIp: ''
        },
        mounted() {
            this.domain = this.domainName;
            this.ip = this.domainIp
        },
        data: function () {
            return {
                domain: '',
                ip: ''
            }
        },
        methods: {
            searchIP() {
                window.axios.get('/get/info/ip/' + this.domain)
                    .then(res => {
                        this.ip = res.data
                    })
                    .catch(err => {
                        window.Notification({
                            message: err.response.data.message
                        })
                    })
            }
        }
    }
</script>

<style scoped>

</style>