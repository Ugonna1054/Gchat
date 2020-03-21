<template>
    <div class="gchat-verify container">
        <div class="gchat-verify-inner ">
            <div class="back-btn">
                <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg" ></a>
            </div>

            <div class="verify-title">
                <h3>Hi, we need your email to get started.</h3>
                <p>A activation code will be sent to your<br> email for verification.</p>
            </div>
            <div class="verify-number">
                <input class="verify-input"  type="text" name="text" placeholder="First and Last Name" required>
                <input class="verify-input"  type="text" name="text" placeholder="E.g email@email.com" required>
                <router-link to="VerifyNumber"><button class="verify-btn" >Verify Email</button></router-link>
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