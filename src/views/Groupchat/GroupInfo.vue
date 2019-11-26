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
                        <img src="../../assets/images/user8.png" >
                    </div>
                    <div class="profile-name">Lagos Eko</div>
                    <div class="profile-text">Best place to hangout on earth</div>
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
                    <div class="settings_title">
                        Group Members (200)
                    </div>
                    <div class="phone_number2">
                        <router-link to="View"><div class="chats-area">
                            <div class="user-img">
                                <img src="../../assets/images/user1.png" >
                            </div>
                            <div class="user-name-time2">
                                <div class="user-name">
                                    <h5>Lucy Williams</h5>
                                    <p>Okey Cool, I am sending in a while</p>
                                </div>
                                <div class="time-count">

                                </div>
                            </div>
                        </div></router-link>
                    </div>
                    <div class="phone_number2">
                        <router-link to="View"><div class="chats-area">
                            <div class="user-img">
                                <img src="../../assets/images/user1.png" >
                            </div>
                            <div class="user-name-time2">
                                <div class="user-name">
                                    <h5>Lucy Williams</h5>
                                    <p>Okey Cool, I am sending in a while</p>
                                </div>
                                <div class="time-count">

                                </div>
                            </div>
                        </div></router-link>
                    </div>
                    <div class="phone_number2">
                        <router-link to="View"><div class="chats-area">
                            <div class="user-img">
                                <img src="../../assets/images/user1.png" >
                            </div>
                            <div class="user-name-time2">
                                <div class="user-name">
                                    <h5>Lucy Williams</h5>
                                    <p>Okey Cool, I am sending in a while</p>
                                </div>
                                <div class="time-count">

                                </div>
                            </div>
                        </div></router-link>
                    </div>
                </div>
            </div>

        </div>

        <div class="add-members fixed-bottom">
            <router-link to="SelectMembers"><img src="../../assets/images/icons/add.svg" ></router-link>
        </div>
    </div>
</template>

<script>
    import Switches from 'vue-switches';

    export default {
        name: "GroupInfo.vue",
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

</style>