<template>
    <div class="field">
        <label class="label" v-text="inputLabel" v-if="inputLabel"></label>
        <star-rating :star-size="36" :increment="0.5" v-model="starValue"/>
        <input type="hidden" :name="inputName" :value="starValue">
    </div>
</template>

<script>
    import StarRating from "../../../plugins/star/star-rating";

    export default {
        components: {StarRating},
        name: "star-input",
        props: {
            inputLabel: {
                type: String,
                required: false
            },
            inputName: {
                type: String,
                default: 'star'
            },
            current: {
                type: [String, Number],
                default: 0
            }
        },
        data: function () {
            return {
                starValue: this.current
            }
        }
    }
</script>