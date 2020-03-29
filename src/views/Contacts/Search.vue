<template>
    <div class="create-group-page container">
        <div class="fixed-top">
            <div class="head-section">
                <div class="view-chat-head-left">
                    <div class="view-chat-head-left2">
                        <a @click="$router.go(-1)"><div class="back-btn">
                            <font-awesome-icon icon="angle-left" class="search"/>
                        </div></a>
                        <div class="head-user-title">
                            Search Contacts
                        </div>
                    </div>
                </div>
                <div class="view-chat-head-right">

                </div>
            </div>
        </div>

        <!--<div class="ds">-->
            <div class=""></div>
            <div class="create_group">
                <h3>Search for your Friends</h3>
                <p>See all your friends in your school and beyond within contact list.</p>
            </div>
            <div class="create_group_buttons">
                <input class="create_group_input"  type="text" name="text" placeholder="Name" required>
                <router-link to=""><button class="create_group_btn" >Search Contact</button></router-link>
            </div>
            <div class="verify-footer">
                <img src="../../assets/images/gchat-blue.svg" >
            </div>
            <div></div>
        <!--</div>-->

    </div>
</template>

<script>
    export default {
        name: "Search.vue"
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