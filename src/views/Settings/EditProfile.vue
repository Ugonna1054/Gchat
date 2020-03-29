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
            <div class="head-user-title">Edit Profile</div>
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
            <div class="user_profile_img_upload">
                    <!-- slot for parent component to activate the file changer -->    
                    <div @click="launchFilePicker()">      
                        <slot name="activator"></slot>    
                    </div>
                        <!-- image input: style is set to hidden and assigned a ref so that it can be triggered -->    <input type="file"       ref="file"       :name="uploadFieldName"       @change="onFileChange(          $event.target.name, $event.target.files)"       style="display:none">
                            <!-- error dialog displays any potential errors -->    <v-dialog v-model="errorDialog" max-width="300">      <v-card>        <v-card-text class="subheading">{{errorText}}</v-card-text>        <v-card-actions>          <v-spacer></v-spacer>          <v-btn @click="errorDialog = false" flat>Got it!</v-btn>        </v-card-actions>      </v-card>    </v-dialog>


            </div>
            <!-- <vue-image-chooser name="image-chooser" @change="uploadFile" :progress="progress" :error="error"/>
                        <div class="upload_user_image">
                            <div class="continue-button" v-if="!image">
                                <input type="file" @change="onFileChange"/>
                                <div><image-picker></image-picker></div>
                                    <button class="continue-btn" >UPLOAD</button>
                            </div>
                            <div v-else>
                                <img :src="image" />
                                    <button @click="removeImage">Remove image</button>
                            </div>
            </div>-->
          </div>
        </div>
      </div>

      <div class="settings-categories">
        <div class="setting_category mt-1">
          <div class="privacy_settings">
            <div class="icon">
              <font-awesome-icon icon="user" />
            </div>
            <div class="edit_user_details">
              <input type="text" class="edit_username" v-model="username" value="George Okezie" />
            </div>
          </div>
          <div class="privacy_settings">
            <div class="icon">
              <font-awesome-icon icon="user-alt" />
            </div>
            <div class="edit_user_details">
              <input
                type="text"
                class="edit_username"
                v-model="about"
                placeholder="What's so good about yourself"
              />
            </div>
          </div>
          <div class="privacy_settings">
            <div class="icon">
              <font-awesome-icon icon="phone-alt" />
            </div>
            <div class="edit_user_details">
              <input type="tel" class="edit_username" v-model="phone" value="08083871580" />
            </div>
          </div>
          <div class="privacy_settings">
            <div class="icon">
              <font-awesome-icon icon="envelope" />
            </div>
            <div class="edit_user_details">
              <input type="email" class="edit_username" v-model="email" value="email@email.com" />
            </div>
          </div>
          <div class="privacy_settings">
            <div class="icon">
              <font-awesome-icon icon="school" />
            </div>
            <div class="edit_user_details">
              <input type="text" class="edit_username" v-model="school" value="University of Lagos" />
            </div>
          </div>
          <div class="privacy_settings">
            <div class="icon">
              <font-awesome-icon icon="book-reader" />
            </div>
            <div class="edit_user_details">
              <input
                type="text"
                class="edit_username"
                v-model="department"
                value="Computer Science"
              />
            </div>
          </div>
          <div class="privacy_settings">
            <div class="icon">
              <font-awesome-icon icon="flag" />
            </div>
            <div class="edit_user_details">
              <country-select
                v-model="country"
                :country="country"
                topCountry="NG"
                class="edit_username"
              />
            </div>
          </div>
          <div class="privacy_settings">
            <div class="icon">
              <font-awesome-icon icon="flag" />
            </div>
            <div class="edit_user_details">
              <region-select
                v-model="region"
                :country="country"
                :region="region"
                class="edit_username"
              />
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
      <router-link to="Call">
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
import { mapState } from "vuex";
import Loader from "../../utils/vue-loader/loader.vue";
import { userService } from "../../services/user.services";
// import ImagePicker from 'vue-image-picker'

export default {
  name: "EditProfile.vue",
  components: {
    Loader
    // 'image-picker': ImagePicker,
  },
  data() {
    return {
      // switches: true,
      enabled: false,
      loading: false,
      errorDialog: null,      errorText: '',      uploadFieldName: 'file',      maxSize: 1024
    };
  },
      props: {          // Use "value" here to enable compatibility with v-model      value: Object,    
      },

  computed: {
    ...mapState({
      USER: state => state.User.USER_DATA,
      token: state => state.User.AUTH_TOKEN
    }),
    username: {
      get() {
        return this.USER.username;
      },
      set(value) {
        this.USER.username = value;
      }
    },
    about: {
      get() {
        return this.USER.about;
      },
      set(value) {
        this.USER.about = value;
      }
    },
    email: {
      get() {
        return this.USER.email;
      },
      set(value) {
        this.USER.email = value;
      }
    },
    phone: {
      get() {
        return this.USER.phone;
      },
      set(value) {
        this.USER.phone = value;
      }
    },
    school: {
      get() {
        return this.USER.school;
      },
      set(value) {
        this.USER.school = value;
      }
    },
    department: {
      get() {
        return this.USER.department;
      },
      set(value) {
        this.USER.department = value;
      }
    },
    country: {
      get() {
        return this.USER.country;
      },
      set(value) {
        this.USER.country = value;
      }
    },
    region: {
      get() {
        return this.USER.region;
      },
      set(value) {
        this.USER.region = value;
      }
    }
  },
  methods: {
    async saveProfile() {
      this.loading = true;
      await userService
        .UpdateProfile({
          country: this.country,
          region: this.region,
          school: this.school,
          department: this.department,
          username: this.username,
          phone: this.phone,
          about: this.about,
          email: this.email
        })
        .then(async () => {
          await this.$store
            .dispatch("AUTHORISE_USER", this.token)
            .then(() => this.$toastr.s("Updated Successfully"));
        })
        .catch(err => {
          this.$toastr.e(err.message || err, "Registration Failed");
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
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