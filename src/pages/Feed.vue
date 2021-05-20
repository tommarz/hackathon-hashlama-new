<template>
  <div class="md-layout md-gutter" dir="rtl">
    <div class="md-layout-item">
    <md-card class="md-success" md-with-hover>
      <md-ripple>
        <md-card-header class="orangeBackground">
          <div class="md-layout md-gutter">
<div class="md-layout-item md-size-55" >
          <div class="md-title">פייפליין מאובטח</div>
          <div class="md-subhead">DevSecOps</div>
</div>
    <div class="md-layout-item"></div>

          <div class="md-card-avatar md-layout-item md-size-35">
            <img class="img" :src="devsecops" />
          </div>
            </div>
          
        </md-card-header>

        <md-card-content>
          פרוייקט שנותן למערכת שלך לעלות באופן מאובטח לשרת המרוחק
        </md-card-content>

        <md-card-actions dir="ltr">
          <md-button>קרא עוד</md-button>
          <md-button @click="$router.push('/product')">
            הרחב מוצר
            </md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
    </div>
    <div class="md-layout-item">
    <md-card class="md-accent" md-theme="green-card" md-with-hover>
      <md-ripple>
        <md-card-header class="orangeBackground">
          <div class="md-layout md-gutter">
<div class="md-layout-item md-size-60" >
          <div class="md-title">סקריפט קומפילציה</div>
          <div class="md-subhead">Automation</div>
</div>
    <div class="md-layout-item"></div>

          <div class="md-card-avatar md-layout-item md-size-30">
            <img class="img" :src="build" />
          </div>
            </div>
          
        </md-card-header>

        <md-card-content>
          סקריפט שמאפשר יכולות קימפול בצורה נוחה עם ממשק פייתון פשוט וקריא
        </md-card-content>

        <md-card-actions dir="ltr">
          <md-button>קרא עוד</md-button>
          <md-button @click="$router.push('/product')">הרחב מוצר</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
    </div>
    <div class="md-layout-item">
    <md-card class="md-accent" md-theme="green-card" md-with-hover>
      <md-ripple>
        <md-card-header class="orangeBackground">
          <div class="md-layout md-gutter">
<div class="md-layout-item md-size-60" >
          <div class="md-title">מערכת לניהול תלויות</div>
          <div class="md-subhead">DevTools</div>
</div>
    <div class="md-layout-item"></div>

          <div class="md-card-avatar md-layout-item md-size-30">
            <img class="img" :src="deps" />
          </div>
            </div>
          
        </md-card-header>

        <md-card-content>
כלי למשיכת תלויות ומעקב אחרי גרסאות על ידי שימוש בגיט
        </md-card-content>

        <md-card-actions dir="ltr">
          <md-button>קרא עוד</md-button>
          <md-button @click="$router.push('/product')">הרחב מוצר</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
    </div>
    <div class="md-layout-item">
    <md-card class="md-accent" md-theme="green-card" md-with-hover>
      <md-ripple>
        <md-card-header class="orangeBackground">
          <div class="md-layout md-gutter">
<div class="md-layout-item md-size-50" >
         <div class="md-title">פלטפורמת לחוקרי נתונים</div>
          <div class="md-subhead">Data science</div>
</div>
    <div class="md-layout-item"></div>
    <div class="md-layout-item"></div>

          <div class="md-card-avatar md-layout-item md-size-20">
            <img class="img" :src="bigdata" />
          </div>
            </div>
          
        </md-card-header>

        <md-card-content>
          שירות אשר מספק פלטפורמה לחוקרי נתונים בה הם יכולים לאסוף, לנתח ולעבד נתונים שונים. בנוסף יינתן שירות לבניית מודלים חישוביים
        </md-card-content>

        <md-card-actions dir="ltr">
          <md-button>קרא עוד</md-button>
          <md-button @click="$router.push('/product')">הרחב מוצר</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
    </div>
    <div class="md-layout-item">
    <md-card class="md-primary" md-theme="green-card" md-with-hover>
      <md-ripple>
        <md-card-header class="orangeBackground">
            <div class="md-layout md-gutter">
<div class="md-layout-item md-size-50" >
          <div class="md-title ">התחברות מרחוק</div>
          <div class="md-subhead">Collaboration</div>
</div>
    <div class="md-layout-item"></div>
    <div class="md-layout-item"></div>

          <div class="md-card-avatar md-layout-item md-size-20">
            <img class="img" :src="remote" />
          </div>
            </div>
        </md-card-header>

        <md-card-content>
          מאפשר התחברות מרחוק למחשבים אחרים על פי שם בעל המחשב ללא צורך בIP מוגדר
        </md-card-content>

        <md-card-actions dir="ltr">
          <md-button>קרא עוד</md-button>
          <md-button @click="$router.push('/product')">הרחב מוצר</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThemeColors',
    props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/Artemis.jpg")
    },
    devsecops: {
      type: String,
      default: require("@/assets/img/DevSecOps.png")
    },
    build: {
      type: String,
      default: require("@/assets/img/build.png")
    },
    deps: {
      type: String,
      default: require("@/assets/img/depss.png")
    },
    bigdata: {
      type: String,
      default: require("@/assets/img/bigdata.jpg")
    },
    remote: {
      type: String,
      default: require("@/assets/img/remote.png")
    },

  },
}
</script>

<style scoped>
.orangeBackground {
  background-color: orange !important;
}

.img {
  width: 80px;
  align-content: center;
}
</style>