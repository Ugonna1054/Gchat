<template>
    <div class="splash-screen">
        <div></div>
        <router-link to="Login"><div><img src="../../assets/images/gchat-logo.svg"></div></router-link>
        <div class="splash-foot">GTONIA GROUP</div>
    </div>
</template>

<script>
    export default {
        name: "Splash.vue",
        created(){
            setTimeout( () => this.$router.push({ path: '/Login'}), 3000);

        }
    }
</script>

<style scoped>

</style>