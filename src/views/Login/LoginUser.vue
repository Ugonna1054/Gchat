<template>
  <div class="gchat-verify container">
    <div class="gchat-verify-inner">
      <Loader :loading="loading" loading-text="please wait..." />
      <div class="back-btn">
        <a @click="$router.go(-1)">
          <img src="../../assets/images/back-btn.svg" />
        </a>
      </div>

      <div class="verify-title">
        <h3>Hi, Welcome back.</h3>
        <p>Kindly enter your email to login.</p>
      </div>
      <div class="verify-number">
        <input
          class="verify-input"
          type="email"
          name="email"
          v-model="username"
          placeholder="Email"
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
</template>

<script>
import Loader from "../../utils/vue-loader/loader.vue";
export default {
  name: "Verify.vue",
  components: {
    Loader
  },
  data() {
    return {
      username: "",
      password: "",
      loading: false
    };
  },
  methods: {
    async Signin() {
      this.loading = true;
      await this.$store
        .dispatch("LOGIN", {
          username: this.username,
          password: this.password
        })
        .then(() => {
          this.$toastr.s("Logged in Succesfully");
          //if (res.isAdmin) return this.$router.push("/Admin/Dashboard");
          this.$router.push("/Contacts");
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