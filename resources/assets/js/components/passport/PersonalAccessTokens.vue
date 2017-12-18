<template>
    <section class="hero">
        <div class="hero-body">
            <h1 class="title">
                Personal Access Tokens
            </h1>
            <h2 class="subtitle">
                <a class="button is-primary is-small" @click="showCreateTokenForm">
                    Create New Token
                </a>
                <a class="button is-small is-success" href="/security/api/client">
                    Clients
                </a>
            </h2>
            <p class="m-b-none" v-if="tokens.length === 0">
                You have not created any personal access tokens.
            </p>
            <table class="table is-bordered is-fullwidth" v-if="tokens.length > 0">
                <thead>
                <tr>
                    <th>Name</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                <tr v-for="token in tokens">
                    <!-- Client Name -->
                    <td style="vertical-align: middle;">
                        {{ token.name }}
                    </td>

                    <!-- Delete Button -->
                    <td style="vertical-align: middle;">
                        <a class="has-text-danger" @click="revoke(token)">
                            Delete
                        </a>
                    </td>
                </tr>
                </tbody>
            </table>

            <!-- Create Token Modal -->
            <div class="modal is-active" id="modal-create-token" v-if="showCreate">
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Create Token</p>
                        <button class="delete" aria-label="close" @click.prevent="showCreate = false"></button>
                    </header>
                    <section class="modal-card-body">
                        <!-- Form Errors -->
                        <div class="alert alert-danger" v-if="form.errors.length > 0">
                            <p><strong>Whoops!</strong> Something went wrong!</p>
                            <br>
                            <ul>
                                <li v-for="error in form.errors">
                                    {{ error }}
                                </li>
                            </ul>
                        </div>

                        <!-- Create Token Form -->
                        <form class="form-horizontal" role="form" @submit.prevent="store">
                            <!-- Name -->
                            <div class="field">
                                <label class="label">Name</label>

                                <div class="control">
                                    <input id="create-token-name" type="text" class="input" name="name"
                                           v-model="form.name">
                                </div>
                            </div>

                            <!-- Scopes -->
                            <div class="form-group" v-if="scopes.length > 0">
                                <label class="label">Scopes</label>

                                <div class="control">
                                    <div v-for="scope in scopes">
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox"
                                                       @click="toggleScope(scope.id)"
                                                       :checked="scopeIsAssigned(scope.id)">

                                                {{ scope.id }}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button is-success" @click.prevent="store">Save changes</button>
                        <button class="button" @click.prevent="showCreate = false">Cancel</button>
                    </footer>
                </div>
            </div>

            <!-- Access Token Modal -->
            <div class="modal is-active" id="modal-access-token" v-if="showAccess">
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Personal Access Token</p>
                        <button class="delete" aria-label="close" @click.prevent="showAccess = false"></button>
                    </header>
                    <section class="modal-card-body">
                        <p>
                            Here is your new personal access token. This is the only time it will be shown so don't lose it!
                            You may now use this token to make API requests.
                        </p>

                        <pre><code>{{ accessToken }}</code></pre>
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button" @click.prevent="showAccess = false">Cancel</button>
                    </footer>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'passportPersonalAccessTokens',
        /*
         * The component's data.
         */
        data() {
            return {
                accessToken: null,
                showCreate: false,
                showAccess: false,
                tokens: [],
                scopes: [],

                form: {
                    name: '',
                    scopes: [],
                    errors: []
                }
            }
        },

        /**
         * Prepare the component (Vue 1.x).
         */
        ready() {
            this.prepareComponent()
        },

        /**
         * Prepare the component (Vue 2.x).
         */
        mounted() {
            this.prepareComponent()
        },

        methods: {
            /**
             * Prepare the component.
             */
            prepareComponent() {
                this.getTokens()
                this.getScopes()

                if (this.showCreate)
                    this.$el.querySelector('#create-token-name').focus()
            },

            /**
             * Get all of the personal access tokens for the user.
             */
            getTokens() {
                axios.get('/oauth/personal-access-tokens')
                    .then(response => {
                        this.tokens = response.data
                    })
            },

            /**
             * Get all of the available scopes.
             */
            getScopes() {
                axios.get('/oauth/scopes')
                    .then(response => {
                        this.scopes = response.data
                    })
            },

            /**
             * Show the form for creating new tokens.
             */
            showCreateTokenForm() {
                this.showCreate = true
            },

            /**
             * Create a new personal access token.
             */
            store() {
                this.accessToken = null

                this.form.errors = []

                axios.post('/oauth/personal-access-tokens', this.form)
                    .then(response => {
                        this.form.name = ''
                        this.form.scopes = []
                        this.form.errors = []

                        this.tokens.push(response.data.token)

                        this.showAccessToken(response.data.accessToken)
                    })
                    .catch(error => {
                        if (typeof error.response.data === 'object') {
                            this.form.errors = _.flatten(_.toArray(error.response.data))
                        } else {
                            this.form.errors = ['Something went wrong. Please try again.']
                        }
                    })
            },

            /**
             * Toggle the given scope in the list of assigned scopes.
             */
            toggleScope(scope) {
                if (this.scopeIsAssigned(scope)) {
                    this.form.scopes = _.reject(this.form.scopes, s => s == scope)
                } else {
                    this.form.scopes.push(scope)
                }
            },

            /**
             * Determine if the given scope has been assigned to the token.
             */
            scopeIsAssigned(scope) {
                return _.indexOf(this.form.scopes, scope) >= 0
            },

            /**
             * Show the given access token to the user.
             */
            showAccessToken(accessToken) {
                this.accessToken = accessToken

                this.showAccess = true
            },

            /**
             * Revoke the given token.
             */
            revoke(token) {
                axios.delete('/oauth/personal-access-tokens/' + token.id)
                    .then(response => {
                        this.getTokens()
                    })
            }
        }
    }
</script>
