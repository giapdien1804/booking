<template>
    <div class="field">
        <label class="label">Image size
            <button class="button is-info is-small" type="button" @click="clickPlus">
                <span class="icon"><i class="fa fa-plus"></i> </span>
            </button>
        </label>
        <div class="columns is-multiline">
            <div class="column is-3-desktop is-4-tablet is-2-mobile" v-for="(item,index) in itemData">
                <div class="field has-addons">
                    <p class="control">
                        <input type="text" class="input" placeholder="width"
                               :name="`${inputName}[${index}][width]`"
                               v-model="item.width">
                    </p>
                    <p class="control">
                        <span class="button is-static">x</span>
                    </p>
                    <p class="control">
                        <input type="text" class="input" placeholder="height"
                               :name="`${inputName}[${index}][height]`"
                               v-model="item.height">
                    </p>
                    <p class="control" v-if="index >0">
                        <button class="button is-primary" type="button" @click="clickMinus(index)">
                            <span class="icon"><i class="fa fa-minus"></i> </span>
                        </button>
                    </p>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        name: 'imageSizeInput',
        props: {
            inputName: String,
            dataSize: {
                type: [Array, Object, String],
                default: ''
            }
        },
        data: () => ({
            itemData: []
        }),
        mounted() {
            let tmp = [
                {
                    width: 180,
                    height: 150
                }
            ];
            if (_.isObject(this.dataSize) || _.isArray(this.dataSize))
                tmp = this.dataSize;
            else if (this.dataSize.length > 0)
                tmp = JSON.parse(this.dataSize)

            this.itemData = tmp
        },
        methods: {
            clickPlus() {
                let tmp = _.last(this.itemData)
                this.itemData.push({width: Math.round(tmp.width * 1.777), height: Math.round(tmp.height * 1.777)})
            },
            clickMinus(index) {
                if (this.itemData.length > 1)
                    this.itemData.splice(index, 1)
            }
        }
    }
</script>