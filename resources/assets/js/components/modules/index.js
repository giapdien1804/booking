if (window.Vue !== 'undefined') {
    //domain
    window.Vue.component('domain-input', () => import('./domain/DomainInput'));
    window.Vue.component('domain-dropdown', () => import('./domain/DomainDropdown'));
    window.Vue.component('lang-input', () => import('./domain/LangInput'));

    //storage
    window.Vue.component('file-picker', () => import('./storage-manager/FilePicker'));

    //location
    window.Vue.component('google-map-input', () => import('./location/GoogleMapInput'));

    //user
    window.Vue.component('user-input', () => import('./user/UserInput'));

    //hotel
    window.Vue.component('star-input', () => import('./hotel/StarInput'));
    window.Vue.component('hotel-amenity', () => import('./hotel/HotelAmenity'));
}