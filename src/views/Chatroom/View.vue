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
          <router-link to="Profile">
            <div class="user-img2">
              <img src="../../assets/images/user_icon.png" />
            </div>
          </router-link>
          <router-link to="Profile">
            <div class="head-user-title"> {{PRIVATE_DETAILS.name}} </div>
          </router-link>
        </div>
        <div class="view-chat-head-right">
          <!-- <div class="call-nav">
                        <font-awesome-icon icon="video" class="search"/>
          </div>-->
          <router-link to="Call">
            <div class="call-nav">
              <font-awesome-icon icon="phone-alt" class="search" />
            </div>
          </router-link>
          <div class="option-nav">
            <router-link to="Profile">
              <font-awesome-icon icon="ellipsis-v" class="search" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="view-chat-body" id="container">
      <div class="container"  v-if="PRIVATE_MESSAGE[0]">
        <div
          v-for="message in PRIVATE_MESSAGE"
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
              <!-- <span
                v-if="message.type === 1 || message.sender._id != USER._id"
              >{{message.sender.name}}</span> -->
              <span v-if="message.type === 0 || message.sender._id == USER._id">You</span>
            </div>
            <div class="users_message2">{{message.message}}</div>
          </div>
          <div class="date_time" v-if="message.type === 1 || message.sender._id != USER._id">12:30</div>
        </div>
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
import { mapState } from "vuex";
import { chatService } from "../../services/chat.services";
import Loader from "../../utils/vue-loader/loader.vue";

export default {
  name: "View.vue",
  components: {
    Loader
  },
  data() {
    return {
      loading: false,
      message: "",
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
    privateMessage(data) {
        window.console.log(data);
        
      this.PRIVATE_MESSAGE.push({
        message: data.message,
        type: 1,
        sender: {
          _id: data.id,
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
      PRIVATE_DETAILS: state => state.Chat.PRIVATE_DETAILS,
      PRIVATE_MESSAGE: state => state.Chat.PRIVATE_MESSAGE,
      USER: state => state.User.USER_DATA
    })
  },
  methods: {
    async GetMessages() {
      this.loading = true;
      await chatService
        .GetMessagePrivate(this.PRIVATE_DETAILS._id)
        .then(res => {
          this.$store.commit("SET_PRIVATE_MESSAGE", res);
        })
        .catch(() => {
          this.$store.commit("SET_PRIVATE_MESSAGE", []);
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
        .PostMessagePrivate({
          message: this.message,
          receiver: this.PRIVATE_DETAILS._id,
        })
        .then(() => {
          this.newMessage_();
          this.$socket.emit("privateMessage", {
            id: this.USER._id,
            sender: this.USER._id,
            receiver:this.PRIVATE_DETAILS._id,
            message: this.message,
          });
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

      this.PRIVATE_MESSAGE.push({
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

  mounted () {
      this.GetMessages()
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