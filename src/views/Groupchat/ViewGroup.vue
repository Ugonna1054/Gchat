<template>
    <div class="chatroom-page ">
        <div class="fixed-top">
            <div class="head-section">
                <div class="view-chat-head-left">
                    <a @click="$router.go(-1)"><div class="back-btn">
                        <font-awesome-icon icon="angle-left" class="search"/>
                    </div></a>
                    <router-link to="GroupInfo"><div class="user-img2">
                        <img src="../../assets/images/user6.png" >
                    </div></router-link>
                    <div class="head-user-title">
                        Lagos Eko
                    </div>
                </div>
                <div class="view-chat-head-right">
                    <router-link to="Settings"><div class="option-nav">
                        <font-awesome-icon icon="ellipsis-v" class="search"/>
                    </div></router-link>
                </div>
            </div>
        </div>
        <div class="view-chat-body">
            <div class="container">
                <div class="chat-view-area">
                    <div class="recipient-message2">
                        <div class="users_name">Seyi Philips</div>
                        <div class="users_message">Hello there!</div>
                    </div>
                    <div class="date_time">12:30</div>
                </div>
                <div class="chat-view-area">
                    <div class="recipient-message2">
                        <div class="users_name">Victor Metu</div>
                        <div class="users_message">Hope you remember me.</div>
                        </div>
                    <div class="date_time">12:30</div>
                </div>
                <div class="chat-view-area2">
                    <div class="date_time">12:30</div>
                    <div class="user-message2">
                        <div class="users_name2">You</div>
                        <div class="users_message">Hey, Hi Samantha.</div>
                    </div>
                </div>
                <div class="chat-view-area2">
                    <div class="date_time">12:30</div>
                    <div class="user-message2">
                        <div class="users_name2">You</div>
                        <div class="users_message">Of course I remember you.</div>
                    </div>
                </div>
                <div class="chat-view-area">
                    <div class="recipient-message2">
                        <div class="users_name">Stanley Metu</div>
                        <div class="users_message">Can you send me a contact of Tonny?</div>
                    </div>
                    <div class="date_time">12:30</div>
                </div>
                <div class="chat-view-area2">
                    <div class="date_time">12:30</div>
                    <div class="user-message2">
                        <div class="users_name2">You</div>
                        <div class="users_message">Sure. Sending you in a while</div>
                    </div>
                </div>

            </div>
        </div>
        <div class="fixed-bottom bg-black">
            <div class="view-chat-footer ">
                <div class="emoji-icon"><font-awesome-icon icon="smile" class="smile-icon"/></div>
                <input class="input-message" type="text" name="text" placeholder="Type your message"/>
                <div class="emoji-icon"><font-awesome-icon icon="paperclip" class="smile-icon"/></div>
                <div class="emoji-icon"><font-awesome-icon icon="microphone" class="mic-icon"/></div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "ViewGroup.vue"
    }
</script>

<style scoped>
    a{
        text-decoration: none;
    }
    a:hover, a:focus, a:active{
        text-decoration: none;
    }
    .chat-view-area{
        display: flex;
        padding-bottom: 10px;
        align-items: center;
        justify-content: flex-start;
    }
    .chat-view-area2{
        display: flex;
        padding-bottom: 10px;
        align-items: center;
        justify-content: flex-end;
    }
    .recipient-message2{
        background: #FFFFFF;
        border-radius: 28.5px;
        font-family: Avenir-Roman;
        font-size: 16px;
        color: #4A4A4A;
        letter-spacing: 0;
        padding: 0.5rem 1.5rem;
        width: auto;
        margin-right: 1rem;
    }
    .user-message2{
        background: #747DE5;
        border-radius: 28.5px;
        font-family: Avenir-Roman;
        font-size: 16px;
        color: #ffffff;
        letter-spacing: 0;
        padding: 0.5rem 1.5rem;
        width: auto;
        margin-left: 1rem;
    }
    .date_time{
        font-family: Avenir-Roman;
        font-size: 9px;
        color: #FFFFFF;
        letter-spacing: 0;
    }

</style>