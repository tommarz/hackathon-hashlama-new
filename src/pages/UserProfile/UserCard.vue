<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="cardUserImage" />
    </div>

    <md-card-content>
      <h6 class="category text-gray">מצפ"ן</h6>
      <h4 class="card-title">צוות ארטמיס</h4>
      <p class="card-description">
        עוסקים בעבודה חשובה מאוד מאוד שעוזרת לביטחון המדינה. אנחנו אוהבים מאוד את תחום הפיתוח המאובטח ונהנים לקחת מוצרים באמצעות הפלטפורמה הנהדרת החדשה בשם שף
      </p>
      <h5 class="card-title"> שם ראש הצוות: שי מירון</h5>
      <h4 class="card-title"> טלפון אזרחי: 052-442-3000</h4>
      <label>תחומי עניין</label>
      <div class="md-layout md-gutter">
    <div class="md-layout-item md-size-20"></div>
    <div class="md-layout-item"><md-chips v-model="fruits" md-static></md-chips></div>
    <div class="md-layout-item md-size-20"></div>
  </div>
       
      <md-button class="md-round md-warning">עקוב</md-button>
    </md-card-content>
  </md-card>
</template>
<script>
export default {
  name: "user-card",
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/Artemis.jpg")
    }
  },
  data() {
    return { fruits: [
      'DevSecOps',
      'Cloud',
      'Fullstack',
      'Machine Learning'
    ],};
  }
};
</script>
<style scoped>
</style>>
