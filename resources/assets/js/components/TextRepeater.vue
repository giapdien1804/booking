<template>
    <div class="field">
        <label class="label" v-text="inputLabel" v-if="inputLabel"></label>
        <div class="control">
            <div class="field has-addons" v-for="(val,index) in dataInput">
                <div class="control is-expanded">
                    <input class="input is-fullwidth" type="text" v-model="val.value" :name="`${inputName}[]`" placeholder="...">
                </div>
                <div class="control" v-if="index < Object.keys(dataInput).length - 1">
                    <button class="button" type="button" @click="clickRemove(index)">
                        <span class="icon">
                            <i class="fa fa-minus"></i>
                        </span>
                    </button>
                </div>
                <div class="control" v-if="index === Object.keys(dataInput).length - 1">
                    <button class="button" type="button" @click="clickPlus">
                        <span class="icon">
                            <i class="fa fa-plus"></i>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "text-repeater",
        props: {
            inputName: {type: String, default: ''},
            inputLabel: {type: String, required: false},
            inputValue: {type: [String, Array, Object], required: false}
        },
        data: function () {
            return {
                dataInput: [
                    {value: ''}
                ]
            }
        },
        methods: {
            clickPlus() {
                this.dataInput.push({'value': ''})
            },
            clickRemove(index) {
                this.$delete(this.dataInput, index)
            }
        }
    }
</script>