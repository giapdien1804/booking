<template>
    <div>
        <button class="button is-fullwidth" type="button" @click="toggleModal">Các tiện nghi</button>
        <div :class="{modal:true,'is-active':showModal}">
            <div class="modal-background"></div>
            <div class="modal-content column is-11 bg-white" style="overflow-y: scroll;min-height: 500px">
                <input type="hidden" value="hotel_amenity" name="key">
                <input type="hidden" value="hotel" name="module">
                <div class="columns is-multiline">
                    <div class="column is-3" v-for="(item,index) in dataList">
                        <div class="field has-addons">
                            <div class="control">
                                <icon-select :disable="!editModel"
                                             :data-name="`value[icon][${index}]`"
                                             v-model="item.icon"/>
                            </div>
                            <div class="control is-expanded">
                                <input type="text" v-model="item.title"
                                       :name="`value[title][${index}]`"
                                       @keyup.enter.prevent="focusToSubTitle(index)"
                                       :class="`input is-fullwidth am-value-input-${index}`"
                                       :disabled="!editModel"
                                       placeholder="Title"/>
                            </div>
                            <div class="control">
                                <button class="button" @click="addValue" :disabled="!editModel"
                                        v-if="index === Object.keys(dataList).length - 1">
                                    <span class="icon"><i class="fa fa-plus"></i> </span>
                                </button>
                                <button class="button" @click="removeValue(index)"
                                        :disabled="!editModel" v-else>
                                    <span class="icon"><i class="fa fa-minus"></i> </span>
                                </button>
                            </div>
                        </div>
                        <div class="field has-addons" v-for="(sub,no) in item.sub">
                            <div class="control is-expanded">
                                <input type="text" v-model="sub.title"
                                       :disabled="!editModel"
                                       :name="`value[sub][${index}][${no}]`"
                                       @keyup.enter.prevent="addSub(index)"
                                       :class="`input is-small is-fullwidth am-sub-input-${index}-${no}`"
                                       placeholder="Tiện ích mới">
                            </div>
                            <div class="control">
                                <button type="button" :disabled="!editModel"
                                        v-if="no === Object.keys(item.sub).length - 1"
                                        class="button is-small" @click="addSub(index)">
                                    <span class="icon"><i class="fa fa-plus-circle"></i> </span>
                                </button>
                                <button type="button" class="button is-small"
                                        :disabled="!editModel"
                                        @click="removeSub(index, no)" v-else>
                                    <span class="icon"><i class="fa fa-remove"></i> </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="buttons is-centered">
                    <button type="button" class="button is-danger" @click="editModel = !editModel">
                        <span class="icon"><i
                                :class="{fa:true, 'fa-unlock':editModel,'fa-lock':!editModel}"></i> </span>
                    </button>
                    <button type="button" class="button is-success" @click="saveData" v-if="editModel">
                        <span class="icon"><i class="fa fa-save"></i> </span>
                    </button>
                </div>
            </div>
            <button type="button" @click="toggleModal"
                    class="modal-close is-large" aria-label="close"></button>
        </div>
    </div>
</template>

<script>
    import IconSelect from "../../../plugins/dropdown/IconSelect";

    export default {
        components: {IconSelect},
        name: "hotel-amenity",
        data: function () {
            return {
                showModal: false,
                dataList: [
                    {
                        title: '',
                        icon: 'fa-star',
                        sub: [{title: ''}]
                    }
                ],
                editModel: false
            }
        },
        methods: {
            toggleModal() {
                this.showModal = !this.showModal
            },
            addSub(index) {
                this.dataList[index].sub.push({
                    title: ''
                });

                this.$nextTick(() => {
                    let sub_length = _.size(this.dataList[index].sub);
                    let el = this.$el.querySelector(`.am-sub-input-${index}-${sub_length - 1}`);
                    if (el) el.focus();
                })
            },
            addValue() {
                this.dataList.push({
                        title: '',
                        icon: 'fa-star',
                        sub: [{title: ''}]
                    }
                );
            },
            removeValue(index) {
                this.$nextTick(() => {
                    this.$delete(this.dataList, index);
                })

            },
            removeSub(value_index, index) {
                this.$nextTick(() => {
                    this.$delete(this.dataList[value_index].sub, index)
                })
            },
            saveData() {

            }

        }
    }
</script>