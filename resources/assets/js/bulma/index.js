import StepsWizard from "./steps";
import GDS from "../plugins/gds/gds";
import Slider from "./slider";
import DropdownClick from "./dropdown";
import Nav from "./nav";
import Carousel from "./carousel";
import IconPicker from "./iconPicker";

document.addEventListener('DOMContentLoaded', function () {

    let allStep = document.querySelectorAll('div[data-toggle="steps"]');
    let $Steps = Array.prototype.slice.call(allStep, 0);
    if ($Steps.length > 0) {
        // Add a click event on each of them
        $Steps.forEach(function ($el) {
            new StepsWizard($el);
        })
    }

    let allNav = document.querySelectorAll('.navbar-burger');
    let $navbarBurgers = Array.prototype.slice.call(allNav, 0);
    if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
            new Nav($el);
        })
    }

    let allSlide = document.querySelectorAll('input[type="range"].slider');
    new Slider(allSlide);

    new DropdownClick();

    let carousels = document.querySelectorAll('div[data-toggle="carousel"]');
    if (carousels) {
        carousels.forEach(element => {
            new Carousel(element);
        })
    }

    let iconPickers = document.querySelectorAll('[data-action="iconPicker"]');
    if (iconPickers) {
        iconPickers.forEach(element => {
            if (!element.dataset.iconPicker) {
                element.dataset.iconPicker = new IconPicker(element);
            }
        })
    }

    GDS.findDataToggleEvent('file-input', 'change', (el, target) => {
        if (el.files.length > 0) {
            target.innerHTML = el.files[0].name;
        }
    });
});