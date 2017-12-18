<!--suppress JSUnusedGlobalSymbols -->
<template>
    <li>
        <a @click="toggle(itemName.path)">
            <span class="tree-line"></span><span class="icon is-small">
                <i :class="{'fa fa-folder':!isToggle,
                'fa fa-folder-open':isToggle,
                'fa fa-spinner fa-pulse fa-fw':isLoading}"></i>
            </span>
            {{itemName.name}}
        </a>
        <ul v-show="isToggle" v-if="isFolder">
            <fmg-sidebar-item v-for="(item, index) in itemName.sub" v-on:setCurrentPath="setCurrentPath"
                  :key="index"
                  :itemName="item"
            ></fmg-sidebar-item>
        </ul>
    </li>
</template>
<script>
    export default {
        name: 'fmgSidebarItem',
        props: {
            itemName: {
                type: Object,
                require: false,
                default: () => {
                    return {
                        name: 'Home',
                        path: ''
                    }
                }
            }
        },
        data: function () {
            return {
                open: false,
                isLoading: false
            }
        },
        mounted() {
            //load data
            if (this.itemName.path === '') {
                this.isLoading = true;
                axios.post('/storage/fmg/directories').then((res) => {
                    this.isLoading = false;
                    this.$set(this.itemName, res.data.root);
                    this.$set(this.itemName, 'sub', res.data.sub)
                }).catch((err) => {
                    this.isLoading = false;
                    window.Message({
                        title: 'Error',
                        type: 'warning',
                        message: err.response.data.message
                    })
                });
            }
        },
        computed: {
            isFolder: function () {
                return this.itemName.sub &&
                    this.itemName.sub.length;
            },
            isToggle() {
                return this.open || (this.itemName.path === '');
            }
        },
        methods: {
            setCurrentPath(path) {
                this.$emit('setCurrentPath', path);
            },
            toggle: function (path) {
                this.open = !this.open;
                if (this.open)
                    this.$emit('setCurrentPath', path);
                if (this.open && path !== '') {
                    this.isLoading = true;
                    //load data
                    axios.post('/storage/fmg/directories', {parent: path}).then((res) => {
                        this.isLoading = false;
                        this.$set(this.itemName, 'sub', res.data);
                    }).catch((err) => {
                        this.isLoading = false;
                        window.Message({
                            title: 'Error',
                            type: 'warning',
                            message: err.response.data.message
                        })
                    });
                }
            }
        }
    }
</script>