<template>
    <div class="gchat-verify">
        <div class="gchat-verify-inner container">
            <div class="back-btn">
                <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg" ></a>
            </div>

            <div class="verify-title">
                <h3>Hi, we need your phone number to get started.</h3>
                <p>An activation code will be sent to you<br> for verification.</p>
            </div>
            <div class="verify-number">
                <input class="verify-input"  type="text" name="text" placeholder="Username" required>
                <router-link to="Chatroom"><button class="verify-btn" >Welcome to G.chat</button></router-link>
            </div>
        </div>
        <div class="verify-footer">
            <img src="../../assets/images/gchat-white.svg" >
        </div>
    </div>
</template>

<script>
    export default {
        name: "Username.vue"
    }
</script>

<style scoped>

</style>