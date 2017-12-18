<template>
    <div>
        <div class="field">
            <label>Title</label>
            <input type="text" class="input"
                   :name="name.title"
                   :value="value.title"
                   :id="`input-${name.title}`">
        </div>
        <div class="field">
            <label :for="`input-${name}`">{{label}}</label>
            <div class="field has-addons">
                <div class="control is-expanded bg-light">
                    <input :name="name.name"
                           :class="{'input is-fullwidth':true, 'is-static':!isEdit}"
                           :id="`input-${name.name}`"
                           :value="value.name"
                           :readonly="!isEdit?true:null"
                           @input="updateInput"
                    >
                </div>
                <div class="control">
                    <button class="button" @click.prevent="editSlug">
                        <span class="icon"><i class="fa fa-edit"></i></span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'inputSlug',
        props: {
            value: {
                type: Object,
                default: function () {
                    return {
                        title: '',
                        name: ''
                    }
                }
            },
            label: String,
            name: {
                type: Object,
                default: function () {
                    return {
                        title: 'title',
                        name: 'slug'
                    }
                }
            },
        },
        data: () => {
            return {
                isEdit: false
            }
        },
        methods: {
            updateInput(value) {
                this.$emit('input', value)
            },
            toSlug(str) {
                // Chuyển hết sang chữ thường
                str = str.toLowerCase();

                // xóa dấu
                str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
                str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
                str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
                str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
                str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
                str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
                str = str.replace(/(đ)/g, 'd');

                // Xóa ký tự đặc biệt
                str = str.replace(/([^0-9a-z-\s])/g, '');

                // Xóa khoảng trắng thay bằng ký tự -
                str = str.replace(/(\s+)/g, '-');

                // xóa phần dự - ở đầu
                str = str.replace(/^-+/g, '');

                // xóa phần dư - ở cuối
                str = str.replace(/-+$/g, '');

                // return
                return str;
            },
            editSlug() {
                this.isEdit = !this.isEdit
                if (this.isEdit) {
                    this.elFrom.removeEventListener('keyup', function () {
                        return false
                    });
                } else {
                    this.elFrom.addEventListener('keyup', () => {
                        this.$refs.slug_input.value = this.toSlug(this.elFrom.value);
                    })
                }
            }
        }
    }
</script>