<template>
    <div :class="{dropdown:true ,'is-active':isActive}" v-click-outside="outClickDropdown">
        <input type="hidden" :name="dataName" v-model="itemSelected.uuid">
        <div class="dropdown-trigger">
            <button type="button" class="button is-info border-radius-0" aria-haspopup="true"
                    aria-controls="dropdown-menu"
                    @click="toggleDropdown">
                <span v-if="itemSelected.uuid !==''">
                    {{itemSelected.name}}
                </span>
                <span v-else>Select domain</span>
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
                <div class="dropdown-content-main" style="max-height: 300px;position: relative">
                    <a v-for="item in itemData"
                       @click.prevent="selectItem(item)"
                       :class="{'dropdown-item':true,'is-active':itemSelected.uuid === item.uuid}">
                        {{item.name}}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import PerfectScrollbar from 'perfect-scrollbar';

    export default {
        name: 'domainDropdown',
        props: {
            dataName: {
                type: String,
                default: 'domain_uuid'
            },
            dataSelected: {
                type: String,
                required: false
            },
            gotoUrl: {
                type: String,
                default: ''
            }
        },
        mounted() {
            this.getDomainList(null, null);

            if (this.dataSelected) {
                let data = JSON.parse(this.dataSelected);
                this.itemData.push(data);
                this.itemSelected = data;
            }
        },
        watch: {
            searchValue: _.debounce(function (val) {
                this.getDomainList(val, null)
            }, 500)
        },
        data: () => ({
            isActive: false,
            itemData: [],
            ps: null,
            searchValue: '',
            itemSelected: {
                uuid: '',
                name: ''
            },
        }),
        methods: {
            getDomainList(name, page) {
                window.axios.get('/domain/list', {params: {name: name, page: page}})
                    .then(res => {
                        this.itemData = res.data.data;
                        if (this.isActive)
                            this.$nextTick(() => {
                                this.ps.update();
                            })
                    })
            },
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
                if (this.gotoUrl !== '') {
                    let url = this.gotoUrl.replace('{id}', value.uuid);
                    window.location.replace(url)
                }
                else {
                    this.itemSelected = value;
                    this.isActive = false
                }
            },
            outClickDropdown() {
                if (this.isActive)
                    this.isActive = false;
            },
        }
    }
</script>