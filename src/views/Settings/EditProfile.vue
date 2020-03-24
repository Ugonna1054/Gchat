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
            <div class="profile-picture-section2">
                <div class="text-center">
                    <div class="profile_img">
                        <img src="../../assets/images/user_icon.png" >
                        <!-- <vue-image-chooser name="image-chooser" @change="uploadFile" :progress="progress" :error="error"/>
                        <div class="upload_user_image">
                            <div class="continue-button" v-if="!image">
                                <input type="file" @change="onFileChange"/>
                                <div><image-picker></image-picker></div>
                                    <button class="continue-btn" >UPLOAD</button>
                            </div>
                            <div v-else>
                                <img :src="image" />
                                    <button @click="removeImage">Remove image</button>
                            </div>
                        </div> -->
                        
                    </div>
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
                            <input type="tel" class="edit_username" value="08083871580">
                        </div>
                    </div>
                    <div class="privacy_settings">
                        <div class="icon">
                            <font-awesome-icon icon="envelope"/>
                        </div>
                        <div class="edit_user_details">
                            <input type="email" class="edit_username" value="email@email.com">
                        </div>
                    </div>
                    <div class="privacy_settings">
                        <div class="icon">
                            <font-awesome-icon icon="school"/>
                        </div>
                        <div class="edit_user_details">
                            <input type="text" class="edit_username" value="University of Lagos">
                        </div>
                    </div>
                    <div class="privacy_settings">
                        <div class="icon">
                            <font-awesome-icon icon="book-reader"/>
                        </div>
                        <div class="edit_user_details">
                            <input type="text" class="edit_username" value="Computer Science">
                        </div>
                    </div>
                    <div class="privacy_settings">
                        <div class="icon">
                            <font-awesome-icon icon="flag"/>
                        </div>
                        <div class="edit_user_details">
                            <country-select v-model="country" :country="country" topCountry="NG" class="edit_username" />
                        </div>
                    </div>
                    <div class="privacy_settings">
                        <div class="icon">
                            <font-awesome-icon icon="flag"/>
                        </div>
                        <div class="edit_user_details">
                            <region-select v-model="region" :country="country" :region="region" class="edit_username" />
                        </div>
                    </div>
                    <div class="privacy_settings">
                        <div class="icon">
                            <font-awesome-icon icon="lock"/>
                        </div>
                        <div class="edit_user_details">
                            <input type="password" class="edit_username" value="******">
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
    // import ImagePicker from 'vue-image-picker'

    export default {
        name: "EditProfile.vue",
        components: {
            // 'image-picker': ImagePicker,
        },
        data() {
            return {
                // switches: true,
                enabled: false,
                country: null,
                region: null,
            }
        },
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
    /* .vue-switcher{
        padding-top: 10px;
    } */

</style>