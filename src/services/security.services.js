import { ApiService } from "./api.services";

const securityService = {
    //Change password
    ChangePassword: ({ oldPassword, newPassword }) => {
        return new Promise(function (resolve, reject) {
            ApiService.put("/auth/changePassword", {
                oldPassword,
                newPassword
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

export { securityService };
