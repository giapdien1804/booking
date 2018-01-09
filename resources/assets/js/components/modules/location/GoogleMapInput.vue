<template>
    <div class="field">
        <label class="label">{{inputLabel}}
            <small>(Click vào map để đánh dấu)</small>
        </label>
        <div class="field has-addons">
            <p class="control">
                <input class="input" :name="inputName+'[lat]'" v-model="markerLocation.lat" placeholder="Lat">
            </p>
            <p class="control">
                <input class="input" :name="inputName+'[lng]'" v-model="markerLocation.lng" placeholder="Lng">
            </p>
        </div>
        <div class="field">
            <input id="pac-input" class="input" type="text" :name="inputName+'[address]'"
                   placeholder="Nhập vào địa chỉ">
        </div>
        <div class="google-map"></div>
    </div>
</template>

<script>
    const GoogleMapsLoader = require("../../../plugins/google-map");
    const DEFAULT_LOCATION = {
        lat: 16.4804269,
        lng: 105.973276
    };
    export default {
        name: 'googleMapInput',
        props: {
            apiKey: String,
            inputLabel: {
                type: String,
                default: 'Địa chỉ'
            },
            inputName: {
                type: String,
                default: 'map'
            },
            currentMarker: {
                type: [Object, Array],
                default: () => {
                    return DEFAULT_LOCATION
                }
            },
            oneMarker: {
                type: [String, Boolean],
                default: true
            }
        },
        data() {
            return {
                center: DEFAULT_LOCATION,
                markerLocation: DEFAULT_LOCATION,
                markers: [],
                gmap: null
            }
        },
        mounted() {
            this.googleInit()
        },
        methods: {
            googleInit() {
                GoogleMapsLoader.KEY = this.apiKey;
                GoogleMapsLoader.LIBRARIES = ['geometry', 'places'];
                GoogleMapsLoader.LANGUAGE = 'vi';
                GoogleMapsLoader.load((google) => {
                    this.gmap = new google.maps.Map(this.$el.querySelector('.google-map'), {
                        center: this.center,
                        zoom: 5,
                        scrollwheel: true,
                        zoomControl: true
                    });

                    this.addMarker(this.currentMarker);

                    //search
                    let input = this.$el.querySelector('#pac-input');
                    const searchBox = new google.maps.places.SearchBox(input);

                    this.gmap.addListener('bounds_changed', () => {
                        searchBox.setBounds(this.gmap.getBounds());
                    });

                    searchBox.addListener('places_changed', () => {
                        let places = searchBox.getPlaces();

                        if (places.length === 0) {
                            return;
                        }

                        // Clear out the old markers.
                        this.clearMarkers();

                        // For each place, get the icon, name and location.
                        const bounds = new google.maps.LatLngBounds();
                        places.forEach((place) => {
                            if (!place.geometry) {
                                console.log("Returned place contains no geometry");
                                return;
                            }
                            // Create a marker for each place.
                            this.addMarker(place.geometry.location);

                            if (place.geometry.viewport) {
                                // Only geocodes have viewport.
                                bounds.union(place.geometry.viewport);
                            } else {
                                bounds.extend(place.geometry.location);
                            }
                        });
                        this.gmap.fitBounds(bounds);
                    });

                    const service = new google.maps.places.PlacesService(this.gmap);
                    //new marker on click
                    this.gmap.addListener('click', (event) => {
                        this.markerLocation = JSON.parse(JSON.stringify(event.latLng));
                        if (this.oneMarker)
                            this.clearMarkers();
                        this.addMarker(this.markerLocation);

                        if (event.placeId)
                            service.getDetails({
                                placeId: event.placeId
                            }, function (place, status) {
                                if (status === google.maps.places.PlacesServiceStatus.OK)
                                    input.value = place.name + ', ' + place.formatted_address
                            });
                    });

                })
            },
            addMarker(location) {
                let marker = new google.maps.Marker({
                    position: location,
                    map: this.gmap,
                    animation: google.maps.Animation.BOUNCE
                });
                this.markers.push(marker);
            },
            // Sets the map on all markers in the array.
            setMapOnAll(map) {
                for (let i = 0; i < this.markers.length; i++) {
                    this.markers[i].setMap(map);
                }
            },

            // Removes the markers from the map, but keeps them in the array.
            clearMarkers() {
                this.setMapOnAll(null);
            },

            // Shows any markers currently in the array.
            showMarkers() {
                this.setMapOnAll(this.gmap);
            },

            // Deletes all markers in the array by removing references to them.
            deleteMarkers() {
                this.clearMarkers();
                this.markers = [];
            }
        }
    }
</script>

<style scoped>
    .google-map {
        width: 100%;
        min-height: 400px;
    }
</style>