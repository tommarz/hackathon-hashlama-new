<template>
  <md-toolbar md-elevation="0" class="md-transparent">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: $sidebar.showSidebar }"
          @click="toggleSidebar"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-autocomplete">
            <form novalidate class="md-layout" @submit.prevent="validateSearch">
              <md-field :class="getValidationClass('search')">
                <label for="search">חיפוש</label>
                <md-input
                  type="text"
                  name="search"
                  id="search"
                  autocomplete="search"
                  v-model="form.search"
                  :disabled="sending"
                />
              </md-field>
            </form>
          </div>
          <md-list>
            <md-list-item href="#/dashboard">
              <i class="material-icons">dashboard</i>
              <p class="hidden-lg hidden-md">Dashboard</p>
            </md-list-item>

            <!-- <md-list-item href="#/notifications" class="dropdown">
              <drop-down>
                <a slot="title" class="dropdown-toggle" data-toggle="dropdown">
                  <i class="material-icons">notifications</i>
                  <span class="notification">5</span>
                  <p class="hidden-lg hidden-md">Notifications</p>
                </a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li><a href="#">Mike John responded to your email</a></li>
                  <li><a href="#">You have 5 new tasks</a></li>
                  <li><a href="#">You're now friend with Andrew</a></li>
                  <li><a href="#">Another Notification</a></li>
                  <li><a href="#">Another One</a></li>
                </ul>
              </drop-down>
            </md-list-item> -->

            <li class="md-list-item">
              <a
                class="md-list-item-router md-list-item-container md-button-clean dropdown"
              >
                <div class="md-list-item-content">
                  <drop-down>
                    <md-button
                      slot="title"
                      class="md-button md-just-icon md-simple"
                      data-toggle="dropdown"
                    >
                      <md-icon>notifications</md-icon>
                      <span class="notification">5</span>
                      <p class="hidden-lg hidden-md">Notifications</p>
                    </md-button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li><a href="#">צוות גלובוס רוצה את מוצר הפיפליין שלך</a></li>
                      <li><a href="#">מוצרים שאולי תאהב</a></li>
                      <li><a href="#">!צוות ארטמיס העלה מוצר חדש</a></li>
                      <li><a href="#">!המוצר שלך עלה בדירוג</a></li>
                      <li><a href="#">כל הכבוד! נכנסתם לרשימת הצוותים המובילים</a></li>
                    </ul>
                  </drop-down>
                </div>
              </a>
            </li>

            <md-list-item href="#/userPage">
              <i class="material-icons">person</i>
              <p class="hidden-lg hidden-md">Profile</p>
            </md-list-item>
          </md-list>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  alpha,
} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data: () => ({
    form: {
      search: null,
    },
    searchSaved: false,
    sending: false,
    lastSearch: null,
    results: [],
  }),
  validations: {
    form: {
      search: {
        required,
        minLength: minLength(3),
        // alpha,
        maxLength: maxLength(100),
      },
    },
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty,
        };
      }
    },
    clearForm() {
      this.$v.$reset();
      this.form.search = null;
    },
    saveSearch() {
      this.sending = true;
      this.lastSearch = `${this.form.search}`;
      this.searchSaved = true;
      this.sending = false;
      this.clearForm();
      this.$router.push("feed")
    },
    validateSearch() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.saveSearch();
      }
    },
  },
};
</script>


<style lang="css"></style>
