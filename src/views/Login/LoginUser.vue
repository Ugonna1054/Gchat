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
          <h3>Hi, Welcome back.</h3>
          <p>Kindly enter your email or username to login.</p>
        </div>
        <div class="verify-number">
          <input
            class="verify-input"
            type="email"
            name="email"
            v-model="username"
            placeholder="Email or Username"
            required
          />
          <!-- <input
            class="verify-input"
            v-model="password"
            type="password"
            name="password"
            placeholder="****"
            required
          /> -->
          <!-- <router-link to="VerifyNumber"> -->
            <button class="verify-btn" @click="Signin">Login</button>
          <!-- </router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "../../utils/vue-loader/loader.vue";
import { userService } from "../../services/user.services";

export default {
  name: "Verify.vue",
  components: {
    Loader
  },
  data() {
    return {
      username: "",
      loading: false
    };
  },
  methods: {
    async Signin() {
      this.loading = true;
      await userService.LoginStart(this.username)
        .then(() => {
          this.$store.commit("SET_USER_EMAIL",  this.username)
          this.$toastr.i(
            "An OTP has been sent to your email",
            "Enter your OTP"
          );
          this.$router.push("/VerifyNumber?path=login");
        })
        .catch(err => {
          this.$toastr.e(err.message ||  err, "Login Failed!");
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