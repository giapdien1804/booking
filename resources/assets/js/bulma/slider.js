class Slider {
    constructor( element = null){
        this.element = element;
        this.init();
    }
    init() {
        let _this = this;
        [].forEach.call(this.element, function (slider) {
            let output = _this.findOutputForSlider(slider);
            if (output) {
                if (slider.classList.contains('has-output-tooltip')) {
                    // Get new output position
                    let newPosition = _this.getSliderOutputPosition(slider);

                    // Set output position
                    output.style['left'] = newPosition.position;
                }

                // Add event listener to update output when slider value change
                slider.addEventListener('input', function (event) {
                    if (event.target.classList.contains('has-output-tooltip')) {
                        // Get new output position
                        let newPosition = _this.getSliderOutputPosition(event.target);

                        // Set output position
                        output.style['left'] = newPosition.position;
                    }

                    // Update output with slider value
                    output.value = event.target.value;
                });
            }
        });
    }

    getSliderOutputPosition(slider) {
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

    findOutputForSlider(element) {
        let idVal = element.id;
        let outputs = document.getElementsByTagName('output');
        for (let i = 0; i < outputs.length; i++) {
            if (outputs[i].htmlFor == idVal)
                return outputs[i];
        }
    }
}

export default Slider;


