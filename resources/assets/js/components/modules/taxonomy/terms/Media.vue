<template>
    <div>
        <a class="tag is-link" @click.prevent="openModal()">{{taxTitle}}</a>
        <div :class="{'modal':true, 'is-active':isOpen}">
            <div class="modal-background"></div>
            <div class="modal-card column is-10-desktop is-12-tablet">
                <header class="modal-card-head">
                    <p class="modal-card-title" v-text="typeTitle + '-' + taxTitle"></p>
                    <button class="delete" aria-label="close" @click.prevent="closeModal"></button>
                </header>
                <section class="modal-card-body">
                    <div class="columns">
                        <div class="column is-3">
                            <div class="field">
                                <label>Title</label>
                                <input type="text" class="input" v-model="termForm.title">
                            </div>
                            <div class="field">
                                <label>Name</label>
                                <div class="field has-addons">
                                    <div class="control is-expanded bg-light">
                                        <input v-model="termForm.name"
                                               :class="{'input is-fullwidth':true, 'is-static':!editSlug}"
                                               :readonly="!editSlug?true:null">
                                    </div>
                                    <div class="control">
                                        <button class="button" @click.prevent="editSlug = !editSlug">
                                            <span class="icon"><i class="fa fa-edit"></i></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <label>Description</label>
                                <quill-editor ref="myTextEditor"
                                              v-model="termForm.description"
                                              :options="editorOption">
                                </quill-editor>
                            </div>
                            <div class="field">
                                <label>Parent</label>
                                <div class="select">
                                    <select v-model="termForm.parent">
                                        <option></option>
                                        <option v-for="term in listTerm"
                                                :value="term.id"
                                                v-html="writeDepth(term.depth,'&#8212;') + term.title"></option>
                                    </select>
                                </div>
                            </div>
                            <div class="field">
                                <label>Images</label>
                                <input type="hidden" v-model="termForm.image">
                                <div class="columns">
                                    <div class="column is-2">
                                        <div class="bg-light has-hover-light"
                                             style="width: 128px; height: 128px">
                                            <a class="is-flex justify-content-center align-items-center"
                                               @click="selectImage()"
                                               style="height: 100%">
                                                <i class="fa fa-plus"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <button class="button is-primary"
                                        v-if="getActionText !=='' && termForm.title !==''"
                                        v-text="getActionText"
                                        @click.prevent="saveTerm"
                                ></button>
                                <button class="button" @click.prevent="refreshForm"
                                >Refresh
                                </button>
                            </div>
                        </div>
                        <div class="column">
                            <table class="table is-bordered is-fullwidth is-narrow mb-0">
                                <thead>
                                <tr>
                                    <th class="is-half-1">
                                        <input type="checkbox" value="true" v-model="checkAllStatus"/></th>
                                    <th class="is-5">Title</th>
                                    <th class="is-4">Description</th>
                                    <th class="is-1">Post</th>
                                    <th class="is-half-1">
                                        <a href="" @click.prevent="getTerms">
                                            <span class="icon">
                                            <i class="fa fa-refresh"></i>
                                        </span>
                                        </a>
                                    </th>
                                </tr>
                                </thead>
                            </table>
                            <div style="position: relative; overflow: hidden">
                                <div style="height: 0;" id="table-term">
                                    <table class="table is-bordered is-hoverable is-fullwidth is-narrow is-selected">
                                        <tbody class="table-content">
                                        <tr v-for="(term, index) in listTerm" :data-id="term.id">
                                            <td class="is-half-1 has-relative">
                                                <span class="is-block has-absolute mt-4">{{index + 1}}</span>
                                                <label class="is-block" v-if="isSelected">
                                                    <input type="checkbox" v-model="idCheck" :value="term.id">
                                                </label>
                                            </td>
                                            <td class="is-5">
                                        <span v-html="writeDepth(term.depth,'&#9472;') + term.title"
                                              class="is-block"></span>
                                                <span v-html="writeDepth(term.depth,'&nbsp;') + term.name"
                                                      class="has-text-grey-light"></span>
                                            </td>
                                            <td class="is-4" v-text="getDesc(term.description)"></td>
                                            <td class="is-1" v-text="term.posts_count"></td>
                                            <td class="is-half-1">
                                                <a href="" @click.prevent="editTerm(term)" class="is-block">
                                           <span class="icon">
                                            <i class="fa fa-edit"></i>
                                        </span>
                                                </a>
                                                <a href="" @click.prevent="destroyTerm(term)"
                                                   class="has-text-danger">
                                           <span class="icon">
                                            <i class="fa fa-trash"></i>
                                        </span>
                                                </a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <footer class="modal-card-foot">
                    <div class="field is-grouped">
                        <div class="control" v-if="isSelected && idCheck.length >0">
                            <button class="button is-success" type="button" @click.prevent="sendSelected">
                                Chọn {{taxTitle}} ({{idCheck.length}})
                            </button>
                        </div>
                        <div class="control">
                            <button class="button" @click.prevent="closeModal">Cancel</button>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </div>
</template>
<script>
    import QuillEditor from "../../../../plugins/quill/editor.vue";
    import GDS from "../../../../plugins/gds/gds";
    import PerfectScrollbar from "perfect-scrollbar";

    export default {
        components: {
            QuillEditor
        },
        name: 'termTempMedia',
        props: {
            typeId: {
                type: String,
                default: ''
            },
            typeTitle: {
                type: String,
                default: ''
            },
            taxId: {
                type: String,
                default: ''
            },
            taxTitle: {
                type: String,
                default: ''
            },
            isSelected: {
                type: Boolean,
                default: true
            },
            selectedCallBack: {
                type: Function,
                default: function () {
                    return null
                }
            }
        },
        data: () => ({
            isOpen: false,
            listTerm: [],
            editorOption: {
                modules: {
                    toolbar: ['bold', 'italic', 'underline', 'strike']
                }
            },
            termForm: {
                title: '',
                name: '',
                description: '',
                parent: '',
                image: ''
            },
            theAction: 1,
            editSlug: false,
            idCheck: [],
            checkAllStatus: false,
            imageSize: []
        }),
        computed: {
            getActionText() {
                if (this.theAction === 1)
                    return 'Thêm mới'
                if (this.theAction === 2)
                    return 'Cập nhật'

                return '';
            }
        },
        watch: {
            'termForm.title': function (value) {
                if (!this.editSlug) {
                    this.termForm.name = GDS.toSlug(this.termForm.title)
                }
            },
            checkAllStatus: function (val_1, val_2) {
                let tbl_content = this.$el.querySelector('.table-content')
                if (val_1 !== val_2 && val_1) {
                    this.checkItem = Object.assign(this.listTerm)
                    this.idCheck = _.map(this.checkItem, 'id')
                    tbl_content.querySelectorAll('tr').forEach(function (el) {
                        el.classList.add('is-selected')
                    })
                } else {
                    this.checkItem = []
                    this.idCheck = []
                    tbl_content.querySelectorAll('tr').forEach(function (el) {
                        el.classList.remove('is-selected')
                    })
                }
            },
            idCheck: function (val) {
                let tbl_content = this.$el.querySelector('.table-content')
                tbl_content.querySelectorAll('tr').forEach(function (el) {
                    if (val.indexOf(el.dataset.id) !== -1)
                        el.classList.add('is-selected')
                    else
                        el.classList.remove('is-selected')
                })
            }
        },
        mounted() {
        },
        methods: {
            writeDepth(number, str) {
                return str.repeat(number) + ' '
            },
            getDesc(text) {
                return GDS.subText(text, 10)
            },
            openModal() {
                this.isOpen = true;
                this.getTerms()
                this.$nextTick(() => {
                    let modal = this.$el.querySelector('.modal')
                    let table_term = this.$el.querySelector('#table-term')
                    window.TweenMax.to(table_term, 0.5, {height: modal.clientHeight - 250})
                })
            },
            closeModal() {
                this.isOpen = false;
            },
            refreshForm() {
                this.termForm = {
                    id: '',
                    title: '',
                    name: '',
                    description: '',
                    parent: '',
                }

                this.theAction = 1
            },
            doChecked(term, event) {
                if (this.idCheck.indexOf(term.id) !== -1) {
                    event.target.closest('tr').classList.add('is-selected')
                } else {
                    event.target.closest('tr').classList.remove('is-selected')
                }
            },
            sendSelected() {
                this.selectedCallBack(_.pickBy(this.listTerm, (val) => {
                    return this.idCheck.indexOf(val.id) !== -1
                }))

                this.closeModal()
            }
            ,
            getTerms() {
                window.preloader.active(true)
                axios.get(`/content/term/ta/${this.taxId}`)
                    .then(res => {
                        this.listTerm = res.data.terms
                        this.imageSize = res.data.image_size
                        window.preloader.active(false)

                        new PerfectScrollbar(this.$el.querySelector('#table-term'), {
                            minScrollbarLength: 50
                        });
                    })
            }
            ,
            saveTerm() {
                let data = {
                    title: this.termForm.title,
                    name: this.termForm.name,
                    description: this.termForm.description,
                    parent: this.termForm.parent
                }
                if (this.theAction === 1) {
                    axios.post(`/content/term/ta/${this.taxId}`, data)
                        .then(res => {
                            if (typeof res.data.message !== 'undefined') {
                                window.Notifi({
                                    'message': res.data.message
                                })
                                this.getTerms()
                            }
                        })
                } else if (this.theAction === 2) {
                    axios.put(`/content/term/ta/${this.taxId}/te/${this.termForm.id}`, data)
                        .then(res => {
                            if (typeof res.data.message !== 'undefined') {
                                window.Notifi({
                                    'message': res.data.message
                                })
                                this.getTerms()
                            }
                        })
                }

            },
            editTerm(term) {
                this.termForm = term
                this.theAction = 2
            },
            destroyTerm(term) {
                if (this.idCheck.indexOf(term.id) !== -1)
                    window.Notifi({
                        title: 'Thông báo',
                        message: 'Bạn không thể xóa ' + this.taxTitle + ' đang được chọn.'
                    })
            },
            selectImage() {
                window.FilePicker({
                    fileType: 'png,jpg,jpeg,gif',
                    pickFile: true,
                    imageSize: this.imageSize,
                    onPickFile: function (data) {
                        console.log(data)
                    }
                })
            }
        }
    }
</script>