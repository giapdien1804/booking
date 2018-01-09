<template>
    <nav class="panel">
        <p class="panel-heading">
            Những người dùng sau được phép cập nhật nội dung cho domain này
        </p>
        <div class="panel-block">
            <div class="field is-grouped" style="width: 100%">
                <div class="control has-icons-left">
                    <input class="input is-fullwidth" type="text" placeholder="search" v-model="userSearch">
                    <span class="icon is-left">
                            <i class="fa fa-search"></i>
                        </span>
                </div>
                <div class="control is-expanded">
                    <div class="field is-grouped is-grouped-multiline">
                        <div class="control" v-for="item in getUserCheck">
                            <input :name="`${inputName}[]`" type="hidden" :value="item.uuid">
                            <div class="tags has-addons">
                                <span class="tag is-info" v-text="item.email"></span>
                                <a class="tag is-delete" @click="removeUser(item.uuid)"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="panel-block" style="max-height: 300px; overflow-y: scroll">
            <div class="columns is-multiline" style="width: 100%">
                <div class="column is-4"
                     v-for="(user,index) in userList">
                    <span class="tooltip is-tooltip-right" :data-tooltip="user.name">
                        <input :id="`${inputName}-${index}`"
                               type="checkbox"
                               :value="user.uuid"
                               v-model="userCheck"
                               class="switch is-rounded is-success">
                    <label :for="`${inputName}-${index}`">{{user.email}}</label>
                    </span>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "user-input",
        props: {
            dataSelect: {
                type: [Array, Object, String],
                required: false
            },
            inputName: {
                type: String,
                default: 'user_uuid'
            }
        },
        data: function () {
            return {
                userList: [],
                userSearch: '',
                userCheck: []
            }
        },
        watch: {
            'userSearch': _.debounce(function (val) {
                this.getList(val)
            }, 500)
        },
        mounted() {
            if (this.dataSelect)
                this.userCheck = JSON.parse(this.dataSelect);

            this.getList()
        },
        computed: {
            getUserCheck() {
                return _.filter(this.userList, (item) => {
                    return this.userCheck.indexOf(item.uuid) > -1
                })
            }
        },
        methods: {
            getList(s = '') {
                window.axios.get('/user', {params: {access_domain: true, s: s}})
                    .then(res => {
                        this.userList = res.data
                    })
            },
            removeUser(uuid) {
                this.$delete(this.userCheck, this.userCheck.indexOf(uuid))
            }
        }
    }
</script>

<style scoped>

</style>