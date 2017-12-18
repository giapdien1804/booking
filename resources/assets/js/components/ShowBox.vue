<template>
    <div class="is-inline-block" @click="toggle">
        <slot></slot>
    </div>
</template>
<script>
  export default {
    props: {
      dataTarget: String
    },
    methods: {
      toggle () {
        document.querySelector(this.dataTarget).classList.toggle('is-hidden')
      }
    }
  }
</script>