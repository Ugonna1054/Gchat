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

    //Get all Group Messages connected to one user
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

};

export { chatService };
