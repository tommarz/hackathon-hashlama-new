<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header data-background-color="orange">
            <h1 class="title">מוצר #1</h1>
            <router-link to="userPage" class="category">
              <p id="team-link">נכתב על ידי - צוות 10 ענף תוכנה</p>
            </router-link>
          </md-card-header>
          <md-card-content>
            <div id="typography">
              <div class="row">
                <div class="content-top">
                  <div class="tim-typo" id="motto">
                    <h2>
                      הפרוייקט שישנה את חייך
                    </h2>
                  </div>
                  <div class="logo">
                    <!-- <p>Text</p> -->
                    <img :src="img" alt="" />
                  </div>
                </div>
                <div class="tim-typo">
                  <p>
זה המוצר הכי טוב וכל מי שחושב אחרת טועה.
עוד מידע על המוצר.
עוד
עוד
עוד
עוד משהו
סוף
                  </p>
                </div>
                <div class="tim-typo">
                  <h4> גולשים אחרים מספרים </h4>
                  <div id="reviews">
                    <blockquote class="review" id="review-1">
                      <p>
הדבר הכי טוב מאז הבטריה של הנוט 7                    
                      </p>
                      <small>
                        Kanye West, 47th President of the United States
                      </small>
                    </blockquote>
                    <blockquote class="review" id="review-2">
                      <p>
הדבר הכי טוב מאז הבטריה של הנוט 7
                      </p>
                      <small>
                        Kanye West, 47th President of the United States
                      </small>
                    </blockquote>
                    <blockquote class="review" id="review-3">
                      <p>
הדבר הכי טוב מאז הבטריה של הנוט 7
                      </p>
                      <small>
                        Kanye West, 47th President of the United States
                      </small>
                    </blockquote>
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
    this.img = require("@/assets/img/vue-logo.png");
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
</style>
