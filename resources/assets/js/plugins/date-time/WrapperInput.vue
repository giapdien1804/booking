<template>
    <div class="field has-addons flatpickr" data-wrap="true" data-clickOpens="false"
         :class="{ [`has-addons-${alignment}`]: alignment }">
        <p class="control is-expanded">
            <input class="input" :class="inputClass" :name="dataName" type="text" :placeholder="placeholder"
                   :value="value" data-input/>
        </p>
        <p class="control">
            <slot></slot>
        </p>
    </div>

</template>

<script>
    import BasicInput from './BasicInput'

    export default {
        mixins: [BasicInput],

        props: {
            alignment: String
        }
    }
</script>
