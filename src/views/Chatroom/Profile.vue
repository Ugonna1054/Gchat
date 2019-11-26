<template>
    <div class="chatroom-page ">
        <div class="fixed-top">
            <div class="head-section">
                <div class="view-chat-head-left">
                    <div class="view-chat-head-left2">
                        <a @click="$router.go(-1)"><div class="back-btn">
                            <font-awesome-icon icon="angle-left" class="search"/>
                        </div></a>
                        <div class="head-user-title">
                            Profile
                        </div>
                    </div>
                </div>
                <div class="view-chat-head-right">

                </div>
            </div>
        </div>

        <div class="settings-page-body">
            <div class="profile-picture-section">
                <div class="text-center">
                    <div class="profile_img">
                        <img src="../../assets/images/user7.png" >
                    </div>
                    <div class="profile-name">Lucy Williams</div>
                    <div class="profile-text">Day one of One Day - Your choice</div>
                </div>
            </div>

            <div class="settings-categories">
                <div class="shared_media">
                    <p>Shared Media</p>
                    <div class="view-all">
                        <button class="view-all-btn">View All</button>
                    </div>
                    <div class="shared_medias">
                        <img src="../../assets/images/user9.jpg" alt="Shared Media">
                        <img src="../../assets/images/user10.jpg" alt="Shared Media">
                        <img src="../../assets/images/user11.jpg" alt="Shared Media">
                        <img src="../../assets/images/user12.jpg" alt="Shared Media">
                        <img src="../../assets/images/user13.jpg" alt="Shared Media">
                    </div>
                </div>
                <div class="setting_category">
                    <div class="mute_notify">
                        <div class="mute-text">Mute Notification</div>
                        <switches v-model="enabled" color="blue" type-bold="true" class="switch_doggle"></switches>
                    </div>
                    <div class="phone_number">
                        <div class="phone_number2">
                            <div class="phone_number3">Phone Number</div>
                            <a href="tel:+234800000000"><div class="mute-text">+23480 000 0000</div></a>
                        </div>
                        <div class="phone-video-icon">
                            <a href="tel:+234800000000"><img src="../../assets/images/icons/video.svg" alt="Chat Settings"></a>
                            <a href="tel:+234800000000"><img src="../../assets/images/icons/call.svg" alt="Chat Settings"></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="chatroom-footer fixed-bottom">
            <router-link to=""><div class="report_spam">
                <img src="../../assets/images/icons/spam.svg" alt="Chat Settings"><span>Report Spam</span>
            </div></router-link>

            <router-link to=""><div class="report_spam">
                <img src="../../assets/images/icons/block.svg" alt="Chat Settings"><span>Block profile</span>
            </div></router-link>
        </div>
    </div>
</template>

<script>
    import Switches from 'vue-switches';

    export default {
        name: "Profile.vue",
        components: {
            Switches
        },
        data() {
            return {
                switches: true,
                enabled: false,

            }
        },
        methods: {

        }
    }
</script>

<!--<style lang="scss">-->
    <!--.vue-switcher-theme&#45;&#45;custom {-->
        <!--&.vue-switcher-color&#45;&#45;blue {-->
            <!--div {-->
                <!--background-color: lighten(blue, 10%);-->

                <!--&:after {-->
                    <!--// for the circle on the switch-->
                    <!--background-color: darken(blue, 5%);-->
                <!--}-->
            <!--}-->

            <!--&.vue-switcher&#45;&#45;unchecked {-->
                <!--div {-->
                    <!--background-color: lighten(blue, 30%);-->

                    <!--&:after {-->
                        <!--background-color: lighten(blue, 10%);-->
                    <!--}-->
                <!--}-->
            <!--}-->
        <!--}-->
    <!--}-->

<!--</style>-->

<style scoped>
    a{
        text-decoration: none;
    }
    a:hover, a:focus, a:active{
        text-decoration: none;
    }
    .chatroom-page{
        background: #F1F1F1;
    }
    /*.vue-switcher{*/
        /*padding-top: 10px;*/
    /*}*/

</style>