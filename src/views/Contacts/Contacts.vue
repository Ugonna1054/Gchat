<template>
  <div class="chatroom-page">
    <Loader :loading="loading" loading-text="please wait..." />
    <div class="fixed-top">
      <div class="head-section">
        <div class="gchat-logo">
          <img src="../../assets/images/gchat-icon.svg" />
        </div>
        <div class="head-title">Contacts</div>
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
        <router-link to="SelectMembers">
          <div class="chats-area">
            <div class="user-img">
              <img src="../../assets/images/group_icon.png" />
            </div>
            <div class="user-name-time">
              <div class="user-name">
                <h5>Create Group</h5>
              </div>
            </div>
          </div>
        </router-link>
        <router-link to="AddContact">
          <div class="chats-area">
            <div class="user-img">
              <img src="../../assets/images/user_icon.png" />
            </div>
            <div class="user-name-time">
              <div class="user-name">
                <h5>Add Contact</h5>
              </div>
            </div>
          </div>
        </router-link>
        <router-link to="View">
          <div
            class="chats-area"
            v-for="(contact, index) in CONTACTS"
            :key="contact"
            @click="PrivateDetails(index)"
          >
            <div class="status-sign-online"></div>
            <div class="user-img">
              <img src="../../assets/images/user_icon.png" />
            </div>
            <div class="user-name-time">
              <div class="user-name">
                <h5>{{contact.name}}</h5>
                <p>  {{GetMessagesOne(contact._id)}} </p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="chatroom-footer fixed-bottom">
      <router-link to="Contacts">
        <div class="chat">
          <font-awesome-icon icon="user" class="fontawesom active1" />
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
          <font-awesome-icon icon="ellipsis-h" class="fontawesom" />
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
  name: "Contacts",
  components: {
    Loader
  },
  data() {
    return {
      loading: false,
      Messages: []
    };
  },
  computed: {
    ...mapState({
      CONTACTS: state => state.Chat.CONTACTS,
      USER_DATA: state => state.User.USER_DATA
    })
  },
  sockets: {
    privateMessage() {
      this.GetMessages();
    }
  },
  methods: {
    async GetContacts() {
      this.loading = true;
      await chatService
        .GetContacts()
        .then(res => {
          this.$store.commit("SET_CONTACTS", res);
        })
        .catch(err => {
          this.$toastr.e(err.message || err, "Couldn't Fetch Contacts");
        })
        .finally(() => {
          this.loading = false;
        });
    },
    async GetMessages() {
      //this.loading = true;
      await chatService
        .GetMessagePrivateAll()
        .then(res => {
          this.Messages = res;
        })
        .catch(() => {
          this.Messages = []
        })
        .finally(() => {
          this.loading = false;
        });
    },
    GetMessagesOne (id) {
      let messages = this.Messages;
      messages = messages.filter(item => item.receiver._id == id || item .sender._id == id);
      if(!messages[0]) return ""
      return(messages[messages.length - 1].message)
    },
    connectSocket() {
      this.$socket.emit("userConnected", {
        id: this.USER_DATA._id,
        name: this.USER_DATA.name,
        socketId: null
      });
    },
    PrivateDetails(n) {
      let privateDetails = this.CONTACTS[n];
      this.$store.commit("SET_PRIVATE_DETAILS", privateDetails);
      this.$socket.emit("joined", this.$store.state.Chat.PRIVATE_DETAILS._id);
      this.$router.push("View");
    }
  },
  mounted() {
    this.GetContacts();
    this.connectSocket();
    this.GetMessages()
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
.advert {
  height: 100px;
  width: 100%;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.adverts {
  font-family: Avenir-Black;
  font-size: 22px;
  color: #000000;
  text-align: center;
}
</style>