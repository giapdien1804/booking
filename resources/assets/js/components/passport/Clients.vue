<template>
    <section class="hero">
        <div class="hero-body">
            <h1 class="title">
                OAuth Clients
            </h1>
            <h2 class="subtitle">
                <a class="button is-small is-primary" @click="showCreateClientForm">
                    Create New Client
                </a>
                <a class="button is-small is-success" href="/security/api/access-token">
                    Personal Access Tokens
                </a>
            </h2>
            <p class="m-b-none" v-if="clients.length === 0">
                You have not created any OAuth clients.
            </p>
            <table class="table is-bordered is-fullwidth" v-if="clients.length > 0">
                <thead>
                <tr>
                    <th>Client ID</th>
                    <th>Name</th>
                    <th>Secret</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                <tr v-for="client in clients">
                    <!-- ID -->
                    <td style="vertical-align: middle;">
                        {{ client.id }}
                    </td>

                    <!-- Name -->
                    <td style="vertical-align: middle;">
                        {{ client.name }}
                    </td>

                    <!-- Secret -->
                    <td style="vertical-align: middle;">
                        <code>{{ client.secret }}</code>
                    </td>

                    <!-- Edit Button -->
                    <td style="vertical-align: middle;">
                        <a class="action-link" @click="edit(client)">
                            <span class="icon"><i class="fa fa-edit"></i> </span>
                        </a>
                    </td>

                    <!-- Delete Button -->
                    <td style="vertical-align: middle;">
                        <a class="action-link text-danger" @click="destroy(client)">
                            <span class="icon"><i class="fa fa-trash"></i> </span>
                        </a>
                    </td>
                </tr>
                </tbody>
            </table>
            <!-- Create Client Modal -->
            <div class="modal is-active" id="modal-create-client" v-if="showCreate">
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Create client</p>
                        <button class="delete" aria-label="close" @click.prevent="showCreate = false"></button>
                    </header>
                    <section class="modal-card-body">
                        <!-- Form Errors -->
                        <div class="alert alert-danger" v-if="createForm.errors.length > 0">
                            <p><strong>Whoops!</strong> Something went wrong!</p>
                            <br>
                            <ul>
                                <li v-for="error in createForm.errors">
                                    {{ error }}
                                </li>
                            </ul>
                        </div>

                        <!-- Create Client Form -->
                        <form class="form-horizontal" role="form">
                            <!-- Name -->
                            <div class="field">
                                <label class="label">Name</label>

                                <div class="control">
                                    <input id="create-client-name" type="text" class="input"
                                           @keyup.enter="store" v-model="createForm.name">
                                </div>
                                <p class="help is-info">
                                    Something your users will recognize and trust.
                                </p>
                            </div>

                            <!-- Redirect URL -->
                            <div class="field">
                                <label class="label">Redirect URL</label>

                                <div class="control">
                                    <input type="text" class="input" name="redirect"
                                           @keyup.enter="store" v-model="createForm.redirect">
                                </div>
                                <p class="help is-info">
                                    Your application's authorization callback URL.
                                </p>
                            </div>
                        </form>
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button is-success" @click.prevent="store">Save changes</button>
                        <button class="button" @click.prevent="showCreate = false">Cancel</button>
                    </footer>
                </div>
            </div>

            <!-- Edit Client Modal -->
            <div class="modal" id="modal-edit-client" v-if="showEdit">
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Edit client</p>
                        <button class="delete" aria-label="close" @click.prevent="showEdit = false"></button>
                    </header>
                    <section class="modal-card-body">
                        <!-- Form Errors -->
                        <div class="alert alert-danger" v-if="editForm.errors.length > 0">
                            <p><strong>Whoops!</strong> Something went wrong!</p>
                            <br>
                            <ul>
                                <li v-for="error in editForm.errors">
                                    {{ error }}
                                </li>
                            </ul>
                        </div>

                        <!-- Edit Client Form -->
                        <form class="form-horizontal" role="form">
                            <!-- Name -->
                            <div class="field">
                                <label class="label">Name</label>

                                <div class="control">
                                    <input id="edit-client-name" type="text" class="input"
                                           @keyup.enter="update" v-model="editForm.name">
                                </div>
                                <p class="help is-info">
                                    Something your users will recognize and trust.
                                </p>
                            </div>

                            <!-- Redirect URL -->
                            <div class="field">
                                <label class="label">Redirect URL</label>

                                <div class="control">
                                    <input type="text" class="input" name="redirect"
                                           @keyup.enter="update" v-model="editForm.redirect">
                                </div>
                                <p class="help is-info">
                                    Your application's authorization callback URL.
                                </p>
                            </div>
                        </form>
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button is-success" @click.prevent="update">Save changes</button>
                        <button class="button" @click.prevent="showEdit = false">Cancel</button>
                    </footer>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  export default {
  name:'passportClients',
    data () {
      return {
        clients: [],
        showCreate: false,
        showEdit: false,
        createForm: {
          errors: [],
          name: '',
          redirect: ''
        },

        editForm: {
          errors: [],
          name: '',
          redirect: ''
        }
      }
    },

    /**
     * Prepare the component (Vue 1.x).
     */
    ready () {
      this.prepareComponent()
    },

    /**
     * Prepare the component (Vue 2.x).
     */
    mounted () {
      this.prepareComponent()
    },

    methods: {
      /**
       * Prepare the component.
       */
      prepareComponent () {
        this.getClients()
        if (this.showCreate)
          this.$el.querySelector('#create-client-name').focus()

        if (this.showEdit)
          this.$el.querySelector('#edit-client-name').focus()

      },

      /**
       * Get all of the OAuth clients for the user.
       */
      getClients () {
        axios.get('/oauth/clients')
          .then(response => {
            this.clients = response.data
          })
      },

      /**
       * Show the form for creating new clients.
       */
      showCreateClientForm () {
        this.showCreate = true
      },

      /**
       * Create a new OAuth client for the user.
       */
      store () {
        this.persistClient(
          'post', '/oauth/clients',
          this.createForm, '#modal-create-client'
        )
      },

      /**
       * Edit the given client.
       */
      edit (client) {
        this.editForm.id = client.id
        this.editForm.name = client.name
        this.editForm.redirect = client.redirect

        this.showEdit = true
      },

      /**
       * Update the client being edited.
       */
      update () {
        this.persistClient(
          'put', '/oauth/clients/' + this.editForm.id,
          this.editForm, '#modal-edit-client'
        )
      },

      /**
       * Persist the client to storage using the given form.
       */
      persistClient (method, uri, form, modal) {
        form.errors = []

        axios[ method ](uri, form)
          .then(response => {
            this.getClients()

            form.name = ''
            form.redirect = ''
            form.errors = []

            $(modal).modal('hide')
          })
          .catch(error => {
            if (typeof error.response.data === 'object') {
              form.errors = _.flatten(_.toArray(error.response.data))
            } else {
              form.errors = [ 'Something went wrong. Please try again.' ]
            }
          })
      },

      /**
       * Destroy the given client.
       */
      destroy (client) {
        window.Message({
          title: 'Confirm ?',
          message: 'You want to delete the client ?',
          type: 'danger',
          onConfirm: () => {
            axios.delete('/oauth/clients/' + client.id)
              .then(response => {
                this.getClients()
              })
          }
        })

      }
    }
  }
</script>
