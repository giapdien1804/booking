<template>
    <div :class="{card:true,'is-card-expand':isExpand}">
        <header class="card-header" v-if="headerTitle !==''">
            <p class="card-header-title pt-1 pb-1" v-text="headerTitle"></p>
            <span class="card-header-icon pt-1 pb-1">
                <button class="button" type="button" @click="cardExpand">
                    <span class="icon"><i :class="{fa:true, 'fa-expand':!isExpand,'fa-compress':isExpand}"></i> </span>
                </button>
            </span>
        </header>
        <div class="card-content p-0" id="scrolling-container">
            <div id="toolbar">
                <span class="ql-formats">
                    <button type="button" @click="showImageManager"><i class="fa fa-image"></i> </button>
                    <button type="button"><i class="fa fa-link"></i></button>
                    <button class="ql-video" type="button"></button>
                </span>
                <span class="ql-formats">
                    <button class="ql-bold" type="button"></button>
                    <button class="ql-italic" type="button"></button>
                    <button class="ql-underline" type="button"></button>
                    <button class="ql-strike" type="button"></button>
                </span>
                <span class="ql-formats">
                    <select class="ql-font">
                        <option selected=""></option>
                        <option value="serif"></option>
                        <option value="monospace"></option>
                    </select>
                    <select class="ql-size">
                        <option selected=""></option>
                        <option value="small"></option>
                        <option value="large"></option>
                        <option value="huge"></option>
                    </select>
                </span>
                <span class="ql-formats">
                    <ql-color></ql-color>
                    <ql-background></ql-background>
                </span>
                <span class="ql-formats">
                    <button class="ql-list" value="ordered" type="button"></button>
                    <button class="ql-list" value="bullet" type="button"></button>
                    <select class="ql-align">
                        <option selected=""></option>
                        <option value="center"></option>
                        <option value="right"></option>
                        <option value="justify"></option>
                    </select>
                </span>
                <span class="ql-formats">
                    <button type="button"><i class="fa fa-code"></i> </button>
                </span>
            </div>


            <div ref="editor" class="quill-editor" id="quill-editor">
            </div>
        </div>
        <div class="card-footer">
            <div class="card-footer-item p-2">
                <span class="counter"></span>
            </div>
            <div class="card-footer-item p-2">
                <span class="auto-save has-text-grey-light"></span>
            </div>
        </div>
        <textarea class="textarea" :name="inputName" v-model="theContent" style="display: none!important;"></textarea>
        <div class="modal is-active" v-if="toolbar.link.show">
            <!--<div class="modal-background"></div>-->
            <div class="modal-content p-3">
                <div class="box">
                    <div class="field">
                        <label class="label">Link</label>
                        <input class="input" type="text" v-model="toolbar.link.href">
                    </div>
                    <div class="field">
                        <label class="label">Title</label>
                        <input class="input" type="text" v-model="toolbar.link.title">
                    </div>
                    <div class="field">
                        <label class="label">Target </label>
                        <div class="select">
                            <select v-model="toolbar.link.target">
                                <option value="">Default</option>
                                <option value="_blank">Blank</option>
                                <option value="_self">Self</option>
                                <option value="_paren">Paren</option>
                                <option value="_top">Top</option>
                            </select>
                        </div>
                    </div>
                    <div class="field">
                        <div class="buttons is-centered">
                            <button type="button" class="button is-success"
                                    @click="toolbarLinkOk">
                                <span class="icon"><i class="fa fa-check"></i> </span>
                                <span>OK</span>
                            </button>
                            <button type="button" class="button"
                                    @click="toolbar.link.show = false">
                                <span class="icon"><i class="fa fa-remove"></i> </span>
                                <span>Cancel</span>
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </div>

        <div class="modal is-active" v-if="toolbar.image.options.show">
            <div class="modal-background"></div>
            <div class="modal-card column is-11">
                <header class="modal-card-head">
                    <p class="modal-card-title">Chi tiết hình ảnh</p>
                    <button class="delete" aria-label="close"></button>
                </header>
                <section class="modal-card-body" style="text-align: right">
                    <!-- Content ... -->
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-success">Save changes</button>
                    <button class="button">Cancel</button>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
    import QlColor from "./ql/QlColor";
    import QlBackground from "./ql/QlBackground";

    if (!window.Quill) {
        window.Quill = require('quill/dist/quill.js')
    }
    require('./modules');
    require('./blots');

    const Delta = Quill.import('delta');

    export default {
        components: {
            QlBackground,
            QlColor
        },
        name: 'quill-editor',
        data: function () {
            return {
                isExpand: false,
                quill: null,
                _content: '',
                theContent: '',
                theContentCode: '',
                toolbar: {
                    link: {
                        show: false,
                        range: null,
                        title: '',
                        link: '',
                        target: ''
                    },
                    image: {
                        show: false,
                        options: {
                            show: false,
                            data: {
                                alt: '',
                                caption: '',
                                url: '',
                                link: {
                                    url: '',
                                    target: ''
                                },
                                width: '',
                                height: '',
                                align: '',
                                float: ''
                            }
                        }
                    },
                    video: {
                        show: false
                    }
                },
            }
        },
        props: {
            localMedia: {
                type: [String, Boolean],
                default: true
            },
            headerTitle: {
                type: String,
                default: 'Nội dung'
            },
            inputName: {
                type: String,
                default: 'content'
            },
            domain: {
                type: String,
                default: ''
            },
            content: String,
            disabled: Boolean,
            options: {
                type: Object,
                required: false,
                default: function () {
                    return {}
                }
            }
        },
        mounted: function () {
            this.initialize()
        },
        beforeDestroy: function () {
            this.quill = null
        },
        watch: {
            /*content: function (newVal, oldVal) {
                if (this.quill) {
                    if (!!newVal && newVal !== this._content) {
                        this._content = newVal
                        this.quill.pasteHTML(newVal)
                    } else if (!newVal) {
                        this.quill.setText('')
                    }
                }
            },
            value: function (newVal, oldVal) {
                if (this.quill) {
                    if (!!newVal && newVal !== this._content) {
                        this._content = newVal
                        this.quill.pasteHTML(newVal)
                    } else if (!newVal) {
                        this.quill.setText('')
                    }
                }
            },
            disabled: function (newVal, oldVal) {
                if (this.quill) {
                    this.quill.enable(!newVal)
                }
            }*/
        },
        methods: {
            cardExpand() {
                this.isExpand = !this.isExpand;
                let w_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                let w_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                let sc_container = this.$el.querySelector('#scrolling-container');
                let icon_w = this.$el.querySelector('.card-header-icon');
                let toolbar = this.$el.querySelector('#toolbar');
                if (this.isExpand) {
                    sc_container.style.height = w_height - 85 + 'px';
                    toolbar.style.width = w_width - icon_w.clientWidth - 20 + 'px';
                } else {
                    sc_container.style.height = 'auto';
                    toolbar.style.width = '100%';
                }
            },
            initialize() {
                if (this.$el) {
                    // options and instance
                    let self = this;
                    let defaultModules = {
                        toolbar: '#toolbar',
                        imageImport: true,
                        imageResize: {
                            displaySize: true
                        },
                        wordCount: {
                            container: self.$el.querySelector('.counter'),
                            unit: 'word'
                        },
                        autoSave: {
                            status: self.$el.querySelector('.auto-save'),
                            post_url: '/location'
                        }
                    };

                    self.options.theme = self.options.theme || 'snow';
                    self.options.boundary = self.options.boundary || document.body;
                    self.options.modules = self.options.modules || defaultModules;

                    self.options.modules.toolbar = self.options.modules.toolbar !== undefined
                        ? self.options.modules.toolbar
                        : defaultModules.toolbar;
                    self.options.placeholder = self.options.placeholder || 'Nhập văn bản vào đây ...';
                    self.options.readOnly = self.options.readOnly !== undefined ? self.options.readOnly : false;

                    self.options.scrollingContainer = '#scrolling-container';

                    self.quill = new Quill(self.$refs.editor, self.options);

                    const toolbar = self.quill.getModule('toolbar');

                    // set editor content
                    if (self.value || self.content) {
                        self.quill.pasteHTML(self.value || self.content)
                    }

                    // mark model as touched if editor lost focus
                    self.quill.on('selection-change', function (range) {
                        if (!range) {
                            self.$emit('blur', self.quill)
                        } else {
                            self.$emit('focus', self.quill)
                        }
                    });

                    // update model if text changes
                    self.quill.on('text-change', function (delta, oldDelta, source) {
                        let html = self.$refs.editor.children[0].innerHTML;
                        let text = self.quill.getText();
                        if (html === '<p><br></p>') html = '';
                        self._content = html;
                        self.$emit('input', self._content);
                        self.$emit('change', {
                            editor: self.quill,
                            html: html,
                            text: text
                        });

                        self.theContent = self.quill.root.innerHTML
                    });


                    //auto save
                    // Save periodically
                    /*setInterval(function () {
                        if (self.change.length() > 0) {
                            window.axios.post('/location', {content: self.quill.root.innerHTML, auto_save: true})
                                .then(() => {
                                    self.change = new Delta();
                                })

                        }
                    }, 5 * 1000);*/
                    // disabled
                    if (this.disabled) {
                        self.quill.enable(false)
                    }

                    // emit ready
                    self.$emit('ready', self.quill)
                }
            },
            showImageManager() {
                window.FilePicker({
                    domain: this.domain,
                    pickFile: true,
                    onPickFile: (data) => {
                        console.log(JSON.stringify(data));
                        let select = this.quill.getSelection();
                        for (let image in data) {
                            this.quill.insertEmbed(select.index, 'imageFigure', {
                                url: image.storage_path,
                                caption: image.storage_desc,
                                atl: image.storage_desc
                            })
                        }

                    }
                })
            },
            toolbarLinkOk() {
                let value = {
                    title: this.toolbar.link.title,
                    href: this.toolbar.link.href,
                    target: this.toolbar.link.target
                };
                this.quill.formatText(this.toolbar.link.range.index, this.toolbar.link.range.length, 'link', this.toolbar.link.href);
                this.toolbar.link.show = false
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~quill/dist/quill.snow.css";
    /*@import '~quill/dist/quill.bubble.css';*/
    @import '~quill/dist/quill.core.css';

    .quill-editor {
        min-height: 100%;
        height: auto;

        img {
            max-width: 100%;
        }
    }

    .is-card-expand {
        position: fixed;
        top: 0;
        left: 1px;
        right: 0;
        bottom: 0;
        z-index: 5;

        #scrolling-container {
            overflow-y: auto;
        }

        #toolbar {
            position: absolute;
            top: 0;
            background-color: whitesmoke;
        }
    }
</style>
