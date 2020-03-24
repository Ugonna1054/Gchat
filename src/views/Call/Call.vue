<template>
    <div class="chatroom-page ">
        <div class="fixed-top">
            <div class="head-section">
                <a @click="$router.go(-1)"><div class="back-btn">
                        <font-awesome-icon icon="angle-left" class="search"/>
                    </div></a>
                <div class="head-title">
                    Calls
                </div>
                <div class="search-nav">
                    <router-link to="Search"><font-awesome-icon icon="search" class="search mr-2"/></router-link>
                    <router-link to="Settings"><font-awesome-icon icon="ellipsis-v" class="search ml-3"/></router-link>
                </div>
            </div>
        </div>
        <div class="chatroom-body">
            <div class="container">
                <div class="coming_soon">
                    <h3>Coming Soon</h3>
                </div>
            </div>
        </div>
        <div class="chatroom-footer fixed-bottom">
            <router-link to="Contacts"><div class="chat">
                <font-awesome-icon icon="user" class="fontawesom "/>
            </div></router-link>
            <router-link to="Call"><div class="chat">
                <font-awesome-icon icon="phone-alt" class="fontawesom active1"/>
            </div></router-link>
            <router-link to="Chatroom">
            <div class="start-chat">
                <font-awesome-icon icon="comment-alt" class="start-chat-icon"/>
            </div></router-link>
            <router-link to="Groupchat"><div class="chat">
                <font-awesome-icon icon="user-friends" class="fontawesom"/>
            </div></router-link>
            <router-link to="Settings"><div class="chat">
                <font-awesome-icon icon="ellipsis-h" class="fontawesom"/>
            </div></router-link>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Call.vue"
    }
</script>

<style scoped>
    a{
        text-decoration: none;
    }
    a:hover, a:focus, a:active{
        text-decoration: none;
    }
    .advert{
        height: 100px;
        width: 100%;
        background: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .adverts{
        font-family: Avenir-Black;
        font-size: 22px;
        color: #000000;
        text-align: center;
    }

</style>