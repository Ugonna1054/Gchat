<template>
    <div class="login-page ">
        <div class="container">
            <div class="login-page-inner">
                <div><img src="../../assets/images/gchat-logo2.svg"></div>
                <div class="chat-with">Chat with friend in every school, <br>share moments, share contents.</div>
                <div class="login-click mb-3">
                    <font-awesome-icon icon="user" class="search"/>
                    <router-link to="Verify"><button class="login-btn">Sign up</button></router-link>
                </div>
                <div class="login-click">
                    <font-awesome-icon icon="user" class="search"/>
                    <router-link to="LoginUser"><button class="login-btn">Login</button></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex"
    export default {
        name: "Login",
        computed  : {
            ...mapState({
                IS_AUTHENTICATED : state => state.User.IS_AUTHENTICATED
            })
        },
        mounted () {
            if (this.IS_AUTHENTICATED) {
                return this.$router.push("/Contacts")
            }
        }
    }
</script>

<style scoped>

</style>