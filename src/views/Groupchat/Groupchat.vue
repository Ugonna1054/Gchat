<template>
    <div class="chatroom-page ">
        <div class="fixed-top">
            <div class="head-section">
                <div class="gchat-logo">
                    <img src="../../assets/images/gchat-icon.svg" >
                </div>
                <div class="head-title">
                    Group
                </div>
                <div class="search-nav">
                    <router-link to="Search"><font-awesome-icon icon="search" class="search mr-2"/></router-link>
                    <router-link to="Settings"><font-awesome-icon icon="ellipsis-v" class="search ml-3"/></router-link>
                </div>
            </div>
        </div>
        <div class="chatroom-body">
            <div class="container">
                <router-link to="ViewGroup"><div class="chats-area">
                    <div class="user-img">
                        <img src="../../assets/images/user6.png" >
                    </div>
                    <div class="user-name-time">
                        <div class="user-name">
                            <h5>Lagos Eko</h5>
                            <p>Stanley Metu: I am sending in a while</p>
                        </div>
                        <div class="time-count">
                            <div class="time">2m</div>
                            <div class="chat-count">2</div>
                        </div>
                    </div>
                </div></router-link>
                <router-link to="ViewGroup"><div class="chats-area">
                    <div class="user-img">
                        <img src="../../assets/images/user6.png" >
                    </div>
                    <div class="user-name-time">
                        <div class="user-name">
                            <h5>Unilag</h5>
                            <p>Ndukwe: Did you see him?</p>
                        </div>
                        <div class="time-count">
                            <div class="time">2m</div>
                            <div class="chat-count">2</div>
                        </div>
                    </div>
                </div></router-link>
                <router-link to="ViewGroup"><div class="chats-area">
                    <div class="user-img">
                        <img src="../../assets/images/user6.png" >
                    </div>
                    <div class="user-name-time">
                        <div class="user-name">
                            <h5>Uniport</h5>
                            <p>Cynthia: How far na?</p>
                        </div>
                        <div class="time-count">
                            <div class="time">2m</div>
                            <div class="chat-count">2</div>
                        </div>
                    </div>
                </div></router-link>
                <router-link to="ViewGroup"><div class="chats-area">
                    <div class="user-img">
                        <img src="../../assets/images/user6.png" >
                    </div>
                    <div class="user-name-time">
                        <div class="user-name">
                            <h5>Unizik</h5>
                            <p>Amaka: Testing 1 2 3</p>
                        </div>
                        <div class="time-count">
                            <div class="time">2m</div>
                            <div class="chat-count">2</div>
                        </div>
                    </div>
                </div></router-link>
                <router-link to="ViewGroup"><div class="chats-area">
                    <div class="user-img">
                        <img src="../../assets/images/user6.png" >
                    </div>
                    <div class="user-name-time">
                        <div class="user-name">
                            <h5>Unical</h5>
                            <p>Ebenezer: I am sending in a while</p>
                        </div>
                        <div class="time-count">
                            <div class="time">2m</div>
                            <div class="chat-count">2</div>
                        </div>
                    </div>
                </div></router-link>
                <router-link to="ViewGroup"><div class="chats-area">
                    <div class="user-img">
                        <img src="../../assets/images/user6.png" >
                    </div>
                    <div class="user-name-time">
                        <div class="user-name">
                            <h5>Uniport</h5>
                            <p>I am doing great. How is school life?</p>
                        </div>
                        <div class="time-count">
                            <div class="time">2m</div>
                            <div class="chat-count">2</div>
                        </div>
                    </div>
                </div></router-link>
            </div>
        </div>
        <div class="chatroom-footer fixed-bottom">
            <router-link to="Contacts"><div class="chat">
                <font-awesome-icon icon="user" class="fontawesom "/>
            </div></router-link>
            <router-link to="Call"><div class="chat">
                <font-awesome-icon icon="phone-alt" class="fontawesom"/>
            </div></router-link>
            <router-link to="Chatroom"><div class="start-chat">
                <font-awesome-icon icon="comment-alt" class="start-chat-icon"/>
            </div></router-link>
            <router-link to="Groupchat"><div class="chat">
                <font-awesome-icon icon="user-friends" class="fontawesom active1"/>
            </div></router-link>
            <router-link to="Settings"><div class="chat">
                <font-awesome-icon icon="ellipsis-h" class="fontawesom active"/>
            </div></router-link>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Groupchat.vue"
    }
</script>

<style scoped>
    a{
        text-decoration: none;
    }
    a:hover, a:focus, a:active{
        text-decoration: none;
    }

</style>