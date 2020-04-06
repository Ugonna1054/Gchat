<template>
  <div class="create-group-page container">
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
            <div class="head-user-title">Create Group</div>
          </div>
        </div>
        <div class="view-chat-head-right"></div>
      </div>
    </div>

    <!--<div class="ds">-->
    <div class></div>
    <div class="create_group">
      <h3>Give this Group a Name</h3>
      <p>The name you give will be the name to display on every member’s group chat.</p>
    </div>
    <div class="create_group_buttons">
      <input
        class="create_group_input"
        v-model="name"
        type="text"
        name="text"
        placeholder="Group Name"
        required
      />
      <div @click="CreateGroup">
        <button class="create_group_btn">Create Group</button>
      </div>
    </div>
    <div class="verify-footer">
      <img src="../../assets/images/gchat-blue.svg" />
    </div>
    <div></div>
    <!--</div>-->
  </div>
</template>

<script>
import { chatService } from "../../services/chat.services";
import Loader from "../../utils/vue-loader/loader.vue";
import { mapState } from "vuex";
export default {
  name: "CreateGroup",
  components: {
    Loader
  },
  data() {
    return {
      loading: false,
      name: ""
    };
  },
  computed: {
    ...mapState({
      members: state => state.Chat.SELECTED_CONTACTS
    })
  },
  methods: {
    async CreateGroup() {
      this.loading = true;
      await chatService
        .CreateGroup({
          name: this.name,
          members: this.members
        })
        .then(res => {
          this.$toastr.s(res.message, "Successful");
          this.$router.push("GroupChat");
          this.$store.commit("SET_SELECTED_CONTACTS", []);
        })
        .catch(err => {
          this.$toastr.e(err.message || err, "Error");
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
</style>