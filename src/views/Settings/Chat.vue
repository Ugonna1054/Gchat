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
                            Chat Settings
                        </div>
                    </div>
                </div>
                <div class="view-chat-head-right">

                </div>
            </div>
        </div>

        <div class="settings-page-body">
            <div class="m-t-4"></div>

            <div class="settings-categories">
                <div class="settings_title">
                    Chat Settings
                </div>
                <div class="setting_category">
                    <b-button v-b-modal.modal-center class="option_button" variant="none">
                        <div class="privacy_settings">
                            <div class="icon">
                                <img src="../../assets/images/icons/lock.svg" alt="Privacy">
                            </div>
                            <div class="">
                                <div class="privacy_">Font Size</div>
                                <div class="privacy_option">{{ selected }}</div>
                            </div>
                        </div>
                        <b-modal id="modal-center" centered hide-footer hide-header>
                            <div class="modal_radio_options">
                                <h6>Font Size</h6>
                                <b-form-group >
                                <b-form-radio v-model="selected" name="some-radios" value="Small" checked>Small</b-form-radio>
                                <b-form-radio v-model="selected" name="some-radios" value="Normal">Normal</b-form-radio>
                                <b-form-radio v-model="selected" name="some-radios" value="Large">Large</b-form-radio>
                                </b-form-group>
                            </div>
                        </b-modal>
                    </b-button>
                </div>
            </div>

        </div>

        <div class="chatroom-footer fixed-bottom">
            <router-link to="Contacts"><div class="chat">
                <font-awesome-icon icon="user" class="fontawesom "/>
            </div></router-link>
            <router-link to="Call"><div class="chat">
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
        name: "Chat.vue",
        components: {
            
        },
        data() {
            return {
                selected: 'Normal',
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
    .btn{
        padding: 0;
    }
    

</style>