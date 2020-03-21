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
                            Need Help?
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
                <div class="setting_category">
                    <div role="tablist">
                        <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block href="#" v-b-toggle.accordion-1 variant="white" class="accordion_dropdown">How to start chat <span><font-awesome-icon icon="chevron-down" class="accordion-caret"/></span> </b-button>
                        </b-card-header>
                        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                            <b-card-text class="faq_small_text">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</b-card-text>
                            </b-card-body>
                        </b-collapse>
                        </b-card>

                        <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block href="#" v-b-toggle.accordion-2 variant="white" class="accordion_dropdown">How to create group chat <span><font-awesome-icon icon="chevron-down" class="accordion-caret"/></span></b-button>
                        </b-card-header>
                        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                            <b-card-text class="faq_small_text">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</b-card-text>
                            </b-card-body>
                        </b-collapse>
                        </b-card>

                        <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block href="#" v-b-toggle.accordion-3 variant="white" class="accordion_dropdown">Font Size <span><font-awesome-icon icon="chevron-down" class="accordion-caret"/></span></b-button>
                        </b-card-header>
                        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                            <b-card-text class="faq_small_text">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</b-card-text>
                            </b-card-body>
                        </b-collapse>
                        </b-card>

                        <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block href="#" v-b-toggle.accordion-4 variant="white" class="accordion_dropdown">Wallpaper <span><font-awesome-icon icon="chevron-down" class="accordion-caret"/></span></b-button>
                        </b-card-header>
                        <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                            <b-card-text class="faq_small_text">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</b-card-text>
                            </b-card-body>
                        </b-collapse>
                        </b-card>

                        <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block href="#" v-b-toggle.accordion-5 variant="white" class="accordion_dropdown">Chat Setting <span><font-awesome-icon icon="chevron-down" class="accordion-caret"/></span></b-button>
                        </b-card-header>
                        <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                            <b-card-text class="faq_small_text">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</b-card-text>
                            </b-card-body>
                        </b-collapse>
                        </b-card>

                        <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block href="#" v-b-toggle.accordion-6 variant="white" class="accordion_dropdown">Privacy Setting <span><font-awesome-icon icon="chevron-down" class="accordion-caret"/></span></b-button>
                        </b-card-header>
                        <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                            <b-card-text class="faq_small_text">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</b-card-text>
                            </b-card-body>
                        </b-collapse>
                        </b-card>

                        <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block href="#" v-b-toggle.accordion-7 variant="white" class="accordion_dropdown">Change Profile Picture <span><font-awesome-icon icon="chevron-down" class="accordion-caret"/></span></b-button>
                        </b-card-header>
                        <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                            <b-card-text class="faq_small_text">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</b-card-text>
                            </b-card-body>
                        </b-collapse>
                        </b-card>

                        <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block href="#" v-b-toggle.accordion-8 variant="white" class="accordion_dropdown">How to block contact <span><font-awesome-icon icon="chevron-down" class="accordion-caret"/></span></b-button>
                        </b-card-header>
                        <b-collapse id="accordion-8" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                            <b-card-text class="faq_small_text">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</b-card-text>
                            </b-card-body>
                        </b-collapse>
                        </b-card>

                        <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block href="#" v-b-toggle.accordion-9 variant="white" class="accordion_dropdown">App Version <span><font-awesome-icon icon="chevron-down" class="accordion-caret"/></span></b-button>
                        </b-card-header>
                        <b-collapse id="accordion-9" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                            <b-card-text class="faq_small_text">GChat App - Version 1.0.0					    2017 - 2020</b-card-text>
                            </b-card-body>
                        </b-collapse>
                        </b-card>
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

    export default {
        name: "Help.vue",
        components: {
            
        },
        data() {
            return {
                
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