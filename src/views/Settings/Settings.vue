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
                            My Profile
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
                        <img src="../../assets/images/george-okezie.png" >
                    </div>
                    <div class="profile-name">George Okezie</div>
                    <div class="profile-text">CEO @ GTONIA GROUP</div>
                </div>
            </div>

            <div class="settings-categories">
                <div class="settings_title">
                    Settings
                </div>
                <div class="setting_category">
                    <router-link to="Privacy"><div class="privacy_settings">
                        <div class="icon">
                            <img src="../../assets/images/icons/lock.svg" alt="Privacy">
                        </div>
                        <div class="privacy_">Privacy Settings</div>
                    </div></router-link>
                    <router-link to="Chat"><div class="privacy_settings">
                        <div class="icon">
                            <img src="../../assets/images/icons/chat.svg" alt="Chat Settings">
                        </div>
                        <div class="privacy_">Chat Settings</div>
                    </div></router-link>
                    <div ><div class="privacy_settings">
                        <div class="icon">
                            <img src="../../assets/images/icons/bell.svg" alt="Notification">
                        </div>
                        <div class="notify_switch">
                            <div class="privacy_ mr-auto">Notification</div>
                            <switches v-model="enabled" color="blue" type-bold="false" class="switch_doggle"></switches>
                            <!-- <switch-button v-model="switch3" color="#253DB9"> -->
                        </div>
                    </div></div>
                    <router-link to="Help"><div class="privacy_settings">
                        <div class="icon">
                            <img src="../../assets/images/icons/help.svg" alt="Need Help?">
                        </div>
                        <div class="privacy_">Need Help?</div>
                    </div></router-link>
                </div>
            </div>

        </div>

        <div class="chatroom-footer fixed-bottom">
            <router-link to="Contacts"><div class="chat">
                <font-awesome-icon icon="user" class="fontawesom "/>
            </div></router-link>
            <router-link to=""><div class="chat">
                <font-awesome-icon icon="phone-alt" class="fontawesom"/>
            </div></router-link>
            <router-link to="Chatroom">
                <div class="start-chat">
                    <font-awesome-icon icon="comment-alt" class="start-chat-icon"/>
                </div></router-link>
            <router-link to="Groupchat"><div class="chat">
                <font-awesome-icon icon="user-friends" class="fontawesom"/>
            </div></router-link>
            <router-link to="Settings"><div class="chat">
                <font-awesome-icon icon="ellipsis-h" class="fontawesom active1"/>
            </div></router-link>
        </div>
    </div>
</template>

<script>
    import Switches from 'vue-switches';

    export default {
        name: "Settings.vue",
        components: {
            Switches
        },
        data() {
            return {
                // switches: true,
                enabled: false,

            }
        },
    }
</script>

<style lang="scss">
    .vue-switcher-theme--custom {
        &.vue-switcher-color--blue {
            div {
                background-color: lighten(blue, 10%);

                &:after {
                    // for the circle on the switch
                    background-color: darken(blue, 5%);
                }
            }

            &.vue-switcher--unchecked {
                div {
                    background-color: lighten(blue, 30%);

                    &:after {
                        background-color: lighten(blue, 10%);
                    }
                }
            }
        }
    }

</style>

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
    /* .vue-switcher{
        padding-top: 10px;
    } */

</style>