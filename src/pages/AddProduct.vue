<template>
  <div class="add-product" dir="rtl">
    <br/>
    <form novalidate class="md-layout" @submit.prevent="validateProduct">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header class="orange-bg">
          <div class="md-title">הוסף מוצר</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('productName')">
                <label for="product-name">שם המוצר</label>
                <md-input
                  name="product-name"
                  id="product-name"
                  autocomplete="given-name"
                  v-model="form.productName"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.productName.required"
                  >The product name is required</span
                >
                <span
                  class="md-error"
                  v-else-if="!$v.form.productName.minlength"
                  >Invalid product name</span
                >
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-chips
                class="md-primary shake-on-error"
                v-model="form.domain"
                md-placeholder="תחומי עניין"
                autocomplete="תחומי עניין"
              >
              </md-chips>
              <span class="md-error" v-if="!$v.form.domain.required"> </span>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-chips
                class="md-primary shake-on-error"
                v-model="form.tech"
                md-placeholder="טכנולוגיה"
                autocomplete="Technology"
              >
              </md-chips>
              <span class="md-error" v-if="!$v.form.tech.required"> </span>
            </div>
          </div>

          <md-field :class="getValidationClass('description')">
            <label for="description">תיאור המוצר</label>
            <md-input
              type="text"
              name="description"
              id="description"
              autocomplete="description"
              v-model="form.description"
              :disabled="sending"
            />
            <span class="md-error" v-if="!$v.form.description.required"
              >The description is required</span
            >
            <span class="md-error" v-else-if="!$v.form.description.minLength"
              >Description must be longer then 3 characters</span
            >
            <span class="md-error" v-else-if="!$v.form.description.maxLength"
              >Description must be shorter then 50 characters</span
            >
            <!-- <span class="md-error" v-else-if="!$v.form.description.alpha"
              >Description must not contain numbers</span
            > -->
          </md-field>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="orange-bg" :disabled="sending"
            >הוסף מוצר</md-button
          >
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="productSaved"
        >המוצר {{ lastProduct }} נוסף בהצלחה!</md-snackbar
      >
    </form>
    <!-- <p>{{products}}</p> -->
  </div>
</template>

<script>
</script>

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
      productName: null,
      description: null,
      tech: [],
      domain: [],
    },
    productSaved: false,
    sending: false,
    lastProduct: null,
    products: [],
  }),
  validations: {
    form: {
      productName: {
        required,
        minLength: minLength(3),
      },
      description: {
        required,
        alpha,
        minLength: minLength(3),
        maxLength: maxLength(50),
      },
      tech: {
        required,
        alpha,
      },
      domain: {
        required,
        alpha,
      },
    },
  },
  methods: {
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
      this.form.productName = null;
      this.form.domain = null;
      this.form.tech = null;
      this.form.description = null;
    },
    saveProduct() {
      this.sending = true;
      this.lastProduct = `${this.form.productName}`;
      this.productSaved = true;
      this.sending = false;
      this.products.push({
        name: this.form.productName,
        tech: this.form.tech,
        domain: this.form.domain,
        description: this.form.domain,
      });
      this.clearForm();
    },
    validateProduct() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.saveProduct();
      }
    },
    created() {
      // Simple POST request with a JSON body using fetch
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: "Vue POST Request Example" }),
      };
      fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
        .then((response) => response.json())
        .then((data) => (this.postId = data.id));
    },
  },
};
</script>

<style scoped>
.orange-bg {
  background-color: orange !important;
}
.md-progress-bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
.add-product {
  align-content: center;
}
.md-layout-item {
  /* align-content: center; */
  margin: auto;
}
.md-title {
  align-content: center;
  align-self: center;
  align-items: center;
}
.md-card {
  text-align: center;
}
.md-button {
  margin: right;
  align-content: center;
  align-self: center;
  align-content: center;
  align-items: center;
}
.md-ripple {
  margin: right;
  align-self: center;
  align-content: center;
  align-items: center;
}
</style>




<style scoped>
.shake-on-error /deep/ .md-duplicated {
  animation-name: shake;
  animation-duration: 0.5s;
}

@keyframes shake {
  0% {
    transform: translate(15px);
  }
  20% {
    transform: translate(-15px);
  }
  40% {
    transform: translate(7px);
  }
  60% {
    transform: translate(-7px);
  }
  80% {
    transform: translate(3px);
  }
  100% {
    transform: translate(0px);
  }
}
</style>

<style lang="css" scoped>
.pulse-on-error >>> .md-duplicated {
  animation-name: pulse;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
}

@keyframes pulse {
  0% {
    transform: scale(1.1, 1.1);
  }
  100% {
    transform: scale(0.9, 0.9);
  }
}
</style>