<template>
  <div class="chatroom-page">
    <Loader :loading="loading" loading-text="please wait..." />
    <div class="fixed-top">
      <div class="head-section">
        <div class="view-chat-head-left">
          <div class="view-chat-head-left2">
            <a @click="$router.go(-1)">
              <div class="back-btn">
                <font-awesome-icon icon="angle-left" class="search" />
              </div>
            </a>
            <div class="head-user-title">Change Password</div>
          </div>
        </div>
        <div class="view-chat-head-right">
          <button class="edit_profile_btn" @click="saveProfile">Save</button>
        </div>
      </div>
    </div>

    <div class="settings-page-body">
      <div class="profile-picture-section2">
        <div class="text-center">
          <div class="profile_img">
            <img src="../../assets/images/user_icon.png" />
          </div>
        </div>
      </div>

      <div class="settings-categories">
          <div class="settings_title">
                    Security Settings
                </div>
        <div class="setting_category mt-1">
          
            <div class="privacy_settings">
                <div class="icon">
                    <font-awesome-icon icon="lock"/>
                </div>
                <div class="edit_user_details">
                    <input type="password" class="edit_username" placeholder="Current Password">
                </div>
            </div>
            <div class="privacy_settings">
                <div class="icon">
                    <font-awesome-icon icon="lock"/>
                </div>
                <div class="edit_user_details">
                    <input type="password" class="edit_username" placeholder="New Password">
                </div>
            </div>
            <div class="privacy_settings">
                <div class="icon">
                    <font-awesome-icon icon="lock"/>
                </div>
                <div class="edit_user_details">
                    <input type="password" class="edit_username" placeholder="Confirm Password">
                </div>
            </div>
        </div>
      </div>
    </div>

    <div class="chatroom-footer fixed-bottom">
      <router-link to="Contacts">
        <div class="chat">
          <font-awesome-icon icon="user" class="fontawesom" />
        </div>
      </router-link>
      <router-link to>
        <div class="chat">
          <font-awesome-icon icon="phone-alt" class="fontawesom" />
        </div>
      </router-link>
      <router-link to="Chatroom">
        <div class="start-chat">
          <font-awesome-icon icon="comment-alt" class="start-chat-icon" />
        </div>
      </router-link>
      <router-link to="Groupchat">
        <div class="chat">
          <font-awesome-icon icon="user-friends" class="fontawesom" />
        </div>
      </router-link>
      <router-link to="Settings">
        <div class="chat">
          <font-awesome-icon icon="ellipsis-h" class="fontawesom active1" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: "Password.vue",
  components: {
    
  },
  data() {
    return {
      
    };
  },
};
</script>


<style scoped>
a {
  text-decoration: none;
}
a:hover,
a:focus,
a:active {
  text-decoration: none;
}
.chatroom-page {
  background: #f1f1f1;
}
/* .vue-switcher{
        padding-top: 10px;
    } */
</style>