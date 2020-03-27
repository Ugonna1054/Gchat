<template>
  <div class="gchat-verify container">
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
        <region-select v-model="region" :country="country" :region="region" class="verify-input" />
        <input
          class="verify-input"
          v-model="phone"
          type="tel"
          name="tel"
          placeholder="Phone Number"
          required
        />
        <input
          class="verify-input"
          v-model="password"
          type="password"
          name="password"
          placeholder="6 digit password/pin"
          minlength = 6
          maxlength = 6
          required
        />
        <!-- <input class="verify-input"  type="password" name="password" placeholder="Confirm Password" required> -->
        <!-- <router-link to="Contacts"> -->
        <button @click="SignupEnd" class="verify-btn">Welcome to G.chat</button>
        <!-- </router-link> -->
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
import {mapState} from  "vuex"
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
      name: "",
      phone: "",
      password: "",
    };
  },
  computed : {
      ...mapState({
          email : state => state.User.USER_EMAIL
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
          phone: this.phone,
          password: this.password,
          email: this.email
        })
        .then(() => {
          this.$toastr.s("Succesfully Registered");
          this.$router.push("/LoginUser")
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