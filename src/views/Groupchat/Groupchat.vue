<template>
  <div class="chatroom-page">
    <div class="fixed-top">
      <Loader :loading="loading" loading-text="please wait..." />
      <div class="head-section">
        <div class="gchat-logo">
          <img src="../../assets/images/gchat-icon.svg" />
        </div>
        <div class="head-title">Group</div>
        <div class="search-nav">
          <router-link to="Search">
            <font-awesome-icon icon="search" class="search mr-2" />
          </router-link>
          <router-link to="Settings">
            <font-awesome-icon icon="ellipsis-v" class="search ml-3" />
          </router-link>
        </div>
      </div>
    </div>
    <div class="chatroom-body">
      <div class="container">
        <div>
          <div
            class="chats-area"
            v-for="(group, index) in GROUPS"
            :key="group"
            @click="GroupDetails(index)"
          >
            <div class="user-img">
              <img src="../../assets/images/user6.png" />
            </div>
            <div class="user-name-time">
              <div class="user-name">
                <h5>{{group.name}}</h5>
                <p
                  v-if="group.lastMessage.message"
                >{{group.lastMessage.sender.name}}: {{group.lastMessage.message}}</p>
                <p v-else> Be the first to send a message</p>
              </div>
              <!-- <div class="time-count">
                <div class="time">0m</div>
                <div class="chat-count">2</div>
              </div>-->
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
          <font-awesome-icon icon="user-friends" class="fontawesom active1" />
        </div>
      </router-link>
      <router-link to="Settings">
        <div class="chat">
          <font-awesome-icon icon="ellipsis-h" class="fontawesom active" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { chatService } from "../../services/chat.services";
import Loader from "../../utils/vue-loader/loader.vue";
import { mapState } from "vuex";
export default {
  name: "Groupchat.vue",
  components: {
    Loader
  },
  data() {
    return {
      loading: false
    };
  },
  computed: {
    ...mapState({
      GROUPS: state => state.Chat.GROUPS
    })
  },
  sockets: {
    chatMessage() {
      this.GetGroups();
    }
  },
  methods: {
    async GetGroups() {
      //this.loading = true;
      await chatService
        .GetGroups()
        .then(res => {
          this.$store.commit("SET_GROUPS", res);
        })
        .catch(err => {
          this.$toastr.e(err.message || err, "Couldn't Fetch");
        })
        .finally(() => {
          this.loading = false;
        });
    },
    GroupDetails(n) {
      let groupDetails = this.GROUPS[n];
      this.$store.commit("SET_GROUP_DETAILS", groupDetails);
      this.$socket.emit("joined", this.$store.state.Chat.GROUP_DETAILS._id);
      this.$router.push("ViewGroup");
    },
    JoinGroup()  {
      let groups = this.GROUPS;
      groups.forEach(group => {
        this.$socket.emit("joined", group._id);
      });
    },
  },
  mounted() {
    this.GetGroups();
    this.JoinGroup();
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