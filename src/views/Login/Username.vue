<template>
  <div class="gchat-verify ">
    <div class="container">
      <Loader :loading="loading" loading-text="please wait..." />
      <div class="gchat-verify-inner">
        <div class="back-btn">
          <a @click="$router.go(-1)">
            <img src="../../assets/images/back-btn.svg" />
          </a>
        </div>

        <div class="verify-title">
          <h3>Welcome, we need your info to get connected</h3>
        </div>
        <div class="verify-number">
          <input
            class="verify-input"
            v-model="name"
            type="text"
            name="name"
            placeholder="Full Name"
            required
          />
          <input
            class="verify-input"
            v-model="school"
            type="text"
            name="school"
            placeholder="Name of School"
            required
          />
          <input
            class="verify-input"
            v-model="department"
            type="text"
            name="text"
            placeholder="Your Department"
            required
          />
          <country-select v-model="country" :country="country" topCountry="NG" class="verify-input" />
          <region-select v-model="region" :country="country" :region="region" placeholder="Select State" class="verify-input" />

          <button @click="SignupEnd" class="verify-btn">Welcome to G.chat</button>
        </div>
      </div>
    </div>
    <!-- <div class="verify-footer">
            <img src="../../assets/images/gchat-white.svg" >
    </div>-->
  </div>
</template>

<script>
import { userService } from "../../services/user.services";
import Loader from "../../utils/vue-loader/loader.vue";
import { mapState } from "vuex";
export default {
  name: "Username",
  components: {
    Loader
  },
  data() {
    return {
      loading: false,
      country: null,
      region: null,
      school: "",
      department: "",
      name: ""
    };
  },
  computed: {
    ...mapState({
      email: state => state.User.USER_EMAIL
    })
  },
  methods: {
    async SignupEnd() {
      this.loading = true;
      await userService
        .SignupEnd({
          country: this.country,
          region: this.region,
          school: this.school,
          department: this.department,
          name: this.name,
          email: this.email
        })
        .then( async (res) => {
          this.$toastr.s("Succesfully Registered");
          await this.$store.dispatch("AUTHORISE_USER", res.token)
          .then(() => {
            this.$router.push("/Contacts");
          })
          .catch(() =>this.$toastr.e("Registration failed"))
          //
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