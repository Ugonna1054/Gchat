<template>
    <div class="gchat-verify container">
        <div class="gchat-verify-inner ">
            <div class="back-btn">
                <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg" ></a>
            </div>

            <div class="verify-title">
                <h3>Hi, Welcome back.</h3>
                <p>Kindly enter your email and password.</p>
            </div>
            <div class="verify-number">
                <input class="verify-input"  type="email" name="email" placeholder="email@email.com" required>
                <input class="verify-input"  type="password" name="password" placeholder="****" required>
                <router-link to="VerifyNumber"><button class="verify-btn" >Login</button></router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Verify.vue"
    }
</script>

<style scoped>

</style>