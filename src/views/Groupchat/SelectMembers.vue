<template>
  <div class="chatroom-page">
    <div class="fixed-top">
         <Loader :loading="loading" loading-text="please wait..." />
      <div class="head-section">
        <div class="view-chat-head-left">
          <div class="view-chat-head-left2">
            <a @click="$router.go(-1)">
              <div class="back-btn">
                <font-awesome-icon icon="angle-left" class="search" />
              </div>
            </a>
            <div class="head-user-title">Select Members</div>
          </div>
        </div>
        <div class="view-chat-head-right">
          <div class="search-nav">
            <font-awesome-icon icon="search" class="search" />
          </div>
        </div>
      </div>
    </div>

    <div class="chatroom-body">
      <div class="container">
        <div class="chats-area" v-for="contact in CONTACTS" :key="contact">
          <div class="user-img">
            <img src="../../assets/images/user_icon.png" />
          </div>
          <div class="user-name-time">
            <div class="user-name">
              <h5>{{contact.name}}</h5>
              <p>Okey Cool, I am sending in a while</p>
            </div>
            <div class="check_count">
              <b-form-group>
                <b-form-checkbox-group v-model="selected">
                  <b-form-checkbox :value="contact._id"></b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>
              <span class="checkmark"></span>
            </div>
          </div>
        </div>
        <!-- {{selected}} -->
      </div>
    </div>

    <div class="select-member-footer fixed-bottom">
      <div class="members-selected">
        <div class="selected-number" v-if="selected.length<=1">{{selected.length}} Member Selected</div>
        <div class="selected-number" v-else>{{selected.length}} Members Selected</div>
        <div v-if="routeQuery == 'GI'">
          <button class="next-btn" @click="JoinGroup">Add</button>
        </div> 
       <router-link to="/CreateGroup" v-else>
          <button class="next-btn">NEXT</button>
        </router-link> 
      </div>
      <div class="unselect_user">
        <div class="select_member" v-for="contact in selected" :key="contact">
          <div class="user-img">
            <img src="../../assets/images/user_icon.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { chatService } from "../../services/chat.services";
import Loader from "../../utils/vue-loader/loader.vue";

export default {
  name: "SelectMembers",
  data() {
    return {
      selected: [],
      loading:false
    };
  },
   components: {
    Loader
  },
  computed: {
    ...mapState({
      CONTACTS: state => state.Chat.CONTACTS,
      members: state => state.Chat.SELECTED_CONTACTS
    }),
    routeQuery() {
      return this.$route.query.path;
    }
  },
  watch : {
   selected (newval) {
       this.$store.commit("SET_SELECTED_CONTACTS", newval)
   }
  },
  methods: {
    async JoinGroup() {
      this.loading = true;
      await chatService
        .JoinGroup({
            id : this.$route.query.id,
            members:this.members
        })
        .then((res) => {
          this.$toastr.s(res.message, "Successful")
          this.$router.push("/Groupchat");
          this.$store.commit("SET_SELECTED_CONTACTS", [])
        })
        .catch(err => {
          this.$toastr.e(err.message || err, "Error");
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
</style>