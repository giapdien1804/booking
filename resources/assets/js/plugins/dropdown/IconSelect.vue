<template>
    <div :class="{dropdown:true ,'is-active':isActive}" v-click-outside="outClickDropdown">
        <input type="hidden" :name="dataName" v-model="selectValue">
        <div class="dropdown-trigger">
            <div :class="{'field has-addons':showRemove}">
                <div :class="{control:showRemove}">
                    <button type="button" class="button" :disabled="disable"
                            aria-haspopup="true"
                            aria-controls="dropdown-menu"
                            @click="toggleDropdown">
                        <span v-if="selectValue !==''">
                            <span class="icon"><i :class="`fa ${selectValue}`"></i> </span>
                            <span v-text="getSelectTitle" v-if="showTitle"></span>
                        </span>
                        <span v-else>Select icon</span>
                        <span class="icon is-small" v-if="showDrop">
                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
                <div class="control" v-if="showRemove">
                    <button class="button" type="button" @click="removeSelect">
                        <span class="icon"><i class="fa fa-remove"></i> </span>
                    </button>
                </div>
            </div>

        </div>
        <div class="dropdown-menu select-icon" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
                <div class="dropdown-item">
                    <input id="txt-search" v-model="searchValue" type="text" class="input is-small"
                           placeholder="Search...">
                </div>
                <hr class="dropdown-divider">
                <div class="dropdown-content-main dropdown-item"
                     style="max-height: 300px; width: 600px; position: relative">
                    <div class="columns is-multiline">
                        <div class="column" v-for="item in getIconData">
                            <a @click.prevent="selectItem(item.value)"
                               :class="{'has-text-info':selectValue === item.value,'has-text-black':true}">
                                <span class="icon is-medium"><i :class="`fa ${item.value} fa-2x`"></i> </span>
                                <span v-if="showTitle" v-text="item.title"></span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import PerfectScrollbar from 'perfect-scrollbar';

    export default {
        name: 'iconSelect',
        model: {
            prop: 'iconSelect',
            event: 'select-value',
        },
        props: {
            showTitle: {
                type: [Boolean, String],
                default: false
            },
            showDrop: {
                type: [Boolean, String],
                default: false
            },
            showRemove: {
                type: [Boolean, String],
                default: false
            },
            dataName: {
                type: String,
                default: 'icon'
            },
            iconSelect: {
                type: String,
                default: 'fa-star'
            },
            disable: {
                type: [String, Boolean],
                default: false
            }
        },
        data: () => ({
            isActive: false,
            iconData: [],
            ps: null,
            searchValue: '',
            selectValue: ''
        }),
        mounted() {
            fetch('https://opensource.keycdn.com/fontawesome/4.7.0/font-awesome.min.css', {mode: 'cors'})
                .then(res => {
                    return res.text();
                })
                .then(css => {
                    this.parseCSS(css);
                });

            this.$nextTick(() => {
                this.selectValue = this.iconSelect;
            })
        },
        watch: {
            'iconSelect': function (val) {
                this.selectValue = val
            }
        },
        computed: {
            getIconData() {
                let data = _.pickBy(this.iconData, (a) => {
                    return a.title.toLowerCase().match(this.searchValue.toLowerCase().trim())
                });

                if (this.isActive)
                    this.$nextTick(() => {
                        this.ps.update();
                    });

                return data;
            },
            getSelectTitle() {
                let select = this.iconData[_.findIndex(this.iconData, {value: this.selectValue})];

                return typeof select !== 'undefined' ? select.title : '';
            }
        },
        methods: {
            toggleDropdown() {
                if (!this.disable) {
                    this.isActive = !this.isActive;
                    this.$nextTick(() => {
                        if (this.isActive) {
                            let el = this.$el.querySelector('.dropdown-content-main');
                            el.scrollTop = 0;
                            this.ps = new PerfectScrollbar(el, {
                                minScrollbarLength: 50
                            });
                            this.$el.querySelector('#txt-search').focus();
                        }
                        else
                            this.ps.destroy();
                    })
                }
            },
            selectItem(value) {
                this.selectValue = value;
                this.isActive = false;
                this.$emit('select-value', value);
            },
            removeSelect() {
                this.selectValue = '';
                this.$emit('select-value', '')
            },
            outClickDropdown() {
                if (this.isActive)
                    this.isActive = false;
            },
            parseCSS(css, prefix = 'fa-') {
                const iconPattern = new RegExp('\\.' + prefix + '([^\\.!:]*)::?before\\s*{\\s*content:\\s*["|\']\\\\[^\'|"]*["|\'];?\\s*}', 'g');
                const index = 1;
                let icon, match;
                while (match = iconPattern.exec(css)) {
                    icon = {
                        value: prefix + match[index].trim(':'),
                        title: match[index].trim(':').replace('-', ' '),
                    };
                    this.iconData.push(icon)
                }
            }
        }
    }
</script>