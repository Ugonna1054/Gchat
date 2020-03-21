import { ApiService } from "./api.services";

const userService = {
    //Signup
    Signup: (username, password, school, department, country, phone, region) => {
        return new Promise(function (resolve, reject) {
            ApiService.post("/users", {
                username,
                password,
                school,
                department,
                country,
                region,
                phone
            })
            .then(({ data }) => {
                resolve(data);
            })
            .catch(error => {
                reject(error.response.data);
             });
        });
    },

    //Login 
    Login: (email, password) => {
        return new Promise(function (resolve, reject) {
            ApiService.post("/auth/login", {
                email,
                password
            })
                .then(({ data }) => {
                    resolve(data);

                })
                .catch(error => {
                    reject(error.response.data);
                });
        });
    },

    //Logout 
    Logout: () => {
        return new Promise(function (resolve, reject) {
            ApiService.customRequest({
                method: "post",
                url: ApiService.getBaseUrl() + "/auth/logout"
            })
                .then(res => {
                    resolve(res.data.message);
                })
                .catch(err => {
                    reject(err.response.data);
                });
        });
    },

    //Get Current User Details
    Authorize: async () => {
        return await ApiService.get("/users/me")
            .then(res => {
                return Promise.resolve(res.data);
            })
            .catch(error => {
                return Promise.reject(error.response.data);
            });
    }
};

export { userService };
