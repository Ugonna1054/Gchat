<template>
    <div class="chatroom-page ">
        <div class="fixed-top">
            <div class="head-section">
                <div class="gchat-logo">
                    <img src="../../assets/images/gchat-icon.svg" >
                </div>
                <div class="head-title">
                    Chatroom
                </div>
                <div class="search-nav">
                    <router-link to="Search"><font-awesome-icon icon="search" class="search mr-2"/></router-link>
                    <router-link to="Settings"><font-awesome-icon icon="ellipsis-v" class="search ml-3"/></router-link>
                </div>
            </div>
        </div>
        <div class="chatroom-body">
            <div class="container">
                <div class="advert">
                    <div class="adverts">Advert Placement</div>
                </div>
                <router-link to="View"><div class="chats-area">
                    <div class="status-sign-online"></div>
                    <div class="user-img">
                        <img src="../../assets/images/user1.png" >
                    </div>
                    <div class="user-name-time">
                        <div class="user-name">
                            <h5>Lucy Williams</h5>
                            <p>Okey Cool, I am sending in a while</p>
                        </div>
                        <div class="time-count">
                            <div class="time">2m</div>
                            <div class="chat-count">2</div>
                        </div>
                    </div>
                </div></router-link>
                <router-link to="View"><div class="chats-area">
                    <div class="status-sign-offline"></div>
                    <div class="user-img">
                        <img src="../../assets/images/user2.png" >
                    </div>
                    <div class="user-name-time">
                        <div class="user-name">
                            <h5>George Okezie</h5>
                            <p>Did you see him?</p>
                        </div>
                        <div class="time-count">
                            <div class="time">2m</div>
                            <div class="chat-count">2</div>
                        </div>
                    </div>
                </div></router-link>
                <router-link to="View"><div class="chats-area">
                    <div class="status-sign-online"></div>
                    <div class="user-img">
                        <img src="../../assets/images/user3.png" >
                    </div>
                    <div class="user-name-time">
                        <div class="user-name">
                            <h5>Metu Stanley</h5>
                            <p>How far na?</p>
                        </div>
                        <div class="time-count">
                            <div class="time">2m</div>
                            <div class="chat-count">2</div>
                        </div>
                    </div>
                </div></router-link>
                <router-link to="View"><div class="chats-area">
                    <div class="status-sign-online"></div>
                    <div class="user-img">
                        <img src="../../assets/images/user3.png" >
                    </div>
                    <div class="user-name-time">
                        <div class="user-name">
                            <h5>Metu Stanley</h5>
                            <p>How far na?</p>
                        </div>
                        <div class="time-count">
                            <div class="time">2m</div>
                            <div class="chat-count">2</div>
                        </div>
                    </div>
                </div></router-link>
                <router-link to="View"><div class="chats-area">
                    <div class="status-sign-online"></div>
                    <div class="user-img">
                        <img src="../../assets/images/user3.png" >
                    </div>
                    <div class="user-name-time">
                        <div class="user-name">
                            <h5>Metu Stanley</h5>
                            <p>How far na?</p>
                        </div>
                        <div class="time-count">
                            <div class="time">2m</div>
                            <div class="chat-count">2</div>
                        </div>
                    </div>
                </div></router-link>
                <router-link to="View"><div class="chats-area">
                    <div class="status-sign-online"></div>
                    <div class="user-img">
                        <img src="../../assets/images/user3.png" >
                    </div>
                    <div class="user-name-time">
                        <div class="user-name">
                            <h5>Metu Stanley</h5>
                            <p>How far na?</p>
                        </div>
                        <div class="time-count">
                            <div class="time">2m</div>
                            <div class="chat-count">2</div>
                        </div>
                    </div>
                </div></router-link>
                <router-link to="View"><div class="chats-area">
                    <div class="status-sign-offline"></div>
                    <div class="user-img">
                        <img src="../../assets/images/user5.png" >
                    </div>
                    <div class="user-name-time">
                        <div class="user-name">
                            <h5>Ebenezer Ndukwe</h5>
                            <p>Testing 1 2 3</p>
                        </div>
                        <div class="time-count">
                            <div class="time">2m</div>
                            <div class="chat-count">2</div>
                        </div>
                    </div>
                </div></router-link>
                <router-link to="View"><div class="chats-area">
                    <div class="status-sign-online"></div>
                    <div class="user-img">
                        <img src="../../assets/images/user4.png" >
                    </div>
                    <div class="user-name-time">
                        <div class="user-name">
                            <h5>Amaka Unizik</h5>
                            <p>Okey Cool, I am sending in a while</p>
                        </div>
                        <div class="time-count">
                            <div class="time">2m</div>
                            <div class="chat-count">2</div>
                        </div>
                    </div>
                </div></router-link>
                <router-link to="View"><div class="chats-area">
                    <div class="status-sign-offline"></div>
                    <div class="user-img">
                        <img src="../../assets/images/user1.png" >
                    </div>
                    <div class="user-name-time">
                        <div class="user-name">
                            <h5>Stella Uniport</h5>
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
        name: "Chatroom.vue"
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