<template>
    <div :class="{'modal is-active':pickFile}">
        <div :class="{'modal-background':pickFile}"></div>
        <div :class="{'modal-content column is-12':pickFile}">
            <div class="card card-fmg">
                <header class="card-header">
                    <p class="card-header-title">Kho dữ liệu - máy chủ Asia</p>
                    <div class="card-header-icon p-0 mr-3">
                        <div class="dropdown">
                            <div class="dropdown-trigger" data-toggle="dropdown">
                                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                                    <span>Tác vụ</span>
                                    <span class="icon is-small">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </div>
                            <div class="dropdown-menu" id="dropdown-menu3" role="menu">
                                <div class="dropdown-content">
                                    <a @click.prevent="showMakeThum" class="dropdown-item">
                                        Khởi tạo lại ảnh thu nhỏ
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-header-icon p-0 mr-3">
                        <div class="tags">
                            <span v-for="col in 6" v-text="col" :class="{'tag':true,'is-primary':perRow===col}"
                                  @click="perRow=col">
                            </span>
                        </div>
                    </div>
                    <div class="card-header-icon p-0" v-if="!inTrash">
                        <div class="field has-addons">
                            <p class="control" v-if="showBtn.upload">
                                <button type="button" class="button is-primary tooltip is-tooltip-bottom"
                                        data-tooltip="Tải lên" @click="rightNavUpload">
                                    <span class="icon"><i class="fa fa-upload"></i></span>
                                </button>
                            </p>
                        </div>
                    </div>
                    <div class="card-header-icon p-0 ml-2">
                        <button type="button" @click="rightNavTrash" class="button is-light tooltip is-tooltip-bottom"
                                data-tooltip="Xem dữ liệu đã xóa">
                            <span class="icon is-small"><i class="fa fa-trash"></i></span>
                        </button>
                    </div>
                    <div class="card-header-icon p-0 pr-2 ml-2">
                        <div class="field has-addons">
                            <p class="control">
                                <input class="input" type="text" placeholder="Search name...">
                            </p>
                            <p class="control">
                                <button class="button is-primary tooltip is-tooltip-bottom" data-tooltip="Search"
                                        type="button">
                                    <span class="icon"><i class="fa fa-search"></i> </span>
                                </button>
                            </p>
                        </div>
                    </div>
                    <div class="card-header-icon p-0 pr-2 ml-2" v-if="pickFile">
                        <button class="button is-dark" type="button" @click="close()">
                            <span class="icon"><i class="fa fa-close"></i> </span>
                        </button>
                    </div>
                </header>
                <div class="has-relative pl-3 pr-3 pb-3 pt-1" v-if="makeThum.show">
                    <div class="box">
                        <p>Thực hiện khởi tạo lại ảnh thu nhỏ. Thao tác này có thể mất một vài phút, phụ thuộc vào số
                            lượng ảnh sử dụng. Vui lòng không refresh trình duyệt khi việc này chưa kết thúc.</p>
                        <div class="field">
                            <progress class="progress is-link mb-0" :value="makeThum.status" max="100">
                                {{makeThum.status}}%
                            </progress>
                            <p class="help" v-if="makeThum.current_file < makeThum.total_file">
                                Đã xử lý: {{makeThum.current_file}} / {{makeThum.total_file}} ảnh</p>
                            <p class="help"
                               v-if="makeThum.current_file === makeThum.total_file && makeThum.total_file > 0">
                                Hoàn thành khởi tạo ảnh thu nhỏ.
                            </p>
                        </div>

                        <div class="field">
                            <button type="button" class="button" @click="startMakeThum">Bắt đầu</button>
                            <button type="button" class="button is-text" @click="cancelMakeThum">Cancel</button>
                        </div>

                    </div>
                </div>
                <div class="has-relative">
                    <div class="fmg-top-box">
                        <!--Upload form-->
                        <div class="field fmg-upload bg-white" style="height: 0; overflow: hidden"
                             v-show="formUpload.show">
                            <div class="has-relative fmg-upload-content">
                                <div class="columns is-multiline" v-if="formUpload.isFile">
                                    <div class="column" v-for="(value,index) in formUpload.data">
                                        <div class="thum">
                                            <img class="image is-128x128" v-if="value.type.includes('image')"
                                                 :src="imageViewSrc(value)">
                                            <div class="file-view" v-else>
                                                <span class="icon is-large"><i class="fa fa-file"></i></span>
                                            </div>
                                        </div>
                                        <div class="fmg-desc">
                                <span class="tag is-rounded is-info">
                                    {{value.type}}
                                    <button class="delete is-small" @click="deleteThumbnail(index)"
                                            v-if="!formUpload.begin_upload"></button>
                                </span>
                                            <p><span v-text="value.name"></span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <template v-if="formUpload.show">
                                <div class="file" v-if="!formUpload.begin_upload">
                                    <label class="file-label">
                                        <input @change="previewThumbnail" class="file-input" type="file"
                                               ref="file_input" multiple>
                                        <span class="file-cta"><span class="file-icon"><i
                                                class="fa fa-upload"></i></span><span class="file-label">Thêm file tải lên..</span></span>
                                    </label>
                                </div>
                                <div class="field is-grouped">
                                    <p class="control">
                                        <button type="button" :class="formUpload.do_upload.css_class" @click="doUpload"
                                                v-if="showBtn.do_upload">
                                            <span>{{formUpload.do_upload.text}}</span>
                                        </button>
                                    </p>
                                    <p class="control">
                                        <button type="button" class="button is-danger" @click="delUpload"
                                                v-if="showBtn.del_upload">Xóa tất cả
                                        </button>
                                    </p>
                                    <p class="control">
                                        <button type="button" class="button is-danger" @click="cancelUpload"
                                                v-if="formUpload.begin_upload">Cancel
                                        </button>
                                    </p>
                                    <p class="control is-expanded has-text-right">
                                        <button type="button" class="button is-small is-text"
                                                @click="formUpload.show = false">Thoát
                                        </button>
                                    </p>
                                </div>
                                <progress v-if="formUpload.begin_upload" class="progress is-primary mt-3"
                                          :value="formUpload.percentCompleted" max="100">
                                    {{formUpload.percentCompleted}}%
                                </progress>
                                <template v-if="formUpload.info !==''">
                                    <div class="has-text-centered" v-html="formUpload.info"></div>
                                </template>
                            </template>
                        </div>
                    </div>
                </div>
                <div class="card-content p-2 has-relative no-overflow global-fmg-content">
                    <!--Loop item EXP-->
                    <div class="columns mt-0">
                        <div class="column is-narrow p-0">
                            <div id="fmg-left-col" class="has-relative" style="width: 230px;margin-left: -230px">
                                <div class="left-col-toggle z-index-1">
                                    <button type="button" class="button is-info" @click="panelAlbumToggle">
                                        <span class="icon">
                                            <i class="fa fa-angle-double-right"></i> </span>
                                    </button>
                                </div>
                                <div v-show="panelAlbum.show">
                                    <nav class="panel">
                                        <p class="panel-heading">
                                            Albums
                                        </p>
                                        <div class="panel-album-show has-relative"
                                             style="border-bottom: 1px solid #dbdbdb;">
                                            <a v-for="album in panelAlbum.list" @click.prevent="panelAlbumSelect(album)"
                                               :class="{'panel-block':true, 'tooltip':album.desc !== null, 'is-active':album.uuid === panelAlbum.current.uuid}"
                                               :data-tooltip="album.desc">{{album.title}}</a>
                                        </div>

                                        <div class="panel-block" v-if="panelAlbum.create || panelAlbum.edit">
                                            <input class="input" placeholder="Title" v-model="panelAlbum.field.title">
                                        </div>
                                        <div class="panel-block" v-if="panelAlbum.create || panelAlbum.edit">
                                            <input class="input" placeholder="Description"
                                                   v-model="panelAlbum.field.desc">
                                        </div>
                                        <div class="panel-block justify-content-around">
                                            <button @click="panelAlbumCreate"
                                                    v-if="!panelAlbum.create && !panelAlbum.edit"
                                                    class="button is-outlined">
                                                <span class="icon"><i class="fa fa-plus"></i> </span>
                                            </button>
                                            <button @click="panelAlbumStore" v-if="panelAlbum.create"
                                                    class="button is-link is-outlined">
                                                <span class="icon"><i class="fa fa-check"></i> </span>
                                            </button>
                                            <button @click="panelAlbumUpdate" v-if="panelAlbum.edit"
                                                    class="button is-link is-outlined">
                                                <span class="icon"><i class="fa fa-save"></i> </span>
                                            </button>
                                            <button @click="panelAlbumDestroy" v-if="panelAlbum.edit"
                                                    class="button is-danger is-outlined">
                                                <span class="icon"><i class="fa fa-trash"></i> </span>
                                            </button>
                                            <button @click="panelAlbumCancel"
                                                    v-if="panelAlbum.create || panelAlbum.edit"
                                                    class="button is-outlined">
                                                <span class="icon"><i class="fa fa-remove"></i> </span>
                                            </button>
                                        </div>

                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div :class="`columns is-variable is-1 is-multiline has-width-${perRow}`">
                                <div class="column pb-1 pt-1 item-column" v-for="item in expData.data"
                                     @click="clickItem(item,$event)">
                                    <lazy-img :imageSource="`/storage/180x150/fit/${item.storage_path}`"/>
                                </div>
                            </div>
                        </div>
                        <div class="column is-narrow bg-light" v-if="selectItem.length >0">
                            <div id="fmg-right-col" style="width: 0">
                                <div class="field is-grouped" v-if="!inTrash">
                                    <p class="control is-expanded">
                                        <button class="button is-fullwidth tooltip is-tooltip-right is-primary is-outlined"
                                                data-tooltip="Cancel" type="button"
                                                @click.prevent="panelDetailRemoveSelect">
                                            <span class="icon"><i class="fa fa-close"></i> </span>
                                        </button>
                                    </p>
                                    <p class="control is-expanded">
                                        <button class="button is-fullwidth tooltip is-tooltip-right is-danger is-outlined"
                                                data-tooltip="Delete" type="button" @click.prevent="panelDetailDelete">
                                            <span class="icon"><i class="fa fa-trash"></i> </span>
                                        </button>
                                    </p>
                                    <p class="control is-expanded">
                                        <button class="button is-fullwidth tooltip is-tooltip-bottom is-info is-outlined"
                                                data-tooltip="Xem ảnh gốc" type="button"
                                                @click.prevent="panelDetailVieImage">
                                            <span class="icon"><i class="fa fa-eye"></i> </span>
                                        </button>
                                    </p>
                                </div>
                                <div class="field is-grouped" v-else>
                                    <p class="control is-expanded">
                                        <button class="button is-fullwidth tooltip is-tooltip-bottom is-danger is-text"
                                                data-tooltip="Xóa vĩnh viễn" type="button"
                                                @click.prevent="panelDetailDeleteTrash">
                                            <span class="icon"><i class="fa fa-window-close"></i> </span>
                                        </button>
                                    </p>
                                    <p class="control is-expanded">
                                        <button class="button is-fullwidth tooltip is-tooltip-bottom is-info is-outlined"
                                                data-tooltip="Khôi phục lại" type="button"
                                                @click.prevent="panelDetailRestoreTrash">
                                            <span class="icon"><i class="fa fa-share"></i> </span>
                                        </button>
                                    </p>
                                </div>
                                <flickity ref="sliderDetail">
                                    <div class="carousel-cell" v-for="(item,index) in detailData">
                                        <figure class="image">
                                            <img class="carousel-cell-image"
                                                 :data-flickity-lazyload="`/storage/action/view/${item.uuid}/?w=256&h=256`"/>
                                        </figure>
                                        <div>
                                            <div class="field">
                                                <label class="label is-small">Title</label>
                                                <div class="control">
                                                    <input class="input is-small"
                                                           v-model="item.storage_title"
                                                           placeholder="Enter file title">
                                                </div>
                                            </div>
                                            <div class="field">
                                                <label class="label is-small">Description</label>
                                                <div class="control">
                                                    <input class="input is-small"
                                                           v-model="item.storage_desc"
                                                           placeholder="Enter file description">
                                                </div>
                                            </div>
                                            <div class="field">
                                                <p class="has-text-small">
                                                    <strong>Owner:</strong> <span
                                                        v-text="item.user.email"></span><br/>
                                                    <strong>Created:</strong> <span
                                                        v-text="item.created_at"></span><br/>
                                                    <strong>Updated:</strong> <span
                                                        v-text="item.updated_at"></span><br/>
                                                    <strong>Size:</strong> <span
                                                        v-text="humanFileSize(item.storage_size)"></span><br/>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </flickity>
                                <div class="field is-grouped mt-4">
                                    <div class="control is-expanded" v-if="pickFile && !inTrash">
                                        <button class="button is-info is-fullwidth" @click.prevent="clickPickFile">Pick
                                            File
                                        </button>
                                    </div>
                                    <div class="control is-expanded">
                                        <button class="button is-primary is-fullwidth" type="button"
                                                @click.prevent="panelDetailSave">
                                            <span class="icon"><i class="fa fa-save"></i> </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal is-active" v-show="fullImage.show">
                        <div class="modal-background"></div>
                        <div class="modal-content column is-12">
                            <flickity ref="imageViewFull">
                                <div class="carousel-cell" v-for="img in selectItem">
                                    <figure class="image">
                                        <img :src="`/storage/action/view/${img}`"/>
                                    </figure>
                                </div>
                            </flickity>
                        </div>
                        <button class="modal-close is-large z-index-2" @click="fullImage.show = false"
                                aria-label="close"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PerfectScrollbar from "perfect-scrollbar";
    import LazyImg from "./include/LazyImg";
    import * as Conf from './conf';
    import GDS from "../../../plugins/gds/gds";
    import Flickity from "../../../plugins/carousel/Flickity";

    export default {
        name: "filePicker",
        components: {
            Flickity,
            LazyImg
        },
        props: {
            domain: {
                type: String,
                default: '',
            },
            pickFile: {
                type: [String, Boolean],
                default: false
            },
            onPickFile: {
                type: Function,
                default: () => {
                }
            }
        },
        data: function () {
            return {
                $_parent_: null,
                inTrash: false,
                showBtn: {
                    upload: true,
                    deleted: false,
                    do_upload: false,
                    del_upload: false
                },
                formUpload: {
                    show: false,
                    begin_upload: false,
                    data: [],
                    isFile: false,
                    percentCompleted: 0,
                    cancelToken: null,
                    info: '',
                    do_upload: {
                        css_class: 'button is-info',
                        text: 'Bắt đầu tải lên'
                    }
                },
                users: [],
                current: [],
                selectItem: [],
                expData: [],
                pickData: [],
                perRow: 5,
                panelDetail: {
                    showMoreDetail: false,
                    showMoreEdit: false,
                    paddingTop: 0,
                    carousel: null
                },
                panelAlbum: {
                    show: false,
                    create: false,
                    edit: false,
                    field: {
                        title: '',
                        desc: ''
                    },
                    current: [],
                    list: []
                },
                fullImage: {
                    show: false,
                    carousel: null
                },
                makeThum: {
                    show: false,
                    total_file: 0,
                    current_file: 0,
                    status: 0
                },
                contentHeight: 0
            }
        },
        created() {
            if (this.pickFile) {
                let $parent = this.$parent;
                if (!$parent) {
                    let parent = document.querySelector('.file-manager-group');
                    if (!parent) {
                        const className = 'file-manager-group';
                        const FilePicker = Vue.extend({
                            name: 'FilePicker',
                            render(h) {
                                return h('div', {
                                    'class': {
                                        [`${className}`]: true
                                    }
                                })
                            }
                        });
                        $parent = new FilePicker().$mount();
                        document.body.appendChild($parent.$el)
                    } else {
                        $parent = parent.__vue__
                    }
                    // Hacked.
                    this.$_parent_ = $parent
                }
            }
        },
        mounted() {
            window.addEventListener('keyup', (event) => {
                if (event.key === 'Insert') {
                    this.formUpload.show = true;
                }

                if (event.key === 'Escape') {
                    if (this.formUpload.show)
                        this.formUpload.show = false
                }
            });

            if (this.pickFile) {
                if (this.$_parent_) {
                    this.$_parent_.$el.appendChild(this.$el);
                    this.$parent = this.$_parent_;
                    delete this.$_parent_
                }
            }
            let globalFmg = this.$el.querySelector('.global-fmg-content');
            let panel_album_show = this.$el.querySelector('.panel-album-show');
            let height = isNaN(window.innerHeight) ? window.clientHeight : window.innerHeight;
            this.contentHeight = height - 160;
            window.TweenMax.to(globalFmg, 0.5, {height: this.contentHeight});
            panel_album_show.style.maxHeight = height - 400 + 'px';
            panel_album_show.scrollTop = 0;
            new PerfectScrollbar(panel_album_show, {
                minScrollbarLength: 50,
                suppressScrollX: true
            });
            //set upload content height
            let upload_content = this.$el.querySelector('.fmg-upload-content');
            upload_content.style.maxHeight = height - 300 + 'px';
            new PerfectScrollbar(upload_content, {
                minScrollbarLength: 50,
                suppressScrollX: true
            });

            new PerfectScrollbar(globalFmg, {
                minScrollbarLength: 50,
                suppressScrollX: true
            });

            globalFmg.addEventListener('ps-y-reach-end', () => {
                if (this.expData.hasOwnProperty('next_page_url'))
                    if (this.expData.next_page_url !== null)
                        this.getData({next: true})
            });

            globalFmg.addEventListener('ps-scroll-y', () => {
                this.panelDetail.paddingTop = globalFmg.scrollTop;
                // this.$el.querySelector('#fmg-right-col').style.paddingTop = globalFmg.scrollTop + 'px';
                this.$el.querySelector('#fmg-left-col').style.paddingTop = globalFmg.scrollTop + 'px';
                this.$el.querySelector('.left-col-toggle').style.marginTop = globalFmg.scrollTop + 'px'
            });

            this.panelAlbumList()
        },
        destroyed() {
            if (this.pickFile) {
                this.$el.remove();
                document.querySelector('.file-manager-group').remove()
            }
        },
        computed: {
            detailData() {
                return _.filter(this.expData.data, (o) => {
                    return this.selectItem.indexOf(o.uuid) > -1
                })
            }
        },
        watch: {
            'formUpload.percentCompleted': function (value) {
                if (value === 100) {
                    this.showBtn.del_upload = false;
                    this.formUpload.do_upload.css_class = 'button is-success';
                    this.formUpload.do_upload.text = 'Đang xác thực, vui lòng đợi...'
                } else if (value < 100 && this.formUpload.begin_upload) {
                    this.formUpload.do_upload.css_class = 'button is-info is-loading';
                    this.formUpload.do_upload.text = 'Đang tải lên...'
                } else {
                    this.formUpload.do_upload.css_class = 'button is-info';
                    this.formUpload.do_upload.text = 'Bắt đầu tải lên'
                }
            },
            'formUpload.begin_upload': function (value) {
                if (value) {
                    //hide button action
                    this.showBtn.upload = false;
                    this.showBtn.del_upload = false;
                    this.showBtn.add_new = false
                } else {
                    this.formUpload.do_upload.css_class = 'button is-info';
                    this.formUpload.do_upload.text = 'Bắt đầu tải lên'
                }
            },
            'formUpload.data': function (value) {
                if (_.size(value) > 0) {
                    this.showBtn.do_upload = true;
                    this.showBtn.del_upload = true;
                    this.formUpload.isFile = true
                } else {
                    this.showBtn.do_upload = false;
                    this.showBtn.del_upload = false;
                    this.formUpload.isFile = false
                }
            },
            'panelAlbum.current': function (value) {
                this.getData({})
            },
            'selectItem': function (val) {
                if (val.length > 1) {
                    if (this.$refs.sliderDetail)
                        this.$refs.sliderDetail.rerender();
                }
            }
        },
        methods: {
            closedByUser() {
                if (this.pickFile) {
                    this.$emit('closed-by-user');
                    this.$destroy()
                }
            },
            close() {
                if (this.pickFile) {
                    this.$emit('closed-automatically');
                    this.$destroy()
                }
            },
            humanFileSize(size) {
                let i = Math.floor(Math.log(size) / Math.log(1024));
                return (size / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i]
            },
            getData(options = null) {
                window.preloader.active(true);
                let page = 1;
                if (options.hasOwnProperty('next') && this.expData.hasOwnProperty('next_page_url'))
                    page = new URL(this.expData.next_page_url).searchParams.get('page');

                this.current = [];

                window.axios.get(GDS.makeUrl(Conf.FILE_URL.list, {album: this.panelAlbum.current.uuid}), {page: page})
                    .then((res) => {
                        let new_data = [];
                        if (options.hasOwnProperty('next')) {
                            new_data = res.data;
                            new_data.data = _.concat(this.expData.data, res.data.data)
                        } else
                            new_data = res.data;

                        this.expData = new_data
                    })
            },
            rightNavTrash() {
                this.inTrash = true;
                window.preloader.active(true);
                window.axios.get(Conf.FILE_URL.trash, {params: {trash: true}})
                    .then((res) => {
                        this.expData = res.data
                    })
            },
            rightNavUpload() {
                let el_upload = this.$el.querySelector('.fmg-upload');
                if (this.formUpload.show) {
                    window.TweenMax.to(el_upload, 0.3, {
                        height: 0, padding: '0', onComplete: () => {
                            this.formUpload.show = false
                        }
                    })
                } else {
                    this.formUpload.show = true;
                    window.TweenMax.to(el_upload, 0.3, {height: 'auto', padding: '7px'})
                }
            },

            panelAlbumToggle() {
                let el = this.$el.querySelector('#fmg-left-col');
                let el_btn = this.$el.querySelector('.left-col-toggle');
                if (this.panelAlbum.show) {
                    window.TweenMax.to(el_btn, 0.3, {left: 230, rotation: 0});
                    window.TweenMax.to(el, 0.3, {
                        'margin-left': -230, onComplete: () => {
                            this.panelAlbum.show = false;
                        }
                    })
                } else {
                    this.panelAlbumList();
                    this.panelAlbum.show = true;
                    window.TweenMax.to(el, 0.3, {'margin-left': 5});
                    window.TweenMax.to(el_btn, 0.3, {left: 200, rotation: 180})
                }
            },
            panelAlbumResetField() {
                this.panelAlbum.field = {
                    title: '',
                    desc: ''
                }
            },
            panelAlbumList() {
                window.axios.get(GDS.makeUrl(Conf.ALBUM_URL.list, {domain: this.domain}))
                    .then(res => {
                        this.panelAlbum.list = res.data;
                        if (Object.keys(this.panelAlbum.current).length <= 0)
                            this.panelAlbum.current = _.nth(this.panelAlbum.list, 0)
                    })
            },
            panelAlbumCreate() {
                this.panelAlbum.create = true;
                this.panelAlbumResetField()
            },
            panelAlbumStore() {
                if (this.panelAlbum.field.title !== '') {
                    window.axios.post(GDS.makeUrl(Conf.ALBUM_URL.store, {domain: this.domain}), this.panelAlbum.field)
                        .then(() => {
                            this.panelAlbumList();
                            this.panelAlbumResetField();
                            this.panelAlbum.create = false;
                        })
                } else
                    window.Notification({
                        message: 'Bạn cần nhập tiêu đề'
                    })
            },
            panelAlbumUpdate() {
                if (this.panelAlbum.field.title !== '') {
                    window.axios.put(GDS.makeUrl(Conf.ALBUM_URL.update, {album: this.panelAlbum.current.uuid}), this.panelAlbum.field)
                        .then(() => {
                            this.panelAlbumList();
                            this.panelAlbumResetField();
                            this.panelAlbum.create = false;
                            this.panelAlbum.edit = false;
                        })
                } else
                    window.Notification({
                        message: 'Bạn cần nhập tiêu đề'
                    })
            },
            panelAlbumDestroy() {
                window.Message({
                    type: 'warning',
                    message: 'Nếu xóa album thì toàn bộ các file trong album cũng bị xóa.',
                    showConfirm: true,
                    onConfirm: (msg) => {
                        window.axios.delete(GDS.makeUrl(Conf.ALBUM_URL.destroy, {album: this.panelAlbum.current.uuid}))
                            .then(() => {
                                this.panelAlbumList();
                                this.panelAlbumResetField();
                                this.panelAlbum.create = false;
                                this.panelAlbum.edit = false;
                                this.panelAlbum.current = _.nth(this.panelAlbum.list, 0);
                                msg.close()
                            })
                    }
                })
            },
            panelAlbumSelect(item) {
                this.panelAlbum.current = item;

                this.panelAlbum.field.title = item.title;
                this.panelAlbum.field.desc = item.desc;

                this.panelAlbum.edit = true;
                this.panelAlbum.create = false
            },
            panelAlbumCancel() {
                this.panelAlbumResetField();
                this.panelAlbum.create = false;
                this.panelAlbum.edit = false
            },

            panelDetailRemoveSelect() {
                let rightCol = this.$el.querySelector('#fmg-right-col');
                _.forEach(this.$el.querySelectorAll('.item-column'), (el) => {
                    el.classList.remove('has-item-select')
                });

                window.TweenMax.to(rightCol, 0.3, {
                    width: 0, onComplete: () => {
                        this.selectItem = []
                    }
                })
            },
            panelDetailDelete() {
                let msg = '';
                _.forEach(this.detailData, function (o, i) {
                    msg += `<strong>${i + 1}:</strong> <em>${o.storage_title}</em><br/>`
                });
                window.Message({
                    type: 'danger',
                    title: 'Xác nhận xóa',
                    message: `Những mục sau sẽ được xóa: <br/>${msg}<br/>Bạn vẫn có thể vào thùng rác để lấy lại những mục đã xóa, nó sẽ lưu lại 90 ngày kể từ khi được xóa.`,
                    showConfirm: true,
                    onConfirm: (msg) => {
                        window.axios.delete(Conf.FILE_URL.trash, {data: this.selectItem})
                            .then(() => {
                                //update expl data
                                this.expData.data = _.filter(this.expData.data, (o) => {
                                    return this.selectItem.indexOf(o.uuid) === -1
                                });
                                //remove select item
                                this.selectItem = [];
                                msg.close()
                            })
                    }
                })
            },
            panelDetailVieImage() {
                this.fullImage.show = true;
                if (this.$refs.imageViewFull)
                    this.$refs.imageViewFull.rerender();
            },
            panelDetailSave() {
                let data = _.filter(this.expData.data, (o) => {
                    return this.selectItem.indexOf(o.uuid) > -1
                });
                window.axios.put(Conf.FILE_URL.update, {data: data})
            },
            panelDetailDeleteTrash() {
                window.axios.delete(Conf.FILE_URL.destroy, this.selectItem)
                    .then(() => {
                        //update expl data
                        this.expData.data = _.filter(this.expData.data, (o) => {
                            return this.selectItem.indexOf(o.uuid) === -1
                        });
                        //remove select item
                        this.selectItem = []
                    })
            },
            panelDetailRestoreTrash() {
                window.axios.post(Conf.FILE_URL.restore, this.selectItem)
                    .then(() => {
                        //update expl data
                        this.expData.data = _.filter(this.expData.data, (o) => {
                            return this.selectItem.indexOf(o.uuid) === -1
                        });
                        //remove select item
                        this.selectItem = []
                    })
            },
            toggleRightCol(open) {
                this.$nextTick(() => {
                    let rightCol = this.$el.querySelector('#fmg-right-col');
                    if (open) {
                        if (rightCol.style.width !== '270px') {
                            window.TweenMax.to(rightCol, 0.3, {
                                width: 270,
                                'padding-top': this.panelDetail.paddingTop
                            });
                        }
                    }
                    else
                        window.TweenMax.to(rightCol, 0.3, {
                            width: 0, onComplete: () => {
                                this.selectItem = []
                            }
                        })
                });
            },
            clickItem(item, event) {
                let target = event.target.closest('.item-column');
                if (event.ctrlKey) {
                    target.classList.toggle('has-item-select');
                    if (this.selectItem.indexOf(item.uuid) > -1)
                        this.$delete(this.selectItem, this.selectItem.indexOf(item.uuid));
                    else
                        this.selectItem.push(item.uuid)
                } else {
                    _.forEach(this.$el.querySelectorAll('.item-column'), (el) => {
                        el.classList.remove('has-item-select')
                    });
                    if (this.selectItem.indexOf(item.uuid) === -1) {
                        target.classList.add('has-item-select');
                        this.selectItem = [item.uuid]
                    } else {
                        target.classList.remove('has-item-select');
                        this.toggleRightCol(false);
                    }
                }

                if (this.selectItem.length > 0) {
                    this.toggleRightCol(true);
                }
            },

            imageViewSrc(value) {
                return URL.createObjectURL(value)
            },
            resetUpload() {
                //stop upload
                this.formUpload.begin_upload = false;
                // set percentCompleted to 0
                this.formUpload.percentCompleted = 0;
                //show upload button
                this.showBtn.upload = true;
                //remove upload data
                this.formUpload.data = [];
                //hide Bắt đầu tải lên button
                this.showBtn.do_upload = false;
                //hide deleted button
                this.showBtn.deleted = false;
                //hide del_upload button
                this.showBtn.del_upload = false;

                this.formUpload.info = ''
            },
            previewThumbnail() {
                let uploads = this.$refs.file_input.files;
                for (let value of uploads) {
                    this.formUpload.data.push(value)
                }
            },
            deleteThumbnail(index) {
                this.formUpload.data.splice(index, 1)
            },
            doUpload() {
                if (!this.formUpload.begin_upload) {
                    //start upload
                    this.formUpload.begin_upload = true;

                    let CancelToken = window.axios.CancelToken;
                    this.formUpload.cancelToken = CancelToken.source();

                    let config = {
                        onUploadProgress: (progressEvent) => {
                            this.formUpload.percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                        },
                        cancelToken: this.formUpload.cancelToken.token
                    };

                    let data = new FormData();

                    _.forEach(this.formUpload.data, (value) => {
                        data.append('uploads[]', value)
                    });

                    axios.post(GDS.makeUrl(Conf.FILE_URL.store, {album: this.panelAlbum.current.uuid}), data, config)
                        .then(() => {
                            //reset form upload
                            this.resetUpload();

                            //update list
                            this.getData({})
                        })
                        .catch(() => {
                            //stop upload
                            this.formUpload.begin_upload = false;
                            this.showBtn.del_upload = true
                        })
                }
            },
            cancelUpload() {
                //stop upload
                this.formUpload.cancelToken.cancel();
                this.formUpload.begin_upload = false
            },
            delUpload() {
                this.resetUpload()
            },
            clickPickFile() {
                let data = _.filter(this.expData.data, (o) => {
                    return this.selectItem.indexOf(o.uuid) > -1
                });
                this.onPickFile(data);
                this.close()
            },
            showMakeThum() {
                this.makeThum.show = true;
            },
            startMakeThum() {
                let _this = this;

                function makeNow(domain_uuid, next) {
                    window.axios.post(Conf.FILE_URL.make_thum, {domain: domain_uuid, next_file: next})
                        .then(res => {
                            if (res.data.hasOwnProperty('total_file'))
                                _this.makeThum.total_file = res.data.total_file;

                            if (_this.makeThum.current_file < _this.makeThum.total_file) {
                                _this.makeThum.current_file += 1;
                                makeNow(domain_uuid, _this.makeThum.current_file);
                            }

                            if (_this.makeThum.total_file > 0)
                                _this.makeThum.status = Math.round((_this.makeThum.current_file / _this.makeThum.total_file) * 100);
                        })
                }

                makeNow(null, 0);
            },
            cancelMakeThum() {
                this.makeThum.show = false;
            }
        }
    }
</script>

<style scoped>

</style>