/*
 * Copyright (c) 2017. giapdien1804@gmail.com|+841648392803
 */
import GDS from "./plugins/gds/gds";

require('./bootstrap');
window.Vue = require('vue');
require('./plugins');

// import Sticky from "./plugins/sticky"

//load file manager
import filePicker from './components/modules/storage-manager/FilePicker'

const FilePickerComponent = window.Vue.extend(filePicker);

window.FilePicker = (propsData = {
    pickFile: true,
    onPickFile: function () {
    }
}) => {
    return new FilePickerComponent({
        el: document.createElement('div'),
        propsData
    })
};

window.gs = window.GreenSockGlobals = {};
window.TweenMax = require('gsap/TweenMax');
window.GreenSockGlobals = window._gsQueue = window._gsDefine = null;

require('./components');
require('./filter');

// require('./socket');
Vue.directive('click-outside', {
    bind: function (el, binding, vnode) {
        el.event = function (event) {
            // here I check that click was outside the el and his childrens
            if (!(el === event.target || el.contains(event.target))) {
                // and if it did, call method provided in attribute value
                vnode.context[binding.expression](event)
            }
        };
        document.body.addEventListener('click', el.event)
    },
    unbind: function (el) {
        document.body.removeEventListener('click', el.event)
    },
});

// import store from './store'
window.app = new Vue({
    el: '#app',
    // store,
    performance: true,
    mounted() {
        /* this.$nextTick(() => {
             new Sticky('#global-top-action');
         })*/
    }
});

require('./bulma');

document.addEventListener('DOMContentLoaded', function () {

    GDS.findDataToggleEvent('submit-form', 'click', (el, target) => {
        target.submit()
    });

    GDS.findDataToggleEvent('show-hidden', 'click', (el, target) => {
        target.classList.toggle('is-hidden')
    });

    GDS.findDataToggleEvent('submit-on-selected', 'change', (el, target) => {
        target.submit()
    });

    let global_errors = document.querySelector('#global-errors-view');
    if (global_errors)
        global_errors.querySelector('.delete').addEventListener('click', function () {
            window.TweenMax.to(global_errors, 0.5, {
                opacity: 0, onComplete: () => {
                    global_errors.remove()
                }
            })
        })

});

window.axios.interceptors.response.use((response) => {
    window.preloader.active(false);
    if (response.data) {
        if (response.data.hasOwnProperty('notification'))
            window.Notification({
                type: response.data.hasOwnProperty('type') ? response.data.type : 'info',
                message: response.data.notification
            });

        if (response.data.hasOwnProperty('message'))
            window.Message({
                type: response.data.hasOwnProperty('type') ? response.data.type : 'info',
                message: response.data.message
            })
    }
    return response
}, function (error) {
    window.preloader.active(false);
    if (error.response) {
        if (error.response.data.hasOwnProperty('notification'))
            window.Notification({
                type: error.response.data.hasOwnProperty('type') ? error.response.data.type : 'info',
                message: error.response.data.notification
            });

        if (error.response.data.hasOwnProperty('message'))
            window.Message({
                type: error.response.data.hasOwnProperty('type') ? error.response.data.type : 'info',
                message: error.response.data.message
            })
    }
    // Do something with response error
    return Promise.reject(error)
});

//check notification
import {getCookie, removeCookie} from 'tiny-cookie'

if (getCookie('notification') !== null) {
    window.Notification(getCookie('notification', JSON.parse));
    removeCookie('notification')
}

require('./plugins/GDS/preloader');

