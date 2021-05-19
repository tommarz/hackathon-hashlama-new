<template>
  <form>
    <md-card dir="rtl">
      <md-card-header data-background-color="orange">
        <h4 class="title">פרופיל צוות</h4>
        <p class="category">בואו נתחיל לבנות את הפרופיל שלכם</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>שם צוות</label>
              <md-input v-model="username" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>שם יחידה</label>
              <md-input v-model="emailadress" type="email"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
      <label>תיאור עשיית הצוות</label>
      <md-textarea v-model="textarea"></md-textarea>
    </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>שם ראש הצוות</label>
              <md-input v-model="city" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>שם משפחת ראש הצוות</label>
              <md-input v-model="country" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>טלפון אזרחי</label>
              <md-input v-model="code" type="number"></md-input>
            </md-field>
          </div>
          <md-chips v-model="fruits" md-placeholder="תחומי עניין"></md-chips>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-warning" @click="this.handleClick">!זהו נגמר</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
export default {
  name: "edit-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      fruits: [
      'DevSecOps',
      'Cloud',
    ],
      username: null,
      disabled: null,
      emailadress: null,
      lastname: null,
      firstname: null,
      address: null,
      city: null,
      country: null,
      code: null,
      aboutme:
        "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
    };
  },
  methods: {
    handleClick() {
      this.$emit('updateIsShowProfile');    
}
  }
};
</script>
<style>
</style>
