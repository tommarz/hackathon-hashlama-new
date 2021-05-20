<template>
  <div class="content" dir="rtl">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header data-background-color="orange">
            <h1 class="title">פייפליין מאובטח</h1>
            <router-link to="userPage" class="category">
              <p id="team-link">נכתב על ידי - צוות ארטמיס</p>
            </router-link>
          </md-card-header>
          <md-card-content>
            <div id="typography">
              <div class="row">
                <div class="content-top">
                  <div class="tim-typo" id="motto" dir="rtl">
                    <h2>
מוצר הDevSecOps הטוב בהיסטוריה!                    </h2>
                  </div>
                  <div class="logo">
                    <!-- <p>Text</p> -->
                    <img :src="img" alt="" />
                  </div>
                </div>
                <div class="push-me-down" dir="rtl">
                  <p class="push-me-down">
פרוייקט שנותן למערכת שלך לעלות באופן מאובטח לשרת המרוחק.
<br/>
הפיפליין משתלב בסביבת אז'ור וניתן להמירו לסביבת AWS בצורה קלה.
<br/>
הפייפליין מכיל כ10 כלי אבטחה שונים שעברו בדיקות איכות על ידי הצוות.
<br/>
בניסויים נמצא כי מעל 75% מפערי האבטחה נמצאו על ידי הפייפליין, ולכ30% ניתן מענה תיקון אוטומטי.
                  </p>
                </div>
                <br/>
                <div>
                  <h4> גולשים אחרים מספרים </h4>
                  <div id="reviews">
                    <blockquote class="review" id="review-1">
                      <p>
הדבר הכי טוב מאז הבטריה של הנוט 7                    
                      </p>
                      <small>
                        ליאר מאייר
                      </small>
                    </blockquote>
                    <blockquote class="review" id="review-2">
                      <p>
הדבר הכי טוב מאז הבטריה של הנוט 9
                      </p>
                      <small>
                        שי מירון
                      </small>
                    </blockquote>
                    <!-- <blockquote class="review" id="review-3">
                      <p>
הדבר הכי טוב מאז הבטריה של הנוט 7
                      </p>
                      <small>
                        Kanye West
                      </small>
                    </blockquote> -->
                  </div>
                </div>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  data () {
    return {
      img: ""
    }
  },
  created() {
    this.img = require("@/assets/img/DevSecOps.png");
  }
};
</script>

<style scoped>
*.logo {
  width: 30%;
  float: left;
}

#motto {
  float: right;
  width: 70%;
  }


*.md-card-header, *.md-card-content {
  text-align: right;
}

*.title, #team-link {
  text-align: center;
}

#reviews {
  display: flex;
}

.push-me-down {
  float: right;
}
</style>
