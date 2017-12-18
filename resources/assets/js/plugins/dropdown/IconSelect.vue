<template>
    <div :class="{dropdown:true ,'is-active':isActive}" v-click-outside="outClickDropdown">
        <input type="hidden" :name="dataName" v-model="itemSelected.value">
        <div class="dropdown-trigger">
            <button type="button" class="button" aria-haspopup="true"
                    aria-controls="dropdown-menu"
                    @click="toggleDropdown">
                <span v-if="itemSelected.value !==''">
                    <span class="icon"><i :class="`fa ${itemSelected.value}`"></i> </span>
                    &nbsp;{{itemSelected.title}}
                </span>
                <span v-else>Select icon</span>
                <span class="icon is-small">
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                </span>
            </button>
        </div>
        <div class="dropdown-menu select-icon" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
                <div class="dropdown-item">
                    <input v-model="searchValue" type="text" class="input is-small" placeholder="Search...">
                </div>
                <hr class="dropdown-divider">
                <div class="dropdown-content-main" style="max-height: 300px; position: relative">
                    <a v-for="(title,value) in getItemData"
                       @click.prevent="selectItem({'value':value,'title':title})"
                       :class="{'dropdown-item':true,'is-active':itemSelected.value === value}">
                        <span class="icon"><i :class="`fa ${value}`"></i> </span> {{title}}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import PerfectScrollbar from 'perfect-scrollbar';

    export default {
        name: 'iconSelect',
        props: {
            dataList: {
                type: [Array, Object, String],
                default: ''
            },
            dataName: {
                type: String,
                default: 'icon'
            },
            dataSelected: {
                type: String,
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

            if (this.dataSelected !== '') {
                let selected = _.pickBy(this.itemData, (a, o) => {
                    return o === this.dataSelected
                })

                this.itemSelected.value = Object.keys(selected)
                this.itemSelected.title = selected[Object.keys(selected)]
            }
        },
        data: () => ({
            isActive: false,
            itemData: [],
            ps: null,
            searchValue: '',
            itemSelected: {
                value: '',
                title: ''
            }
        }),
        computed: {
            getItemData() {
                let data = _.pickBy(this.itemData, (a, o) => {
                    return a.toLowerCase().match(this.searchValue.toLowerCase())
                })
                if (this.isActive)
                    this.$nextTick(() => {
                        this.ps.update();
                    })

                return data;
            }
        },
        methods: {
            toggleDropdown() {
                this.isActive = !this.isActive;
                if (this.isActive) {
                    let el = this.$el.querySelector('.dropdown-content-main');
                    el.scrollTop = 0;
                    this.ps = new PerfectScrollbar(el, {
                        minScrollbarLength: 50
                    });
                }
                else
                    this.ps.destroy();
            },
            selectItem(value) {
                this.itemSelected = value
                this.isActive = false
            },
            outClickDropdown() {
                if (this.isActive)
                    this.isActive = false;
            }
        }
    }
</script>