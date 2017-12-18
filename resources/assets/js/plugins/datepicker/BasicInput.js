/*
 * Copyright (c) 2017. giapdien1804@gmail.com|+841648392803
 */

export default {
    props: {
        placeholder: {
            type: String,
            default: 'Pick date'
        },
        inputClass: {
            type: [Object, Array],
            default: function () {
                return {}
            }
        },
        dataName: {
            type: String,
            default: function () {
                return ''
            }
        },
        value: String
    }
}

