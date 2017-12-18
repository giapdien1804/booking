<template>
    <div :class="{dropdown:true ,'is-active':isActive}">
        <div class="dropdown-trigger">
            <button type="button"
                    class="button"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu"
                    @click="toggleDropdown"
            >
                <span>Dropdown button</span>
                <span class="icon is-small">
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                </span>
            </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
                <span v-for="(value,title) in itemData" class="dropdown-item">
                    {{title}}
                </span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'dropdownInput',
        props: {
            dataList: {
                type: [Array, Object, String],
                default: ''
            }
        },
        mounted() {
            let tmp = [];
            if (_.isObject(this.dataList) || _.isArray(this.dataList))
                tmp = this.dataList;
            else if (this.dataList.length > 0)
                tmp = JSON.parse(this.dataList)

            this.itemData = tmp
        },
        data: () => ({
            isActive: false,
            itemData: []
        }),
        methods: {
            toggleDropdown() {
                this.isActive = !this.isActive;
            }
        }
    }
</script>