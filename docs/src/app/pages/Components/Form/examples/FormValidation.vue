<template>
  <div>
    <form
      novalidate
      class="md-layout"
      @submit.prevent="validateUser"
    >
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">
            Users
          </div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('firstName')">
                <label for="first-name">First Name</label>
                <md-input
                  id="first-name"
                  v-model="form.firstName"
                  name="first-name"
                  autocomplete="given-name"
                  :disabled="sending"
                />
                <span
                  v-if="!$v.form.firstName.required"
                  class="md-error"
                >The first name is required</span>
                <span
                  v-else-if="!$v.form.firstName.minlength"
                  class="md-error"
                >Invalid first name</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('lastName')">
                <label for="last-name">Last Name</label>
                <md-input
                  id="last-name"
                  v-model="form.lastName"
                  name="last-name"
                  autocomplete="family-name"
                  :disabled="sending"
                />
                <span
                  v-if="!$v.form.lastName.required"
                  class="md-error"
                >The last name is required</span>
                <span
                  v-else-if="!$v.form.lastName.minlength"
                  class="md-error"
                >Invalid last name</span>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('gender')">
                <label for="gender">Gender</label>
                <md-select
                  id="gender"
                  v-model="form.gender"
                  name="gender"
                  md-dense
                  :disabled="sending"
                >
                  <md-option />
                  <md-option value="M">
                    M
                  </md-option>
                  <md-option value="F">
                    F
                  </md-option>
                </md-select>
                <span class="md-error">The gender is required</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('age')">
                <label for="age">Age</label>
                <md-input
                  id="age"
                  v-model="form.age"
                  type="number"
                  name="age"
                  autocomplete="age"
                  :disabled="sending"
                />
                <span
                  v-if="!$v.form.age.required"
                  class="md-error"
                >The age is required</span>
                <span
                  v-else-if="!$v.form.age.maxlength"
                  class="md-error"
                >Invalid age</span>
              </md-field>
            </div>
          </div>

          <md-field :class="getValidationClass('email')">
            <label for="email">Email</label>
            <md-input
              id="email"
              v-model="form.email"
              type="email"
              name="email"
              autocomplete="email"
              :disabled="sending"
            />
            <span
              v-if="!$v.form.email.required"
              class="md-error"
            >The email is required</span>
            <span
              v-else-if="!$v.form.email.email"
              class="md-error"
            >Invalid email</span>
          </md-field>
        </md-card-content>

        <md-progress-bar
          v-if="sending"
          md-mode="indeterminate"
        />

        <md-card-actions>
          <md-button
            type="submit"
            class="md-primary"
            :disabled="sending"
          >
            Create user
          </md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar v-model:md-active="userSaved">
        The user {{ lastUser }} was saved with success!
      </md-snackbar>
    </form>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'

  export default {
    name: 'FormValidation',
    mixins: [validationMixin],
    data: () => ({
      form: {
        firstName: null,
        lastName: null,
        gender: null,
        age: null,
        email: null,
      },
      userSaved: false,
      sending: false,
      lastUser: null
    }),
    validations: {
      form: {
        firstName: {
          required,
          minLength: minLength(3)
        },
        lastName: {
          required,
          minLength: minLength(3)
        },
        age: {
          required,
          maxLength: maxLength(3)
        },
        gender: {
          required
        },
        email: {
          required,
          email
        }
      }
    },
    methods: {
      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm () {
        this.$v.$reset()
        this.form.firstName = null
        this.form.lastName = null
        this.form.age = null
        this.form.gender = null
        this.form.email = null
      },
      saveUser () {
        this.sending = true

        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          this.lastUser = `${this.form.firstName} ${this.form.lastName}`
          this.userSaved = true
          this.sending = false
          this.clearForm()
        }, 1500)
      },
      validateUser () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.saveUser()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
</style>
