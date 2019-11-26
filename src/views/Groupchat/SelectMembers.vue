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
                            Select Members
                        </div>
                    </div>
                </div>
                <div class="view-chat-head-right">
                    <div class="search-nav">
                        <font-awesome-icon icon="search" class="search"/>
                    </div>
                </div>
            </div>
        </div>

        <div class="chatroom-body">
            <div class="container">
                <div class="chats-area">
                    <div class="user-img">
                        <img src="../../assets/images/user1.png" >
                    </div>
                    <div class="user-name-time">
                        <div class="user-name">
                            <h5>Lucy Williams</h5>
                            <p>Okey Cool, I am sending in a while</p>
                        </div>
                        <div class="check_count">
                            <input type="checkbox" class="checkbox-count" checked="checked">
                            <span class="checkmark"></span>
                        </div>
                    </div>
                </div>
                <div class="chats-area">
                    <div class="user-img">
                        <img src="../../assets/images/user2.png" >
                    </div>
                    <div class="user-name-time">
                        <div class="user-name">
                            <h5>George Okezie</h5>
                            <p>Did you see him?</p>
                        </div>
                        <div class="check_count">
                            <input type="checkbox" class="checkbox-count" checked="checked">
                            <span class="checkmark"></span>
                        </div>
                    </div>
                </div>
                <div class="chats-area">
                    <div class="user-img">
                        <img src="../../assets/images/user3.png" >
                    </div>
                    <div class="user-name-time">
                        <div class="user-name">
                            <h5>Metu Stanley</h5>
                            <p>How far na?</p>
                        </div>
                        <div class="check_count">
                            <input type="checkbox" class="checkbox-count">
                        </div>
                    </div>
                </div>
                <div class="chats-area">
                    <div class="user-img">
                        <img src="../../assets/images/user5.png" >
                    </div>
                    <div class="user-name-time">
                        <div class="user-name">
                            <h5>Ebenezer Ndukwe</h5>
                            <p>Testing 1 2 3</p>
                        </div>
                        <div class="check_count">
                            <input type="checkbox" class="checkbox-count">
                        </div>
                    </div>
                </div>
                <div class="chats-area">
                    <div class="user-img">
                        <img src="../../assets/images/user4.png" >
                    </div>
                    <div class="user-name-time">
                        <div class="user-name">
                            <h5>Amaka Unizik</h5>
                            <p>Okey Cool, I am sending in a while</p>
                        </div>
                        <div class="check_count">
                            <input type="checkbox" class="checkbox-count" checked="checked">
                        </div>
                    </div>
                </div>
                <div class="chats-area">
                    <div class="user-img">
                        <img src="../../assets/images/user1.png" >
                    </div>
                    <div class="user-name-time">
                        <div class="user-name">
                            <h5>Stella Uniport</h5>
                            <p>I am doing great. How is school life?</p>
                        </div>
                        <div class="check_count">
                            <input type="checkbox" class="checkbox-count" checked="checked">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="select-member-footer fixed-bottom">
            <div class="members-selected">
                <div class="selected-number">6 Members Selected</div>
                <router-link to="ViewGroup"><button class="next-btn">NEXT</button></router-link>
            </div>
            <div class="unselect_user">
                <div class="select_member">
                    <div class="unselect_user-sign">x</div>
                    <div class="user-img">
                        <img src="../../assets/images/user1.png" >
                    </div>
                </div>
                <div class="select_member">
                    <div class="unselect_user-sign">x</div>
                    <div class="user-img">
                        <img src="../../assets/images/user1.png" >
                    </div>
                </div>
                <div class="select_member">
                    <div class="unselect_user-sign">x</div>
                    <div class="user-img">
                        <img src="../../assets/images/user1.png" >
                    </div>
                </div>
                <div class="select_member">
                    <div class="unselect_user-sign">x</div>
                    <div class="user-img">
                        <img src="../../assets/images/user1.png" >
                    </div>
                </div>
                <div class="select_member">
                    <div class="unselect_user-sign">x</div>
                    <div class="user-img">
                        <img src="../../assets/images/user1.png" >
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "SelectMembers.vue"
    }
</script>

<style scoped>

</style>