<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66" v-if="!isShowProfile">
        <edit-profile-form data-background-color="green" @updateIsShowProfile="this.updateIsShowProfile">
           </edit-profile-form>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33" v-else>
        <user-card> </user-card>
      </div>
    </div>
  </div>
</template>

<script>
import { EditProfileForm, UserCard } from "@/pages";

export default {
    components: {
      EditProfileForm,
      UserCard
    },
    data() {
      return {
        isShowProfile: false,
    };
  },
  methods: {
    updateIsShowProfile() {
        this.isShowProfile = true;
    }
}
};
</script>
