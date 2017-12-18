<!--suppress JSUnusedGlobalSymbols -->
<template>
    <table class="table is-narrow is-striped is-fullwidth">
        <thead>
        <tr>
            <th>Level</th>
            <th>Context</th>
            <th>Date</th>
            <th>Content</th>
        </tr>
        </thead>
        <tbody>
        <template v-if="Object.keys(logData).length >0">
            <tr v-for="(log,index) in logData">
                <td :class="`has-text-${log.level_class}`">
                                <span class="icon">
                                    <i :class="`fa fa-${log.level_img}`"></i>
                                </span>
                    &nbsp;{{log.level}}
                </td>
                <td class="text">{{log.context}}</td>
                <td class="date">{{log.date}}</td>
                <td class="text">
                    <a class="is-pulled-right" @click="viewStack(index)">
            <span class="icon">
                <i class="fa fa-eye"></i>
            </span>
                    </a>
                    {{log.text}}
                    <br/>{{log.file}}
                    <div :class="`log-stack-${index} is-hidden`" v-html="log.stack"></div>
                </td>
            </tr>
        </template>

        </tbody>
    </table>
</template>
<script>
    export default {
        data: () => {
            return {
                isShow: false,
                logData: []
            }
        },
        mounted() {
            let currentUrl = new URL(window.location.href);
            axios.get('/system/logs', {params: {view: true, l: currentUrl.searchParams.get('l')}}).then((res) => {
                this.logData = res.data;
            })
        },
        methods: {
            viewStack(index) {
                this.$el.querySelector('.log-stack-' + index).classList.toggle('is-hidden');
            }
        }
    }
</script>