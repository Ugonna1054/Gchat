<template>
    <div class="login-page container">
        <div></div>
        <div><img src="../../assets/images/gchat-logo2.svg"></div>
        <div class="chat-with">Chat with friend in every school, <br>share moments, share contents.</div>
        <div class="login-click mb-3">
            <font-awesome-icon icon="user" class="search"/>
            <router-link to="Verify"><button class="login-btn">Sign up with Email</button></router-link>
        </div>
        <div class="login-click">
            <font-awesome-icon icon="user" class="search"/>
            <router-link to="LoginUser"><button class="login-btn">Login with Email</button></router-link>
        </div>
        <div></div>
    </div>
</template>

<script>
    export default {
        name: "Login.vue"
    }
</script>

<style scoped>

</style>