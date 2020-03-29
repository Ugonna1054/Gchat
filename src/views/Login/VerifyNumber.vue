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
        <h3>Hi, please enter the 6 digit code that was sent to your email.</h3>
      </div>
      <div class="verify-number">
        <input
          class="verify-input"
          v-model="code"
          type="tel"
          name="tel"
          placeholder="Activation Code"
          required
        />
        <!-- <router-link to="Username"> -->
        <button @click="VerifyEmail" class="verify-btn">Verify Code</button>
        <!-- </router-link> -->
      </div>
    </div>
    <div class="verify-footer">
      <img src="../../assets/images/resendcode.svg" />
    </div>
  </div>
</template>

<script>
import { userService } from "../../services/user.services";
import Loader from "../../utils/vue-loader/loader.vue";
export default {
  name: "VerifyNumber.vue",
  components: {
    Loader
  },
  data() {
    return {
      loading: false,
      code: ""
    };
  },
  computed: {
    routeQuery() {
      return this.$route.query.path;
    }
  },
  methods: {
    async VerifyEmail() {
      if (this.routeQuery == "login") {
        this.loading = true;
        await userService
          .LoginEnd(this.code)
          .then(async res => {
            await this.$store
              .dispatch("AUTHORISE_USER", res.token)
              .then(() => {
                this.$toastr.s("Login  Successful");
                this.$router.push("/Contacts");
              })
              .catch(() => this.$toastr.e("Login failed"));
          })
          .catch(err => {
            this.$toastr.e(err.message || err, "Verification Failed");
          })
          .finally(() => {
            this.loading = false;
          });
      } else {
        this.loading = true;
        await userService
          .VerifyEmail(this.code)
          .then(() => {
            this.$toastr.s("Verification  Successful");
            this.$router.push("/Username");
          })
          .catch(err => {
            this.$toastr.e(err.message || err, "Verification Failed");
          })
          .finally(() => {
            this.loading = false;
          });
      }
    }
  }
};
</script>

<style scoped>
</style>