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
                            Edit Profile
                        </div>
                    </div>
                </div>
                <div class="view-chat-head-right">
                    <button class="edit_profile_btn">Save Profile</button>
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
                <div class="setting_category mt-1">
                    <div class="privacy_settings">
                        <div class="icon">
                            <font-awesome-icon icon="user"/>
                        </div>
                        <div class="edit_user_details">
                            <input type="text" class="edit_username" value="George Okezie">
                        </div>
                    </div>
                    <div class="privacy_settings">
                        <div class="icon">
                            <font-awesome-icon icon="user-alt"/>
                        </div>
                        <div class="edit_user_details">
                            <input type="text" class="edit_username" placeholder="I communicate with GChat.">
                        </div>
                    </div>
                    <div class="privacy_settings">
                        <div class="icon">
                            <font-awesome-icon icon="phone-alt"/>
                        </div>
                        <div class="edit_user_details">
                            <input type="text" class="edit_username" value="08083871580">
                        </div>
                    </div>
                    <div class="privacy_settings">
                        <div class="icon">
                            <font-awesome-icon icon="envelope"/>
                        </div>
                        <div class="edit_user_details">
                            <input type="text" class="edit_username" value="email@mail.com">
                        </div>
                    </div>
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

    export default {
        name: "EditProfile.vue",
        components: {
            
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