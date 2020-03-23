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
        <h3>Hi, we need your phone number to get started.</h3>
        <p>
          An activation code will be sent to you
          <br />for verification.
        </p>
      </div>
      <div class="verify-number">
        <input class="verify-input" v-model="code" type="tel" name="tel" placeholder="Activation Code" required />
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
      code: "",
    };
  },
  methods: {
    async VerifyEmail() {
      this.loading = true;
      await userService
        .VerifyEmail(this.code)
        .then(() => {
          this.$toastr.s(
            "Verification  Successful"
          );
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
};
</script>

<style scoped>
</style>