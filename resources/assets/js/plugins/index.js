/*
 * Copyright (c) 2017. giapdien1804@gmail.com|+841648392803
 */

window.Vue.component('slider', () => import('./slider/Slider.vue'));
window.Vue.component('date-picker', () => import('./date-time/index.vue'));
window.Vue.component('time-picker', () => import('./date-time/TimePicker'));
window.Vue.component('quill-editor', () => import('./quill/editor'));
// window.Vue.component('dropdown-input', () => import('./dropdown/DropdownInput.vue'))
// window.Vue.component('icon-select', () => import('./dropdown/IconSelect.vue'))

import Message from './notification/Message.vue'

const MessageComponent = window.Vue.extend(Message);

window.Message = (propsData = {
    title: '',
    message: '',
    type: 'info',
    onConfirm: function () {
    }
}) => {
    return new MessageComponent({
        el: document.createElement('div'),
        propsData
    })
};
import Notification from './notification/Notification.vue'

const NotificationComponent = window.Vue.extend(Notification);

window.Notification = (propsData = {
    title: '',
    message: '',
    duration: 5000
}) => {
    return new NotificationComponent({
        el: document.createElement('div'),
        propsData
    })
};
