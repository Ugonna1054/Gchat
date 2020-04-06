<template>
  <div class="gchat-verify ">
    <div class="container">
      <div class="gchat-verify-inner">
        <Loader :loading="loading" loading-text="please wait..." />
        <div class="back-btn">
          <a @click="$router.go(-1)">
            <img src="../../assets/images/back-btn.svg" />
          </a>
        </div>

        <div class="verify-title">
          <h3>Hi, we need your email to get started.</h3>
          <p>An activation code will be sent to your email for verification.</p>
        </div>
        <div class="verify-number">
          <input
            class="verify-input"
            type="text"
            name="text"
            placeholder="Choose a username"
            v-model="username"
            required
          />
          <input
            class="verify-input"
            type="text"
            name="text"
            placeholder="E.g email@email.com"
            v-model="email"
            required
          />
          <input
            class="verify-input"
            v-model="phone"
            type="tel"
            name="tel"
            placeholder="Phone Number"
            required
          />
          <!-- <router-link to="VerifyNumber"> -->
          <button class="verify-btn" @click="SignupStart">Verify Email</button>
          <!-- </router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { userService } from "../../services/user.services";
import Loader from "../../utils/vue-loader/loader.vue";
export default {
  name: "Verify",
  components: {
    Loader
  },
  data() {
    return {
      loading: false,
      username: "",
      email: "",
      phone:"",
    };
  },
  methods: {
    async SignupStart() {
      this.loading = true;
      await userService
        .SignupStart({
          username: this.username,
          email: this.email,
          phone:this.phone
        })
        .then(() => {
          this.$store.commit("SET_USER_EMAIL",  this.email)
          this.$toastr.i(
            "A verification code has been sent to your email",
            "Verify your  email"
          );
          this.$router.push("/VerifyNumber");
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
</style>