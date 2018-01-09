if(window.Vue !=='undefined'){
    window.Vue.component('bulma-card', () => import('./components/Card'));
    window.Vue.component('delete-link', () => import('./components/DeleteLink'));
    window.Vue.component('password', () => import('./components/Password'));
    window.Vue.component('show-box', () => import('./components/ShowBox'));
    window.Vue.component('image-size-input', () => import('./components/ImageSizeInput'));
    window.Vue.component('log-view', () => import('./components/system/LogViewer'));
    window.Vue.component('vue-select', () => import('./components/VueSelect'));
    window.Vue.component('text-repeater', () => import('./components/TextRepeater'));
}

require('./components/modules');
