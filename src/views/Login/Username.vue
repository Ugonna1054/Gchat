<template>
    <div class="gchat-verify container">
        <Loader :loading="loading" loading-text="please wait..." />
        <div class="gchat-verify-inner ">
            <div class="back-btn">
                <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg" ></a>
            </div>

            <div class="verify-title">
                <h3>Hi, we need your phone number to get started.</h3>
                <p>An activation code will be sent to you for verification.</p>
            </div>
            <div class="verify-number">
                <input class="verify-input" v-model="school"  type="text" name="text" placeholder="Name of School" required>
                <input class="verify-input"  v-model="department" type="text" name="text" placeholder="Your Department" required>
                <country-select v-model="country" :country="country" topCountry="NG" class="verify-input"/>
                <region-select v-model="region" :country="country" :region="region" class="verify-input"/>
                <input class="verify-input"  v-model="phone" type="tel" name="tel" placeholder="Phone Number" required>
                <input class="verify-input"  v-model="password" type="password" name="password" placeholder="Password" required>
                <!-- <input class="verify-input"  type="password" name="password" placeholder="Confirm Password" required> -->
                <router-link to="Contacts"><button class="verify-btn" >Welcome to G.chat</button></router-link>
            </div>
        </div>
        <!-- <div class="verify-footer">
            <img src="../../assets/images/gchat-white.svg" >
        </div> -->
    </div>
</template>

<script>
import {userService} from "../../services/user.services";
import Loader from "../../utils/vue-loader/loader.vue";
    export default {
        name: "Username",
        components : {
            Loader
        },
        data() {
            return {
                loading:false,
                country: null,
                region: null,
                school:"",
                department:"",
                username:"",
                phone:"",
                password:""
            }
        },
        methods : {
           async signup  () {
                this.loading = true;
                await userService.Login(

                )
                .then (() => {
                    this.$toastr.s("Succesfully Registered");
                })
                .catch ((err) => {
                     this.$toastr.e(err.message, "Registration Failed");
                })
                .finally (() => {
                    this.loading = false
                })
                
            }
        }
    }
</script>

<style scoped>

</style>