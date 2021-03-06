/*
 * Copyright (c) 2017. giapdien1804@gmail.com|+841648392803
 */

/**
 * Vue-Quill-Editor
 * @author Surmon.me
 */

var quill = require('quill/dist/quill.js')
var quillEditor = require('./editor.vue')
quillEditor = quillEditor.default || quillEditor

var VueQuillEditor = {
    Quill: quill,
    quillEditor: quillEditor,
    install: function (Vue) {
        Vue.component(quillEditor.name, quillEditor)
    }
}

module.exports = VueQuillEditor
