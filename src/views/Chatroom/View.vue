<template>
    <div class="chatroom-page ">
        <div class="fixed-top">
            <div class="head-section">
                <div class="view-chat-head-left">
                    <a @click="$router.go(-1)"><div class="back-btn">
                        <font-awesome-icon icon="angle-left" class="search"/>
                    </div></a>
                    <div class="user-img2">
                        <img src="../../assets/images/user1.png" >
                    </div>
                    <div class="head-user-title">
                        Lucy Williams
                    </div>
                </div>
                <div class="view-chat-head-right">
                    <div class="call-nav">
                        <font-awesome-icon icon="video" class="search"/>
                    </div>
                    <div class="call-nav">
                        <font-awesome-icon icon="phone-alt" class="search"/>
                    </div>
                    <div class="option-nav">
                        <font-awesome-icon icon="ellipsis-v" class="search"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="view-chat-body">
            <div class="container">
                <div class="chat-view-area">
                    <div class="recipient-message">Hello there!</div>
                    <div class="date_time">12:30</div>
                </div>
                <div class="chat-view-area">
                    <div class="recipient-message">Hope you remenber me.</div>
                    <div class="date_time">12:30</div>
                </div>
                <div class="chat-view-area2">
                    <div class="date_time">12:30</div>
                    <div class="user-message">Hey, Hi Samantha.</div>
                </div>
                <div class="chat-view-area2">
                    <div class="date_time">12:30</div>
                    <div class="user-message">Of course I remember you.</div>
                </div>
                <div class="chat-view-area">
                    <div class="recipient-message">Can you send me a contact of Tonny?</div>
                    <div class="date_time">12:30</div>
                </div>
                <div class="chat-view-area2">
                    <div class="date_time">12:30</div>
                    <div class="user-message">Sure. Sending you in a while</div>
                </div>

            </div>
        </div>
        <div class="view-chat-footer fixed-bottom">
            <div class="emoji-icon"><font-awesome-icon icon="smile" class="smile-icon"/></div>
            <input class="input-message" type="text" name="text" placeholder="Type your message"/>
            <div class="emoji-icon"><font-awesome-icon icon="paperclip" class="smile-icon"/></div>
            <div class="emoji-icon"><font-awesome-icon icon="microphone" class="mic-icon"/></div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "View.vue"
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
    .recipient-message{
        background: #FFFFFF;
        border-radius: 28.5px;
        font-family: Avenir-Roman;
        font-size: 16px;
        color: #4A4A4A;
        letter-spacing: 0;
        padding: 1rem;
        width: auto;
        margin-right: 1rem;
    }
    .user-message{
        background: #747DE5;
        border-radius: 28.5px;
        font-family: Avenir-Roman;
        font-size: 16px;
        color: #ffffff;
        letter-spacing: 0;
        padding: 1rem;
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