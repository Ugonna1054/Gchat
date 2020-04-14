<template>
  <div class="chatroom-page">
    <div class="fixed-top">
      <Loader :loading="loading" loading-text="please wait..." />
      <div class="head-section">
        <div class="view-chat-head-left">
          <a @click="$router.go(-1)">
            <div class="back-btn">
              <font-awesome-icon icon="angle-left" class="search" />
            </div>
          </a>
          <router-link to="GroupInfo">
            <div class="user-img2">
              <img src="../../assets/images/user6.png" />
            </div>
          </router-link>
          <router-link to="GroupInfo">
            <div class="head-user-title">{{GROUP_DETAILS.name}}</div>
          </router-link>
        </div>
        <div class="view-chat-head-right">
          <router-link to="GroupInfo">
            <div class="option-nav">
              <font-awesome-icon icon="ellipsis-v" class="search" />
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="view-chat-body" id="container">
      <div class="container">
        <div
          v-for="message in GROUP_MESSAGE"
          :key="message"
          :class="{
                  replies: message.type === 1 || message.sender._id != USER._id,
                  sent: message.type === 0 || message.sender._id == USER._id
                }"
        >
          <div class="date_time" v-if="message.type === 0 || message.sender._id == USER._id">12:30</div>
          <div
            :class="{
                  recipient_message2: message.type === 1 || message.sender._id != USER._id,
                  user_message2: message.type === 0 || message.sender._id == USER._id
                }"
          >
            <div
              :class="{
                  users_name: message.type === 1 || message.sender._id != USER._id,
                  users_name2: message.type === 0 || message.sender._id == USER._id
                }"
            >
              <span
                v-if="message.type === 1 || message.sender._id != USER._id"
              >{{message.sender.name}}</span>
              <span v-if="message.type === 0 || message.sender._id == USER._id">You</span>
            </div>
            <div class="users_message2">{{message.message}}</div>
          </div>
          <div class="date_time" v-if="message.type === 1 || message.sender._id != USER._id">12:30</div>
        </div>

        <!-- <div class="sent">
          <div class="date_time">12:30</div>
          <div class="user-message2">
            <div class="users_name2">You</div>
            <div class="users_message">Hey, Hi Samantha.</div>
          </div>
        </div>-->
      </div>
    </div>
    <div class="fixed-bottom bg-black">
      <form @submit.prevent="send">
        <div class="view-chat-footer">
          <div class="emoji-icon">
            <font-awesome-icon icon="smile" class="smile-icon" />
          </div>
          <input
            class="input-message"
            v-model="message"
            type="text"
            name="text"
            placeholder="Type your message"
          />
          <div class="emoji-icon">
            <font-awesome-icon icon="paperclip" class="smile-icon" />
          </div>
          <button type="submit" class="emoji-icon" :disabled="isMessage">
            <font-awesome-icon icon="paper-plane" style="cursor:pointer" class="mic-icon" />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { chatService } from "../../services/chat.services";
import Loader from "../../utils/vue-loader/loader.vue";
import { mapState } from "vuex";
export default {
  name: "ViewGroup",
  components: {
    Loader
  },
  data() {
    return {
      loading: false,
      message:"",
      isMessage:true
    };
  },
  sockets: {
    connect() {
      //alert("connected");
    },
    disconnect() {
      // alert("disconnected");
    },
    connections(data) {
      this.connections = data.number;
      this.user[this.username] = data.id;
      this.user["group"] = data.group;
      //   this.$socket.emit('')
    },
    joined(data) {
      this.info.push({
        username: data.username,
        type: "joined"
      });

      this.user.group = data.group;

      setTimeout(() => {
        this.info = [];
      }, 5000);
    },
    leave(data) {
      this.info.push({
        username: data,
        type: "left"
      });

      setTimeout(() => {
        this.info = [];
      }, 5000);
    },
    typing(data) {
      this.typing = true;
      this.typingData = data;

      let lastTypingTime = new Date().getTime();

      setTimeout(() => {
        let typingTimer = new Date().getTime();
        let timeDiff = typingTimer - lastTypingTime;
        if (timeDiff >= 1000) {
          this.typing = false;
        }
      }, 1000);
    },
    chatMessage(data) {
        window.console.log(data);
        
      this.GROUP_MESSAGE.push({
        message: data.message,
        type: 1,
        sender: {
          _id: data.id,
          name:data.name,
          username:data.username
        }
      });
    }
  },
  watch: {
    message(value) {
      if (value == "") return this.isMessage = true;
      this.isMessage = false
      this.$socket.emit("typing", {
        username: this.USER.username,
        group: this.user.group
      });
    }
  },
  computed: {
    ...mapState({
      GROUP_DETAILS: state => state.Chat.GROUP_DETAILS,
      GROUP_MESSAGE: state => state.Chat.GROUP_MESSAGE,
      USER: state => state.User.USER_DATA
    })
  },
  methods: {
    async GetMessages() {
      this.loading = true;
      await chatService
        .GetGroupMessage(this.$store.state.Chat.GROUP_DETAILS._id)
        .then(res => {
          this.$store.commit("SET_GROUP_MESSAGE", res);
        })
        .catch(() => {
          this.$store.commit("SET_GROUP_MESSAGE", []);
          //this.$toastr.e(err.message || err, "Couldn't Fetch");
        })
        .finally(() => {
          this.loading = false;
        });
    },
    //send new message
    async send() {
      if (this.message == "") return;
      //this.loading = true;
      await chatService
        .PostMessage({
          message: this.message,
          group: this.GROUP_DETAILS._id,
        })
        .then(() => {
          this.newMessage_();
          this.$socket.emit("chatMessage", {
            id: this.USER._id,
            username: this.USER.username,
            name:this.USER.name,
            message: this.message,
            group: this.GROUP_DETAILS._id
          });
          //this.scrollToEnd();
          this.message = null;
        })
        .catch(err => {
          this.$toastr.e(err.message || err, "Failed");
          //window.console.log(err);
          
        })
        .finally(() => {
          this.loading = false;
        });
    },
    //adds new message to the screen by sender
    newMessage_() {
      if (this.message == "") return;

      this.GROUP_MESSAGE.push({
        message: this.message,
        type: 0,
        sender: {
          _id: this.USER._id
        }
      });
    },

    //scroll messages to enf
    scrollToEnd() {
      let container = this.$el.querySelector("#container");
      container.scrollTop = container.scrollHeight - container.clientHeight;
    },
  },
  mounted() {
    this.GetMessages();
    //this.scrollToEnd();
  },
  updated() {
    this.$nextTick(() => this.scrollToEnd());
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
.replies {
  display: flex;
  padding-bottom: 10px;
  align-items: center;
  justify-content: flex-start;
}
.sent {
  display: flex;
  padding-bottom: 10px;
  align-items: center;
  justify-content: flex-end;
}
.recipient_message2 {
  background: #ffffff;
  border-radius: 28.5px;
  font-family: Avenir-Roman;
  font-size: 16px;
  color: #4a4a4a;
  letter-spacing: 0;
  padding: 0.5rem 1.5rem;
  width: auto;
  margin-right: 1rem;
}
.user_message2 {
  background: #747de5;
  border-radius: 28.5px;
  font-family: Avenir-Roman;
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0;
  padding: 0.5rem 1.5rem;
  width: auto;
  margin-left: 1rem;
}
.date_time {
  font-family: Avenir-Roman;
  font-size: 9px;
  color: #ffffff;
  letter-spacing: 0;
}
</style>