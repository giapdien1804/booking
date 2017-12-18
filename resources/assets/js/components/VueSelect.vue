<template>
    <div :class="{dropdown:true ,'is-active':isActive}" v-click-outside="outClickDropdown">
        <template v-if="isMulti">
            <input type="hidden" :value="itemVal" :name="dataName+'[]'" v-for="(itemName, itemVal) in itemSelected">
        </template>
        <template v-else>
            <input type="hidden" :name="dataName" v-model="Object.keys(itemSelected)[0]">
        </template>
        <div class="dropdown-trigger">
            <button type="button" :class="`button is-light ${buttonClass}`" aria-haspopup="true"
                    aria-controls="dropdown-menu"
                    @click="toggleDropdown">
                <template v-if="Object.keys(itemSelected).length > 0">
                    <template v-if="isMulti">
                        <div class="tags">
                            <span class="tag" v-for="(name, val) in itemSelected" v-text="name"></span>
                        </div>
                    </template>
                    <span v-text="itemSelected[Object.keys(itemSelected)[0]]" v-else></span>
                </template>
                <span v-else>Select...</span>
                <span class="icon is-small">
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                </span>
            </button>
        </div>
        <div class="dropdown-menu select-icon" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
                <div class="dropdown-item">
                    <input v-model="searchValue" type="text" class="input is-small input-dropdown-search"
                           placeholder="Search...">
                </div>
                <hr class="dropdown-divider">
                <div class="dropdown-content-main" style="max-height: 300px;position: relative">
                    <a v-for="(itemName, itemVal) in itemData"
                       @click.prevent="selectItem(itemVal,itemName)"
                       :class="{'dropdown-item':true,'is-active':Object.keys(itemSelected)[0] === itemVal}">
                        {{itemName}}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import PerfectScrollbar from 'perfect-scrollbar';

    export default {
        name: 'vueSelect',
        props: {
            isMulti: {
                type: [Boolean, String],
                default: false
            },
            buttonClass: {
                type: String,
                default: ''
            },
            dataUrl: {
                type: String,
                require: true,
            },
            dataName: {
                type: String,
                default: 'select_name'
            },
            dataSelected: {
                type: String,
                default: ''
            },
            onSelectGoUrl: {
                type: String,
                default: ''
            },
            onSelect: {
                type: Function,
                default: () => {
                }
            }
        },
        mounted() {
            this.getDataList(null, null)

            if (this.dataSelected !== '') {
                let data = JSON.parse(this.dataSelected)
                this.itemData.push(data);
                this.itemSelected = data;
            }
        },
        watch: {
            searchValue: _.debounce(function (val) {
                this.getDataList(val, null)
            }, 500)
        },
        data: () => ({
            isActive: false,
            itemData: [],
            ps: null,
            searchValue: '',
            itemSelected: [],
        }),
        methods: {
            getDataList(name, page) {
                window.axios.get(this.dataUrl, {params: {name: name, page: page}})
                    .then(res => {
                        this.itemData = res.data
                        if (this.isActive)
                            this.$nextTick(() => {
                                this.ps.update();
                            })
                    })
            },
            toggleDropdown() {
                this.isActive = !this.isActive;
                if (this.isActive) {
                    this.$nextTick(() => {
                        let el = this.$el.querySelector('.dropdown-content-main')
                        this.ps = new PerfectScrollbar(el, {
                            minScrollbarLength: 50
                        });

                        this.$el.querySelector('.input-dropdown-search').focus()
                    })
                }
                else
                    this.ps.destroy();
            },
            selectItem(value, name) {
                if (this.onSelectGoUrl !== '') {
                    let url = this.onSelectGoUrl.replace('{id}', value)
                    url = this.onSelectGoUrl.replace('{uuid}', value)
                    window.location.replace(url)
                }
                else {
                    this.itemSelected[value] = name
                    this.isActive = false

                    this.onSelect(this.itemSelected);
                }
            },
            outClickDropdown() {
                if (this.isActive)
                    this.isActive = false;
            },
        }
    }
</script>