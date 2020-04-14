import { ApiService } from "./api.services";

const chatService = {
    //get all contacts
    GetContacts: () => {
        return new Promise(function (resolve, reject) {
            ApiService.get("/users")
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error.response.data);
                });
        });
    },

    //Create New Group
    CreateGroup: ({name, members}) => {
        let newArr = [];
        members.forEach(elem => {
            newArr.push({
                member : elem,
                details:elem
            })
        });
        return new Promise(function (resolve, reject) {
            ApiService.post("/groups", {
                name,
                members : newArr
            })
                .then(({ data }) => {
                    resolve(data);

                })
                .catch(error => {
                    reject(error.response.data);
                });
        });
    },

     //Join existing Group
     JoinGroup: ({id, members}) => {
        let newArr = [];
        members.forEach(elem => {
            newArr.push({
                member : elem,
                details:elem
            })
        });
        return new Promise(function (resolve, reject) {
            ApiService.post(`/groups/join/${id}`, {
                members : newArr
            })
                .then(({ data }) => {
                    resolve(data);

                })
                .catch(error => {
                    reject(error.response.data);
                });
        });
    },


    //Get all Groups connected to one user
    GetGroups: () => {
        return new Promise(function (resolve, reject) {
            ApiService.get("/groups")
                .then(({ data }) => {
                    resolve(data);

                })
                .catch(error => {
                    reject(error.response.data);
                });
        });
    },

    //Get all Group Messages connected to one user
    GetGroupMessage: (id) => {
        return new Promise(function (resolve, reject) {
            ApiService.get(`/messages/${id}`)
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error.response.data);
                });
        });
    },

    //Post new Group Message
    PostMessage: ({message, group}) => {
        return new Promise(function (resolve, reject) {
            ApiService.post("/messages", {
                message,
                group
            })
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error.response.data);
                });
        });
    },

    //Post new Private Message
    PostMessagePrivate: ({message, receiver}) => {
        return new Promise(function (resolve, reject) {
            ApiService.post("/messages/private", {
                message,
                receiver
            })
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error.response.data);
                });
        });
    },

    //Get  specific Private Messages for a user on mounted of the /view route
    GetMessagePrivate: (id) => {
        return new Promise(function (resolve, reject) {
            ApiService.get(`/messages/private/${id}`)
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error.response.data);
                });
        });
    },

    //Get all Private Messages for a user on mounted of the /contacts route
    GetMessagePrivateAll: () => {
        return new Promise(function (resolve, reject) {
            ApiService.get(`/messages/private/all`)
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error.response.data);
                });
        });
    },


};

export { chatService };
