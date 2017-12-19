/*
 * Copyright (c) 2017. giapdien1804@gmail.com|+841648392803
 */
import GDS from "./plugins/gds/gds";

require('./bootstrap')
window.Vue = require('vue')
require('./plugins')

// import Sticky from "./plugins/sticky"

//load file manager
/*import filePicker from './components/FileManager.vue'

const FilePickerComponent = window.Vue.extend(filePicker)

window.FilePicker = (propsData = {
    fileType: 'png,jpg,jpeg,gif',
    pickFile: true,
    onPickFile: function () {
    }
}) => {
    return new FilePickerComponent({
        el: document.createElement('div'),
        propsData
    })
}*/

window.gs = window.GreenSockGlobals = {}
window.TweenMax = require('gsap/TweenMax')
window.GreenSockGlobals = window._gsQueue = window._gsDefine = null

const bulma = {
    'bulma-card': 'Card',
    // 'left-layout': 'LeftLayout',
    'delete-link': 'DeleteLink',
    'password': 'Password',
    'show-box': 'ShowBox',
    /*'passport-clients': 'passport/Clients',
    'passport-authorized-clients': 'passport/AuthorizedClients',
    'passport-personal-access-tokens': 'passport/PersonalAccessTokens',*/
    // 'media-manager': 'FileManager',
    'image-size-input': 'ImageSizeInput',
    'svg-loading': 'SvgLoading',
    // 'domain-dropdown': 'DomainDropdown',
    // 'term-temp-default': 'terms/Default',
    // 'term-temp-media': 'terms/Media',
    // 'term-temp-extra-media': 'terms/ExtraMedia',
    // 'term-temp-tag': 'terms/Tag',
    'log-view': 'system/LogViewer',
    'domain-input': 'DomainInput',
    'vue-select': 'VueSelect',
    //module
    'file-picker': 'modules/storage-manager/FilePicker'
}

for (let [name, file] of Object.entries(bulma)) {
    window.Vue.component(name, () => import(`./components/${file}.vue`))
}


require('./filter')

Vue.directive('click-outside', {
    bind: function (el, binding, vnode) {
        el.event = function (event) {
            // here I check that click was outside the el and his childrens
            if (!(el === event.target || el.contains(event.target))) {
                // and if it did, call method provided in attribute value
                vnode.context[binding.expression](event)
            }
        }
        document.body.addEventListener('click', el.event)
    },
    unbind: function (el) {
        document.body.removeEventListener('click', el.event)
    },
})

window.app = new Vue({
    el: '#app',
    performance: true,
    mounted() {
        /* this.$nextTick(() => {
             new Sticky('#global-top-action');
         })*/
    }
})

// Find output DOM associated to the DOM element passed as parameter
function findOutputForSlider(element) {
    let idVal = element.id;
    let outputs = document.getElementsByTagName('output');
    for (let i = 0; i < outputs.length; i++) {
        if (outputs[i].htmlFor == idVal)
            return outputs[i];
    }
}

function getSliderOutputPosition(slider) {
    // Update output position
    let newPlace,
        minValue;

    let style = window.getComputedStyle(slider, null);
    // Measure width of range input
    let sliderWidth = parseInt(style.getPropertyValue('width'), 10);

    // Figure out placement percentage between left and right of input
    if (!slider.getAttribute('min')) {
        minValue = 0;
    } else {
        minValue = slider.getAttribute('min');
    }
    let newPoint = (slider.value - minValue) / (slider.getAttribute('max') - minValue);

    // Prevent bubble from going beyond left or right (unsupported browsers)
    if (newPoint < 0) {
        newPlace = 0;
    } else if (newPoint > 1) {
        newPlace = sliderWidth;
    } else {
        newPlace = sliderWidth * newPoint;
    }

    return {
        'position': newPlace + 'px'
    }
}

document.addEventListener('DOMContentLoaded', function () {

    // Get all "navbar-burger" elements
    let $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
            $el.addEventListener('click', function () {

                // Get the target from the "data-target" attribute
                let target = $el.dataset.target
                let $target = document.querySelector(target)

                // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                $el.classList.toggle('is-active')
                $target.classList.toggle('is-active')

            })
        })
    }

    //dropdown
    let allDropdown = document.querySelectorAll('div.dropdown-trigger');
    [].forEach.call(allDropdown, function (dropdown) {
        dropdown.addEventListener('click', function (el) {
            el.currentTarget.closest('.dropdown').classList.toggle('is-active')
        })
    });

    // Get all document sliders
    let sliders = document.querySelectorAll('input[type="range"].slider');
    [].forEach.call(sliders, function (slider) {
        let output = findOutputForSlider(slider);
        if (output) {
            if (slider.classList.contains('has-output-tooltip')) {
                // Get new output position
                let newPosition = getSliderOutputPosition(slider);

                // Set output position
                output.style['left'] = newPosition.position;
            }

            // Add event listener to update output when slider value change
            slider.addEventListener('input', function (event) {
                if (event.target.classList.contains('has-output-tooltip')) {
                    // Get new output position
                    let newPosition = getSliderOutputPosition(event.target);

                    // Set output position
                    output.style['left'] = newPosition.position;
                }

                // Update output with slider value
                output.value = event.target.value;
            });
        }
    });

    GDS.findDataToggleEvent('submit-form', 'click', (el, target) => {
        target.submit()
    })

    GDS.findDataToggleEvent('show-hidden', 'click', (el, target) => {
        target.classList.toggle('is-hidden')
    })

    GDS.findDataToggleEvent('submit-on-selected', 'change', (el, target) => {
        target.submit()
    })

    //file input

    GDS.findDataToggleEvent('file-input', 'change', (el, target) => {
        if (el.files.length > 0) {
            target.innerHTML = el.files[0].name;
        }
    })

    let global_errors = document.querySelector('#global-errors-view');
    if (global_errors)
        global_errors.querySelector('.delete').addEventListener('click', function () {
            window.TweenMax.to(global_errors, 0.5, {
                opacity: 0, onComplete: () => {
                    global_errors.remove()
                }
            })
        })

})

window.axios.interceptors.response.use((response) => {
    window.preloader.active(false);
    if (response.data) {
        if (response.data.hasOwnProperty('notification'))
            window.Notification({
                type: response.data.hasOwnProperty('type') ? response.data.type : 'info',
                message: response.data.notification
            })

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
            })

        if (error.response.data.hasOwnProperty('message'))
            window.Message({
                type: error.response.data.hasOwnProperty('type') ? error.response.data.type : 'info',
                message: error.response.data.message
            })
    }
    // Do something with response error
    return Promise.reject(error)
})

//check notification
import {getCookie, removeCookie} from 'tiny-cookie'

if (getCookie('notification') !== null) {
    window.Notification(getCookie('notification', JSON.parse))
    removeCookie('notification')
}

require('./plugins/GDS/preloader')

