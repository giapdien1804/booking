<template>
    <div class="field">
        <label class="label">Password</label>
        <div class="field has-addons">
            <div class="control">
                <input type="password" title="Enter password"
                       class="input"
                       :value="getPass"
                       :name="inputName"
                       :id="inputName">
            </div>
            <div class="control">
                <button type="button" class="button" @click.prvent="showPass">
                    <span class="icon"><i class="fa fa-eye"></i> </span>
                </button>

            </div>
        </div>
    </div>
</template>
<script>
  import GDS from "../plugins/gds/gds";

  export default {
      name:'password',
    props: {
      inputName: String,
      value: {
        type: String,
        default: ''
      },
      dataAuto: {
        type: [ Boolean, String ],
        default: () => true
      }
    },
    model: {
      prop: 'value',
      event: 'change'
    },
    computed: {
      getPass () {
        if (this.value === '' && this.dataAuto === true)
          return GDS.randomPassword(16)

        return this.value
      }
    },
    methods: {
      showPass () {
        let el = this.$el.querySelector('.input')
        if (el.getAttribute('type') === 'text')
          el.setAttribute('type', 'password')
        else
          el.setAttribute('type', 'text')
      }
    }
  }
</script>